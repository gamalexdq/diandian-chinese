/* ---------- HSK 1 · Ruta 6: transporte y direcciones ---------- */
KW('k6a', [
  ['k_czc','出租车','chū·zū·chē','taxi','出租 alquilar + 车 vehículo.'],
  ['k_fj','飞机','fēi·jī','avión','飞 volar + 机 máquina.'],
  ['k_hc2','火车','huǒ·chē','tren','火 fuego + 车: los trenes de vapor.'],
  ['k_jc','机场','jī·chǎng','aeropuerto',''],
  ['k_hcz','火车站','huǒ·chē zhàn','estación de tren','站 = estación, como en 地铁站.'],
  ['k_dc','打车','dǎ chē','tomar un taxi','Más coloquial que 坐出租车.']
]);
KW('k6b', [
  ['k_li','离','lí','de (distancia)','A 离 B 远/近: 我家离学校很近.'],
  ['k_yuan2','远','yuǎn','lejos',''],
  ['k_jin2','近','jìn','cerca',''],
  ['k_fz','分钟','fēn·zhōng','minuto(s) (duración)','十分钟 = diez minutos de duración. 八点十分 es la hora.'],
  ['k_xsh','小时','xiǎo·shí','hora (duración)','一个小时 = una hora. 半个小时 = media hora.']
]);
KW('k6c', [
  ['k_dao','到','dào','llegar','我是昨天到的 = Llegué ayer.'],
  ['k_cong','从','cóng','desde','从利马来 = venir de Lima.'],
  ['k_gen','跟','gēn','con','我跟朋友一起来 = Vengo con un amigo.'],
  ['k_sh2','时候','shí·hou','momento','什么时候 = ¿cuándo?']
]);
KW('k6d', [
  ['k_zhuo','桌子','zhuō·zi','mesa',''],
  ['k_yz','椅子','yǐ·zi','silla',''],
  ['k_chuang','床','chuáng','cama',''],
  ['k_shang','上','shàng','sobre, encima de','Va después de la cosa: 桌子上 = sobre la mesa.'],
  ['k_xm','下面','xià·miàn','debajo de','椅子下面 = debajo de la silla.'],
  ['k_li2','里','lǐ','dentro de','车里 = dentro del carro.']
]);
KW('k6e', [
  ['k_mei','美','měi','bello, hermoso','太美了！ = ¡Qué bonito!'],
  ['k_df','地方','dì·fang','lugar','这个地方 = este lugar.'],
  ['k_gy','公园','gōng·yuán','parque',''],
  ['k_cc','长城','Cháng·chéng','la Gran Muralla','长 largo + 城 muralla.'],
  ['k_gg','故宫','Gù·gōng','la Ciudad Prohibida','El antiguo palacio de los emperadores, en Pekín.'],
  ['k_hw','好玩儿','hǎo·wánr','divertido','好 + 玩儿: bueno para pasarla bien.']
]);
const DK6 = [K.wo, K.ni, K.ma, K.qu, K.shi, K.zai, C('坐','zuò'), C('怎么','zěn·me'), C('飞机','fēi·jī'), C('火车','huǒ·chē'), C('出租车','chū·zū·chē'), C('机场','jī·chǎng'), C('离','lí'), C('远','yuǎn'),
  C('近','jìn'), C('走路','zǒu·lù'), C('分钟','fēn·zhōng'), C('来','lái'), C('的','de'), C('从','cóng'), C('昨天','zuó·tiān'), C('在','zài'), C('上','shàng'), C('下面','xià·miàn'), C('椅子','yǐ·zi'),
  C('太','tài'), C('美','měi'), C('了','le'), C('想','xiǎng'), C('长城','Cháng·chéng')];
const TR6 = [{k:'czc', c:[C('坐','zuò'), C('出租车','chū·zū·chē')], es:'en taxi', pic:'🚕'}, {k:'fj', c:[C('坐','zuò'), C('飞机','fēi·jī')], es:'en avión', pic:'✈️'}, {k:'hc', c:[C('坐','zuò'), C('火车','huǒ·chē')], es:'en tren', pic:'🚆'},
  {k:'dt', c:[C('坐','zuò'), C('地铁','dì·tiě')], es:'en metro', pic:'🚇'}, {k:'zl', c:[C('走路','zǒu·lù')], es:'a pie', pic:'🚶'}];
