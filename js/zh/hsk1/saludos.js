/* ---------- HSK 1 · Ruta 1: saludos y números ---------- */
KW('k1a', [
  ['k_nin','您','nín','usted','El 你 con 心 (corazón) debajo: el «tú» respetuoso, para profesores, mayores y clientes.'],
  ['k_nimen','你们','nǐ·men','ustedes','们 hace plural a las personas: 我们, 你们, 他们.'],
  ['k_tamen','他们','tā·men','ellos, ellas','Si son todas mujeres se escribe 她们. Suena igual.'],
  ['k_hao','好','hǎo','bien; bueno','女 mujer + 子 niño: algo bueno.'],
  ['k_ne','呢','ne','¿y…? (devuelve la pregunta)','我很好，你呢？ = Estoy bien, ¿y tú?'],
  ['k_nhm','你好吗？','nǐ hǎo ma','¿cómo estás?','Pregunta de verdad cómo está alguien. Para saludar basta 你好.'],
  ['k_lsh','老师好','lǎo·shī hǎo','buenos días, profesor(a)','Así saludan los alumnos en China al empezar la clase.']
]);
KW('k1b', [
  ['k_zhu','住','zhù','vivir (en un lugar)','住在 + lugar: 我住在利马.'],
  ['k_jia','家','jiā','casa; familia','Un techo 宀 sobre un cerdo 豕: en el campo, la familia y sus animales.'],
  ['k_nar','哪儿','nǎr','¿dónde?','nǎr (3.er tono) pregunta; nàr (那儿, 4.º tono) responde: allí.'],
  ['k_cs','城市','chéng·shì','ciudad',''],
  ['k_mdl','马德里','Mǎ·dé·lǐ','Madrid','Las ciudades extranjeras se escriben por cómo suenan: Mǎ-dé-lǐ.']
]);
KW('k1c', [
  ['k_sui','岁','suì','año (de edad)','Número + 岁, sin 是: 我二十岁.'],
  ['k_dd','多大','duō dà','¿cuántos años? (jóvenes y adultos)','你多大了？ Con alguien mayor se dice 您多大年纪了？'],
  ['k_js','几岁','jǐ suì','¿cuántos años? (niños)','几 espera un número pequeño: úsalo con niños.'],
  ['k_le','了','le','(marca un cambio o algo que ya pasó)','我二十岁了 = ya tengo 20: el número cambió.'],
  ['k_jn','今年','jīn·nián','este año','今 ahora + 年 año, como 今天.'],
  ['k_nian','年','nián','año','']
]);
KW('k1d', [
  ['k_dh','电话','diàn·huà','teléfono','电 electricidad + 话 palabras.'],
  ['k_hm','号码','hào·mǎ','número (de teléfono, de habitación)',''],
  ['k_sj','手机','shǒu·jī','celular','手 mano + 机 máquina.'],
  ['k_de','的','de','de (posesión)','我的手机 = mi celular. 你的 = tuyo.'],
  ['k_wei','喂','wéi','¿aló?','Solo al teléfono. Se dice con 2.º tono: wéi.'],
  ['k_dadh','打电话','dǎ diàn·huà','llamar por teléfono','打 golpear: antes se «golpeaba» el disco del teléfono.'],
  ['k_yao','幺','yāo','uno (al dictar números)','En teléfonos y habitaciones el 1 se dice yāo, para no confundirlo con el 7 (qī).']
]);
KW('k1e', [
  ['k_qing','请','qǐng','por favor; invitar','Va delante del verbo: 请坐 = siéntese, por favor.'],
  ['k_qz','请坐','qǐng zuò','siéntese, por favor',''],
  ['k_qj','请进','qǐng jìn','pase, por favor',''],
  ['k_qhc','请喝茶','qǐng hē chá','tome un té, por favor','En China se ofrece té a las visitas.'],
  ['k_byx','不用谢','bú yòng xiè','no hay de qué','Igual que 不客气.'],
  ['k_thl','太好了','tài hǎo le','¡qué bien!','太…了 = ¡qué…! También «demasiado»: 太贵了.']
]);
const DK1 = [K.wo, K.ni, C('您','nín'), C('你们','nǐ·men'), C('我们','wǒ·men'), C('他们','tā·men'), K.hen, C('好','hǎo'), K.ma, C('呢','ne'),
  C('住','zhù'), K.zai, C('家','jiā'), C('哪儿','nǎr'), C('岁','suì'), C('多大','duō dà'), C('几岁','jǐ suì'), C('了','le'), K.shi,
  C('电话','diàn·huà'), C('号码','hào·mǎ'), C('手机','shǒu·jī'), C('的','de'), C('多少','duō·shao'), C('请','qǐng'), C('谢谢','xiè·xie')];
