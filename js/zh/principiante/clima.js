/* ---------- content · Ruta 6: el tiempo ---------- */
W('ftq','f1','天气','tiān·qì','el tiempo (el clima)','天 cielo + 气 aire.');
W('fjt','f1','今天','jīn·tiān','hoy','');
W('fmt','f1','明天','míng·tiān','mañana (el día siguiente)','No lo confundas con 早上, la mañana como parte del día.');
W('fzt','f1','昨天','zuó·tiān','ayer','');
W('fhen','f1','很','hěn','muy','Antes de un adjetivo casi siempre va 很: 天气很好. Sin 很 suena a comparación.');
W('fre','f1','热','rè','caluroso, hace calor','La r china se dice sin vibrar, casi como la «y» de «yo» en Argentina.');
W('fleng','f1','冷','lěng','frío, hace frío','');
W('fjttq','f1','今天天气怎么样？','jīn·tiān tiān·qì zěn·me·yàng','¿Qué tiempo hace hoy?','怎么样 lo viste en Compras: ¿qué tal?');
ITEMS['g-wx1'] = {id:'g-wx1', unit:'f1', kind:'gen', es:'¿qué tiempo hace?'};
W('fxy','f2','下雨','xià yǔ','llueve','下 = bajar: «baja lluvia».');
W('fxx','f2','下雪','xià xuě','nieva','xuě: x suave y ü.');
W('fdu','f2','度','dù','grado (de temperatura)','Número + 度: 二十度 = 20 grados.');
W('fdsd','f2','多少度？','duō·shao dù','¿a cuántos grados estamos?','多少, como en 多少钱.');
W('fbrbl','f2','不热不冷','bú rè bù lěng','ni calor ni frío','El primer 不 va antes de un 4.º tono (rè), así que suena bú.');
W('ftqbh','f2','天气不好','tiān·qì bù hǎo','hace mal tiempo','');
ITEMS['g-wx'] = {id:'g-wx', unit:'f2', kind:'gen', es:'el tiempo y los grados'};
W('fyue','f3','月','yuè','mes; luna','Número + 月 = mes: 一月 enero … 十二月 diciembre.');
W('fyy','f3','一月','yī·yuè','enero','');
W('fqy','f3','七月','qī·yuè','julio','');
W('fsey','f3','十二月','shí·èr·yuè','diciembre','12 = 十二: aquí no se usa 两.');
W('fbj','f3','北京','Běi·jīng','Pekín','北 norte + 京 capital.');
W('flm','f3','利马','Lì·mǎ','Lima','Se escribe por el sonido: 马 (caballo) se lee mǎ.');
ITEMS['g-month'] = {id:'g-month', unit:'f3', kind:'gen', es:'los meses'};
W('fjj','f4','季节','jì·jié','estación del año','');
W('fct','f4','春天','chūn·tiān','primavera','');
W('fxt','f4','夏天','xià·tiān','verano','');
W('fqt','f4','秋天','qiū·tiān','otoño','');
W('fdt','f4','冬天','dōng·tiān','invierno','');
W('fwsm','f4','为什么？','wèi·shén·me','¿por qué?','');
W('fyw','f4','因为','yīn·wèi','porque','');
ITEMS['g-season'] = {id:'g-season', unit:'f4', kind:'gen', es:'las estaciones'};
W('fgm','f5','感冒','gǎn·mào','resfriarse; resfrío','我感冒了 = me resfrié. 了 al final indica que algo cambió.');
W('ftt','f5','头疼','tóu téng','dolor de cabeza','头 cabeza + 疼 doler: 我头疼 = me duele la cabeza.');
W('fszt','f5','嗓子疼','sǎng·zi téng','dolor de garganta','');
W('ffs','f5','发烧','fā·shāo','tener fiebre','');
W('fxix','f5','休息','xiū·xi','descansar','你休息休息吧 = descansa un poco: repetir el verbo lo suaviza.');
W('fnzml','f5','你怎么了？','nǐ zěn·me le','¿Qué te pasa?','');
ITEMS['g-sick'] = {id:'g-sick', unit:'f5', kind:'gen', es:'cómo te sientes'};

