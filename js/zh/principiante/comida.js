/* ---------- content · Ruta 2: comida y bebida ---------- */
UNITS.forEach(u => u.mod = 'm2');
// c1 主食
W('sm','c1','什么','shén·me','¿qué?','Va donde iría la respuesta: 你吃什么？ → 我吃饺子。 No se mueve al inicio como en español.');
W('jz','c1','饺子','jiǎo·zi','jiaozi (empanadillas chinas)','El plato del Año Nuevo en el norte de China. 子 zi va átono.');
W('bz','c1','包子','bāo·zi','baozi (bollos al vapor rellenos)','包 = envolver. Otra vez 子 átono, como en 饺子.');
W('mt','c1','面条','miàn·tiáo','fideos','面 = fideos/harina · 条 = tira larga.');
W('cm','c1','炒面','chǎo·miàn','fideos salteados (chaomian)','炒 = saltear en wok.');
W('cf','c1','炒饭','chǎo·fàn','arroz frito','炒 saltear + 饭 arroz. Del cantonés “chau faan” viene el chaufa peruano.');
W('ncsm','c1','你吃什么？','nǐ chī shén·me','¿Qué comes? / ¿Qué vas a comer?','La pregunta del mesero. Respondes igual, cambiando 什么 por la comida.');
// c2 吗 y 不
W('ma','c2','吗','ma','¿…? (pregunta de sí o no)','Frase + 吗 = pregunta. 你吃饺子。→ 你吃饺子吗？');
W('bu','c2','不','bù','no (antes del verbo)','Va antes del verbo: 我不吃. Antes de un 4.º tono suena bú: 不要 bú yào.');
W('xie','c2','谢谢','xiè·xie','gracias','El segundo 谢 es átono.');
W('pma','c2','你吃饺子吗？','nǐ chī jiǎo·zi ma','¿Comes jiaozi?','Igual que la afirmación, con 吗 al final.');
W('pneg','c2','我不吃饺子。','wǒ bù chī jiǎo·zi','No como jiaozi.','不 justo antes del verbo.');
W('pbx','c2','不，谢谢。','bù, xiè·xie','No, gracias.','');
// c3 水果
W('xh','c3','喜欢','xǐ·huan','gustar','我喜欢苹果 = “yo gusto manzanas”: quien siente el gusto va primero.');
W('sg','c3','水果','shuǐ·guǒ','fruta','水 agua + 果 fruto: “frutos jugosos”.');
W('pg','c3','苹果','píng·guǒ','manzana','Mismo 果 que en 水果.');
W('xj','c3','香蕉','xiāng·jiāo','plátano','香 = aromático.');
W('cz','c3','橙子','chéng·zi','naranja','chéng con “ng” al final y tono que sube; no “chen”.');
W('nxhsg','c3','你喜欢什么水果？','nǐ xǐ·huan shén·me shuǐ·guǒ','¿Qué fruta te gusta?','什么 + sustantivo = ¿qué …?: 什么水果 = ¿qué fruta?');
// c4 肉和蔬菜
W('yao','c4','要','yào','querer, pedir (en tienda o restaurante)','Lo que dices al comprar o pedir: 我要鸡肉.');
W('nr','c4','牛肉','niú·ròu','carne de res','牛 = vaca · 肉 = carne.');
W('jr','c4','鸡肉','jī·ròu','pollo','鸡 = gallina + 肉.');
W('zr','c4','猪肉','zhū·ròu','cerdo','zhū con “zh” (lengua hacia atrás), no “zu”.');
W('yu','c4','鱼','yú','pescado','yú: labios redondos (ü) y tono que sube.');
W('sc','c4','蔬菜','shū·cài','verduras','');
W('nysm','c4','你要什么？','nǐ yào shén·me','¿Qué quieres? / ¿Qué va a llevar?','La pregunta del vendedor en el mercado.');
W('by','c4','不要','bú·yào','no quiero','不 + 4.º tono → bú. Se escribe igual; cambia el sonido.');
// c5 饮料
W('he','c5','喝','hē','beber','Lleva 口 (boca), como 吃.');
W('sh','c5','水','shuǐ','agua','Ya lo viste en 水果. Tercer tono: baja y sube.');
W('kl','c5','可乐','kě·lè','Coca-Cola','kě lè con tonos 3 y 4, no plano. Literal: “puede alegrar”.');
W('kf','c5','咖啡','kā·fēi','café','Préstamo por sonido: kā fēi ≈ café.');
W('cha','c5','茶','chá','té','De chá viene “chai”; “té” viene de te, la forma del dialecto min.');
W('pj','c5','啤酒','pí·jiǔ','cerveza','啤 pí (de “beer”) + 酒 bebida alcohólica.');
W('nhsm','c5','你喝什么？','nǐ hē shén·me','¿Qué bebes? / ¿Qué vas a tomar?','');

