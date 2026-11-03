/* =================== Ruta 4 · Qu'est-ce qu'on mange ? (unidad 3) ===================
   Comprar y comer: tiendas, singular y plural, du/de la/des, cantidades, el pronombre en,
   hacer las compras, horarios, el restaurante y los gustos. Los carteles de horario, la
   carta y el menú de la semana se arman aquí; los textos y los ejercicios son propios. */
const mdA = n => /^[aeiouéèêhœ]/i.test(n.h) && n.g.length === 1 ? "l'" : n.g === 'mp' || n.g === 'fp' ? 'les' : n.g === 'm' ? 'le' : 'la';
const mdThe = n => mdA(n) === "l'" ? "l'" + n.h : mdA(n) + ' ' + n.h;
// partitive: du pain, de la viande, de l'eau, des fraises; after a negation or a quantity: de / d'
const mdDu = n => n.g === 'mp' || n.g === 'fp' ? 'des' : mdA(n) === "l'" ? "de l'" : n.g === 'm' ? 'du' : 'de la';
const mdDuN = n => (d => d === "de l'" ? "de l'" + n.h : d + ' ' + n.h)(mdDu(n));
const mdDe = n => /^[aeiouéèêhœ]/i.test(n.h) ? "d'" + n.h : 'de ' + n.h;
const mdDeTile = n => /^[aeiouéèêhœ]/i.test(n.h) ? "d'|" + n.h : 'de ' + n.h;
const mdDuTile = n => (d => d === "de l'" ? "de l'|" + n.h : d + ' ' + n.h)(mdDu(n));
const mdEuro = c => { const e = Math.floor(c / 100), r = c % 100; return {t:`${e},${pad2(r)} €`, fr:`${frNum(e)} euro${e > 1 ? 's' : ''}${r ? ' ' + frNum(r) : ''}`}; };
const mdHour = (h, m = 0) => `${h === 1 ? 'une' : frNum(h)} heure${h > 1 ? 's' : ''}${m ? ' ' + frNum(m) : ''}`;
const mdHt = (h, m = 0) => `${h} h${m ? ' ' + pad2(m) : ''}`;

/* ---------- alimentos ---------- */
// g: m, f, mp, fp · pl: plural of countable foods · shop: where you buy it · es: Spanish with article
const MD_FOOD = [
  {h:'pain', g:'m', e:'🍞', es:'el pan', shop:'boulangerie'}, {h:'baguette', g:'f', e:'🥖', es:'la baguette', pl:'baguettes', esp:'baguettes', shop:'boulangerie'},
  {h:'croissant', g:'m', e:'🥐', es:'el croissant', pl:'croissants', esp:'croissants', shop:'boulangerie'},
  {h:'gâteau', g:'m', e:'🍰', es:'el pastel', pl:'gâteaux', esp:'pasteles', shop:'pâtisserie'},
  {h:'viande', g:'f', e:'🥩', es:'la carne', shop:'boucherie', meat:1}, {h:'poulet', g:'m', e:'🍗', es:'el pollo', shop:'boucherie', meat:1},
  {h:'jambon', g:'m', e:'🥓', es:'el jamón', shop:'boucherie', meat:1},
  {h:'poisson', g:'m', e:'🐟', es:'el pescado', shop:'poissonnerie'}, {h:'fruits de mer', g:'mp', e:'🦐', es:'los mariscos', shop:'poissonnerie'},
  {h:'fromage', g:'m', e:'🧀', es:'el queso', shop:'fromagerie'}, {h:'beurre', g:'m', e:'🧈', es:'la mantequilla', shop:'fromagerie'},
  {h:'lait', g:'m', e:'🥛', es:'la leche', shop:'supermarché'}, {h:'eau', g:'f', e:'💧', es:'el agua', shop:'supermarché'},
  {h:'sucre', g:'m', e:'🍬', es:'el azúcar', shop:'supermarché'}, {h:'riz', g:'m', e:'🍚', es:'el arroz', shop:'supermarché'},
  {h:'pâtes', g:'fp', e:'🍝', es:'los fideos', shop:'supermarché'}, {h:'café', g:'m', e:'☕', es:'el café', shop:'supermarché'},
  {h:'chocolat', g:'m', e:'🍫', es:'el chocolate', shop:'pâtisserie'},
  {h:'tomate', g:'f', e:'🍅', es:'el tomate', pl:'tomates', esp:'tomates', shop:'primeur'}, {h:'carotte', g:'f', e:'🥕', es:'la zanahoria', pl:'carottes', esp:'zanahorias', shop:'primeur'},
  {h:'pomme', g:'f', e:'🍎', es:'la manzana', pl:'pommes', esp:'manzanas', shop:'primeur'}, {h:'poire', g:'f', e:'🍐', es:'la pera', pl:'poires', esp:'peras', shop:'primeur'},
  {h:'fraise', g:'f', e:'🍓', es:'la fresa', pl:'fraises', esp:'fresas', shop:'primeur'}, {h:'citron', g:'m', e:'🍋', es:'el limón', pl:'citrons', esp:'limones', shop:'primeur'},
  {h:'poivron', g:'m', e:'🫑', es:'el pimiento', pl:'poivrons', esp:'pimientos', shop:'primeur'}, {h:'salade', g:'f', e:'🥬', es:'la lechuga', pl:'salades', esp:'lechugas', shop:'primeur'},
  {h:'pomme de terre', g:'f', e:'🥔', es:'la papa', pl:'pommes de terre', esp:'papas', shop:'primeur'}, {h:'œuf', g:'m', e:'🥚', es:'el huevo', pl:'œufs', esp:'huevos', shop:'supermarché'}];
const mdFood = h => MD_FOOD.find(n => n.h === h);
const mdNoArt = es => es.replace(/^(el|la|los|las) /, '');
const MD_MASS = MD_FOOD.filter(n => !n.pl && n.h !== 'fruits de mer' && n.h !== 'pâtes');
const MD_COUNT = MD_FOOD.filter(n => n.pl);
// the plural as a noun of its own, for des fraises, les tomates…
const mdPl = n => ({...n, h:n.pl, g:n.g + 'p', es:(n.es.startsWith('la ') ? 'las ' : 'los ') + n.esp});

/* ---------- fd1 · las tiendas ---------- */
// who: the shopkeeper, for chez le boulanger = à la boulangerie
const MD_SHOPS = [
  {h:'boulangerie', g:'f', who:'boulanger', e:'🥖', es:'la panadería', wes:'el panadero'}, {h:'boucherie', g:'f', who:'boucher', e:'🥩', es:'la carnicería', wes:'el carnicero'},
  {h:'poissonnerie', g:'f', who:'poissonnier', e:'🐟', es:'la pescadería', wes:'el pescadero'}, {h:'fromagerie', g:'f', who:'fromager', e:'🧀', es:'la quesería', wes:'el quesero'},
  {h:'pâtisserie', g:'f', who:'pâtissier', e:'🍰', es:'la pastelería', wes:'el pastelero'}, {h:'primeur', g:'m', who:'primeur', e:'🥕', es:'la verdulería', wes:'el verdulero'},
  {h:'supermarché', g:'m', e:'🛒', es:'el supermercado'}];
const mdShop = h => MD_SHOPS.find(s => s.h === h);
ovWords('fd1', 'shop', [
  ['s_bch', 'la boucherie', 'la·bu·shë·ri', 'la carnicería', '🥩', 'El carnicero: le boucher.'],
  ['s_poi', 'la poissonnerie', 'la·pua·sòn·ri', 'la pescadería', '🐟', 'El pescadero: le poissonnier.'],
  ['s_fro', 'la fromagerie', 'la·fro·ma·zhri', 'la quesería', '🧀', 'En Francia hay más de mil quesos distintos.'],
  ['s_pat', 'la pâtisserie', 'la·pa·tis·ri', 'la pastelería', '🍰'],
  ['s_pri', 'le primeur', 'lë·pri·mör', 'la verdulería (y el verdulero)', '🥕', 'Es la tienda y también la persona: chez le primeur.'],
  ['s_sup', 'le supermarché', 'lë·sü·pèr·mar·shé', 'el supermercado', '🛒'],
  ['s_mar', 'le marché', 'lë·mar·shé', 'el mercado', '🧺', 'Los mercados al aire libre abren por la mañana, dos o tres días por semana.'],
  ['s_che', 'chez', 'shé', 'en casa de, en la tienda de', null, 'Va con la persona: chez le boucher = à la boucherie.']]);
