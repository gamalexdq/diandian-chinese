/* ---------- HSK 1 · Ruta 2: familia y escuela ---------- */
KW('k2a', [
  ['k_py','朋友','péng·you','amigo(a)',''],
  ['k_ez','儿子','ér·zi','hijo',''],
  ['k_ne2','女儿','nǚ·ér','hija','女 mujer + 儿 niño.'],
  ['k_xs','先生','xiān·sheng','señor; esposo','王先生 = el señor Wang: el apellido va primero.'],
  ['k_xj','小姐','xiǎo·jiě','señorita','李小姐 = la señorita Li.'],
  ['k_nage','那','nà','ese, aquel','这 = este (cerca) · 那 = ese (lejos).'],
  ['k_shui','谁的','shéi de','¿de quién?','这是谁的书？ = ¿De quién es este libro?']
]);
KW('k2b', [
  ['k_gou','狗','gǒu','perro',''],
  ['k_mao','猫','māo','gato','Suena como el maullido: māo.'],
  ['k_zhi','只','zhī','(medida para animales)','Número + 只 + animal: 一只狗, 三只猫.'],
  ['k_ge','个','ge','(medida general)','La más común: 一个人, 三个朋友.'],
  ['k_liang','两','liǎng','dos (al contar cosas)','Antes de una palabra de medida, el 2 es 两: 两只猫. Nunca 二只.'],
  ['k_cw','宠物','chǒng·wù','mascota','你有宠物吗？ = ¿Tienes mascota?']
]);
KW('k2c', [
  ['k_shu','书','shū','libro',''],
  ['k_ben','本','běn','(medida para libros)','一本书, 两本书.'],
  ['k_zi','字','zì','carácter, letra','她的字很漂亮 = Tiene una letra muy bonita.'],
  ['k_hz','汉字','Hàn·zì','caracteres chinos','汉 chino (como en 汉语) + 字.'],
  ['k_xie','写','xiě','escribir',''],
  ['k_du','读','dú','leer (en voz alta), estudiar','读书 también es «estudiar» en la escuela.'],
  ['k_pl','漂亮','piào·liang','bonito, lindo','Para personas y cosas: 她很漂亮, 这个字很漂亮.']
]);
KW('k2d', [
  ['k_hui','会','huì','saber (hacer algo)','Una habilidad aprendida: 我会说英语, 我会游泳.'],
  ['k_shuo','说','shuō','hablar, decir','说汉语 = hablar chino.'],
  ['k_xbyy','西班牙语','Xī·bān·yá·yǔ','español (idioma)','País + 语 = su idioma.'],
  ['k_fy','法语','Fǎ·yǔ','francés (idioma)',''],
  ['k_ry','日语','Rì·yǔ','japonés (idioma)',''],
  ['k_bh','不会','bú huì','no saber','不 + 4.º tono → bú.'],
  ['k_kz','很酷','hěn kù','genial','Viene del inglés cool. Muy usado por los jóvenes.']
]);
KW('k2e', [
  ['k_tx','同学','tóng·xué','compañero(a) de clase','同 igual + 学 estudiar.'],
  ['k_ye','也','yě','también','Va antes del verbo: 我也是学生.'],
  ['k_dou','都','dōu','todos; los dos','Va antes del verbo: 我们都是秘鲁人.'],
  ['k_he','和','hé','y (entre nombres)','Solo une personas o cosas: 我和你. No une frases.'],
  ['k_ban','班','bān','clase, grupo (de alumnos)','我们班 = nuestra clase.']
]);
const TA = C('他','tā'), TA2 = C('她','tā');
const DK2 = [K.wo, K.ni, K.shi, K.you, K.ma, K.bu, C('的','de'), C('谁','shéi'), C('朋友','péng·you'), C('儿子','ér·zi'), C('女儿','nǚ·ér'), C('只','zhī'), C('个','ge'),
  C('两只','liǎng zhī'), C('二只','èr zhī'), C('狗','gǒu'), C('猫','māo'), C('大','dà'), C('小','xiǎo'), C('本','běn'), C('书','shū'), C('写','xiě'), C('汉字','Hàn·zì'), C('会','huì'), C('说','shuō'),
  C('汉语','Hàn·yǔ'), C('英语','Yīng·yǔ'), C('同学','tóng·xué'), C('也','yě'), C('都','dōu'), C('和','hé'), C('没有','méi·yǒu')];
