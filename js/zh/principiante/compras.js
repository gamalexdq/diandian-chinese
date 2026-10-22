/* ---------- content · Ruta 4: de compras ---------- */
W('dys','d1','颜色','yán·sè','color','什么颜色？ = ¿qué color? Igual que 什么水果.');
W('dhong','d1','红色','hóng·sè','rojo','El color de la suerte: sobres rojos, faroles y Año Nuevo.');
W('dhuang','d1','黄色','huáng·sè','amarillo','huáng sube, como al preguntar.');
W('dlan','d1','蓝色','lán·sè','azul','lán (2.º tono). No lo confundas con 绿 lǜ.');
W('dlv','d1','绿色','lǜ·sè','verde','ü con los labios redondos. En el teclado se escribe lv.');
W('dbai','d1','白色','bái·sè','blanco','');
W('dhei','d1','黑色','hēi·sè','negro','');
W('dzi','d1','紫色','zǐ·sè','morado','zǐ: lengua plana detrás de los dientes, como en 字.');
W('dnxys','d1','你喜欢什么颜色？','nǐ xǐ·huan shén·me yán·sè','¿Qué color te gusta?','Respondes con 我喜欢 + color: 我喜欢红色 o 我喜欢红的.');
ITEMS['g-color'] = {id:'g-color', unit:'d1', kind:'gen', es:'colores'};
W('dzg','d2','这个','zhè·ge','este, esta','这 = este + 个, la palabra de medida general. 个 va átono.');
W('dng','d2','那个','nà·ge','ese, esa','那 nà, con 4.º tono.');
W('djian','d2','件','jiàn','(palabra de medida para ropa)','这件 = esta prenda. Con 个 también te entienden, pero con ropa suena mejor 件.');
W('dda','d2','大','dà','grande','Una persona con los brazos abiertos.');
W('dxiao','d2','小','xiǎo','pequeño','');
W('dtdl','d2','太大了','tài dà le','es demasiado grande','太 + adjetivo + 了 = demasiado …: 太小了, 太贵了.');
W('dzmy','d2','怎么样','zěn·me·yàng','¿qué tal?','Al final de la frase: 这件怎么样？ = ¿qué tal esta?');
ITEMS['g-size'] = {id:'g-size', unit:'d2', kind:'gen', es:'este, ese y la talla'};
W('dqian','d3','钱','qián','dinero','Lleva 钅 (metal) a la izquierda: las monedas.');
W('ddsh','d3','多少','duō·shao','¿cuánto?','Para precios y cantidades grandes. 几 es para números pequeños.');
W('dkuai','d3','块','kuài','yuan (al hablar)','En los billetes dice 元 yuán; al hablar se dice 块.');
W('ddsq','d3','多少钱？','duō·shao qián','¿Cuánto cuesta?','Cosa + 多少钱？: 咖啡多少钱？');
W('dbai3','d3','百','bǎi','cien','一百 = 100 · 一百六十 = 160.');
W('dlk','d3','两块','liǎng kuài','dos yuanes','Como con la hora: 两块, no 二块. Pero 12 se dice 十二块.');
ITEMS['g-price'] = {id:'g-price', unit:'d3', kind:'gen', es:'precios'};
W('dgui','d4','贵','guì','caro','');
W('dpy','d4','便宜','pián·yi','barato','¡Ojo! Aquí 便 se lee pián, no biàn. 宜 va átono.');
W('dydr','d4','一点儿','yì·diǎnr','un poco','Va después del adjetivo: 便宜一点儿 = un poco más barato. La r final es típica de Pekín.');
W('dtgl','d4','太贵了','tài guì le','¡es demasiado caro!','');
W('dpyhm','d4','便宜一点儿，好吗？','pián·yi yì·diǎnr, hǎo ma','¿Me lo deja un poco más barato?','好吗？ al final = ¿vale? Sirve para proponer cualquier cosa.');
W('dbg','d4','不贵','bú guì','no es caro','不 + 4.º tono → bú. Es lo que dirá el vendedor.');
W('ddbq','d4','对不起','duì·bu·qǐ','perdón, lo siento','El 不 del medio va átono.');
W('dhd','d4','好的','hǎo de','de acuerdo','Para aceptar: 好的，我要这个。');
ITEMS['g-shop'] = {id:'g-shop', unit:'d4', kind:'gen', es:'regatear'};

