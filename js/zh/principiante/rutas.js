/* ---------- units, dialogues and exams for rutas 4–7 ---------- */
const rule = (kind, title, rows, tip, formula) => ({type:'rule', kind, title, rows, tip, formula});
UNITS.push(
  {id:'d1', mod:'m4', key:'色', title:'Colores', zh:'红色 黄色 蓝色 绿色', ref:'¿Qué color te gusta?', items:['dys','dhong','dhuang','dlan','dlv','dbai','dhei','dzi','dnxys','g-color'],
   intro:[rule('La regla', 'Color + 色 o color + 的', [['红色','rojo (el color)'], ['我喜欢红色。','Me gusta el rojo.'], ['我要红的。','Quiero el rojo (el de color rojo).']], 'Con 的 hablas de una cosa de ese color: 黑的 = el negro, la negra.')]},
  {id:'d2', mod:'m4', key:'件', title:'Este, ese y la talla', zh:'这件太大了', ref:'这个, 那个 y 件 para la ropa', items:['dzg','dng','djian','dda','dxiao','dtdl','dzmy','g-size'],
   intro:[rule('La regla', '这 / 那 + palabra de medida', [['这个','este (cualquier cosa)'], ['这件','esta (prenda de ropa)'], ['这件太大了。','Esta es demasiado grande.'], ['那个怎么样？','¿Qué tal ese?']], 'Para tazas, bolsos y casi todo: 个. Para ropa: 件 (con 个 también te entienden).')]},
  {id:'d3', mod:'m4', key:'钱', title:'¿Cuánto cuesta?', zh:'多少钱？ 两块', ref:'Precios en 块', items:['dqian','ddsh','dkuai','ddsq','dbai3','dlk','g-price'],
   intro:[rule('La regla', 'Número + 块', [['一块','¥1'], ['两块','¥2: 两, no 二'], ['十二块','¥12'], ['一百六十块','¥160'], ['七块五','¥7.50']], 'La cosa va primero: 咖啡多少钱？ → 咖啡十块。')]},
  {id:'d4', mod:'m4', key:'贵', title:'¡Demasiado caro!', zh:'太贵了！便宜一点儿', ref:'Regatear en el mercado', items:['dgui','dpy','dydr','dtgl','dpyhm','dbg','ddbq','dhd','g-shop'],
   intro:[rule('En el mercado', 'Regatear en cuatro frases', [['太贵了！','¡Es demasiado caro!'], ['便宜一点儿，好吗？','¿Me lo deja un poco más barato?'], ['不贵，不贵。','No es caro (dice el vendedor).'], ['好的，我要这个。','De acuerdo, me llevo este.']], 'En los mercados chinos regatear es normal; en las tiendas con precio fijo, no.')]},
  {id:'d5', mod:'m4', key:'买', title:'De compras', zh:'这个多少钱？', ref:'Frases completas para comprar', models:['ds5','ds7'], items:['ds1','ds2','ds3','ds4','ds5','ds6','ds7','ds8','ds9','ds10'],
   intro:[rule('Repaso', 'Todo lo que dices en una tienda', [['你喜欢什么颜色？','el color'], ['这件太小了。','la talla'], ['这个多少钱？','el precio'], ['太贵了，便宜一点儿，好吗？','regatear'], ['好的，我要这个。','comprar']], 'Practicas las dos partes: lo que te dicen y lo que respondes.')]},
  {id:'e1', mod:'m5', key:'车', title:'¿Cómo vas?', zh:'坐地铁 骑自行车', ref:'Transporte: 坐, 骑, 开车 y 走路', items:['ezm','emt','ezl','eqi','ezxc','ezuo','edt','egjqc','ekc','edx','g-go'],
   intro:[rule('La regla', 'Quién · cuándo · cómo · a dónde', [['骑自行车','bicicleta: 骑, vas montado'], ['坐地铁 · 坐公共汽车','metro, bus: 坐, vas sentado'], ['开车','carro: 开 = manejar'], ['走路','a pie']], 'El medio va antes de 去: 我每天<b>坐地铁</b>去工作。', [['quién','我'], ['cuándo','每天'], ['cómo','坐地铁'], ['a dónde','去工作']])]},
  {id:'e2', mod:'m5', key:'店', title:'¿Hay … cerca?', zh:'附近有超市吗？', ref:'Lugares, 有 y 没有', items:['efj','eyou','emy','ecs','esd','eyh','exsj','edtz','ezne','ebzd','g-near'],
   intro:[rule('La regla', '有 = hay · 没有 = no hay', [['附近有银行吗？','¿Hay un banco cerca?'], ['有，在那儿。','Sí, está allí.'], ['附近没有银行。','No hay ningún banco cerca.'], ['对不起，我不知道。','Lo siento, no sé.']], 'La negación de 有 es siempre 没有. 不有 no existe.')]},
  {id:'e3', mod:'m5', key:'左', title:'¿Dónde está?', zh:'银行在左边。', ref:'在 y los lados: 左边, 右边…', items:['ezai','ezb','eyb','eqb','ehb','esb','exb','ezn','g-where'],
   intro:[rule('La regla', 'Cosa + 在 + lugar', [['银行在左边。','El banco está a la izquierda.'], ['洗手间在哪儿？','¿Dónde está el baño? (nǎr, 3.er tono)'], ['在那儿。','Está allí. (nàr, 4.º tono)']], 'Al revés que con 有: 附近<b>有</b>银行 (hay un banco cerca) · 银行<b>在</b>附近 (el banco está cerca).')]},
  {id:'e4', mod:'m5', key:'拐', title:'¿Cómo llego?', zh:'往前走，往右拐', ref:'Dar y entender direcciones', items:['ewang','ezou','eguai','ewqz','ewzg','ewyg','ezmq','emgx','ebkq','g-route'],
   intro:[rule('La regla', '往 + dirección + verbo', [['往前走','sigue recto'], ['往左拐','dobla a la izquierda'], ['往右拐','dobla a la derecha'], ['地铁站怎么去？','¿Cómo se llega a la estación de metro?']], 'Para agradecer: 谢谢！ → 不客气。 Para disculparte: 对不起！ → 没关系。')]},
  {id:'e5', mod:'m5', key:'城', title:'En la ciudad', zh:'洗手间在哪儿？', ref:'Frases completas para moverte', models:['es2','es4'], items:['es1','es2','es3','es4','es5','es6','es7','es8','es9','es10'],
   intro:[rule('Repaso', 'Cuatro preguntas para la calle', [['你每天怎么去工作？','cómo vas'], ['附近有超市吗？','qué hay cerca'], ['洗手间在哪儿？','dónde está'], ['地铁站怎么去？','cómo llegar']], 'Si no sabes la respuesta: 对不起，我不知道。')]},
  {id:'f1', mod:'m6', key:'天', title:'¿Qué tiempo hace?', zh:'今天天气怎么样？', ref:'Hoy, mañana, ayer y 很', items:['ftq','fjt','fmt','fzt','fhen','fre','fleng','fjttq','g-wx1'],
   intro:[rule('La regla', 'Cuándo · 天气 · 很 + adjetivo', [['今天天气很好。','Hoy hace buen tiempo.'], ['明天天气很冷。','Mañana hará mucho frío.'], ['昨天天气很热。','Ayer hizo mucho calor.']], 'El verbo no cambia con el tiempo: hoy, mañana o ayer, todo lo dice 今天, 明天, 昨天.')]},
  {id:'f2', mod:'m6', key:'雨', title:'Lluvia, nieve y grados', zh:'下雨 下雪 三十度', ref:'下雨, 下雪 y 度', items:['fxy','fxx','fdu','fdsd','fbrbl','ftqbh','g-wx'],
   intro:[rule('La regla', 'El cielo «baja» lluvia y nieve', [['下雨','llueve'], ['下雪','nieva'], ['三十五度','35 grados'], ['不热不冷','ni calor ni frío']], 'Para la temperatura: número + 度. 今天多少度？ → 二十度。')]},
  {id:'f3', mod:'m6', key:'月', title:'Los meses', zh:'一月 七月 十二月', ref:'Número + 月', items:['fyue','fyy','fqy','fsey','fbj','flm','g-month'],
   intro:[rule('La regla', 'Número + 月 = mes', [['一月','enero'], ['二月','febrero: 二, no 两'], ['十二月','diciembre']], 'Los doce meses salen solos si sabes contar hasta 12.')]},
  {id:'f4', mod:'m6', key:'春', title:'Las estaciones', zh:'春天 夏天 秋天 冬天', ref:'¿Por qué? Porque…', items:['fjj','fct','fxt','fqt','fdt','fwsm','fyw','g-season'],
   intro:[rule('Ojo con el hemisferio', 'En Lima, enero es verano', [['北京一月是冬天。','En Pekín, enero es invierno.'], ['利马一月是夏天。','En Lima, enero es verano.'], ['我喜欢春天，因为春天不热不冷。','Me gusta la primavera porque no hace ni calor ni frío.']], 'Lima está en el hemisferio sur: sus estaciones van al revés que en China.')]},
  {id:'f5', mod:'m6', key:'冒', title:'Me resfrié', zh:'我感冒了。我头疼。', ref:'Decir cómo te sientes', items:['fgm','ftt','fszt','ffs','fxix','fnzml','g-sick'],
   intro:[rule('La regla', 'Yo + lo que me duele', [['我感冒了。','Me resfrié.'], ['我头疼。','Me duele la cabeza.'], ['我发烧。','Tengo fiebre.'], ['你休息休息吧。','Descansa un poco.']], '了 al final indica un cambio: antes estabas bien; ahora, resfriado.')]},
  {id:'f6', mod:'m6', key:'气', title:'Hablar del tiempo', zh:'明天下雪，天气很冷。', ref:'Frases completas sobre el clima', models:['fs2','fs7'], items:['fs1','fs2','fs3','fs4','fs5','fs6','fs7','fs8','fs9','fs10'],
   intro:[rule('Repaso', 'Tres preguntas del tiempo', [['今天天气怎么样？','qué tiempo hace'], ['今天多少度？','cuántos grados'], ['你喜欢什么季节？','qué estación te gusta']], 'Responde con detalles: el tiempo, los grados y por qué.')]},
  {id:'h1', mod:'m7', key:'期', title:'¿Qué día es hoy?', zh:'今天星期几？', ref:'星期 + número', items:['hxq','hxq1','hxq3','hxq5','hxqt','hxqj','hjtxqj','g-week'],
   intro:[rule('La regla', '星期 + número = día', [['星期一','lunes (día 1)'], ['星期三','miércoles (día 3)'], ['星期六','sábado (día 6)'], ['星期天','domingo: 天, nunca 七']], 'Para preguntar, 几 va donde iría el número: 今天星期几？')]},
  {id:'h2', mod:'m7', key:'约', title:'¿Tienes tiempo?', zh:'我们一起吃午饭，好吗？', ref:'Invitar, aceptar y decir que no', items:['hwm','hyq','hsj','hysj','hmang','hssm','hhm','g-invite'],
   intro:[rule('La regla', 'Proponer con 一起 … 好吗？', [['星期六你有时间吗？','¿Tienes tiempo el sábado?'], ['有，什么事？','Sí. ¿Qué pasa?'], ['我们一起吃午饭，好吗？','¿Almorzamos juntos?'], ['对不起，我很忙。','Lo siento, estoy muy ocupado.']], 'El día puede ir antes o después de quien habla: 星期六你… o 你星期六…')]},
  {id:'h3', mod:'m7', key:'球', title:'Deportes', zh:'踢足球 打篮球 游泳', ref:'Cada deporte con su verbo', items:['hyd','hty','hbs','hdlq','htzq','hyy','hpb','hmxq6','g-sport'],
   intro:[rule('La regla', 'Cada deporte tiene su verbo', [['踢足球','fútbol: 踢, patear'], ['打篮球','básquet: 打, golpear con la mano'], ['骑自行车','bicicleta: 骑, montar'], ['游泳 · 跑步','nadar, correr: ya son verbos']], 'Con la frecuencia antes: 我每天早上跑步。')]},
  {id:'h4', mod:'m7', key:'视', title:'La tele', zh:'看电视 看新闻', ref:'看 + lo que ves', items:['hkan','hds','hxw','hdy','hdsj','hdhp','hjlp','hjm','g-tv'],
   intro:[rule('La regla', '看 sirve para todo lo que ves', [['看电视','ver televisión'], ['看新闻','ver las noticias'], ['看电影','ver películas'], ['看书','leer: los libros «se ven»']], '你喜欢看什么节目？ = ¿Qué programas te gusta ver?')]},
  {id:'h5', mod:'m7', key:'网', title:'Internet y aficiones', zh:'我常常上网听音乐。', ref:'听, 玩儿 y 爱好', items:['hah','hsw','hcc','hyinyue','htyy','hks','hwyx','hlt','hlx','g-hobby'],
   intro:[rule('La regla', 'Cada actividad con su verbo', [['听音乐','escuchar música: 听, oír'], ['玩儿游戏','jugar videojuegos: 玩儿'], ['我常常上网看新闻。','A menudo veo las noticias por internet.'], ['我的爱好是旅行。','Mi afición es viajar.']], '常常 va antes del verbo, igual que 每天.')]},
  {id:'h6', mod:'m7', key:'好', title:'Mis aficiones', zh:'你的爱好是什么？', ref:'Frases completas sobre tu tiempo libre', models:['hs3','hs8'], items:['hs1','hs2','hs3','hs4','hs5','hs6','hs7','hs8','hs9','hs10'],
   intro:[rule('Repaso', 'Para hacer planes con alguien', [['今天星期几？','el día'], ['星期六你有时间吗？','si tiene tiempo'], ['你每天跑步吗？','qué deporte hace'], ['你的爱好是什么？','su afición']], 'Practicas las dos partes: preguntar y responder.')]}
);
const DIALOGS4 = [
  {where:'Tienda de ropa', who:'Vendedora', turns:[
    {say:'你喜欢这件吗？', p:'nǐ xǐ·huan zhè jiàn ma', you:'Esta no me gusta: es demasiado pequeña.', ans:[K.wo, K.bu, K.xh, C('这件，','zhè jiàn'), C('太小了','tài xiǎo le')]},
    {say:'那件怎么样？', p:'nà jiàn zěn·me·yàng', you:'Quiero esa. ¿Cuánto cuesta?', ans:[K.wo, K.yao, C('那件。','nà jiàn'), C('多少钱','duō·shao qián')]},
    {say:'一百二十块。', p:'yì·bǎi èr·shí kuài', listen:['¥120', '¥102', '¥20', '¥12'], es:'120 yuanes.', ask:'¿Cuánto cuesta?'}]},
  {where:'Mercado', who:'Vendedor', turns:[
    {say:'你要什么？', p:'nǐ yào shén·me', you:'Disculpe, ¿cuánto cuestan los plátanos?', ans:[K.qw, C('香蕉','xiāng·jiāo'), C('多少钱','duō·shao qián')]},
    {say:'香蕉四块。', p:'xiāng·jiāo sì kuài', you:'¡Es demasiado caro! ¿Me los deja un poco más barato?', ans:[C('太贵了，','tài guì le'), C('便宜','pián·yi'), C('一点儿，','yì·diǎnr'), C('好吗','hǎo ma')]},
    {say:'好，三块。', p:'hǎo, sān kuài', listen:['¥3', '¥4', '¥30', '¥13'], es:'Bueno, 3 yuanes.', ask:'¿En cuánto te los deja?'}]}
];
const DIALOGS5 = [
  {where:'En la calle', who:'Turista', turns:[
    {say:'请问，附近有地铁站吗？', p:'qǐng·wèn, fù·jìn yǒu dì·tiě zhàn ma', you:'Sí. Sigue recto y dobla a la derecha.', ans:[C('有。','yǒu'), C('往前走，','wǎng qián zǒu'), C('往右拐','wǎng yòu guǎi')]},
    {say:'谢谢！', p:'xiè·xie', you:'De nada.', ans:[C('不客气','bú kè·qi')]}]},
  {where:'Camino al trabajo', who:'Amigo', turns:[
    {say:'你每天怎么去工作？', p:'nǐ měi·tiān zěn·me qù gōng·zuò', you:'Todos los días voy en metro.', ans:[K.wo, K.mt, C('坐','zuò'), C('地铁','dì·tiě'), K.qu, C('工作','gōng·zuò')]},
    {say:'我骑自行车去工作。', p:'wǒ qí zì·xíng·chē qù gōng·zuò', listen:['En bicicleta', 'En metro', 'En autobús', 'A pie'], es:'Voy al trabajo en bicicleta.', ask:'¿Cómo va tu amigo al trabajo?'}]}
];
const DIALOGS6 = [
  {where:'Llamada desde Pekín', who:'Amiga', turns:[
    {say:'利马今天天气怎么样？', p:'Lì·mǎ jīn·tiān tiān·qì zěn·me·yàng', you:'Hoy hace 25 grados: ni calor ni frío.', ans:[C('今天','jīn·tiān'), C('二十五度，','èr·shí·wǔ dù'), C('不热不冷','bú rè bù lěng')]},
    {say:'北京今天下雪，天气很冷。', p:'Běi·jīng jīn·tiān xià xuě, tiān·qì hěn lěng', listen:['Nieva y hace mucho frío', 'Llueve y hace mal tiempo', 'Hace mucho calor', 'Ni calor ni frío'], es:'En Pekín hoy nieva y hace mucho frío.', ask:'¿Qué tiempo hace en Pekín?'}]},
  {where:'Llamada a tu jefe', who:'Jefe', turns:[
    {say:'你怎么了？', p:'nǐ zěn·me le', you:'Me resfrié. Me duele la cabeza.', ans:[K.wo, C('感冒','gǎn·mào'), C('了，','le'), K.wo, C('头疼','tóu téng')]},
    {say:'你休息休息吧。', p:'nǐ xiū·xi xiū·xi ba', listen:['Que descanses un poco', 'Que vayas a trabajar', 'Que tomes un té', 'Que vayas al banco'], es:'Descansa un poco.', ask:'¿Qué te dice tu jefe?'}]}
];
const DIALOGS7 = [
  {where:'Invitación', who:'Amigo', turns:[
    {say:'星期六你有时间吗？', p:'xīng·qī·liù nǐ yǒu shí·jiān ma', you:'Sí. ¿Qué pasa?', ans:[C('有，','yǒu'), C('什么事','shén·me shì')]},
    {say:'我们一起看电影，好吗？', p:'wǒ·men yì·qǐ kàn diàn·yǐng, hǎo ma', you:'Vale. ¿A qué hora?', ans:[C('好，','hǎo'), C('几点','jǐ diǎn')]},
    {say:'晚上七点。', p:'wǎn·shang qī diǎn', listen:['A las 7 de la noche', 'A las 7 de la mañana', 'A las 2 de la tarde', 'El domingo'], es:'A las 7 de la noche.', ask:'¿A qué hora quedan?'}]},
  {where:'Aficiones', who:'Compañera', turns:[
    {say:'你的爱好是什么？', p:'nǐ de ài·hào shì shén·me', you:'Mi afición es nadar.', ans:[C('我的','wǒ de'), C('爱好','ài·hào'), K.shi, C('游泳','yóu·yǒng')]},
    {say:'我喜欢踢足球。我每星期六踢足球。', p:'wǒ xǐ·huan tī zú·qiú. wǒ měi xīng·qī·liù tī zú·qiú', listen:['Fútbol', 'Básquet', 'Natación', 'Correr'], es:'Me gusta jugar fútbol. Juego fútbol todos los sábados.', ask:'¿Qué deporte le gusta?'}]}
];
// any route: sentences, two exercises per generator and a few words to type
function examPlanR(modId){
  LV = 1;
  const M = MODULES[modId], all = UNITS.filter(u => u.mod === modId).flatMap(u => u.items), ex = [];
  shuffle(all.filter(id => ITEMS[id].kind === 'sent')).slice(0, 6).forEach(id => ex.push(exFor(id, 'build')));
  all.filter(id => ITEMS[id].kind === 'gen').forEach(id => shuffle([...new Set(GEN_MODES[id])]).slice(0, 2).forEach(m => ex.push(exFor(id, m))));
  shuffle(all.filter(id => ITEMS[id].kind === 'word')).slice(0, 6).forEach(id => ex.push(exFor(id, pick(['type','hanzi','listen']))));
  return {title:'Examen: ' + M.tab.toLowerCase(), exam:true, examKey:M.examKey, cards:[], ex:shuffle(ex)};
}
const mix = (fn, spec) => spec.flatMap(([m, n]) => times(n, () => fn(m)));