// sentence chunks and generator for module 3
const k3 = {wo:C('我','wǒ'), ni:C('你','nǐ'), sm:C('什么','shén·me'), ma:C('吗','ma'), sg:C('水果','shuǐ·guǒ'),
  chi:C('吃','chī'), xh:C('喜欢','xǐ·huan'), yao:C('要','yào'), he:C('喝','hē'), xie:C('谢谢','xiè·xie')};
const N3 = {
  jz:{es:'empanadillas chinas', art:'las', pl:1}, bz:{es:'bollos al vapor', art:'los', pl:1}, mt:{es:'fideos', art:'los', pl:1}, cm:{es:'fideos salteados', art:'los', pl:1}, cf:{es:'arroz frito', art:'el'},
  pg:{es:'manzanas', art:'las', pl:1}, xj:{es:'plátanos', art:'los', pl:1}, cz:{es:'naranjas', art:'las', pl:1},
  nr:{es:'carne de res', art:'la'}, jr:{es:'pollo', art:'el'}, zr:{es:'cerdo', art:'el'}, yu:{es:'pescado', art:'el'}, sc:{es:'verduras', art:'las', pl:1},
  sh:{es:'agua', art:'el'}, kl:{es:'Coca-Cola', art:'la'}, kf:{es:'café', art:'el'}, cha:{es:'té', art:'el'}, pj:{es:'cerveza', art:'la'}
};
Object.keys(N3).forEach(id => Object.assign(N3[id], {id, c:C(ITEMS[id].h, ITEMS[id].p)}));
const VERB3 = {
  chi:{v:k3.chi, yo:'como', tu:'comes', no:'no como', q:'¿Qué comes?', nouns:['jz','bz','mt','cm','cf']},
  xh:{v:k3.xh, like:1, q:'¿Qué fruta te gusta?', qwh:[k3.ni, k3.xh, k3.sm, k3.sg], nouns:['pg','xj','cz','sc']},
  yao:{v:k3.yao, yo:'quiero', tu:'quieres', no:'no quiero', q:'¿Qué quieres?', nouns:['nr','jr','zr','yu','sc']},
  he:{v:k3.he, yo:'bebo', tu:'bebes', no:'no bebo', q:'¿Qué bebes?', nouns:['sh','kl','kf','cha','pj']}
};
const buC = V => C('不', toneOf(V.v.p.split('·')[0]) === 4 ? 'bú' : 'bù');
const gus = n => 'gusta' + (n.pl ? 'n' : '') + ' ' + n.art + ' ' + n.es;
const es3 = {
  ans: (V, n) => V.like ? `Me ${gus(n)}.` : `${cap(V.yo)} ${n.es}.`,
  ma: (V, n) => V.like ? `¿Te ${gus(n)}?` : `¿${cap(V.tu)} ${n.es}?`,
  neg: (V, n) => V.like ? `No, no me ${gus(n)}.` : `No, ${V.no} ${n.es}.`,
  yes: (V, n) => V.like ? `Sí, me ${gus(n)}.` : `Sí, ${V.yo} ${n.es}.`,
  swap: (V, n, m) => V.like ? `No, no me ${gus(n)}; me ${gus(m)}.` : `No, ${V.no} ${n.es}; ${V.yo} ${m.es}.`
};
function food(form, V, n, m){
  let chunks, end = '。';
  if (form === 'what'){ chunks = V.qwh || [k3.ni, V.v, k3.sm]; end = '？'; }
  else if (form === 'ma'){ chunks = [k3.ni, V.v, n.c, k3.ma]; end = '？'; }
  else if (form === 'neg') chunks = [C('不，', 'bù'), k3.wo, buC(V), V.v, n.c];
  else if (form === 'yes') chunks = [C(V.v.h + '，', V.v.p), k3.wo, V.v, n.c];
  else if (form === 'swap') chunks = [C('不，', 'bù'), k3.wo, buC(V), V.v, C(n.c.h + '，', n.c.p), k3.wo, V.v, m.c];
  else chunks = [k3.wo, V.v, n.c];
  const es = form === 'what' ? V.q : es3[form] ? es3[form](V, n, m) : es3.ans(V, n);
  return {form, V, n, m, chunks, es, h:chunks.map(c => c.h).join('') + end, p:chunks.map(c => c.p).join(' ')};
}
function randFood(form, verbs){
  const V = VERB3[pick(verbs)], [a, b] = shuffle(V.nouns);
  return food(form, V, N3[a], N3[b]);
}
const DISTRACT3 = [k3.wo, k3.ni, k3.sm, k3.ma, k3.chi, k3.xh, k3.yao, k3.he, C('不', 'bù'), ...Object.values(N3).map(n => n.c)];
const tilesFrom = (chunks, n = 3) => shuffle([...chunks, ...shuffle(DISTRACT3.filter(d => !chunks.some(c => c.h === d.h))).slice(0, n)]);
function foodEx(mode, verbs, forms){
  verbs = verbs || Object.keys(VERB3); forms = forms || ['ans','ma','neg','yes'];
  mode = mode || pick(['build','listen','mc','speak','reply','ask']);
  if (mode === 'reply'){
    // hear a question, pick the reply that fits it
    const V = pick(verbs), q = randFood(Math.random() < .5 ? 'what' : 'ma', [V]);
    if (q.form === 'what'){
      const right = food('ans', q.V, N3[pick(q.V.nouns.filter(x => !(q.V.qwh && x === 'sc')))]);
      const others = shuffle(Object.keys(VERB3).filter(k => VERB3[k] !== q.V)).map(k => food('ans', VERB3[k], N3[pick(VERB3[k].nouns)]));
      const opts = shuffle([right, ...others].slice(0, 4));
      return {t:'mc', item:'g-food', kind:'Escucha y responde', say:q.h, q:`<div class="bubble"><span class="who">Te preguntan</span><span class="han">${esc(q.h)}</span>${pyHint(q.p) ? `<span>${pyHint(q.p)}</span>` : ''}</div>${audioBtns(q.h)}`,
        options: opts.map(o => ({v:o.h, say:o.h, html:`<span class="han" style="font-size:22px">${esc(o.h)}</span>${LV >= 2 ? '' : `<small>${pyHTML(o.p)}</small>`}`})), answer:right.h, rev:{h:right.h, p:right.p, es:right.es}};
    }
    const want = Math.random() < .5, right = food(want ? 'yes' : 'neg', q.V, q.n);
    const wrongOrder = {h:'我' + q.V.v.h + '不' + q.n.c.h + '。', p:'wǒ ' + q.V.v.p + ' bù ' + q.n.c.p};
    const opts = shuffle([right, food(want ? 'neg' : 'yes', q.V, q.n), wrongOrder, food(want ? 'neg' : 'yes', q.V, N3[shuffle(q.V.nouns.filter(x => x !== q.n.id))[0]])]);
    return {t:'mc', item:'g-food', kind:want ? 'Contesta que SÍ' : 'Contesta que NO', say:q.h, q:`<div class="bubble"><span class="who">Te preguntan</span><span class="han">${esc(q.h)}</span>${pyHint(q.p) ? `<span>${pyHint(q.p)}</span>` : ''}</div>${audioBtns(q.h)}`,
      options: opts.map(o => ({v:o.h, say:o.h, html:`<span class="han" style="font-size:22px">${esc(o.h)}</span>${LV >= 2 ? '' : `<small>${pyHTML(o.p)}</small>`}`})), answer:right.h, rev:{h:right.h, p:right.p, es:right.es}};
  }
  if (mode === 'ask'){
    // given the answer, build a question that asks for it (什么 or 吗 both count)
    const a = randFood('ans', verbs), wh = food('what', a.V, a.n), mq = food('ma', a.V, a.n);
    const bank = shuffle([k3.ni, a.V.v, k3.sm, k3.ma, a.n.c, k3.wo, ...(a.V.like ? [k3.sg] : [])]);
    const fits = !(a.V.qwh && a.n.id === 'sc'), wq = fits ? wh : {h:'你' + a.V.v.h + '什么？', p:'nǐ ' + a.V.v.p + ' shén·me'};
    const accept = [...(fits ? [wh.chunks] : []), mq.chunks, [k3.ni, a.V.v, k3.sm]].map(cs => cs.map(c => c.h).join(''));
    return {t:'tiles', item:'g-food', kind:'Haz la pregunta para esta respuesta', q:`<div class="bubble"><span class="who">Respuesta</span><span class="han">${esc(a.h)}</span>${pyHint(a.p) ? `<span>${pyHint(a.p)}</span>` : ''}<span class="muted">${esc(a.es)}</span></div>`,
      bank, answer:accept, rev:{h:wq.h + ' / ' + mq.h, p:wq.p + ' / ' + mq.p, es:'Valen las dos: con 什么 o con 吗.'}};
  }
  const s = randFood(pick(forms), verbs), rev = {h:s.h, p:s.p, es:s.es};
  if (mode === 'speak') return {t:'speak', item:'g-food', kind:'Dilo en voz alta', q:`<div class="qtext">${esc(s.es)}</div>`, rev};
  if (mode === 'mc'){
    const opts = [s];
    for (let k = 0; opts.length < 4 && k < 60; k++){ const o = randFood(s.form, verbs); if (!opts.some(x => x.es === o.es)) opts.push(o); }
    return {t:'mc', item:'g-food', kind:'Escucha: ¿qué dice?', say:s.h, q:audioBtns(s.h), options:shuffle(opts).map(o => ({v:o.es, html:esc(o.es)})), answer:s.es, rev};
  }
  const answer = s.chunks.map(c => c.h).join(''), bank = tilesFrom(s.chunks);
  if (mode === 'listen') return {t:'tiles', item:'g-food', kind:'Dictado: ordena lo que oyes', say:s.h, q:audioBtns(s.h), bank, answer, rev};
  return {t:'tiles', item:'g-food', kind:'Traduce al chino', q:`<div class="qtext">${esc(s.es)}</div>`, bank, answer, rev};
}
ITEMS['g-food'] = {id:'g-food', unit:'c2', kind:'gen', es:'preguntas y respuestas de comida'};

