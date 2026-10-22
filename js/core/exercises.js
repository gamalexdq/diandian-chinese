/* ---------- exercise builders ---------- */
const tzg = h => `<div class="tzgrow">${[...h.replace(/[？。，！]/g,'')].map(c => `<div class="tzg"><span class="han">${esc(c)}</span></div>`).join('')}</div>`;
let LV = 1; // current session level: 2+ hides pinyin in prompts and tiles (feedback keeps it)
const pyHint = p => LV >= 2 ? '' : pyHTML(p);
const reveal = it => ({h: it.h, p: it.p, es: it.es});
const HOMO = {'他':'她', '她':'他'};
function sameUnitWords(it, n){
  const fair = x => x.kind === 'word' && x.id !== it.id && x.h !== it.h && x.es !== it.es && loose(x.p) !== loose(it.p);
  let pool = shuffle(Object.values(ITEMS).filter(x => fair(x) && x.unit === it.unit));
  if (pool.length < n) pool = pool.concat(shuffle(Object.values(ITEMS).filter(x => fair(x) && x.unit !== it.unit)));
  const out = [];
  for (const x of pool) if (out.length < n && !out.some(o => o.h === x.h || o.es === x.es || loose(o.p) === loose(x.p))) out.push(x);
  return out;
}
// the Spanish cue without its romanization: "fideos salteados (chaomian)" → "fideos salteados"
function cue(it){
  const key = loose(it.p);
  if (key.length < 3) return it.es;
  let c = it.es.replace(/\s*\(([^)]*)\)/g, (m, inner) => loose(inner) === key ? '' : m).trim();
  const m = c.match(/^(\S+)\s*\((.*)\)$/);
  if (m && loose(m[1]) === key) c = m[2];
  return c || it.es;
}
function wordEx(it, mode){
  const others = sameUnitWords(it, 3);
  const all = shuffle([it, ...others]);
  switch (mode){
    case 'meaning': return {t:'mc', item:it.id, kind:'¿Qué significa?', say:it.h, q:`${tzg(it.h)}<div class="pybig">${pyHint(it.p)}</div>${audioBtns(it.h)}`,
      options: all.map(x => ({v:x.id, html:esc(cue(x))})), answer:it.id, rev:reveal(it)};
    case 'hanzi': return {t:'mc', item:it.id, kind:'Elige los caracteres', q:`<div class="qtext">${esc(cue(it))}</div>`,
      options: all.map(x => ({v:x.id, say:x.h, html:`<span class="han">${esc(x.h)}</span>${LV >= 2 ? '' : `<small>${pyHTML(x.p)}</small>`}`})), answer:it.id, rev:reveal(it)};
    case 'listen': return {t:'mc', item:it.id, kind:'Escucha y elige', say:it.h, q:audioBtns(it.h, true),
      options: all.map(x => ({v:x.id, say:x.h, html:`<span class="han">${esc(x.h)}</span>${LV >= 2 ? '' : `<small>${pyHTML(x.p)}</small>`}`})), answer:it.id, rev:reveal(it)};
    case 'type': return {t:'type', item:it.id, kind:'Escribe el pinyin', q:`${tzg(it.h)}<div class="es">${esc(cue(it))}</div>${LV < 2 ? audioBtns(it.h) : ''}`,
      answer:pyPlain(it.p), rev:reveal(it)};
    case 'chars': case 'dict': {
      const chars = [...it.h.replace(/[？。，！]/g, '')];
      const pool = [...new Set(Object.values(ITEMS).filter(x => x.kind === 'word').flatMap(x => [...x.h.replace(/[？。]/g, '')]))].filter(c => !chars.includes(c) && !chars.some(x => HOMO[x] === c));
      const bank = shuffle([...chars, ...shuffle(pool).slice(0, Math.max(3, 6 - chars.length))].map(c => ({h:c, p:''})));
      return mode === 'chars'
        ? {t:'tiles', item:it.id, kind:'Escríbelo con caracteres', q:`<div class="qtext">${esc(cue(it))}</div>`, bank, answer:chars.join(''), rev:reveal(it)}
        : {t:'tiles', item:it.id, kind:'Dictado: escribe lo que oyes', say:it.h, q:audioBtns(it.h), bank, answer:chars.join(''), rev:reveal(it)};
    }
    case 'speak': return {t:'speak', item:it.id, kind:'Dilo en voz alta', q:`<div class="qtext">${esc(cue(it))}</div><div class="hint">Dilo en chino antes de ver la respuesta. Recordar sin pistas es lo que fija la palabra.</div>`, rev:reveal(it)};
  }
}
function sentEx(it, mode){
  if (mode === 'speak') return {t:'speak', item:it.id, kind:'Dilo en voz alta', q:`<div class="qtext">${esc(it.es)}</div><div class="hint">${it.unit[0] === 'u' ? 'Primero cuándo, luego la acción.' : 'Dilo en chino antes de ver la respuesta.'}</div>`, rev:reveal(it)};
  const ans = it.chunks.map(c => c.h).join('');
  const pool = {c:DISTRACT3, a:DISTRACT1, d:D4, e:D5, f:D6, h:D7, k:DK}[it.unit[0]] || DISTRACT;
  const extra = shuffle(uniqBy(pool, d => noPunct(d.h)).filter(d => !it.chunks.some(c => noPunct(c.h) === noPunct(d.h) || homo(c, d)))).slice(0, 3);
  const bank = shuffle([...it.chunks, ...extra]);
  const answers = expandAns([...orders(it.chunks), ...(it.alt || [])]);
  if (mode === 'listen') return {t:'tiles', item:it.id, kind:'Escucha y ordena', say:it.h, q:audioBtns(it.h), bank, answer:answers, rev:reveal(it)};
  return {t:'tiles', item:it.id, kind:'Traduce al chino', q:`<div class="qtext">${esc(it.es)}</div>`, bank, answer:answers, rev:reveal(it)};
}
function numEx(mode){
  const n = rint(11, 99), zh = numZh(n), py = numPy(n);
  const rev = {h:zh, p:py, es:String(n)};
  if (mode === 'tiles'){
    const chars = [...zh].map(c => ({h:c, p:NPY[NZH.indexOf(c)]}));
    const extra = shuffle(NZH.slice(1).filter(c => !zh.includes(c))).slice(0, 3).map(c => ({h:c, p:NPY[NZH.indexOf(c)]}));
    return {t:'tiles', item:'g-num', kind:'Escribe el número en chino', q:`<div class="g7num">${n}</div>`, bank:shuffle([...chars, ...extra]), answer:zh, rev};
  }
  if (mode === 'listen') return {t:'digits', item:'g-num', kind:'Escucha y escribe el número', say:zh, q:audioBtns(zh), answer:String(n), rev};
  return {t:'digits', item:'g-num', kind:'¿Qué número es?', q:tzg(zh), answer:String(n), rev};
}
function timeEx(mode){
  const h = rint(1, 12);
  const rev = {h:hourZh(h), p:hourPy(h), es:`las ${h} en punto`};
  if (mode === 'listen'){
    const opts = shuffle([h, ...shuffle([1,2,3,4,5,6,7,8,9,10,11,12].filter(x => x !== h)).slice(0, 3)]);
    return {t:'mc', item:'g-time', kind:'Escucha y elige el reloj', say:'现在' + hourZh(h), q:audioBtns('现在' + hourZh(h)),
      options: opts.map(x => ({v:String(x), html:clockSVG(x)})), answer:String(h), rev:{...rev, h:'现在' + rev.h, p:'xiàn·zài ' + rev.p}};
  }
  if (mode === 'type') return {t:'type', item:'g-time', kind:'Escribe la hora en pinyin', q:`<div class="clockwrap">${clockSVG(h)}</div>${LV < 2 ? audioBtns(hourZh(h)) : ''}`, answer:pyPlain(hourPy(h)), rev};
  const wrong = h === 2 ? ['二点'] : [];
  const pool = shuffle([1,3,4,5,6,7,8,9,10,11,12].filter(x => x !== h)).map(hourZh);
  const opts = shuffle([hourZh(h), ...wrong, ...pool].slice(0, 4));
  if (!opts.includes(hourZh(h))) opts[0] = hourZh(h);
  return {t:'mc', item:'g-time', kind:'¿Qué hora es?', q:`<div class="clockwrap">${clockSVG(h)}</div>`,
    options: shuffle(opts).map(x => ({v:x, say:x, html:`<span class="han">${x}</span>${LV >= 2 ? '' : `<small>${pyHTML(x === '二点' ? 'èr diǎn' : hourPy([1,2,3,4,5,6,7,8,9,10,11,12].find(n => hourZh(n) === x)))}</small>`}`})), answer:hourZh(h), rev};
}
const PERIOD_HOURS = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
function periodEx(mode){
  const h = pick(PERIOD_HOURS), per = periodOf(h);
  const rev = {h:per.h + hourZh(h), p:per.p + ' ' + hourPy(h), es:`${h12(h)}:00, ${per.es}`};
  if (mode === 'listen'){
    const cands = shuffle(PERIOD_HOURS.filter(x => x !== h && (x % 12 === h % 12 || Math.random() < .3))).slice(0, 3);
    const opts = shuffle([h, ...cands]);
    return {t:'mc', item:'g-period', kind:'Escucha y elige la hora', say:per.h + hourZh(h), q:audioBtns(per.h + hourZh(h)),
      options: opts.map(x => ({v:String(x), html:`<span class="digital" style="font-size:24px">${fmt24(x)}</span>`})), answer:String(h), rev};
  }
  const bank = shuffle([...PERIODS.map(p => C(p.h, p.p)), hc(h), hc(h12(h) === 12 ? 11 : h12(h) + 1)]);
  return {t:'tiles', item:'g-period', kind:'Di la hora con su periodo', q:`<div class="clockwrap">${clockSVG(h, {sky:1})}<div class="digital">${fmt24(h)}<small>formato 24 h</small></div></div>`,
    bank, answer:per.h + hourZh(h), rev};
}
/* level 3: longer dictations and sentences built fresh from the module's vocabulary */
function seqEx(mode){
  const ds = Array.from({length:rint(3, 4)}, () => rint(1, 9));
  const zh = ds.map(d => NZH[d]).join(''), rev = {h:zh, p:ds.map(d => NPY[d]).join(' '), es:ds.join('')};
  if (mode === 'read') return {t:'digits', item:'g-num', kind:'Lee rápido y escribe las cifras', q:tzg(zh), answer:ds.join(''), rev};
  if (mode === 'speak') return {t:'speak', item:'g-num', kind:'Dilo en voz alta, cifra por cifra', q:`<div class="g7num">${ds.join(' ')}</div><div class="hint">Como cuando dictas un número de teléfono.</div>`, rev};
  return {t:'digits', item:'g-num', kind:'Dictado de cifras', say:zh, q:audioBtns(zh), hint:'Como un número de teléfono: escribe las cifras seguidas.', answer:ds.join(''), rev};
}
function pairEx(){
  const a = rint(11, 99), b = rint(11, 99), zh = numZh(a) + '，' + numZh(b);
  return {t:'digits', item:'g-num', kind:'Dictado: dos números', say:zh, q:audioBtns(zh), hint:'Escribe los dos números separados por un espacio.', answer:'' + a + b, rev:{h:zh, p:numPy(a) + ' ' + numPy(b), es:`${a} y ${b}`}};
}
function numSpeakEx(){
  const n = rint(11, 99);
  return {t:'speak', item:'g-num', kind:'Dilo en voz alta', q:`<div class="g7num">${n}</div>`, rev:{h:numZh(n), p:numPy(n), es:String(n)}};
}
function clockEx(mode, withPeriod){
  const h = withPeriod ? pick(PERIOD_HOURS) : rint(1, 12), per = periodOf(h);
  const zh = '现在' + (withPeriod ? per.h : '') + hourZh(h);
  const rev = {h:zh + '。', p:'xiàn·zài ' + (withPeriod ? per.p + ' ' : '') + hourPy(h), es:`Son las ${h12(h)}${withPeriod ? ' ' + PER_ES[per.id] : ''}.`};
  if (h12(h) === 1) rev.es = rev.es.replace('Son las', 'Es la');
  const q = `<div class="clockwrap">${clockSVG(h, {sky:withPeriod})}${withPeriod ? `<div class="digital">${fmt24(h)}<small>formato 24 h</small></div>` : ''}</div>`;
  const item = withPeriod ? 'g-period' : 'g-time';
  if (mode === 'speak') return {t:'speak', item, kind:'现在几点？ Responde en voz alta', q, rev};
  const bank = [ch.xz, hc(h), hc(h12(h) === 12 ? 11 : h12(h) + 1), hc(h12(h) === 1 ? 3 : h12(h) - 1)];
  if (withPeriod) bank.push(...PERIODS.map(p => C(p.h, p.p)));
  else bank.push(ch.wo);
  return {t:'tiles', item, kind:'现在几点？ Responde con la frase completa', q, bank:shuffle(bank), answer:zh, rev};
}
const PER_ES = {zs:'de la mañana', sw:'de la mañana', zw:'del mediodía', xw:'de la tarde', ws:'de la noche'};
const COMMA = C('，', '');
const ACTIONS = [
  {v:[ch.qc], yo:'me levanto', tu:'te levantas', hours:[5,6,7,8], u:'u5'},
  {v:[ch.gz], yo:'trabajo', tu:'trabajas', hours:[8,9,10,14], u:'u5'},
  {v:[ch.hj], yo:'vuelvo a casa', tu:'vuelves a casa', hours:[16,17,18,19], u:'u5'},
  {v:[ch.sj], yo:'me voy a dormir', tu:'te vas a dormir', hours:[21,22,23], u:'u5'},
  {v:[ch.qu, ch.xx], yo:'voy a la escuela', tu:'vas a la escuela', hours:[7,8,9], u:'u5'},
  {v:[ch.chi, ch.zf], yo:'desayuno', tu:'desayunas', hours:[6,7,8,9], u:'u6'},
  {v:[ch.chi, ch.wf], yo:'almuerzo', tu:'almuerzas', hours:[12,13], u:'u6'},
  {v:[ch.chi, ch.wanf], yo:'ceno', tu:'cenas', hours:[18,19,20], u:'u6'}
];
const atEs = h => (h12(h) === 1 ? 'a la una' : 'a las ' + h12(h));
const cap = t => t[0].toUpperCase() + t.slice(1);
function genSent(form, acts){
  const a = pick(acts), h = pick(a.hours), per = periodOf(h);
  let chunks, es, end = '。';
  if (form === 'q'){ chunks = [ch.ni, ch.jd, ...a.v]; es = `¿A qué hora ${a.tu}?`; end = '？'; }
  else if (form === 'now'){ chunks = [ch.xz, ch[per.id], hc(h), COMMA, ch.wo, ...a.v]; es = `${h12(h) === 1 ? 'Es la una' : 'Son las ' + h12(h)} ${PER_ES[per.id]}: ${a.yo}.`; }
  else if (form === 'two'){
    for (let k = 0; k < 40; k++){
      const b = pick(acts); if (b === a) continue;
      const h2 = pick(b.hours);
      if (h2 > h && periodOf(h2) === per){ chunks = [ch.wo, ch[per.id], hc(h), ...a.v, COMMA, hc(h2), ...b.v]; es = cap(`${a.yo} ${atEs(h)} ${PER_ES[per.id]} y ${atEs(h2)} ${b.yo}.`); break; }
    }
    if (!chunks) return genSent('yo', acts);
  }
  if (!chunks){ chunks = [ch.wo, ch[per.id], hc(h), ...a.v]; es = cap(`${a.yo} ${atEs(h)} ${PER_ES[per.id]}.`); }
  return {form, chunks, es, h:chunks.map(c => c.h).join('') + end, p:chunks.map(c => c.p).filter(Boolean).join(' ')};
}
function sentGenEx(mode, acts, forms){
  acts = acts || ACTIONS; forms = forms || ['yo','q','two','now'];
  const s = genSent(pick(forms), acts), rev = {h:s.h, p:s.p, es:s.es};
  mode = mode || pick(['build','listen','mc','speak']);
  if (mode === 'speak') return {t:'speak', item:'g-sent', kind:'Dilo en voz alta', q:`<div class="qtext">${esc(s.es)}</div><div class="hint">Frase nueva: nunca la viste armada. Constrúyela con la regla quién · cuándo · qué.</div>`, rev};
  if (mode === 'mc'){
    const opts = [s];
    for (let k = 0; opts.length < 4 && k < 60; k++){ const o = genSent(s.form, acts); if (!opts.some(x => x.es === o.es)) opts.push(o); }
    return {t:'mc', item:'g-sent', kind:'Escucha: ¿qué dice?', say:s.h, q:audioBtns(s.h), options:shuffle(opts).map(o => ({v:o.es, html:esc(o.es)})), answer:s.es, rev};
  }
  const extra = shuffle(DISTRACT.filter(d => !s.chunks.some(c => c.h === d.h))).slice(0, 3);
  const bank = shuffle([...s.chunks, ...extra]), answer = orders(s.chunks);
  if (mode === 'listen') return {t:'tiles', item:'g-sent', kind:'Dictado: ordena lo que oyes', say:s.h, q:audioBtns(s.h), bank, answer, rev};
  return {t:'tiles', item:'g-sent', kind:'Traduce al chino', q:`<div class="qtext">${esc(s.es)}</div>`, bank, answer, rev};
}
ITEMS['g-sent'] = {id:'g-sent', unit:'u7', kind:'gen', es:'oraciones nuevas'};
const GEN = {'g-tone':toneEx, 'g-pair':() => soundEx(), 'g-nat3':m => natEx(m, NAT3, 'g-nat3'), 'g-nat':m => natEx(m), 'g-stu':m => introEx(m, ['stu','study','name','nat'], 'g-stu'), 'g-fam':m => introEx(m, ['fam'], 'g-fam'), 'g-intro':m => introEx(m), 'g-num':numEx, 'g-time':timeEx, 'g-period':periodEx, 'g-sent':m => sentGenEx(m), 'g-food':m => foodEx(m)};
const GEN_MODES = {'g-tone':['listen','name','listen','listen','name','listen'], 'g-pair':['listen','listen','listen','listen'], 'g-nat3':['country','build','listen','build'], 'g-nat':['country','country','build','listen'], 'g-stu':['build','reply','ask','listen'], 'g-fam':['build','reply','ask','listen'], 'g-intro':['reply','ask','reply','ask'], 'g-num':['tiles','read','listen'], 'g-time':['mc','listen','type'], 'g-period':['tiles','listen'], 'g-sent':['build','listen','mc','speak'], 'g-food':['build','reply','listen','ask']};
const withRedo = (fn) => { const ex = fn(); ex.redo = fn; return ex; };
function exFor(id, mode){
  const it = ITEMS[id];
  const ex = it.kind === 'gen' ? GEN[id](mode || pick(GEN_MODES[id]))
    : it.kind === 'sent' ? sentEx(it, mode || pick(['build','build','listen','speak']))
    : wordEx(it, mode);
  ex.redo = () => exFor(id, mode);
  return ex;
}
// mode by SRS box: recognition first, production later
function srsMode(id){
  const it = ITEMS[id], b = (S.srs[id] || {b:0}).b;
  if (it.kind !== 'word') return null;
  if (b <= 1) return pick(['meaning','listen']);
  if (b <= 3) return pick(['hanzi','listen','type']);
  return pick(['type','speak','hanzi']);
}
