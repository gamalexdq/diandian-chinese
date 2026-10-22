/* ---------- HSK 1 · Ruta 5: compras y comida ---------- */
KW('k5a', [
  ['k_mai','买','mǎi','comprar','mǎi con 3.er tono compra; mài con 4.º vende. Solo cambia el tono.'],
  ['k_mai4','卖','mài','vender',''],
  ['k_dx','东西','dōng·xi','cosa(s)','东 este + 西 oeste. 买东西 = ir de compras.'],
  ['k_yf','衣服','yī·fu','ropa',''],
  ['k_bz','杯子','bēi·zi','taza, vaso',''],
  ['k_yx','一些','yì xiē','algunos, unos cuantos','我买一些水果 = Compro algo de fruta.']
]);
KW('k5b', [
  ['k_yuan','元','yuán','yuan (escrito)','En los carteles dice 元; al hablar se dice 块.'],
  ['k_mao2','毛','máo','10 céntimos (0,10)','五块五毛 = ¥5,50. El 毛 final se puede omitir: 五块五.'],
  ['k_yg','一共','yí·gòng','en total','一共多少钱？ = ¿Cuánto es en total?'],
  ['k_jin','斤','jīn','medio kilo','En los mercados chinos todo se pesa en 斤.'],
  ['k_gei','给','gěi','dar; para','给你 = aquí tiene.']
]);
KW('k5c', [
  ['k_ws','网上','wǎng·shàng','en internet','在网上买 = comprar por internet.'],
  ['k_dn','电脑','diàn·nǎo','computadora','电 electricidad + 脑 cerebro.'],
  ['k_fb','方便','fāng·biàn','práctico, cómodo',''],
  ['k_kd','快递','kuài·dì','envío, paquete (courier)','快 rápido + 递 entregar.'],
  ['k_kuai2','快','kuài','rápido',''],
  ['k_man','慢','màn','lento','']
]);
KW('k5d', [
  ['k_cai','菜','cài','plato; comida','中国菜 = comida china. También significa «verdura».'],
  ['k_zgc','中国菜','Zhōng·guó cài','comida china',''],
  ['k_blc','秘鲁菜','Bì·lǔ cài','comida peruana',''],
  ['k_mf','米饭','mǐ·fàn','arroz (cocido)',''],
  ['k_jd','鸡蛋','jī·dàn','huevo','鸡 pollo + 蛋 huevo.'],
  ['k_hc','好吃','hǎo·chī','rico, sabroso','好 + 吃: bueno para comer. Como 好看.']
]);
KW('k5e', [
  ['k_bei','杯','bēi','vaso, taza (medida)','一杯茶 = una taza de té.'],
  ['k_ping','瓶','píng','botella (medida)','两瓶水 = dos botellas de agua.'],
  ['k_gz','果汁','guǒ·zhī','jugo',''],
  ['k_nn','牛奶','niú·nǎi','leche','牛 vaca + 奶 leche.'],
  ['k_hdr','喝点儿什么？','hē diǎnr shén·me','¿qué vas a tomar?','点儿 = un poco: suena más amable.']
]);
const DK5 = [K.wo, K.ni, K.yao, K.ma, K.zai, C('买','mǎi'), C('卖','mài'), C('东西','dōng·xi'), C('衣服','yī·fu'), C('一些','yì xiē'), C('水果','shuǐ·guǒ'), C('多少钱','duō·shao qián'), C('一共','yí·gòng'),
  C('块','kuài'), C('毛','máo'), C('斤','jīn'), C('网上','wǎng·shàng'), C('很','hěn'), C('方便','fāng·biàn'), C('会','huì'), C('做','zuò'), C('菜','cài'), C('好吃','hǎo·chī'), C('一杯','yì bēi'), C('两杯','liǎng bēi'),
  C('一瓶','yì píng'), C('两瓶','liǎng píng'), C('茶','chá'), C('咖啡','kā·fēi'), C('水','shuǐ'), C('喝','hē')];
