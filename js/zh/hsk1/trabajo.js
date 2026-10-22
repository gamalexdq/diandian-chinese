/* ---------- HSK 1 · Ruta 4: trabajo y aficiones ---------- */
KW('k4a', [
  ['k_zuo','做','zuò','hacer','你做什么工作？ = ¿A qué te dedicas?'],
  ['k_ys','医生','yī·shēng','médico(a)',''],
  ['k_zx','中学','zhōng·xué','secundaria (colegio)','中学老师 = profesor de secundaria.'],
  ['k_xx2','小学','xiǎo·xué','primaria','小 pequeño + 学 escuela.'],
  ['k_fwy','服务员','fú·wù·yuán','mesero(a), dependiente','También sirve para llamarlo: 服务员！'],
  ['k_sij','司机','sī·jī','chofer','']
]);
KW('k4b', [
  ['k_yy','医院','yī·yuàn','hospital','医 medicina + 院 patio, edificio.'],
  ['k_gs','公司','gōng·sī','empresa','我在一家公司工作.'],
  ['k_xiang','想','xiǎng','querer (hacer); pensar','想 + verbo = querer hacer algo: 我想去中国.'],
  ['k_neng','能','néng','poder','你明天能来吗？ = ¿Puedes venir mañana?']
]);
KW('k4c', [
  ['k_ai','爱','ài','amar; encantar','爱 + verbo = te encanta: 我爱看书.'],
  ['k_cg','唱歌','chàng gē','cantar',''],
  ['k_tw','跳舞','tiào wǔ','bailar',''],
  ['k_hh','画画儿','huà huàr','dibujar, pintar',''],
  ['k_zf','做饭','zuò fàn','cocinar','做 hacer + 饭 comida.'],
  ['k_xsh','小说','xiǎo·shuō','novela','']
]);
KW('k4d', [
  ['k_dyy','电影院','diàn·yǐng·yuàn','cine (el lugar)','电影 película + 院 edificio.'],
  ['k_bu','部','bù','(medida para películas)','一部电影 = una película.'],
  ['k_hk','好看','hǎo·kàn','bonito; bueno (de ver)','好 + 看: bueno para ver.'],
  ['k_yys','有意思','yǒu yì·si','interesante, entretenido',''],
  ['k_myys','没意思','méi yì·si','aburrido',''],
  ['k_piao','票','piào','entrada, boleto','两张票 = dos entradas: 张 para cosas planas.']
]);
KW('k4e', [
  ['k_rs','认识','rèn·shi','conocer (a alguien)','认识 es para personas; para datos, 知道.'],
  ['k_gx','高兴','gāo·xìng','contento',''],
  ['k_hgx','很高兴认识你','hěn gāo·xìng rèn·shi nǐ','mucho gusto','Literalmente: muy contento de conocerte.'],
  ['k_js2','介绍','jiè·shào','presentar','我来介绍一下 = Les presento…'],
  ['k_zd','知道','zhī·dào','saber (un dato)','我知道他的名字 = Sé cómo se llama.'],
  ['k_wys','我也是','wǒ yě shì','yo también','我也很高兴认识你 = El gusto es mío.']
]);
const DK4 = [K.wo, K.ni, K.shi, K.ma, K.bu, K.zai, K.xh, C('做','zuò'), C('什么','shén·me'), C('工作','gōng·zuò'), C('医生','yī·shēng'), C('老师','lǎo·shī'), C('医院','yī·yuàn'), C('公司','gōng·sī'),
  C('想','xiǎng'), C('能','néng'), C('爱','ài'), C('唱歌','chàng gē'), C('跳舞','tiào wǔ'), C('看','kàn'), C('电影','diàn·yǐng'), C('很','hěn'), C('好看','hǎo·kàn'), C('有意思','yǒu yì·si'),
  C('认识','rèn·shi'), C('知道','zhī·dào'), C('高兴','gāo·xìng'), C('也','yě')];
const JOBS4 = [{k:'ls', c:C('老师','lǎo·shī'), es:'profesor(a)', m:'profesor', f:'profesora', pic:'🧑‍🏫'}, {k:'ys', c:C('医生','yī·shēng'), es:'médico(a)', m:'médico', f:'médica', pic:'🧑‍⚕️'},
  {k:'fwy', c:C('服务员','fú·wù·yuán'), es:'mesero(a)', m:'mesero', f:'mesera', pic:'🍽️'}, {k:'sj', c:C('司机','sī·jī'), es:'chofer', m:'chofer', f:'chofer', pic:'🚕'}, {k:'xs', c:C('学生','xué·sheng'), es:'estudiante', m:'estudiante', f:'estudiante', pic:'🧑‍🎓'}];
