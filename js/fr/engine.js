/* ---------- engine pieces that depend on the language ---------- */
function frOthers(it, n){
  const fair = x => x.kind === 'word' && x.id !== it.id && x.h !== it.h && x.es !== it.es && loose(x.p) !== loose(it.p) && loose(x.h) !== loose(it.h);
  const all = Object.values(ITEMS).filter(fair);
  const tiers = [all.filter(x => x.unit === it.unit && x.cat === it.cat), all.filter(x => x.unit === it.unit), all.filter(x => x.cat === it.cat), all];
  const out = [];
  for (const t of tiers) for (const x of shuffle(t)) if (out.length < n && !out.includes(x) && !out.some(o => o.h === x.h || o.es === x.es || loose(o.p) === loose(x.p))) out.push(x);
  return out;
}
wordEx = function(it, mode){
  if (mode === 'hanzi') mode = 'pick';
  if (mode === 'chars') mode = 'dict';
  // countries: picking the translation is too obvious (Francia / la France), so they are matched and
  // completed with their article or preposition instead. Writing them stays the same
  if (it.cty && mode === 'meaning') return prepEx(pick(['match', 'match', 'pays', 'prep']), it.cty, it.id);
  if (it.cty && mode === 'pick') return prepEx(pick(['prep', 'pays']), it.cty, it.id);
  if (it.cty && mode === 'listen') return prepEx(pick(['listen', 'prep']), it.cty, it.id);
  const all = shuffle([it, ...frOthers(it, 3)]);
  const rev = {h:it.h, p:it.p, es:it.es};
  const frO = x => ({v:x.id, say:x.h, html:`<span class="han">${esc(x.h)}</span>${LV >= 2 ? '' : `<small>${pyHTML(x.p)}</small>`}`});
  const wide = all.some(x => x.h.length > 14);
  switch (mode){
    case 'meaning': return {t:'mc', item:it.id, kind:'¿Qué significa?', say:it.h, q:`<div class="frbig han">${esc(it.h)}</div><div class="pybig">${pyHint(it.p)}</div>${audioBtns(it.h)}`,
      options:all.map(x => ({v:x.id, html:esc(x.es)})), answer:it.id, rev, wide:all.some(x => x.es.length > 16)};
    case 'pick': return {t:'mc', item:it.id, kind:'Elige en francés', q:fcue(it.es), options:all.map(frO), answer:it.id, rev, wide};
    case 'listen': return {t:'mc', item:it.id, kind:'Escucha y elige', say:it.h, q:audioBtns(it.h, true), options:all.map(frO), answer:it.id, rev, wide};
    case 'type': return {t:'type', item:it.id, kind:'Escríbelo en francés', q:`${fcue(it.es)}${LV < 2 ? audioBtns(it.h) : ''}`, answer:it.h, ph:'Escribe en francés', hint:(it.cty ? 'Con su artículo: le, la, l\' o les. ' : '') + FR_TYPE_HINT, rev};
    case 'dict': return {t:'type', item:it.id, kind:'Dictado: escribe lo que oyes', say:it.h, q:audioBtns(it.h), answer:it.h, ph:'Escribe en francés', hint:FR_TYPE_HINT, rev};
    default: return {t:'speak', item:it.id, kind:'Dilo en voz alta', q:`${fcue(it.es)}<div class="hint">Dilo en francés antes de ver la respuesta. Recordar sin pistas es lo que fija la palabra.</div>`, rev};
  }
};
sentEx = function(it, mode){
  if (mode === 'speak') return fSpeak(it.id, it.es, it.s);
  if (mode === 'listen') return fTiles(it.id, 'Escucha y ordena', audioBtns(it.h), it.s, it.es, it.traps, it.alts, {say:it.h});
  return fTiles(it.id, 'Tradúcelo al francés', fcue(it.es), it.s, it.es, it.traps, it.alts);
};
const FR_PRON = [['ü', 'tu', 'di «i» con los labios redondos de «u»'], ['ö', 'deux', 'di «e» con los labios redondos'], ['ë', 'je', 'una e corta y relajada'],
  ['zh', 'bonjour', 'como la «ll» de Buenos Aires: zumba'], ['sh', 'chinois', 'como cuando pides silencio: «shhh»'], ['ã · õ · ẽ', 'enfant · bon · vin', 'vocales nasales: el aire sale por la nariz y la n no suena'],
  ['r', 'merci', 'en la garganta, parecida a una j suave'], ['è · é', 'très · été', 'è abierta; é cerrada, como sonriendo']];
const baseCard = cardHTML;
cardHTML = function(c){
  if (c.type === 'word'){
    const it = ITEMS[c.id];
    return `<div class="card center"><div class="kind">Palabra nueva</div><div class="frbig han">${esc(it.h)}</div><div class="pybig">${pyHTML(it.p)}</div>${audioBtns(it.h)}<div class="es">${esc(it.es)}</div>${it.tip ? `<div class="tip">${esc(it.tip)}</div>` : ''}</div>`;
  }
  if (c.type === 'sent'){
    const it = ITEMS[c.id];
    return `<div class="card center"><div class="kind">Frase modelo</div><div class="frbig han" style="font-size:30px">${esc(it.h)}</div>${audioBtns(it.h)}<div class="es">${esc(it.es)}</div></div>`;
  }
  if (c.type === 'frpron') return `<div class="card center"><div class="kind">Antes de empezar</div><h2>Cómo leer la pronunciación</h2>
    <p class="es">Debajo de cada palabra ves cómo suena, con letras del español. Las sílabas van separadas por «·» y el acento cae siempre en la última.</p>
    <div class="rules">${FR_PRON.map(r => `<div class="rule"><div><b class="pron">${esc(r[0])}</b> <span class="han">${esc(r[1])}</span><div class="muted">${esc(r[2])}</div></div><button class="audio" data-say="${esc(r[1].replace(/ · /g, ', '))}" aria-label="Escuchar">${ICON.play}</button></div>`).join('')}</div>
    <div class="tip">Es solo una ayuda: escucha siempre el audio. Desde el nivel 2 ya no aparece.</div></div>`;
  if (c.type === 'lvl') return c.lv === 2
    ? `<div class="card center"><div class="kind">Nivel 2</div><h2>Sin pronunciación escrita, más oído</h2>
      <p class="es">Ya no ves cómo suena cada palabra: la reconoces al oírla. Hay más dictados y escribes las palabras completas.</p>
      <div class="tip">Después de cada respuesta sigues viendo la pronunciación, para corregirte.</div></div>`
    : `<div class="card center"><div class="kind">Nivel 3</div><h2>Frases que nunca viste</h2>
      <p class="es">Cada vez se generan frases nuevas con lo de la unidad: otros nombres, números, países y personas. Respondes y preguntas.</p>
      <div class="tip">No memorices frases: aplica la regla de la unidad.</div></div>`;
  return baseCard(c);
};