const PPL2 = [
  {c:C('儿子','ér·zi'), es:'hijo', pic:'👦', m:1, fam:1}, {c:C('女儿','nǚ·ér'), es:'hija', pic:'👧', m:0, fam:1},
  {c:C('朋友','péng·you'), es:'amigo', pic:'🧑', m:1}, {c:C('老师','lǎo·shī'), es:'profesora', pic:'👩‍🏫', m:0},
  {c:C('妈妈','mā·ma'), es:'mamá', pic:'👩', m:0, fam:1}, {c:C('先生','xiān·sheng'), es:'esposo', pic:'🤵', m:1, fam:1}, {c:C('同学','tóng·xué'), es:'compañera de clase', pic:'👩‍🎓', m:0}
];
// 我妈妈 or 我的妈妈: with family both are fine; with friends and teachers 的 is the norm but 我朋友 is heard too
const whoS = (x, form) => { const t = x.m ? TA : TA2, el = x.m ? 'Él' : 'Ella';
  const with_ = [t, K.shi, C('我的','wǒ de'), x.c], without = [t, K.shi, C('我','wǒ'), x.c];
  return mkS(x.fam ? without : with_, `${el} es mi ${x.es}.`, '。', [(x.fam ? with_ : without).map(c => c.h).join('')]); };