const jobOf = (j, f) => f.pr.h === '她' ? j.f : j.m;
const FAM4 = [{c:C('我妈妈','wǒ mā·ma'), es:'Mi mamá', pr:C('她','tā'), q:C('你妈妈','nǐ mā·ma'), qes:'tu mamá'}, {c:C('我爸爸','wǒ bà·ba'), es:'Mi papá', pr:C('他','tā'), q:C('你爸爸','nǐ bà·ba'), qes:'tu papá'},
  {c:C('我姐姐','wǒ jiě·jie'), es:'Mi hermana mayor', pr:C('她','tā'), q:C('你姐姐','nǐ jiě·jie'), qes:'tu hermana mayor'}];
kGen('g-k4a', 'k4a', 'profesiones', DK4, {
  say: form => { form = form || pick(['fam','fam','me','q','school']); const j = pick(JOBS4), f = pick(FAM4);
    const s = form === 'me' ? mkS([K.wo, K.shi, j.c], `Soy ${j.es}.`)
      : form === 'q' ? mkS([f.q, C('做','zuò'), C('什么','shén·me'), C('工作','gōng·zuò')], `¿A qué se dedica ${f.qes}?`, '？')
      : form === 'school' ? (zx => mkS([f.c, K.shi, zx ? C('中学老师','zhōng·xué lǎo·shī') : C('小学老师','xiǎo·xué lǎo·shī')], `${f.es} es profesor${f.pr.h === '她' ? 'a' : ''} de ${zx ? 'secundaria' : 'primaria'}.`))(Math.random() < .5)
      : mkS([f.c, K.shi, j.c], `${f.es} es ${jobOf(j, f)}.`);
    return Object.assign(s, {form, pic:form === 'me' || form === 'fam' ? picBox(j.pic) : ''}); },
  qa: form => { form = form || pick(['me','fam']); const j = pick(JOBS4.filter(x => x.k !== 'xs' || form === 'me')), f = pick(FAM4);
    const famA = x => mkS([f.pr, K.shi, x.c], `${f.pr.h === '她' ? 'Ella' : 'Él'} es ${jobOf(x, f)}.`);
    return form === 'fam'
      ? {key:j.k, form, who:'Compañero', q:mkS([f.q, C('做','zuò'), C('什么','shén·me'), C('工作','gōng·zuò')], `¿A qué se dedica ${f.qes}?`, '？'), a:famA(j), cue:picBox(j.pic), wrongs:JOBS4.filter(x => x !== j && x.k !== 'xs').map(famA)}
      : {key:j.k, form, who:'Compañero', q:mkS([K.ni, C('做','zuò'), C('什么','shén·me'), C('工作','gōng·zuò')], '¿A qué te dedicas?', '？'), a:mkS([K.wo, K.shi, j.c], `Soy ${j.es}.`), cue:picBox(j.pic)}; },
  more:{pic: () => { const j = pick(JOBS4), mk = x => mkS([K.wo, K.shi, x.c], `Soy ${x.es}.`);
    return replyEx('g-k4a', '¿Qué haces?', {html:picBox(j.pic)}, mk(j), JOBS4.filter(x => x !== j).map(mk)); }},
  modes:['pic','build','reply','listen','ask'], modes2:['pic','listen','reply']
});
const WORK4 = [{k:'yy', c:C('医院','yī·yuàn'), es:'en un hospital', pic:'🏥'}, {k:'xx', c:C('学校','xué·xiào'), es:'en una escuela', pic:'🏫'}, {k:'gs', c:C('公司','gōng·sī'), es:'en una empresa', pic:'🏢'},
  {k:'yh', c:C('银行','yín·háng'), es:'en un banco', pic:'🏦'}, {k:'fd', c:C('饭店','fàn·diàn'), es:'en un hotel', pic:'🏨'}];
