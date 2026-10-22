/* ---------- HSK 1 · Ruta 3: hora y clima ---------- */
KW('k3a', [
  ['k_fen','分','fēn','minuto (en la hora)','八点十分 = 8:10.'],
  ['k_ban2','半','bàn','media','八点半 = 8:30.'],
  ['k_ling','零','líng','cero','八点零五分 = 8:05: el cero no se omite.'],
  ['k_sk','上课','shàng kè','empezar la clase','上 subir + 课 clase.'],
  ['k_xk','下课','xià kè','terminar la clase','下 bajar: lo contrario de 上课.'],
  ['k_shz','什么时候','shén·me shí·hou','¿cuándo?','Para un día o un momento: 你什么时候去北京？']
]);
KW('k3b', [
  ['k_hao2','号','hào','día (del mes)','十月十九号 = 19 de octubre: de lo grande a lo pequeño.'],
  ['k_sr','生日','shēng·rì','cumpleaños','生 nacer + 日 día.'],
  ['k_mn','明年','míng·nián','el próximo año',''],
  ['k_qn','去年','qù·nián','el año pasado','去 = ir, aquí «que ya se fue».'],
  ['k_jyjh','几月几号','jǐ yuè jǐ hào','¿qué fecha?','几 va donde irían los números: 今天几月几号？'],
  ['k_ri','日','rì','día (escrito)','En papeles y calendarios dice 日; al hablar, 号.']
]);
KW('k3c', [
  ['k_xyl','下雨了','xià yǔ le','¡está lloviendo! (empezó a llover)','了 al final: antes no llovía, ahora sí.'],
  ['k_bxyl','不下雨了','bú xià yǔ le','ya no llueve','不…了 = ya no.'],
  ['k_qt','晴天','qíng·tiān','día soleado','晴 lleva 日 (sol).'],
  ['k_yt','阴天','yīn·tiān','día nublado',''],
  ['k_tll','天冷了','tiān lěng le','ya hace frío','Llegó el frío: 了 marca el cambio.'],
  ['k_san','伞','sǎn','paraguas','El carácter parece un paraguas abierto.']
]);
KW('k3d', [
  ['k_sh','上海','Shàng·hǎi','Shanghái','上 sobre + 海 mar: una ciudad junto al mar.'],
  ['k_xa','西安','Xī·ān','Xi’an','La ciudad de los guerreros de terracota.'],
  ['k_fd','饭店','fàn·diàn','hotel; restaurante','En el norte de China 饭店 suele ser un hotel grande.'],
  ['k_zher','这儿','zhèr','aquí',''],
  ['k_zj','在家','zài jiā','en casa','在 + lugar = estar en: 我在家.'],
  ['k_bz','不在','bú zài','no estar','她不在家 = No está en casa.']
]);
KW('k3e', [
  ['k_lai','来','lái','venir','Hacia donde está quien habla: 你来我家吧.'],
  ['k_hui2','回','huí','volver','回家 = volver a casa. 回国 = volver a tu país.'],
  ['k_kj','看见','kàn·jiàn','ver (con los ojos)','看 es mirar; 看见, lograr ver.'],
  ['k_yj','已经','yǐ·jīng','ya','我已经吃饭了 = Ya comí.'],
  ['k_mq','没去','méi qù','no fui','Para negar algo que ya pasó se usa 没, no 不. Y sin 了.'],
  ['k_zp','照片','zhào·piàn','foto','']
]);
const DK3 = [K.wo, K.ni, K.xz, C('早上','zǎo·shang'), C('晚上','wǎn·shang'), C('几点','jǐ diǎn'), C('上课','shàng kè'), C('下课','xià kè'), C('起床','qǐ·chuáng'), C('半','bàn'), C('分','fēn'),
  C('今天','jīn·tiān'), C('明天','míng·tiān'), C('生日','shēng·rì'), C('号','hào'), C('月','yuè'), C('了','le'), C('下雨','xià yǔ'), C('天气','tiān·qì'), C('伞','sǎn'), K.zai, C('家','jiā'),
  C('哪儿','nǎr'), C('上海','Shàng·hǎi'), C('西安','Xī·ān'), C('去','qù'), C('没','méi'), C('昨天','zuó·tiān'), C('去年','qù·nián'), K.shi];