const HOW1 = [
  {g:'me', q:[K.ni], qes:'¿Cómo estás?', a:[K.wo, K.hen, C('好，','hǎo'), K.ni, C('呢','ne')], aes:'Muy bien, ¿y tú?', end:'？'},
  {g:'me', q:[C('您','nín')], qes:'¿Cómo está usted?', a:[K.wo, K.hen, C('好，','hǎo'), C('您','nín'), C('呢','ne')], aes:'Muy bien, ¿y usted?', end:'？', who:'Señor Wang', cue:'Respondes con el mismo respeto.'},
  {g:'we', q:[C('你们','nǐ·men')], qes:'¿Cómo están ustedes?', a:[C('我们','wǒ·men'), K.hen, C('好','hǎo')], aes:'Estamos muy bien.', cue:'Respondes por todo el grupo.'},
  {g:'they', q:[C('你爸爸妈妈','nǐ bà·ba mā·ma')], qes:'¿Cómo están tus papás?', a:[C('他们','tā·men'), K.hen, C('好','hǎo')], aes:'Ellos están muy bien.', ask:'Pregunta por sus papás.'}
];
const GREET1 = [
  {pic:'🧑‍🏫', cue:'Entra tu profesora.', h:'老师好', p:'lǎo·shī hǎo', es:'Buenos días, profesora.', ok:['您好']},
  {pic:'👴', cue:'Saludas a un señor mayor.', h:'您好', p:'nín hǎo', es:'Buenos días (con respeto).', ok:[]},
  {pic:'👨‍👩‍👧‍👦', cue:'Saludas a un grupo.', h:'你们好', p:'nǐ·men hǎo', es:'Hola a todos.', ok:[]},
  {pic:'🧒', cue:'Saludas a un niño.', h:'你好', p:'nǐ hǎo', es:'Hola.', ok:[]}
];
const howS = w => mkS([...w.q, C('好','hǎo'), K.ma], w.qes, '？');
kGen('g-k1a', 'k1a', 'saludar y preguntar cómo está', DK1, {
  say: form => { form = form || pick(['q','a']); const w = pick(HOW1); return Object.assign(form === 'q' ? howS(w) : mkS(w.a, w.aes, w.end || '。'), {form}); },
  qa: () => { const w = pick(HOW1); return {key:w.g, who:w.who || 'Amiga', q:howS(w), a:mkS(w.a, w.aes, w.end || '。'), cue:w.cue ? cueBox(w.cue) : '', askCue:w.ask}; },
  more:{pic: () => { const g = pick(GREET1), mk = x => mkS([C(x.h, x.p)], x.es, '！');
    return replyEx('g-k1a', '¿Cómo saludas?', {html:picBox(g.pic) + cueBox(g.cue)}, mk(g), GREET1.filter(x => x !== g && !g.ok.includes(x.h)).map(mk)); }},
  modes:['pic','build','reply','listen','ask'], modes2:['pic','listen','reply'], l3:[['pic',2],['build',3],['reply',3],['listen',3],['ask',2],['speak',2]]
});
const CITY1 = {lm:{c:C('利马','Lì·mǎ'), es:'Lima'}, bj:{c:C('北京','Běi·jīng'), es:'Pekín'}, sh:{c:C('上海','Shàng·hǎi'), es:'Shanghái'},
  kk:{c:C('库斯科','Kù·sī·kē'), es:'Cusco'}, md:{c:C('马德里','Mǎ·dé·lǐ'), es:'Madrid'}};