const workS = (w, want, who = K.wo, es = want ? 'Quiero trabajar' : 'Trabajo') => mkS([who, ...(want ? [C('想','xiǎng')] : []), K.zai, w.c, C('工作','gōng·zuò')], `${es} ${w.es}.`);
kGen('g-k4b', 'k4b', 'dónde trabajas y qué quieres', DK4, {
  say: form => { form = form || pick(['work','sis','want','can','cant']); const w = pick(WORK4);
    const s = form === 'sis' ? workS(w, 0, C('我姐姐','wǒ jiě·jie'), 'Mi hermana mayor trabaja')
      : form === 'want' ? workS(w, 1)
      : form === 'can' ? mkS([K.ni, C('明天','míng·tiān'), C('能','néng'), C('来','lái'), K.ma], '¿Puedes venir mañana?', '？')
      : form === 'cant' ? mkS([C('对不起，','duì·bu·qǐ'), K.wo, C('明天','míng·tiān'), C('不能','bù néng'), C('去','qù')], 'Lo siento, mañana no puedo ir.')
      : workS(w, 0);
    return Object.assign(s, {form, pic:form === 'work' || form === 'sis' ? picBox(w.pic) : ''}); },
  qa: form => { form = form || pick(['work','want']); const w = pick(WORK4), want = form === 'want';
    const bad = mkS([K.wo, ...(want ? [C('想','xiǎng')] : []), C('工作','gōng·zuò'), K.zai, w.c], 'Orden equivocado: el lugar va antes de 工作.');
    const others = shuffle(WORK4.filter(x => x !== w)).slice(0, 2).map(x => workS(x, want));
    return {key:w.k, form, who:'Amigo', q:want ? mkS([K.ni, C('想','xiǎng'), K.zai, C('哪儿','nǎr'), C('工作','gōng·zuò')], '¿Dónde quieres trabajar?', '？') : mkS([K.ni, K.zai, C('哪儿','nǎr'), C('工作','gōng·zuò')], '¿Dónde trabajas?', '？'),
      a:workS(w, want), cue:picBox(w.pic), wrongs:[bad, ...others]}; }
});
const ACT4 = [{k:'cg', c:C('唱歌','chàng gē'), es:'cantar', pic:'🎤'}, {k:'tw', c:C('跳舞','tiào wǔ'), es:'bailar', pic:'💃'}, {k:'hh', c:C('画画儿','huà huàr'), es:'dibujar', pic:'🎨'},
  {k:'zf', c:C('做饭','zuò fàn'), es:'cocinar', pic:'🍳'}, {k:'ks', c:C('看小说','kàn xiǎo·shuō'), es:'leer novelas', pic:'📖'}];
