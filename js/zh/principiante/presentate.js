/* ---------- content · Ruta 1: preséntate ---------- */
W('anh','a1','你好','nǐ hǎo','hola','Dos terceros tonos seguidos: el primero se vuelve 2.º. Se escribe nǐ hǎo y suena ní hǎo.');
W('ani','a1','你','nǐ','tú','亻 a la izquierda = persona.');
W('awo','a1','我','wǒ','yo','La palabra más útil: con ella empiezan casi todas tus frases.');
W('ajiao','a1','叫','jiào','llamarse','我叫… = me llamo…. Lleva 口 (boca): te llaman en voz alta.');
W('asm','a1','什么','shén·me','¿qué?','Va donde iría la respuesta: 你叫什么？ → 我叫李明。');
W('amz','a1','名字','míng·zi','nombre','字 va átono: míng zi.');
W('anjmz','a1','你叫什么名字？','nǐ jiào shén·me míng·zi','¿Cómo te llamas?','Literal: «¿tú te llamas qué nombre?». Respondes 我叫 + tu nombre.');
W('aqw','a1','请问','qǐng·wèn','disculpe… (antes de preguntar)','Lo pones antes de una pregunta para ser cortés: 请问，你叫什么名字？ Cuida los tonos 3 y 4.');
W('axie','a1','谢谢','xiè·xie','gracias','El segundo 谢 va átono.');
W('azj','a1','再见','zài·jiàn','adiós','再 = otra vez · 见 = ver → «hasta volver a vernos».');

W('ashi','a3','是','shì','ser','Une dos cosas: 我是学生 = soy estudiante. sh con la lengua hacia atrás: shì (ser) no es sì (cuatro).');
W('aren','a3','人','rén','persona','Parece alguien caminando. La r china suena entre la «r» y la «y» de «yo».');
W('aguo','a3','国','guó','país','Va en el nombre de muchos países: 中国, 美国, 英国.');
W('ana','a3','哪','nǎ','¿cuál? (para elegir)','哪国 = ¿qué país?');
W('azg','a3','中国','Zhōng·guó','China','中 = centro: «el país del centro».');
W('amg','a3','美国','Měi·guó','Estados Unidos','美 = bello. Viene del sonido de «A-me-rica».');
W('abl','a3','秘鲁','Bì·lǔ','Perú','Ojo: 秘 aquí se lee bì, no mì. Es solo sonido y no lleva 国.');
W('anngr','a3','你是哪国人？','nǐ shì nǎ guó rén','¿De qué país eres?','Respondes 我是 + país + 人: 我是秘鲁人。');

W('ayg','a4','英国','Yīng·guó','Reino Unido (Inglaterra)','英 suena a «Eng-land».');
W('adg','a4','德国','Dé·guó','Alemania','德 viene de «Deutschland».');
W('afg','a4','法国','Fǎ·guó','Francia','法 viene de «France».');
W('arb','a4','日本','Rì·běn','Japón','日 = sol · 本 = origen: «donde nace el sol». No lleva 国.');
W('axby','a4','西班牙','Xī·bān·yá','España','Solo sonido: Xi-ban-ya ≈ «Hispania».');
W('ayd','a4','印度','Yìn·dù','India','yìn termina en n, no en ng.');

W('ama','a5','吗','ma','¿…? (pregunta de sí o no)','Frase + 吗 = pregunta: 你是学生。→ 你是学生吗？');
W('abus','a5','不是','bú shì','no ser','不 antes de un 4.º tono suena bú. Para decir que no: 不，我不是学生。');
W('axs','a5','学生','xué·sheng','estudiante','学 = estudiar · 生 = persona joven. 生 va átono.');
W('als','a5','老师','lǎo·shī','profesor, profesora','También sirve para dirigirte a él o ella: 刘老师.');
W('axx','a5','学习','xué·xí','estudiar','我学习汉语 = estudio chino.');
W('ahy','a5','汉语','Hàn·yǔ','chino (idioma)','汉 = la etnia Han · 语 = idioma. También se dice 中文.');
W('ayy','a5','英语','Yīng·yǔ','inglés (idioma)','El mismo 英 de 英国 + 语 idioma.');