kGen('g-k2a', 'k2a', 'quién es', DK2, {
  say: form => { form = form || pick(['who','who','q','name']); const x = pick(PPL2);
    const s = form === 'q' ? mkS([x.m ? TA : TA2, K.shi, C('谁','shéi')], `¿Quién es ${x.m ? 'él' : 'ella'}?`, '？')
      : form === 'name' ? pick([mkS([C('那','nà'), K.shi, C('王先生','Wáng xiān·sheng')], 'Ese es el señor Wang.'), mkS([C('这','zhè'), K.shi, C('李小姐','Lǐ xiǎo·jiě')], 'Esta es la señorita Li.')])
      : whoS(x);
    return Object.assign(s, {form, pic:form === 'who' ? picBox(x.pic) : ''}); },
  qa: () => { const x = pick(PPL2);
    return {key:x.es, who:'Amiga', q:mkS([x.m ? TA : TA2, K.shi, C('谁','shéi')], `¿Quién es ${x.m ? 'él' : 'ella'}?`, '？'), a:whoS(x),
      cue:picBox(x.pic) + cueBox(`Es tu <b>${x.es}</b>.`), wrongs:shuffle(PPL2.filter(y => y.m === x.m && y !== x)).concat(shuffle(PPL2.filter(y => y.m !== x.m))).slice(0, 3).map(whoS)}; },
  more:{pic: () => { const x = pick(PPL2.filter(y => y.fam)), o = PPL2.filter(y => y !== x);
    return replyEx('g-k2a', '¿Quién es?', {html:picBox(x.pic) + cueBox(`Presenta a tu ${x.es}.`)}, whoS(x), o.map(whoS)); }}
});
const PETS = {gou:{c:C('狗','gǒu'), es:'perro', pl:'perros', pic:'🐶'}, mao:{c:C('猫','māo'), es:'gato', pl:'gatos', pic:'🐱'}};
const zhiC = n => C(['', '一只', '两只', '三只', '四只'][n], ['', 'yì zhī', 'liǎng zhī', 'sān zhī', 'sì zhī'][n]);
const NUMES = ['', 'un', 'dos', 'tres', 'cuatro'];
const petEs = (n, p, size) => `${NUMES[n]} ${n === 1 ? p.es : p.pl}${size ? ' ' + (size === '大' ? (n === 1 ? 'grande' : 'grandes') : (n === 1 ? 'pequeño' : 'pequeños')) : ''}`;
const haveS = (n, k, size) => { const p = PETS[k]; return mkS([K.wo, K.you, zhiC(n), ...(size ? [C(size, size === '大' ? 'dà' : 'xiǎo')] : []), p.c], `Tengo ${petEs(n, p, size)}.`); };
kGen('g-k2b', 'k2b', 'mascotas y palabras de medida', DK2, {
  say: form => { form = form || pick(['have','have','size','ppl','q']); const n = rint(1, 4), k = pick(Object.keys(PETS));
    const s = form === 'size' ? haveS(n, k, pick(['大','小']))
      : form === 'ppl' ? mkS([K.wo, K.you, C(['', '一个', '两个', '三个', '四个'][n], ['', 'yí ge', 'liǎng ge', 'sān ge', 'sì ge'][n]), C('哥哥','gē·ge')], `Tengo ${NUMES[n]} hermano${n > 1 ? 's' : ''} mayor${n > 1 ? 'es' : ''}.`)
      : form === 'q' ? mkS([K.ni, K.you, C('宠物','chǒng·wù'), K.ma], '¿Tienes mascota?', '？')
      : haveS(n, k);
    return Object.assign(s, {form, pic:form === 'have' ? picBox(PETS[k].pic.repeat(n)) : ''}); },
  qa: () => { const none = Math.random() < .2, n = rint(1, 4), k = pick(Object.keys(PETS)), o = k === 'gou' ? 'mao' : 'gou';
    const no = mkS([C('没有，','méi·yǒu'), K.wo, C('没有','méi·yǒu'), C('宠物','chǒng·wù')], 'No, no tengo mascota.');
    const yes = (m, kk) => Object.assign(mkS([C('有，','yǒu'), ...haveS(m, kk).chunks], `Sí, tengo ${petEs(m, PETS[kk])}.`), {});
    const q = mkS([K.ni, K.you, C('宠物','chǒng·wù'), K.ma], '¿Tienes mascota?', '？');
    if (none) return {key:'no', who:'Compañero', q, a:no, cue:ynPic(false), wrongs:[yes(1, k), yes(2, o), yes(3, k)]};
    const wrongs = [yes(n, o), yes(n === 1 ? 2 : n - 1, k), no];
    if (n === 2) wrongs.push(mkS([C('有，','yǒu'), K.wo, K.you, C('二只','èr zhī'), PETS[k].c], 'Sí, tengo dos (mal dicho: es 两只).'));
    return {key:n + k, who:'Compañero', q, a:yes(n, k), cue:picBox(PETS[k].pic.repeat(n)), wrongs}; },
  more:{pic: () => { const n = rint(1, 4), k = pick(Object.keys(PETS)), o = k === 'gou' ? 'mao' : 'gou';
    const wrongs = [haveS(n, o), haveS(n === 4 ? 3 : n + 1, k)];
    if (n === 2) wrongs.unshift(mkS([K.wo, K.you, C('二只','èr zhī'), PETS[k].c], 'Tengo dos (mal dicho).'));
    else wrongs.push(haveS(n === 1 ? 3 : 1, k));
    return replyEx('g-k2b', '¿Qué tienes?', {html:picBox(PETS[k].pic.repeat(n))}, haveS(n, k), wrongs); }},
  modes:['pic','build','reply','listen','pic'], modes2:['pic','listen','reply'], l3:[['pic',3],['build',4],['reply',3],['listen',3],['speak',2]]
});
const OWN2 = [{c:C('老师','lǎo·shī'), es:'de la profesora'}, {c:C('我','wǒ'), es:'mío'}, {c:C('我哥哥','wǒ gē·ge'), es:'de mi hermano mayor'}, {c:C('我朋友','wǒ péng·you'), es:'de mi amigo'}, {c:C('我同学','wǒ tóng·xué'), es:'de mi compañera'}];
const ownS = o => mkS([C('这','zhè'), K.shi, o.c, C('的','de'), C('书','shū')], o.es === 'mío' ? 'Este libro es mío.' : `Este es el libro ${o.es}.`);
kGen('g-k2c', 'k2c', 'libros y caracteres', DK2, {
  say: form => { form = form || pick(['write','read','pretty','books']); const n = rint(1, 4);
    const s = form === 'write' ? mkS([C('老师','lǎo·shī'), C('写','xiě'), C('汉字','Hàn·zì')], 'La profesora escribe caracteres chinos.')
      : form === 'read' ? mkS([K.wo, C('每天','měi·tiān'), C('读','dú'), C('汉语书','Hàn·yǔ shū')], 'Todos los días leo libros de chino.')
      : form === 'pretty' ? mkS([C('她的','tā de'), C('字','zì'), K.hen, C('漂亮','piào·liang')], 'Tiene una letra muy bonita.')
      : mkS([K.wo, K.you, C(['', '一本', '两本', '三本', '四本'][n], ['', 'yì běn', 'liǎng běn', 'sān běn', 'sì běn'][n]), C('书','shū')], `Tengo ${NUMES[n].replace(/^un$/, 'un')} libro${n > 1 ? 's' : ''}.`);
    return Object.assign(s, {form, pic:form === 'books' ? picBox('📕'.repeat(n)) : ''}); },
  qa: () => { const o = pick(OWN2);
    return {key:o.es, who:'Compañero', q:mkS([C('这','zhè'), K.shi, C('谁的','shéi de'), C('书','shū')], '¿De quién es este libro?', '？'), a:ownS(o),
      cue:picBox('📘') + cueBox(`Es <b>${o.es}</b>.`), askCue:'Pregunta de quién es el libro.'}; }
});
const LANG2 = [{c:C('汉语','Hàn·yǔ'), es:'chino'}, {c:C('英语','Yīng·yǔ'), es:'inglés'}, {c:C('西班牙语','Xī·bān·yá·yǔ'), es:'español'}, {c:C('法语','Fǎ·yǔ'), es:'francés'}, {c:C('日语','Rì·yǔ'), es:'japonés'}];
kGen('g-k2d', 'k2d', 'qué idiomas sabes', DK2, {
  say: form => { form = form || pick(['can','not','bit','q','cool']); const l = pick(LANG2);
    const s = form === 'not' ? mkS([K.wo, C('不会','bú huì'), C('说','shuō'), l.c], `No sé hablar ${l.es}.`)
      : form === 'bit' ? mkS([K.wo, C('会','huì'), C('说','shuō'), C('一点儿','yì·diǎnr'), l.c], `Hablo un poco de ${l.es}.`)
      : form === 'q' ? mkS([K.ni, C('会','huì'), C('说','shuō'), l.c, K.ma], `¿Sabes hablar ${l.es}?`, '？')
      : form === 'cool' ? mkS([C('会说汉语','huì shuō Hàn·yǔ'), C('很酷','hěn kù')], '¡Hablar chino es genial!', '！')
      : mkS([K.wo, C('会','huì'), C('说','shuō'), l.c], `Sé hablar ${l.es}.`);
    return Object.assign(s, {form}); },
  qa: () => { const l = pick(LANG2), st = pick(['yes','bit','no']);
    const A = {yes:mkS([C('会，','huì'), K.wo, C('会','huì'), C('说','shuō'), l.c], `Sí, sé hablar ${l.es}.`),
      bit:mkS([C('会','huì'), C('一点儿','yì·diǎnr')], 'Sí, un poco.'),
      no:mkS([C('不会，','bú huì'), K.wo, C('不会','bú huì'), C('说','shuō'), l.c], `No, no sé hablar ${l.es}.`)};
    const o = pick(LANG2.filter(x => x !== l));
    return {key:st, who:'Compañera', q:mkS([K.ni, C('会','huì'), C('说','shuō'), l.c, K.ma], `¿Sabes hablar ${l.es}?`, '？'), a:A[st],
      cue:cueBox(st === 'yes' ? `Hablas ${l.es} muy bien.` : st === 'bit' ? `Hablas solo un poco de ${l.es}.` : `No hablas nada de ${l.es}.`),
      wrongs:[...Object.keys(A).filter(k => k !== st).map(k => A[k]), st === 'yes' ? mkS([C('会，','huì'), K.wo, C('会','huì'), C('说','shuō'), o.c], `Sí, sé hablar ${o.es}.`) : mkS([K.wo, K.shi, C('学生','xué·sheng')], 'Soy estudiante.')]}; }
});
const MATES = [{c:C('李明','Lǐ Míng'), es:'Li Ming', o:'o'}, {c:C('王丽','Wáng Lì'), es:'Wang Li', o:'a'}, {c:C('安娜','Ān·nà'), es:'Ana', o:'a'}, {c:C('马克','Mǎ·kè'), es:'Marco', o:'o'}];
kGen('g-k2e', 'k2e', 'también, todos y 和', DK2, {
  say: form => { form = form || pick(['both','also','all','and']); const [a, b] = shuffle(MATES);
    const s = form === 'both' ? mkS([a.c, C('和','hé'), b.c, C('都','dōu'), K.shi, C('学生','xué·sheng')], `${a.es} y ${b.es} son estudiantes los dos.`)
      : form === 'also' ? mkS([a.c, C('也','yě'), K.shi, C('我的','wǒ de'), C('同学','tóng·xué')], `${a.es} también es mi compañer${a.o} de clase.`)
      : form === 'all' ? mkS([C('我们班','wǒ·men bān'), C('都','dōu'), C('会','huì'), C('说','shuō'), C('英语','Yīng·yǔ')], 'Toda nuestra clase sabe hablar inglés.')
      : mkS([K.wo, C('和','hé'), C('我朋友','wǒ péng·you'), C('都','dōu'), C('喜欢','xǐ·huan'), C('汉语','Hàn·yǔ')], 'A mi amigo y a mí nos gusta el chino.');
    return Object.assign(s, {form}); },
  qa: form => { form = form || pick(['mate','ne']); const a = pick(MATES);
    if (form === 'ne'){
      const st = pick(['yes','no']);
      const yes = mkS([a.c, C('也','yě'), K.shi, C('学生','xué·sheng')], `${a.es} también es estudiante.`), no = mkS([a.c, C('不是','bú shì'), C('学生，','xué·sheng'), C('是','shì'), C('老师','lǎo·shī')], `${a.es} no es estudiante; es profesor${a.o === 'a' ? 'a' : ''}.`);
      return {key:st, form, who:'Compañero', q:mkS([K.wo, K.shi, C('学生，','xué·sheng'), a.c, C('呢','ne')], `Yo soy estudiante. ¿Y ${a.es}?`, '？'), a:st === 'yes' ? yes : no,
        cue:cueBox(st === 'yes' ? `${a.es} también estudia.` : `${a.es} enseña inglés.`), wrongs:[st === 'yes' ? no : yes, mkS([a.c, C('都','dōu'), K.shi, C('学生','xué·sheng')], `${a.es} todos son estudiantes (mal dicho).`), mkS([K.wo, C('也','yě'), K.shi, C('老师','lǎo·shī')], 'Yo también soy profesor.')]};
    }
    const st = pick(['yes','no']);
    const yes = mkS([C('是，','shì'), C('他是','tā shì'), C('我的','wǒ de'), C('同学','tóng·xué')], 'Sí, es mi compañero de clase.'), no = mkS([C('不是，','bú shì'), C('他是','tā shì'), C('我的','wǒ de'), C('朋友','péng·you')], 'No, es mi amigo.');
    return {key:st, form, who:'Profesora', q:mkS([C('他','tā'), K.shi, C('你的','nǐ de'), C('同学','tóng·xué'), K.ma], '¿Es tu compañero de clase?', '？'), a:st === 'yes' ? yes : no,
      cue:picBox('🧑') + cueBox(st === 'yes' ? 'Estudia contigo.' : 'Es tu amigo, no estudia contigo.'), wrongs:[st === 'yes' ? no : yes, mkS([C('他','tā'), C('也','yě'), C('是','shì'), C('老师','lǎo·shī')], 'Él también es profesor.'), mkS([K.wo, K.shi, C('学生','xué·sheng')], 'Soy estudiante.')]}; }
});
KS('k2f', [
  ['ks21', [TA2, K.shi, C('谁','shéi')], '¿Quién es ella?', 1],
  ['ks22', [TA2, K.shi, C('我','wǒ'), C('女儿','nǚ·ér')], 'Es mi hija.', 0, ['她是我的女儿']],
  ['ks23', [K.ni, K.you, C('宠物','chǒng·wù'), K.ma], '¿Tienes mascota?', 1],
  ['ks24', [K.wo, K.you, C('一只','yì zhī'), C('大','dà'), C('狗','gǒu')], 'Tengo un perro grande.'],
  ['ks25', [K.wo, K.you, C('两只','liǎng zhī'), C('猫','māo')], 'Tengo dos gatos.'],
  ['ks26', [C('这','zhè'), K.shi, C('谁的','shéi de'), C('书','shū')], '¿De quién es este libro?', 1],
  ['ks27', [C('我们的','wǒ·men de'), C('汉语老师','Hàn·yǔ lǎo·shī'), K.shi, C('北京人','Běi·jīng rén')], 'Nuestra profesora de chino es de Pekín.'],
  ['ks28', [K.ni, C('会','huì'), C('说','shuō'), C('汉语','Hàn·yǔ'), K.ma], '¿Sabes hablar chino?', 1],
  ['ks29', [K.wo, C('会','huì'), C('说','shuō'), C('一点儿','yì·diǎnr'), C('汉语','Hàn·yǔ')], 'Hablo un poco de chino.'],
  ['ks210', [C('我们','wǒ·men'), C('都','dōu'), K.shi, C('同学','tóng·xué')], 'Todos somos compañeros de clase.']
]);
kMix('k2f', [['g-k2a','reply',2], ['g-k2b','pic',2], ['g-k2c','reply',2], ['g-k2d','reply',2], ['g-k2e','reply',2], ['g-k2b','speak',2]]);
KU('k2a', 'k2', '谁', 'Mi hija, mi amigo', '她是我女儿。', '谁, 的 y la familia', [rule('La regla', '的 = «de»', [['他是谁？','¿Quién es él?'], ['他是我的朋友。','Es mi amigo.'], ['她是我女儿。','Es mi hija: con la familia, 的 se puede quitar.'], ['这是谁的书？','¿De quién es este libro?']], '谁 va donde iría la persona en la respuesta. 他 y 她 suenan igual: tā.')]);
KU('k2b', 'k2', '只', 'Mascotas', '我有两只猫。', '只, 个 y 两 (no 二)', [rule('La regla', 'Número + medida + cosa', [['一只狗','un perro: 只 para animales'], ['两只猫','dos gatos: 两, nunca 二只'], ['三个朋友','tres amigos: 个 para casi todo'], ['一只大狗','un perro grande: el tamaño va antes del animal']], 'En chino no se puede decir «dos gatos» sin la palabra de medida en medio.', [['número','两'], ['medida','只'], ['cosa','猫']])]);
KU('k2c', 'k2', '字', 'Leer y escribir', '老师写汉字。', '书, 本, 写 y 读', [rule('La regla', 'Libros con 本, y 谁的', [['一本书','un libro'], ['两本汉语书','dos libros de chino'], ['这是谁的书？','¿De quién es este libro?'], ['这是老师的书。','Es el libro de la profesora.']], '的 une al dueño con la cosa: 老师的书 = el libro de la profesora.')]);
KU('k2d', 'k2', '会', 'Idiomas', '你会说汉语吗？', '会 + verbo: saber hacer', [rule('La regla', '会 + verbo = saber hacer', [['我会说英语。','Sé hablar inglés.'], ['我不会说法语。','No sé hablar francés.'], ['我会说一点儿汉语。','Hablo un poco de chino.'], ['你会说汉语吗？ · 会。','¿Sabes hablar chino? → Sí.']], 'Para responder que sí, repite el verbo: 会. Para decir que no: 不会.')]);
KU('k2e', 'k2', '同', 'Compañeros', '我们都是学生。', '也, 都 y 和', [rule('La regla', '也 y 都 van antes del verbo', [['我也是学生。','Yo también soy estudiante.'], ['我们都是秘鲁人。','Todos somos peruanos.'], ['我和你','tú y yo: 和 solo une nombres'], ['我是学生，你呢？','Yo soy estudiante, ¿y tú?']], 'Si van juntos, primero 也 y luego 都: 他们也都是学生.')]);
KU('k2f', 'k2', '班', 'Familia y clase', '她是我女儿。', 'Frases completas de la ruta', [rule('Repaso', 'Para hablar de la gente que conoces', [['她是谁？','quién es'], ['你有宠物吗？','mascotas'], ['这是谁的书？','de quién es'], ['你会说汉语吗？','idiomas'], ['他是你的同学吗？','compañeros']], 'Practicas las dos partes: preguntar y responder.')], ['ks22','ks25']);
