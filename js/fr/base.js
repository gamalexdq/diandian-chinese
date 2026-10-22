/* ====================================================================
   Francés · segundo idioma. Con LANG === 'fr' se cambian los datos
   (ITEMS, UNITS, MODULES, GEN…) y las piezas del motor que dependen del
   idioma. Contenido propio, en el orden de las unidades 0 y 1 de un A1:
   saludos, alfabeto, números, calendario y clase; luego presentarse.
   ==================================================================== */
/* Se cargan solo con LANG === 'fr' (ver index.html), después de los archivos de chino. */
[ITEMS, MODULES, GEN, GEN_MODES, L2_GEN, L3].forEach(o => Object.keys(o).forEach(k => delete o[k]));
UNITS.length = 0;


/* ---------- helpers ---------- */
const FR_NAMES = new Set();
const lc1 = w => w[0].toLowerCase() + w.slice(1);
// source sentences: "_" glues words into one tile, "|" splits one word in two tiles (n'|aime)
const frText = s => s.replace(/_/g, ' ').replace(/\|/g, '');
const frChunks = s => s.split(' ').flatMap(w => w.split('|')).map(w => w.replace(/_/g, ' ').replace(/^[«"]+|[.,!?;:»"]+$/g, '')).filter(w => w && !/^[?!:;«»]$/.test(w));
const low = x => noPunct(x).toLowerCase();
const FR_TYPE_HINT = 'Las tildes son opcionales; si las pones bien, te lo digo.';
function fTiles(item, kind, q, s, es, traps = [], alts = [], extra = {}){
  const words = frChunks(s).map((w, i) => i === 0 && !FR_NAMES.has(w) ? lc1(w) : w);
  const tr = uniqBy(traps.map(t => t.replace(/_/g, ' ')).filter(t => !words.some(w => low(w) === low(t))), low);
  const bank = shuffle([...words, ...shuffle(tr).slice(0, 3)]).map(h => ({h, p:''}));
  return {t:'tiles', item, kind, q, bank, answer:[s, ...alts].map(frText), rev:{h:frText(s), p:'', es}, ...extra};
}
const oFr = (t, v = t, sub = '') => ({v, say:t, html:`<span class="han">${esc(t)}</span>${sub}`, len:t.length});
const oEs = (t, v = t) => ({v, html:esc(t), len:t.length});
function fMC(item, kind, q, opts, answer, rev, extra = {}){
  return {t:'mc', item, kind, q, options:shuffle(opts.map(o => ({v:o.v, say:o.say, html:o.html}))), answer, rev, wide:opts.some(o => o.len > 14), ...extra};
}
const fq = (fr, audio = true) => `<div class="qtext han">${esc(frText(fr))}</div>${audio ? audioBtns(frText(fr)) : ''}`;
const fcue = es => `<div class="qtext">${esc(es)}</div>`;
const bub = (who, fr) => `<div class="bubble"><span class="who">${esc(who)}</span><span class="han">${esc(frText(fr))}</span></div>${audioBtns(frText(fr))}`;
const fSpeak = (item, es, fr, hint = 'Dilo en francés antes de ver la respuesta.') => ({t:'speak', item, kind:'Dilo en voz alta', q:`${fcue(es)}<div class="hint">${esc(hint)}</div>`, rev:{h:frText(fr), p:'', es}});
const others = (arr, x, n, key = y => y) => shuffle(arr.filter(y => key(y) !== key(x))).slice(0, n);

/* ---------- items ---------- */
const FW = (unit, cat, rows) => rows.forEach(([id, h, p, es, tip]) => (ITEMS[id] = {id, unit, cat, kind:'word', h, p, es, tip}));
const FS = (unit, rows) => rows.forEach(([id, s, es, traps, alts]) => (ITEMS[id] = {id, unit, kind:'sent', s, h:frText(s), p:'', es, traps:traps || [], alts:alts || []}));
const FG = (id, unit, es) => (ITEMS[id] = {id, unit, kind:'gen', es});

/* ---------- numbers ---------- */
const FR_U = ['zéro','un','deux','trois','quatre','cinq','six','sept','huit','neuf','dix','onze','douze','treize','quatorze','quinze','seize'];
const FR_T = {20:'vingt', 30:'trente', 40:'quarante', 50:'cinquante', 60:'soixante'};
function frNum(n){
  if (n <= 16) return FR_U[n];
  if (n < 20) return 'dix-' + FR_U[n - 10];
  if (n === 100) return 'cent';
  if (n < 70){ const t = Math.floor(n / 10) * 10, u = n % 10; return FR_T[t] + (u === 0 ? '' : u === 1 ? ' et un' : '-' + FR_U[u]); }
  if (n < 80) return 'soixante' + (n === 71 ? ' et onze' : '-' + frNum(n - 60));
  if (n === 80) return 'quatre-vingts';
  return 'quatre-vingt-' + frNum(n - 80);
}
// numbers a Spanish speaker mixes up: ±10, ±20 (70/90), reversed digits, neighbours
function frConf(n, lo, hi, k = 3){
  const rv = Number(String(n).split('').reverse().join(''));
  const out = [];
  for (const x of shuffle([n + 10, n - 10, n + 20, n - 20, rv, n % 10, n + 1, n - 1]).concat([n + 10, n - 10])) if (x >= lo && x <= hi && x !== n && !out.includes(x)) out.push(x);
  while (out.length < k){ const x = rint(lo, hi); if (x !== n && !out.includes(x)) out.push(x); }
  return out.slice(0, k);
}