W('azhe','a6','这','zhè','este, esta','这是… = este es… / esta es….');
W('ata','a6','他','tā','él','亻 = persona.');
W('ata2','a6','她','tā','ella','女 = mujer. Suena igual que 他: solo se distinguen al escribir.');
W('ashui','a6','谁','shéi','¿quién?','También se dice shuí. Va donde iría la respuesta: 她是谁？ → 她是我姐姐。');
W('abb','a6','爸爸','bà·ba','papá','El segundo 爸 va átono.');
W('amm','a6','妈妈','mā·ma','mamá','mā con 1.er tono; 吗 ma es otra palabra.');
W('agg','a6','哥哥','gē·ge','hermano mayor','En chino no hay «hermano» a secas: siempre dices si es mayor o menor.');
W('ajj','a6','姐姐','jiě·jie','hermana mayor','Lleva 女 (mujer), como 妈.');
W('add','a6','弟弟','dì·di','hermano menor','');
W('amei','a6','妹妹','mèi·mei','hermana menor','Lleva 女 (mujer).');

const k1 = {wo:C('我','wǒ'), ni:C('你','nǐ'), ta:C('他','tā'), ta2:C('她','tā'), shi:C('是','shì'), bus:C('不是','bú shì'), ma:C('吗','ma'),
  jiao:C('叫','jiào'), sm:C('什么','shén·me'), mz:C('名字','míng·zi'), na:C('哪','nǎ'), guo:C('国','guó'), ren:C('人','rén'),
  xs:C('学生','xué·sheng'), ls:C('老师','lǎo·shī'), xx:C('学习','xué·xí'), hy:C('汉语','Hàn·yǔ'), yy:C('英语','Yīng·yǔ'), zhe:C('这','zhè'), shui:C('谁','shéi')};
const NAT = {};
[['zg','azg'],['mg','amg'],['bl','abl'],['yg','ayg'],['dg','adg'],['fg','afg'],['rb','arb'],['xby','axby'],['yd','ayd']].forEach(([k, id]) => {
  const it = ITEMS[id]; NAT[k] = {id:k, c:C(it.h, it.p), es:it.es.replace(/ \(.*\)$/, '')};
});
const NAT3 = ['zg','mg','bl'];
const FAM = {};
[['bb','abb',1],['mm','amm',0],['gg','agg',1],['jj','ajj',0],['dd','add',1],['mei','amei',0]].forEach(([k, id, m]) => {
  const it = ITEMS[id]; FAM[k] = {id:k, c:C(it.h, it.p), es:it.es, m};
});
const NAMES = [['李明','Lǐ Míng','Li Ming'], ['王丽','Wáng Lì','Wang Li'], ['张伟','Zhāng Wěi','Zhang Wei'], ['刘洋','Liú Yáng','Liu Yang']].map(([h, p, es]) => ({c:C(h, p), es}));
const LANGS = [{c:k1.hy, es:'chino'}, {c:k1.yy, es:'inglés'}];
const taC = m => m ? k1.ta : k1.ta2;
const sent1 = (chunks, q) => ({h:chunks.map(c => c.h).join('') + (q ? '？' : '。'), p:chunks.map(c => c.p).join(' ')});
const joinH = chunks => chunks.map(c => c.h).join('');
const DISTRACT1 = [k1.wo, k1.ni, k1.ta, k1.ta2, k1.shi, k1.bus, k1.ma, k1.jiao, k1.sm, k1.mz, k1.na, k1.ren, k1.xs, k1.ls, k1.xx, k1.hy, k1.zhe, k1.shui,
  ...Object.values(NAT).map(n => n.c), ...Object.values(FAM).map(f => f.c)];
// 他 and 她 sound the same: never offer one as a distractor for the other
const homo = (a, b) => a.h !== b.h && loose(a.p) === loose(b.p);
const tiles1 = (chunks, n = 3) => shuffle([...chunks, ...shuffle(DISTRACT1.filter(d => !chunks.some(c => c.h === d.h || homo(c, d)))).slice(0, n)]);