const BUY5 = [{k:'yf', c:C('衣服','yī·fu'), es:'ropa', pic:'👕'}, {k:'sg', c:C('水果','shuǐ·guǒ'), es:'fruta', pic:'🍎'}, {k:'bz', c:C('杯子','bēi·zi'), es:'una taza', pic:'☕'}, {k:'shu', c:C('书','shū'), es:'libros', pic:'📚'}, {k:'cai', c:C('蔬菜','shū·cài'), es:'verduras', pic:'🥦'}];
kGen('g-k5a', 'k5a', 'ir de compras', DK5, {
  say: form => { form = form || pick(['go','some','want','sell','q']); const b = pick(BUY5);
    const s = form === 'go' ? mkS([K.wo, C('去','qù'), C('商店','shāng·diàn'), C('买','mǎi'), C('东西','dōng·xi')], 'Voy a la tienda a comprar cosas.')
      : form === 'some' ? mkS([K.wo, C('买','mǎi'), C('一些','yì xiē'), C('水果','shuǐ·guǒ')], 'Compro algo de fruta.')
      : form === 'sell' ? mkS([C('这个','zhè·ge'), C('商店','shāng·diàn'), C('卖','mài'), C('衣服','yī·fu')], 'Esta tienda vende ropa.')
      : form === 'q' ? mkS([K.ni, C('买','mǎi'), C('什么','shén·me')], '¿Qué compras?', '？')
      : mkS([K.wo, C('想','xiǎng'), C('买','mǎi'), b.c], `Quiero comprar ${b.es}.`);
    return Object.assign(s, {form, pic:form === 'want' ? picBox(b.pic) : ''}); },
  qa: () => { const b = pick(BUY5);
    return {key:b.k, who:'Mamá', q:mkS([K.ni, C('去','qù'), C('商店','shāng·diàn'), C('买','mǎi'), C('什么','shén·me')], '¿Qué vas a comprar a la tienda?', '？'), a:mkS([K.wo, C('买','mǎi'), b.c], `Compro ${b.es}.`), cue:picBox(b.pic)}; },
  more:{pic: () => { const b = pick(BUY5), mk = x => mkS([K.wo, C('买','mǎi'), x.c], `Compro ${x.es}.`);
    const sell = Object.assign(mkS([K.wo, C('卖','mài'), b.c], `Vendo ${b.es}.`), {});
    return replyEx('g-k5a', '¿Qué compras?', {html:picBox(b.pic) + cueBox('Lo compras en la tienda.')}, mk(b), [sell, ...BUY5.filter(x => x !== b).map(mk)]); }},
  modes:['pic','build','reply','listen','ask'], modes2:['pic','listen','reply']
});
// ¥5.5 → 五块五毛 (or 五块五) · ¥2 → 两块 · ¥0.5 → 五毛
const prC = (y, j) => { const yz = y === 2 ? '两' : numZh(y), yp = y === 2 ? 'liǎng' : numPy(y);
  return C((y ? yz + '块' : '') + (j ? NZH[j] + '毛' : ''), [y ? yp + ' kuài' : '', j ? NPY[j] + ' máo' : ''].filter(Boolean).join(' ')); };
