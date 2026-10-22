/* ---------- content · Ruta 7: aficiones ---------- */
W('hxq','h1','星期','xīng·qī','semana','星期 + número = día: 星期一 lunes … 星期六 sábado.');
W('hxq1','h1','星期一','xīng·qī·yī','lunes','La semana empieza el lunes: día 1.');
W('hxq3','h1','星期三','xīng·qī·sān','miércoles','');
W('hxq5','h1','星期五','xīng·qī·wǔ','viernes','');
W('hxqt','h1','星期天','xīng·qī·tiān','domingo','El único sin número: 天. Nunca 星期七.');
W('hxqj','h1','星期几','xīng·qī jǐ','¿qué día (de la semana)?','几 va donde iría el número, como en 几点.');
W('hjtxqj','h1','今天星期几？','jīn·tiān xīng·qī jǐ','¿Qué día es hoy?','No hace falta 是: 今天星期三。');
ITEMS['g-week'] = {id:'g-week', unit:'h1', kind:'gen', es:'los días de la semana'};
W('hwm','h2','我们','wǒ·men','nosotros','们 = plural de personas: 你们, 他们.');
W('hyq','h2','一起','yì·qǐ','juntos','Va antes del verbo: 我们一起吃午饭.');
W('hsj','h2','时间','shí·jiān','tiempo (libre)','');
W('hysj','h2','有时间','yǒu shí·jiān','tener tiempo','No tener tiempo: 没有时间.');
W('hmang','h2','忙','máng','ocupado','我很忙 = estoy muy ocupado.');
W('hssm','h2','什么事？','shén·me shì','¿qué pasa?','Lo natural cuando te preguntan si tienes tiempo.');
W('hhm','h2','好吗？','hǎo ma','¿vale? ¿te parece?','Al final de una propuesta.');
ITEMS['g-invite'] = {id:'g-invite', unit:'h2', kind:'gen', es:'invitar'};
W('hyd','h3','运动','yùn·dòng','deporte; hacer ejercicio','');
W('hdlq','h3','打篮球','dǎ lán·qiú','jugar básquet','打 = golpear: deportes que juegas con la mano.');
W('htzq','h3','踢足球','tī zú·qiú','jugar fútbol','踢 = patear. Lleva 足 (pie).');
W('hyy','h3','游泳','yóu·yǒng','nadar','Los dos caracteres llevan 氵 (agua).');
W('hpb','h3','跑步','pǎo·bù','correr','跑 lleva 足 (pie), como 踢.');
W('hty','h3','体育','tǐ·yù','deportes (en la tele, en la escuela)','体育课 = clase de educación física.');
W('hbs','h3','比赛','bǐ·sài','partido, competencia','足球比赛 = partido de fútbol.');
W('hmxq6','h3','每星期六','měi xīng·qī·liù','todos los sábados','每 + día = cada …: 每天, 每星期六.');
ITEMS['g-sport'] = {id:'g-sport', unit:'h3', kind:'gen', es:'deportes'};
W('hkan','h4','看','kàn','ver, mirar; leer','Una mano 手 sobre el ojo 目: mirar a lo lejos.');
W('hds','h4','电视','diàn·shì','televisión','电 electricidad + 视 ver.');
W('hxw','h4','新闻','xīn·wén','noticias','新 nuevo + 闻 oír.');
W('hdy','h4','电影','diàn·yǐng','película','电 + 影 sombra.');
W('hdsj','h4','电视剧','diàn·shì·jù','serie de televisión','');
W('hdhp','h4','动画片','dòng·huà·piàn','dibujos animados','动 moverse + 画 dibujo + 片 película.');
W('hjlp','h4','纪录片','jì·lù·piàn','documental','纪录 registro + 片 película, como 动画片.');
W('hjm','h4','节目','jié·mù','programa (de TV)','你喜欢看什么节目？ = ¿qué programas te gusta ver?');
ITEMS['g-tv'] = {id:'g-tv', unit:'h4', kind:'gen', es:'la tele'};
W('hah','h5','爱好','ài·hào','afición','爱 amar + 好 (aquí hào: gustar).');
W('hsw','h5','上网','shàng·wǎng','conectarse a internet','上 subir + 网 red.');
W('hcc','h5','常常','cháng·cháng','a menudo','Va antes del verbo: 我常常上网.');
W('hyinyue','h5','音乐','yīn·yuè','música','音 sonido + 乐 alegría (aquí yuè, no lè).');
W('htyy','h5','听音乐','tīng yīn·yuè','escuchar música','听 = oír. Lleva 口.');
W('hks','h5','看书','kàn shū','leer (libros)','En chino los libros «se ven»: 看书.');
W('hwyx','h5','玩儿游戏','wánr yóu·xì','jugar videojuegos','玩儿 = jugar, divertirse. La r es de Pekín.');
W('hlt','h5','聊天','liáo·tiān','chatear, conversar','');
W('hlx','h5','旅行','lǚ·xíng','viajar','lǚ con ü.');
ITEMS['g-hobby'] = {id:'g-hobby', unit:'h5', kind:'gen', es:'aficiones'};