FG('f-shop', 'fd1', 'tiendas y alimentos');
function mdShopEx(mode){
  const n = pick(MD_FOOD), s = mdShop(n.shop);
  if (mode === 'match'){
    const shops = shuffle(MD_SHOPS.filter(x => x.h !== 'supermarché')).slice(0, 4);
    const rows = shops.map(x => pick(MD_FOOD.filter(f => f.shop === x.h)));
    return {t:'match', item:'f-shop', kind:'¿Dónde lo compras?', q:'<div class="hint">Relaciona cada alimento con su tienda.</div>',
      left:rows.map(f => ({v:mdThe(f), a:phrase(mdShop(f.shop)), say:mdThe(f), html:`<span class="han">${f.e} ${esc(mdThe(f))}</span>`})),
      right:shuffle(shops).map(x => ({v:phrase(x), html:`<span class="han">${esc(phrase(x))}</span>`})),
      rev:{h:rows.map(f => `${mdThe(f)} · ${phrase(mdShop(f.shop))}`).join(' · '), p:'', es:rows.map(f => `${f.es}: ${mdShop(f.shop).es}`).join(' · ')}};
  }
  if (mode === 'where'){
    const opts = [s, ...others(MD_SHOPS, s, 3, x => x.h)], fr = `Pour acheter ${mdDuN(n.pl ? mdPl(n) : n)}, je vais ${ovAu(s)}.`;
    return fMC('f-shop', '¿Adónde vas?', `<div class="pic">${n.e}</div><div class="qtext han">Pour acheter ${esc(mdDuN(n.pl ? mdPl(n) : n))}, je vais…</div>`, opts.map(x => oFr(ovAu(x))), ovAu(s),
      {h:fr, p:'', es:`Para comprar ${mdNoArt(n.pl ? n.esp : n.es)}, voy ${ovEsA(s.es)}.`});
  }
  if (mode === 'chez'){
    const x = pick(MD_SHOPS.filter(y => y.who && y.who !== 'primeur')), person = Math.random() < 0.5;
    const right = person ? 'chez le' : ovAu(x).replace(' ' + x.h, ''), word = person ? x.who : x.h, fr = `Je vais ${right} ${word}.`;
    return fMC('f-shop', 'Completa: ¿chez o à?', `<div class="pic">${x.e}</div><div class="qtext han">Je vais ___ ${esc(word)}.</div><div class="hint">${person ? 'una persona' : 'una tienda'}</div>`,
      ['chez le', 'à la', 'au', 'chez la'].map(t => oFr(t)), right, {h:fr, p:'', es:`Voy ${person ? 'donde ' + x.wes : ovEsA(x.es)}.`});
  }
  if (mode === 'listen'){
    const x = pick(MD_SHOPS), fr = `Je vais ${ovAu(x)}.`;
    return fMC('f-shop', 'Escucha: ¿adónde va?', audioBtns(fr, true), [x, ...others(MD_SHOPS, x, 3, y => y.h)].map(y => oPic(y.e, y.h)), x.h, {h:fr, p:'', es:`Voy ${ovEsA(x.es)}.`}, {say:fr});
  }
  const x = pick(MD_SHOPS.filter(y => y.who && y.who !== 'primeur'));
  const f = pick(MD_FOOD.filter(y => y.shop === x.h && !y.pl)) || n, fr2 = `J'|achète ${mdDuTile(f)} chez le ${x.who}.`, es = `Compro ${mdNoArt(f.es)} donde ${x.wes}.`;
  if (mode === 'speak') return fSpeak('f-shop', es, frText(fr2));
  return fTiles('f-shop', 'Tradúcelo al francés', fcue(es), fr2, es, ['à', 'la', 'au'].filter(t => !frChunks(fr2).includes(t)).slice(0, 2));
}

/* ---------- fd2 · plural y sonidos finales ---------- */
ovWords('fd2', 'food', [
  ['n_tom', 'la tomate', 'la·to·mat', 'el tomate', '🍅', 'Femenino en francés.'], ['n_car', 'la carotte', 'la·ka·ròt', 'la zanahoria', '🥕'],
  ['n_pom', 'la pomme', 'la·pòm', 'la manzana', '🍎'], ['n_fra', 'la fraise', 'la·frèz', 'la fresa', '🍓'],
  ['n_cit', 'le citron', 'lë·si·trõ', 'el limón', '🍋'], ['n_pvr', 'le poivron', 'lë·pua·vrõ', 'el pimiento', '🫑'],
  ['n_sal', 'la salade', 'la·sa·lad', 'la lechuga, la ensalada', '🥬'], ['n_pdt', 'la pomme de terre', 'la·pòm·dë·tèr', 'la papa', '🥔', 'Literalmente «manzana de la tierra».'],
  ['n_oeu', "l'œuf", 'löf', 'el huevo', '🥚', 'En plural la f no suena: des œufs = «dé·zö».'],
  ['n_gat', 'le gâteau', 'lë·ga·to', 'el pastel', '🍰', 'Plural con x: des gâteaux.']]);
FG('f-plur', 'fd2', 'singular, plural y sonidos finales');
const MD_IRREG = [['gâteau', 'gâteaux', 'pastel'], ['poireau', 'poireaux', 'puerro'], ['morceau', 'morceaux', 'pedazo'], ['couteau', 'couteaux', 'cuchillo'], ['chou', 'choux', 'col'], ['animal', 'animaux', 'animal'], ['journal', 'journaux', 'periódico']];
// final sounds: é (café, manger) or a consonant you hear because of the silent e (salade, fromage)
const MD_END_E = ['café', 'thé', 'purée', 'entrée', 'déjeuner', 'manger', 'goûter', 'soirée'], MD_END_C = ['salade', 'fromage', 'tomate', 'crème', 'baguette', 'pomme', 'carotte', 'fraise'];
// final consonants: silent in most words, heard in words ending in c, r, f, l (and a few more)
const MD_MUTE = ['beaucoup', 'sirop', 'plat', 'jus', 'riz', 'lait', 'dessert', 'croissant', 'chocolat', 'poulet', 'prends', 'veux'], MD_SAID = ['sel', 'bœuf', 'œuf', 'avec', 'bonjour', 'jour', 'sac', 'il', 'cher', 'bus'];
const MD_NUM = [[2, 'deux'], [3, 'trois'], [4, 'quatre'], [5, 'cinq'], [6, 'six']];
function mdPlurEx(mode){
  const n = pick(MD_COUNT.filter(x => x.h !== 'gâteau'));
  if (mode === 'hear'){
    const many = Math.random() < 0.5, fr = many ? `les ${n.pl}` : mdThe(n);
    return fMC('f-plur', 'Escucha: ¿uno o varios?', audioBtns(fr, true) + '<div class="hint">La -s del plural no suena: escucha el artículo.</div>', [oEs('Uno (singular)', 's'), oEs('Varios (plural)', 'p')], many ? 'p' : 's',
      {h:fr, p:'', es:many ? `${ovCap(n.es.replace(/^el /, 'los ').replace(/^la /, 'las ').replace(mdNoArt(n.es), n.esp))}: les suena «lé».` : `${ovCap(n.es)}: le suena «lë», la suena «la».`}, {say:fr});
  }
  if (mode === 'pic'){
    const [k, w] = pick(MD_NUM), opts = [`${w} ${n.pl}`, `${w} ${n.h}`, `${n.g === 'f' ? 'une' : 'un'} ${n.h}`, `des ${n.h}`];
    return fMC('f-plur', '¿Cuántos hay?', `<div class="pic">${n.e.repeat(k)}</div><div class="qtext han">Je voudrais…</div>`, uniqBy(opts, t => t).map(t => oFr(t)), opts[0],
      {h:`Je voudrais ${w} ${n.pl}.`, p:'', es:`Quisiera ${k} ${n.esp}.`});
  }
  if (mode === 'form'){
    const reg = Math.random() < 0.5, [s, p, es] = reg ? [n.h, n.pl, mdNoArt(n.es)] : pick(MD_IRREG), un = reg && n.g === 'f' ? 'une' : 'un';
    return {t:'type', item:'f-plur', kind:'Escribe el plural', q:`<div class="qtext han">${un} ${esc(s)} → des ___</div><div class="hint">${esc(es)}</div>`, answer:[p, 'des ' + p], ph:'Ej.: tomates',
      hint:'-eau y -eu agregan x; -al pasa a -aux. Las demás, -s.', rev:{h:`des ${p}`, p:'', es:`${es} en plural`}};
  }
  if (mode === 'ending'){
    const e = Math.random() < 0.5, w = pick(e ? MD_END_E : MD_END_C);
    return fMC('f-plur', '¿Cómo termina al oído?', `<div class="qtext han">${esc(w)}</div>${audioBtns(w)}`, [oEs('Suena «é»', 'e'), oEs('Suena una consonante: la e final no se oye', 'c')], e ? 'e' : 'c',
      {h:w, p:'', es:e ? 'Termina en «é»: é con tilde, y también -er y -ée.' : 'La e sin tilde no suena; se oye la consonante de antes.'}, {say:w});
  }
  if (mode === 'mute'){
    const said = Math.random() < 0.45, w = pick(said ? MD_SAID : MD_MUTE);
    return fMC('f-plur', '¿Suena la última consonante?', `<div class="qtext han">${esc(w)}</div>${audioBtns(w)}`, [oEs('Sí, se pronuncia', 'y'), oEs('No, es muda', 'n')], said ? 'y' : 'n',
      {h:w, p:'', es:said ? 'Se pronuncia. Truco: c, r, f y l al final casi siempre suenan (CaReFuL).' : 'Es muda, como la mayoría de las consonantes finales.'}, {say:w});
  }
  const [k, w] = pick(MD_NUM), fr = `Je voudrais ${w} ${n.pl}, s'il_vous_plaît.`, es = `Quisiera ${k} ${n.esp}, por favor.`;
  if (mode === 'speak') return fSpeak('f-plur', es, frText(fr));
  if (mode === 'listen') return fTiles('f-plur', 'Escucha y ordena', audioBtns(frText(fr)), fr, es, [n.h, 'des'], [], {say:frText(fr)});
  return fTiles('f-plur', 'Tradúcelo al francés', fcue(es), fr, es, [n.h, 'des']);
}

/* ---------- fd3 · du, de la, des ---------- */
ovWords('fd3', 'mass', [
  ['m_pai', 'le pain', 'lë·pẽ', 'el pan', '🍞'], ['m_via', 'la viande', 'la·viãd', 'la carne', '🥩'], ['m_poi', 'le poisson', 'lë·pua·sõ', 'el pescado', '🐟', 'Ojo: poisson (pescado) con ss; poison (veneno) con una s.'],
  ['m_fro', 'le fromage', 'lë·fro·mazh', 'el queso', '🧀'], ['m_lai', 'le lait', 'lë·lè', 'la leche', '🥛', 'Masculino: le lait. La t no suena.'],
  ['m_beu', 'le beurre', 'lë·bör', 'la mantequilla', '🧈'], ['m_eau', "l'eau", 'lo', 'el agua', '💧', 'Femenino: l\'eau minérale.'],
  ['m_suc', 'le sucre', 'lë·sükr', 'el azúcar', '🍬'], ['m_riz', 'le riz', 'lë·ri', 'el arroz', '🍚', 'La z no suena.'], ['m_fdm', 'les fruits de mer', 'lé·früi·dë·mèr', 'los mariscos', '🦐']]);
