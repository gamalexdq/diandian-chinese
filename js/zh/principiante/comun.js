/* ---------- rutas 4–7: shared helpers ---------- */
// a generated sentence: chunks + Spanish; alt = other valid answers for the tiles
const mkS = (chunks, es, end = '。', alt) => ({chunks, es, alt, h:chunks.map(c => c.h).join('') + end, p:chunks.map(c => c.p).filter(Boolean).join(' ')});
// a time word can go before or after the subject: 我每天… = 每天我…
const TIME_RE = /^(早上|上午|中午|下午|晚上|现在|今天|明天|昨天|今年|去年|明年|每天|每天早上|每天晚上|每星期.|星期.|[一二三四五六七八九十两]+点(半|[零一二三四五六七八九十]+分)?)$/;
function orders(chunks){
  const j = cs => cs.map(c => c.h).join(''), np = c => c.h.replace(/[，。？！、]/g, ''), subj = ['我','你','我们'];
  const out = [j(chunks)];
  if (chunks.length > 2 && subj.includes(np(chunks[0]))){
    let k = 1; while (k < chunks.length && TIME_RE.test(np(chunks[k]))) k++;
    if (k > 1) out.push(j([...chunks.slice(1, k), chunks[0], ...chunks.slice(k)]));
  } else {
    let k = 0; while (k < chunks.length && TIME_RE.test(np(chunks[k]))) k++;
    if (k > 0 && k < chunks.length && subj.includes(np(chunks[k]))) out.push(j([chunks[k], ...chunks.slice(0, k), ...chunks.slice(k + 1)]));
  }
  return out;
}
// 我喜欢红色 = 我喜欢红的: both are taught, both count
const expandAns = list => [...new Set(list.flatMap(a => {
  const m = a.match(/^(.*(?:喜欢|要))([红黄蓝绿白黑紫])[色的]$/);
  return m ? [a, m[1] + m[2] + '色', m[1] + m[2] + '的'] : [a];
}))];
const answersOf = s => expandAns([...orders(s.chunks), ...(s.alt || [])]);
const optHTML = s => `<span class="han" style="font-size:22px">${esc(s.h)}</span>${LV >= 2 ? '' : `<small>${pyHTML(s.p)}</small>`}`;
const bubbleQ = (who, s, extra = '') => ({say:s.h, html:`<div class="bubble"><span class="who">${esc(who)}</span><span class="han">${esc(s.h)}</span>${pyHint(s.p) ? `<span>${pyHint(s.p)}</span>` : ''}</div>${audioBtns(s.h)}${extra}`});
const picBox = e => `<div class="pic" aria-hidden="true">${e}</div>`;
const uniqBy = (arr, key) => arr.filter((x, i) => arr.findIndex(y => key(y) === key(x)) === i);
// build / listen / mc / speak from one sentence; again(k) makes another one for mc
function chunkEx(mode, s, item, pool, again, pic = ''){
  const rev = {h:s.h, p:s.p, es:s.es};
  if (mode === 'speak') return {t:'speak', item, kind:'Dilo en voz alta', q:`${pic}<div class="qtext">${esc(s.es)}</div><div class="hint">Dilo en chino antes de ver la respuesta.</div>`, rev};
  if (mode === 'mc'){
    const os = [s];
    for (let k = 0; os.length < 4 && k < 120; k++){ const o = again(k); if (!os.some(x => x.es === o.es || noPunct(x.h) === noPunct(o.h))) os.push(o); }
    return {t:'mc', item, kind:'Escucha: ¿qué dice?', say:s.h, q:audioBtns(s.h), options:shuffle(os).map(o => ({v:o.es, html:esc(o.es)})), answer:s.es, rev};
  }
  const extra = shuffle(uniqBy(pool, d => noPunct(d.h)).filter(d => !s.chunks.some(c => noPunct(c.h) === noPunct(d.h)))).slice(0, 3);
  const bank = shuffle([...s.chunks, ...extra]), answer = answersOf(s);
  if (mode === 'listen') return {t:'tiles', item, kind:'Dictado: ordena lo que oyes', say:s.h, q:audioBtns(s.h), bank, answer, rev};
  return {t:'tiles', item, kind:'Traduce al chino', q:`${pic}<div class="qtext">${esc(s.es)}</div>`, bank, answer, rev};
}
const genEx = (mode, item, pool, gen) => { const s = gen(); return chunkEx(mode, s, item, pool, k => gen(k < 60 ? s.form : undefined), s.pic || ''); };
// pick the line that fits; wrong options must not fit the cue
function replyEx(item, kind, head, right, wrongs){
  const os = [right];
  for (const w of shuffle(wrongs)) if (os.length < 4 && !os.some(o => noPunct(o.h) === noPunct(w.h))) os.push(w);
  return {t:'mc', item, kind, say:head.say, q:head.html, wide:os.some(o => noPunct(o.h).length > 4), options:shuffle(os).map(o => ({v:o.h, say:o.h, html:optHTML(o)})), answer:right.h, rev:{h:right.h, p:right.p, es:right.es}};
}
// hear a sentence, pick the picture
const seeEx = (item, kind, s, opts, answer) => ({t:'mc', item, kind, say:s.h, q:audioBtns(s.h, true), options:shuffle(opts), answer, rev:{h:s.h, p:s.p, es:s.es}});
const K = {wo:C('我','wǒ'), ni:C('你','nǐ'), wm:C('我们','wǒ·men'), xh:C('喜欢','xǐ·huan'), bu:C('不','bù'), shi:C('是','shì'), yao:C('要','yào'), ma:C('吗','ma'),
  sm:C('什么','shén·me'), you:C('有','yǒu'), zai:C('在','zài'), qu:C('去','qù'), qw:C('请问，','qǐng·wèn'), mt:C('每天','měi·tiān'), hen:C('很','hěn')};