const DEST6 = [{c:C('机场','jī·chǎng'), es:'al aeropuerto', ok:['czc','dt']}, {c:C('火车站','huǒ·chē zhàn'), es:'a la estación de tren', ok:['czc','dt','zl']},
  {c:C('上海','Shàng·hǎi'), es:'a Shanghái', ok:['fj','hc']}, {c:C('学校','xué·xiào'), es:'a la escuela', ok:['czc','dt','zl']}];
const tripT6 = () => { const d = pick(DEST6), k = pick(d.ok); return {d, t:TR6.find(x => x.k === k)}; };
const goS6 = (t, d, who = K.wo, es = 'Voy') => mkS([who, ...t.c, C('去','qù'), d.c], `${es} ${d.es} ${t.es}.`);
kGen('g-k6a', 'k6a', 'taxi, avión y tren', DK6, {
  say: form => { form = form || pick(['go','go','taxi','q']); const {t, d} = tripT6();
    const s = form === 'taxi' ? mkS([C('我们','wǒ·men'), C('打车','dǎ chē'), C('去','qù'), C('火车站','huǒ·chē zhàn')], 'Tomamos un taxi a la estación de tren.')
      : form === 'q' ? mkS([K.ni, C('怎么','zěn·me'), C('去','qù'), d.c], `¿Cómo vas ${d.es}?`, '？')
      : goS6(t, d);
    return Object.assign(s, {form, pic:form === 'go' ? picBox(t.pic) : ''}); },
  qa: () => { const {t, d} = tripT6();
    return {key:t.k, who:'Amigo', q:mkS([K.ni, C('怎么','zěn·me'), C('去','qù'), d.c], `¿Cómo vas ${d.es}?`, '？'), a:goS6(t, d), cue:picBox(t.pic),
      wrongs:shuffle(TR6.filter(x => x !== t)).slice(0, 3).map(x => goS6(x, d))}; },
  more:{pic: () => { const t = pick(TR6), mk = x => mkS(x.c, x.es, '');
    return replyEx('g-k6a', '¿Cómo vas?', {html:picBox(t.pic)}, mk(t), TR6.filter(x => x !== t).map(mk)); }},
  modes:['pic','build','reply','listen','ask'], modes2:['pic','listen','reply']
});
const DIST6 = [
  {k:'near', pic:'🚶 5 min', a:() => mkS([C('不远，','bù yuǎn'), C('走路','zǒu·lù'), C('五分钟','wǔ fēn·zhōng')], 'No, a cinco minutos a pie.')},
  {k:'mid', pic:'🚇 20 min', a:() => mkS([C('不太远，','bú tài yuǎn'), C('坐地铁','zuò dì·tiě'), C('二十分钟','èr·shí fēn·zhōng')], 'No mucho, veinte minutos en metro.')},
  {k:'far', pic:'🚆 1 h', a:() => mkS([C('很远，','hěn yuǎn'), C('坐火车','zuò huǒ·chē'), C('要','yào'), C('一个小时','yí ge xiǎo·shí')], 'Sí, muy lejos: una hora en tren.')}
];
kGen('g-k6b', 'k6b', 'lejos, cerca y cuánto tarda', DK6, {
  say: form => { form = form || pick(['near','far','walk','q']); const n = pick([5, 10, 15, 20]);
    const s = form === 'near' ? mkS([C('我家','wǒ jiā'), C('离','lí'), C('学校','xué·xiào'), K.hen, C('近','jìn')], 'Mi casa está muy cerca de la escuela.')
      : form === 'far' ? mkS([C('机场','jī·chǎng'), C('离','lí'), C('这儿','zhèr'), K.hen, C('远','yuǎn')], 'El aeropuerto está muy lejos de aquí.')
      : form === 'walk' ? mkS([K.wo, C('走路','zǒu·lù'), C('回家','huí jiā'), C('要','yào'), C(numZh(n) + '分钟', numPy(n) + ' fēn·zhōng')], `Vuelvo a casa a pie en ${n} minutos.`)
      : mkS([C('你家','nǐ jiā'), C('离','lí'), C('公司','gōng·sī'), C('远','yuǎn'), K.ma], '¿Tu casa está lejos de la empresa?', '？');
    return Object.assign(s, {form}); },
  qa: () => { const d = pick(DIST6);
    return {key:d.k, who:'Compañera', q:mkS([C('你家','nǐ jiā'), C('离','lí'), C('学校','xué·xiào'), C('远','yuǎn'), K.ma], '¿Tu casa está lejos de la escuela?', '？'), a:d.a(), cue:picBox(d.pic),
      wrongs:[...DIST6.filter(x => x.k !== d.k).map(x => x.a()), mkS([K.wo, C('家','jiā'), C('在','zài'), C('利马','Lì·mǎ')], 'Mi casa está en Lima.')]}; },
  more:{read: () => { const n = pick([5, 10, 15, 20, 30, 40]), dur = Math.random() < .5;
    const dz = C(numZh(n) + '分钟', numPy(n) + ' fēn·zhōng'), tz = tC(8, n), right = dur ? dz : tz;
    const os = uniqBy([right, dur ? tz : dz, dur ? C('两个小时','liǎng ge xiǎo·shí') : tC(8, n === 30 ? 40 : 30), dur ? C('一个小时','yí ge xiǎo·shí') : tC(10, 0)], c => c.h);
    return {t:'mc', item:'g-k6b', kind:dur ? '¿Cuánto tarda?' : '¿A qué hora sale el tren?', q:dur ? `<div class="tag" style="font-size:34px">⏱ ${n} min</div>` : digi(8, n),
      options:shuffle(os).map(c => ({v:c.h, say:c.h, html:`<span class="han" style="font-size:22px">${c.h}</span>${LV >= 2 ? '' : `<small>${pyHTML(c.p)}</small>`}`})), answer:right.h, rev:{h:right.h, p:right.p, es:dur ? `${n} minutos (duración)` : `a las 8:${String(n).padStart(2, '0')}`}}; }},
  modes:['read','build','reply','listen','ask'], modes2:['read','listen','reply']
});
const SHIDE = {
  how:{q:() => mkS([K.ni, K.shi, C('怎么','zěn·me'), C('来','lái'), C('的','de')], '¿Cómo viniste?', '？'), opts:TR6.filter(t => t.k !== 'dt').map(t => ({k:t.k, cue:picBox(t.pic), a:mkS([K.wo, K.shi, ...t.c, C('来','lái'), C('的','de')], `Vine ${t.es}.`)}))},
  when:{q:() => mkS([K.ni, K.shi, C('什么时候','shén·me shí·hou'), C('来','lái'), C('的','de')], '¿Cuándo viniste?', '？'), opts:[[C('昨天','zuó·tiān'), 'ayer'], [C('去年','qù·nián'), 'el año pasado'], [C('星期一','xīng·qī·yī'), 'el lunes']].map(([c, es]) => ({k:es, cue:cueBox(`Llegaste <b>${es}</b>.`), a:mkS([K.wo, K.shi, c, C('来','lái'), C('的','de')], `Vine ${es}.`)}))},
  from:{q:() => mkS([K.ni, K.shi, C('从','cóng'), C('哪儿','nǎr'), C('来','lái'), C('的','de')], '¿De dónde viniste?', '？'), opts:[[C('利马','Lì·mǎ'), 'Lima'], [C('上海','Shàng·hǎi'), 'Shanghái'], [C('马德里','Mǎ·dé·lǐ'), 'Madrid']].map(([c, es]) => ({k:es, cue:cueBox(`Llegaste desde <b>${es}</b>.`), a:mkS([K.wo, K.shi, C('从','cóng'), c, C('来','lái'), C('的','de')], `Vine desde ${es}.`)}))}
};
kGen('g-k6c', 'k6c', 'cómo, cuándo y de dónde viniste', DK6, {
  say: form => { form = form || pick(['how','when','from','with']);
    if (form === 'with') return Object.assign(mkS([K.wo, C('是','shì'), C('跟','gēn'), C('朋友','péng·you'), C('一起','yì·qǐ'), C('来','lái'), C('的','de')], 'Vine con un amigo.'), {form});
    const o = pick(SHIDE[form].opts); return Object.assign(mkS(o.a.chunks, o.a.es), {form}); },
  qa: form => { form = form || pick(Object.keys(SHIDE)); const o = pick(SHIDE[form].opts);
    const other = pick(Object.keys(SHIDE).filter(k => k !== form));
    return {key:o.k, form, who:'Amiga china', q:SHIDE[form].q(), a:o.a, cue:o.cue,
      wrongs:[...SHIDE[form].opts.filter(x => x !== o).map(x => x.a), pick(SHIDE[other].opts).a]}; }
});
const OBJ6 = [{k:'yz', c:C('椅子','yǐ·zi'), es:'la silla', pic:'🪑'}, {k:'ch', c:C('床','chuáng'), es:'la cama', pic:'🛏️'}, {k:'che', c:C('车','chē'), es:'el carro', pic:'🚗'}];
const POS6 = [{k:'up', c:C('上','shàng'), es:'sobre', cell:1}, {k:'dn', c:C('下面','xià·miàn'), es:'debajo de', cell:7}, {k:'l', c:C('左边','zuǒ·bian'), es:'a la izquierda de', cell:3}, {k:'r', c:C('右边','yòu·bian'), es:'a la derecha de', cell:5}];
const scene6 = (o, p) => `<div class="scene">${Array.from({length:9}, (_, i) => `<span>${i === 4 ? o.pic : i === p.cell ? '🐱' : ''}</span>`).join('')}</div>`;
const atEs6 = (p, o) => `${p.es} ${o.es}`.replace(/\bde el /, 'del ');
const catS = (o, p) => mkS([C('小猫','xiǎo māo'), K.zai, o.c, p.c], `El gatito está ${atEs6(p, o)}.`);
kGen('g-k6d', 'k6d', 'dónde está algo', DK6, {
  say: form => { form = form || pick(['cat','cat','book','q']); const o = pick(OBJ6), p = pick(POS6);
    const s = form === 'book' ? mkS([C('我的书','wǒ de shū'), K.zai, C('桌子','zhuō·zi'), C('上','shàng')], 'Mi libro está sobre la mesa.')
      : form === 'q' ? mkS([C('我的','wǒ de'), C('小猫','xiǎo māo'), C('呢','ne')], '¿Y mi gatito? ¿Dónde está?', '？')
      : catS(o, p);
    return Object.assign(s, {form, pic:form === 'cat' ? scene6(o, p) : ''}); },
  qa: () => { const o = pick(OBJ6), p = pick(POS6);
    const wrongs = [...POS6.filter(x => x !== p).map(x => mkS([K.zai, o.c, x.c], `Está ${atEs6(x, o)}.`)), mkS([K.zai, pick(OBJ6.filter(x => x !== o)).c, p.c], 'Otro lugar.')];
    return {key:o.k + p.k, who:'Hermanito', q:mkS([C('我的','wǒ de'), C('小猫','xiǎo māo'), C('呢','ne')], '¿Y mi gatito? ¿Dónde está?', '？'), a:mkS([K.zai, o.c, p.c], `Está ${atEs6(p, o)}.`), cue:scene6(o, p), wrongs}; },
  more:{pic: () => { const o = pick(OBJ6), p = pick(POS6);
    return replyEx('g-k6d', '¿Dónde está el gato?', {html:scene6(o, p)}, catS(o, p), [...POS6.filter(x => x !== p).map(x => catS(o, x)), catS(pick(OBJ6.filter(x => x !== o)), p)]); }},
  modes:['pic','build','reply','listen','pic'], modes2:['pic','listen','reply'], l3:[['pic',3],['build',3],['reply',3],['listen',3],['speak',2]]
});
const SPOT6 = [{k:'cc', c:C('长城','Cháng·chéng'), es:'la Gran Muralla', f:1}, {k:'gg', c:C('故宫','Gù·gōng'), es:'la Ciudad Prohibida', f:1}, {k:'sh', c:C('上海','Shàng·hǎi'), es:'Shanghái'}, {k:'gy', c:C('公园','gōng·yuán'), es:'el parque'}];
kGen('g-k6e', 'k6e', 'lugares bonitos', DK6, {
  say: form => { form = form || pick(['wow','want','photo','fun']); const x = pick(SPOT6);
    const s = form === 'wow' ? mkS([x.c, C('太','tài'), C('美','měi'), C('了','le')], `¡Qué bonit${x.f ? 'a' : 'o'} es ${x.es}!`, '！')
      : form === 'want' ? mkS([K.wo, C('想','xiǎng'), C('去','qù'), x.c], `Quiero ir a ${x.es.replace(/^el /, 'el ')}.`.replace('a el', 'al'))
      : form === 'photo' ? mkS([C('这','zhè'), K.shi, K.wo, K.zai, x.c, C('的','de'), C('照片','zhào·piàn')], `Esta es mi foto en ${x.es}.`)
      : mkS([C('北京','Běi·jīng'), K.you, C('很多','hěn duō'), C('好玩儿的','hǎo·wánr de'), C('地方','dì·fang')], 'Pekín tiene muchos lugares divertidos.');
    return Object.assign(s, {form}); },
  qa: form => { form = form || pick(['go','how']);
    if (form === 'how'){ const ok = Math.random() < .6, x = pick(SPOT6);
      const yes = mkS([C('太','tài'), C('美','měi'), C('了','le')], '¡Precioso!', '！'), no = mkS([C('没意思','méi yì·si')], 'Aburrido.');
      return {key:ok, form, who:'Amiga', q:mkS([x.c, C('怎么样','zěn·me·yàng')], `¿Qué tal ${x.es}?`, '？'), a:ok ? yes : no, cue:picBox(ok ? '😍' : '🥱'), askCue:`Pregúntale qué tal ${x.es}.`,
        wrongs:[ok ? no : yes, mkS([C('太贵了','tài guì le')], '¡Demasiado caro!', '！'), mkS([C('太冷了','tài lěng le')], 'Hace demasiado frío.')]}; }
    const x = pick(SPOT6);
    return {key:x.k, form, who:'Amigo', q:mkS([K.ni, C('想','xiǎng'), C('去','qù'), C('哪儿','nǎr')], '¿A dónde quieres ir?', '？'), a:mkS([K.wo, C('想','xiǎng'), C('去','qù'), x.c], `Quiero ir a ${x.es}.`.replace('a el', 'al')), cue:cueBox(`Quieres ir a <b>${x.es}</b>.`.replace('a <b>el', 'al <b>'))}; }
});
KS('k6f', [
  ['ks61', [K.ni, C('怎么','zěn·me'), C('去','qù'), C('机场','jī·chǎng')], '¿Cómo vas al aeropuerto?', 1],
  ['ks62', [K.wo, C('坐','zuò'), C('出租车','chū·zū·chē'), C('去','qù')], 'Voy en taxi.'],
  ['ks63', [C('你家','nǐ jiā'), C('离','lí'), C('学校','xué·xiào'), C('远','yuǎn'), K.ma], '¿Tu casa está lejos de la escuela?', 1],
  ['ks64', [C('不远，','bù yuǎn'), C('走路','zǒu·lù'), C('十分钟','shí fēn·zhōng')], 'No, a diez minutos a pie.'],
  ['ks65', [K.wo, K.shi, C('坐','zuò'), C('飞机','fēi·jī'), C('来','lái'), C('的','de')], 'Vine en avión.'],
  ['ks66', [C('他们','tā·men'), K.shi, C('从','cóng'), C('上海','Shàng·hǎi'), C('来','lái'), C('的','de')], 'Vinieron desde Shanghái.'],
  ['ks67', [C('我的','wǒ de'), C('小猫','xiǎo māo'), C('呢','ne')], '¿Y mi gatito? ¿Dónde está?', 1],
  ['ks68', [C('小猫','xiǎo māo'), K.zai, C('椅子','yǐ·zi'), C('下面','xià·miàn')], 'El gatito está debajo de la silla.'],
  ['ks69', [C('长城','Cháng·chéng'), C('太','tài'), C('美','měi'), C('了','le')], '¡Qué bonita es la Gran Muralla!'],
  ['ks610', [K.wo, C('想','xiǎng'), C('去','qù'), C('故宫','Gù·gōng')], 'Quiero ir a la Ciudad Prohibida.']
]);
kMix('k6f', [['g-k6a','reply',2], ['g-k6b','reply',2], ['g-k6c','reply',3], ['g-k6d','pic',2], ['g-k6e','reply',2], ['g-k6c','speak',2]]);
KU('k6a', 'k6', '飞', 'Taxi, avión y tren', '你怎么去机场？', 'Más medios de transporte', [rule('La regla', 'Quién · cómo · 去 · a dónde', [['我坐飞机去上海。','Voy a Shanghái en avión.'], ['我们打车去火车站。','Tomamos un taxi a la estación.'], ['你怎么去机场？','¿Cómo vas al aeropuerto?']], 'Igual que en Principiante: el medio de transporte va antes de 去.', [['quién','我'], ['cómo','坐飞机'], ['va a','去上海']])]);
KU('k6b', 'k6', '远', 'Lejos o cerca', '你家离学校远吗？', '离, 远, 近 y cuánto tarda', [rule('La regla', 'A 离 B + 远 / 近', [['我家离学校很近。','Mi casa está muy cerca de la escuela.'], ['机场离这儿很远。','El aeropuerto está muy lejos de aquí.'], ['走路十分钟。','Diez minutos a pie.'], ['坐火车要一个小时。','En tren se tarda una hora.']], '十分钟 es cuánto dura; 八点十分 es la hora. 一个小时 = una hora de duración.')]);
KU('k6c', 'k6', '从', 'Cómo llegaste', '你是怎么来的？', '是…的 para algo que ya pasó', [rule('La regla', '是 + lo que destacas + verbo + 的', [['我是坐飞机来的。','Vine en avión.'], ['我是昨天来的。','Vine ayer.'], ['我是从利马来的。','Vine desde Lima.'], ['你是怎么来的？','¿Cómo viniste?']], 'Se usa cuando ya se sabe que llegaste y se pregunta cómo, cuándo o desde dónde.', [['', '我是'], ['cómo', '坐飞机'], ['', '来的']])]);
KU('k6d', 'k6', '桌', '¿Dónde está mi gato?', '我的小猫呢？', '呢, 上, 下面 y 里', [rule('La regla', 'Cosa + 在 + lugar + 上 / 下面 / 里', [['我的小猫呢？','¿Y mi gatito? (¿dónde está?)'], ['小猫在椅子下面。','El gatito está debajo de la silla.'], ['我的书在桌子上。','Mi libro está sobre la mesa.'], ['小猫在车里。','El gatito está dentro del carro.']], 'Al revés que en español: primero la cosa de referencia y después la posición. 桌子上 = «mesa-sobre».')]);
KU('k6e', 'k6', '美', '¡Qué bonito!', '长城太美了！', '太…了 y lugares para visitar', [rule('La regla', '太 + adjetivo + 了 = ¡qué…!', [['长城太美了！','¡Qué bonita es la Gran Muralla!'], ['太好玩儿了！','¡Qué divertido!'], ['你想去哪儿？','¿A dónde quieres ir?'], ['北京有很多好玩儿的地方。','Pekín tiene muchos lugares divertidos.']], 'Con algo malo, 太…了 es «demasiado»: 太贵了, 太远了.')]);
KU('k6f', 'k6', '路', 'De viaje', '你是怎么来的？', 'Frases completas de la ruta', [rule('Repaso', 'Cinco preguntas para un viaje', [['你怎么去机场？','cómo vas'], ['你家离学校远吗？','lejos o cerca'], ['你是怎么来的？','cómo llegaste'], ['我的小猫呢？','dónde está algo'], ['你想去哪儿？','a dónde quieres ir']], 'Practicas las dos partes: preguntar y responder.')], ['ks65','ks68']);
