/* ---------- session engine ---------- */
let screen = 'home', sess = null;
function startSession(plan){
  sess = {...plan, ci:0, i:0, queue:plan.ex.slice(), firstTry:{}, misses:[], correct:0, answered:0, retries:{}, firstN:0, firstOk:0};
  screen = 'session';
  if (!sess.queue.length) return renderHome();
  renderStep();
}
function totalSteps(){ return sess.cards.length + sess.queue.length; }
function doneSteps(){ return sess.ci + sess.i; }
function header(){
  return `<div class="sbar"><button class="xbtn" id="quit" aria-label="Salir">${ICON.x}</button><div class="prog"><i style="width:${Math.round(100 * doneSteps() / totalSteps())}%"></i></div><span class="chip">${esc(sess.title)}${sess.level ? ' · N' + sess.level : ''}</span></div>`;
}
function renderStep(){
  window.scrollTo(0, 0);
  if (sess.ci < sess.cards.length){
    const c = sess.cards[sess.ci];
    app.innerHTML = header() + cardHTML(c) + `<div class="feed"><button class="btn main big" id="next">${sess.ci === sess.cards.length - 1 ? 'Empezar práctica' : 'Siguiente'}</button></div>`;
    bindQuit();
    if (c.type === 'word' || c.type === 'sent') say(ITEMS[c.id].h);
    document.getElementById('next').onclick = () => { sess.ci++; renderStep(); };
    document.getElementById('next').focus({preventScroll:true});
    return;
  }
  if (sess.i >= sess.queue.length) return finish();
  renderEx(sess.queue[sess.i]);
}
function bindQuit(){ document.getElementById('quit').onclick = () => { if (window.speechSynthesis) speechSynthesis.cancel(); screen = 'home'; renderHome(); }; }