const DIAS = ['', 'lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
const dayC = n => C('星期' + (n === 7 ? '天' : NZH[n]), 'xīng·qī·' + (n === 7 ? 'tiān' : NPY[n]));
const calCard = (n, lab = 'hoy') => `<div class="cal"><small>${lab}</small><b>${DIAS[n]}</b></div>`;
const D7 = [K.wo, K.ni, C('我们','wǒ·men'), C('一起','yì·qǐ'), K.you, C('时间','shí·jiān'), K.ma, K.hen, C('忙','máng'), C('今天','jīn·tiān'), C('明天','míng·tiān'), K.mt,
  C('打','dǎ'), C('踢','tī'), C('骑','qí'), C('足球','zú·qiú'), C('篮球','lán·qiú'), C('游泳','yóu·yǒng'), C('跑步','pǎo·bù'), C('看','kàn'), C('听','tīng'), C('玩儿','wánr'),
  C('电视','diàn·shì'), C('新闻','xīn·wén'), C('音乐','yīn·yuè'), C('游戏','yóu·xì'), C('书','shū'), C('常常','cháng·cháng'), C('上网','shàng·wǎng'), K.xh];
function weekEx(mode){
  const n = rint(1, 7), d = dayC(n), rev = {h:d.h, p:d.p, es:DIAS[n]};
  const numTiles = (extraTrap) => {
    const num = n === 7 ? '天' : NZH[n], trap = n === 7 ? '七' : n === 2 ? '两' : extraTrap;
    return [C('星期','xīng·qī'), {h:num, p:n === 7 ? 'tiān' : NPY[n]}, ...shuffle(['一','二','三','四','五','六','天'].filter(c => c !== num && c !== trap)).slice(0, 2).map(c => ({h:c, p:c === '天' ? 'tiān' : NPY[NZH.indexOf(c)]})), {h:trap, p:PDIG[trap]}];
  };
  if (mode === 'tiles') return {t:'tiles', item:'g-week', kind:'Escribe el día en chino', q:`<div class="qtext">${DIAS[n]}</div>`, bank:shuffle(numTiles(pick(['七','两']))), answer:d.h, rev};
  if (mode === 'next'){
    const t = n === 1 ? 7 : n - 1;   // today is the day before
    const s = mkS([C('明天','míng·tiān'), C('星期','xīng·qī'), C(n === 7 ? '天' : NZH[n], n === 7 ? 'tiān' : NPY[n])], `Mañana es ${DIAS[n]}.`);
    const bank = shuffle([...s.chunks, ...numTiles(pick(['七','两'])).slice(2), C('今天','jīn·tiān')]);
    return {t:'tiles', item:'g-week', kind:'¿Qué día es mañana?', q:`${calCard(t)}<div class="ask">Dilo en chino: <b>mañana es…</b></div>`, bank, answer:answersOf(s), rev:{h:s.h, p:s.p, es:s.es}};
  }
  if (mode === 'reply'){
    const say = n2 => mkS([C('今天','jīn·tiān'), dayC(n2)], `Hoy es ${DIAS[n2]}.`);
    const near = shuffle([1,2,3,4,5,6,7].filter(x => x !== n)).slice(0, 3);
    return replyEx('g-week', 'Responde mirando el calendario', bubbleQ('Amigo', mkS([C('今天','jīn·tiān'), C('星期几','xīng·qī jǐ')], '', '？'), calCard(n)), say(n), near.map(say));
  }
  if (mode === 'speak') return {t:'speak', item:'g-week', kind:'Dilo en voz alta', q:`<div class="qtext">${DIAS[n]}</div>`, rev};
  const options = shuffle([n, ...shuffle([1,2,3,4,5,6,7].filter(x => x !== n)).slice(0, 3)]).map(x => ({v:String(x), html:esc(DIAS[x])}));
  return {t:'mc', item:'g-week', kind:'Escucha y elige el día', say:d.h, q:audioBtns(d.h, true), options, answer:String(n), rev};
}
const ACT7 = [{c:[C('吃','chī'), C('午饭','wǔ·fàn')], we:'almorzamos'}, {c:[C('吃','chī'), C('晚饭','wǎn·fàn')], we:'cenamos'},
  {c:[C('喝','hē'), C('咖啡','kā·fēi')], we:'tomamos un café'}, {c:[C('去','qù'), C('超市','chāo·shì')], we:'vamos al supermercado'}];
function inviteS(form, n){
  form = form || pick(['ask','prop','prop']); n = n || rint(1, 7);
  const d = dayC(n);
  if (form === 'ask') return Object.assign(mkS([d, K.ni, K.you, C('时间','shí·jiān'), K.ma], `¿Tienes tiempo el ${DIAS[n]}?`, '？'), {form});
  const a = pick(ACT7), cs = a.c.map((c, i) => i === a.c.length - 1 ? C(c.h + '，', c.p) : c);
  return Object.assign(mkS([C('我们','wǒ·men'), d, C('一起','yì·qǐ'), ...cs, C('好吗','hǎo ma')], `¿${cap(a.we)} juntos el ${DIAS[n]}?`, '？'), {form});
}
function inviteEx(mode){
  if (mode === 'reply'){
    const n = rint(1, 7);
    if (Math.random() < .6){
      const lines = {yes:['Sí tienes tiempo: pregunta para qué.', mkS([C('有，','yǒu'), C('什么事','shén·me shì')], 'Sí. ¿Qué pasa?', '？')],
        busy:['Estás muy ocupado.', mkS([C('对不起，','duì·bu·qǐ'), K.wo, K.hen, C('忙','máng')], 'Lo siento, estoy muy ocupado.')],
        no:['No tienes tiempo.', mkS([C('对不起，','duì·bu·qǐ'), K.wo, C('没有','méi·yǒu'), C('时间','shí·jiān')], 'Lo siento, no tengo tiempo.')]};
      const rk = pick(Object.keys(lines));
      // two ways of saying no never appear together
      const wrongs = Object.keys(lines).filter(k => k !== rk && !(rk !== 'yes' && k !== 'yes')).map(k => lines[k][1])
        .concat(mkS([C('今天','jīn·tiān'), dayC(n)], `Hoy es ${DIAS[n]}.`), mkS([K.wo, K.yao, C('这个','zhè·ge')], 'Quiero este.'));
      return replyEx('g-invite', 'Responde', bubbleQ('Amigo', inviteS('ask', n), `<div class="ask">${lines[rk][0]}</div>`), lines[rk][1], wrongs);
    }
    const right = mkS([C('好，','hǎo'), C('几点','jǐ diǎn')], 'Vale. ¿A qué hora?', '？');
    return replyEx('g-invite', 'Responde', bubbleQ('Amiga', inviteS('prop', n), '<div class="ask">Acepta y pregunta a qué hora.</div>'), right,
      [mkS([C('对不起，','duì·bu·qǐ'), K.wo, K.hen, C('忙','máng')], 'Lo siento, estoy muy ocupado.'), mkS([C('有，','yǒu'), C('什么事','shén·me shì')], 'Sí. ¿Qué pasa?', '？'), mkS([C('今天','jīn·tiān'), dayC(n)], `Hoy es ${DIAS[n]}.`)]);
  }
  return genEx(mode, 'g-invite', D7, inviteS);
}
const SPORTS7 = {
  zq:{c:[C('踢','tī'), C('足球','zú·qiú')], yo:'juego fútbol', tu:'juegas fútbol', inf:'jugar fútbol', pic:'⚽'},
  lq:{c:[C('打','dǎ'), C('篮球','lán·qiú')], yo:'juego básquet', tu:'juegas básquet', inf:'jugar básquet', pic:'🏀'},
  yy:{c:[C('游泳','yóu·yǒng')], yo:'nado', tu:'nadas', inf:'nadar', pic:'🏊'},
  pb:{c:[C('跑步','pǎo·bù')], yo:'corro', tu:'corres', inf:'correr', pic:'🏃'},
  zxc:{c:[C('骑','qí'), C('自行车','zì·xíng·chē')], yo:'monto bicicleta', tu:'montas bicicleta', inf:'montar bicicleta', pic:'🚴'}
};
const WHEN7 = [{c:C('每天','měi·tiān'), es:'todos los días'}, {c:C('每天早上','měi·tiān zǎo·shang'), es:'todas las mañanas'}, {c:C('每天晚上','měi·tiān wǎn·shang'), es:'todas las noches'},
  {c:C('每星期六','měi xīng·qī·liù'), es:'todos los sábados'}, {c:C('每星期天','měi xīng·qī·tiān'), es:'todos los domingos'}];
function sportS(form, k){
  form = form || pick(['yo','yo','q','like']); k = k || pick(Object.keys(SPORTS7));
  const sp = SPORTS7[k], w = pick(WHEN7);
  const s = form === 'q' ? mkS([K.ni, w.c, ...sp.c, K.ma], `¿${cap(sp.tu)} ${w.es}?`, '？')
    : form === 'like' ? mkS([K.wo, K.xh, ...sp.c], `Me gusta ${sp.inf}.`)
    : mkS([K.wo, w.c, ...sp.c], `${cap(sp.yo)} ${w.es}.`);
  return Object.assign(s, {form, pic:form === 'q' ? '' : picBox(sp.pic)});
}
function sportEx(mode){
  const ks = Object.keys(SPORTS7), k = pick(ks), sp = SPORTS7[k];
  if (mode === 'pic') return replyEx('g-sport', '¿Qué deporte es?', {html:picBox(sp.pic)}, mkS(sp.c, sp.inf, ''), ks.filter(x => x !== k).map(x => mkS(SPORTS7[x].c, SPORTS7[x].inf, '')));
  if (mode === 'reply') return replyEx('g-sport', 'Responde', bubbleQ('Compañero', mkS([K.ni, K.xh, K.sm, C('运动','yùn·dòng')], '', '？'), `<div class="ask">Tu deporte: ${picBox(sp.pic)}</div>`),
    sportS('like', k), [...shuffle(ks.filter(x => x !== k)).slice(0, 2).map(x => sportS('like', x)), mkS([K.wo, K.xh, C('春天','chūn·tiān')], 'Me gusta la primavera.')]);
  return genEx(mode, 'g-sport', D7, sportS);
}
const KAN = C('看','kàn');
const VO7 = {
  xw:{c:[KAN, C('新闻','xīn·wén')], inf:'ver las noticias', yo:'veo las noticias', tv:1, net:1},
  dy:{c:[KAN, C('电影','diàn·yǐng')], inf:'ver películas', yo:'veo películas', tv:1, net:1},
  dsj:{c:[KAN, C('电视剧','diàn·shì·jù')], inf:'ver series', yo:'veo series', tv:1, net:1},
  dhp:{c:[KAN, C('动画片','dòng·huà·piàn')], inf:'ver dibujos animados', yo:'veo dibujos animados', tv:1},
  ds:{c:[KAN, C('电视','diàn·shì')], inf:'ver televisión', yo:'veo televisión', tv:1},
  yy:{c:[C('听','tīng'), C('音乐','yīn·yuè')], inf:'escuchar música', yo:'escucho música', net:1, hb:1, pic:'🎵'},
  ks:{c:[KAN, C('书','shū')], inf:'leer', yo:'leo', hb:1, pic:'📚'},
  yx:{c:[C('玩儿','wánr'), C('游戏','yóu·xì')], inf:'jugar videojuegos', yo:'juego videojuegos', net:1, hb:1, pic:'🎮'},
  lt:{c:[C('聊天','liáo·tiān')], inf:'chatear', yo:'chateo', net:1, hb:1, pic:'💬'},
  lx:{c:[C('旅行','lǚ·xíng')], inf:'viajar', yo:'viajo', hb:1, pic:'✈️'}
};
const voOf = f => Object.keys(VO7).filter(k => VO7[k][f]);
function likeS(set, form, k){
  const ks = voOf(set);
  k = k || pick(ks); const v = VO7[k];
  const forms = set === 'tv' ? ['like','night'] : ['like','hobby'].concat(v.net ? ['net'] : []);
  form = forms.includes(form) ? form : pick(forms);
  const s = form === 'night' ? mkS([K.wo, C('每天晚上','měi·tiān wǎn·shang'), ...v.c], `Todas las noches ${v.yo}.`)
    : form === 'hobby' ? mkS([C('我的','wǒ de'), C('爱好','ài·hào'), K.shi, ...v.c], `Mi afición es ${v.inf}.`)
    : form === 'net' ? mkS([K.wo, C('常常','cháng·cháng'), C('上网','shàng·wǎng'), ...v.c], `A menudo ${v.yo} por internet.`)
    : mkS([K.wo, K.xh, ...v.c], `Me gusta ${v.inf}.`);
  return Object.assign(s, {form, pic:set === 'hb' && v.pic ? picBox(v.pic) : ''});
}
function tvEx(mode){
  if (mode === 'reply'){
    const k = pick(voOf('tv'));
    const wrongs = [sportS('like', 'yy'), sportS('like', 'zq'), mkS([K.wo, K.xh, C('春天','chūn·tiān')], 'Me gusta la primavera.'), mkS([K.wo, K.xh, colSe('hong')], 'Me gusta el rojo.')];
    return replyEx('g-tv', 'Responde con un programa de tele', bubbleQ('Amiga', mkS([K.ni, K.xh, KAN, K.sm, C('节目','jié·mù')], '', '？')), likeS('tv', 'like', k), wrongs);
  }
  return genEx(mode, 'g-tv', D7, f => likeS('tv', f));
}
function hobbyEx(mode){
  const ks = voOf('hb'), k = pick(ks), v = VO7[k];
  if (mode === 'pic') return replyEx('g-hobby', '¿Qué afición es?', {html:picBox(v.pic)}, mkS(v.c, v.inf, ''), ks.filter(x => x !== k).map(x => mkS(VO7[x].c, VO7[x].inf, '')));
  if (mode === 'reply') return replyEx('g-hobby', 'Responde', bubbleQ('Compañera', mkS([C('你的','nǐ de'), C('爱好','ài·hào'), K.shi, K.sm], '', '？'), `<div class="ask">Tu afición: ${picBox(v.pic)}</div>`),
    likeS('hb', 'hobby', k), ks.filter(x => x !== k).map(x => likeS('hb', 'hobby', x)));
  return genEx(mode, 'g-hobby', D7, f => likeS('hb', f));
}
const S7 = (id, chunks, es, q) => S_(id, chunks, es, q, 'h6');
S7('hs1', [C('今天','jīn·tiān'), C('星期几','xīng·qī jǐ')], '¿Qué día es hoy?', 1);
S7('hs2', [C('今天','jīn·tiān'), dayC(4)], 'Hoy es jueves.');
S7('hs3', [dayC(6), K.ni, K.you, C('时间','shí·jiān'), K.ma], '¿Tienes tiempo el sábado?', 1);
S7('hs4', [C('有，','yǒu'), C('什么事','shén·me shì')], 'Sí. ¿Qué pasa?', 1);
S7('hs5', [C('我们','wǒ·men'), C('一起','yì·qǐ'), C('吃','chī'), C('午饭，','wǔ·fàn'), C('好吗','hǎo ma')], '¿Almorzamos juntos?', 1);
S7('hs6', [C('对不起，','duì·bu·qǐ'), K.wo, K.hen, C('忙','máng')], 'Lo siento, estoy muy ocupado.');
S7('hs7', [K.ni, K.mt, C('跑步','pǎo·bù'), K.ma], '¿Corres todos los días?', 1);
S7('hs8', [K.wo, C('每天早上','měi·tiān zǎo·shang'), C('跑步','pǎo·bù')], 'Corro todas las mañanas.');
S7('hs9', [K.wo, C('每天晚上','měi·tiān wǎn·shang'), KAN, C('新闻','xīn·wén')], 'Todas las noches veo las noticias.');
S7('hs10', [C('你的','nǐ de'), C('爱好','ài·hào'), K.shi, K.sm], '¿Cuál es tu afición?', 1);
