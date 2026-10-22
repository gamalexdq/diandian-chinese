/* ---------- audio ---------- */
let zhVoice = null, frVoice = null, voicesChecked = false;
function loadVoices(){
  if (!('speechSynthesis' in window)) { voicesChecked = true; return; }
  const vs = speechSynthesis.getVoices();
  if (vs.length) voicesChecked = true;
  zhVoice = vs.find(v => /zh[-_]CN/i.test(v.lang) && /google/i.test(v.name)) || vs.find(v => /zh[-_]CN/i.test(v.lang)) || vs.find(v => /^zh/i.test(v.lang)) || null;
  frVoice = vs.find(v => /fr[-_]FR/i.test(v.lang) && /google/i.test(v.name)) || vs.find(v => /fr[-_]FR/i.test(v.lang)) || vs.find(v => /^fr/i.test(v.lang)) || null;
}
if ('speechSynthesis' in window){ loadVoices(); speechSynthesis.onvoiceschanged = () => { loadVoices(); if (screen === 'home') renderHome(); }; }
// Safari barely slows down short utterances, so slow mode also pauses between words
const IS_SAFARI = typeof navigator !== 'undefined' && /^((?!chrome|chromium|crios|fxios|android).)*safari/i.test(navigator.userAgent);
let WORDSET = null;
function slowText(text){
  if (!WORDSET){
    WORDSET = new Set();
    const add = h => { const w = String(h || '').replace(/[，。？\s]/g, ''); if (w.length > 1) WORDSET.add(w); };
    Object.values(ITEMS).forEach(it => { if (it.kind === 'word') add(it.h); (it.chunks || []).forEach(c => add(c.h)); });
    [...DISTRACT, ...DISTRACT3, ...DISTRACT1, ...D4, ...D5, ...D6, ...D7, ...(typeof DK === 'undefined' ? [] : DK), ...NAMES.map(n => n.c)].forEach(c => add(c.h));
  }
  return text.split(/([，。？！、])/).map(part => {
    if (/^[，。？！、]?$/.test(part)) return part;
    const out = [];
    for (let i = 0; i < part.length;){
      let n = Math.min(3, part.length - i);
      while (n > 1 && !WORDSET.has(part.slice(i, i + n))) n--;
      out.push(part.slice(i, i + n)); i += n;
    }
    return out.join('，');
  }).join('');
}
// French slow mode: short pauses between groups, never between a pronoun or article and its word
function frSlow(text){
  const glue = /^(je|j'|tu|il|elle|on|nous|vous|ils|elles|le|la|les|l'|un|une|des|de|du|au|aux|à|en|et|ne|n'|mon|ton|c'est|ça|très|quel|quelle)$/i;
  const w = text.split(/\s+/);
  return w.map((x, i) => x + (i < w.length - 1 ? (glue.test(x) || /[,.;?!]$/.test(x) ? ' ' : ', ') : '')).join('');
}
function say(text, rate = 0.85){
  if (!('speechSynthesis' in window)) return;
  try {
    speechSynthesis.cancel();
    if (LANG === 'fr'){
      text = String(text).replace(/，/g, ', ').replace(/_/g, ' ');
      if (rate === 'slow') { text = frSlow(text); rate = IS_SAFARI ? 0.5 : 0.6; }
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'fr-FR'; u.rate = rate === 0.85 ? 0.95 : rate; if (frVoice) u.voice = frVoice;
      speechSynthesis.speak(u);
      return;
    }
    if (rate === 'slow') { text = slowText(text); rate = IS_SAFARI ? 0.3 : 0.45; }
    const u = new SpeechSynthesisUtterance(text.replace(/[？。]/g, ''));
    u.lang = 'zh-CN'; u.rate = rate; if (zhVoice) u.voice = zhVoice;
    speechSynthesis.speak(u);
  } catch(e) {}
}
const audioBtns = (text, huge) => `<div class="arow"><button class="audio${huge ? ' huge' : ''}" data-say="${esc(text)}" aria-label="Escuchar">${ICON.play}${huge ? '' : 'Escuchar'}</button><button class="audio" data-say="${esc(text)}" data-rate="slow" aria-label="Escuchar lento">${ICON.slow}Lento</button></div>`;
app.addEventListener('click', e => { const b = e.target.closest('[data-say]'); if (b) say(b.dataset.say, b.dataset.rate === 'slow' ? 'slow' : 0.85); });