kGen('g-k4c', 'k4c', 'lo que te gusta hacer', DK4, {
  say: form => { form = form || pick(['like','love','not','q']); const a = pick(ACT4);
    const s = form === 'love' ? mkS([K.wo, C('爱','ài'), a.c], `Me encanta ${a.es}.`)
      : form === 'not' ? mkS([K.wo, K.bu, K.xh, a.c], `No me gusta ${a.es}.`)
      : form === 'q' ? mkS([K.ni, K.xh, C('做','zuò'), C('什么','shén·me')], '¿Qué te gusta hacer?', '？')
      : mkS([K.wo, K.xh, a.c], `Me gusta ${a.es}.`);
    return Object.assign(s, {form, pic:form === 'q' ? '' : picBox(a.pic)}); },
  qa: () => { const a = pick(ACT4);
    return {key:a.k, who:'Amiga', q:mkS([K.ni, K.xh, C('做','zuò'), C('什么','shén·me')], '¿Qué te gusta hacer?', '？'), a:mkS([K.wo, K.xh, a.c], `Me gusta ${a.es}.`), cue:picBox(a.pic)}; },
  more:{pic: () => { const a = pick(ACT4), mk = x => mkS([x.c], x.es, '');
    return replyEx('g-k4c', '¿Qué es?', {html:picBox(a.pic)}, mk(a), ACT4.filter(x => x !== a).map(mk)); }},
  modes:['pic','build','reply','listen','ask'], modes2:['pic','listen','reply']
});
const FILM4 = [{k:'good', stars:5, c:C('很好看','hěn hǎo·kàn'), es:'Es muy buena.'}, {k:'good', stars:5, c:C('很有意思','hěn yǒu yì·si'), es:'Es muy entretenida.'}, {k:'bad', stars:1, c:C('没意思','méi yì·si'), es:'Es aburrida.'}];
kGen('g-k4d', 'k4d', 'películas y cine', DK4, {
  say: form => { form = form || pick(['film','go','tix','like']); const f = pick(FILM4);
    const s = form === 'go' ? mkS([C('我们','wǒ·men'), C('去','qù'), C('电影院','diàn·yǐng·yuàn'), C('看','kàn'), C('电影','diàn·yǐng'), C('吧','ba')], 'Vamos al cine a ver una película.')
      : form === 'tix' ? mkS([K.wo, C('想','xiǎng'), C('买','mǎi'), C('两张','liǎng zhāng'), C('票','piào')], 'Quiero comprar dos entradas.')
      : form === 'like' ? mkS([K.wo, C('爱','ài'), C('看','kàn'), C('中国电影','Zhōng·guó diàn·yǐng')], 'Me encantan las películas chinas.')
      : mkS([C('这部','zhè bù'), C('电影','diàn·yǐng'), f.c], f.es.replace('Es', 'Esta película es'));
    return Object.assign(s, {form, pic:form === 'film' ? picBox('⭐'.repeat(f.stars)) : ''}); },
  qa: () => { const f = pick(FILM4), a = mkS([C('这部','zhè bù'), C('电影','diàn·yǐng'), f.c], f.es.replace('Es', 'Esta película es'));
    const others = FILM4.filter(x => x.k !== f.k).map(x => mkS([C('这部','zhè bù'), C('电影','diàn·yǐng'), x.c], x.es.replace('Es', 'Esta película es')));
    return {key:f.k, who:'Amigo', q:mkS([C('这部','zhè bù'), C('电影','diàn·yǐng'), C('怎么样','zěn·me·yàng')], '¿Qué tal esta película?', '？'), a, cue:picBox('⭐'.repeat(f.stars)),
      wrongs:[...others, mkS([K.wo, K.zai, C('电影院','diàn·yǐng·yuàn')], 'Estoy en el cine.'), mkS([K.wo, C('想','xiǎng'), C('买','mǎi'), C('票','piào')], 'Quiero comprar entradas.')]}; }
});
const MEET4 = () => pick(MATES);
kGen('g-k4e', 'k4e', 'conocer a alguien', DK4, {
  say: form => { form = form || pick(['nice','know','dk','intro']); const m = MEET4();
    const s = form === 'know' ? mkS([K.wo, C('认识','rèn·shi'), m.c], `Conozco a ${m.es}.`)
      : form === 'dk' ? mkS([K.wo, C('不','bù'), C('知道','zhī·dào'), C('他的','tā de'), C('名字','míng·zi')], 'No sé cómo se llama.')
      : form === 'intro' ? mkS([K.wo, C('来','lái'), C('介绍','jiè·shào'), C('一下','yí xià')], 'Les presento…')
      : mkS([C('很','hěn'), C('高兴','gāo·xìng'), C('认识','rèn·shi'), K.ni], 'Mucho gusto.', '！');
    return Object.assign(s, {form}); },
  qa: form => { form = form || pick(['know','know','nice']); const m = MEET4();
    if (form === 'nice') return {key:'nice', form, who:m.es, q:mkS([C('很高兴','hěn gāo·xìng'), C('认识','rèn·shi'), K.ni], '¡Mucho gusto!', '！'), a:mkS([K.wo, C('也','yě'), C('很高兴','hěn gāo·xìng'), C('认识','rèn·shi'), K.ni], 'El gusto es mío.'),
      cue:cueBox('Te acaban de presentar a alguien.'), wrongs:[mkS([C('没关系','méi guān·xi')], 'No pasa nada.'), mkS([C('不客气','bú kè·qi')], 'De nada.'), mkS([K.wo, C('认识','rèn·shi'), C('他','tā')], 'Lo conozco.')]};
    const st = pick(['yes','no']);
    const yes = mkS([C('认识，','rèn·shi'), C('他是','tā shì'), C('我的','wǒ de'), C('同学','tóng·xué')], 'Sí, es mi compañero de clase.'), no = mkS([C('不认识','bú rèn·shi')], 'No, no lo conozco.');
    return {key:st, form, who:'Amiga', q:mkS([K.ni, C('认识','rèn·shi'), C('他','tā'), K.ma], '¿Lo conoces?', '？'), a:st === 'yes' ? yes : no, cue:picBox('🧑') + cueBox(st === 'yes' ? 'Estudia contigo.' : 'Nunca lo viste.'),
      wrongs:[st === 'yes' ? no : yes, mkS([C('不知道','bù zhī·dào')], 'No sé (un dato).'), mkS([K.wo, C('也','yě'), C('很高兴','hěn gāo·xìng')], 'Yo también estoy contento.')]}; }
});
KS('k4f', [
  ['ks41', [K.ni, C('做','zuò'), C('什么','shén·me'), C('工作','gōng·zuò')], '¿A qué te dedicas?', 1],
  ['ks42', [C('我妈妈','wǒ mā·ma'), K.shi, C('中学老师','zhōng·xué lǎo·shī')], 'Mi mamá es profesora de secundaria.'],
  ['ks43', [C('我姐姐','wǒ jiě·jie'), K.zai, C('医院','yī·yuàn'), C('工作','gōng·zuò')], 'Mi hermana mayor trabaja en un hospital.'],
  ['ks44', [K.wo, C('想','xiǎng'), K.zai, C('中国','Zhōng·guó'), C('工作','gōng·zuò')], 'Quiero trabajar en China.'],
  ['ks45', [K.wo, C('爱','ài'), C('看书','kàn shū')], 'Me encanta leer.'],
  ['ks46', [K.ni, K.xh, C('做','zuò'), C('什么','shén·me')], '¿Qué te gusta hacer?', 1],
  ['ks47', [C('这部','zhè bù'), C('电影','diàn·yǐng'), C('很有意思','hěn yǒu yì·si')], 'Esta película es muy entretenida.'],
  ['ks48', [K.ni, C('认识','rèn·shi'), C('他','tā'), K.ma], '¿Lo conoces?', 1],
  ['ks49', [C('很','hěn'), C('高兴','gāo·xìng'), C('认识','rèn·shi'), K.ni], 'Mucho gusto.'],
  ['ks410', [K.ni, C('明天','míng·tiān'), C('能','néng'), C('来','lái'), K.ma], '¿Puedes venir mañana?', 1]
]);
kMix('k4f', [['g-k4a','reply',2], ['g-k4b','reply',2], ['g-k4c','pic',2], ['g-k4d','reply',2], ['g-k4e','reply',2], ['g-k4b','speak',2]]);
KU('k4a', 'k4', '医', 'Profesiones', '你做什么工作？', '做什么工作 y las profesiones', [rule('La regla', '¿A qué te dedicas?', [['你做什么工作？','¿A qué te dedicas?'], ['我是医生。','Soy médico.'], ['我妈妈是中学老师。','Mi mamá es profesora de secundaria.'], ['服务员！','¡Mesero! (para llamarlo)']], 'Con las profesiones sí se usa 是: 我是医生. Sin artículo: ni «un» ni «una».')]);
KU('k4b', 'k4', '院', '¿Dónde trabajas?', '我在医院工作。', '在 + lugar + 工作 · 想 · 能', [rule('La regla', 'Primero dónde, luego qué haces', [['我在医院工作。','Trabajo en un hospital.'], ['你在哪儿工作？','¿Dónde trabajas?'], ['我想在银行工作。','Quiero trabajar en un banco.'], ['你明天能来吗？','¿Puedes venir mañana?']], 'En español el lugar va al final; en chino, antes del verbo. 我工作在医院 suena a error.', [['quién','我'], ['en dónde','在医院'], ['qué hace','工作']])]);
KU('k4c', 'k4', '歌', 'Lo que te gusta hacer', '你喜欢做什么？', '喜欢 / 爱 + actividad', [rule('La regla', '喜欢 o 爱 + lo que haces', [['我喜欢唱歌。','Me gusta cantar.'], ['我爱跳舞。','Me encanta bailar.'], ['你喜欢做什么？','¿Qué te gusta hacer?'], ['我不喜欢做饭。','No me gusta cocinar.']], '爱 es más fuerte que 喜欢. Con personas, 爱 es «amar».')]);
KU('k4d', 'k4', '影', 'Vamos al cine', '这部电影很好看。', '部, 好看 y 有意思', [rule('La regla', 'Opinar de una película', [['这部电影很好看。','Esta película es muy buena.'], ['这部电影很有意思。','Esta película es muy entretenida.'], ['这部电影没意思。','Esta película es aburrida.'], ['我们去电影院吧。','Vamos al cine.']], '吧 al final propone algo: «vamos, ¿sí?». Para las entradas: 两张票.')]);
KU('k4e', 'k4', '认', 'Conocer a alguien', '很高兴认识你！', '认识, 知道 y 介绍', [rule('La regla', '认识 personas, 知道 datos', [['你认识他吗？','¿Lo conoces?'], ['我不知道他的名字。','No sé cómo se llama.'], ['很高兴认识你！','¡Mucho gusto!'], ['我也很高兴认识你。','El gusto es mío.']], '我来介绍一下 = Les presento a… Así empieza una presentación.')]);
KU('k4f', 'k4', '业', 'Trabajo y tiempo libre', '我在医院工作。', 'Frases completas de la ruta', [rule('Repaso', 'Cinco preguntas sobre la vida de alguien', [['你做什么工作？','su trabajo'], ['你在哪儿工作？','dónde trabaja'], ['你喜欢做什么？','qué le gusta'], ['这部电影怎么样？','qué opina'], ['你认识他吗？','a quién conoce']], 'Practicas las dos partes: preguntar y responder.')], ['ks43','ks47']);