const DAYS6 = {jt:{c:C('今天','jīn·tiān'), es:'Hoy', lab:'hoy', t:0}, mt:{c:C('明天','míng·tiān'), es:'Mañana', lab:'mañana', t:1}, zt:{c:C('昨天','zuó·tiān'), es:'Ayer', lab:'ayer', t:2}};
const V6 = {hace:['hace','hará','hizo'], llueve:['llueve','lloverá','llovió'], nieva:['nieva','nevará','nevó']};
const WXI = {hot:'☀️', mild:'⛅', cold:'☁️', good:'🌤️', rain:'🌧️', snow:'❄️'};
const D6 = [C('今天','jīn·tiān'), C('明天','míng·tiān'), C('昨天','zuó·tiān'), C('天气','tiān·qì'), C('很热','hěn rè'), C('很冷','hěn lěng'), C('很好','hěn hǎo'), C('不好','bù hǎo'),
  C('下雨','xià yǔ'), C('下雪','xià xuě'), C('不热不冷','bú rè bù lěng'), C('春天','chūn·tiān'), C('夏天','xià·tiān'), C('秋天','qiū·tiān'), C('冬天','dōng·tiān'),
  C('因为','yīn·wèi'), K.wo, K.xh, C('头疼','tóu téng'), C('发烧','fā·shāo'), C('感冒','gǎn·mào'), C('了','le')];