// 8:30 → 八点半 · 8:05 → 八点零五分 · 8:00 → 八点
const minZh = m => m === 0 ? '' : m === 30 ? '半' : (m < 10 ? '零' + NZH[m] : numZh(m)) + '分';
const minPy = m => m === 0 ? '' : m === 30 ? ' bàn' : ' ' + (m < 10 ? 'líng ' + NPY[m] : numPy(m)) + ' fēn';
const tC = (h, m) => C(hourZh(h) + minZh(m), hourPy(h) + minPy(m));
const tAlt = (h, m) => m === 30 ? hourZh(h) + '三十分' : null;
const MINS = [0, 5, 10, 15, 20, 30, 30, 40, 45, 50];
const randT = (hs = [6,7,8,9,10,11,12,1,2,3,4,5]) => ({h:pick(hs), m:pick(MINS)});
const digi = (h, m) => `<div class="digital">${h}:${String(m).padStart(2, '0')}</div>`;
const tEs = (h, m) => `${h12(h)}:${String(m).padStart(2, '0')}`;
const atT = (s, h, m) => { const a = tAlt(h, m); return a ? Object.assign(s, {alt:[s.h.replace(/。|？/g, '').replace(hourZh(h) + '半', a)]}) : s; };
kGen('g-k3a', 'k3a', 'la hora con minutos', DK3, {
  say: form => { form = form || pick(['now','up','class','q']); const {h, m} = randT();
    const s = form === 'up' ? (() => { const t = randT([5,6,7,8]); return atT(mkS([K.wo, C('早上','zǎo·shang'), tC(t.h, t.m), C('起床','qǐ·chuáng')], `Me levanto a las ${tEs(t.h, t.m)} de la mañana.`), t.h, t.m); })()
      : form === 'class' ? atT(mkS([C('我们','wǒ·men'), tC(h, m), C('上课','shàng kè')], `Entramos a clase a las ${tEs(h, m)}.`), h, m)
      : form === 'q' ? mkS([K.ni, C('几点','jǐ diǎn'), C('下课','xià kè')], '¿A qué hora sales de clase?', '？')
      : atT(mkS([K.xz, tC(h, m)], `Son las ${tEs(h, m)}.`), h, m);
    return Object.assign(s, {form}); },
  qa: () => { const {h, m} = randT([7,8,9,10,11,1,2,3]);
    const a = (hh, mm) => atT(mkS([K.wo, tC(hh, mm), C('上课','shàng kè')], `Entro a clase a las ${tEs(hh, mm)}.`), hh, mm);
    const near = uniqBy([[h, (m + 30) % 60], [h12(h + 1), m], [h, m === 15 ? 50 : 15], [h, m === 5 ? 50 : 5]].filter(([x, y]) => !(x === h && y === m)), ([x, y]) => x + ':' + y);
    return {key:h + ':' + m, who:'Compañera', q:mkS([K.ni, C('几点','jǐ diǎn'), C('上课','shàng kè')], '¿A qué hora entras a clase?', '？'), a:a(h, m), cue:digi(h, m), wrongs:near.map(([x, y]) => a(x, y))}; },
  more:{
    read: () => { const {h, m} = randT(), right = hourZh(h) + minZh(m);
      const os = uniqBy([[h, m], [h, (m + 30) % 60], [h12(h + 1), m], [h, m === 10 ? 50 : 10], [h, m === 5 ? 15 : 5]].filter((x, i) => i === 0 || hourZh(x[0]) + minZh(x[1]) !== right), x => hourZh(x[0]) + minZh(x[1])).slice(0, 4);
      return {t:'mc', item:'g-k3a', kind:'¿Qué hora es?', q:digi(h, m), options:shuffle(os).map(([x, y]) => ({v:hourZh(x) + minZh(y), say:hourZh(x) + minZh(y), html:`<span class="han" style="font-size:22px">${hourZh(x) + minZh(y)}</span>${LV >= 2 ? '' : `<small>${pyHTML(hourPy(x) + minPy(y))}</small>`}`})), answer:right, rev:{h:right, p:hourPy(h) + minPy(m), es:tEs(h, m)}}; },
    clock: () => { const {h, m} = randT(), zh = '现在' + hourZh(h) + minZh(m);
      const os = uniqBy([[h, m], [h, (m + 30) % 60], [h12(h + 1), m], [h, m === 15 ? 50 : 15]], x => x.join(':'));
      return {t:'mc', item:'g-k3a', kind:'Escucha y elige la hora', say:zh, q:audioBtns(zh, true), options:shuffle(os).map(([x, y]) => ({v:x + ':' + y, html:digi(x, y)})), answer:h + ':' + m, rev:{h:zh, p:'xiàn·zài ' + hourPy(h) + minPy(m), es:tEs(h, m)}}; }
  },
  modes:['read','clock','build','reply','listen'], modes2:['clock','read','reply'], l3:[['read',3],['clock',3],['build',3],['reply',3],['speak',2]]
});
const MESES = ['', 'enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const dateC = (mo, d) => C(numZh(mo) + '月' + numZh(d) + '号', numPy(mo) + ' yuè ' + numPy(d) + ' hào');
const dateCard = (mo, d, lab) => `<div class="cal"><small>${lab || MESES[mo]}</small><b>${d}${lab ? ' de ' + MESES[mo] : ''}</b></div>`;
const randD = () => ({mo:rint(1, 12), d:rint(1, 28)});
const yearC = y => C([...String(y)].map(x => '零一二三四五六七八九'[x]).join('') + '年', [...String(y)].map(x => ['líng','yī','èr','sān','sì','wǔ','liù','qī','bā','jiǔ'][x]).join(' ') + ' nián');
kGen('g-k3b', 'k3b', 'fechas', DK3, {
  say: form => { form = form || pick(['today','bday','q','year']); const {mo, d} = randD();
    const s = form === 'bday' ? mkS([C('我的','wǒ de'), C('生日','shēng·rì'), K.shi, dateC(mo, d)], `Mi cumpleaños es el ${d} de ${MESES[mo]}.`)
      : form === 'q' ? mkS([C('你的','nǐ de'), C('生日','shēng·rì'), K.shi, C('几月几号','jǐ yuè jǐ hào')], '¿Cuándo es tu cumpleaños?', '？')
      : form === 'year' ? pick([mkS([C('去年','qù·nián'), K.wo, C('去','qù'), C('中国','Zhōng·guó'), C('了','le')], 'El año pasado fui a China.'), mkS([C('明年','míng·nián'), K.wo, C('去','qù'), C('中国','Zhōng·guó')], 'El año que viene voy a China.')])
      : mkS([C('今天','jīn·tiān'), dateC(mo, d)], `Hoy es ${d} de ${MESES[mo]}.`);
    return Object.assign(s, {form}); },
  qa: form => { form = form || pick(['bday','today']); const {mo, d} = randD();
    const a = form === 'bday' ? (x, y) => mkS([C('我的','wǒ de'), C('生日','shēng·rì'), K.shi, dateC(x, y)], `Mi cumpleaños es el ${y} de ${MESES[x]}.`) : (x, y) => mkS([C('今天','jīn·tiān'), dateC(x, y)], `Hoy es ${y} de ${MESES[x]}.`);
    const wrongs = [[d <= 12 && d !== mo ? d : (mo % 12) + 1, d <= 12 && d !== mo ? mo : d], [mo, d + 1 > 28 ? d - 2 : d + 1], [mo === 12 ? 11 : mo + 1, d]].map(([x, y]) => a(x, y));
    return {key:mo + '/' + d, form, who:'Amiga', wrongs, cue:dateCard(mo, d, form === 'bday' ? 'tu cumpleaños' : 'hoy'), a:a(mo, d),
      q:form === 'bday' ? mkS([C('你的','nǐ de'), C('生日','shēng·rì'), K.shi, C('几月几号','jǐ yuè jǐ hào')], '¿Cuándo es tu cumpleaños?', '？') : mkS([C('今天','jīn·tiān'), C('几月几号','jǐ yuè jǐ hào')], '¿Qué fecha es hoy?', '？')}; },
  more:{
    date: () => { const {mo, d} = randD(), z = dateC(mo, d);
      const parts = [C(numZh(mo) + '月', numPy(mo) + ' yuè'), C(numZh(d) + '号', numPy(d) + ' hào')];
      const traps = [C(numZh(d) + '月', numPy(d) + ' yuè'), C(numZh(mo) + '号', numPy(mo) + ' hào'), C(numZh(d) + '日', numPy(d) + ' rì')].filter(t => !parts.some(p => p.h === t.h));
      return {t:'tiles', item:'g-k3b', kind:'Escribe la fecha en chino', q:dateCard(mo, d), bank:shuffle([...parts, ...traps.slice(0, 2)]), answer:z.h, rev:{h:z.h, p:z.p, es:`${d} de ${MESES[mo]}`}}; },
    year: () => { const y = pick([1998, 2003, 2010, 2019, 2024, 2025, 2026, 2027]), z = yearC(y), sw = String(y).slice(0, 2) + String(y)[3] + String(y)[2];
      const os = uniqBy([y, Number(sw), y + 10, y - 1].map(v => yearC(v)), c => c.h);
      return {t:'mc', item:'g-k3b', kind:'Escucha: ¿qué año es?', say:z.h, q:audioBtns(z.h, true), options:shuffle(os).map(c => ({v:c.h, html:`<span class="digital" style="font-size:24px">${[...c.h].slice(0, 4).map(x => '零一二三四五六七八九'.indexOf(x)).join('')}</span>`})), answer:z.h, rev:{h:z.h, p:z.p, es:String(y)}}; }
  },
  modes:['date','reply','build','year','listen'], modes2:['date','year','reply'], l3:[['date',3],['year',2],['reply',4],['build',3],['listen',2],['speak',2]]
});
const WXC = [
  {k:'rain', from:'☀️', to:'🌧️', s:() => mkS([C('下雨','xià yǔ'), C('了','le')], '¡Empezó a llover!', '！')},
  {k:'stop', from:'🌧️', to:'☀️', s:() => mkS([C('不下雨','bú xià yǔ'), C('了','le')], 'Ya no llueve.')},
  {k:'snow', from:'☁️', to:'❄️', s:() => mkS([C('下雪','xià xuě'), C('了','le')], '¡Empezó a nevar!', '！')},
  {k:'cold', from:'🥵', to:'🥶', s:() => mkS([C('天','tiān'), C('冷','lěng'), C('了','le')], 'Ya hace frío.')},
  {k:'hot', from:'🥶', to:'🥵', s:() => mkS([C('天','tiān'), C('热','rè'), C('了','le')], 'Ya hace calor.')}
];
const SKY = [{k:'qt', pic:'☀️', c:C('晴天','qíng·tiān'), es:'soleado'}, {k:'yt', pic:'☁️', c:C('阴天','yīn·tiān'), es:'nublado'}];
kGen('g-k3c', 'k3c', 'cambios de tiempo con 了', DK3, {
  say: form => { form = form || pick(['chg','chg','sky','san']);
    if (form === 'chg'){ const w = pick(WXC); return Object.assign(w.s(), {form, pic:picBox(w.from + ' → ' + w.to)}); }
    if (form === 'sky'){ const x = pick(SKY), d = pick([['今天','jīn·tiān','Hoy está'], ['明天','míng·tiān','Mañana estará']]); return Object.assign(mkS([C(d[0], d[1]), K.shi, x.c], `${d[2]} ${x.es}.`), {form, pic:picBox(x.pic)}); }
    return Object.assign(mkS([C('下雨了，','xià yǔ le'), K.wo, C('没有','méi·yǒu'), C('伞','sǎn')], 'Está lloviendo y no tengo paraguas.'), {form}); },
  qa: () => { const w = pick(WXC);
    return {key:w.k, who:'Amigo', q:mkS([C('外边','wài·bian'), C('天气','tiān·qì'), C('怎么样','zěn·me·yàng')], '¿Qué tiempo hace afuera?', '？'), a:w.s(), cue:picBox(w.from + ' → ' + w.to) + cueBox('Así cambió el tiempo hace un rato.')}; },
  more:{pic: () => { const w = pick(WXC);
    return replyEx('g-k3c', '¿Qué pasó con el tiempo?', {html:picBox(w.from + ' → ' + w.to)}, w.s(), WXC.filter(x => x !== w).map(x => x.s())); }},
  modes:['pic','build','reply','listen'], modes2:['pic','listen','reply'], l3:[['pic',3],['build',3],['reply',3],['listen',3],['speak',2]]
});
const PL3 = [{k:'jia', c:C('家','jiā'), es:'en casa', pic:'🏠'}, {k:'xx', c:C('学校','xué·xiào'), es:'en la escuela', pic:'🏫'}, {k:'fd', c:C('饭店','fàn·diàn'), es:'en el hotel', pic:'🏨'},
  {k:'yh', c:C('银行','yín·háng'), es:'en el banco', pic:'🏦'}, {k:'cs', c:C('超市','chāo·shì'), es:'en el supermercado', pic:'🛒'}];
const CITY3 = [{c:C('上海','Shàng·hǎi'), es:'Shanghái'}, {c:C('西安','Xī·ān'), es:'Xi’an'}, {c:C('北京','Běi·jīng'), es:'Pekín'}, {c:C('利马','Lì·mǎ'), es:'Lima'}];
kGen('g-k3d', 'k3d', 'dónde estás', DK3, {
  say: form => { form = form || pick(['me','city','not','q']); const p = pick(PL3), c = pick(CITY3);
    const s = form === 'city' ? mkS([K.wo, K.xz, K.zai, c.c], `Ahora estoy en ${c.es}.`)
      : form === 'not' ? mkS([C('她','tā'), C('不在','bú zài'), C('家','jiā')], 'Ella no está en casa.')
      : form === 'q' ? mkS([K.ni, K.xz, K.zai, C('哪儿','nǎr')], '¿Dónde estás ahora?', '？')
      : mkS([K.wo, K.zai, p.c], `Estoy ${p.es}.`);
    return Object.assign(s, {form, pic:form === 'me' ? picBox(p.pic) : ''}); },
  qa: form => { form = form || pick(['where','where','home']);
    if (form === 'home'){ const st = Math.random() < .5;
      const yes = mkS([C('在，','zài'), C('请','qǐng'), C('等一下','děng yí xià')], 'Sí, está. Espere un momento.'), no = mkS([C('她','tā'), C('不在','bú zài'), C('家','jiā')], 'No, no está en casa.');
      return {key:st, form, who:'Al teléfono', q:mkS([C('喂，','wéi'), C('你妈妈','nǐ mā·ma'), K.zai, C('家','jiā'), K.ma], '¿Aló? ¿Está tu mamá en casa?', '？'), a:st ? yes : no, cue:ynPic(st) + cueBox(st ? 'Tu mamá está en casa.' : 'Tu mamá salió.'),
        wrongs:[st ? no : yes, mkS([K.wo, K.zai, C('家','jiā')], 'Estoy en casa.'), mkS([C('她','tā'), K.shi, C('我妈妈','wǒ mā·ma')], 'Ella es mi mamá.')]}; }
    const p = pick(PL3);
    return {key:p.k, form, who:'Amiga', q:mkS([K.ni, K.xz, K.zai, C('哪儿','nǎr')], '¿Dónde estás ahora?', '？'), a:mkS([K.wo, K.xz, K.zai, p.c], `Ahora estoy ${p.es}.`), cue:picBox(p.pic)}; },
  more:{pic: () => { const p = pick(PL3), mk = x => mkS([K.wo, K.zai, x.c], `Estoy ${x.es}.`);
    return replyEx('g-k3d', '¿Dónde estás?', {html:picBox(p.pic)}, mk(p), PL3.filter(x => x !== p).map(mk)); }},
  modes:['pic','build','reply','listen','ask'], modes2:['pic','listen','reply']
});
const TRIP3 = [{c:C('西安','Xī·ān'), es:'Xi’an'}, {c:C('上海','Shàng·hǎi'), es:'Shanghái'}, {c:C('北京','Běi·jīng'), es:'Pekín'}, {c:C('超市','chāo·shì'), es:'al supermercado', sup:1}, {c:C('银行','yín·háng'), es:'al banco', sup:1}];
const toEs = t => t.sup ? t.es : 'a ' + t.es;
const WHEN3 = [{c:C('昨天','zuó·tiān'), es:'Ayer'}, {c:C('去年','qù·nián'), es:'El año pasado'}];
kGen('g-k3e', 'k3e', 'lo que ya pasó', DK3, {
  say: form => { form = form || pick(['went','went','not','back','saw']); const t = pick(TRIP3.filter(x => !x.sup)), w = pick(WHEN3);
    const s = form === 'not' ? mkS([K.wo, C('没','méi'), C('去','qù'), t.c], `No fui a ${t.es}.`)
      : form === 'back' ? mkS([C('我朋友','wǒ péng·you'), C('昨天','zuó·tiān'), C('回','huí'), C('北京','Běi·jīng'), C('了','le')], 'Mi amigo volvió ayer a Pekín.')
      : form === 'saw' ? mkS([K.wo, C('看见','kàn·jiàn'), C('你的','nǐ de'), C('照片','zhào·piàn'), C('了','le')], 'Vi tus fotos.')
      : mkS([w.c, K.wo, C('去','qù'), t.c, C('了','le')], `${w.es} fui a ${t.es}.`);
    return Object.assign(s, {form}); },
  qa: form => { form = form || pick(['where','yn']);
    if (form === 'yn'){ const t = pick(TRIP3.filter(x => !x.sup)), st = Math.random() < .5;
      const yes = mkS([C('去了，','qù le'), K.wo, C('昨天','zuó·tiān'), C('去','qù'), C('了','le')], 'Sí, fui ayer.'), no = mkS([C('没去','méi qù')], 'No, no fui.'), trap = mkS([C('不去了','bú qù le')], 'Ya no voy a ir.');
      return {key:st, form, who:'Amigo', q:mkS([K.ni, C('去','qù'), t.c, C('了','le'), K.ma], `¿Fuiste a ${t.es}?`, '？'), a:st ? yes : no,
        cue:ynPic(st) + cueBox(st ? `Fuiste ayer a ${t.es}.` : `No fuiste a ${t.es}.`), wrongs:[st ? no : yes, trap, mkS([K.wo, C('去','qù'), t.c], `Voy a ${t.es}.`)]}; }
    const t = pick(TRIP3);
    return {key:t.es, form, who:'Amiga', q:mkS([K.ni, C('昨天','zuó·tiān'), C('去','qù'), C('哪儿','nǎr'), C('了','le')], '¿A dónde fuiste ayer?', '？'), a:mkS([K.wo, C('去','qù'), t.c, C('了','le')], `Fui ${toEs(t)}.`), cue:cueBox(`Ayer fuiste <b>${toEs(t)}</b>.`)}; }
});
KS('k3f', [
  ['ks31', [K.xz, C('几点','jǐ diǎn')], '¿Qué hora es?', 1],
  ['ks32', [K.xz, C('八点半','bā diǎn bàn')], 'Son las 8:30.', 0, ['现在八点三十分']],
  ['ks33', [C('我们','wǒ·men'), C('九点十分','jiǔ diǎn shí fēn'), C('上课','shàng kè')], 'Entramos a clase a las 9:10.'],
  ['ks34', [C('今天','jīn·tiān'), C('几月几号','jǐ yuè jǐ hào')], '¿Qué fecha es hoy?', 1],
  ['ks35', [C('我的','wǒ de'), C('生日','shēng·rì'), K.shi, C('五月八号','wǔ yuè bā hào')], 'Mi cumpleaños es el 8 de mayo.'],
  ['ks36', [C('下雨','xià yǔ'), C('了','le')], '¡Empezó a llover!'],
  ['ks37', [C('今天','jīn·tiān'), K.shi, C('阴天','yīn·tiān')], 'Hoy está nublado.'],
  ['ks38', [K.wo, K.xz, K.zai, C('上海','Shàng·hǎi')], 'Ahora estoy en Shanghái.'],
  ['ks39', [C('去年','qù·nián'), K.wo, C('去','qù'), C('西安','Xī·ān'), C('了','le')], 'El año pasado fui a Xi’an.'],
  ['ks310', [K.wo, C('没','méi'), C('去','qù'), C('北京','Běi·jīng')], 'No fui a Pekín.']
]);
kMix('k3f', [['g-k3a','read',2], ['g-k3b','reply',2], ['g-k3c','pic',2], ['g-k3d','reply',2], ['g-k3e','reply',2], ['g-k3a','speak',2]]);
KU('k3a', 'k3', '半', 'Horas y minutos', '现在八点半。', '分, 半 y 零', [rule('La regla', 'Hora + 点 + minutos + 分', [['八点十分','8:10'], ['八点半','8:30: 半 = media'], ['八点零五分','8:05: con 零'], ['两点四十五分','2:45: las 2 siguen siendo 两']], 'Para el momento de una acción, la hora va antes del verbo: 我七点半起床.')]);
KU('k3b', 'k3', '号', 'Fechas y cumpleaños', '今天几月几号？', '月 + 号, el año y 生日', [rule('La regla', 'De lo grande a lo pequeño', [['十月十九号','19 de octubre: mes antes que día'], ['二零二六年','2026: el año, cifra por cifra'], ['你的生日是几月几号？','¿Cuándo es tu cumpleaños?'], ['去年 · 今年 · 明年','el año pasado · este año · el próximo']], 'Una fecha completa: 二零二六年十月十九号. Primero el año, luego el mes y al final el día.', [['año','二零二六年'], ['mes','十月'], ['día','十九号']])]);
KU('k3c', 'k3', '雨', 'Ya llueve', '下雨了！', '了 para un cambio', [rule('La regla', '了 al final = algo cambió', [['下雨了！','Empezó a llover (antes no).'], ['不下雨了。','Ya no llueve.'], ['天冷了。','Ya hace frío.'], ['今天是晴天。','Hoy está soleado (sin cambio, sin 了).']], 'Si describes cómo es, no hay 了. Si cuentas que cambió, sí.')]);
KU('k3d', 'k3', '海', 'Dónde estás', '我在上海。', '在 + lugar', [rule('La regla', '在 + lugar = estar en', [['我在上海。','Estoy en Shanghái.'], ['你现在在哪儿？','¿Dónde estás ahora?'], ['她不在家。','No está en casa.'], ['喂，你妈妈在家吗？','¿Aló? ¿Está tu mamá en casa?']], 'Para negar 在 se usa 不在. Para negar 有 se usa 没有.')]);
KU('k3e', 'k3', '去', 'Ya fui', '我去西安了。', '了 y 没 para lo que ya pasó', [rule('La regla', 'Pasado: 了 para sí, 没 para no', [['我去西安了。','Fui a Xi’an.'], ['你去上海了吗？','¿Fuiste a Shanghái?'], ['我没去。','No fui: 没, y sin 了.'], ['我不去了。','Ya no voy a ir: otra cosa.']], 'El verbo no cambia en chino. Lo que dice que ya pasó es 了, o palabras como 昨天 y 去年.')]);
KU('k3f', 'k3', '时', 'Hora, fecha y lugar', '现在八点半。', 'Frases completas de la ruta', [rule('Repaso', 'Cinco preguntas de tiempo y lugar', [['现在几点？','la hora'], ['今天几月几号？','la fecha'], ['外边天气怎么样？','el tiempo'], ['你现在在哪儿？','dónde estás'], ['你昨天去哪儿了？','a dónde fuiste']], 'Practicas las dos partes: preguntar y responder.')], ['ks32','ks39']);