const COLORS = {
  hong:{h:'红', p:'hóng', css:'#D62828', m:'rojo', f:'roja'}, huang:{h:'黄', p:'huáng', css:'#F2C014', m:'amarillo', f:'amarilla'},
  lan:{h:'蓝', p:'lán', css:'#1F6FD1', m:'azul', f:'azul'}, lv:{h:'绿', p:'lǜ', css:'#2A9D4B', m:'verde', f:'verde'},
  bai:{h:'白', p:'bái', css:'#FFFFFF', m:'blanco', f:'blanca'}, hei:{h:'黑', p:'hēi', css:'#111111', m:'negro', f:'negra'},
  zi:{h:'紫', p:'zǐ', css:'#7B3FA0', m:'morado', f:'morada'}
};
const colSe = k => C(COLORS[k].h + '色', COLORS[k].p + '·sè');
const colDe = k => C(COLORS[k].h + '的', COLORS[k].p + ' de');
const swatch = (k, big) => `<span class="sw${big ? ' big' : ''}" style="background:${COLORS[k].css}" role="img" aria-label="${COLORS[k].m}"></span>`;
const CL = {'件':C('件','jiàn'), '个':C('个','ge')};
const OBJ4 = [{es:'camisa', f:1, cl:'件'}, {es:'chaqueta', f:1, cl:'件'}, {es:'abrigo', cl:'件'}, {es:'suéter', cl:'件'}, {es:'taza', f:1, cl:'个'}, {es:'bolso', cl:'个'}];
const DEM = {zhe:{c:C('这','zhè'), m:'este', f:'esta'}, na:{c:C('那','nà'), m:'ese', f:'esa'}};
const D4 = [K.wo, K.ni, K.xh, K.bu, K.yao, K.sm, DEM.zhe.c, DEM.na.c, CL['个'], CL['件'], C('太大了','tài dà le'), C('太小了','tài xiǎo le'), C('太贵了','tài guì le'),
  C('便宜','pián·yi'), C('一点儿','yì·diǎnr'), C('好吗','hǎo ma'), C('多少','duō·shao'), C('钱','qián'), C('颜色','yán·sè'), C('怎么样','zěn·me·yàng'), colSe('lan'), colSe('bai'), colDe('hong'), colDe('hei')];
