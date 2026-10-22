/* ---------- content · Ruta 5: la ciudad ---------- */
W('ezm','e1','怎么','zěn·me','¿cómo?','怎么 + verbo: 你怎么去？ = ¿cómo vas?');
W('emt','e1','每天','měi·tiān','todos los días','每 = cada + 天 = día. Va antes del verbo, como la hora.');
W('ezl','e1','走路','zǒu·lù','ir a pie','走 caminar + 路 camino.');
W('eqi','e1','骑','qí','montar (bici, moto, caballo)','Lleva 马 (caballo): vas montado encima.');
W('ezxc','e1','自行车','zì·xíng·chē','bicicleta','自 por sí mismo + 行 andar + 车 vehículo.');
W('ezuo','e1','坐','zuò','ir en (metro, bus, avión)','También significa «sentarse»: en el metro y el bus vas sentado.');
W('edt','e1','地铁','dì·tiě','metro','地 tierra + 铁 hierro: el tren bajo tierra.');
W('egjqc','e1','公共汽车','gōng·gòng qì·chē','autobús','公共 público + 汽车 auto.');
W('ekc','e1','开车','kāi·chē','manejar, ir en carro','开 = conducir + 车.');
W('edx','e1','大学','dà·xué','universidad','大 grande + 学 estudiar.');
ITEMS['g-go'] = {id:'g-go', unit:'e1', kind:'gen', es:'cómo vas'};
W('efj','e2','附近','fù·jìn','cerca, por aquí','Va al inicio: 附近有…吗？ = ¿hay … cerca?');
W('eyou','e2','有','yǒu','hay; tener','附近有银行 = cerca hay un banco.');
W('emy','e2','没有','méi·yǒu','no hay; no tener','La negación de 有 es siempre 没有. Nunca 不有.');
W('ecs','e2','超市','chāo·shì','supermercado','超 súper + 市 mercado: casi una traducción literal.');
W('esd','e2','商店','shāng·diàn','tienda','');
W('eyh','e2','银行','yín·háng','banco','银 plata + 行 (aquí se lee háng: casa comercial).');
W('exsj','e2','洗手间','xǐ·shǒu·jiān','baño','洗 lavar + 手 manos + 间 cuarto.');
W('edtz','e2','地铁站','dì·tiě zhàn','estación de metro','站 = estación, parada.');
W('ezne','e2','在那儿','zài nàr','está allí','La r final es de Pekín; en el sur dicen 在那里.');
W('ebzd','e2','我不知道','wǒ bù zhī·dào','no sé','知道 = saber. Con 对不起 delante suena más amable.');
ITEMS['g-near'] = {id:'g-near', unit:'e2', kind:'gen', es:'¿hay … cerca?'};
W('ezai','e3','在','zài','estar (en un lugar)','Cosa + 在 + lugar: 银行在左边。');
W('ezb','e3','左边','zuǒ·bian','a la izquierda','边 = lado, va átono.');
W('eyb','e3','右边','yòu·bian','a la derecha','');
W('eqb','e3','前边','qián·bian','adelante, enfrente','');
W('ehb','e3','后边','hòu·bian','detrás','');
W('esb','e3','上边','shàng·bian','arriba, encima','上 como en 上午.');
W('exb','e3','下边','xià·bian','abajo, debajo','下 como en 下午.');
W('ezn','e3','在哪儿？','zài nǎr','¿dónde está?','哪儿 nǎr (3.º tono) = ¿dónde?; 那儿 nàr (4.º tono) = allí. Solo cambia el tono.');
ITEMS['g-where'] = {id:'g-where', unit:'e3', kind:'gen', es:'¿dónde está?'};
W('ewang','e4','往','wǎng','hacia','往 + dirección + verbo: 往左拐.');
W('ezou','e4','走','zǒu','caminar, avanzar','Ya lo viste en 走路.');
W('eguai','e4','拐','guǎi','girar, doblar','');
W('ewqz','e4','往前走','wǎng qián zǒu','sigue recto','Literal: hacia adelante camina.');
W('ewzg','e4','往左拐','wǎng zuǒ guǎi','dobla a la izquierda','Tres terceros tonos seguidos: suena wáng zuó guǎi, pero se escribe con el tono original.');
W('ewyg','e4','往右拐','wǎng yòu guǎi','dobla a la derecha','');
W('ezmq','e4','怎么去？','zěn·me qù','¿cómo se llega?','Lugar + 怎么去？: 地铁站怎么去？');
W('emgx','e4','没关系','méi guān·xi','no pasa nada','La respuesta a 对不起.');
W('ebkq','e4','不客气','bú kè·qi','de nada','La respuesta a 谢谢. 不 + 4.º tono → bú.');
ITEMS['g-route'] = {id:'g-route', unit:'e4', kind:'gen', es:'cómo llegar'};