const prAlt = (y, j) => y && j ? (y === 2 ? '两' : numZh(y)) + '块' + NZH[j] : null;
const randPr = () => ({y:pick([1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20]), j:pick([0, 0, 5, 5, 3, 8])});
const prEs = (y, j) => '¥' + (y + j / 10).toFixed(j ? 2 : 0);
const FRUIT5 = [{c:C('苹果','píng·guǒ'), es:'manzanas'}, {c:C('香蕉','xiāng·jiāo'), es:'plátanos'}, {c:C('橙子','chéng·zi'), es:'naranjas'}];
kGen('g-k5b', 'k5b', 'precios con céntimos', DK5, {
  say: form => { form = form || pick(['jin','total','give']); const {y, j} = randPr(), f = pick(FRUIT5);
    const s = form === 'total' ? mkS([C('一共','yí·gòng'), C('多少钱','duō·shao qián')], '¿Cuánto es en total?', '？')
      : form === 'give' ? mkS([C('给你','gěi nǐ'), prC(y, j)], `Aquí tiene: ${prEs(y, j)}.`)
      : mkS([f.c, C('一斤','yì jīn'), prC(y, j)], `Las ${f.es} cuestan ${prEs(y, j)} el medio kilo.`, '。', prAlt(y, j) ? [f.c.h + '一斤' + prAlt(y, j)] : undefined);
    return Object.assign(s, {form}); },
  qa: () => { const {y, j} = randPr(), f = pick(FRUIT5), a = (yy, jj) => mkS([C('一斤','yì jīn'), prC(yy, jj)], `${prEs(yy, jj)} el medio kilo.`);
    const near = uniqBy([[y, j ? 0 : 5], [y + 10 > 25 ? y - 1 : y + 10, j], [y === 1 ? 3 : y - 1, j], [j || 5, y < 10 ? y : 0]].filter(([a2, b2]) => (a2 || b2) && !(a2 === y && b2 === j)), x => x.join('.'));
    return {key:y + '.' + j, who:'Cliente', kind:'Eres el vendedor: di el precio', q:mkS([f.c, C('多少钱','duō·shao qián'), C('一斤','yì jīn')], `¿Cuánto cuestan las ${f.es} el medio kilo?`, '？'), a:a(y, j),
      cue:`<div class="tag">¥ ${(y + j / 10).toFixed(j ? 2 : 0)}</div>`, wrongs:near.map(([a2, b2]) => a(a2, b2))}; },
  more:{
    tag: () => { const {y, j} = randPr(), z = prC(y, j), parts = [C((y === 2 ? '两' : numZh(y)) + '块', (y === 2 ? 'liǎng' : numPy(y)) + ' kuài'), ...(j ? [C(NZH[j] + '毛', NPY[j] + ' máo')] : [])];
      const traps = [C('二块', 'èr kuài'), C(NZH[j || 5] + '分', NPY[j || 5] + ' fēn'), C(NZH[(j || 5) % 9 + 1] + '毛', NPY[(j || 5) % 9 + 1] + ' máo')].filter(t => !parts.some(p => p.h === t.h) && !(y !== 2 && t.h === '二块'));
      return {t:'tiles', item:'g-k5b', kind:'Di el precio en chino', q:`<div class="tag">¥ ${(y + j / 10).toFixed(j ? 2 : 0)}</div>`, bank:shuffle([...parts, ...traps.slice(0, 2)]), answer:[z.h, prAlt(y, j)].filter(Boolean), rev:{h:z.h, p:z.p, es:prEs(y, j)}}; },
    // two price tags: pick how the total is said
    sum: () => { const a = {y:rint(1, 9), j:pick([0, 5])}, b = {y:rint(1, 9), j:pick([0, 5])}, t10 = (a.y + b.y) * 10 + a.j + b.j;
      const say = v => prC(Math.floor(v / 10), v % 10), right = say(t10);
      const os = uniqBy([t10, t10 + 5, t10 - 5, t10 + 10, t10 - 10].filter(v => v >= 10).map(say), c => c.h).slice(0, 4);
      if (!os.some(c => c.h === right.h)) os[0] = right;
      const tag = (e, v) => `<div class="tag" style="font-size:28px;padding:8px 16px">${e} ¥ ${(v.y + v.j / 10).toFixed(2)}</div>`;
      return {t:'mc', item:'g-k5b', kind:'一共多少钱？ Suma y elige el total', q:`<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">${tag('🍎', a)}${tag('🥛', b)}</div>`,
        options:shuffle(os).map(c => ({v:c.h, say:c.h, html:`<span class="han" style="font-size:22px">一共${c.h}</span>${LV >= 2 ? '' : `<small>${pyHTML(c.p)}</small>`}`})), answer:right.h, rev:{h:'一共' + right.h, p:'yí·gòng ' + right.p, es:'Total: ' + prEs(Math.floor(t10 / 10), t10 % 10)}}; },
    listen: () => { const {y, j} = randPr(), z = prC(y, j);
      const os = uniqBy([[y, j], [y, j ? 0 : 5], [y + 10, j], [y === 1 ? 2 : y - 1, j]], x => x.join('.'));
      return {t:'mc', item:'g-k5b', kind:'Escucha: ¿cuánto cuesta?', say:z.h, q:audioBtns(z.h, true), options:shuffle(os).map(([a2, b2]) => ({v:a2 + '.' + b2, html:`<span class="digital" style="font-size:24px">¥${(a2 + b2 / 10).toFixed(2)}</span>`})), answer:y + '.' + j, rev:{h:z.h, p:z.p, es:prEs(y, j)}}; }
  },
  modes:['tag','listen','reply','sum','build'], modes2:['listen','tag','reply','sum'], l3:[['tag',3],['listen',3],['reply',3],['sum',3],['speak',2]]
});
const WHERE5 = [{k:'net', c:C('在网上','zài wǎng·shàng'), es:'por internet', pic:'💻'}, {k:'shop', c:C('在商店','zài shāng·diàn'), es:'en una tienda', pic:'🏬'}, {k:'cs', c:C('在超市','zài chāo·shì'), es:'en el supermercado', pic:'🛒'}];
kGen('g-k5c', 'k5c', 'comprar por internet', DK5, {
  say: form => { form = form || pick(['buy','easy','fast','phone']); const b = pick(BUY5), w = pick(WHERE5);
    const s = form === 'easy' ? mkS([C('在网上','zài wǎng·shàng'), C('买东西','mǎi dōng·xi'), K.hen, C('方便','fāng·biàn')], 'Comprar por internet es muy práctico.')
      : form === 'fast' ? (f => mkS([C('快递','kuài·dì'), K.hen, C(f ? '快' : '慢', f ? 'kuài' : 'màn')], f ? 'El envío es muy rápido.' : 'El envío es muy lento.'))(Math.random() < .5)
      : form === 'phone' ? mkS([K.wo, C('用','yòng'), C('手机','shǒu·jī'), C('买','mǎi'), b.c], `Compro ${b.es} con el celular.`)
      : mkS([K.wo, w.c, C('买','mǎi'), b.c], `Compro ${b.es} ${w.es}.`);
    return Object.assign(s, {form}); },
  qa: form => { form = form || pick(['where','fast']);
    if (form === 'fast'){ const f = Math.random() < .5, mk = x => mkS([C('快递','kuài·dì'), K.hen, C(x ? '快' : '慢', x ? 'kuài' : 'màn')], x ? 'El envío es muy rápido.' : 'El envío es muy lento.');
      return {key:f, form, who:'Amiga', q:mkS([C('快递','kuài·dì'), C('快','kuài'), K.ma], '¿El envío es rápido?', '？'), a:mk(f), cue:picBox(f ? '⚡ 1 día' : '🐢 3 semanas'),
        wrongs:[mk(!f), mkS([C('在网上','zài wǎng·shàng'), C('买','mǎi')], 'Por internet.'), mkS([K.wo, C('不','bù'), C('买','mǎi')], 'No compro.')]}; }
    const w = pick(WHERE5);
    return {key:w.k, form, who:'Amiga', q:mkS([K.ni, K.zai, C('哪儿','nǎr'), C('买','mǎi'), C('衣服','yī·fu')], '¿Dónde compras ropa?', '？'), a:mkS([K.wo, w.c, C('买','mǎi'), C('衣服','yī·fu')], `Compro ropa ${w.es}.`), cue:picBox(w.pic)}; }
});
kGen('g-k5d', 'k5d', 'cocinar y opinar de la comida', DK5, {
  say: form => { form = form || pick(['can','cant','tasty','mom','q']);
    const s = form === 'can' ? mkS([K.wo, C('会','huì'), C('做','zuò'), C('中国菜','Zhōng·guó cài')], 'Sé cocinar comida china.')
      : form === 'cant' ? mkS([K.wo, C('不会','bú huì'), C('做','zuò'), C('秘鲁菜','Bì·lǔ cài')], 'No sé cocinar comida peruana.')
      : form === 'tasty' ? mkS([C('秘鲁菜','Bì·lǔ cài'), K.hen, C('好吃','hǎo·chī')], 'La comida peruana es muy rica.')
      : form === 'mom' ? mkS([C('我妈妈','wǒ mā·ma'), C('做的','zuò de'), C('菜','cài'), K.hen, C('好吃','hǎo·chī')], 'La comida de mi mamá es muy rica.')
      : mkS([K.ni, C('会','huì'), C('做','zuò'), C('什么','shén·me'), C('菜','cài')], '¿Qué platos sabes cocinar?', '？');
    return Object.assign(s, {form}); },
  qa: form => { form = form || pick(['can','taste']);
    if (form === 'taste'){ const ok = Math.random() < .6, mk = x => mkS([C('这个','zhè·ge'), C('菜','cài'), C(x ? '很好吃' : '不好吃', x ? 'hěn hǎo·chī' : 'bù hǎo·chī')], x ? 'Este plato está muy rico.' : 'Este plato no está rico.');
      return {key:ok, form, who:'Cocinero', q:mkS([C('这个','zhè·ge'), C('菜','cài'), C('怎么样','zěn·me·yàng')], '¿Qué tal este plato?', '？'), a:mk(ok), cue:picBox(ok ? '😋' : '😖'),
        wrongs:[mk(!ok), mkS([C('这部','zhè bù'), C('电影','diàn·yǐng'), C('很好看','hěn hǎo·kàn')], 'Esta película es muy buena.'), mkS([K.wo, C('不会','bú huì'), C('做','zuò'), C('菜','cài')], 'No sé cocinar.')]}; }
    const st = pick(['yes','bit','no']);
    const A = {yes:mkS([C('会，','huì'), K.wo, C('会','huì'), C('做','zuò'), C('中国菜','Zhōng·guó cài')], 'Sí, sé cocinar comida china.'), bit:mkS([C('会','huì'), C('一点儿','yì·diǎnr')], 'Sí, un poco.'), no:mkS([C('不会','bú huì')], 'No, no sé.')};
    return {key:st, form, who:'Amigo', q:mkS([K.ni, C('会','huì'), C('做','zuò'), C('中国菜','Zhōng·guó cài'), K.ma], '¿Sabes cocinar comida china?', '？'), a:A[st],
      cue:cueBox(st === 'yes' ? 'Cocinas comida china muy bien.' : st === 'bit' ? 'Solo sabes hacer arroz frito.' : 'Nunca cocinaste comida china.'), wrongs:[...Object.keys(A).filter(k => k !== st).map(k => A[k]), mkS([C('很好吃','hěn hǎo·chī')], 'Está muy rico.')]}; }
});
const DRINK5 = [{k:'kf', c:C('咖啡','kā·fēi'), es:'café', pic:'☕', m:'杯', u:['taza','tazas']}, {k:'cha', c:C('茶','chá'), es:'té', pic:'🍵', m:'杯', u:['taza','tazas']}, {k:'nn', c:C('牛奶','niú·nǎi'), es:'leche', pic:'🥛', m:'杯', u:['vaso','vasos']},
  {k:'gz', c:C('果汁','guǒ·zhī'), es:'jugo', pic:'🧃', m:'杯', u:['vaso','vasos']}, {k:'sh', c:C('水','shuǐ'), es:'agua', pic:'💧', m:'瓶', u:['botella','botellas']}, {k:'pj', c:C('啤酒','pí·jiǔ'), es:'cerveza', pic:'🍺', m:'瓶', u:['botella','botellas']}];