// question → answer templates; g groups answers that could fit each other's question
const QA = {
  name: () => { const n = pick(NAMES);
    return {g:'name', q:[k1.ni, k1.jiao, k1.sm, k1.mz], qes:'¿Cómo te llamas?', a:[k1.wo, k1.jiao, n.c], aes:`Me llamo ${n.es}.`, alt:[[k1.ni, k1.jiao, k1.sm]]}; },
  nat: () => { const n = pick(Object.values(NAT));
    return {g:'nat', q:[k1.ni, k1.shi, k1.na, k1.guo, k1.ren], qes:'¿De qué país eres?', a:[k1.wo, k1.shi, n.c, k1.ren], aes:`Soy de ${n.es}.`, alt:[[k1.ni, k1.shi, n.c, k1.ren, k1.ma]]}; },
  natma: () => { const n = pick(Object.values(NAT)), yes = Math.random() < .5;
    return {g:'nat', q:[k1.ni, k1.shi, n.c, k1.ren, k1.ma], qes:`¿Eres de ${n.es}?`,
      a: yes ? [C('是，','shì'), k1.wo, k1.shi, n.c, k1.ren] : [C('不，','bù'), k1.wo, k1.bus, n.c, k1.ren], aes: yes ? `Sí, soy de ${n.es}.` : `No, no soy de ${n.es}.`}; },
  stu: () => { const [w, o] = shuffle([[k1.xs, 'estudiante'], [k1.ls, 'profesor(a)']]), yes = Math.random() < .5;
    return {g:'stu', q:[k1.ni, k1.shi, w[0], k1.ma], qes:`¿Eres ${w[1]}?`,
      a: yes ? [C('是，','shì'), k1.wo, k1.shi, w[0]] : [C('不，','bù'), k1.wo, k1.bus, C(w[0].h + '，', w[0].p), k1.wo, k1.shi, o[0]],
      aes: yes ? `Sí, soy ${w[1]}.` : `No, no soy ${w[1]}; soy ${o[1]}.`}; },
  study: () => { const l = pick(LANGS);
    return {g:'study', q:[k1.ni, k1.xx, k1.sm], qes:'¿Qué estudias?', a:[k1.wo, k1.xx, l.c], aes:`Estudio ${l.es}.`}; },
  fam: () => { const f = pick(Object.values(FAM)), art = f.m ? 'este' : 'esta';
    if (Math.random() < .5) return {g:'fam', q:[k1.zhe, k1.shi, k1.ni, f.c, k1.ma], qes:`¿${cap(art)} es tu ${f.es}?`, a:[C('是，','shì'), k1.zhe, k1.shi, k1.wo, f.c], aes:`Sí, ${art} es mi ${f.es}.`};
    return {g:'fam', q:[taC(f.m), k1.shi, k1.shui], qes:`¿Quién es ${f.m ? 'él' : 'ella'}?`, a:[taC(f.m), k1.shi, k1.wo, f.c], aes:`${f.m ? 'Él' : 'Ella'} es mi ${f.es}.`, alt:[[k1.zhe, k1.shi, k1.shui]]}; }
};
function introEx(mode, groups, item = 'g-intro'){
  const keys = groups || Object.keys(QA);
  const s = QA[pick(keys)]();
  const Q = sent1(s.q, 1), A = sent1(s.a, 0);
  if (mode === 'build' || mode === 'listen'){
    const useQ = Math.random() < .5, x = useQ ? s.q : s.a, r = {...(useQ ? Q : A), es:useQ ? s.qes : s.aes};
    if (mode === 'listen') return {t:'tiles', item, kind:'Dictado: ordena lo que oyes', say:r.h, q:audioBtns(r.h), bank:tiles1(x), answer:joinH(x), rev:r};
    return {t:'tiles', item, kind:'Traduce al chino', q:`<div class="qtext">${esc(r.es)}</div>`, bank:tiles1(x), answer:joinH(x), rev:r};
  }
  if (mode === 'speak') return {t:'speak', item, kind:'Responde en voz alta', say:Q.h, q:`${audioBtns(Q.h)}<div class="qtext">${esc(s.qes)}</div><div class="hint">Responde en chino antes de ver una respuesta modelo.</div>`, rev:{...A, es:s.aes}};
  if (mode === 'ask') return {t:'tiles', item, kind:'Haz la pregunta', q:`<div class="han" style="font-size:26px">${esc(A.h)}</div><div class="es">${esc(s.aes)}</div><div class="ask">¿Qué pregunta lleva a esta respuesta?</div>`,
    bank:tiles1(s.q), answer:[s.q, ...(s.alt || [])].map(joinH), rev:{...Q, es:s.qes}};
  // reply: hear the question, pick the answer that fits
  let pool = Object.keys(QA).filter(k => QA[k]().g !== s.g);
  if (groups && pool.filter(k => keys.includes(k)).length >= 2) pool = pool.filter(k => keys.includes(k));
  const opts = [{...A, es:s.aes}];
  for (let guard = 0; opts.length < 4 && guard < 80; guard++){
    const x = QA[pick(pool)](), xa = sent1(x.a, 0);
    if (!opts.some(o => o.h === xa.h)) opts.push({...xa, es:x.aes});
  }
  return {t:'mc', item, kind:'Escucha y responde', say:Q.h, q:`${audioBtns(Q.h)}${LV >= 2 ? '' : `<div class="han" style="font-size:26px">${esc(Q.h)}</div>`}<div class="ask">¿Qué respondes?</div>`,
    options:shuffle(opts).map(o => ({v:o.h, say:o.h, html:`<span class="han">${esc(o.h)}</span>${LV >= 2 ? '' : `<small>${pyHTML(o.p)}</small>`}`})), answer:A.h,
    rev:{h:Q.h + ' ' + A.h, p:Q.p + ' · ' + A.p, es:s.qes + ' ' + s.aes}};
}
function natEx(mode, ids, item = 'g-nat'){
  const n = NAT[pick(ids || Object.keys(NAT))];
  if (mode === 'country'){
    const opts = shuffle([n, ...shuffle(Object.values(NAT).filter(x => x !== n)).slice(0, 3)]);
    return {t:'mc', item, kind:'Escucha: ¿qué país es?', say:n.c.h, q:audioBtns(n.c.h, true), options:opts.map(x => ({v:x.id, html:esc(x.es)})), answer:n.id, rev:{h:n.c.h, p:n.c.p, es:n.es}};
  }
  const m = Math.random() < .5;
  const f = pick([
    {c:[k1.wo, k1.shi, n.c, k1.ren], es:`Soy de ${n.es}.`},
    {c:[taC(m), k1.shi, n.c, k1.ren], es:`${m ? 'Él' : 'Ella'} es de ${n.es}.`},
    {c:[k1.ni, k1.shi, n.c, k1.ren, k1.ma], es:`¿Eres de ${n.es}?`, q:1},
    {c:[C('不，','bù'), k1.wo, k1.bus, n.c, k1.ren], es:`No, no soy de ${n.es}.`}
  ]);
  const r = {...sent1(f.c, f.q), es:f.es};
  if (mode === 'listen') return {t:'tiles', item, kind:'Dictado: ordena lo que oyes', say:r.h, q:audioBtns(r.h), bank:tiles1(f.c), answer:joinH(f.c), rev:r};
  return {t:'tiles', item, kind:'Traduce al chino', q:`<div class="qtext">${esc(f.es)}</div>`, bank:tiles1(f.c), answer:joinH(f.c), rev:r};
}
// same syllable in four tones, with everyday characters so the voice reads them right
const TONESETS = [
  ['妈麻马骂', ['mā','má','mǎ','mà'], ['mamá','cáñamo','caballo','regañar']],
  ['八拔把爸', ['bā','bá','bǎ','bà'], ['ocho','arrancar','agarrar','papá']],
  ['衣姨椅意', ['yī','yí','yǐ','yì'], ['ropa','tía','silla','idea']],
  ['汤糖躺烫', ['tāng','táng','tǎng','tàng'], ['sopa','azúcar','acostarse','quemar']],
  ['书熟鼠树', ['shū','shú','shǔ','shù'], ['libro','maduro','ratón','árbol']],
  ['七骑起气', ['qī','qí','qǐ','qì'], ['siete','montar','levantarse','aire']],
  ['通同桶痛', ['tōng','tóng','tǒng','tòng'], ['pasar','igual','balde','dolor']],
  ['屋无五雾', ['wū','wú','wǔ','wù'], ['casa','sin','cinco','niebla']],
  ['飞肥匪费', ['fēi','féi','fěi','fèi'], ['volar','gordo','bandido','gasto']],
  ['低笛底弟', ['dī','dí','dǐ','dì'], ['bajo','flauta','fondo','hermano menor']]
];
const TONE_NAMES = ['1.º · alto y plano', '2.º · sube', '3.º · baja y sube', '4.º · cae'];
function toneEx(mode){
  const t = pick(TONESETS), k = rint(0, 3), h = [...t[0]][k], p = t[1][k];
  const rev = {h, p, es:t[2][k]};
  if (mode === 'name') return {t:'mc', item:'g-tone', kind:'¿Qué tono marca?', q:`<div class="pybig" style="font-size:44px">${esc(p)}</div>`,
    options:TONE_NAMES.map((x, i) => ({v:String(i + 1), html:esc(x)})), answer:String(k + 1), rev};
  return {t:'mc', item:'g-tone', kind:'Escucha: ¿qué tono es?', say:h, q:audioBtns(h, true),
    options:t[1].map((x, i) => ({v:String(i + 1), html:`<span class="pybig" style="font-size:24px">${pyHTML(x)}</span><small>${TONE_NAMES[i]}</small>`})), answer:String(k + 1), rev};
}
// minimal pairs: same tone, only the hard sound changes
const SOUNDSETS = [
  [['是','shì','ser'], ['四','sì','cuatro'], ['戏','xì','teatro']],
  [['七','qī','siete'], ['吃','chī','comer'], ['西','xī','oeste']],
  [['书','shū','libro'], ['苏','sū','Su (apellido)'], ['虚','xū','vacío']],
  [['字','zì','carácter'], ['志','zhì','voluntad']],
  [['中','zhōng','centro'], ['宗','zōng','linaje']],
  [['名','míng','nombre'], ['民','mín','pueblo']],
  [['英','yīng','Inglaterra (英国)'], ['因','yīn','causa']],
  [['三','sān','tres'], ['桑','sāng','morera']],
  [['绿','lǜ','verde'], ['路','lù','camino']],
  [['女','nǚ','mujer'], ['努','nǔ','esforzarse']],
  [['学','xué','estudiar'], ['鞋','xié','zapato']],
  [['入','rù','entrar'], ['路','lù','camino']],
  [['兔','tù','conejo'], ['肚','dù','vientre']],
  [['怕','pà','temer'], ['爸','bà','papá']],
  [['课','kè','clase'], ['个','gè','(clasificador)']]
];
function soundEx(){
  const set = pick(SOUNDSETS), [h, p, es] = pick(set);
  return {t:'mc', item:'g-pair', kind:'Escucha: ¿cuál oyes?', say:h, q:audioBtns(h, true),
    options:shuffle(set).map(x => ({v:x[1], html:`<span class="pybig" style="font-size:24px">${esc(x[1])}</span>`})), answer:p, rev:{h, p, es}};
}
ITEMS['g-tone'] = {id:'g-tone', unit:'a2', kind:'gen', es:'los cuatro tonos'};
ITEMS['g-pair'] = {id:'g-pair', unit:'a2', kind:'gen', es:'sonidos parecidos'};
ITEMS['g-nat3'] = {id:'g-nat3', unit:'a3', kind:'gen', es:'decir de dónde eres'};
ITEMS['g-nat'] = {id:'g-nat', unit:'a4', kind:'gen', es:'países y nacionalidades'};
ITEMS['g-stu'] = {id:'g-stu', unit:'a5', kind:'gen', es:'preguntar qué eres y qué estudias'};
ITEMS['g-fam'] = {id:'g-fam', unit:'a6', kind:'gen', es:'presentar a tu familia'};
ITEMS['g-intro'] = {id:'g-intro', unit:'a7', kind:'gen', es:'preguntas para presentarte'};

