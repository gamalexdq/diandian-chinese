/* ---------- home ---------- */
const SECS = {base:{tab:'Principiante', sub:'7 rutas'}, hsk:{tab:'HSK 1', sub:'6 semanas'}};
function secOf(k){ return (MODULES[k] && MODULES[k].sec) || 'base'; }
function renderStats(){
  document.getElementById('stats').innerHTML = `<span class="chip" title="Días seguidos">${ICON.fire}${S.streak}</span><span class="chip" title="Puntos">${ICON.star}${S.xp}</span>`;
}
function renderHome(){
  screen = 'home'; renderStats();
  const due = dueIds().length;
  const modId = MODULES[S.mod] ? S.mod : Object.keys(MODULES)[0], M = MODULES[modId], sec = secOf(modId);
  const units = UNITS.filter(u => u.mod === modId);
  const secs = [...new Set(Object.keys(MODULES).map(secOf))];
  const secUnits = x => UNITS.filter(u => secOf(u.mod) === x);
  if (document.documentElement.dataset) document.documentElement.dataset.sec = sec;
  const nextU = units.find(u => !S.done[u.id]);
  const noVoice = voicesChecked && !(LANG === 'fr' ? frVoice : zhVoice);
  app.innerHTML = `
  <div class="langs" role="group" aria-label="Idioma que aprendes">${[['zh', '中文 Chino'], ['fr', 'Français · Francés']].map(([l, t]) => `<button class="lang${l === LANG ? ' on' : ''}" data-lang="${l}" aria-pressed="${l === LANG}">${t}</button>`).join('')}</div>
  ${secs.length > 1 ? `<div class="secs" role="group" aria-label="Nivel del curso">${secs.map(x => `<button class="sec${x === sec ? ' on' : ''}" data-sec="${x}" aria-pressed="${x === sec}"><b>${SECS[x].tab}</b><small>${SECS[x].sub} · ${secUnits(x).filter(u => S.done[u.id]).length}/${secUnits(x).length}</small></button>`).join('')}</div>` : ''}
  <div class="mods" role="tablist" aria-label="Ruta">${Object.keys(MODULES).filter(k => secOf(k) === sec).map(k => `<button class="mod${k === modId ? ' on' : ''}" role="tab" aria-selected="${k === modId}" data-mod="${k}">${MODULES[k].tab}</button>`).join('')}</div>
  <section class="hero"><div class="eyebrow">${sec === 'hsk' ? `HSK 1 · Semana ${M.n}` : `Ruta ${M.n}`} · ${M.tab}</div>
    <div class="han">${M.zh}</div>
    <div class="py">${pyHTML(M.p)} <button class="audio" data-say="${M.zh}" aria-label="Escuchar">${ICON.play}</button></div>
    <div class="muted">${esc(M.es)}</div>
  </section>
  ${homeNote ? `<div class="note ok" role="status">${esc(homeNote)}</div>` : ''}
  ${noVoice ? `<div class="note">Tu navegador no tiene voz en ${LANG === 'fr' ? 'francés' : 'chino'}, así que no habrá audio. En Chrome o Edge con conexión suele funcionar; en Windows también puedes instalar el paquete de voz de ${LANG === 'fr' ? 'francés' : 'chino'} (Configuración → Hora e idioma → Voz).</div>` : ''}
  ${due
    ? `<button class="cta" id="aRev"><div><b>${ICON.cards.replace('<svg', '<svg width="18" height="18"')} Repaso de hoy</b><span>${plural(due, 'palabra', 'palabras')} para recordar antes de seguir</span></div><span class="go" aria-hidden="true">→</span></button>`
    : nextU
    ? `<button class="cta" id="aGo"><div><b>Continuar</b><span>Unidad ${units.indexOf(nextU) + 1} · ${esc(nextU.title)} · N${lvPeek(nextU.id).sel}</span></div><span class="go" aria-hidden="true">→</span></button>`
    : `<button class="cta" id="aGo"><div><b>Ruta completa</b><span>Pon a prueba todo con el examen de la ruta</span></div><span class="go" aria-hidden="true">→</span></button>`}
  <div class="sect"><h2>Unidades</h2><span class="muted" style="font-size:14px">${units.filter(u => S.done[u.id]).length}/${units.length} unidades</span></div>
  <ol class="path">${units.map((u, k) => {
    const done = S.done[u.id], nx = nextU && nextU.id === u.id, L = lvPeek(u.id);
    return `<li class="unit${nx ? ' next' : ''}"><div class="tzg"><span class="han">${u.key}</span></div>
      <div style="min-width:0"><div class="stat ${done ? 'done' : nx ? 'nx' : ''}">${done ? 'Hecha' : nx ? 'Siguiente' : 'Unidad ' + (k + 1)}</div><h3>${esc(u.title)}</h3><div class="han muted" style="font-size:15px">${esc(u.zh)}</div><div class="ref">${esc(u.ref)}</div>
      <div class="lvls" role="group" aria-label="Nivel de ${esc(u.title)}">${[1, 2, 3].map(n => n > L.un
        ? `<button class="lv" disabled title="Consigue ${PASS_PCT}% en el nivel ${n - 1} para desbloquearlo">${ICON.lock}N${n}</button>`
        : `<button class="lv${L.sel === n ? ' on' : ''}" data-u="${u.id}" data-lv="${n}" aria-pressed="${L.sel === n}">N${n}</button>`).join('')}
      <span class="lvbest">${L.best[L.sel] != null ? `mejor ${L.best[L.sel]}%` : L.un < 3 && L.sel === L.un ? `${PASS_PCT}% abre N${L.un + 1}` : ''}</span></div></div>
      <button class="btn ${nx ? 'main' : ''}" data-unit="${u.id}">${done ? (L.sel > 1 ? 'Jugar N' + L.sel : 'Repetir') : 'Empezar'}</button></li>`;
  }).join('')}</ol>
  <div class="sect"><h2>Práctica extra</h2></div>
  <div class="actions">
    <button class="act" id="aExam"><b>Examen de la ruta</b><span>${S[M.examKey] != null ? `Mejor: ${S[M.examKey]}%` : 'Todo lo de la ruta, mezclado'}</span></button>
    ${modId === 'm1'
      ? `<button class="act" id="aEar"><b>Entrena el oído</b><span>Tonos y sonidos difíciles, en 3 minutos</span></button>`
      : modId === 'm2'
      ? `<button class="act" id="aG7"><b><span class="han">逢七过</span> No digas 7</b><span>${S.best7 ? `Récord: ${S.best7}` : 'Un juego clásico para contar'}</span></button>`
      : `<button class="act" id="aDlg"><b>Diálogos</b><span>${esc(M.dlgSub || 'Restaurante, mercado y más')}</span></button>`}
    ${sec === 'hsk' ? `<button class="act primary" id="aFinal" style="grid-column:1/-1"><b>Examen final HSK 1</b><span>${S.examHSK1 != null ? `Mejor: ${S.examHSK1}% · ` : ''}Escuchar y leer, con lo de las seis semanas</span></button>` : ''}
  </div>
  <section class="method"><h2>Cómo está pensado</h2><ol>
    <li><b>Lecciones cortas</b> de 3 a 5 minutos: primero ves y escuchas la palabra, luego la practicas.</li>
    <li><b>Recordar en lugar de releer.</b> Vas de reconocer (elegir) a producir (${LANG === 'fr' ? 'escribir la palabra' : 'escribir pinyin'}, armar la oración, decirla en voz alta), que es lo que más fija.</li>
    <li><b>Lo que fallas vuelve</b> al final de la misma lección, hasta que te sale.</li>
    <li><b>Tres niveles por unidad.</b> Con ${PASS_PCT}% se abre el siguiente: N2 quita ${LANG === 'fr' ? 'la pronunciación escrita' : 'el pinyin'} y suma dictados; N3 genera frases nuevas cada vez.</li>
    <li><b>Repaso espaciado.</b> Cada palabra vuelve en 1, 2, 4, 8 y 16 días si la aciertas; si la fallas, vuelve mañana. 10 minutos al día rinden más que 1 hora el domingo.</li>
  </ol></section>
  <div class="foot"><span>${esc(syncNote)}</span><button class="linkbtn" id="sync">Llevar mi progreso a otro dispositivo</button><button class="linkbtn" id="reset">Borrar mi progreso</button></div>`;
  homeNote = '';
  document.getElementById('sync').onclick = showSync;
  app.querySelectorAll('[data-unit]').forEach(b => b.onclick = () => startSession(lessonPlan(UNITS.find(u => u.id === b.dataset.unit), lvPeek(b.dataset.unit).sel)));
  app.querySelectorAll('[data-lv]').forEach(b => b.onclick = () => { const L = lvState(b.dataset.u), n = +b.dataset.lv; if (n <= L.un && n !== L.sel){ L.sel = n; save(); renderHome(); } });
  const exam = () => startSession(modId === 'm3' ? examPlan3() : modId === 'm1' ? examPlan1() : modId === 'm2' ? examPlan() : examPlanR(modId));
  const rv = document.getElementById('aRev'), go = document.getElementById('aGo');
  if (rv) rv.onclick = () => startSession(reviewPlan());
  if (go) go.onclick = () => nextU ? startSession(lessonPlan(nextU, lvPeek(nextU.id).sel)) : exam();
  document.getElementById('aExam').onclick = exam;
  if (modId === 'm1') document.getElementById('aEar').onclick = () => startSession(earPlan());
  else if (modId === 'm2') document.getElementById('aG7').onclick = startG7;
  else document.getElementById('aDlg').onclick = () => startSession(M.dlgPlan ? M.dlgPlan() : M.dialogs ? dialogPlan(M.dialogs, M.dlgItem, M.pool) : dialogPlan());
  app.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => { if (b.dataset.lang !== LANG) setLang(b.dataset.lang); });
  app.querySelectorAll('[data-mod]').forEach(b => b.onclick = () => { if (S.mod !== b.dataset.mod){ S.mod = b.dataset.mod; save(); renderHome(); } });
  // each section remembers its last route
  app.querySelectorAll('[data-sec]').forEach(b => b.onclick = () => {
    const to = b.dataset.sec; if (to === sec) return;
    S.secMod = S.secMod || {}; S.secMod[sec] = modId;
    const back = S.secMod[to];
    S.mod = MODULES[back] && secOf(back) === to ? back : Object.keys(MODULES).find(k => secOf(k) === to);
    save(); renderHome();
  });
  const fin = document.getElementById('aFinal');
  if (fin) fin.onclick = () => startSession(examPlanHSK());
  const rs = document.getElementById('reset');
  rs.onclick = () => {
    if (rs.dataset.arm){ S = fresh(); save(); renderHome(); return; }
    rs.dataset.arm = '1'; rs.textContent = 'Toca otra vez para confirmar'; rs.style.color = 'var(--bad)';
    setTimeout(() => { if (rs.isConnected){ delete rs.dataset.arm; rs.textContent = 'Borrar mi progreso'; rs.style.color = ''; } }, 4000);
  };
}