const cityK = () => pick(Object.keys(CITY1));
kGen('g-k1b', 'k1b', 'dónde vives', DK1, {
  say: (form, k) => { form = form || pick(['yo','home','q','nat']); k = k || cityK(); const c = CITY1[k];
    const s = form === 'home' ? mkS([C('我家','wǒ jiā'), K.zai, c.c], `Mi familia vive en ${c.es}.`)
      : form === 'q' ? mkS([K.ni, C('住','zhù'), K.zai, C('哪儿','nǎr')], '¿Dónde vives?', '？', ['你住哪儿'])
      : form === 'nat' ? mkS([K.wo, K.shi, C('秘鲁人，','Bì·lǔ rén'), K.wo, C('住','zhù'), K.zai, c.c], `Soy peruano y vivo en ${c.es}.`)
      : mkS([K.wo, C('住','zhù'), K.zai, c.c], `Vivo en ${c.es}.`);
    return Object.assign(s, {form}); },
  qa: form => { form = form || pick(['live','home']); const k = cityK(), c = CITY1[k];
    return form === 'home'
      ? {key:k, form, q:mkS([C('你家','nǐ jiā'), K.zai, C('哪儿','nǎr')], '¿Dónde vive tu familia?', '？'), a:mkS([C('我家','wǒ jiā'), K.zai, c.c], `Mi familia vive en ${c.es}.`), cue:cueBox(`Tu familia vive en <b>${c.es}</b>.`)}
      : {key:k, form, q:mkS([K.ni, C('住','zhù'), K.zai, C('哪儿','nǎr')], '¿Dónde vives?', '？', ['你住哪儿']), a:mkS([K.wo, C('住','zhù'), K.zai, c.c], `Vivo en ${c.es}.`), cue:cueBox(`Vives en <b>${c.es}</b>.`)}; }
});
const ageC = n => C(n === 2 ? '两岁' : numZh(n) + '岁', (n === 2 ? 'liǎng' : numPy(n)) + ' suì');
kGen('g-k1c', 'k1c', 'la edad', DK1, {
  say: form => { form = form || pick(['me','me','kid','adult','bro']); const n = rint(18, 65), k = rint(2, 9);
    const s = form === 'kid' ? mkS([K.ni, C('几岁','jǐ suì'), C('了','le')], '¿Cuántos años tienes? (a un niño)', '？')
      : form === 'adult' ? mkS([K.ni, C('多大','duō dà'), C('了','le')], '¿Cuántos años tienes?', '？')
      : form === 'bro' ? mkS([C('我妹妹','wǒ mèi·mei'), C('今年','jīn·nián'), ageC(k)], `Mi hermana menor tiene ${k} años este año.`)
      : mkS([K.wo, ageC(n), C('了','le')], `Tengo ${n} años.`);
    return Object.assign(s, {form}); },
  qa: () => { const kid = Math.random() < .35, n = kid ? rint(2, 9) : rint(15, 70);
    const a = v => mkS([K.wo, ageC(v), C('了','le')], `Tengo ${v} años.`);
    const wrongs = otherNums(n, kid ? 1 : 11, 99).slice(0, 3).map(a);
    if (n === 2) wrongs.unshift(mkS([K.wo, C('二岁','èr suì'), C('了','le')], 'Tengo 2 años (mal dicho: con 岁 es 两).'));
    return {key:n, who:kid ? 'Profesora' : 'Compañero', wrongs, q:kid ? mkS([K.ni, C('几岁','jǐ suì'), C('了','le')], '¿Cuántos años tienes?', '？') : mkS([K.ni, C('多大','duō dà'), C('了','le')], '¿Cuántos años tienes?', '？'),
      a:a(n), cue:(kid ? picBox('🧒') : '') + cueBox(`Tienes <b>${n}</b> años.`), askCue:kid ? 'Pregúntale la edad a este niño.' : 'Pregúntale la edad.'}; },
  more:{pic: () => { const kid = Math.random() < .5, mk = (cs, es) => mkS(cs, es, '？');
    const ji = mk([K.ni, C('几岁','jǐ suì'), C('了','le')], '¿Cuántos años tienes? (a un niño)'), dd = mk([K.ni, C('多大','duō dà'), C('了','le')], '¿Cuántos años tienes?');
    const others = [mk([K.ni, C('住','zhù'), K.zai, C('哪儿','nǎr')], '¿Dónde vives?'), mk([K.ni, C('叫','jiào'), K.sm, C('名字','míng·zi')], '¿Cómo te llamas?')];
    return replyEx('g-k1c', '¿Cómo le preguntas la edad?', {html:picBox(kid ? '🧒' : '🧑') + cueBox(kid ? 'Es un niño de unos 6 años.' : 'Es un chico de unos 20 años.')}, kid ? ji : dd, kid ? others : [ji, ...others]); }},
  modes:['build','reply','pic','listen','ask'], modes2:['listen','reply','pic'], l3:[['build',3],['reply',4],['pic',2],['listen',3],['ask',2],['speak',2]]
});
const PHD = ['零','幺','二','三','四','五','六','七','八','九'], PHP = ['líng','yāo','èr','sān','sì','wǔ','liù','qī','bā','jiǔ'];
const phoneNum = () => { let d = '9' + Array.from({length:8}, () => rint(0, 9)).join(''); if (!d.includes('1')) d = d.slice(0, 5) + '1' + d.slice(6); return d; };
const phGroups = d => [d.slice(0, 3), d.slice(3, 6), d.slice(6)];
const phC = (g, last) => C([...g].map(x => PHD[x]).join('') + (last ? '' : '，'), [...g].map(x => PHP[x]).join(' '));
const phChunks = d => phGroups(d).map((g, i) => phC(g, i === 2));
const phEs = d => phGroups(d).join(' ');
const phCard = d => `<div class="tag" style="font-size:34px">☎ ${phEs(d)}</div>`;
const myPhone = (d, w = '手机') => mkS([C('我的','wǒ de'), C(w + '号码', (w === '手机' ? 'shǒu·jī' : 'diàn·huà') + ' hào·mǎ'), K.shi, ...phChunks(d)], `Mi número de ${w === '手机' ? 'celular' : 'teléfono'} es ${phEs(d)}.`);
const phTweak = d => { const i = rint(1, 8); let x; do x = String(rint(0, 9)); while (x === d[i]); return d.slice(0, i) + x + d.slice(i + 1); };
kGen('g-k1d', 'k1d', 'el número de teléfono', DK1, {
  say: form => { form = form || pick(['mine','mine','q','call']);
    const s = form === 'q' ? mkS([C('你的','nǐ de'), C('电话号码','diàn·huà hào·mǎ'), K.shi, C('多少','duō·shao')], '¿Cuál es tu número de teléfono?', '？')
      : form === 'call' ? mkS([K.wo, C('晚上','wǎn·shang'), C('打电话','dǎ diàn·huà')], 'Llamo por la noche.')
      : myPhone(phoneNum(), pick(['手机','电话']));
    return Object.assign(s, {form}); },
  qa: () => { const d = phoneNum(), a = myPhone(d);
    return {key:d, who:'Compañera', q:mkS([C('你的','nǐ de'), C('手机号码','shǒu·jī hào·mǎ'), K.shi, C('多少','duō·shao')], '¿Cuál es tu número de celular?', '？'), a, cue:phCard(d),
      wrongs:[phTweak(d), phTweak(d), phTweak(d)].map(x => myPhone(x))}; },
  more:{
    phone: () => { const d = phoneNum(), s = myPhone(d);
      return {t:'digits', item:'g-k1d', kind:'Dictado: el número de teléfono', say:s.h, q:audioBtns(s.h), hint:'Escribe solo las cifras, seguidas. Recuerda: yāo es 1.', answer:d, rev:{h:s.h, p:s.p, es:phEs(d)}}; },
    read: () => { const d = phoneNum(), zh = x => phChunks(x).map(c => c.h).join(''), py = x => phChunks(x).map(c => c.p).join(' ');
      const os = [{v:zh(d), say:zh(d), html:`<span class="han" style="font-size:22px">${zh(d)}</span>`}];
      const yi = zh(d).replace(/幺/g, '一');
      os.push({v:yi, say:yi, html:`<span class="han" style="font-size:22px">${yi}</span>`});
      for (let k = 0; os.length < 4 && k < 20; k++){ const x = zh(phTweak(d)); if (!os.some(o => o.v === x)) os.push({v:x, say:x, html:`<span class="han" style="font-size:22px">${x}</span>`}); }
      return {t:'mc', item:'g-k1d', kind:'¿Cómo lo dictas?', q:phCard(d), wide:true, options:shuffle(os), answer:zh(d), rev:{h:zh(d), p:py(d), es:phEs(d)}}; }
  },
  modes:['read','phone','reply','build','listen'], modes2:['phone','phone','read','reply'], l3:[['phone',5],['read',3],['reply',3],['ask',2],['speak',2]]
});
const POL1 = [
  {key:'dn', who:'Amiga', say:mkS([C('谢谢你','xiè·xie nǐ')], '¡Gracias!', '！'), a:mkS([C('不客气','bú kè·qi')], 'De nada.'), ok:['不用谢'], cue:'Te da las gracias.'},
  {key:'dn', who:'Profesor', say:mkS([C('谢谢','xiè·xie')], '¡Gracias!', '！'), a:mkS([C('不用谢','bú yòng xiè')], 'No hay de qué.'), ok:['不客气'], cue:'Te da las gracias.'},
  {key:'mg', who:'Señor', say:mkS([C('对不起','duì·bu·qǐ')], '¡Perdón!', '！'), a:mkS([C('没关系','méi guān·xi')], 'No pasa nada.'), ok:[], cue:'Te pisa sin querer.'},
  {key:'xx', who:'Profesora', say:mkS([C('请坐','qǐng zuò')], 'Siéntate, por favor.'), a:mkS([C('谢谢','xiè·xie')], 'Gracias.'), ok:[], cue:'Te ofrece una silla.'},
  {key:'xx', who:'Abuela', say:mkS([C('请喝茶','qǐng hē chá')], 'Toma un té, por favor.'), a:mkS([C('谢谢','xiè·xie')], 'Gracias.'), ok:[], cue:'Te sirve té.'},
  {key:'thl', who:'Amigo', say:mkS([C('我们','wǒ·men'), C('一起','yì·qǐ'), C('吃晚饭，','chī wǎn·fàn'), C('好吗','hǎo ma')], '¿Cenamos juntos?', '？'), a:mkS([C('太好了','tài hǎo le')], '¡Qué bien!', '！'), ok:['谢谢'], cue:'Te encanta la idea.'},
  {key:'zj', who:'Compañero', say:mkS([C('再见','zài·jiàn')], '¡Adiós!', '！'), a:mkS([C('再见','zài·jiàn')], 'Adiós.', '！'), ok:[], cue:'Se va.'}
];
const POLS1 = [
  () => mkS([C('请','qǐng'), C('坐','zuò')], 'Siéntese, por favor.'), () => mkS([C('请','qǐng'), C('喝','hē'), C('茶','chá')], 'Tome un té, por favor.'),
  () => mkS([C('老师，','lǎo·shī'), C('请','qǐng'), C('进','jìn')], 'Pase, profesora, por favor.'), () => mkS([C('对不起，','duì·bu·qǐ'), K.wo, K.bu, C('知道','zhī·dào')], 'Lo siento, no lo sé.'),
  () => mkS([C('谢谢','xiè·xie'), C('您','nín')], 'Muchas gracias (a usted).'), () => mkS([C('太','tài'), C('好','hǎo'), C('了','le')], '¡Qué bien!', '！')
];
kGen('g-k1e', 'k1e', 'responder con cortesía', DK1, {
  say: () => Object.assign(pick(POLS1)(), {form:'x'}),
  qa: () => { const s = pick(POL1);
    return {key:s.key, who:s.who, q:s.say, a:s.a, cue:cueBox(s.cue), wrongs:uniqBy(POL1.filter(x => x.key !== s.key && !s.ok.includes(noPunct(x.a.h))), x => x.a.h).map(x => x.a)}; },
  modes:['reply','build','reply','listen'], modes2:['reply','listen','reply'], l3:[['reply',6],['build',3],['listen',3],['speak',2]]
});
KS('k1f', [
  ['ks11', [C('您','nín'), C('好','hǎo'), K.ma], '¿Cómo está usted?', 1],
  ['ks12', [K.wo, K.hen, C('好，','hǎo'), K.ni, C('呢','ne')], 'Muy bien, ¿y tú?', 1],
  ['ks13', [K.ni, C('住','zhù'), K.zai, C('哪儿','nǎr')], '¿Dónde vives?', 1, ['你住哪儿']],
  ['ks14', [K.wo, C('住','zhù'), K.zai, C('利马','Lì·mǎ')], 'Vivo en Lima.'],
  ['ks15', [K.ni, C('多大','duō dà'), C('了','le')], '¿Cuántos años tienes?', 1],
  ['ks16', [K.wo, C('二十五岁','èr·shí·wǔ suì'), C('了','le')], 'Tengo 25 años.'],
  ['ks17', [C('你的','nǐ de'), C('电话号码','diàn·huà hào·mǎ'), K.shi, C('多少','duō·shao')], '¿Cuál es tu número de teléfono?', 1],
  ['ks18', [C('我的','wǒ de'), C('手机号码','shǒu·jī hào·mǎ'), K.shi, C('九八七，','jiǔ bā qī'), C('六五四，','liù wǔ sì'), C('三二幺','sān èr yāo')], 'Mi número de celular es 987 654 321.'],
  ['ks19', [C('老师，','lǎo·shī'), C('请','qǐng'), C('喝','hē'), C('茶','chá')], 'Profesora, tome un té, por favor.'],
  ['ks110', [C('谢谢！','xiè·xie'), C('不客气','bú kè·qi')], '¡Gracias! —De nada.']
]);
kMix('k1f', [['g-k1a','reply',2], ['g-k1b','reply',2], ['g-k1c','reply',2], ['g-k1d','phone',2], ['g-k1e','reply',2], ['g-k1c','speak',2]]);
KU('k1a', 'k1', '您', 'Hola a todos', '您好！你们好！', '您, 你们 y 你好吗？', [rule('La regla', 'Un saludo para cada persona', [['你好！','a un amigo o a un niño'], ['您好！','a alguien mayor o a un cliente: con respeto'], ['你们好！','a un grupo'], ['老师好！','a tu profesor(a)']], 'Para responder a 你好吗？: 我很好，你呢？ 呢 devuelve la pregunta.')]);
KU('k1b', 'k1', '住', '¿Dónde vives?', '你住在哪儿？', '住在 + ciudad', [rule('La regla', 'Quién · 住在 · lugar', [['我住在利马。','Vivo en Lima.'], ['你住在哪儿？','¿Dónde vives?'], ['我家在库斯科。','Mi familia vive en Cusco.']], 'Como siempre en chino, la pregunta tiene el mismo orden que la respuesta: 哪儿 va donde iría la ciudad.', [['quién','我'], ['vive en','住在'], ['dónde','利马']])]);
KU('k1c', 'k1', '岁', '¿Cuántos años tienes?', '你多大了？', '岁, 多大 y 几岁', [rule('La regla', 'Número + 岁, sin 是', [['你多大了？','¿Cuántos años tienes? (jóvenes y adultos)'], ['你几岁了？','¿Cuántos años tienes? (niños)'], ['我二十岁了。','Tengo 20 años.'], ['她两岁。','Tiene 2 años: 两, no 二.']], '了 al final dice que el número cambió: «ya tengo 20». En la edad no se usa 是: 我二十岁, no 我是二十岁.')]);
KU('k1d', 'k1', '号', 'Mi número de teléfono', '你的电话号码是多少？', '号码 y el 1 que se dice yāo', [rule('La regla', 'Los números de teléfono, cifra por cifra', [['九八七','987: se dicen las cifras sueltas'], ['幺','el 1 se dice yāo'], ['零','el 0 se dice líng'], ['你的手机号码是多少？','¿Cuál es tu número de celular?']], 'Para preguntar un número grande se usa 多少, no 几. Y 的 marca de quién es: 我的手机 = mi celular.')]);
KU('k1e', 'k1', '谢', 'Gracias y perdón', '谢谢！不客气。', 'Responder con cortesía', [rule('Cortesía', 'Lo que te dicen y lo que respondes', [['谢谢！ · 不客气。','Gracias. → De nada.'], ['对不起！ · 没关系。','Perdón. → No pasa nada.'], ['请坐。 · 谢谢。','Siéntese. → Gracias.'], ['我们一起吃饭，好吗？ · 太好了！','¿Comemos juntos? → ¡Qué bien!']], '请 + verbo es la forma amable de pedir algo: 请进, 请坐, 请喝茶.')]);
KU('k1f', 'k1', '句', 'Saludar y presentarte', '您好！我住在利马。', 'Frases completas de la ruta', [rule('Repaso', 'Cinco preguntas para conocer a alguien', [['你好吗？','cómo está'], ['你住在哪儿？','dónde vive'], ['你多大了？','su edad'], ['你的电话号码是多少？','su teléfono'], ['谢谢！ · 不客气。','y agradecer']], 'Practicas las dos partes: preguntar y responder.')], ['ks12','ks16']);