S_('q1', [k1.ni, k1.jiao, k1.sm, k1.mz], '¿Cómo te llamas?', 1, 'a7');
S_('q2', [k1.wo, k1.jiao, C('李明','Lǐ Míng')], 'Me llamo Li Ming.', 0, 'a7');
S_('q3', [k1.ni, k1.shi, k1.na, k1.guo, k1.ren], '¿De qué país eres?', 1, 'a7');
S_('q4', [k1.wo, k1.shi, NAT.bl.c, k1.ren], 'Soy de Perú.', 0, 'a7');
S_('q5', [k1.ni, k1.shi, k1.xs, k1.ma], '¿Eres estudiante?', 1, 'a7');
S_('q6', [C('是，','shì'), k1.wo, k1.shi, k1.xs], 'Sí, soy estudiante.', 0, 'a7');
S_('q7', [k1.ni, k1.xx, k1.sm], '¿Qué estudias?', 1, 'a7');
S_('q8', [k1.wo, k1.xx, k1.hy], 'Estudio chino.', 0, 'a7');
S_('q9', [k1.zhe, k1.shi, k1.ni, FAM.bb.c, k1.ma], '¿Este es tu papá?', 1, 'a7');
S_('q10', [C('是，','shì'), k1.zhe, k1.shi, k1.wo, FAM.bb.c], 'Sí, este es mi papá.', 0, 'a7');
S_('q11', [k1.ta2, k1.shi, k1.shui], '¿Quién es ella?', 1, 'a7');
S_('q12', [k1.ta2, k1.shi, k1.wo, FAM.jj.c], 'Es mi hermana mayor.', 0, 'a7');