// tiles like 喜欢， and 喜欢 differ only by the comma: where it lands must not decide the answer
const noPunct = t => String(t).replace(/[，。？！、,.?!;:«»…\s]/g, '');
function renderEx(ex){
  let body = `<div class="card${ex.t === 'tiles' || ex.t === 'type' || ex.t === 'digits' ? '' : ''}"><div class="kind">${esc(ex.kind)}</div><div class="card center" style="padding:0">${ex.q}</div>`;
  if (ex.t === 'mc'){
    body += `<div class="opts${ex.wide ? ' wide' : ''}" role="group">${ex.options.map((o, k) => `<button class="opt" data-v="${esc(o.v)}"><span class="k">${k + 1}</span>${o.html}</button>`).join('')}</div>`;
  } else if (ex.t === 'tiles'){
    body += `<div class="tray" id="tray" aria-label="Tu respuesta"></div><div class="bank" id="bank">${ex.bank.map((b, k) => `<button class="tile" data-k="${k}"><span class="han">${esc(b.h)}</span>${b.p && LV < 2 ? `<small>${pyHTML(b.p)}</small>` : ''}</button>`).join('')}</div>`;
  } else if (ex.t === 'type' || ex.t === 'digits'){
    body += `<div><input class="ans" id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" ${ex.t === 'digits' ? 'inputmode="numeric" placeholder="Ej.: 47"' : `placeholder="${esc(ex.ph || 'Ej.: xian zai o xiàn zài')}"`}><div class="hint" style="margin-top:6px">${ex.t === 'type' ? (ex.hint || 'Los tonos son opcionales. Si los escribes bien, te lo digo.') : (ex.hint || 'Escribe el número con cifras.')}</div></div>`;
  } else if (ex.t === 'match'){
    const col = (side, xs) => `<div class="mcol">${xs.map((x, k) => `<button class="mt" data-side="${side}" data-k="${k}">${x.html}</button>`).join('')}</div>`;
    body += `<div class="match" role="group" aria-label="Pares">${col('l', ex.left)}${col('r', ex.right)}</div>`;
  } else if (ex.t === 'speak'){
    body += '';
  }
  body += '</div>';
  const foot = ex.t === 'speak'
    ? `<div class="feed" id="feed"><button class="btn main big" id="check">Mostrar respuesta</button></div>`
    : `<div class="feed" id="feed"><button class="btn main big" id="check" disabled>Comprobar</button></div>`;
  app.innerHTML = header() + body + foot;
  bindQuit();
  if (ex.say) setTimeout(() => say(ex.say), 250);
  const check = document.getElementById('check');
  let value = null;
  if (ex.t === 'mc'){
    app.querySelectorAll('.opt').forEach(b => b.onclick = () => {
      if (sess.locked) return;
      app.querySelectorAll('.opt').forEach(x => x.classList.remove('sel'));
      b.classList.add('sel'); value = b.dataset.v; check.disabled = false;
      const o = ex.options.find(o => String(o.v) === value);
      if (o.say && LV < 2) say(o.say);
    });
  } else if (ex.t === 'tiles'){
    const tray = document.getElementById('tray'), bank = document.getElementById('bank');
    const placed = [];
    const sync = () => { value = placed.map(k => ex.bank[k].h).join(''); check.disabled = !placed.length; };
    bank.querySelectorAll('.tile').forEach(b => b.onclick = () => {
      if (sess.locked || b.classList.contains('ghost')) return;
      const k = +b.dataset.k; placed.push(k); b.classList.add('ghost');
      const t = b.cloneNode(true); t.classList.remove('ghost');
      t.onclick = () => { if (sess.locked) return; placed.splice(placed.indexOf(k), 1); t.remove(); b.classList.remove('ghost'); sync(); };
      tray.appendChild(t); say(ex.bank[k].h, 1); sync();
    });
  } else if (ex.t === 'type' || ex.t === 'digits'){
    const inp = document.getElementById('ans');
    inp.oninput = () => { value = inp.value; check.disabled = !inp.value.trim(); };
    inp.focus({preventScroll:true});
  } else if (ex.t === 'match'){
    // tap one on each side to pair them; tapping a paired one undoes its pair
    const pairs = {}, btn = (side, k) => app.querySelector(`.mt[data-side="${side}"][data-k="${k}"]`);
    let sel = null;
    const paint = () => {
      app.querySelectorAll('.mt').forEach(b => { b.classList.remove('sel'); delete b.dataset.p; });
      Object.keys(pairs).forEach(l => { btn('l', l).dataset.p = btn('r', pairs[l]).dataset.p = l % 4 + 1; });
      if (sel) btn(sel.side, sel.k).classList.add('sel');
      value = pairs; check.disabled = Object.keys(pairs).length < ex.left.length;
    };
    app.querySelectorAll('.mt').forEach(b => b.onclick = () => {
      if (sess.locked) return;
      const side = b.dataset.side, k = +b.dataset.k;
      if (side === 'l' && ex.left[k].say) say(ex.left[k].say, 1);
      const l = side === 'l' ? k : Object.keys(pairs).find(x => pairs[x] === k);
      if (l != null && pairs[l] != null){ delete pairs[l]; sel = {side, k}; return paint(); }
      if (!sel || sel.side === side) sel = sel && sel.k === k && sel.side === side ? null : {side, k};
      else { pairs[side === 'l' ? k : sel.k] = side === 'l' ? sel.k : k; sel = null; }
      paint();
    });
  }
  sess.locked = false;
  check.onclick = () => {
    if (ex.t === 'speak') return showSelfGrade(ex);
    let ok = false, perfect = false;
    if (ex.t === 'mc') ok = String(value) === String(ex.answer);
    else if (ex.t === 'tiles') ok = [].concat(ex.answer).some(a => noPunct(a).toLowerCase() === noPunct(value).toLowerCase());
    else if (ex.t === 'digits') ok = value.replace(/\D/g, '') === ex.answer;
    else if (ex.t === 'match'){
      ok = ex.left.every((x, k) => ex.right[value[k]].v === x.a);
      ex.left.forEach((x, k) => { const good = ex.right[value[k]].v === x.a; app.querySelector(`.mt[data-side="l"][data-k="${k}"]`).classList.add(good ? 'ok' : 'no'); });
    }
    else { const hit = [].concat(ex.answer).find(a => loose(value) === loose(a)); ok = hit != null; perfect = ok && strict(value) === strict(hit); }
    if (ex.t === 'mc') app.querySelectorAll('.opt').forEach(b => { if (b.dataset.v === String(ex.answer)) b.classList.add('ok'); else if (b.dataset.v === value) b.classList.add('no'); });
    grade(ex, ok, perfect);
  };
}
function revHTML(r){ return `<div class="ansline"><span class="han">${esc(r.h)}</span><span>${pyHTML(r.p)}</span><span class="muted">${esc(r.es)}</span>${`<button class="audio" data-say="${esc(r.h)}" aria-label="Escuchar">${ICON.play}</button>`}</div>`; }
function showSelfGrade(ex){
  sess.locked = true;
  const feed = document.getElementById('feed');
  feed.innerHTML = `<h3>¿Lo dijiste así?</h3>${revHTML(ex.rev)}<div class="selfrow"><button class="btn" id="sgNo">Me equivoqué</button><button class="btn main" id="sgOk">Lo dije bien</button></div>`;
  say(ex.rev.h);
  document.getElementById('sgOk').onclick = () => advance(ex, true);
  document.getElementById('sgNo').onclick = () => advance(ex, false);
}
function grade(ex, ok, perfect){
  sess.locked = true;
  const feed = document.getElementById('feed');
  feed.className = 'feed ' + (ok ? 'ok' : 'no');
  const praise = LANG === 'fr' ? (perfect ? '¡Perfecto, con tildes!' : pick(['¡Bien!', '¡Correcto!', 'Très bien !', 'Bravo !'])) : perfect ? '¡Perfecto, con tonos!' : pick(['¡Bien!', '¡Correcto!', '¡Eso es!', '对！ Duì!']);
  feed.innerHTML = `<h3>${ok ? praise : 'Respuesta correcta:'}</h3>${revHTML(ex.rev)}${!ok && !sess.exam ? '<div class="hint">La volverás a ver antes de terminar.</div>' : ''}<button class="btn main big" id="cont">Continuar</button>`;
  say(ex.rev.h);
  const c = document.getElementById('cont'); c.focus({preventScroll:true});
  c.onclick = () => advance(ex, ok);
}
function advance(ex, ok){
  const id = ex.item;
  sess.answered++;
  if (ok) { sess.correct++; S.xp += 1; }
  if (!ex.retry){ sess.firstN++; if (ok) sess.firstOk++; }
  if (!(id in sess.firstTry)) sess.firstTry[id] = ok;
  else if (!ok) sess.firstTry[id] = false;
  if (!ok){
    if (!sess.misses.some(m => m.h === ex.rev.h)) sess.misses.push(ex.rev);
    sess.retries[id] = (sess.retries[id] || 0) + 1;
    if (!sess.exam && sess.retries[id] <= 2){
      const again = ex.redo ? ex.redo() : exFor(id);
      again.retry = true; again.redo = ex.redo;
      sess.queue.push(again);
    }
  }
  sess.i++;
  renderStep();
}
function finish(){
  const ids = Object.keys(sess.firstTry);
  if (sess.unit){
    const u = UNITS.find(u => u.id === sess.unit);
    u.items.concat(ids).forEach(id => { if (!S.srs[id] && ITEMS[id]) S.srs[id] = {b:1, due: today() + 1}; });
    ids.forEach(id => { if (!sess.firstTry[id]) S.srs[id] = {b:1, due: today()}; });
    S.done[sess.unit] = (S.done[sess.unit] || 0) + 1;
    S.xp += 10;
  } else {
    ids.forEach(id => srsMark(id, sess.firstTry[id]));
    S.xp += 5;
  }
  const pct = Math.round(100 * sess.firstOk / Math.max(1, sess.firstN));
  let lvMsg = '';
  if (sess.unit){
    const L = lvState(sess.unit), lv = sess.level || 1;
    L.best[lv] = Math.max(L.best[lv] || 0, pct);
    if (lv < 3 && pct >= PASS_PCT && L.un <= lv){
      L.un = lv + 1; L.sel = lv + 1;
      lvMsg = `<div class="unlock"><b>Nivel ${lv + 1} desbloqueado</b><span>${lv + 1 === 2 ? (LANG === 'fr' ? 'Sin pronunciación escrita y con más dictados.' : 'Sin pinyin y con más dictados.') : (LANG === 'fr' ? 'Frases nuevas cada vez.' : 'Frases nuevas cada vez, sin pinyin.')} Queda seleccionado para la próxima vez. Puedes volver a un nivel anterior cuando quieras.</span></div>`;
    } else if (lv < 3 && L.un <= lv){
      lvMsg = `<div class="hint">Con ${PASS_PCT}% o más desbloqueas el nivel ${lv + 1}. Esta vez: ${pct}%.</div>`;
    }
  }
  if (sess.exam){ const key = sess.examKey || 'examBest'; S[key] = Math.max(S[key] || 0, pct); }
  bumpStreak(); save();
  screen = 'result';
  const due = dueIds().length;
  app.innerHTML = `<div class="result"><div class="eyebrow">${esc(sess.title)} · terminado</div><div class="big">${pct}%</div><div class="es">acertaste al primer intento</div>${lvMsg}
    <div class="row"><span class="chip">${ICON.fire} racha de ${S.streak} día${S.streak === 1 ? '' : 's'}</span><span class="chip">${ICON.star} ${S.xp} XP</span></div>
    ${sess.misses.length ? `<div class="misslist"><div class="kind" style="border:0;background:none;padding:0">Para repasar (vuelven en tu próximo repaso)</div>${sess.misses.slice(0, 8).map(r => `<div><span class="han">${esc(r.h)}</span><span>${pyHTML(r.p)}</span><span class="muted">${esc(r.es)}</span></div>`).join('')}</div>` : ''}
    <div class="row">${due ? `<button class="btn main" id="goRev">Repasar ${due} pendientes</button>` : ''}<button class="btn" id="goHome">Volver al inicio</button></div></div>`;
  app.addEventListener('click', function once(e){ if (e.target.id === 'goHome'){ app.removeEventListener('click', once); screen = 'home'; renderHome(); } if (e.target.id === 'goRev'){ app.removeEventListener('click', once); startSession(reviewPlan()); } });
}