const wxCard = (kind, t, d, small) => `<div class="wx${small ? ' sm' : ''}"><span class="wxi" aria-hidden="true">${WXI[kind]}</span><b>${t}°C</b><small>${d.lab}</small></div>`;
// f1: 天气很热/很冷/很好 · f2: grados, lluvia y nieve. Temperatures never overlap between kinds.
function wxS(full, kind, dk){
  kind = kind || pick(full ? ['hot','mild','cold','rain','snow'] : ['hot','cold','good']);
  const d = DAYS6[dk || pick(Object.keys(DAYS6))], v = w => V6[w][d.t];
  const t = {hot:rint(30, 38), mild:rint(16, 24), cold:rint(1, 8), good:rint(20, 26), rain:rint(10, 18), snow:rint(-6, 0)}[kind];
  const deg = C(numZh(Math.max(t, 1)) + '度，', numPy(Math.max(t, 1)) + ' dù'), TQ = C('天气','tiān·qì');
  let cs, es, alt;
  if (!full){
    const adj = {hot:[C('很热','hěn rè'), 'mucho calor'], cold:[C('很冷','hěn lěng'), 'mucho frío'], good:[C('很好','hěn hǎo'), 'buen tiempo']}[kind];
    cs = [d.c, TQ, adj[0]]; es = `${d.es} ${v('hace')} ${adj[1]}.`;
    if (kind !== 'good') alt = [d.c.h + adj[0].h];
  } else if (kind === 'rain'){ cs = [d.c, C('下雨，','xià yǔ'), TQ, C('不好','bù hǎo')]; es = `${d.es} ${v('llueve')}: ${v('hace')} mal tiempo.`; }
  else if (kind === 'snow'){ cs = [d.c, C('下雪，','xià xuě'), TQ, C('很冷','hěn lěng')]; es = `${d.es} ${v('nieva')}: ${v('hace')} mucho frío.`; }
  else if (kind === 'mild'){ cs = [d.c, deg, C('不热不冷','bú rè bù lěng')]; es = `${d.es} ${v('hace')} ${t} grados: no ${v('hace')} ni calor ni frío.`; }
  else {
    const hot = kind === 'hot', adj = hot ? C('很热','hěn rè') : C('很冷','hěn lěng');
    cs = [d.c, deg, TQ, adj]; es = `${d.es} ${v('hace')} ${t} grado${t === 1 ? '' : 's'}: ${v('hace')} mucho ${hot ? 'calor' : 'frío'}.`;
    alt = [d.c.h + deg.h + adj.h];
  }
  return Object.assign(mkS(cs, es, '。', alt), {form:kind, kind, t, d, pic:wxCard(kind, t, d)});
}
function wxGen(full, mode){
  const item = full ? 'g-wx' : 'g-wx1', kinds = full ? ['hot','mild','cold','rain','snow'] : ['hot','cold','good'];
  const s = wxS(full), dk = Object.keys(DAYS6).find(k => DAYS6[k] === s.d);
  const others = shuffle(kinds.filter(k => k !== s.kind)).slice(0, 3).map(k => wxS(full, k, dk));
  if (mode === 'pic') return chunkEx('build', s, item, D6, null, s.pic);
  if (mode === 'reply') return replyEx(item, 'Responde mirando el pronóstico', bubbleQ('Amiga', mkS([s.d.c, C('天气','tiān·qì'), C('怎么样','zěn·me·yàng')], '', '？'), s.pic), s, others);
  if (mode === 'listen') return seeEx(item, 'Escucha y elige el pronóstico', s, [s, ...others].map(o => ({v:o.kind, html:wxCard(o.kind, o.t, o.d, true)})), s.kind);
  if (mode === 'temp'){
    const t = rint(1, 39), z = numZh(t) + '度';
    return {t:'digits', item, kind:'Escucha: ¿cuántos grados?', say:z, q:audioBtns(z), hint:'Escribe solo el número. Ej.: 25', answer:String(t), rev:{h:z, p:numPy(t) + ' dù', es:`${t} grados`}};
  }
  return chunkEx(mode, s, item, D6, () => wxS(full), s.pic);
}
const wx1Ex = m => wxGen(false, m), wxEx = m => wxGen(true, m);
const MES = ['', 'enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const monthC = n => C(numZh(n) + '月', numPy(n) + '·yuè');
function monthEx(mode){
  const n = rint(1, 12), m = monthC(n), rev = {h:m.h, p:m.p, es:MES[n]};
  if (mode === 'tiles'){
    const chars = [...m.h].map(c => ({h:c, p:PDIG[c]})), trap = m.h.includes('二') ? '两' : pick(['两','百']);
    const extra = shuffle(NZH.slice(1).filter(c => !m.h.includes(c))).slice(0, 2).concat(trap).map(c => ({h:c, p:PDIG[c]}));
    return {t:'tiles', item:'g-month', kind:'Escribe el mes en chino', q:`<div class="qtext">${MES[n]}</div>`, bank:shuffle([...chars, ...extra]), answer:m.h, rev};
  }
  if (mode === 'speak') return {t:'speak', item:'g-month', kind:'Dilo en voz alta', q:`<div class="qtext">${MES[n]}</div>`, rev};
  const near = shuffle([...new Set([n - 1, n + 1, n + 10, n - 10, n + 2].filter(x => x >= 1 && x <= 12 && x !== n))]).slice(0, 3);
  const options = shuffle([n, ...near]).map(x => ({v:String(x), html:esc(MES[x])}));
  if (mode === 'listen') return {t:'mc', item:'g-month', kind:'Escucha y elige el mes', say:m.h, q:audioBtns(m.h, true), options, answer:String(n), rev};
  return {t:'mc', item:'g-month', kind:'¿Qué mes es?', say:m.h, q:`${tzg(m.h)}<div class="pybig">${pyHint(m.p)}</div>`, options, answer:String(n), rev};
}
const SEASONS = {chun:{c:C('春天','chūn·tiān'), es:'primavera', el:'la primavera'}, xia:{c:C('夏天','xià·tiān'), es:'verano', el:'el verano'},
  qiu:{c:C('秋天','qiū·tiān'), es:'otoño', el:'el otoño'}, dong:{c:C('冬天','dōng·tiān'), es:'invierno', el:'el invierno'}};
// only months that clearly belong to one season (Lima is in the southern hemisphere)
const SEAS_OF = {bj:{1:'dong',2:'dong',12:'dong',4:'chun',5:'chun',6:'xia',7:'xia',8:'xia',9:'qiu',10:'qiu'}, lm:{1:'xia',2:'xia',4:'qiu',5:'qiu',7:'dong',8:'dong',10:'chun',11:'chun'}};
const CITY = {bj:{c:C('北京','Běi·jīng'), es:'Pekín'}, lm:{c:C('利马','Lì·mǎ'), es:'Lima'}};
const REASON = {chun:[[C('不热不冷','bú rè bù lěng')], 'no hace ni calor ni frío'], qiu:[[C('不热不冷','bú rè bù lěng')], 'no hace ni calor ni frío'],
  xia:[[C('很热','hěn rè')], 'hace mucho calor'], dong:[[C('很冷','hěn lěng')], 'hace mucho frío']};
function seasonS(form, ck, n){
  form = form || pick(['is','is','why']);
  if (form === 'why'){
    const sk = pick(Object.keys(SEASONS)), S = SEASONS[sk], like = sk === 'chun' || sk === 'qiu' || Math.random() < .5, r = REASON[sk];
    const cs = [K.wo, ...(like ? [] : [K.bu]), K.xh, C(S.c.h + '，', S.c.p), C('因为','yīn·wèi'), S.c, ...r[0]];
    return Object.assign(mkS(cs, `${like ? 'Me' : 'No me'} gusta ${S.el} porque ${r[1]}.`), {form});
  }
  ck = ck || pick(['bj','lm']); n = n || +pick(Object.keys(SEAS_OF[ck]));
  const sk = SEAS_OF[ck][n], m = monthC(n);
  return Object.assign(mkS([CITY[ck].c, m, K.shi, SEASONS[sk].c], `En ${CITY[ck].es}, ${MES[n]} es ${SEASONS[sk].es}.`, '。', [m.h + CITY[ck].c.h + '是' + SEASONS[sk].c.h]), {form, ck, n, sk});
}
function seasonEx(mode){
  if (mode === 'reply'){
    const s = seasonS('is'), q = mkS([CITY[s.ck].c, monthC(s.n), K.shi, K.sm, C('季节','jì·jié')], '', '？');
    const wrongs = Object.keys(SEASONS).filter(k => k !== s.sk).map(k => mkS([CITY[s.ck].c, monthC(s.n), K.shi, SEASONS[k].c], `En ${CITY[s.ck].es}, ${MES[s.n]} es ${SEASONS[k].es}.`));
    return replyEx('g-season', 'Responde', bubbleQ('Amiga', q), s, wrongs);
  }
  if (mode === 'why') return genEx('build', 'g-season', D6, () => seasonS('why'));
  return genEx(mode, 'g-season', D6, seasonS);
}
const SYM = {
  gm:{c:[C('感冒','gǎn·mào'), C('了','le')], es:'Me resfrié.', cue:'Estás resfriado.'},
  tt:{c:[C('头疼','tóu téng')], es:'Me duele la cabeza.', cue:'Te duele la cabeza.'},
  szt:{c:[C('嗓子疼','sǎng·zi téng')], es:'Me duele la garganta.', cue:'Te duele la garganta.'},
  fs:{c:[C('发烧','fā·shāo')], es:'Tengo fiebre.', cue:'Tienes fiebre.'}
};
function sickS(form, k){
  form = form || pick(['one','two']); k = k || pick(Object.keys(SYM));
  if (form === 'two'){
    const k2 = pick(Object.keys(SYM).filter(x => x !== k && x !== 'gm')), a = k === 'gm' ? SYM.gm : SYM[k];
    const first = a.c.map((c, i) => i === a.c.length - 1 ? C(c.h + '，', c.p) : c);
    // 我感冒了，我头疼 = 我感冒了，头疼
    return Object.assign(mkS([K.wo, ...first, K.wo, ...SYM[k2].c], `${a.es} ${SYM[k2].es}`, '。', [[K.wo, ...first, ...SYM[k2].c].map(c => c.h).join('')]), {form});
  }
  return Object.assign(mkS([K.wo, ...SYM[k].c], SYM[k].es), {form, k});
}
function sickEx(mode){
  if (mode === 'reply'){
    const k = pick(Object.keys(SYM));
    return replyEx('g-sick', 'Responde', bubbleQ(pick(['Doctora','Tu jefe','Mamá']), mkS([K.ni, C('怎么','zěn·me'), C('了','le')], '¿Qué te pasa?', '？'), `<div class="ask">${SYM[k].cue}</div>`),
      sickS('one', k), Object.keys(SYM).filter(x => x !== k).map(x => sickS('one', x)));
  }
  return genEx(mode, 'g-sick', D6, sickS);
}
const S6 = (id, chunks, es, q, alt) => { S_(id, chunks, es, q, 'f6'); if (alt) ITEMS[id].alt = alt; };
S6('fs1', [C('今天','jīn·tiān'), C('天气','tiān·qì'), C('怎么样','zěn·me·yàng')], '¿Qué tiempo hace hoy?', 1);
S6('fs2', [C('今天','jīn·tiān'), C('下雨，','xià yǔ'), C('天气','tiān·qì'), C('不好','bù hǎo')], 'Hoy llueve: hace mal tiempo.');
S6('fs3', [C('明天','míng·tiān'), C('下雪，','xià xuě'), C('天气','tiān·qì'), C('很冷','hěn lěng')], 'Mañana nevará: hará mucho frío.');
S6('fs4', [C('今天','jīn·tiān'), C('多少','duō·shao'), C('度','dù')], '¿A cuántos grados estamos hoy?', 1);
S6('fs5', [C('三十五度，','sān·shí·wǔ dù'), C('天气','tiān·qì'), C('很热','hěn rè')], 'Estamos a 35 grados: hace mucho calor.', 0, ['三十五度很热']);
S6('fs6', [K.ni, K.xh, K.sm, C('季节','jì·jié')], '¿Qué estación te gusta?', 1);
S6('fs7', [K.wo, K.xh, C('春天，','chūn·tiān'), C('因为','yīn·wèi'), C('春天','chūn·tiān'), C('不热不冷','bú rè bù lěng')], 'Me gusta la primavera porque no hace ni calor ni frío.');
S6('fs8', [C('北京','Běi·jīng'), C('一月','yī·yuè'), K.shi, C('冬天','dōng·tiān')], 'En Pekín, enero es invierno.', 0, ['一月北京是冬天']);
S6('fs9', [K.wo, C('感冒','gǎn·mào'), C('了，','le'), K.wo, C('头疼','tóu téng')], 'Me resfrié. Me duele la cabeza.', 0, ['我感冒了头疼']);
S6('fs10', [C('昨天','zuó·tiān'), C('天气','tiān·qì'), C('太冷了','tài lěng le')], 'Ayer hizo demasiado frío.');