// c6: full questions and answers about food
const k3c = id => N3[id].c;
S_('r1', [k3.wo, k3.chi, k3c('bz')], 'Voy a comer bollos al vapor.', 0, 'c6');
S_('r2', [k3.ni, k3.yao, k3.sm], '¿Qué quieres?', 1, 'c6');
S_('r3', [k3.wo, k3.xh, k3c('xj')], 'Me gustan los plátanos.', 0, 'c6');
S_('r4', [k3.ni, k3.he, k3c('kf'), k3.ma], '¿Tomas café?', 1, 'c6');
S_('r5', [C('不，','bù'), k3.wo, C('不','bù'), C('喝。','hē'), k3.wo, k3.he, k3c('cha')], 'No, no tomo. Tomo té.', 0, 'c6');
S_('r6', [k3.ni, k3.xh, k3c('yu'), k3.ma], '¿Te gusta el pescado?', 1, 'c6');
S_('r7', [C('喜欢，','xǐ·huan'), k3.wo, k3.xh, k3c('yu')], 'Sí, me gusta el pescado.', 0, 'c6');
S_('r8', [k3.ni, k3.chi, k3.sm], '¿Qué vas a comer?', 1, 'c6');
S_('r9', [k3.wo, k3.chi, k3c('mt')], 'Voy a comer fideos.', 0, 'c6');
S_('r10', [C('不，','bù'), C('谢谢。','xiè·xie'), k3.wo, k3.yao, k3c('jr')], 'No, gracias. Quiero pollo.', 0, 'c6');