const MEAS = {'杯':['taza','tazas','bēi'], '瓶':['botella','botellas','píng']};
const cupC = (n, m) => C((n === 1 ? '一' : n === 2 ? '两' : NZH[n]) + m, (n === 1 ? 'yì' : n === 2 ? 'liǎng' : NPY[n]) + ' ' + MEAS[m][2]);
const unEs = (n, w) => (n === 1 ? (/a$/.test(w) ? 'una' : 'un') : NUMES[n]) + ' ' + w;
const orderS = (n, d) => mkS([K.wo, K.yao, cupC(n, d.m), d.c], `Quiero ${unEs(n, d.u[n === 1 ? 0 : 1])} de ${d.es}.`);
kGen('g-k5e', 'k5e', 'pedir algo para tomar', DK5, {
  say: form => { form = form || pick(['order','order','q','we']); const d = pick(DRINK5), n = rint(1, 3);
    const s = form === 'q' ? mkS([C('你们','nǐ·men'), C('喝点儿','hē diǎnr'), C('什么','shén·me')], '¿Qué van a tomar?', '？')
      : form === 'we' ? mkS([C('服务员，','fú·wù·yuán'), C('我们','wǒ·men'), K.yao, cupC(2, d.m), d.c], `¡Mesero! Queremos dos ${d.u[1]} de ${d.es}.`)
      : orderS(n, d);
    return Object.assign(s, {form, pic:form === 'order' ? picBox(d.pic.repeat(n)) : ''}); },
  qa: () => { const d = pick(DRINK5), n = rint(1, 3), o = pick(DRINK5.filter(x => x !== d));
    const wrongs = [orderS(n, o), orderS(n === 3 ? 2 : n + 1, d), mkS([K.wo, K.yao, cupC(n, d.m === '杯' ? '瓶' : '杯'), d.c], 'Medida equivocada.')];
    if (n === 2) wrongs.push(mkS([K.wo, K.yao, C('二' + d.m, 'èr ' + MEAS[d.m][2]), d.c], 'Mal dicho: es 两.'));
    return {key:n + d.k, who:'Mesera', q:mkS([K.ni, C('喝点儿','hē diǎnr'), C('什么','shén·me')], '¿Qué vas a tomar?', '？'), a:orderS(n, d), cue:picBox(d.pic.repeat(n)) + cueBox(d.m === '瓶' ? 'En botella.' : `En ${d.u[0]}.`), wrongs}; },
  modes:['build','reply','listen','reply'], modes2:['listen','reply','build'], l3:[['build',4],['reply',4],['listen',3],['speak',2]]
});
KS('k5f', [
  ['ks51', [K.wo, C('去','qù'), C('商店','shāng·diàn'), C('买','mǎi'), C('东西','dōng·xi')], 'Voy a la tienda a comprar cosas.'],
  ['ks52', [K.wo, C('想','xiǎng'), C('买','mǎi'), C('一些','yì xiē'), C('水果','shuǐ·guǒ')], 'Quiero comprar algo de fruta.'],
  ['ks53', [C('苹果','píng·guǒ'), C('多少钱','duō·shao qián'), C('一斤','yì jīn')], '¿Cuánto cuestan las manzanas el medio kilo?', 1, ['苹果一斤多少钱']],
  ['ks54', [C('一斤','yì jīn'), C('五块五','wǔ kuài wǔ')], '¥5,50 el medio kilo.', 0, ['一斤五块五毛']],
  ['ks55', [C('一共','yí·gòng'), C('多少钱','duō·shao qián')], '¿Cuánto es en total?', 1],
  ['ks56', [C('在网上','zài wǎng·shàng'), C('买东西','mǎi dōng·xi'), K.hen, C('方便','fāng·biàn')], 'Comprar por internet es muy práctico.'],
  ['ks57', [K.wo, C('会','huì'), C('做','zuò'), C('中国菜','Zhōng·guó cài')], 'Sé cocinar comida china.'],
  ['ks58', [C('秘鲁菜','Bì·lǔ cài'), K.hen, C('好吃','hǎo·chī')], 'La comida peruana es muy rica.'],
  ['ks59', [C('你们','nǐ·men'), C('喝点儿','hē diǎnr'), C('什么','shén·me')], '¿Qué van a tomar?', 1],
  ['ks510', [K.wo, K.yao, C('两杯','liǎng bēi'), C('咖啡','kā·fēi')], 'Quiero dos tazas de café.']
]);
kMix('k5f', [['g-k5a','reply',2], ['g-k5b','tag',2], ['g-k5b','sum',1], ['g-k5c','reply',2], ['g-k5d','reply',2], ['g-k5e','reply',3], ['g-k5e','speak',2]]);
KU('k5a', 'k5', '买', 'Ir de compras', '我去商店买东西。', '买, 卖, 东西 y 一些', [rule('La regla', 'Ir a un lugar a hacer algo', [['我去商店买东西。','Voy a la tienda a comprar cosas.'], ['我买一些水果。','Compro algo de fruta.'], ['这个商店卖衣服。','Esta tienda vende ropa.']], 'mǎi (3.er tono) es comprar y mài (4.º) es vender: escucha bien el tono. Primero a dónde vas y después a qué: 去商店 + 买东西.')]);
KU('k5b', 'k5', '元', 'Precios con céntimos', '一共多少钱？', '块 y 毛, 一共, 斤', [rule('La regla', '块 + 毛', [['五块五毛','¥5,50'], ['五块五','¥5,50: el 毛 final se puede omitir'], ['两块','¥2: 两, no 二'], ['苹果一斤六块。','Las manzanas, ¥6 el medio kilo.'], ['一共多少钱？','¿Cuánto es en total?']], 'Los carteles dicen 元 y 角; al hablar se dice 块 y 毛. Un 斤 es medio kilo.')]);
KU('k5c', 'k5', '网', 'Compras por internet', '我在网上买衣服。', '网上, 电脑, 快递 y 方便', [rule('La regla', '在 + dónde + verbo', [['我在网上买衣服。','Compro ropa por internet.'], ['在网上买东西很方便。','Comprar por internet es muy práctico.'], ['快递很快。','El envío es muy rápido.']], 'Como con el trabajo: el lugar va antes del verbo. 我在网上买, no 我买在网上.')]);
KU('k5d', 'k5', '菜', 'Cocinar', '我会做中国菜。', '做菜, 好吃 y 会', [rule('La regla', '会 + 做 + comida', [['我会做中国菜。','Sé cocinar comida china.'], ['你会做什么菜？','¿Qué platos sabes cocinar?'], ['秘鲁菜很好吃。','La comida peruana es muy rica.'], ['我妈妈做的菜很好吃。','La comida de mi mamá es muy rica.']], '好吃 (rico de comer) se forma como 好看 (bonito de ver): 好 + verbo.')]);
KU('k5e', 'k5', '杯', 'Para tomar', '你喝点儿什么？', '杯, 瓶 y pedir', [rule('La regla', 'Número + 杯 o 瓶 + bebida', [['一杯咖啡','una taza de café'], ['两瓶水','dos botellas de agua'], ['你喝点儿什么？','¿Qué vas a tomar?'], ['服务员，我要一杯茶。','¡Mesero! Quiero un té.']], '杯 y 瓶 son palabras de medida, como 只 y 本: con el 2 va 两.')]);
KU('k5f', 'k5', '店', 'En la tienda y en la mesa', '一共多少钱？', 'Frases completas de la ruta', [rule('Repaso', 'Cinco frases para comprar y comer', [['你去商店买什么？','qué compras'], ['苹果多少钱一斤？','el precio'], ['一共多少钱？','el total'], ['你会做中国菜吗？','cocinar'], ['你喝点儿什么？','pedir']], 'Practicas las dos partes: preguntar y responder.')], ['ks53','ks510']);
