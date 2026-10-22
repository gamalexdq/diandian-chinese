/* ---------- llevar el progreso a otro dispositivo ----------
   The whole state travels after "#p=" (never sent to the server): JSON, deflated, base64url.
   Prefix D = deflate-raw, J = plain JSON for browsers without CompressionStream. */
const b64u = bytes => { let s = ''; for (const b of bytes) s += String.fromCharCode(b); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
const unb64u = str => { const s = atob(str.replace(/-/g, '+').replace(/_/g, '/')); return Uint8Array.from(s, c => c.charCodeAt(0)); };
const pipeBytes = async (bytes, stream) => new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer());
async function exportCode(){
  const o = JSON.parse(JSON.stringify(S));
  o.t = today(); // due days travel relative to this day: shorter code
  o.lang = LANG;
  o.srs = Object.entries(S.srs).map(([id, s]) => [id, s.b, s.due - o.t]);
  delete o.updatedAt;
  const raw = new TextEncoder().encode(JSON.stringify(o));
  if (typeof CompressionStream !== 'undefined'){ try { return 'D' + b64u(await pipeBytes(raw, new CompressionStream('deflate-raw'))); } catch(e) {} }
  return 'J' + b64u(raw);
}
async function importCode(text){
  const code = String(text).trim().replace(/^[\s\S]*#p=/, '').replace(/\s+/g, '');
  const bytes = unb64u(code.slice(1));
  const raw = code[0] === 'D' ? await pipeBytes(bytes, new DecompressionStream('deflate-raw')) : code[0] === 'J' ? bytes : null;
  if (!raw) throw new Error('bad code');
  const o = JSON.parse(new TextDecoder().decode(raw));
  // progress of the other language: open the app in that language with the same link
  if (o && (o.lang || 'zh') !== LANG){ setLang(o.lang === 'fr' ? 'fr' : 'zh', '#p=' + code); return new Promise(() => {}); }
  return cleanState(o);
}
// a link can come from anyone: keep only known fields, with the right types
function cleanState(o){
  if (!o || typeof o !== 'object' || !Array.isArray(o.srs)) throw new Error('bad state');
  const num = x => typeof x === 'number' && Number.isFinite(x);
  const int = (x, lo, hi) => num(x) ? Math.min(hi, Math.max(lo, Math.round(x))) : lo;
  const N = fresh();
  if (MODULES[o.mod]) N.mod = o.mod;
  if (o.secMod && typeof o.secMod === 'object') Object.keys(o.secMod).forEach(k => { if (MODULES[o.secMod[k]] && secOf(o.secMod[k]) === k) (N.secMod = N.secMod || {})[k] = o.secMod[k]; });
  N.xp = int(o.xp, 0, 1e7); N.streak = int(o.streak, 0, 1e5); N.best7 = int(o.best7, 0, 1e4);
  if (num(o.lastDay)) N.lastDay = Math.round(o.lastDay);
  [...new Set(['examBest', 'examBest1', 'examBest3', 'examBest4', 'examBest5', 'examBest6', 'examBest7', 'examHSK1', ...Object.values(MODULES).map(m => m.examKey)])].forEach(k => { if (num(o[k])) N[k] = int(o[k], 0, 100); });
  for (const u of UNITS){
    if (o.done && o.done[u.id]) N.done[u.id] = int(o.done[u.id], 1, 1e5);
    const L = o.lvl && o.lvl[u.id];
    if (L && typeof L === 'object'){
      const un = int(L.un, 1, 3), best = {};
      [1, 2, 3].forEach(n => { if (L.best && num(L.best[n])) best[n] = int(L.best[n], 0, 100); });
      N.lvl[u.id] = {un, sel:int(L.sel, 1, un), best};
    }
  }
  const t0 = num(o.t) ? Math.round(o.t) : 0;
  o.srs.forEach(e => { if (Array.isArray(e) && ITEMS[e[0]] && num(e[1]) && num(e[2])) N.srs[e[0]] = {b:int(e[1], 0, 6), due:t0 + Math.round(e[2])}; });
  return N;
}
const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
const summary = st => `${plural(Object.keys(st.done).length, 'unidad', 'unidades')} · ${st.xp} XP · ${plural(Object.keys(st.srs).length, 'palabra', 'palabras')} en repaso`;
function showIncoming(N){
  screen = 'sync';
  app.innerHTML = `<section class="card"><div class="kind">Progreso recibido</div><h2>¿Cargar este progreso?</h2>
    <div class="rules">
      <div class="rule"><div><b>Lo que trae el enlace</b><div class="muted">${summary(N)}</div></div></div>
      <div class="rule"><div><b>Lo que tienes en este dispositivo</b><div class="muted">${summary(S)}</div></div></div>
    </div>
    <p class="es">Si lo cargas, reemplaza el progreso de este dispositivo.</p>
    <div class="syncbtns"><button class="btn main big" id="inYes">Cargar progreso</button><button class="btn big" id="inNo">Ahora no</button></div></section>`;
  document.getElementById('inYes').onclick = () => { S = N; save(); homeNote = 'Listo: tu progreso se cargó en este dispositivo.'; renderHome(); };
  document.getElementById('inNo').onclick = renderHome;
}
function loadQR(text){
  const box = document.getElementById('qr');
  const draw = () => {
    if (!box.isConnected) return;
    try { const q = qrcode(0, 'L'); q.addData(text); q.make(); box.innerHTML = q.createSvgTag({cellSize:4, margin:2, scalable:true, alt:'Código QR con tu progreso'}); }
    catch(e) { box.remove(); }
  };
  if (window.qrcode) return draw();
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js';
  s.onload = draw; s.onerror = () => box.remove();
  document.head.appendChild(s);
}
async function showSync(){
  screen = 'sync';
  const link = location.href.split('#')[0] + '#p=' + await exportCode();
  app.innerHTML = `<section class="card"><div class="kind">Llevar mi progreso</div><h2>Ábrelo en tu otro dispositivo</h2>
    <div class="qr" id="qr" aria-label="Código QR"></div>
    <p class="es">Escanea el QR con el celular, o copia el enlace y envíatelo.</p>
    <textarea class="code" id="link" readonly rows="3" aria-label="Enlace con tu progreso">${esc(link)}</textarea>
    <div class="syncbtns"><button class="btn main" id="copy">Copiar enlace</button>${navigator.share ? '<button class="btn" id="share">Compartir</button>' : ''}</div>
    <p class="muted" style="font-size:14px">Lleva ${summary(S)}, la racha y el calendario de repaso. Es una foto de este momento: si sigues estudiando aquí, genera un enlace nuevo antes de cambiar de dispositivo.</p>
  </section>
  <section class="card"><div class="kind">¿Vienes de otro dispositivo?</div><h2>Pega tu enlace o código</h2>
    <textarea class="code" id="paste" rows="3" placeholder="https://…#p=…"></textarea>
    <div class="syncbtns"><button class="btn" id="load" disabled>Cargar</button></div><div class="muted" id="perr" role="status"></div>
  </section>
  <button class="btn big" id="back">Volver</button>`;
  loadQR(link);
  const copy = document.getElementById('copy'), ta = document.getElementById('link');
  copy.onclick = async () => {
    try { await navigator.clipboard.writeText(link); }
    catch(e) { ta.select(); try { document.execCommand('copy'); } catch(_) {} }
    copy.textContent = 'Copiado ✓'; setTimeout(() => { if (copy.isConnected) copy.textContent = 'Copiar enlace'; }, 2500);
  };
  ta.onclick = () => ta.select();
  const sh = document.getElementById('share');
  if (sh) sh.onclick = () => navigator.share({title:'Mi progreso en Diǎn Diǎn', url:link}).catch(() => {});
  const paste = document.getElementById('paste'), load = document.getElementById('load'), perr = document.getElementById('perr');
  paste.oninput = () => { load.disabled = !paste.value.trim(); perr.textContent = ''; };
  load.onclick = async () => {
    try { showIncoming(await importCode(paste.value)); }
    catch(e) { perr.textContent = 'Ese enlace o código no es válido o está incompleto. Cópialo entero e inténtalo otra vez.'; }
  };
  document.getElementById('back').onclick = renderHome;
}
let homeNote = '';
async function checkIncoming(){
  if (typeof location === 'undefined' || !location.hash.startsWith('#p=')) return;
  const code = location.hash.slice(3);
  try { history.replaceState(null, '', location.pathname + location.search); } catch(e) {}
  try { showIncoming(await importCode(code)); }
  catch(e) { homeNote = 'El enlace de progreso no es válido o llegó incompleto.'; renderHome(); }
}
setTimeout(checkIncoming, 0);
if (typeof window.addEventListener === 'function') window.addEventListener('hashchange', checkIncoming);

/* keyboard: 1–4 pick options, Enter checks / continues */
document.addEventListener('keydown', e => {
  if (screen !== 'session') return;
  if (e.key === 'Enter'){
    const b = document.getElementById('cont') || document.getElementById('next') || document.getElementById('check');
    if (b && !b.disabled){ e.preventDefault(); b.click(); }
    return;
  }
  if (/^[1-4]$/.test(e.key) && document.activeElement.tagName !== 'INPUT'){
    const o = app.querySelectorAll('.opt')[+e.key - 1]; if (o) o.click();
  }
});