UNITS.unshift(
  {id:'a1', mod:'m1', key:'你', title:'Hola, ¿cómo te llamas?', zh:'你好！你叫什么名字？', ref:'Saludos y tu nombre', items:['anh','ani','awo','ajiao','asm','amz','anjmz','aqw','axie','azj'], intro:[{type:'tones'}]},
  {id:'a2', mod:'m1', key:'声', title:'Tonos y sonidos', zh:'妈 麻 马 骂', ref:'Entrena el oído para el pinyin', items:['g-tone','g-pair'], intro:[{type:'sounds'}]},
  {id:'a3', mod:'m1', key:'国', title:'¿De dónde eres?', zh:'你是哪国人？', ref:'País + 人 = nacionalidad', items:['ashi','aren','aguo','ana','azg','amg','abl','anngr','g-nat3'], intro:[{type:'nation'}]},
  {id:'a4', mod:'m1', key:'英', title:'Más países', zh:'英国 德国 法国 日本', ref:'Los países en chino', items:['ayg','adg','afg','arb','axby','ayd','g-nat'], intro:[]},
  {id:'a5', mod:'m1', key:'学', title:'¿Eres estudiante?', zh:'你是学生吗？', ref:'是, 不是 y 吗', items:['ama','abus','axs','als','axx','ahy','ayy','g-stu'], intro:[{type:'shima'}]},
  {id:'a6', mod:'m1', key:'家', title:'Mi familia', zh:'这是我爸爸。', ref:'这, 谁 y la familia', items:['azhe','ata','ata2','ashui','abb','amm','agg','ajj','add','amei','g-fam'], intro:[{type:'family'}]},
  {id:'a7', mod:'m1', key:'谁', title:'Preséntate', zh:'你是哪国人？', ref:'Frases completas para presentarte', models:['q1','q12'], items:['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10','q11','q12','g-intro'], intro:[{type:'review1'}]}
);
function earPlan(){
  LV = 1;
  return {title:'Entrena el oído', cards:[], ex:shuffle([...times(8, () => toneEx('listen')), ...times(3, () => toneEx('name')), ...times(6, soundEx)])};
}
function examPlan1(){
  LV = 1;
  const ex = [];
  shuffle(['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10','q11','q12']).slice(0, 8).forEach(id => ex.push(exFor(id, 'build')));
  ex.push(...times(3, () => introEx('ask')), ...times(3, () => introEx('reply')), ...times(3, () => toneEx('listen')), ...times(2, () => toneEx('name')),
    ...times(2, soundEx), ...times(2, () => natEx('country')));
  ['amz','axs','als','ahy','ajj','add','azg'].forEach(id => ex.push(exFor(id, 'type')));
  return {title:'Examen: preséntate', exam:true, examKey:'examBest1', cards:[], ex:shuffle(ex)};
}