FG('f-part', 'fd3', 'du, de la, des');
// verbs for eating and drinking: [fr je, fr question, es yo]
const MD_EAT = [['Je mange', 'Tu manges', 'Como'], ['Je prends', 'Tu prends', 'Tomo'], ["J'|achète", 'Tu achètes', 'Compro']];
const mdDrink = n => ['lait', 'eau', 'café'].includes(n.h);
function mdPartEx(mode){
  const pool = [...MD_MASS, ...MD_COUNT.slice(0, 6).map(mdPl), mdFood('fruits de mer'), mdFood('pâtes')], n = pick(pool);
  const v = mdDrink(n) ? ['Je bois', 'Tu bois', 'Tomo'] : pick(MD_EAT), vf = frText(v[0]);
  if (mode === 'art'){
    const right = mdDu(n), fr = `${vf} ${mdDuN(n)}.`;
    return fMC('f-part', 'Completa con du, de la, de l\' o des', `<div class="pic">${n.e}</div><div class="qtext han">${esc(vf)} ___ ${esc(n.h)}.</div>`, ['du', 'de la', "de l'", 'des'].map(t => oFr(t)), right,
      {h:fr, p:'', es:`${v[2]} ${mdNoArt(n.es)}.`});
  }
  if (mode === 'neg'){
    const neg = vf.replace(/^Je /, 'Je ne ').replace(/^J'(\S+)/, "Je n'$1") + ' pas', fr = `${neg} ${mdDe(n)}.`;
    return fMC('f-part', 'Completa: después de pas…', `<div class="pic">${n.e}</div><div class="qtext han">${esc(neg)} ___ ${esc(n.h)}.</div>`, uniqBy([/^[aeiouéèêhœ]/i.test(n.h) ? "d'" : 'de', mdDu(n), 'des', 'le'], t => t).slice(0, 4).map(t => oFr(t)),
      /^[aeiouéèêhœ]/i.test(n.h) ? "d'" : 'de', {h:fr, p:'', es:`No ${v[2].toLowerCase()} ${mdNoArt(n.es)}.`});
  }
  if (mode === 'recipe'){
    const x = pick([mdFood('beurre'), mdFood('sucre'), mdFood('lait'), mdPl(mdFood('œuf'))]), set = [x, ...others(MD_MASS.filter(y => y.h !== x.h), x, 3, y => y.h)];
    return fMC('f-part', 'La receta: ¿qué lleva?', `<div class="ask">Pour la tarte aux pommes, il faut des pommes et…</div><div class="pic">${x.e}</div>`, set.map(y => oFr(mdDuN(y))), mdDuN(x),
      {h:`Il faut ${mdDuN(x)}.`, p:'', es:`Hace falta ${mdNoArt(x.es)}.`});
  }
  if (mode === 'listen'){
    const fr = `${vf} ${mdDuN(n)}.`;
    return fMC('f-part', 'Escucha: ¿qué es?', audioBtns(fr, true), [n, ...others(pool, n, 3, y => y.e)].map(y => oPic(y.e, y.h)), n.h, {h:fr, p:'', es:`${v[2]} ${mdNoArt(n.es)}.`}, {say:fr});
  }
  const fr = `${v[0]} ${mdDuTile(n)}.`, es = `${v[2]} ${mdNoArt(n.es)}.`;
  if (mode === 'speak') return fSpeak('f-part', es, frText(fr));
  return fTiles('f-part', 'Tradúcelo al francés', fcue(es) + '<div class="hint">En español no hay artículo; en francés sí.</div>', fr, es, ['le', 'la', 'de', 'des', 'du'].filter(t => !frChunks(fr).map(low).includes(t)).slice(0, 2));
}

/* ---------- fd4 · cantidades ---------- */
ovWords('fd4', 'qty', [
  ['q_kil', 'un kilo de', 'ẽ·ki·lo·dë', 'un kilo de'], ['q_bou', 'une bouteille de', 'ün·bu·tèy·dë', 'una botella de'],
  ['q_lit', 'un litre de', 'ẽ·litr·dë', 'un litro de'], ['q_par', 'une part de', 'ün·par·dë', 'una porción de (torta, pizza)'],
  ['q_mor', 'un morceau de', 'ẽ·mòr·so·dë', 'un pedazo de'], ['q_bar', 'une barquette de', 'ün·bar·kèt·dë', 'una cajita de (fresas)'],
  ['q_paq', 'un paquet de', 'ẽ·pa·kè·dë', 'un paquete de'], ['q_dou', 'une douzaine de', 'ün·du·zèn·dë', 'una docena de'],
  ['q_peu', 'un peu de', 'ẽ·pö·dë', 'un poco de'], ['q_bcp', 'beaucoup de', 'bo·ku·dë', 'mucho, mucha']]);
FG('f-qty', 'fd4', 'cantidades');
// each container with the foods that go with it
const MD_QTY = [['un kilo de', 'un kilo de', ['tomates', 'pommes', 'pommes de terre', 'carottes', 'poires']], ['une bouteille de', 'una botella de', ['eau', 'lait']],
  ['un litre de', 'un litro de', ['lait', 'eau']], ['une part de', 'una porción de', ['gâteau']], ['un morceau de', 'un pedazo de', ['fromage', 'pain', 'chocolat']],
  ['une barquette de', 'una cajita de', ['fraises']], ['un paquet de', 'un paquete de', ['pâtes', 'riz', 'sucre', 'café']], ['une douzaine de', 'una docena de', ['œufs']]];
const mdQ = (q, h) => { const n = mdFood(h) || MD_FOOD.find(f => f.pl === h); const plural = n.pl === h; return {n, h, es:plural ? n.esp : mdNoArt(n.es), fr:/^[aeiouéèêhœ]/i.test(h) ? q.replace(/de$/, "d'") + h : q + ' ' + h}; };
// coffee: lait and sucre, each with +++ / + / −
const MD_HOW = [['+++', 'beaucoup de', 'mucha'], ['+', 'un peu de', 'un poco de'], ['−', 'pas de', 'sin']];
function mdQtyEx(mode){
  if (mode === 'match'){
    const qs = shuffle(MD_QTY.filter(q => q[0] !== 'un litre de')).slice(0, 4), only = h => MD_QTY.filter(q => q[2].includes(h)).length === 1;
    const rows = qs.map(q => mdQ(q[0], pick(q[2].filter(only).length ? q[2].filter(only) : q[2])));
    return {t:'match', item:'f-qty', kind:'Relaciona la cantidad con el alimento', q:'<div class="hint">Toca una cantidad y luego lo que va con ella.</div>',
      left:qs.map((q, k) => ({v:q[0], a:rows[k].h, say:q[0], html:`<span class="han">${esc(q[0])}…</span>`})), right:shuffle(rows).map(r => ({v:r.h, html:`<span class="han">${r.n.e} ${esc(r.h)}</span>`})),
      rev:{h:rows.map(r => r.fr).join(' · '), p:'', es:qs.map((q, k) => `${q[1]} ${rows[k].es}`).join(' · ')}};
  }
  const q = pick(MD_QTY), x = mdQ(q[0], pick(q[2]));
  if (mode === 'de'){
    const vowel = /^[aeiouéèêhœ]/i.test(x.h), right = vowel ? "d'" : 'de', gap = q[0].replace(/ de$/, '');
    return fMC('f-qty', 'Completa', `<div class="pic">${x.n.e}</div><div class="qtext han">${esc(gap)} ___ ${esc(x.h)}</div>`, uniqBy([right, mdDu(x.n.pl === x.h ? mdPl(x.n) : x.n), 'des', vowel ? 'de' : "d'"], t => t).slice(0, 4).map(t => oFr(t)), right,
      {h:x.fr, p:'', es:`${q[1]} ${x.es}`});
  }
  if (mode === 'which'){
    const opts = [q, ...shuffle(MD_QTY.filter(o => !o[2].includes(x.h))).slice(0, 3)];
    return fMC('f-qty', '¿Qué cantidad va?', `<div class="pic">${x.n.e}</div><div class="qtext han">Je voudrais ___ ${esc(x.h)}.</div>`, opts.map(o => oFr(o[0].replace(/ de$/, ''), o[0])), q[0],
      {h:`Je voudrais ${x.fr}.`, p:'', es:`Quisiera ${q[1]} ${x.es}.`}, {wide:true});
  }
  if (mode === 'cafe'){
    const a = pick(MD_HOW), b = pick(MD_HOW), name = pick(['Yanis', 'Chloé', 'Marc', 'Nina']);
    const say = (m, w) => m[1] === 'pas de' ? `pas de ${w}` : `${m[1]} ${w}`;
    const fr = `${name} prend son café avec ${say(a, 'lait')} et ${say(b, 'sucre')}.`.replace('avec pas de lait et pas de sucre', 'sans lait et sans sucre').replace('avec pas de lait', 'sans lait').replace('et pas de sucre', 'et sans sucre');
    const opt = (m1, m2) => `${ovCap(say(m1, 'lait'))} et ${say(m2, 'sucre')}.`;
    const right = opt(a, b), wrong = shuffle(MD_HOW.flatMap(m1 => MD_HOW.map(m2 => opt(m1, m2))).filter(t => t !== right)).slice(0, 3);
    return fMC('f-qty', `¿Cómo toma ${name} el café?`, `<div class="pic">☕</div><div class="qtext">🥛 ${a[0]} · 🍬 ${b[0]}</div><div class="hint">+++ mucho · + un poco · − nada</div>`, [right, ...wrong].map(t => oFr(t)), right,
      {h:fr, p:'', es:`Toma el café con ${a[1] === 'pas de' ? 'nada de' : a[2]} leche y ${b[1] === 'pas de' ? 'nada de' : b[2]} azúcar.`}, {wide:true});
  }
  if (mode === 'listen'){
    const fr = `Je voudrais ${x.fr}, s'il vous plaît.`, opts = [q, ...shuffle(MD_QTY.filter(o => o !== q)).slice(0, 3)];
    return fMC('f-qty', 'Escucha: ¿qué cantidad pide?', audioBtns(fr, true), opts.map(o => oEs(`${o[1]}…`, o[0])), q[0], {h:fr, p:'', es:`Quisiera ${q[1]} ${x.es}, por favor.`}, {say:fr});
  }
  const fr = `Je voudrais ${q[0].replace(/ de$/, '')} ${mdDeTile({h:x.h})}, s'il_vous_plaît.`, es = `Quisiera ${q[1]} ${x.es}, por favor.`;
  if (mode === 'speak') return fSpeak('f-qty', es, frText(fr));
  return fTiles('f-qty', 'Tradúcelo al francés', fcue(es) + '<div class="hint">Después de una cantidad va de, sin artículo.</div>', fr, es, ['du', 'des', 'de_la'].filter(t => !frChunks(fr).includes(t.replace('_', ' '))).slice(0, 2));
}

/* ---------- fd5 · el pronombre en ---------- */
ovWords('fd5', 'en', [
  ['e_en', 'en', 'ã', 'de eso, de ellos (pronombre)', null, 'Reemplaza du, de la, des + alimento: J\'en mange.'],
  ['e_vou', 'je voudrais', 'zhë·vu·drè', 'quisiera', null, 'Más cortés que je veux.'],
  ['e_boi', 'boire', 'buar', 'beber', null, 'Irregular: je bois, tu bois, il boit.'],
  ['e_ach', 'acheter', 'ash·té', 'comprar', null, "Con tilde grave en j'achète, tu achètes."],
  ['e_man', 'manger', 'mã·zhé', 'comer', null, 'Nous mangeons: la e se queda para que la g suene suave.'],
  ['e_com', 'combien de', 'kõ·biẽ·dë', 'cuánto, cuántos']]);
FG('f-en', 'fd5', 'el pronombre en');
// [question, verb for "je", Spanish question, Spanish verb]
const MD_EN = [['Tu manges', 'mange', 'Comes', 'como'], ['Tu bois', 'bois', 'Tomas', 'tomo'], ['Tu achètes', 'achète', 'Compras', 'compro'], ['Tu veux', 'veux', 'Quieres', 'quiero'], ['Vous avez', 'ai', '¿Tiene usted', 'tengo']];
function mdEnQ(){
  const [q, v, qes, ves] = pick(MD_EN), n = q === 'Tu bois' ? pick(MD_MASS.filter(mdDrink)) : pick([...MD_MASS.filter(x => !mdDrink(x)), ...MD_COUNT.slice(0, 6).map(mdPl)]);
  const vowel = /^[aeiouéèêh]/.test(v);
  return {n, q:`${q} ${mdDuN(n)} ?`, qes:`${qes.startsWith('¿') ? qes : '¿' + qes} ${mdNoArt(n.es)}?`, yes:`Oui, j'en ${v}.`, no:`Non, je n'en ${v} pas.`,
    yesT:"Oui, j'|en " + v + '.', noT:"Non, je n'|en " + v + ' pas.', yes_es:`Sí, ${ves}.`, no_es:`No, no ${ves}.`, v, vowel};
}
function mdEnEx(mode){
  const x = mdEnQ();
  if (mode === 'yes' || mode === 'no'){
    const yes = mode === 'yes', right = yes ? x.yes : x.no;
    const wrong = yes ? [`Oui, je ${x.v} en.`, `Oui, je le ${x.v}.`, `Oui, j'en ne ${x.v}.`] : [`Non, je n'${x.v} pas en.`, `Non, je ne ${x.v} pas en.`, `Non, j'en ne ${x.v} pas.`];
    return fMC('f-en', 'Responde con en', bub('Amigo', x.q) + `<div class="ask">${yes ? 'Responde que sí.' : 'Responde que no.'}</div>`, [right, ...wrong].map(t => oFr(t)), right,
      {h:`${x.q} — ${right}`, p:'', es:`${x.qes} ${yes ? x.yes_es : x.no_es}`}, {say:x.q, wide:true});
  }
  if (mode === 'swap'){
    const s = `${x.q.replace(/^Tu (\w+)/, (m, w) => 'Je ' + x.v).replace(/^Vous avez/, "J'ai").replace(' ?', '.')}`, right = `J'en ${x.v}.`;
    return fMC('f-en', 'Reemplaza con en', `<div class="qtext han">${esc(s)}</div><div class="hint">Cambia «${esc(mdDuN(x.n))}» por en.</div>`, [right, `Je ${x.v} en.`, `J'${x.v} en.`, `Je le ${x.v}.`].map(t => oFr(t)), right,
      {h:`${s} → ${right}`, p:'', es:'En va antes del verbo.'});
  }
  if (mode === 'kilo'){
    const n = mdFood(pick(['tomate', 'pomme', 'poire', 'carotte', 'pomme de terre', 'citron'])), [k, w] = pick(MD_NUM), q = `Combien de ${n.pl} vous voulez ?`, a = `J'en voudrais ${w} kilos.`;
    return fTiles('f-en', 'Responde con en', bub('Vendedor', q) + `<div class="ask">Quieres <b>${k} kilos</b>.</div>`, `J'|en voudrais ${w} kilos.`, `Quisiera ${k} kilos.`, ['de', n.pl, 'les'], [], {say:q});
  }
  if (mode === 'listen'){
    const yes = Math.random() < 0.5, a = yes ? x.yes : x.no;
    return fMC('f-en', 'Escucha la respuesta', bub('Amigo', x.q) + audioBtns(a), [oEs('Dice que sí', 'y'), oEs('Dice que no', 'n')], yes ? 'y' : 'n', {h:a, p:'', es:yes ? x.yes_es : x.no_es}, {say:a});
  }
  const yes = Math.random() < 0.5;
  if (mode === 'speak') return fSpeak('f-en', `${x.qes} — ${yes ? x.yes_es : x.no_es}`, yes ? x.yes : x.no, 'Responde en voz alta con en.');
  return fTiles('f-en', 'Responde con en', bub('Amigo', x.q) + `<div class="ask">Responde: <b>${esc(yes ? x.yes_es : x.no_es)}</b></div>`, yes ? x.yesT : x.noT, yes ? x.yes_es : x.no_es,
    ['le', 'de', yes ? 'pas' : 'ne'].filter(t => !frChunks(yes ? x.yesT : x.noT).includes(t)), [], {say:x.q});
}

/* ---------- fd6 · de compras ---------- */
ovWords('fd6', 'buy', [
  ['b_ser', 'Ce sera tout.', 'së·së·ra·tu', 'Eso es todo.'], ['b_qui', "C'est à qui ?", 'sè·ta·ki', '¿A quién le toca?'],
  ['b_pay', 'Vous payez comment ?', 'vu·pè·yé·ko·mã', '¿Cómo va a pagar?'], ['b_car', 'par carte', 'par·kart', 'con tarjeta'],
  ['b_esp', 'en espèces', 'ã·nès·pès', 'en efectivo'], ['b_fai', 'Ça fait combien ?', 'sa·fè·kõ·biẽ', '¿Cuánto es?'],
  ['b_coû', 'Combien coûte… ?', 'kõ·biẽ·kut', '¿Cuánto cuesta…?'], ['b_aut', 'Et avec ceci ?', 'é·a·vèk·së·si', '¿Algo más?']]);
FG('f-buy', 'fd6', 'hacer las compras');
// who says it: v vendor, c customer
const MD_LINES = [["Bonjour, qu'est-ce que je vous sers ?", 'v', '¿Qué le sirvo?'], ["C'est à qui ?", 'v', '¿A quién le toca?'], ['Et avec ceci ?', 'v', '¿Algo más?'],
  ['Vous payez comment ?', 'v', '¿Cómo va a pagar?'], ['Ça fait six euros quarante.', 'v', 'Son seis euros con cuarenta.'], ['Voilà votre monnaie.', 'v', 'Aquí tiene su vuelto.'],
  ['Je voudrais deux kilos de pommes.', 'c', 'Quisiera dos kilos de manzanas.'], ['Combien coûte une barquette de fraises ?', 'c', '¿Cuánto cuesta una cajita de fresas?'],
  ['Est-ce que vous avez des poivrons ?', 'c', '¿Tiene pimientos?'], ['Ce sera tout, merci.', 'c', 'Eso es todo, gracias.'], ["Par carte, s'il vous plaît.", 'c', 'Con tarjeta, por favor.'],
  ['Ça fait combien ?', 'c', '¿Cuánto es?']];
// vendor line → what you answer (es cue, fr answer with "_" and "|" for tiles, traps)
const MD_TURNS = [
  ["Bonjour, qu'est-ce que je vous sers ?", 'Quisiera un kilo de tomates, por favor.', "Je voudrais un kilo de tomates, s'il_vous_plaît.", ['des', 'du']],
  ['Et avec ceci ?', 'Eso es todo, gracias.', 'Ce sera tout, merci.', ['est', 'tous']],
  ['Vous payez comment ?', 'Con tarjeta, por favor.', "Par carte, s'il_vous_plaît.", ['en', 'avec']],
  ["C'est à qui ?", '¡Me toca a mí!', "C'est à moi !", ['je', 'toi']],
  ['Et avec ceci ?', 'Una docena de huevos, también.', "Une douzaine d'|œufs, aussi.", ['des', 'de']]];
function mdBuyEx(mode){
  if (mode === 'who'){
    const [fr, w, es] = pick(MD_LINES);
    return fMC('f-buy', '¿Quién lo dice?', fq(fr), [oEs('🧑‍🍳 El vendedor', 'v'), oEs('🙋 El cliente', 'c')], w, {h:fr, p:'', es}, {say:fr});
  }
  if (mode === 'price' || mode === 'listen'){
    const c = rint(1, 19) * 100 + pick([0, 10, 20, 30, 40, 50, 60, 70, 80, 90]), e = mdEuro(c), fr = `Ça fait ${e.fr}.`;
    const near = uniqBy([c, c + 1000, (c % 100) * 100 + Math.floor(c / 100) || c + 50, c + 50, c - 10, c + 300].filter(x => x > 0 && x !== c), x => x);
    const opts = uniqBy([c, ...shuffle(near)].map(mdEuro), x => x.t).slice(0, 4);
    if (mode === 'price') return fMC('f-buy', '¿Cómo se dice?', `<div class="qtext">${e.t}</div><div class="ask">Ça fait…</div>`, opts.map(x => oFr(x.fr)), e.fr, {h:fr, p:'', es:`Son ${e.t}.`}, {wide:true});
    return fMC('f-buy', 'Escucha: ¿cuánto es?', audioBtns(fr, true), opts.map(x => oEs(x.t, x.fr)), e.fr, {h:fr, p:'', es:`Son ${e.t}.`}, {say:fr});
  }
  if (mode === 'reply'){
    const [q, cue, fr, traps] = pick(MD_TURNS);
    return fTiles('f-buy', 'Responde al vendedor', bub('Vendedor', q) + `<div class="ask">Responde: <b>${esc(cue)}</b></div>`, fr, cue, traps, [], {say:q});
  }
  const [fr, , es] = pick(MD_LINES.filter(l => l[1] === 'c')), s = fr.replace("s'il vous plaît", "s'il_vous_plaît");
  if (mode === 'speak') return fSpeak('f-buy', es, fr);
  return fTiles('f-buy', 'Tradúcelo al francés', fcue(es), s, es, ['le', 'est']);
}

/* ---------- fd7 · horarios ---------- */
ovWords('fd7', 'hours', [
  ['h_ouv', 'ouvert', 'u·vèr', 'abierto', null, 'Femenino: ouverte (la boulangerie est ouverte).'], ['h_fer', 'fermé', 'fèr·mé', 'cerrado'],
  ['h_ouvr', 'ouvre', 'uvr', 'abre'], ['h_mat', 'le matin', 'lë·ma·tẽ', 'la mañana'], ['h_soi', 'le soir', 'lë·suar', 'la noche, la tarde'],
  ['h_mid', 'midi', 'mi·di', 'mediodía'], ['h_heu', 'une heure', 'ü·nër', 'una hora, la una'], ['h_dem', 'et demie', 'é·dë·mi', 'y media']]);
FG('f-hours', 'fd7', 'horarios de apertura');
const MD_PLACES = [['La boulangerie du Coin', 'f'], ['La boucherie Martin', 'f'], ['La fromagerie La Meule', 'f'], ['La poissonnerie du Port', 'f'], ['Le primeur Le Panier', 'm'], ['Le restaurant Chez Lili', 'm']];
// days are 0 = lundi … 6 = dimanche, like DAYS
const MD_WEEKS = [{d:[0, 1, 2, 3, 4, 5], fr:'du lundi au samedi', es:'de lunes a sábado'}, {d:[1, 2, 3, 4, 5], fr:'du mardi au samedi', es:'de martes a sábado'},
  {d:[0, 1, 2, 3, 4], fr:'du lundi au vendredi', es:'de lunes a viernes'}, {d:[1, 2, 3, 4, 5, 6], fr:'du mardi au dimanche', es:'de martes a domingo'}];
const MD_TIMES = [[[8, 13], [15, 19]], [[9, 19]], [[7, 13], [16, 20]], [[11, 15], [19, 23]], [[9, 12], [14, 18]], [[10, 20]]];
function mdSched(){
  const [name, g] = pick(MD_PLACES), w = pick(MD_WEEKS), t = pick(MD_TIMES);
  const closed = DAYS.map((d, i) => i).filter(i => !w.d.includes(i));
  return {name, g, w, t, closed, id:`${w.fr}|${t.map(b => b.join('-')).join(',')}`};
}
const mdClosed = s => s.closed.map(i => 'le ' + DAYS[i][0]).join(' et ');
const mdSchedFr = s => `${s.name} est ${s.g === 'f' ? 'ouverte' : 'ouvert'} ${s.w.fr}, ${s.t.map(b => `de ${mdHour(b[0])} à ${mdHour(b[1])}`).join(' et ')}.`;
const mdSchedEs = s => `Abre ${s.w.es}, ${s.t.map(b => `de ${b[0]} a ${b[1]} h`).join(' y ')}.`;
function mdSign(s, small){
  return `<div class="sign${small ? ' sm' : ''}"><b>${esc(s.name)}</b><span>Ouvert ${esc(s.w.fr)}</span><span class="hrs">${s.t.map(b => `${mdHt(b[0])} – ${mdHt(b[1])}`).join(' · ')}</span><small>Fermé ${esc(mdClosed(s))}</small></div>`;
}
function mdHoursEx(mode){
  const s = mdSched();
  if (mode === 'open'){
    const yes = Math.random() < 0.5;
    let d, h;
    for (let k = 0; k < 50; k++){
      d = rint(0, 6); h = rint(7, 22);
      const open = s.w.d.includes(d) && s.t.some(b => h >= b[0] && h < b[1]);
      if (open === yes) break;
    }
    const fr = yes ? "Oui, c'est ouvert." : "Non, c'est fermé.";
    return fMC('f-hours', 'Mira el cartel', mdSign(s) + `<div class="qtext han">Le ${DAYS[d][0]}, à ${h} h, c'est ouvert ?</div>`, [oFr("Oui, c'est ouvert."), oFr("Non, c'est fermé.")], fr,
      {h:fr, p:'', es:`El ${DAYS[d][1]} a las ${h}: ${yes ? 'está abierto' : 'está cerrado'}. ${mdSchedEs(s)}`});
  }
  if (mode === 'when'){
    const h0 = s.t[0][0], opts = uniqBy([h0, s.t[0][1], h0 + 1, h0 - 1, h0 + 12 > 23 ? h0 + 2 : h0 + 12], x => x).slice(0, 4);
    const fr = `${s.name.replace(/^La |^Le /, m => m.toLowerCase())} ouvre à ${mdHour(h0)}.`;
    return fMC('f-hours', 'Mira el cartel', mdSign(s) + `<div class="qtext han">Ça ouvre à quelle heure ?</div>`, opts.map(x => oFr(mdHour(x))), mdHour(h0), {h:ovCap(fr), p:'', es:`Abre a las ${h0}.`});
  }
  if (mode === 'listen'){
    const set = [s];
    for (let k = 0; set.length < 4 && k < 80; k++){ const o = {...mdSched(), name:s.name, g:s.g}; o.id = `${o.w.fr}|${o.t.map(b => b.join('-')).join(',')}`; if (!set.some(x => x.id === o.id)) set.push(o); }
    const fr = mdSchedFr(s);
    return fMC('f-hours', 'Escucha y elige el cartel', audioBtns(fr, true), set.map(x => ({v:x.id, html:mdSign(x, true)})), s.id, {h:fr, p:'', es:mdSchedEs(s)}, {say:fr});
  }
  if (mode === 'closed'){
    const right = mdClosed(s), opts = uniqBy([right, ...shuffle(MD_WEEKS.filter(w => w !== s.w)).map(w => DAYS.map((d, i) => i).filter(i => !w.d.includes(i)).map(i => 'le ' + DAYS[i][0]).join(' et '))], t => t).slice(0, 4);
    return fMC('f-hours', '¿Qué días cierra?', mdSign(s).replace(/<small>[^<]*<\/small>/, '') + '<div class="qtext han">C\'est fermé…</div>', opts.map(t => oFr(t)), right, {h:`C'est fermé ${right}.`, p:'', es:mdSchedEs(s)});
  }
  const fr = `C'est ouvert ${s.w.fr.replace(/ /g, '_')}.`, es = `Está abierto ${s.w.es}.`;
  if (mode === 'speak') return fSpeak('f-hours', mdSchedEs(s), mdSchedFr(s), 'Lee el cartel en voz alta, en francés.');
  return fTiles('f-hours', 'Tradúcelo al francés', fcue(es), `C'est ouvert ${s.w.fr}.`, es, ['fermé', 'le', 'à']);
}

/* ---------- fd8 · en el restaurante ---------- */
ovWords('fd8', 'table', [
  ['r_fou', 'la fourchette', 'la·fur·shèt', 'el tenedor', '🍴'], ['r_cou', 'le couteau', 'lë·ku·to', 'el cuchillo', '🔪', 'Plural: des couteaux.'],
  ['r_cui', 'la cuillère', 'la·küi·yèr', 'la cuchara', '🥄'], ['r_ass', "l'assiette", 'la·siètt', 'el plato (la vajilla)', '🍽️'],
  ['r_ver', 'le verre', 'lë·vèr', 'el vaso', '🥃'], ['r_tas', 'la tasse', 'la·tas', 'la taza', '☕'],
  ['r_sel', 'le sel', 'lë·sèl', 'la sal', '🧂', 'La l final sí suena.'], ['r_add', "l'addition", 'la·di·siõ', 'la cuenta', '🧾', "L'addition, s'il vous plaît !"],
  ['r_pdj', 'le plat du jour', 'lë·pla·dü·zhur', 'el plato del día', '📋'], ['r_des', 'le dessert', 'lë·dé·sèr', 'el postre', '🍮', 'Con ss y la t muda. Desert (desierto) lleva una sola s.']]);
FG('f-resto', 'fd8', 'en el restaurante');
// to eat or drink X you need Y
const MD_NEED = [['la soupe', 'la sopa', 'une cuillère'], ['la viande', 'la carne', 'un couteau'], ["l'eau", 'el agua', 'un verre'], ['le café', 'el café', 'une tasse'], ['les frites', 'las papas fritas', 'une fourchette']];
const MD_PLATS = [{h:'poulet rôti', meat:1}, {h:'steak frites', meat:1}, {h:'bœuf bourguignon', meat:1}, {h:'jambon, purée', meat:1}, {h:'tarte aux légumes'}, {h:'omelette, salade'}, {h:'pâtes aux légumes'}];
const MD_ENTREES = ['soupe de légumes', 'salade de carottes', 'salade de tomates'], MD_DESS = ['tarte aux fraises', 'yaourt', 'salade de fruits', 'mousse au chocolat'];
// the week's menu: four days, only one without meat
function mdMenu(){
  const days = [0, 1, 2, 3, 4].sort(() => Math.random() - 0.5).slice(0, 4).sort(), veg = pick(days), price = pick([9, 10, 12]);
  const meat = shuffle(MD_PLATS.filter(x => x.meat));
  const rows = days.map(d => ({d, e:pick(MD_ENTREES), p:(d === veg ? pick(MD_PLATS.filter(x => !x.meat)) : meat.pop()).h, s:pick(MD_DESS)}));
  return {rows, veg, price};
}
const mdMenuBox = m => `<div class="menu"><div class="mhead">Menu de la semaine · formule entrée + plat + dessert : ${m.price} €</div><div class="mgrid">${m.rows.map(r => `<div class="mday"><b>${DAYS[r.d][0]}</b><span>${esc(r.e)}</span><span class="mplat">${esc(r.p)}</span><span>${esc(r.s)}</span></div>`).join('')}</div></div>`;
function mdRestoEx(mode){
  if (mode === 'menu'){
    const m = mdMenu(), what = pick(['veg', 'price', 'dish']), box = mdMenuBox(m);
    if (what === 'veg') return fMC('f-resto', 'Lee el menú', box + '<div class="ask">Vous ne mangez pas de viande. Quel jour vous pouvez manger ici ?</div>', m.rows.map(r => oFr(DAYS[r.d][0])), DAYS[m.veg][0],
      {h:`Le ${DAYS[m.veg][0]} : ${m.rows.find(r => r.d === m.veg).p}.`, p:'', es:`El ${DAYS[m.veg][1]}: es el único día con plato sin carne.`});
    if (what === 'price'){ const opts = uniqBy([m.price, m.price + 2, m.price - 1, m.price + 5], x => x); return fMC('f-resto', 'Lee el menú', box + '<div class="ask">Combien coûte la formule ?</div>', opts.map(x => oFr(`${x} €`)), `${m.price} €`,
      {h:`La formule coûte ${frNum(m.price)} euros.`, p:'', es:`La fórmula cuesta ${m.price} euros: entrada, plato y postre.`}); }
    const r = pick(m.rows);
    return fMC('f-resto', 'Lee el menú', box + `<div class="ask">Le ${DAYS[r.d][0]}, quel est le plat ?</div>`, m.rows.map(x => oFr(x.p)).filter((o, i, a) => a.findIndex(y => y.v === o.v) === i), r.p,
      {h:`Le ${DAYS[r.d][0]} : ${r.p}.`, p:'', es:`El plato del ${DAYS[r.d][1]}.`});
  }
  if (mode === 'need'){
    const [h, es, need] = pick(MD_NEED), opts = MD_NEED.map(x => x[2]).filter((t, i, a) => a.indexOf(t) === i).slice(0, 4);
    if (!opts.includes(need)) opts[3] = need;
    return fMC('f-resto', '¿Qué necesitas?', `<div class="qtext han">Pour ${h === "l'eau" ? 'boire' : h === 'le café' ? 'boire' : 'manger'} ${esc(h)}, il faut…</div>`, opts.map(t => oFr(t)), need,
      {h:`Pour ${h === "l'eau" || h === 'le café' ? 'boire' : 'manger'} ${h}, il faut ${need}.`, p:'', es:`Para ${h === "l'eau" || h === 'le café' ? 'tomar' : 'comer'} ${es} hace falta eso.`});
  }
  if (mode === 'who'){
    const L = pick([["Qu'est-ce que vous prenez ?", 'v', '¿Qué van a tomar?'], ['Vous avez choisi ?', 'v', '¿Ya eligieron?'], ['Et comme boisson ?', 'v', '¿Y para tomar?'],
      ["Je vais prendre le plat du jour.", 'c', 'Voy a pedir el plato del día.'], ["L'addition, s'il vous plaît !", 'c', '¡La cuenta, por favor!'], ['Combien je vous dois ?', 'c', '¿Cuánto le debo?'],
      ['Une table pour deux, s\'il vous plaît.', 'c', 'Una mesa para dos, por favor.'], ['Bon appétit !', 'v', '¡Buen provecho!']]);
    return fMC('f-resto', '¿Quién lo dice?', fq(L[0]), [oEs('🧑‍🍳 El mesero', 'v'), oEs('🙋 El cliente', 'c')], L[1], {h:L[0], p:'', es:L[2]}, {say:L[0]});
  }
  if (mode === 'order'){
    const t = pick([["Qu'est-ce que vous prenez ?", 'El plato del día, por favor.', 'Le plat du jour, s\'il_vous_plaît.', ['un', 'de']],
      ['Et comme boisson ?', 'Un vaso de agua, por favor.', "Un verre d'|eau, s'il_vous_plaît.", ['de', "l'", 'une']],
      ['Vous prenez un dessert ?', 'Sí, una tarta de fresas.', 'Oui, une tarte aux fraises.', ['de', 'des', 'à']],
      ['Tout va bien ?', 'Sí, ¡está delicioso!', "Oui, c'est délicieux !", ['est', 'bon']],
      ['Autre chose ?', 'No, gracias. La cuenta, por favor.', "Non, merci. L'|addition, s'il_vous_plaît.", ['la', 'le']]]);
    return fTiles('f-resto', 'Responde al mesero', bub('Mesero', t[0]) + `<div class="ask">Responde: <b>${esc(t[1])}</b></div>`, t[2], t[1], t[3], [], {say:t[0]});
  }
  const t = pick([['Una mesa para dos, por favor.', "Une table pour deux, s'il_vous_plaît."], ['¿Cuánto le debo?', 'Combien je vous dois ?'], ['Voy a pedir el plato del día.', 'Je vais prendre le plat du jour.']]);
  if (mode === 'speak') return fSpeak('f-resto', t[0], frText(t[1]));
  return fTiles('f-resto', 'Tradúcelo al francés', fcue(t[0]), t[1], t[0], ['de', 'une', 'le'].filter(x => !frChunks(t[1]).includes(x)).slice(0, 2));
}

/* ---------- fd9 · gustos y opiniones ---------- */
ovWords('fd9', 'taste', [
  ['g_aim', "j'aime bien", 'zhèm·biẽ', 'me gusta (bastante)', '🙂'], ['g_det', 'je déteste', 'zhë·dé·tèst', 'odio, detesto', '😖'],
  ['g_gen', "c'est génial", 'sè·zhé·nial', 'es genial', '🤩'], ['g_del', "c'est délicieux", 'sè·dé·li·siö', 'es delicioso', '😋'],
  ['g_mau', 'mauvais', 'mo·vè', 'malo', null, 'Femenino: mauvaise.'], ['g_moc', 'moche', 'mòsh', 'feo (familiar)'],
  ['g_pol', 'poli', 'po·li', 'educado, amable', null, 'Lo contrario: malpoli.'], ['g_sym', 'sympa', 'sẽ·pa', 'simpático', null, 'No cambia en femenino.']]);
FG('f-gout', 'fd9', 'gustos y opiniones');
const MD_LIKE = [["J'adore", '❤️', 'Me encanta', 2], ["J'aime bien", '🙂', 'Me gusta', 1], ["Je n'aime pas", '☹️', 'No me gusta', -1], ['Je déteste', '😖', 'Odio', -2]];
const MD_OPIN = [['Le serveur est poli.', 1, 'El mesero es educado.'], ['Le serveur est malpoli.', 0, 'El mesero es maleducado.'], ['Le restaurant est moche.', 0, 'El restaurante es feo.'],
  ['Le plat du jour est mauvais.', 0, 'El plato del día es malo.'], ['La terrasse est agréable.', 1, 'La terraza es agradable.'], ['Les croissants sont bons.', 1, 'Los croissants son buenos.'],
  ['Les tables sont jolies.', 1, 'Las mesas son bonitas.'], ['La serveuse est sympa.', 1, 'La mesera es simpática.'], ['Le café est froid.', 0, 'El café está frío.'], ["C'est trop cher !", 0, '¡Es demasiado caro!']];
// tastes take le, la, les; eating takes du, de la, des
const mdTaste = () => { const c = Math.random() < 0.4, n = c ? mdPl(pick(MD_COUNT)) : pick(MD_MASS); return n; };
function mdGoutEx(mode){
  const n = mdTaste(), L = pick(MD_LIKE), fr = `${L[0]} ${mdThe(n)}.`, es = `${L[2]}${n.g.endsWith('p') && L[3] !== -2 ? 'n' : ''} ${n.es}.`.replace('Odio', 'Odio');
  if (mode === 'face') return fMC('f-gout', '¿Qué siente?', fq(fr), MD_LIKE.map(x => oPic(x[1], x[0])), L[0], {h:fr, p:'', es}, {say:fr});
  if (mode === 'feel') return fMC('f-gout', 'Dilo en francés', `<div class="pic">${L[1]} ${n.e}</div>`, MD_LIKE.map(x => oFr(`${x[0]} ${mdThe(n)}.`)), fr, {h:fr, p:'', es}, {wide:true});
  if (mode === 'pos'){
    const [o, good, oes] = pick(MD_OPIN);
    return fMC('f-gout', '¿Positivo o negativo?', fq(o), [oEs('👍 Positivo', '1'), oEs('👎 Negativo', '0')], String(good), {h:o, p:'', es:oes}, {say:o});
  }
  if (mode === 'art'){
    const like = Math.random() < 0.5, m = n.g.endsWith('p') ? n : pick(MD_MASS), right = like ? mdA(m) : mdDu(m);
    const s = like ? `J'aime ___ ${m.h}.` : `Je mange ___ ${m.h}.`, full = like ? `J'aime ${mdThe(m)}.` : `Je mange ${mdDuN(m)}.`;
    return fMC('f-gout', '¿Gusto o cantidad?', `<div class="pic">${m.e}</div><div class="qtext han">${esc(s)}</div><div class="hint">Gustos: le, la, les · comer algo: du, de la, des</div>`,
      uniqBy([right, like ? mdDu(m) : mdA(m), m.g.endsWith('p') ? 'de' : 'les', 'de'], t => t).slice(0, 4).map(t => oFr(t)), right,
      {h:full, p:'', es:like ? `Me gusta${m.g.endsWith('p') ? 'n' : ''} ${m.es}.` : `Como ${mdNoArt(m.es)}.`});
  }
  if (mode === 'listen') return fMC('f-gout', 'Escucha: ¿qué siente?', audioBtns(fr, true), MD_LIKE.map(x => oPic(x[1], x[0])), L[0], {h:fr, p:'', es}, {say:fr});
  const t = mdA(n) === "l'" ? `${L[0]} l'|${n.h}.` : `${L[0]} ${mdA(n)} ${n.h}.`;
  const tt = t.replace("J'adore", "J'|adore").replace("J'aime bien", "J'|aime bien").replace("Je n'aime pas", "Je n'|aime pas");
  if (mode === 'speak') return fSpeak('f-gout', es, fr);
  return fTiles('f-gout', 'Tradúcelo al francés', fcue(es) + '<div class="hint">Con los gustos va le, la o les.</div>', tt, es, ['du', 'de', 'des'].filter(x => !frChunks(tt).includes(x)).slice(0, 2));
}

/* ---------- frases modelo ---------- */
FS('fd1', [
  ['fs_d1', "Je vais à la boulangerie, chez le boulanger.", 'Voy a la panadería, donde el panadero.', ['au', 'à_le']]]);
FS('fd3', [
  ['fs_d2', 'Je mange du pain et je bois de l\'|eau.', 'Como pan y tomo agua.', ['le', 'la']],
  ['fs_d3', 'Je ne mange pas de viande.', 'No como carne.', ['la', 'du']]]);
FS('fd4', [
  ['fs_d4', "Je voudrais un kilo de tomates, s'il_vous_plaît.", 'Quisiera un kilo de tomates, por favor.', ['des', 'les']]]);
FS('fd5', [
  ['fs_d5', "Des fraises ? Oui, j'|en veux.", '¿Fresas? Sí, quiero.', ['les', 'le']],
  ['fs_d6', "Non, je n'|en mange pas.", 'No, no como.', ['le', 'de']]]);
FS('fd6', [
  ['fs_d7', 'Combien coûte une barquette de fraises ?', '¿Cuánto cuesta una cajita de fresas?', ['des', 'les']]]);
FS('fd7', [
  ['fs_d8', "La boulangerie ouvre à sept heures.", 'La panadería abre a las siete.', ['est', 'le']]]);
FS('fd8', [
  ['fs_d9', "L'|addition, s'il_vous_plaît !", '¡La cuenta, por favor!', ['la', 'le']],
  ['fs_d10', 'Je vais prendre le plat du jour.', 'Voy a pedir el plato del día.', ['un', 'de']]]);
FS('fd9', [
  ['fs_d11', "J'|adore le fromage, mais je déteste les carottes.", 'Me encanta el queso, pero odio las zanahorias.', ['du', 'des']]]);

/* ---------- generators, modes and levels ---------- */
Object.assign(GEN, {'f-shop':mdShopEx, 'f-plur':mdPlurEx, 'f-part':mdPartEx, 'f-qty':mdQtyEx, 'f-en':mdEnEx, 'f-buy':mdBuyEx, 'f-hours':mdHoursEx, 'f-resto':mdRestoEx, 'f-gout':mdGoutEx});
Object.assign(GEN_MODES, {'f-shop':['match','where','chez','listen','build'], 'f-plur':['hear','pic','form','ending','mute','build'], 'f-part':['art','recipe','neg','listen','build'],
  'f-qty':['match','de','which','cafe','build'], 'f-en':['swap','yes','no','build','kilo'], 'f-buy':['who','price','listen','reply','build'],
  'f-hours':['open','when','closed','listen','build'], 'f-resto':['need','who','order','menu','build'], 'f-gout':['face','pos','art','feel','build']});
Object.assign(L2_GEN, {'f-shop':['listen','chez','where','build'], 'f-plur':['hear','form','ending','mute'], 'f-part':['listen','neg','art','build'], 'f-qty':['listen','de','cafe','build'],
  'f-en':['listen','yes','no','build'], 'f-buy':['listen','reply','who'], 'f-hours':['listen','open','closed'], 'f-resto':['menu','order','who','build'], 'f-gout':['listen','art','pos','build']});
Object.assign(L3, {
  fd1: () => [...mix(mdShopEx, [['match',2],['where',3],['chez',3],['listen',3],['build',3],['speak',2]]), ...sentProd('fd1', 1)],
  fd2: () => mix(mdPlurEx, [['hear',3],['pic',2],['form',3],['ending',2],['mute',2],['build',2],['listen',2],['speak',1]]),
  fd3: () => [...mix(mdPartEx, [['art',3],['neg',3],['recipe',2],['listen',2],['build',3],['speak',2]]), ...sentProd('fd3', 1)],
  fd4: () => mix(mdQtyEx, [['match',2],['de',3],['which',2],['cafe',3],['listen',2],['build',3],['speak',1]]),
  fd5: () => [...mix(mdEnEx, [['swap',3],['yes',2],['no',2],['kilo',2],['listen',2],['build',3],['speak',2]]), ...sentProd('fd5', 1)],
  fd6: () => mix(mdBuyEx, [['who',3],['price',3],['listen',3],['reply',4],['build',2],['speak',1]]),
  fd7: () => mix(mdHoursEx, [['open',3],['when',3],['closed',2],['listen',3],['build',2],['speak',2]]),
  fd8: () => [...mix(mdRestoEx, [['menu',4],['need',2],['who',2],['order',4],['build',2],['speak',1]]), ...sentProd('fd8', 1)],
  fd9: () => [...mix(mdGoutEx, [['face',2],['pos',3],['art',3],['feel',2],['listen',2],['build',3],['speak',2]]), ...sentProd('fd9', 1)]
});

/* ---------- units ---------- */
U('fd1', 'fd', 'Shop', 'Las tiendas', 'Je vais chez le boulanger.', 'Las tiendas y lo que venden', [
  R('Vocabulario', 'Cada tienda y su vendedor', [['la boulangerie · le boulanger', 'pan, baguettes, croissants'], ['la boucherie · le boucher', 'carne, pollo, jamón'], ['la poissonnerie · le poissonnier', 'pescado, mariscos'],
    ['la fromagerie · le fromager', 'queso, mantequilla'], ['le primeur', 'frutas y verduras'], ['le supermarché', 'un poco de todo']],
    'En Francia mucha gente todavía compra el pan en la boulangerie y la carne en la boucherie: cada tienda tiene su oficio. ' + PREV('à + le = au de la unidad 2: au supermarché.')),
  R('La regla', 'À la tienda, chez la persona', [['Je vais à la boulangerie.', 'à + tienda'], ['Je vais chez le boulanger.', 'chez + persona'], ['Je vais au marché.', 'à + le = au']],
    'Chez significa «en casa de» o «en el local de» alguien. Por eso va con la persona (chez le boucher, chez Marie), nunca con la tienda.')], ['fs_d1']);
U('fd2', 'fd', 'S', 'Singular y plural', 'deux baguettes', 'El plural y lo que no suena al final', [
  R('El plural', 'Se escribe, no se oye', [['une tomate · des tomates', '+ s, que no suena'], ['le citron · les citrons', 'lë · lé: el artículo dice si son varios'], ['un gâteau · des gâteaux', '-eau → -eaux'], ['un journal · des journaux', '-al → -aux']],
    'Como la -s del plural no suena, al oído el plural se reconoce por el artículo (le · les) o por el número.'),
  R('Fonética', 'Las letras finales', [['salade · fromage', 'la e final no suena: se oye la consonante'], ['café · thé · manger', 'é, -ée y -er suenan «é»'], ['beaucoup · plat · jus', 'la consonante final casi nunca suena'], ['sel · avec · bonjour · bœuf', 'pero c, r, f y l sí suelen sonar']],
    'Un truco para recordar las que sí suenan: CaReFuL (c, r, f, l).')]);
U('fd3', 'fd', 'Du', 'Du, de la, des', 'Je mange du pain.', 'Una cantidad que no se cuenta', [
  R('La regla', 'El partitivo', [['du pain', 'masculino'], ['de la viande', 'femenino'], ["de l'eau", 'delante de vocal'], ['des fraises', 'plural']],
    'En español decimos «como pan» sin artículo; en francés siempre va du, de la, de l\' o des: <b>Je mange du pain.</b>',
    [['de + le', 'du'], ['de + les', 'des']]),
  R('Con negación', 'pas de', [['Je ne mange pas de viande.', 'du, de la, des → de'], ["Je ne bois pas d'eau.", "de → d' delante de vocal"]],
    'Después de pas, todo se vuelve de. ' + PREV('ne… pas de la unidad 1.'))], ['fs_d2', 'fs_d3']);
U('fd4', 'fd', 'Kg', 'Cantidades', 'un kilo de tomates', 'Kilos, botellas, porciones y un poco de…', [
  R('La regla', 'Cantidad + de', [['un kilo de pommes', 'sin artículo después de de'], ["une bouteille d'eau", "de → d'"], ['une part de gâteau', 'una porción'], ['un morceau de fromage', 'un pedazo']],
    'Después de una cantidad no va du, de la ni des: solo de. Igual que en español: un kilo de manzanas.'),
  R('Más o menos', 'beaucoup de, un peu de, pas de', [['beaucoup de lait', 'mucha leche'], ['un peu de sucre', 'un poco de azúcar'], ['pas de sucre · sans sucre', 'nada de azúcar']],
    'Funcionan como las cantidades: siempre con de, nunca con du o de la.')], ['fs_d4']);
U('fd5', 'fd', 'En', 'El pronombre en', "Oui, j'en veux.", 'No repetir el alimento', [
  R('La regla', 'en = de eso', [["Tu manges du pain ? — Oui, j'en mange.", 'en reemplaza du pain'], ["Tu bois du café ? — Non, je n'en bois pas.", 'en va antes del verbo'], ["Combien de pommes ? — J'en voudrais deux kilos.", 'con una cantidad, la cantidad se queda al final']],
    'En reemplaza lo que va con du, de la, des, de o una cantidad. Va pegado delante del verbo: <b>j\'en</b> (je + en) y, en negativo, <b>je n\'en… pas</b>.',
    [['sí', "j'en + verbo"], ['no', "je n'en + verbo + pas"]])], ['fs_d5', 'fs_d6']);
U('fd6', 'fd', '€', 'De compras', 'Ce sera tout, merci.', 'Pedir, preguntar el precio y pagar', [
  R('En la tienda', 'Lo que dice cada uno', [["Qu'est-ce que je vous sers ?", 'el vendedor: ¿qué le sirvo?'], ['Je voudrais un kilo de tomates.', 'tú: quisiera…'], ['Et avec ceci ?', 'el vendedor: ¿algo más?'], ['Ce sera tout.', 'tú: eso es todo'], ['Vous payez comment ?', 'el vendedor'], ['Par carte.', 'tú']],
    'Je voudrais (quisiera) es la forma cortés de pedir. Je veux (quiero) suena brusco con un vendedor.'),
  R('Los precios', 'Euros y céntimos', [['3,50 €', 'trois euros cinquante'], ['1,20 €', 'un euro vingt'], ['12 €', 'douze euros']],
    'Se dice el número de euros y luego los céntimos, sin «con». En Francia la coma separa los céntimos. ' + PREV('los números hasta 100 de la unidad 1.'))], ['fs_d7']);
U('fd7', 'fd', 'h', 'Horarios', 'Ouvert du mardi au samedi', 'Leer y decir horarios de apertura', [
  R('Los horarios', 'De… à…, du… au…', [['de huit heures à treize heures', 'de 8 a 13 h'], ['du lundi au samedi', 'de lunes a sábado'], ['Fermé le dimanche.', 'cerrado los domingos'], ['La boulangerie ouvre à sept heures.', 'abre a las siete']],
    'En los carteles se usa el reloj de 24 horas: 19 h = dix-neuf heures. Muchas tiendas pequeñas cierran al mediodía y el domingo por la tarde (o todo el día).',
    [['días', 'du lundi au samedi'], ['horas', 'de 8 h à 13 h']])], ['fs_d8']);
U('fd8', 'fd', 'Menu', 'En el restaurante', "L'addition, s'il vous plaît !", 'Pedir, la mesa y leer el menú', [
  R('Pedir', 'En el restaurante o el café', [["Une table pour deux, s'il vous plaît.", 'al llegar'], ["Qu'est-ce que vous prenez ?", 'el mesero'], ['Je vais prendre le plat du jour.', 'tú'], ["L'addition, s'il vous plaît !", 'al final'], ['Combien je vous dois ?', '¿cuánto le debo?']],
    'La formule es un menú a precio fijo: entrée (entrada) + plat (plato principal) + dessert (postre).'),
  R('Vocabulario', 'La mesa', [['la fourchette · le couteau · la cuillère', 'tenedor, cuchillo, cuchara'], ["l'assiette · le verre · la tasse", 'plato, vaso, taza'], ['le sel · le poivre', 'sal y pimienta']],
    'En Francia el agua de la llave es gratis en los restaurantes: se pide «une carafe d\'eau».')], ['fs_d9', 'fs_d10']);
U('fd9', 'fd', '♥', 'Gustos', "J'adore le fromage !", 'Decir qué te gusta y opinar', [
  R('Los gustos', 'De ❤️ a 😖', [["J'adore le fromage.", 'me encanta'], ["J'aime bien les fruits.", 'me gusta'], ["Je n'aime pas la salade.", 'no me gusta'], ['Je déteste les carottes.', 'lo odio']],
    "Con los gustos va le, la, les (el alimento en general): J'aime <b>le</b> fromage. Para comer una parte va du, de la, des: Je mange <b>du</b> fromage."),
  R('Opinar', 'Positivo o negativo', [['poli · malpoli', 'educado · maleducado'], ['bon · mauvais', 'bueno · malo'], ['joli · moche', 'bonito · feo'], ['agréable · sympa · génial', 'siempre positivos']],
    'Estos adjetivos te sirven para opinar sobre un restaurante, un plato o un mesero.')], ['fs_d11']);

/* ---------- dialogs ---------- */
const DLG_D = [
  {where:'En el mercado', who:'Vendedor', turns:[
    {say:"Bonjour madame, qu'est-ce que je vous sers ?", you:'Quisiera un kilo de tomates, por favor.', ans:"Je voudrais un kilo de tomates, s'il_vous_plaît.", traps:['des', 'veux']},
    {say:'Et avec ceci ?', you:'¿Tiene fresas?', ans:'Est-ce que vous avez des fraises ?', alts:['Vous avez des fraises ?'], traps:['les', 'de']},
    {say:"Oui, la barquette est à trois euros cinquante.", listen:['La cajita de fresas cuesta 3,50 €.', 'La cajita de fresas cuesta 3,15 €.', 'El kilo de tomates cuesta 3,50 €.', 'No tiene fresas.'], ask:'¿Qué dijo el vendedor?', es:'Sí, la cajita está a 3,50 €.'},
    {say:'Ce sera tout ?', you:'Sí, eso es todo. Pago con tarjeta.', ans:'Oui, ce sera tout. Je paie par carte.', traps:['en', 'tous']}]},
  {where:'En la panadería', who:'Panadera', turns:[
    {say:'Bonjour ! Vous désirez ?', you:'Una baguette y dos croissants, por favor.', ans:"Une baguette et deux croissants, s'il_vous_plaît.", traps:['croissant', 'des']},
    {say:'La formule sandwich et boisson est à cinq euros.', listen:['La fórmula de sándwich y bebida cuesta 5 €.', 'El sándwich cuesta 5 € sin bebida.', 'La fórmula cuesta 15 €.', 'No venden sándwiches.'], ask:'¿Qué le ofrece?', es:'La fórmula sándwich y bebida está a cinco euros.'},
    {say:'Un sandwich jambon-beurre ? Vous en voulez un ?', you:'No, gracias. No como carne.', ans:'Non, merci. Je ne mange pas de viande.', traps:['la', 'du']}]},
  {where:'En el restaurante', who:'Mesera', turns:[
    {say:"Qu'est-ce que vous prenez ?", you:'Voy a pedir el plato del día.', ans:'Je vais prendre le plat du jour.', traps:['un', 'de']},
    {say:"Aujourd'hui, c'est du poulet rôti avec des pommes de terre.", listen:['Hoy hay pollo asado con papas.', 'Hoy hay pescado con papas.', 'Hoy hay pollo con arroz.', 'Hoy no hay plato del día.'], ask:'¿Cuál es el plato del día?', es:'Hoy hay pollo asado con papas.'},
    {say:'Et comme boisson ?', you:'Una jarra de agua, por favor.', ans:"Une carafe d'|eau, s'il_vous_plaît.", traps:['de', "l'"]},
    {say:'Tout va bien ?', you:'Sí, ¡me encanta! La cuenta, por favor.', ans:"Oui, j'|adore ! L'|addition, s'il_vous_plaît.", traps:['la', 'aime']}]},
  {where:'En el café', who:'Hugo', turns:[
    {say:'Tu prends ton café avec du lait ?', you:'Sí, con un poco de leche y sin azúcar.', ans:'Oui, avec un peu de lait et sans sucre.', traps:['du', 'pas']},
    {say:"Moi, je n'aime pas le café. Je déteste ça !", listen:['A Hugo no le gusta el café: lo odia.', 'A Hugo le encanta el café.', 'Hugo toma el café sin azúcar.', 'A Hugo le gusta un poco el café.'], ask:'¿Qué dijo Hugo?', es:'Yo no soporto el café. ¡Lo odio!'},
    {say:"Tu veux des croissants ?", you:'Sí, quiero.', ans:"Oui, j'|en veux.", traps:['les', 'le']}]}];
MODULES.fd = {n:4, tab:'On mange ?', zh:"Qu'est-ce qu'on mange ?", p:'kès·kõ·mãzh', es:'Unidad 3 · Tiendas, plural, du/de la/des, cantidades, en, comprar, horarios, el restaurante y los gustos.',
  examKey:'examBestFd', dlgPlan:() => frDialogPlan(DLG_D, 'f-buy'), dlgSub:'En el mercado, la panadería, el restaurante y el café'};