UNITS.push(
  {id:'c1', mod:'m3', key:'饺', title:'¿Qué vas a comer?', zh:'饺子 包子 面条 炒面 炒饭', ref:'Platos y la pregunta con 什么', items:['sm','chi','jz','bz','mt','cm','cf','ncsm'], intro:[{type:'shenme'}]},
  {id:'c2', mod:'m3', key:'吗', title:'Sí, no y 吗', zh:'你吃饺子吗？ 不，谢谢。', ref:'Preguntas de sí o no', items:['ma','bu','xie','pma','pneg','pbx','g-food'], intro:[{type:'ma'}]},
  {id:'c3', mod:'m3', key:'果', title:'Frutas', zh:'苹果 香蕉 橙子', ref:'喜欢 + fruta', items:['xh','sg','pg','xj','cz','nxhsg'], intro:[]},
  {id:'c4', mod:'m3', key:'肉', title:'Carnes y verduras', zh:'牛肉 鸡肉 猪肉 鱼 蔬菜', ref:'要 y 不要', items:['yao','nr','jr','zr','yu','sc','nysm','by'], intro:[{type:'bu'}]},
  {id:'c5', mod:'m3', key:'茶', title:'Bebidas', zh:'水 可乐 咖啡 茶 啤酒', ref:'喝 + bebida', items:['he','sh','kl','kf','cha','pj','nhsm'], intro:[]},
  {id:'c6', mod:'m3', key:'吃', title:'Preguntar y responder', zh:'你喜欢鱼吗？', ref:'Frases completas sobre comida', models:['r2','r5'], items:['r1','r2','r3','r4','r5','r6','r7','r8','r9','r10'], intro:[{type:'review3'}]}
);
