/* ====================================================================
   HSK 1 · la sección que sigue a Principiante. Seis rutas en el orden del
   temario de un curso HSK 1 de seis semanas: saludos y números, familia y
   escuela, hora y clima, trabajo y aficiones, compras y comida, transporte
   y direcciones. Cinco unidades por ruta (una por lección) y una de frases
   completas. Los temas siguen el temario; frases y ejercicios son propios.
   ==================================================================== */
const KW = (unit, rows) => rows.forEach(([id, h, p, es, tip]) => W(id, unit, h, p, es, tip || ''));
const KS = (unit, rows) => rows.forEach(([id, chunks, es, q, alt]) => { S_(id, chunks, es, q, unit); if (alt) ITEMS[id].alt = alt; });
const KU = (id, mod, key, title, zh, ref, intro, models) => UNITS.push({id, mod, key, title, zh, ref, intro, models, items:Object.keys(ITEMS).filter(k => ITEMS[k].unit === id)});
const cueBox = t => `<div class="ask">${t}</div>`;
K.xz = C('现在','xiàn·zài');
const KL3 = [['build',4],['reply',3],['listen',3],['ask',2],['speak',2]];
// one generator per unit: say(form) makes a sentence, qa(form) a question with the answer that fits its cue
// qa → {key, q, a, cue, who, askCue, wrongs}; answers with another key are the wrong options
function kGen(item, unit, es, pool, spec){
  ITEMS[item] = {id:item, unit, kind:'gen', es};
  const fn = mode => {
    if (spec.more && spec.more[mode]) return spec.more[mode]();
    if ((mode === 'reply' || mode === 'ask') && spec.qa){
      const x = spec.qa();
      if (mode === 'ask'){
        const extra = shuffle(uniqBy(pool, d => noPunct(d.h)).filter(d => !x.q.chunks.some(c => noPunct(c.h) === noPunct(d.h) || homo(c, d)))).slice(0, 3);
        return {t:'tiles', item, kind:'Haz la pregunta', q:`<div class="bubble"><span class="who">${esc(x.who ? 'Responde: ' + x.who : 'Respuesta')}</span><span class="han">${esc(x.a.h)}</span>${pyHint(x.a.p) ? `<span>${pyHint(x.a.p)}</span>` : ''}</div><div class="es">${esc(x.a.es)}</div>${cueBox(esc(x.askCue || '¿Qué pregunta lleva a esta respuesta?'))}`,
          bank:shuffle([...x.q.chunks, ...extra]), answer:answersOf(x.q), rev:{h:x.q.h, p:x.q.p, es:x.q.es}};
      }
      let wrongs = x.wrongs;
      if (!wrongs){ wrongs = []; for (let k = 0; wrongs.length < 6 && k < 80; k++){ const y = spec.qa(x.form); if (y.key !== x.key && !wrongs.some(w => noPunct(w.h) === noPunct(y.a.h))) wrongs.push(y.a); } }
      return replyEx(item, x.kind || 'Responde', bubbleQ(x.who || 'Amigo', x.q, x.cue || ''), x.a, wrongs);
    }
    return genEx(mode, item, pool, f => spec.say(f));
  };
  GEN[item] = fn;
  GEN_MODES[item] = spec.modes || ['build','reply','listen','ask'];
  L2_GEN[item] = spec.modes2 || ['listen','reply','build'];
  L3[unit] = () => mix(fn, spec.l3 || KL3);
  return fn;
}
// sentence units: their level 3 mixes the generators of the route
const kMix = (unit, spec) => { L3[unit] = () => spec.flatMap(([g, m, n]) => times(n, () => GEN[g](m))); };
const ynPic = ok => picBox(ok ? '✅' : '❌');
const otherNums = (n, lo, hi) => shuffle([...new Set([n + 1, n - 1, n + 10, n - 10, Number(String(n).split('').reverse().join(''))])].filter(x => x >= lo && x <= hi && x !== n));