const MODULES = {
  m1:{n:1, tab:'Preséntate', zh:'你叫什么名字？', p:'nǐ jiào shén·me míng·zi?', es:'¿Cómo te llamas? Saludos, tonos, de dónde eres, qué estudias y tu familia.', examKey:'examBest1'},
  m2:{n:2, tab:'La hora', zh:'你几点起床？', p:'nǐ jǐ diǎn qǐ·chuáng?', es:'¿A qué hora te levantas? Números, la hora, las partes del día y tu rutina.', examKey:'examBest'},
  m3:{n:3, tab:'Comida', zh:'你喜欢吃什么？', p:'nǐ xǐ·huan chī shén·me?', es:'¿Qué te gusta comer? Platos, frutas, carnes, verduras y bebidas.', examKey:'examBest3'},
  m4:{n:4, tab:'Compras', zh:'这个多少钱？', p:'zhè·ge duō·shao qián?', es:'¿Cuánto cuesta esto? Colores, tallas, precios y regatear.', examKey:'examBest4', dialogs:DIALOGS4, dlgItem:'g-shop', pool:D4, dlgSub:'Tienda de ropa y mercado'},
  m5:{n:5, tab:'Ciudad', zh:'地铁站怎么去？', p:'dì·tiě zhàn zěn·me qù?', es:'¿Cómo llego al metro? Transporte, lugares y direcciones.', examKey:'examBest5', dialogs:DIALOGS5, dlgItem:'g-route', pool:D5, dlgSub:'Pedir y dar direcciones'},
  m6:{n:6, tab:'Clima', zh:'今天天气怎么样？', p:'jīn·tiān tiān·qì zěn·me·yàng?', es:'¿Qué tiempo hace hoy? El clima, los meses, las estaciones y cómo te sientes.', examKey:'examBest6', dialogs:DIALOGS6, dlgItem:'g-wx', pool:D6, dlgSub:'Llamadas sobre el clima y la salud'},
  m7:{n:7, tab:'Aficiones', zh:'你的爱好是什么？', p:'nǐ de ài·hào shì shén·me?', es:'¿Cuál es tu afición? Días, planes, deportes, la tele e internet.', examKey:'examBest7', dialogs:DIALOGS7, dlgItem:'g-invite', pool:D7, dlgSub:'Invitar y hablar de aficiones'}
};

