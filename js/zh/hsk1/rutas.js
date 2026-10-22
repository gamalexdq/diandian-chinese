/* ---------- HSK 1: diálogos, pools y rutas ---------- */
const DK = uniqBy([...DK1, ...DK2, ...DK3, ...DK4, ...DK5, ...DK6], c => c.h);
const DLGK1 = [
  {where:'Primer día de clase', who:'Profesora', turns:[
    {say:'你们好！', p:'nǐ·men hǎo', you:'¡Buenos días, profesora!', ans:[C('老师好','lǎo·shī hǎo')]},
    {say:'你多大了？', p:'nǐ duō dà le', you:'Tengo 20 años.', ans:[K.wo, C('二十岁','èr·shí suì'), C('了','le')]},
    {say:'你住在哪儿？', p:'nǐ zhù zài nǎr', you:'Vivo en Lima.', ans:[K.wo, C('住','zhù'), K.zai, C('利马','Lì·mǎ')]}]},
  {where:'Al teléfono', who:'Amigo', turns:[
    {say:'喂，你好！', p:'wéi, nǐ hǎo', you:'¡Aló! ¿Cómo estás?', ans:[C('喂，','wéi'), K.ni, C('好','hǎo'), K.ma]},
    {say:'我很好。你的手机号码是多少？', p:'wǒ hěn hǎo. nǐ de shǒu·jī hào·mǎ shì duō·shao', you:'Mi número de celular es 987 654 321.', ans:[C('我的','wǒ de'), C('手机号码','shǒu·jī hào·mǎ'), K.shi, C('九八七，','jiǔ bā qī'), C('六五四，','liù wǔ sì'), C('三二幺','sān èr yāo')]},
    {say:'我的电话号码是九八七，六二幺，三五四。', p:'wǒ de diàn·huà hào·mǎ shì jiǔ bā qī, liù èr yāo, sān wǔ sì', listen:['987 621 354', '987 627 354', '981 621 354', '987 621 534'], es:'Mi número es 987 621 354.', ask:'¿Cuál es su número?'}]}
];
const DLGK2 = [
  {where:'Una foto en el celular', who:'Compañera', turns:[
    {say:'她是谁？', p:'tā shì shéi', you:'Es mi hija.', ans:[C('她','tā'), K.shi, C('我','wǒ'), C('女儿','nǚ·ér')]},
    {say:'你有宠物吗？', p:'nǐ yǒu chǒng·wù ma', you:'Sí, tengo dos gatos.', ans:[C('有，','yǒu'), K.wo, K.you, C('两只','liǎng zhī'), C('猫','māo')]},
    {say:'我有一只大狗和一只小狗。', p:'wǒ yǒu yì zhī dà gǒu hé yì zhī xiǎo gǒu', listen:['Dos perros: uno grande y uno pequeño', 'Un perro grande', 'Dos gatos', 'Un perro y un gato'], es:'Tengo un perro grande y uno pequeño.', ask:'¿Qué mascotas tiene?'}]},
  {where:'En la clase de chino', who:'Compañero', turns:[
    {say:'你会说英语吗？', p:'nǐ huì shuō Yīng·yǔ ma', you:'Sí, un poco.', ans:[C('会','huì'), C('一点儿','yì·diǎnr')]},
    {say:'我是学生，你呢？', p:'wǒ shì xué·sheng, nǐ ne', you:'Yo también soy estudiante.', ans:[K.wo, C('也','yě'), K.shi, C('学生','xué·sheng')]},
    {say:'我们的汉语老师是北京人。', p:'wǒ·men de Hàn·yǔ lǎo·shī shì Běi·jīng rén', listen:['De Pekín', 'De Shanghái', 'De Lima', 'De Xi’an'], es:'Nuestra profesora de chino es de Pekín.', ask:'¿De dónde es la profesora?'}]}
];
const DLGK3 = [
  {where:'Planes de cumpleaños', who:'Amiga', turns:[
    {say:'你的生日是几月几号？', p:'nǐ de shēng·rì shì jǐ yuè jǐ hào', you:'Mi cumpleaños es el 8 de mayo.', ans:[C('我的','wǒ de'), C('生日','shēng·rì'), K.shi, C('五月八号','wǔ yuè bā hào')]},
    {say:'现在几点？', p:'xiàn·zài jǐ diǎn', you:'Son las 8:30.', ans:[K.xz, C('八点半','bā diǎn bàn')]},
    {say:'下雨了！我们九点去吧。', p:'xià yǔ le! wǒ·men jiǔ diǎn qù ba', listen:['Llueve: mejor a las 9', 'Hace sol: vamos ya', 'Nieva: no vamos', 'Llueve: vamos a las 8'], es:'¡Está lloviendo! Vamos a las 9.', ask:'¿Qué propone tu amiga?'}]},
  {where:'Llamada desde China', who:'Hermano', turns:[
    {say:'喂，你现在在哪儿？', p:'wéi, nǐ xiàn·zài zài nǎr', you:'Ahora estoy en Shanghái.', ans:[K.wo, K.xz, K.zai, C('上海','Shàng·hǎi')]},
    {say:'你去西安了吗？', p:'nǐ qù Xī·ān le ma', you:'No, no fui.', ans:[C('没去','méi qù')]},
    {say:'我去年去西安了，太好了！', p:'wǒ qù·nián qù Xī·ān le, tài hǎo le', listen:['El año pasado', 'Ayer', 'Este año', 'Nunca fue'], es:'Yo fui a Xi’an el año pasado. ¡Fue genial!', ask:'¿Cuándo fue tu hermano a Xi’an?'}]}
];
const DLGK4 = [
  {where:'Una fiesta', who:'Nuevo amigo', turns:[
    {say:'很高兴认识你！', p:'hěn gāo·xìng rèn·shi nǐ', you:'El gusto es mío.', ans:[K.wo, C('也','yě'), C('很高兴','hěn gāo·xìng'), C('认识','rèn·shi'), K.ni]},
    {say:'你做什么工作？', p:'nǐ zuò shén·me gōng·zuò', you:'Soy médico. Trabajo en un hospital.', ans:[K.wo, K.shi, C('医生。','yī·shēng'), K.wo, K.zai, C('医院','yī·yuàn'), C('工作','gōng·zuò')]},
    {say:'我是中学老师。我爱唱歌。', p:'wǒ shì zhōng·xué lǎo·shī. wǒ ài chàng gē', listen:['Profesor de secundaria; le encanta cantar', 'Médico; le gusta bailar', 'Mesero; le encanta cantar', 'Profesor de primaria; le gusta cocinar'], es:'Soy profesor de secundaria. Me encanta cantar.', ask:'¿Qué hace y qué le gusta?'}]},
  {where:'Saliendo del cine', who:'Amiga', turns:[
    {say:'这部电影怎么样？', p:'zhè bù diàn·yǐng zěn·me·yàng', you:'Es muy entretenida.', ans:[C('很有意思','hěn yǒu yì·si')]},
    {say:'你明天能来我家吗？', p:'nǐ míng·tiān néng lái wǒ jiā ma', you:'Lo siento, mañana no puedo ir.', ans:[C('对不起，','duì·bu·qǐ'), K.wo, C('明天','míng·tiān'), C('不能','bù néng'), C('去','qù')]}]}
];
const DLGK5 = [
  {where:'Mercado', who:'Vendedora', turns:[
    {say:'你买什么？', p:'nǐ mǎi shén·me', you:'Disculpe, ¿cuánto cuestan las manzanas el medio kilo?', ans:[C('请问，','qǐng·wèn'), C('苹果','píng·guǒ'), C('多少钱','duō·shao qián'), C('一斤','yì jīn')]},
    {say:'一斤六块五。', p:'yì jīn liù kuài wǔ', listen:['¥6,50 el medio kilo', '¥5,60 el medio kilo', '¥6 el kilo', '¥65 el medio kilo'], es:'¥6,50 el medio kilo.', ask:'¿Cuánto cuestan?'},
    {say:'一共十三块。', p:'yí·gòng shí·sān kuài', listen:['¥13', '¥30', '¥3', '¥31'], es:'En total, 13 yuanes.', ask:'¿Cuánto pagas en total?'}]},
  {where:'Cafetería', who:'Mesero', turns:[
    {say:'你们喝点儿什么？', p:'nǐ·men hē diǎnr shén·me', you:'Queremos dos tazas de café.', ans:[C('我们','wǒ·men'), K.yao, C('两杯','liǎng bēi'), C('咖啡','kā·fēi')]},
    {say:'你会做中国菜吗？', p:'nǐ huì zuò Zhōng·guó cài ma', you:'Sí, un poco.', ans:[C('会','huì'), C('一点儿','yì·diǎnr')]}]}
];
const DLGK6 = [
  {where:'En el aeropuerto de Pekín', who:'Amiga china', turns:[
    {say:'你是怎么来的？', p:'nǐ shì zěn·me lái de', you:'Vine en avión.', ans:[K.wo, K.shi, C('坐','zuò'), C('飞机','fēi·jī'), C('来','lái'), C('的','de')]},
    {say:'你想去哪儿？', p:'nǐ xiǎng qù nǎr', you:'Quiero ir a la Gran Muralla.', ans:[K.wo, C('想','xiǎng'), C('去','qù'), C('长城','Cháng·chéng')]},
    {say:'长城离这儿很远，坐车要两个小时。', p:'Cháng·chéng lí zhèr hěn yuǎn, zuò chē yào liǎng ge xiǎo·shí', listen:['Dos horas en carro', 'Diez minutos a pie', 'Dos horas a pie', 'Media hora en carro'], es:'La Gran Muralla está muy lejos: dos horas en carro.', ask:'¿Cuánto se tarda?'}]},
  {where:'En casa', who:'Hermanito', turns:[
    {say:'我的小猫呢？', p:'wǒ de xiǎo māo ne', you:'Está debajo de la silla.', ans:[K.zai, C('椅子','yǐ·zi'), C('下面','xià·miàn')]},
    {say:'你家离学校远吗？', p:'nǐ jiā lí xué·xiào yuǎn ma', you:'No, a diez minutos a pie.', ans:[C('不远，','bù yuǎn'), C('走路','zǒu·lù'), C('十分钟','shí fēn·zhōng')]}]}
];
Object.assign(MODULES, {
  k1:{sec:'hsk', n:1, tab:'Saludos', zh:'您好！你好吗？', p:'nín hǎo! nǐ hǎo ma?', es:'Semana 1 · Saludar con respeto, dónde vives, la edad, el teléfono y la cortesía.', examKey:'examK1', dialogs:DLGK1, dlgItem:'g-k1d', pool:DK1, dlgSub:'Primer día de clase y una llamada'},
  k2:{sec:'hsk', n:2, tab:'Familia', zh:'她是谁？', p:'tā shì shéi?', es:'Semana 2 · La familia, las mascotas, leer y escribir, idiomas y compañeros.', examKey:'examK2', dialogs:DLGK2, dlgItem:'g-k2a', pool:DK2, dlgSub:'Fotos familiares y la clase de chino'},
  k3:{sec:'hsk', n:3, tab:'Hora y clima', zh:'现在几点？', p:'xiàn·zài jǐ diǎn?', es:'Semana 3 · Horas con minutos, fechas, cambios del tiempo, dónde estás y lo que ya pasó.', examKey:'examK3', dialogs:DLGK3, dlgItem:'g-k3b', pool:DK3, dlgSub:'Planes, lluvia y una llamada desde China'},
  k4:{sec:'hsk', n:4, tab:'Trabajo', zh:'你做什么工作？', p:'nǐ zuò shén·me gōng·zuò?', es:'Semana 4 · Profesiones, dónde trabajas, aficiones, el cine y conocer gente.', examKey:'examK4', dialogs:DLGK4, dlgItem:'g-k4e', pool:DK4, dlgSub:'Una fiesta y la salida del cine'},
  k5:{sec:'hsk', n:5, tab:'Compras', zh:'一共多少钱？', p:'yí·gòng duō·shao qián?', es:'Semana 5 · Ir de compras, precios con céntimos, internet, cocinar y pedir bebidas.', examKey:'examK5', dialogs:DLGK5, dlgItem:'g-k5b', pool:DK5, dlgSub:'Mercado y cafetería'},
  k6:{sec:'hsk', n:6, tab:'Transporte', zh:'你是怎么来的？', p:'nǐ shì zěn·me lái de?', es:'Semana 6 · Taxi, avión y tren, distancias, 是…的, dónde está algo y lugares bonitos.', examKey:'examK6', dialogs:DLGK6, dlgItem:'g-k6c', pool:DK6, dlgSub:'Llegar a Pekín y buscar al gato'}
});
// final exam of the section: like the HSK 1 test, listening and reading from all six routes
function examPlanHSK(){
  LV = 1;
  const mods = Object.keys(MODULES).filter(k => MODULES[k].sec === 'hsk');
  const all = UNITS.filter(u => mods.includes(u.mod)).flatMap(u => u.items), ex = [];
  shuffle(all.filter(id => ITEMS[id].kind === 'sent')).slice(0, 8).forEach(id => ex.push(exFor(id, pick(['build','listen']))));
  shuffle(all.filter(id => ITEMS[id].kind === 'gen')).slice(0, 14).forEach(id => ex.push(exFor(id, pick(GEN_MODES[id].filter(m => m !== 'speak' && m !== 'ask')))));
  shuffle(all.filter(id => ITEMS[id].kind === 'word')).slice(0, 8).forEach(id => ex.push(exFor(id, pick(['listen','meaning','hanzi']))));
  return {title:'Examen final HSK 1', exam:true, examKey:'examHSK1', cards:[], ex:shuffle(ex)};
}