const TRANS = {
  bike:{c:[C('骑','qí'), C('自行车','zì·xíng·chē')], es:'en bicicleta', pic:'🚲'},
  metro:{c:[C('坐','zuò'), C('地铁','dì·tiě')], es:'en metro', pic:'🚇'},
  bus:{c:[C('坐','zuò'), C('公共汽车','gōng·gòng qì·chē')], es:'en autobús', pic:'🚌'},
  car:{c:[C('开车','kāi·chē')], es:'en carro', pic:'🚗'},
  walk:{c:[C('走路','zǒu·lù')], es:'a pie', pic:'🚶'}
};
const DEST5 = {xx:{c:C('学校','xué·xiào'), es:'a la escuela'}, gz:{c:C('工作','gōng·zuò'), es:'al trabajo'}, dx:{c:C('大学','dà·xué'), es:'a la universidad'}};
const PLACES = {
  cs:{c:C('超市','chāo·shì'), un:'un supermercado', the:'el supermercado', pic:'🛒'},
  sd:{c:C('商店','shāng·diàn'), un:'una tienda', the:'la tienda', pic:'🏪'},
  yh:{c:C('银行','yín·háng'), un:'un banco', the:'el banco', pic:'🏦'},
  xsj:{c:C('洗手间','xǐ·shǒu·jiān'), un:'un baño', the:'el baño', pic:'🚻'},
  dtz:{c:C('地铁站','dì·tiě zhàn'), un:'una estación de metro', the:'la estación de metro', pic:'🚇'}
};
const aThe = P => P.the.startsWith('el ') ? 'al ' + P.the.slice(3) : 'a ' + P.the;
const SIDES = {zuo:{c:C('左边','zuǒ·bian'), es:'a la izquierda'}, you:{c:C('右边','yòu·bian'), es:'a la derecha'}, qian:{c:C('前边','qián·bian'), es:'adelante'}, hou:{c:C('后边','hòu·bian'), es:'detrás'}};
const D5 = [K.wo, K.ni, K.mt, C('怎么','zěn·me'), K.qu, C('骑','qí'), C('坐','zuò'), C('开车','kāi·chē'), C('走路','zǒu·lù'), C('地铁','dì·tiě'), C('自行车','zì·xíng·chē'),
  C('学校','xué·xiào'), C('工作','gōng·zuò'), C('附近','fù·jìn'), K.you, C('没有','méi·yǒu'), K.zai, C('那儿','nàr'), C('哪儿','nǎr'), C('左边','zuǒ·bian'), C('右边','yòu·bian'),
  C('前边','qián·bian'), C('后边','hòu·bian'), C('往左拐','wǎng zuǒ guǎi'), C('往右拐','wǎng yòu guǎi'), C('银行','yín·háng'), C('超市','chāo·shì'), K.ma];