// four everyday situations
const DIALOGS = [
  {where:'Puesto de comida', who:'Vendedor', turns:[
    {say:'你吃什么？', p:'nǐ chī shén·me', you:'Voy a comer bollos al vapor.', ans:[k3.wo, k3.chi, k3c('bz')]},
    {say:'你喝什么？', p:'nǐ hē shén·me', you:'Tomo agua.', ans:[k3.wo, k3.he, k3c('sh')]}]},
  {where:'En casa de un amigo', who:'Amigo', turns:[
    {say:'你喜欢香蕉吗？', p:'nǐ xǐ·huan xiāng·jiāo ma', you:'Sí, me gustan los plátanos.', ans:[C('喜欢，','xǐ·huan'), k3.wo, k3.xh, k3c('xj')]},
    {say:'你喜欢橙子吗？', p:'nǐ xǐ·huan chéng·zi ma', you:'No, no me gustan las naranjas.', ans:[C('不，','bù'), k3.wo, C('不','bù'), k3.xh, k3c('cz')]}]},
  {where:'Mercado', who:'Vendedora', turns:[
    {say:'你要牛肉吗？', p:'nǐ yào niú·ròu ma', you:'No, quiero pescado.', ans:[C('不，','bù'), k3.wo, k3.yao, k3c('yu')]},
    {say:'你要什么水果？', p:'nǐ yào shén·me shuǐ·guǒ', you:'Quiero manzanas.', ans:[k3.wo, k3.yao, k3c('pg')]}]},
  {where:'Cafetería', who:'Amiga', turns:[
    {say:'你喝咖啡吗？', p:'nǐ hē kā·fēi ma', you:'No, gracias. Tomo té. ¿Tú qué tomas?', ans:[C('不，','bù'), C('谢谢。','xiè·xie'), k3.wo, k3.he, C('茶。','chá'), k3.ni, k3.he, k3.sm]},
    {say:'我喝可乐。', p:'wǒ hē kě·lè', listen:['Coca-Cola', 'Café', 'Té', 'Agua'], es:'Tomo Coca-Cola.', ask:'¿Qué va a tomar tu amiga?'}]}
];
function dialogPlan(list = DIALOGS, item = 'g-food', pool = DISTRACT3){
  LV = 1;
  const ex = [];
  list.forEach(d => d.turns.forEach((t, k) => {
    const head = `<div class="kind">${esc(d.where)} · ${k + 1}/${d.turns.length}</div><div class="bubble"><span class="who">${esc(d.who)}</span><span class="han">${esc(t.say)}</span><span>${pyHTML(t.p)}</span></div>${audioBtns(t.say)}`;
    if (t.listen){
      ex.push({t:'mc', item, kind:'Diálogo', say:t.say, q:head + `<div class="ask">${esc(t.ask)}</div>`, options:shuffle(t.listen.map(o => ({v:o, html:esc(o)}))), answer:t.listen[0], rev:{h:t.say, p:t.p, es:t.es}});
      return;
    }
    const h = t.ans.map(c => c.h).join('');
    const extra = shuffle(uniqBy(pool, d => noPunct(d.h)).filter(d => !t.ans.some(c => noPunct(c.h) === noPunct(d.h)))).slice(0, 2);
    ex.push({t:'tiles', item, kind:'Diálogo', say:t.say, q:head + `<div class="ask">Responde: <b>${esc(t.you)}</b></div>`, bank:shuffle([...t.ans, ...extra]), answer:expandAns(orders(t.ans)),
      rev:{h:h + (t.you.endsWith('?') ? '？' : '。'), p:t.ans.map(c => c.p).filter(Boolean).join(' '), es:t.you}});
  }));
  return {title:'Diálogos', cards:[], ex};
}
function examPlan3(){
  LV = 1;
  const ex = [];
  shuffle(['r1','r2','r3','r4','r5','r6','r7','r8','r9','r10']).forEach(id => ex.push(exFor(id, 'build')));
  for (let i = 0; i < 3; i++) ex.push(withRedo(() => foodEx('ask')));
  for (let i = 0; i < 3; i++) ex.push(withRedo(() => foodEx('reply')));
  ['jz','pg','jr','kf'].forEach(id => ex.push(exFor(id, 'type')));
  return {title:'Examen: comida', exam:true, examKey:'examBest3', cards:[], ex:shuffle(ex)};
}