function colorS(form, k){
  form = form || pick(['like','like','not']); k = k || pick(Object.keys(COLORS));
  const c = COLORS[k];
  const s = form === 'not' ? mkS([K.wo, K.bu, K.xh, colSe(k)], `No me gusta el ${c.m}.`) : mkS([K.wo, K.xh, colSe(k)], `Me gusta el ${c.m}.`);
  return Object.assign(s, {form, pic:swatch(k, true)});
}
function colorEx(mode){
  const ks = Object.keys(COLORS), k = pick(ks), c = COLORS[k], word = mkS([colSe(k)], c.m, '');
  if (mode === 'swatch') return replyEx('g-color', '¿Qué color es?', {html:swatch(k, true)}, word, ks.filter(x => x !== k).map(x => mkS([colSe(x)], COLORS[x].m, '')));
  if (mode === 'listen') return seeEx('g-color', 'Escucha y elige el color', word,
    [k, ...shuffle(ks.filter(x => x !== k)).slice(0, 3)].map(x => ({v:x, html:swatch(x)})), k);
  if (mode === 'reply'){
    const q = mkS([K.ni, K.xh, K.sm, C('颜色','yán·sè')], '¿Qué color te gusta?', '？');
    const wrongs = [...shuffle(ks.filter(x => x !== k)).slice(0, 2).map(x => colorS('like', x)), mkS([K.wo, K.xh, C('苹果','píng·guǒ')], 'Me gustan las manzanas.')];
    return replyEx('g-color', 'Responde', bubbleQ('Amiga', q, `<div class="ask">Tu color favorito: ${swatch(k)}</div>`), colorS('like', k), wrongs);
  }
  return genEx(mode, 'g-color', D4, colorS);
}
function sizeS(form){
  form = form || pick(['too','too','want','how']);
  const o = pick(OBJ4), d = DEM[pick(['zhe','na'])], dem = o.f ? d.f : d.m, cl = CL[o.cl];
  let cs, es, end = '。';
  if (form === 'too'){
    const k = pick(['hong','hei','huang','bai']);
    const adj = pick([{c:C('太大了','tài dà le'), es:'grande'}, {c:C('太小了','tài xiǎo le'), es:o.f ? 'pequeña' : 'pequeño'}, {c:C('太' + COLORS[k].h + '了', 'tài ' + COLORS[k].p + ' le'), es:o.f ? COLORS[k].f : COLORS[k].m}]);
    cs = [d.c, cl, adj.c]; es = `${cap(dem)} ${o.es} es demasiado ${adj.es}.`;
  } else if (form === 'want'){
    const k = pick(Object.keys(COLORS));
    cs = [K.wo, K.yao, d.c, cl, colDe(k)]; es = `Quiero ${dem} ${o.es} ${o.f ? COLORS[k].f : COLORS[k].m}.`;
  } else { cs = [d.c, cl, C('怎么样','zěn·me·yàng')]; es = `¿Qué tal ${dem} ${o.es}?`; end = '？'; }
  // clothes take 件, but 个 is understood too
  const alt = o.cl === '件' ? [cs.map(c => c === cl ? '个' : c.h).join('')] : [];
  return Object.assign(mkS(cs, es, end, alt), {form});
}
function sizeEx(mode){
  if (mode === 'reply'){
    const o = pick(OBJ4), cl = CL[o.cl], esta = o.f ? 'esta' : 'este', zhe = DEM.zhe.c;
    const q = mkS([zhe, cl, C('怎么样','zěn·me·yàng')], `¿Qué tal ${esta} ${o.es}?`, '？');
    const opts = [
      {cue:'es demasiado grande', s:mkS([zhe, cl, C('太大了','tài dà le')], `${cap(esta)} ${o.es} es demasiado grande.`)},
      {cue:`es demasiado ${o.f ? 'pequeña' : 'pequeño'}`, s:mkS([zhe, cl, C('太小了','tài xiǎo le')], `${cap(esta)} ${o.es} es demasiado ${o.f ? 'pequeña' : 'pequeño'}.`)},
      {cue:o.f ? 'te la llevas' : 'te lo llevas', s:mkS([K.wo, K.yao, zhe, cl], `Me llevo ${esta}.`)},
      {cue:`es demasiado ${o.f ? 'roja' : 'rojo'}`, s:mkS([zhe, cl, C('太红了','tài hóng le')], `${cap(esta)} ${o.es} es demasiado ${o.f ? 'roja' : 'rojo'}.`)}
    ];
    const r = pick(opts);
    return replyEx('g-size', 'Responde a la vendedora', bubbleQ('Vendedora', q, `<div class="ask">Te muestra ${o.f ? 'una' : 'un'} ${o.es}. Dile que <b>${r.cue}</b>.</div>`), r.s, opts.filter(x => x !== r).map(x => x.s));
  }
  return genEx(mode, 'g-size', D4, sizeS);
}
const PDIG = {'一':'yī','二':'èr','三':'sān','四':'sì','五':'wǔ','六':'liù','七':'qī','八':'bā','九':'jiǔ','十':'shí','百':'bǎi','两':'liǎng','块':'kuài','月':'yuè'};
function priceZh(n){
  if (n === 2) return {h:'两块', p:'liǎng kuài'};
  if (n < 100) return {h:numZh(n) + '块', p:numPy(n) + ' kuài'};
  const r = n - 100;
  return {h:'一百' + (r === 10 ? '一十' : r ? numZh(r) : '') + '块', p:'yì·bǎi' + (r === 10 ? ' yī·shí' : r ? ' ' + numPy(r) : '') + ' kuài'};
}
const randPrice = () => { const x = Math.random(); return x < .2 ? 100 + 10 * rint(0, 9) : x < .4 ? rint(1, 10) : rint(11, 99); };
const priceTag = n => `<div class="tag">¥ ${n}</div>`;
function priceEx(mode){
  const n = randPrice(), z = priceZh(n), rev = {h:z.h, p:z.p, es:`¥${n}`};
  if (mode === 'read'){
    const chars = [...z.h].map(c => ({h:c, p:PDIG[c]}));
    const trap = z.h.includes('两') ? '二' : z.h.includes('二') || z.h.includes('百') ? '两' : pick(['两','百']);
    const extra = shuffle(Object.keys(PDIG).filter(c => c !== '块' && c !== '月' && c !== trap && !z.h.includes(c))).slice(0, 2).concat(trap).map(c => ({h:c, p:PDIG[c]}));
    return {t:'tiles', item:'g-price', kind:'Di el precio en chino', q:priceTag(n), bank:shuffle([...chars, ...extra]), answer:z.h, rev};
  }
  if (mode === 'listen') return {t:'digits', item:'g-price', kind:'Escucha el precio y escríbelo', say:z.h, q:audioBtns(z.h), hint:'Escribe solo el número. Ej.: 38', answer:String(n), rev};
  if (mode === 'mc'){
    // 七块五 = ¥7.50
    const half = n < 50 && Math.random() < .4, val = half ? n + .5 : n, sayH = z.h + (half ? '五' : '');
    const lab = v => '¥' + (v % 1 ? v.toFixed(2) : v);
    const near = [...new Set([n + 10, n - 10, Number(String(n).split('').reverse().join('')), n * 10, n + 1, n - 1])].filter(x => x > 0 && x !== n && x < 200);
    const os = [...new Set([val, half ? n : n + .5, ...shuffle(near).slice(0, 3).map(x => half ? x + .5 : x)])].slice(0, 4);
    return {t:'mc', item:'g-price', kind:'Escucha: ¿cuánto cuesta?', say:sayH, q:audioBtns(sayH, true),
      options:shuffle(os).map(v => ({v:String(v), html:`<span class="digital" style="font-size:24px">${lab(v)}</span>`})), answer:String(val), rev:{h:sayH, p:z.p + (half ? ' wǔ' : ''), es:lab(val)}};
  }
  const N = N3[pick(['sh','kl','kf','cha','pj','pg','xj','cz'])], verb = N.pl ? 'cuestan' : 'cuesta';
  if (mode === 'ask') return chunkEx('build', mkS([K.qw, N.c, C('多少','duō·shao'), C('钱','qián')], `Disculpe, ¿cuánto ${verb} ${N.art} ${N.es}?`, '？'), 'g-price', D4);
  // reply: you are the seller
  const q = mkS([N.c, C('多少钱','duō·shao qián')], `¿Cuánto ${verb} ${N.art} ${N.es}?`, '？');
  const mk = v => { const pz = priceZh(v); return mkS([N.c, C(pz.h, pz.p)], `${cap(N.art)} ${N.es} ${verb} ${v} yuan${v === 1 ? '' : 'es'}.`); };
  const near = [...new Set([n + 10, n - 10, n * 10, n + 1, n - 1, n + 20])].filter(x => x > 0 && x !== n && x < 200);
  return replyEx('g-price', 'Eres el vendedor: di el precio', bubbleQ('Cliente', q, priceTag(n)), mk(n), shuffle(near).slice(0, 3).map(mk));
}
function shopLines(){
  const n = rint(15, 90), m = n - 5 * rint(1, 2), k = pick(['hong','hei','bai','lan']), pn = priceZh(n), pm = priceZh(m);
  return [
    {who:'Vendedor', v:mkS([C('这个','zhè·ge'), C(pn.h, pn.p)], `Este cuesta ${n} yuanes.`), cue:'Es demasiado caro: pide que te lo rebajen.',
      me:mkS([C('太贵了，','tài guì le'), C('便宜','pián·yi'), C('一点儿，','yì·diǎnr'), C('好吗','hǎo ma')], '¡Es demasiado caro! ¿Me lo deja un poco más barato?', '？')},
    {who:'Vendedor', v:mkS([C('好，','hǎo'), C(pm.h, pm.p)], `Bueno, ${m} yuanes.`), cue:'Acepta: te lo llevas.',
      me:mkS([C('好的，','hǎo de'), K.wo, K.yao, C('这个','zhè·ge')], 'De acuerdo, me llevo este.')},
    {who:'Vendedora', v:mkS([K.ni, K.yao, K.sm, C('颜色','yán·sè')], '¿Qué color quieres?', '？'), cue:`Pide el ${COLORS[k].m}.`,
      me:mkS([K.wo, K.yao, colDe(k)], `Quiero el ${COLORS[k].m}.`)},
    {who:'Vendedora', v:mkS([K.ni, K.xh, C('这个','zhè·ge'), K.ma], '¿Te gusta este?', '？'), cue:'No te gusta: es demasiado pequeño.',
      me:mkS([C('不，','bù'), C('这个','zhè·ge'), C('太小了','tài xiǎo le')], 'No, este es demasiado pequeño.')},
    {who:'Vendedor', v:mkS([C('不贵，','bú guì'), C('不贵','bú guì')], 'No es caro, no es caro.', '！'), cue:'Pregunta cuánto cuesta ese otro.',
      me:mkS([C('那个','nà·ge'), C('多少钱','duō·shao qián')], '¿Cuánto cuesta ese?', '？')}
  ];
}
function shopEx(mode){
  const L = shopLines(), r = pick(L);
  if (mode === 'reply') return replyEx('g-shop', 'Responde', bubbleQ(r.who, r.v, `<div class="ask">${esc(r.cue)}</div>`), r.me, L.filter(x => x !== r).map(x => x.me));
  return genEx(mode, 'g-shop', D4, () => Object.assign(pick(shopLines()).me, {form:'x'}));
}
const S4 = (id, chunks, es, q, alt) => { S_(id, chunks, es, q, 'd5'); if (alt) ITEMS[id].alt = alt; };
S4('ds1', [K.wo, K.xh, C('蓝色，','lán·sè'), K.bu, K.xh, C('黑色','hēi·sè')], 'Me gusta el azul, no el negro.');
S4('ds2', [DEM.zhe.c, CL['件'], C('怎么样','zěn·me·yàng')], '¿Qué tal esta chaqueta?', 1, ['这个怎么样']);
S4('ds3', [DEM.zhe.c, CL['件'], C('太小了','tài xiǎo le')], 'Esta chaqueta es demasiado pequeña.', 0, ['这个太小了']);
S4('ds4', [K.wo, K.yao, DEM.na.c, CL['件'], colDe('hong')], 'Quiero esa chaqueta roja.', 0, ['我要那个红的']);
S4('ds5', [K.qw, C('这个','zhè·ge'), C('多少钱','duō·shao qián')], 'Disculpe, ¿cuánto cuesta esto?', 1);
S4('ds6', [C('这个','zhè·ge'), C('五十八块','wǔ·shí·bā kuài')], 'Esto cuesta 58 yuanes.');
S4('ds7', [C('太贵了，','tài guì le'), C('便宜','pián·yi'), C('一点儿，','yì·diǎnr'), C('好吗','hǎo ma')], '¡Es demasiado caro! ¿Me lo deja un poco más barato?', 1);
S4('ds8', [C('好，','hǎo'), C('五十块','wǔ·shí kuài')], 'Bueno, 50 yuanes.');
S4('ds9', [C('好的，','hǎo de'), K.wo, K.yao, C('这个','zhè·ge')], 'De acuerdo, me llevo este.');
S4('ds10', [C('苹果','píng·guǒ'), C('多少钱','duō·shao qián')], '¿Cuánto cuestan las manzanas?', 1);