// a 3×3 street: you in the middle, looking up
function scene(pk, side, small){
  const cell = {qian:1, zuo:3, you:5, hou:7}[side];
  return `<div class="scene${small ? ' sm' : ''}" role="img" aria-label="${esc(PLACES[pk].the)}">${Array.from({length:9}, (_, i) => `<span>${i === 4 ? '<b class="me">tú<br>↑</b>' : i === cell ? PLACES[pk].pic : ''}</span>`).join('')}</div>`;
}
const ARROW = {
  up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V4M6 10l6-6 6 6"/></svg>',
  zuo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-8a4 4 0 0 0-4-4H5M9 5 5 9l4 4"/></svg>',
  you:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21v-8a4 4 0 0 1 4-4h8M15 5l4 4-4 4"/></svg>'
};
const routePic = (turn, end, pk, small) => `<div class="route${small ? ' sm' : ''}" role="img" aria-label="Ruta"><i>${ARROW.up}</i><i>${ARROW[turn]}</i>${scene(pk, end, true)}</div>`;
function goS(form, tk, dk){
  form = form || pick(['yo','yo','q']); tk = tk || pick(Object.keys(TRANS)); dk = dk || pick(Object.keys(DEST5));
  const t = TRANS[tk], d = DEST5[dk];
  if (form === 'q') return Object.assign(mkS([K.ni, K.mt, C('怎么','zěn·me'), K.qu, d.c], `¿Cómo vas ${d.es} todos los días?`, '？'), {form});
  return Object.assign(mkS([K.wo, K.mt, ...t.c, K.qu, d.c], `Todos los días voy ${d.es} ${t.es}.`), {form, pic:picBox(t.pic)});
}
function goEx(mode){
  const ks = Object.keys(TRANS), tk = pick(ks), t = TRANS[tk];
  if (mode === 'pic') return replyEx('g-go', '¿Cómo va?', {html:picBox(t.pic)}, mkS(t.c, t.es, ''), ks.filter(x => x !== tk).map(x => mkS(TRANS[x].c, TRANS[x].es, '')));
  if (mode === 'reply'){
    const dk = pick(Object.keys(DEST5)), d = DEST5[dk], q = goS('q', tk, dk);
    const wrongs = [...shuffle(ks.filter(x => x !== tk)).slice(0, 2).map(x => goS('yo', x, dk)), mkS([K.wo, K.mt, hc(7), K.qu, d.c], `Todos los días voy ${d.es} a las 7.`)];
    return replyEx('g-go', 'Responde', bubbleQ('Amigo', q, `<div class="ask">Tú vas así: ${picBox(t.pic)}</div>`), goS('yo', tk, dk), wrongs);
  }
  return genEx(mode, 'g-go', D5, goS);
}
const ningun = P => P.un.replace(/^una /, 'ninguna ').replace(/^un /, 'ningún ');
function nearS(form, pk){
  form = form || pick(['ask','ask','yes','no','dk']); pk = pk || pick(Object.keys(PLACES));
  const P = PLACES[pk];
  const s = form === 'ask' ? mkS([K.qw, C('附近','fù·jìn'), K.you, P.c, K.ma], `Disculpe, ¿hay ${P.un} cerca?`, '？')
    : form === 'yes' ? mkS([C('有，','yǒu'), K.zai, C('那儿','nàr')], 'Sí, está allí.')
    : form === 'no' ? mkS([C('附近','fù·jìn'), C('没有','méi·yǒu'), P.c], `No hay ${ningun(P)} cerca.`)
    : mkS([C('对不起，','duì·bu·qǐ'), K.wo, K.bu, C('知道','zhī·dào')], 'Lo siento, no sé.');
  return Object.assign(s, {form});
}
function nearEx(mode){
  if (mode === 'reply'){
    const pk = pick(Object.keys(PLACES)), P = PLACES[pk];
    const lines = {yes:['Hay uno: dile que está allí.', nearS('yes', pk)], no:['No hay ninguno cerca.', nearS('no', pk)], dk:['No lo sabes.', nearS('dk', pk)]};
    const rk = pick(Object.keys(lines));
    const trap = mkS([C('附近','fù·jìn'), C('不有','bù yǒu'), P.c], `(incorrecto: la negación de 有 es 没有)`);
    return replyEx('g-near', 'Responde', bubbleQ('Turista', nearS('ask', pk), `<div class="ask">${lines[rk][0]}</div>`), lines[rk][1], [...Object.keys(lines).filter(k => k !== rk).map(k => lines[k][1]), trap]);
  }
  // mc mixes all forms: the yes/no answers do not change with the place
  if (mode === 'mc'){ const s = nearS(); return chunkEx('mc', s, 'g-near', D5, () => nearS()); }
  return genEx(mode, 'g-near', D5, nearS);
}
function whereS(form, pk, side){
  form = form || pick(['at','at','ask']); pk = pk || pick(Object.keys(PLACES)); side = side || pick(Object.keys(SIDES));
  const P = PLACES[pk];
  if (form === 'ask') return Object.assign(mkS([P.c, K.zai, C('哪儿','nǎr')], `¿Dónde está ${P.the}?`, '？'), {form});
  return Object.assign(mkS([P.c, K.zai, SIDES[side].c], `${cap(P.the)} está ${SIDES[side].es}.`), {form, pic:scene(pk, side)});
}
function whereEx(mode){
  const pk = pick(Object.keys(PLACES)), side = pick(Object.keys(SIDES));
  if (mode === 'pic') return chunkEx('build', whereS('at', pk, side), 'g-where', D5, null, scene(pk, side));
  if (mode === 'listen') return seeEx('g-where', 'Escucha y elige el dibujo', whereS('at', pk, side), Object.keys(SIDES).map(x => ({v:x, html:scene(pk, x, true)})), side);
  if (mode === 'reply') return replyEx('g-where', 'Responde mirando el dibujo', bubbleQ('Turista', whereS('ask', pk), scene(pk, side)), whereS('at', pk, side),
    Object.keys(SIDES).filter(x => x !== side).map(x => whereS('at', pk, x)));
  if (mode === 'ask') return chunkEx('build', whereS('ask', pk), 'g-where', D5);
  return genEx(mode, 'g-where', D5, () => whereS('at'));
}
function routeS(turn, end, pk){
  turn = turn || pick(['zuo','you']); end = end || pick(['zuo','you','qian']); pk = pk || pick(Object.keys(PLACES));
  const P = PLACES[pk], T = {zuo:C('往左拐，','wǎng zuǒ guǎi'), you:C('往右拐，','wǎng yòu guǎi')};
  return Object.assign(mkS([C('往前走，','wǎng qián zǒu'), T[turn], P.c, K.zai, SIDES[end].c],
    `Sigue recto y dobla ${turn === 'zuo' ? 'a la izquierda' : 'a la derecha'}: ${P.the} está ${SIDES[end].es}.`), {form:'route', pic:routePic(turn, end, pk), turn, end, pk});
}
function routeEx(mode){
  if (mode === 'mc'){
    const s = routeS(), combos = shuffle(['zuo','you'].flatMap(t => ['zuo','you','qian'].map(e => t + ' ' + e)).filter(x => x !== s.turn + ' ' + s.end)).slice(0, 3);
    return {...seeEx('g-route', 'Escucha y elige el camino', s, [s.turn + ' ' + s.end, ...combos].map(x => ({v:x, html:routePic(...x.split(' '), s.pk, true)})), s.turn + ' ' + s.end), wide:true};
  }
  if (mode === 'pic'){ const s = routeS(); return chunkEx('build', s, 'g-route', D5, null, s.pic); }
  if (mode === 'ask'){
    const P = PLACES[pick(Object.keys(PLACES))];
    return chunkEx('build', mkS([K.qw, P.c, C('怎么','zěn·me'), K.qu], `Disculpe, ¿cómo llego ${aThe(P)}?`, '？'), 'g-route', D5);
  }
  return genEx(mode, 'g-route', D5, () => routeS());
}
const S5 = (id, chunks, es, q) => S_(id, chunks, es, q, 'e5');
S5('es1', [K.ni, K.mt, C('怎么','zěn·me'), K.qu, C('工作','gōng·zuò')], '¿Cómo vas al trabajo todos los días?', 1);
S5('es2', [K.wo, K.mt, C('坐','zuò'), C('地铁','dì·tiě'), K.qu, C('工作','gōng·zuò')], 'Todos los días voy al trabajo en metro.');
S5('es3', [K.wo, C('骑','qí'), C('自行车','zì·xíng·chē'), K.qu, C('学校','xué·xiào')], 'Voy a la escuela en bicicleta.');
S5('es4', [K.qw, C('附近','fù·jìn'), K.you, C('超市','chāo·shì'), K.ma], 'Disculpe, ¿hay un supermercado cerca?', 1);
S5('es5', [C('有，','yǒu'), K.zai, C('那儿','nàr')], 'Sí, está allí.');
S5('es6', [C('对不起，','duì·bu·qǐ'), K.wo, K.bu, C('知道','zhī·dào')], 'Lo siento, no sé.');
S5('es7', [C('洗手间','xǐ·shǒu·jiān'), K.zai, C('哪儿','nǎr')], '¿Dónde está el baño?', 1);
S5('es8', [C('银行','yín·háng'), K.zai, C('左边','zuǒ·bian')], 'El banco está a la izquierda.');
S5('es9', [C('往前走，','wǎng qián zǒu'), C('往右拐','wǎng yòu guǎi')], 'Sigue recto y dobla a la derecha.');
S5('es10', [C('地铁站','dì·tiě zhàn'), C('怎么','zěn·me'), K.qu], '¿Cómo se llega a la estación de metro?', 1);
