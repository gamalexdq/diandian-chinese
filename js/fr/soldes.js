/* =================== Ruta 5 · Les soldes, c'est parti ! (unidad 4) ===================
   La ropa y los accesorios, los colores, el género, el número y el lugar de los adjetivos,
   el tiempo, las rebajas, los objetos, ce/cet/cette/ces, el futuro próximo y el pasado
   reciente. El mapa del tiempo, las etiquetas y las líneas de tiempo se arman aquí; los
   textos y los ejercicios son propios. */
const sdVow = w => /^[aeiouéèêhœ]/i.test(w);
const sdUn = n => n.g.endsWith('p') ? 'des' : n.g === 'm' ? 'un' : 'une';
const sdUnN = n => sdUn(n) + ' ' + n.h;
const sdCe = n => n.g.endsWith('p') ? 'ces' : n.g === 'f' ? 'cette' : sdVow(n.h) ? 'cet' : 'ce';
const sdEsG = es => /^(el|los|un|unos) /.test(es) ? 'm' : 'f';
const sdEsP = es => /^(los|las|unos|unas) /.test(es);
const sdEsUn = es => es.replace(/^el /, 'un ').replace(/^la /, 'una ').replace(/^los /, 'unos ').replace(/^las /, 'unas ');
const sdEsEste = es => es.replace(/^el /, 'este ').replace(/^la /, 'esta ').replace(/^los /, 'estos ').replace(/^las /, 'estas ');
const sdEsPl = w => /[aeiouáéíóú]$/.test(w) ? w + 's' : w.replace(/ón$/, 'on') + 'es';
// es: [masculine, feminine] in the singular
const sdEsAdj = (es, g, pl) => (w => pl ? sdEsPl(w) : w)(es[g === 'f' ? 1 : 0]);
const SD_GI = {m:0, f:1, mp:2, fp:3};
// a.f: [m, f, mp, fp]
const sdForm = (a, n) => a.f[SD_GI[n.g]];
const sdEst = n => n.g.endsWith('p') ? 'sont' : 'est';
const sdIl = n => n.g.endsWith('p') ? (n.g === 'fp' ? 'Elles' : 'Ils') : n.g === 'f' ? 'Elle' : 'Il';
const sdList = (arr, f, and = 'et') => arr.length === 1 ? f(arr[0]) : arr.slice(0, -1).map(f).join(', ') + ` ${and} ` + f(arr[arr.length - 1]);
const sdSw = (c, big) => `<span class="sw${big ? ' big' : ''}" style="background:${c.css}" role="img" aria-label="${c.es[0]}"></span>`;

/* ---------- la ropa y los accesorios ---------- */
// g: m, f, mp, fp · pl: French plural · es: Spanish with article (its gender can differ) · esp: Spanish plural · k: v ropa, a accesorio
const SD_CLO = [
  {h:'tee-shirt', pl:'tee-shirts', g:'m', e:'👕', es:'la camiseta', esp:'camisetas', k:'v'}, {h:'chemise', pl:'chemises', g:'f', e:'👔', es:'la camisa', esp:'camisas', k:'v'},
  {h:'robe', pl:'robes', g:'f', e:'👗', es:'el vestido', esp:'vestidos', k:'v'}, {h:'jupe', pl:'jupes', g:'f', es:'la falda', esp:'faldas', k:'v'},
  {h:'pantalon', pl:'pantalons', g:'m', es:'el pantalón', esp:'pantalones', k:'v'}, {h:'jean', pl:'jeans', g:'m', e:'👖', es:'el jean', esp:'jeans', k:'v'},
  {h:'pull', pl:'pulls', g:'m', es:'el suéter', esp:'suéteres', k:'v'}, {h:'manteau', pl:'manteaux', g:'m', e:'🧥', es:'el abrigo', esp:'abrigos', k:'v'},
  {h:'veste', pl:'vestes', g:'f', es:'la casaca', esp:'casacas', k:'v'}, {h:'costume', pl:'costumes', g:'m', es:'el terno', esp:'ternos', k:'v'},
  {h:'imperméable', pl:'imperméables', g:'m', es:'el impermeable', esp:'impermeables', k:'v'},
  {h:'écharpe', pl:'écharpes', g:'f', e:'🧣', es:'la bufanda', esp:'bufandas', k:'a'}, {h:'chapeau', pl:'chapeaux', g:'m', e:'👒', es:'el sombrero', esp:'sombreros', k:'a'},
  {h:'ceinture', pl:'ceintures', g:'f', es:'el cinturón', esp:'cinturones', k:'a'}, {h:'sac', pl:'sacs', g:'m', e:'👜', es:'el bolso', esp:'bolsos', k:'a'},
  {h:'parapluie', pl:'parapluies', g:'m', e:'☂️', es:'el paraguas', esp:'paraguas', k:'a'},
  {h:'lunettes de soleil', g:'fp', e:'🕶️', es:'los lentes de sol', k:'a'}, {h:'chaussures', g:'fp', e:'👞', es:'los zapatos', k:'a'},
  {h:'bottes', g:'fp', e:'👢', es:'las botas', k:'a'}, {h:'bijoux', g:'mp', e:'💍', es:'las joyas', k:'a'},
  {h:'gants', g:'mp', e:'🧤', es:'los guantes', k:'a'}, {h:'baskets', g:'fp', e:'👟', es:'las zapatillas', k:'a'}];
const sdClo = h => SD_CLO.find(n => n.h === h);
const SD_PICS = SD_CLO.filter(n => n.e), SD_SG = SD_CLO.filter(n => n.pl);
// the plural as a noun of its own: des robes, les manteaux
const sdPlN = n => n.g.endsWith('p') ? n : {...n, h:n.pl, g:n.g + 'p', es:(sdEsG(n.es) === 'm' ? 'los ' : 'las ') + n.esp};
// Spanish adjective that agrees with the Spanish noun
const sdEsA = (es2, n) => sdEsAdj(es2, sdEsG(n.es), sdEsP(n.es));
const sdGenderNote = n => n.g.length === 1 && sdEsG(n.es) !== n.g ? ` Ojo: en francés es ${n.g === 'm' ? 'masculino' : 'femenino'}.` : '';

/* ---------- fe1 · la ropa ---------- */
ovWords('fe1', 'clo', [
  ['v_tsh', 'le tee-shirt', 'lë·ti·shërt', 'la camiseta, el polo', '👕', 'Masculino en francés.'], ['v_che', 'la chemise', 'la·shë·miz', 'la camisa', '👔'],
  ['v_rob', 'la robe', 'la·ròb', 'el vestido', '👗', 'Ojo: la robe es el vestido. La ropa es les vêtements.'], ['v_jup', 'la jupe', 'la·zhüp', 'la falda'],
  ['v_pan', 'le pantalon', 'lë·pã·ta·lõ', 'el pantalón', null, 'En singular, como en español.'], ['v_jea', 'le jean', 'lë·djin', 'el jean', '👖', 'Se dice «djin», como en inglés.'],
  ['v_pul', 'le pull', 'lë·pül', 'el suéter, la chompa', null, 'En Quebec dicen un tricot.'], ['v_man', 'le manteau', 'lë·mã·to', 'el abrigo', '🧥', 'Plural: des manteaux.'],
  ['v_ves', 'la veste', 'la·vèst', 'la casaca, la chaqueta'], ['v_cos', 'le costume', 'lë·kòs·tüm', 'el terno', null, 'No es un disfraz: un costume es un terno.'],
  ['v_imp', "l'imperméable", 'lẽ·pèr·mé·abl', 'el impermeable', null, 'Masculino: un imperméable.']]);
FG('f-vet', 'fe1', 'la ropa, porter y mettre');
const SD_METTRE = ['mets', 'mets', 'met', 'mettons', 'mettez', 'mettent'], SD_PONER = ['me pongo', 'te pones', 'se pone', 'nos ponemos', 'se ponen', 'se ponen'];
function sdVetEx(mode){
  if (mode === 'porte'){
    const who = pick([['Elle', 'Ella', '👩'], ['Il', 'Él', '🧑']]), set = shuffle(SD_PICS).slice(0, 3);
    const say = s => `${who[0]} porte ${sdList(s, sdUnN)}.`;
    const swap = (s, i) => { const o = s.slice(); o[i] = pick(SD_PICS.filter(x => !s.includes(x))); return o; };
    const sg = set.findIndex(x => x.g.length === 1), art = sg < 0 ? null : set.map((x, i) => i === sg ? {...x, g:x.g === 'm' ? 'f' : 'm'} : x);
    const opts = uniqBy([say(set), say(swap(set, rint(0, 2))), ...(art ? [say(art)] : []), say(swap(swap(set, 0), 2)), say(swap(set, 1))], t => t).slice(0, 4);
    return fMC('f-vet', '¿Qué lleva puesto?', `<div class="pic">${who[2]}</div><div class="pic">${set.map(x => x.e).join(' ')}</div>`, opts.map(t => oFr(t)), opts[0],
      {h:opts[0], p:'', es:`${who[1]} lleva ${sdList(set, x => sdEsUn(x.es), 'y')}.`}, {wide:true});
  }
  if (mode === 'un'){
    const n = pick(SD_CLO), right = sdUn(n), fr = `Je cherche ${sdUnN(n)}.`;
    return fMC('f-vet', 'Completa con un, une o des', `${n.e ? `<div class="pic">${n.e}</div>` : ''}<div class="qtext han">Je cherche ___ ${esc(n.h)}.</div><div class="hint">${esc(n.es)}</div>`,
      ['un', 'une', 'des'].map(t => oFr(t)), right, {h:fr, p:'', es:`Busco ${sdEsUn(n.es)}.${sdGenderNote(n)}`});
  }
  if (mode === 'mettre'){
    const S = pick(OV_SUBJ), n = pick(SD_CLO), right = SD_METTRE[S.i], fr = `Aujourd'hui, ${lc1(S.fr)} ${right} ${sdUnN(n)}.`;
    const opts = uniqBy([right, ...shuffle(SD_METTRE.filter(f => f !== right))], t => t).slice(0, 4);
    return fMC('f-vet', 'Completa con mettre', `<div class="qtext han">Aujourd'hui, ${esc(lc1(S.fr))} ___ ${esc(sdUnN(n))}.</div><div class="hint">mettre = ponerse</div>`, opts.map(t => oFr(t)), right,
      {h:fr, p:'', es:`Hoy, ${['Yo', 'Tú'].includes(S.es) ? '' : S.es.toLowerCase() + ' '}${SD_PONER[S.i]} ${sdEsUn(n.es)}.`});
  }
  if (mode === 'listen'){
    const pair = shuffle(SD_PICS).slice(0, 2), key = p => p.map(x => x.h).sort().join('+'), fr = `Il porte ${sdList(pair, sdUnN)}.`;
    const sets = [pair];
    for (let k = 0; sets.length < 4 && k < 60; k++){ const o = Math.random() < 0.6 ? [pick(pair), pick(SD_PICS)] : shuffle(SD_PICS).slice(0, 2); if (o[0] !== o[1] && !sets.some(s => key(s) === key(o))) sets.push(o); }
    return fMC('f-vet', 'Escucha: ¿qué lleva?', audioBtns(fr, true), sets.map(s => ({v:key(s), html:`<span class="emo">${s.map(x => x.e).join('')}</span>`})), key(pair),
      {h:fr, p:'', es:`Él lleva ${sdList(pair, x => sdEsUn(x.es), 'y')}.`}, {say:fr});
  }
  const [a, b] = shuffle(SD_CLO.filter(n => n.k === 'v')).slice(0, 2), fr = `Aujourd'hui, je porte ${sdUnN(a)} et ${sdUnN(b)}.`, es = `Hoy llevo ${sdEsUn(a.es)} y ${sdEsUn(b.es)}.`;
  if (mode === 'speak') return fSpeak('f-vet', es, fr);
  return fTiles('f-vet', 'Tradúcelo al francés', fcue(es), fr, es, [a.g === 'm' ? 'une' : 'un', 'portes']);
}

/* ---------- fe2 · accesorios, materiales y opiniones ---------- */
ovWords('fe2', 'acc', [
  ['a_sac', 'le sac à main', 'lë·sak·a·mẽ', 'la cartera, el bolso', '👜'], ['a_lun', 'les lunettes de soleil', 'lé·lü·nèt·dë·so·lèy', 'los lentes de sol', '🕶️', 'Siempre en plural: des lunettes.'],
  ['a_cha', 'le chapeau', 'lë·sha·po', 'el sombrero', '👒', 'Plural: des chapeaux.'], ['a_chs', 'les chaussures', 'lé·sho·sür', 'los zapatos', '👞'],
  ['a_bot', 'les bottes', 'lé·bòt', 'las botas', '👢'], ['a_bij', 'les bijoux', 'lé·bi·zhu', 'las joyas', '💍', 'Singular: un bijou.'],
  ['a_par', 'le parapluie', 'lë·pa·ra·plüi', 'el paraguas', '☂️'], ['a_ech', "l'écharpe", 'lé·sharp', 'la bufanda', '🧣', 'Femenino: une écharpe.'],
  ['a_cei', 'la ceinture', 'la·sẽ·tür', 'el cinturón']]);
ovWords('fe2', 'mat', [
  ['a_cui', 'en cuir', 'ã·küir', 'de cuero'], ['a_cot', 'en coton', 'ã·ko·tõ', 'de algodón'], ['a_lai', 'en laine', 'ã·lèn', 'de lana'], ['a_jen', 'en jean', 'ã·djin', 'de jean']]);
FG('f-acc', 'fe2', 'accesorios, materiales y opiniones');
const SD_MAT = [['en cuir', 'de cuero'], ['en coton', 'de algodón'], ['en laine', 'de lana'], ['en jean', 'de jean']];
// only the materials that make sense for each thing
const SD_MAT_OK = {veste:['en cuir', 'en jean', 'en laine', 'en coton'], pull:['en laine', 'en coton'], manteau:['en laine', 'en cuir'], jupe:['en jean', 'en coton', 'en cuir'],
  chemise:['en jean', 'en coton'], sac:['en cuir', 'en jean'], écharpe:['en laine', 'en coton'], chapeau:['en coton', 'en laine'], ceinture:['en cuir'], pantalon:['en coton', 'en cuir', 'en laine']};
const sdMatPick = () => { const n = sdClo(pick(Object.keys(SD_MAT_OK))), k = pick(SD_MAT_OK[n.h]), m = SD_MAT.find(x => x[0] === k); return [n, m[0], m[1]]; };
const SD_LIKE = ["C'est joli !", 'Ça me plaît !', "C'est à la mode !", "J'adore !"], SD_HATE = ['Quelle horreur !', 'Ça ne me plaît pas.', "Ce n'est pas à la mode.", "C'est moche !"];
const SD_LIKE_ES = ['¡Es bonito!', '¡Me gusta!', '¡Está de moda!', '¡Me encanta!'], SD_HATE_ES = ['¡Qué horror!', 'No me gusta.', 'No está de moda.', '¡Es feo!'];
// the blog: things a blogger loves in each season, and things she hates
const SD_BLOG = {été:[['les robes en coton', 'los vestidos de algodón'], ['les tee-shirts à rayures', 'las camisetas a rayas'], ['les lunettes de soleil', 'los lentes de sol'], ['les grands chapeaux', 'los sombreros grandes'], ['les jupes courtes', 'las faldas cortas']],
  hiver:[['les pulls en laine', 'los suéteres de lana'], ['les manteaux longs', 'los abrigos largos'], ['les écharpes', 'las bufandas'], ['les bottes en cuir', 'las botas de cuero'], ['les gants', 'los guantes']]};
const SD_BLOG_NO = [['les jeans larges', 'los jeans anchos'], ['les couleurs foncées', 'los colores oscuros'], ['les costumes gris', 'los ternos grises'], ['les chaussures blanches', 'los zapatos blancos'], ['les vestes en cuir', 'las casacas de cuero']];
function sdAccEx(mode){
  if (mode === 'match'){
    const rows = shuffle(SD_PICS.filter(n => n.k === 'a')).slice(0, 4);
    return {t:'match', item:'f-acc', kind:'Relaciona cada palabra con su dibujo', q:'<div class="hint">Toca una palabra y luego su dibujo.</div>',
      left:rows.map(n => ({v:n.h, a:n.e, say:mdThe(n), html:`<span class="han">${esc(mdThe(n))}</span>`})), right:shuffle(rows).map(n => ({v:n.e, html:`<span class="emo">${n.e}</span>`})),
      rev:{h:rows.map(n => mdThe(n)).join(' · '), p:'', es:rows.map(n => n.es).join(' · ')}};
  }
  if (mode === 'mat'){
    const [n, m, mes] = sdMatPick(), right = `${sdUnN(n)} ${m}`, o = pick(SD_SG.filter(x => x.g === n.g && x.h !== n.h));
    const opts = [right, `${sdUnN(n)} ${pick(SD_MAT.filter(x => x[0] !== m))[0]}`, `${n.g === 'm' ? 'une' : 'un'} ${n.h} ${m}`, `${sdUnN(o)} ${m}`];
    return fMC('f-acc', 'Elige en francés', fcue(`${sdEsUn(n.es)} ${mes}`), opts.map(t => oFr(t)), right, {h:right, p:'', es:`${sdEsUn(n.es)} ${mes}.${sdGenderNote(n)}`});
  }
  if (mode === 'appr'){
    const good = Math.random() < 0.5, n = pick(SD_PICS), set = good ? SD_LIKE : SD_HATE, k = rint(0, 3), right = set[k];
    const opts = [right, ...shuffle(good ? SD_HATE : SD_LIKE).slice(0, 3)];
    return fMC('f-acc', '¿Qué dices?', `<div class="pic">${good ? '😍' : '🤢'} ${n.e}</div><div class="hint">${good ? 'Te encanta.' : 'No te gusta nada.'}</div>`, opts.map(t => oFr(t)), right,
      {h:right, p:'', es:(good ? SD_LIKE_ES : SD_HATE_ES)[k]}, {wide:true});
  }
  if (mode === 'pos' || mode === 'listen'){
    const good = Math.random() < 0.5, k = rint(0, 3), fr = (good ? SD_LIKE : SD_HATE)[k];
    return fMC('f-acc', mode === 'pos' ? '¿Positivo o negativo?' : 'Escucha: ¿Positivo o negativo?', mode === 'pos' ? fq(fr) : audioBtns(fr, true), [oEs('👍 Le gusta', '1'), oEs('👎 No le gusta', '0')], good ? '1' : '0',
      {h:fr, p:'', es:(good ? SD_LIKE_ES : SD_HATE_ES)[k]}, {say:fr});
  }
  if (mode === 'blog'){
    const s = pick(['été', 'hiver']), [a, b] = shuffle(SD_BLOG[s]).slice(0, 2), no = pick(SD_BLOG_NO), name = pick(['Zoé', 'Margaux', 'Inès', 'Clara']);
    const post = `Cet ${s}, j'adore ${a[0]} et ${b[0]}. ${ovCap(no[0])} ? Quelle horreur !`, love = Math.random() < 0.5;
    const others = shuffle([...SD_BLOG.été, ...SD_BLOG.hiver, ...SD_BLOG_NO].filter(x => ![a, b, no].includes(x))).slice(0, 2);
    const right = love ? pick([a, b]) : no, opts = love ? [right, no, ...others] : [no, a, ...others];
    return fMC('f-acc', 'Lee el blog', `<div class="forum"><div class="fhead"><b>La mode ? J'adore !</b><small>Le blog ${esc(sdDe(name))}</small></div><div class="post"><span class="av">🧑‍🎤</span><p class="han">${esc(post)}</p></div></div>
      <div class="ask">${love ? `¿Qué le encanta a ${esc(name)}?` : `¿Qué no le gusta a ${esc(name)}?`}</div>`, opts.map(x => oFr(x[0])), right[0],
      {h:post, p:'', es:`Este ${s === 'été' ? 'verano' : 'invierno'} me encantan ${a[1]} y ${b[1]}. ¿${ovCap(no[1])}? ¡Qué horror!`}, {wide:true});
  }
  const [n, m, mes] = sdMatPick();
  const fr = `Je voudrais ${sdUnN(n)} ${m}.`, es = `Quisiera ${sdEsUn(n.es)} ${mes}.`;
  if (mode === 'speak') return fSpeak('f-acc', es, fr);
  return fTiles('f-acc', 'Tradúcelo al francés', fcue(es) + '<div class="hint">El material va con en.</div>', fr, es, ['de', n.g === 'm' ? 'une' : 'un']);
}

/* ---------- fe3 · los colores ---------- */
// f: [m, f, mp, fp] · es: [m, f]
const SD_COL = [
  {f:['noir', 'noire', 'noirs', 'noires'], css:'#151515', es:['negro', 'negra'], e:'⚫'}, {f:['blanc', 'blanche', 'blancs', 'blanches'], css:'#FFFFFF', es:['blanco', 'blanca'], e:'⚪'},
  {f:['rouge', 'rouge', 'rouges', 'rouges'], css:'#D62828', es:['rojo', 'roja'], e:'🔴'}, {f:['bleu', 'bleue', 'bleus', 'bleues'], css:'#1F6FD1', es:['azul', 'azul'], e:'🔵'},
  {f:['vert', 'verte', 'verts', 'vertes'], css:'#2A9D4B', es:['verde', 'verde'], e:'🟢'}, {f:['jaune', 'jaune', 'jaunes', 'jaunes'], css:'#F2C014', es:['amarillo', 'amarilla'], e:'🟡'},
  {f:['gris', 'grise', 'gris', 'grises'], css:'#8A8F98', es:['gris', 'gris']}, {f:['rose', 'rose', 'roses', 'roses'], css:'#F48FB1', es:['rosado', 'rosada']},
  {f:['marron', 'marron', 'marron', 'marron'], css:'#7B4A2A', es:['marrón', 'marrón'], e:'🟤'}, {f:['beige', 'beige', 'beiges', 'beiges'], css:'#D8C3A0', es:['beige', 'beige']}];
ovWords('fe3', 'col', [
  ['c_noi', 'noir', 'nuar', 'negro', '⚫', 'Femenino: noire. Suena igual.'], ['c_bla', 'blanc', 'blã', 'blanco', '⚪', 'Femenino: blanche («blãsh»).'],
  ['c_rou', 'rouge', 'ruzh', 'rojo', '🔴', 'Termina en e: no cambia en femenino.'], ['c_ble', 'bleu', 'blö', 'azul', '🔵', 'Femenino: bleue. Suena igual.'],
  ['c_ver', 'vert', 'vèr', 'verde', '🟢', 'Femenino: verte. La t empieza a sonar.'], ['c_jau', 'jaune', 'zhon', 'amarillo', '🟡'],
  ['c_gri', 'gris', 'gri', 'gris', null, 'Femenino: grise («griz»). Plural masculino: gris, sin otra s.'], ['c_ros', 'rose', 'roz', 'rosado'],
  ['c_mar', 'marron', 'ma·rõ', 'marrón', '🟤', 'Nunca cambia: des chaussures marron.'], ['c_bei', 'beige', 'bèzh', 'beige']]);
FG('f-col', 'fe3', 'los colores');
function sdColEx(mode){
  const c = pick(SD_COL);
  if (mode === 'swatch'){
    const n = Math.random() < 0.35 ? sdPlN(pick(SD_SG)) : pick(SD_CLO), right = sdForm(c, n);
    const opts = uniqBy([right, ...c.f, ...shuffle(SD_COL.filter(x => x !== c)).map(x => sdForm(x, n))], t => t).slice(0, 4);
    const fr = `${ovCap(mdThe(n))} ${sdEst(n)} ${right}.`;
    return fMC('f-col', '¿De qué color es?', `<div>${sdSw(c, true)}</div><div class="qtext han">${esc(ovCap(mdThe(n)))} ${sdEst(n)} ___.</div>`, opts.map(t => oFr(t)), right,
      {h:fr, p:'', es:`${ovCap(n.es)} ${sdEsP(n.es) ? 'son' : 'es'} ${sdEsA(c.es, n)}.${sdGenderNote(n)}`});
  }
  if (mode === 'agree'){
    const n = Math.random() < 0.3 ? sdPlN(pick(SD_SG)) : pick(SD_CLO.filter(x => x.g.length === 1 || Math.random() < 0.3)), right = sdForm(c, n);
    return {t:'type', item:'f-col', kind:'Escribe el color', q:`<div class="qtext han">${esc(sdUnN(n))} (${esc(c.f[0])})</div><div class="hint">${esc(sdEsUn(n.es))}: ${esc(sdEsA(c.es, n))}</div>`, answer:[right, `${sdUnN(n)} ${right}`],
      ph:'Ej.: noire', hint:'Femenino: + e. Plural: + s. Si ya termina en e, no cambia en femenino.', rev:{h:`${sdUnN(n)} ${right}`, p:'', es:`${sdEsUn(n.es)} ${sdEsA(c.es, n)}`}};
  }
  if (mode === 'listen'){
    const n = pick(SD_PICS.filter(x => x.g.length === 1)), fr = `Je cherche ${sdUnN(n)} ${sdForm(c, n)}.`;
    const n2 = pick(SD_PICS.filter(x => x.g.length === 1 && x !== n)), c2 = pick(SD_COL.filter(x => x !== c));
    const opt = (x, y) => ({v:x.h + '|' + y.f[0], html:`<span class="emo">${x.e}</span> ${sdSw(y)}`});
    return fMC('f-col', 'Escucha: ¿qué busca?', audioBtns(fr, true), [opt(n, c), opt(n, c2), opt(n2, c), opt(n2, c2)], n.h + '|' + c.f[0], {h:fr, p:'', es:`Busco ${sdEsUn(n.es)} ${sdEsA(c.es, n)}.`}, {say:fr});
  }
  if (mode === 'outfit'){
    const n = pick(SD_PICS), f = sdForm(c, n), right = `${sdUnN(n)} ${f}`, c2 = pick(SD_COL.filter(x => sdForm(x, n) !== f));
    const wrongs = [`${sdUn(n)} ${f} ${n.h}`, `${sdUnN(n)} ${sdForm(c2, n)}`, n.g.length === 1 ? `${n.g === 'm' ? 'une' : 'un'} ${n.h} ${f}` : `${sdUnN(n)} ${c.f[0]}`];
    if (n.g.endsWith('p') && c.f[0] === f) wrongs[2] = `${sdUnN(n)} ${c.f[1] === f ? pick(SD_COL.filter(x => x !== c && x !== c2)).f[3] : c.f[1]}`;
    return fMC('f-col', 'Descríbelo', `<div class="pic">${n.e}</div><div>${sdSw(c)}</div>`, uniqBy([right, ...wrongs], t => t).map(t => oFr(t)), right,
      {h:right, p:'', es:`${sdEsUn(n.es)} ${sdEsA(c.es, n)}. El color va después del nombre.`}, {wide:true});
  }
  const n = pick(SD_SG.filter(x => x.k === 'v')), [k, w] = pick(MD_NUM), p = sdPlN(n), fr = `J'|ai ${w} ${p.h} ${sdForm(c, p)}.`;
  const es = `Tengo ${k} ${n.esp} ${sdEsA(c.es, p)}.`;
  if (mode === 'speak') return fSpeak('f-col', es, frText(fr));
  return fTiles('f-col', 'Tradúcelo al francés', fcue(es), fr, es, [c.f[0], c.f[3], c.f[1]].filter(t => t !== sdForm(c, p)));
}

/* ---------- fe4 · género y número de los adjetivos ---------- */
// f: [m, f, mp, fp] · es: [m, f] · b: goes before the noun · d: masculine and feminine sound different
const SD_ADJ = [
  {f:['petit', 'petite', 'petits', 'petites'], es:['pequeño', 'pequeña'], b:1, d:1}, {f:['grand', 'grande', 'grands', 'grandes'], es:['grande', 'grande'], b:1, d:1},
  {f:['joli', 'jolie', 'jolis', 'jolies'], es:['bonito', 'bonita'], b:1}, {f:['beau', 'belle', 'beaux', 'belles'], es:['lindo', 'linda'], b:1, d:1},
  {f:['cher', 'chère', 'chers', 'chères'], es:['caro', 'cara']}, {f:['long', 'longue', 'longs', 'longues'], es:['largo', 'larga'], d:1},
  {f:['large', 'large', 'larges', 'larges'], es:['ancho', 'ancha']}, {f:['court', 'courte', 'courts', 'courtes'], es:['corto', 'corta'], d:1},
  {f:['simple', 'simple', 'simples', 'simples'], es:['sencillo', 'sencilla']}, {f:['léger', 'légère', 'légers', 'légères'], es:['ligero', 'ligera'], d:1},
  {f:['lourd', 'lourde', 'lourds', 'lourdes'], es:['pesado', 'pesada'], d:1}, {f:['élégant', 'élégante', 'élégants', 'élégantes'], es:['elegante', 'elegante'], d:1},
  {f:['clair', 'claire', 'clairs', 'claires'], es:['claro', 'clara']}, {f:['foncé', 'foncée', 'foncés', 'foncées'], es:['oscuro', 'oscura']}];
const sdAdj = m => SD_ADJ.find(a => a.f[0] === m);
ovWords('fe4', 'adj', [
  ['j_pet', 'petit', 'pë·ti', 'pequeño', null, 'Femenino: petite («pë·tit»).'], ['j_gra', 'grand', 'grã', 'grande', null, 'Femenino: grande («grãd»).'],
  ['j_jol', 'joli', 'zho·li', 'bonito', null, 'Femenino: jolie. Suena igual.'], ['j_bea', 'beau', 'bo', 'lindo, bello', null, 'Femenino: belle. Plural: beaux.'],
  ['j_lon', 'long', 'lõ', 'largo', null, 'Femenino: longue («lõg»).'], ['j_lar', 'large', 'larzh', 'ancho', null, 'Ojo: large es ancho, no largo.'],
  ['j_cou', 'court', 'kur', 'corto', null, 'Femenino: courte.'], ['j_leg', 'léger', 'lé·zhé', 'ligero, liviano', null, 'Femenino: légère.'],
  ['j_lou', 'lourd', 'lur', 'pesado', null, 'Femenino: lourde.'], ['j_sim', 'simple', 'sẽpl', 'sencillo, simple', null, 'Termina en e: no cambia en femenino.']]);
FG('f-adj', 'fe4', 'género y número de los adjetivos');
const SD_SAME = ['large', 'simple', 'rouge', 'jaune', 'rose', 'beige', 'marron', 'pratique'], SD_CHANGE = ['petit', 'grand', 'joli', 'beau', 'cher', 'long', 'court', 'léger', 'lourd', 'noir', 'blanc', 'vert', 'gris', 'bleu', 'élégant'];
function sdAdjEx(mode){
  const a = pick(SD_ADJ.filter(x => x.f[0] !== 'foncé' && x.f[0] !== 'clair'));
  if (mode === 'agree'){
    const n = Math.random() < 0.35 ? sdPlN(pick(SD_SG)) : pick(SD_CLO), right = sdForm(a, n);
    return {t:'type', item:'f-adj', kind:'Haz la concordancia', q:`<div class="qtext han">${esc(ovCap(mdThe(n)))} ${sdEst(n)} (${esc(a.f[0])}) ___.</div><div class="hint">${esc(ovCap(n.es))}: ${esc(sdEsA(a.es, n))}</div>`,
      answer:[right, `${ovCap(mdThe(n))} ${sdEst(n)} ${right}.`], ph:'Ej.: petite', hint:'Mira el género y el número del nombre en francés.', rev:{h:`${ovCap(mdThe(n))} ${sdEst(n)} ${right}.`, p:'', es:`${ovCap(n.es)} ${sdEsP(n.es) ? 'son' : 'es'} ${sdEsA(a.es, n)}.`}};
  }
  if (mode === 'plur'){
    const b = pick(SD_ADJ.filter(x => new Set(x.f).size === 4)), n = sdPlN(pick(SD_SG)), right = sdForm(b, n), fr = `${ovCap(mdThe(n))} sont très ${right}.`;
    return fMC('f-adj', 'Elige la forma correcta', `<div class="qtext han">${esc(ovCap(mdThe(n)))} sont très ___.</div><div class="hint">(${esc(b.f[0])})</div>`, b.f.map(t => oFr(t)), right,
      {h:fr, p:'', es:`${ovCap(n.es)} son muy ${sdEsA(b.es, n)}.`});
  }
  if (mode === 'hear'){
    const b = pick(SD_ADJ.filter(x => x.d)), fem = Math.random() < 0.5, w = b.f[fem ? 1 : 0];
    return fMC('f-adj', 'Escucha: ¿Masculino o femenino?', audioBtns(w, true) + '<div class="hint">En femenino se oye la consonante final.</div>', [oEs('Masculino', 'm'), oEs('Femenino', 'f')], fem ? 'f' : 'm',
      {h:`${b.f[0]} · ${b.f[1]}`, p:'', es:`${fem ? 'Femenino' : 'Masculino'}: ${b.es[fem ? 1 : 0]}.`}, {say:w});
  }
  if (mode === 'same'){
    const s = pick(SD_SAME), opts = [s, ...shuffle(SD_CHANGE).slice(0, 3)];
    return fMC('f-adj', '¿Cuál no cambia en femenino?', '<div class="ask">Uno de estos adjetivos es igual en masculino y en femenino.</div>', opts.map(t => oFr(t)), s,
      {h:`un sac ${s} · une veste ${s}`, p:'', es:s === 'marron' ? 'Marron no cambia nunca, ni en plural.' : s === 'pratique' ? 'Termina en e: no cambia.' : 'Termina en e: no cambia en femenino.'});
  }
  const n = Math.random() < 0.5 ? sdPlN(pick(SD_SG)) : pick(SD_SG), f = sdForm(a, n), fr = `${ovCap(mdThe(n))} ${sdEst(n)} ${f}.`;
  const es = `${ovCap(n.es)} ${sdEsP(n.es) ? 'son' : 'es'} ${sdEsA(a.es, n)}.`, t = mdA(n) === "l'" ? `L'|${n.h} ${sdEst(n)} ${f}.` : fr;
  if (mode === 'speak') return fSpeak('f-adj', es, fr);
  if (mode === 'listen') return fTiles('f-adj', 'Escucha y ordena', audioBtns(fr), t, es, a.f.filter(x => x !== f).slice(0, 2), [], {say:fr});
  return fTiles('f-adj', 'Tradúcelo al francés', fcue(es), t, es, a.f.filter(x => x !== f).slice(0, 2));
}

/* ---------- fe5 · el lugar del adjetivo ---------- */
ovWords('fe5', 'pos', [
  ['p_bon', 'bon', 'bõ', 'bueno', null, 'Femenino: bonne. Va antes: une bonne idée.'], ['p_aff', 'une bonne affaire', 'ün·bòn·a·fèr', 'una ganga, una buena compra'],
  ['p_cla', 'clair', 'klèr', 'claro (color)', null, 'Des couleurs claires: colores claros.'], ['p_fon', 'foncé', 'fõ·sé', 'oscuro (color)'],
  ['p_ray', 'à rayures', 'a·ra·yür', 'a rayas', null, 'La marinière: un tee-shirt à rayures.'], ['p_mod', 'à la mode', 'a·la·mòd', 'de moda']]);
FG('f-place', 'fe5', 'el lugar del adjetivo');
const SD_BEFORE = SD_ADJ.filter(a => a.b), SD_AFTER = [...SD_ADJ.filter(a => !a.b), ...SD_COL];
// beau before a masculine noun with a vowel is bel: left out here
const sdOkBefore = (a, n) => !(a.f[0] === 'beau' && n.g === 'm' && sdVow(n.h));
// one noun with one adjective, in the right place: fr text, tiles, es
function sdNP(n, a){
  const f = sdForm(a, n), un = sdUn(n);
  const fr = a.b ? `${un} ${f} ${n.h}` : `${un} ${n.h} ${f}`;
  return {fr, f, es:`${sdEsUn(n.es)} ${sdEsA(a.es, n)}`};
}
function sdPlaceEx(mode){
  const n = pick(SD_SG);
  if (mode === 'order'){
    const before = Math.random() < 0.5, a = before ? pick(SD_BEFORE.filter(x => sdOkBefore(x, n))) : pick(SD_AFTER), np = sdNP(n, a), un = sdUn(n), ou = n.g === 'm' ? 'une' : 'un';
    const wrongF = a.f.find((x, i) => i < 2 && x !== np.f), opts = [np.fr, a.b ? `${un} ${n.h} ${np.f}` : `${un} ${np.f} ${n.h}`, a.b ? `${ou} ${np.f} ${n.h}` : `${ou} ${n.h} ${np.f}`];
    if (wrongF) opts.push(a.b ? `${un} ${wrongF} ${n.h}` : `${un} ${n.h} ${wrongF}`);
    else { const o = pick((a.b ? SD_BEFORE : SD_COL).filter(x => x !== a && sdOkBefore(x, n))); opts.push(sdNP(n, o).fr); }
    // after the noun is the usual place, so a before-adjective put after is not shown as wrong
    const shown = a.b ? [opts[0], opts[2], opts[3], `${un} ${pick(SD_BEFORE.filter(x => x !== a && sdOkBefore(x, n))).f[SD_GI[n.g]]} ${n.h}`] : opts;
    return fMC('f-place', 'Elige en francés', fcue(np.es), uniqBy(shown, t => t).map(t => oFr(t)), np.fr,
      {h:np.fr, p:'', es:a.b ? `${np.es}. ${ovCap(a.f[0])} va antes del nombre.` : `${np.es}. Va después del nombre.`});
  }
  if (mode === 'which'){
    const a = Math.random() < 0.5 ? pick(SD_BEFORE) : pick(SD_AFTER), np = sdNP(SD_SG.find(x => x.h === 'pull'), a);
    return fMC('f-place', '¿Antes o después del nombre?', `<div class="qtext han">${esc(a.f[0])}</div><div class="hint">un ___ pull ___</div>`, [oEs('Antes del nombre', 'b'), oEs('Después del nombre', 'a')], a.b ? 'b' : 'a',
      {h:np.fr, p:'', es:a.b ? 'Los adjetivos cortos y frecuentes (petit, grand, joli, beau, bon) van antes.' : SD_COL.includes(a) ? 'Los colores siempre van después.' : 'La mayoría de los adjetivos va después.'});
  }
  // two adjectives: one before, the colour after
  const m = pick(SD_SG.filter(x => x.k === 'v' || x.h === 'sac')), b = pick(SD_BEFORE.filter(x => sdOkBefore(x, m))), c = pick(SD_COL), who = pick([['Elle', 'Ella'], ['Je', 'Yo']]);
  const v = who[0] === 'Je' ? ['Je cherche', 'Busco'] : ['Elle porte', 'Ella lleva'];
  const fr = `${v[0]} ${sdUn(m)} ${sdForm(b, m)} ${m.h} ${sdForm(c, m)}.`, es = `${v[1]} ${sdEsUn(m.es)} ${sdEsA(c.es, m)} ${sdEsA(b.es, m)}.`;
  if (mode === 'speak') return fSpeak('f-place', es, fr);
  const traps = [b.f[m.g === 'm' ? 1 : 0], c.f[m.g === 'm' ? 1 : 0]].filter(t => t !== sdForm(b, m) && t !== sdForm(c, m));
  if (mode === 'listen') return fTiles('f-place', 'Escucha y ordena', audioBtns(fr), fr, es, traps, [], {say:fr});
  return fTiles('f-place', 'Tradúcelo al francés', fcue(es) + '<div class="hint">Un adjetivo va antes y el color, después.</div>', fr, es, traps);
}

/* ---------- fe6 · el tiempo ---------- */
ovWords('fe6', 'wxn', [
  ['w_sol', 'le soleil', 'lë·so·lèy', 'el sol', '☀️'], ['w_plu', 'la pluie', 'la·plüi', 'la lluvia', '🌧️'], ['w_nei', 'la neige', 'la·nèzh', 'la nieve', '❄️'],
  ['w_nua', 'le nuage', 'lë·nü·azh', 'la nube', '☁️'], ['w_ora', "l'orage", 'lo·razh', 'la tormenta', '⛈️', 'Masculino: un orage.'], ['w_ven', 'le vent', 'lë·vã', 'el viento', '💨']]);
ovWords('fe6', 'wxv', [
  ['w_fb', 'il fait beau', 'il·fè·bo', 'hace buen tiempo'], ['w_fc', 'il fait chaud', 'il·fè·sho', 'hace calor'], ['w_ff', 'il fait froid', 'il·fè·frua', 'hace frío'],
  ['w_pl', 'il pleut', 'il·plö', 'llueve'], ['w_ne', 'il neige', 'il·nèzh', 'nieva'], ['w_ac', "j'ai froid", 'zhé·frua', 'tengo frío', null, 'La persona: avoir froid, avoir chaud. El tiempo: il fait froid.']]);
FG('f-meteo', 'fe6', 'el tiempo');
// t: temperatures that make sense with that weather
const SD_WX = [{k:'sun', e:'☀️', fr:'Il fait beau', es:'Hace buen tiempo', t:[16, 32]}, {k:'rain', e:'🌧️', fr:'Il pleut', es:'Llueve', t:[6, 17]},
  {k:'snow', e:'❄️', fr:'Il neige', es:'Nieva', t:[-9, 0]}, {k:'cloud', e:'☁️', fr:'Il y a des nuages', es:'Está nublado', t:[7, 19]},
  {k:'storm', e:'⛈️', fr:'Il y a un orage', es:'Hay tormenta', t:[18, 27]}, {k:'wind', e:'💨', fr:'Il y a du vent', es:'Hay viento', t:[4, 15]}];
const sdDeg = t => `${t < 0 ? 'moins ' : ''}${frNum(Math.abs(t))} degré${Math.abs(t) > 1 ? 's' : ''}`;
const sdTempFr = t => `Il fait ${sdDeg(t)}`, sdTempEs = t => `Hace ${t} grado${Math.abs(t) === 1 ? '' : 's'}`;
const sdWxBox = (w, t, sm) => `<div class="wx${sm ? ' sm' : ''}"><span class="wxi">${w.e}</span><b>${t} °C</b></div>`;
// the map: a simple outline of France and the cities
const SD_CITIES = [['Lille', 128, 26], ['Paris', 124, 68], ['Strasbourg', 194, 66], ['Brest', 26, 84], ['Nantes', 62, 116], ['Bordeaux', 70, 160], ['Lyon', 166, 136], ['Marseille', 170, 188], ['Toulouse', 108, 190]];
const SD_FR = '112,6 140,18 168,30 196,44 216,54 208,84 200,108 192,122 204,140 202,160 218,172 206,186 180,196 160,200 140,206 128,216 104,214 80,208 60,202 52,186 58,160 62,136 50,118 34,104 8,92 8,76 30,72 50,74 64,60 82,48 96,40 104,24';
function sdForecast(){
  const cities = shuffle(SD_CITIES).slice(0, 6), wx = shuffle(SD_WX);
  return cities.map((c, i) => ({c:c[0], x:c[1], y:c[2], w:wx[i], t:rint(...wx[i].t)}));
}
function sdMap(fc){
  return `<svg class="wxmap" viewBox="0 0 240 226" role="img" aria-label="Mapa del tiempo de Francia"><polygon points="${SD_FR}" class="wm-fr"/>${fc.map(p => `<g><circle cx="${p.x}" cy="${p.y}" r="2.6" class="wm-dot"/>
    ${p.x < 50 ? `<text x="${p.x - 4}" y="${p.y - 9}" class="wm-ic">${p.w.e}</text><text x="${p.x + 15}" y="${p.y - 10}" class="wm-tp">${p.t}°</text>`
      : `<text x="${p.x - 1}" y="${p.y - 9}" class="wm-ic" text-anchor="end">${p.w.e}</text><text x="${p.x + 2}" y="${p.y - 10}" class="wm-tp">${p.t}°</text>`}
    <text x="${p.x}" y="${p.y + 12}" class="wm-ct" text-anchor="middle">${p.c}</text></g>`).join('')}</svg>`;
}
const SD_WEAR = {rain:['Je prends mon parapluie.', 'Llevo mi paraguas.'], sun:['Je mets mes lunettes de soleil.', 'Me pongo mis lentes de sol.'],
  snow:['Je mets un manteau et des gants.', 'Me pongo un abrigo y guantes.'], storm:['Je reste à la maison.', 'Me quedo en casa.'], wind:['Je ne prends pas mon chapeau.', 'No llevo mi sombrero.']};
const SD_MAIS = [['☀️', '🥶', 'Il fait beau mais il fait froid.', 'Hace buen tiempo, pero hace frío.'], ['🌧️', '🥵', 'Il pleut mais il fait chaud.', 'Llueve, pero hace calor.'],
  ['☀️', '💨', 'Il fait beau mais il y a du vent.', 'Hace buen tiempo, pero hay viento.'], ['☀️', '🥵', 'Il fait beau et il fait chaud.', 'Hace buen tiempo y hace calor.']];
// odd one out: three words of one group and one of another
const SD_GROUPS = [['ropa', SD_CLO.filter(n => n.k === 'v' && n.h !== 'imperméable').map(n => mdThe(n))], ['accesorios', ['le sac à main', 'la ceinture', 'les bijoux', 'les lunettes', 'le chapeau']],
  ['colores', ['beige', 'blanc', 'bleu', 'gris', 'noir', 'vert', 'rose']], ['materiales', ['en coton', 'en cuir', 'en laine', 'en jean']], ['palabras del tiempo', ['la pluie', 'la neige', 'le vent', 'le soleil', 'le nuage']]];
function sdMeteoEx(mode){
  const w = pick(SD_WX), t = rint(...w.t), fr = `${w.fr} et ${lc1(sdTempFr(t))}.`, es = `${w.es} y ${lc1(sdTempEs(t))}.`;
  if (mode === 'pic'){
    const w2 = pick(SD_WX.filter(x => x !== w)), t2 = t + pick([10, -10, 20]);
    const opts = uniqBy([fr, `${w2.fr} et ${lc1(sdTempFr(t))}.`, `${w.fr} et ${lc1(sdTempFr(t === 0 ? 10 : -t))}.`, `${w2.fr} et ${lc1(sdTempFr(t2))}.`, `${w.fr} et ${lc1(sdTempFr(t2))}.`], x => x).slice(0, 4);
    return fMC('f-meteo', '¿Qué tiempo hace?', sdWxBox(w, t), opts.map(x => oFr(x)), fr, {h:fr, p:'', es}, {wide:true});
  }
  if (mode === 'map'){
    const fc = sdForecast(), p = pick(fc), what = pick(['wx', 'where', 'temp']), box = sdMap(fc);
    if (what === 'wx') return fMC('f-meteo', 'Mira el mapa', box + `<div class="ask">Quel temps fait-il à ${esc(p.c)} ?</div>`, shuffle(fc.filter(x => x !== p)).slice(0, 3).concat(p).map(x => oFr(x.w.fr + '.')), p.w.fr + '.',
      {h:`À ${p.c}, ${lc1(p.w.fr)}.`, p:'', es:`En ${p.c}: ${lc1(p.w.es)}.`}, {wide:true});
    if (what === 'where') return fMC('f-meteo', 'Mira el mapa', box + `<div class="ask">Où est-ce qu'${esc(lc1(p.w.fr))} ?</div>`, shuffle(fc.filter(x => x !== p)).slice(0, 3).concat(p).map(x => oFr(x.c)), p.c,
      {h:`À ${p.c}, ${lc1(p.w.fr)}.`, p:'', es:`En ${p.c}: ${lc1(p.w.es)}.`});
    const opts = uniqBy([p.t, -p.t, p.t + 10, ...shuffle(fc.filter(x => x !== p).map(x => x.t))], x => x).slice(0, 4);
    return fMC('f-meteo', 'Mira el mapa', box + `<div class="ask">Il fait combien à ${esc(p.c)} ?</div>`, opts.map(x => oFr(sdTempFr(x) + '.', String(x))), String(p.t),
      {h:`À ${p.c}, ${lc1(sdTempFr(p.t))}.`, p:'', es:`En ${p.c}: ${p.t} °C.`}, {wide:true});
  }
  if (mode === 'temp'){
    const x = rint(-12, 35) || 3, opts = uniqBy([x, -x, ...frConf(Math.abs(x), 1, 40).map(y => x < 0 ? -y : y)], y => y).slice(0, 4);
    return fMC('f-meteo', '¿Cómo se dice?', `<div class="qtext">🌡️ ${x} °C</div>`, opts.map(y => oFr(sdTempFr(y) + '.', String(y))), String(x),
      {h:sdTempFr(x) + '.', p:'', es:sdTempEs(x) + '. Bajo cero se dice moins.'}, {wide:true});
  }
  if (mode === 'wear'){
    const k = pick(Object.keys(SD_WEAR)), ww = SD_WX.find(x => x.k === k), opts = [k, ...shuffle(Object.keys(SD_WEAR).filter(x => x !== k)).slice(0, 3)];
    return fMC('f-meteo', '¿Qué haces?', `<div class="pic">${ww.e}</div><div class="qtext han">${esc(ww.fr)} !</div>`, opts.map(x => oFr(SD_WEAR[x][0], x)), k,
      {h:`${ww.fr} : ${lc1(SD_WEAR[k][0])}`, p:'', es:`${ww.es}: ${lc1(SD_WEAR[k][1])}`}, {wide:true});
  }
  if (mode === 'mais'){
    const m = pick(SD_MAIS.slice(0, 3));
    return fMC('f-meteo', 'Mira los dibujos', `<div class="pic">${m[0]} ${m[1]}</div><div class="hint">mais = pero: une dos cosas que se oponen</div>`, SD_MAIS.map(x => oFr(x[2])), m[2], {h:m[2], p:'', es:m[3]}, {wide:true});
  }
  if (mode === 'intrus'){
    const [g, others] = shuffle(SD_GROUPS).slice(0, 2), three = shuffle(g[1]).slice(0, 3), odd = pick(others[1]);
    return fMC('f-meteo', 'Encuentra el intruso', '<div class="ask">¿Cuál no es del mismo grupo?</div>', [...three, odd].map(x => oFr(x)), odd,
      {h:`${three.join(', ')} · ${odd}`, p:'', es:`Las otras tres son ${g[0]}; ${odd} es de otro grupo (${others[0]}).`});
  }
  if (mode === 'listen'){
    const set = [[w, t]];
    for (let k = 0; set.length < 4 && k < 40; k++){ const o = Math.random() < 0.5 ? [w, t + pick([10, -10, 5])] : [pick(SD_WX.filter(x => x !== w)), Math.random() < 0.5 ? t : rint(-5, 30)]; if (!set.some(s => s[0] === o[0] && s[1] === o[1])) set.push(o); }
    const city = pick(SD_CITIES)[0], say = `À ${city}, ${lc1(w.fr)} et ${lc1(sdTempFr(t))}.`;
    return fMC('f-meteo', 'Escucha el pronóstico', audioBtns(say, true), set.map(s => ({v:s[0].k + s[1], html:sdWxBox(s[0], s[1], true)})), w.k + t,
      {h:say, p:'', es:`En ${city}: ${lc1(es)}`}, {say});
  }
  const city = pick(SD_CITIES)[0], f2 = `À ${city}, ${lc1(w.fr)} et ${lc1(sdTempFr(t))}.`, e2 = `En ${city}, ${lc1(es)}`;
  if (mode === 'speak') return fSpeak('f-meteo', e2, f2);
  return fTiles('f-meteo', 'Tradúcelo al francés', fcue(e2), f2.replace(/il y a/, 'il_y_a').replace(/Il y a/, 'Il_y_a'), e2, ['a', 'est', 'chaud'].filter(x => !frChunks(f2).includes(x)).slice(0, 2));
}

/* ---------- fe7 · las rebajas ---------- */
ovWords('fe7', 'sold', [
  ['o_sol', 'les soldes', 'lé·sòld', 'las rebajas, las ofertas', '🏷️', 'En Francia hay soldes dos veces al año: en enero y en julio.'], ['o_tai', 'la taille', 'la·tay', 'la talla (de ropa)'],
  ['o_poi', 'la pointure', 'la·puẽ·tür', 'la talla de zapatos', null, 'Je chausse du 40: calzo 40.'], ['o_ess', 'essayer', 'é·sè·yé', 'probarse (ropa)', null, "Je peux essayer ? = ¿Me lo puedo probar?"],
  ['o_cab', "la cabine d'essayage", 'la·ka·bin·dé·sè·yazh', 'el probador'], ['o_che', 'cher', 'shèr', 'caro', null, 'Femenino: chère. Suena igual.'],
  ['o_pro', 'en promotion', 'ã·pro·mo·siõ', 'en oferta'], ['o_mag', 'magasiner', 'ma·ga·zi·né', 'ir de compras (en Quebec)', null, 'En Francia: faire du shopping.']]);
FG('f-sold', 'fe7', 'tallas, rebajas y precios');
// French sizes: number → letter
const SD_SIZES = [[34, 'XS'], [36, 'S'], [38, 'M'], [40, 'M'], [42, 'L'], [44, 'L'], [46, 'XL'], [48, 'XL']];
const sdSizeBox = () => `<div class="sizes">${['XS', 'S', 'M', 'L', 'XL'].map(l => `<span><b>${l}</b>${SD_SIZES.filter(s => s[1] === l).map(s => s[0]).join(' · ')}</span>`).join('')}</div>`;
const SD_QUIZ = [
  ['¿Cuándo hay soldes en Francia?', ['En invierno y en verano (enero y julio).', 'En marzo y en septiembre.', 'Solo en diciembre.', 'Todo el año.']],
  ['En Quebec, «faire du shopping» se dice…', ['magasiner', 'tricoter', 'chausser', 'avoir chaud']],
  ['En Quebec, un pull se llama…', ['un tricot', 'un maillot', 'un costume', 'un imperméable']],
  ['En Quebec, un tee-shirt se llama…', ['un maillot', 'un tricot', 'une chemise', 'un manteau']],
  ['La marinière es…', ['una camiseta blanca a rayas', 'un perfume', 'un sombrero de marinero', 'una tienda de ropa']],
  ['La marinière fue primero la ropa de…', ['los marineros de la Marina francesa', 'los futbolistas', 'los panaderos', 'los estudiantes']],
  ['¿Quién puso de moda la marinière a comienzos del siglo XX?', ['Coco Chanel', 'Victor Hugo', 'Napoleón', 'Édith Piaf']]];
const SD_PRICES = [20, 30, 40, 50, 60, 80, 100], SD_OFF = [10, 20, 30, 50];
function sdSoldeEx(mode){
  if (mode === 'size'){
    const [k, l] = pick(SD_SIZES), fr = `Je fais du ${frNum(k)}.`;
    return fMC('f-sold', 'Escucha y mira la tabla', sdSizeBox() + audioBtns(fr, true) + '<div class="ask">¿Qué talla es?</div>', ['XS', 'S', 'M', 'L', 'XL'].map(x => oEs(x)), l,
      {h:fr, p:'', es:`Uso talla ${k}: es ${l}.`}, {say:fr});
  }
  if (mode === 'which'){
    const shoe = Math.random() < 0.5, n = pick(SD_PICS.filter(x => shoe ? ['chaussures', 'bottes', 'baskets'].includes(x.h) : x.k === 'v'));
    const q = shoe ? 'Quelle est votre pointure ?' : 'Quelle est votre taille ?';
    return fMC('f-sold', '¿Taille o pointure?', `<div class="pic">${n.e}</div><div class="ask">Quieres probarte ${esc(n.es)}. ¿Qué te pregunta el vendedor?</div>`,
      [oFr('Quelle est votre taille ?'), oFr('Quelle est votre pointure ?')], q, {h:q, p:'', es:shoe ? 'Para los zapatos: la pointure.' : 'Para la ropa: la taille.'}, {wide:true});
  }
  if (mode === 'reply'){
    const shoe = Math.random() < 0.5, k = shoe ? rint(36, 45) : pick(SD_SIZES)[0], q = shoe ? 'Quelle est votre pointure ?' : 'Quelle est votre taille ?';
    const right = shoe ? `Je chausse du ${k}.` : `Je fais du ${k}.`, opts = [right, shoe ? `Je fais du M.` : `Je chausse du ${k}.`, `Je suis ${k}.`, `J'ai ${k} ans.`];
    return fMC('f-sold', 'Responde al vendedor', bub('Vendedor', q) + `<div class="ask">Tu ${shoe ? 'talla de zapatos' : 'talla'}: ${k}</div>`, opts.map(t => oFr(t)), right,
      {h:`${q} — ${right}`, p:'', es:shoe ? `Calzo ${k}. «J'ai ${k} ans» sería la edad.` : `Uso talla ${k}. Se dice con faire: je fais du ${k}.`}, {say:q, wide:true});
  }
  if (mode === 'promo'){
    const p = pick(SD_PRICES), off = pick(SD_OFF.filter(o => p * o % 100 === 0)), now = p - p * off / 100, n = pick(SD_SG);
    const opts = uniqBy([now, p * off / 100, now + 10, now - 5 > 0 ? now - 5 : now + 5, p], x => x).slice(0, 4);
    return fMC('f-sold', 'Las rebajas', `<div class="pic">${n.e || '🏷️'}</div><div class="ptag"><s>${p} €</s><b>−${off} %</b></div><div class="ask">${esc(ovCap(mdThe(n)))} coûte combien maintenant ?</div>`,
      opts.map(x => oFr(`${frNum(x)} euros`, String(x))), String(now), {h:`${ovCap(mdThe(n))} coûte ${frNum(now)} euros.`, p:'', es:`${p} € menos ${off} %: ${now} €.`}, {wide:true});
  }
  if (mode === 'deal'){
    const good = Math.random() < 0.5, p = good ? pick([40, 60, 80, 100]) : pick([90, 100]), off = good ? 50 : 0, now = p - p * off / 100;
    const right = good ? "C'est une bonne affaire !" : "C'est cher !";
    return fMC('f-sold', '¿Cara o ganga?', `<div class="ptag">${off ? `<s>${p} €</s><b>−${off} % → ${now} €</b>` : `<b>${p} €</b><small>sans réduction</small>`}</div><div class="ask">Un tee-shirt…</div>`,
      [oFr("C'est une bonne affaire !"), oFr("C'est cher !")], right, {h:`Un tee-shirt à ${frNum(now)} euros : ${lc1(right)}`, p:'', es:good ? '¡Es una ganga!' : '¡Es caro!'}, {wide:true});
  }
  if (mode === 'quiz'){
    const [q, opts] = pick(SD_QUIZ);
    return fMC('f-sold', 'Cultura', `<div class="ask">${esc(q)}</div>`, opts.map(t => oEs(t)), opts[0], {h:opts[0], p:'', es:q}, {wide:true});
  }
  if (mode === 'listen'){
    const k = pick(SD_SIZES)[0], fr = `Je fais du ${frNum(k)}.`, opts = uniqBy([k, k + 10 <= 58 ? k + 10 : k - 10, k + 2, k - 2], x => x);
    return fMC('f-sold', 'Escucha: ¿qué talla usa?', audioBtns(fr, true), opts.map(x => oEs(String(x))), String(k), {h:fr, p:'', es:`Uso talla ${k}.`}, {say:fr});
  }
  const n = pick(SD_SG.filter(x => x.k === 'v')), fr = `Je voudrais essayer ${mdA(n) === "l'" ? "l'|" + n.h : mdThe(n)}, s'il_vous_plaît.`, es = `Quisiera probarme ${n.es}, por favor.`;
  if (mode === 'speak') return fSpeak('f-sold', es, frText(fr));
  return fTiles('f-sold', 'Tradúcelo al francés', fcue(es), fr, es, ['me', n.g === 'm' ? 'la' : 'le']);
}

/* ---------- fe8 · los objetos tecnológicos ---------- */
ovWords('fe8', 'tech', [
  ['t_app', "l'appareil photo", 'la·pa·rèy·fo·to', 'la cámara de fotos', '📷', 'Masculino: un appareil photo numérique.'], ['t_ord', "l'ordinateur", 'lòr·di·na·tör', 'la computadora', '💻', 'Masculino: un ordinateur portable.'],
  ['t_cla', 'le clavier', 'lë·kla·vié', 'el teclado', '⌨️'], ['t_sou', 'la souris', 'la·su·ri', 'el mouse', '🖱️', 'También es «el ratón» (el animal).'],
  ['t_sma', 'le smartphone', 'lë·smart·fòn', 'el celular', '📱', 'También: le téléphone portable, le portable.'], ['t_mon', 'la montre connectée', 'la·mõtr·ko·nèk·té', 'el reloj inteligente', '⌚'],
  ['t_lis', 'la liseuse', 'la·li·zöz', 'el lector de libros electrónicos', '📖'], ['t_mp3', 'le lecteur MP3', 'lë·lèk·tör·èm·pé·trua', 'el reproductor MP3', '🎧'],
  ['t_per', 'la perche à selfies', 'la·pèrsh·a·sèl·fi', 'el palo para selfis', '🤳'], ['t_tab', 'la tablette', 'la·ta·blèt', 'la tableta'], ['t_ecr', "l'écran", 'lé·krã', 'la pantalla', null, 'Masculino: un grand écran.']]);
FG('f-obj', 'fe8', 'objetos y para qué sirven');
// un: with the indefinite article · use: what it is for
const SD_TECH = [
  {un:'un appareil photo', e:'📷', es:'una cámara de fotos', use:['prendre des photos', 'tomar fotos']}, {un:'une liseuse', e:'📖', es:'un lector de libros', use:['lire', 'leer']},
  {un:'un lecteur MP3', e:'🎧', es:'un reproductor MP3', use:['écouter de la musique', 'escuchar música']}, {un:'un smartphone', e:'📱', es:'un celular', use:['téléphoner', 'llamar por teléfono']},
  {un:'une perche à selfies', e:'🤳', es:'un palo para selfis', use:['prendre des selfies', 'tomarse selfis']}, {un:'un ordinateur', e:'💻', es:'una computadora', use:['écrire des mails', 'escribir correos']},
  {un:'une valise', e:'🧳', es:'una maleta', use:['voyager', 'viajar']}, {un:'un clavier', e:'⌨️', es:'un teclado', use:['écrire', 'escribir']},
  {un:'une montre', e:'⌚', es:'un reloj', use:["regarder l'heure", 'ver la hora']}, {un:'un parapluie', e:'☂️', es:'un paraguas', use:['sortir sous la pluie', 'salir cuando llueve']}];
const sdUse = x => 'Ça sert à ' + x.use[0];
function sdObjEx(mode){
  const x = pick(SD_TECH), opts = [x, ...others(SD_TECH, x, 3, y => y.un)];
  if (mode === 'use') return fMC('f-obj', 'Ça sert à quoi ?', `<div class="pic">${x.e}</div><div class="qtext han">${esc(ovCap(x.un))}</div>`, opts.map(y => oFr(sdUse(y) + '.', y.un)), x.un,
    {h:`${ovCap(x.un)} : ${lc1(sdUse(x))}.`, p:'', es:`${ovCap(x.es)}: sirve para ${x.use[1]}.`}, {wide:true});
  if (mode === 'what') return fMC('f-obj', '¿Qué es?', `<div class="qtext han">C'est pour ${esc(x.use[0])}. C'est…</div>`, opts.map(y => oFr(y.un)), x.un,
    {h:`C'est pour ${x.use[0]}. C'est ${x.un}.`, p:'', es:`Es para ${x.use[1]}: es ${x.es}.`});
  if (mode === 'match'){
    const rows = shuffle(SD_TECH).slice(0, 4);
    return {t:'match', item:'f-obj', kind:'¿Para qué sirve?', q:'<div class="hint">Relaciona cada objeto con su uso.</div>',
      left:rows.map(y => ({v:y.un, a:y.use[0], say:y.un, html:`<span class="han">${y.e} ${esc(y.un)}</span>`})), right:shuffle(rows).map(y => ({v:y.use[0], html:`<span class="han">${esc(y.use[0])}</span>`})),
      rev:{h:rows.map(y => `${y.un} : ${y.use[0]}`).join(' · '), p:'', es:rows.map(y => `${y.es}: ${y.use[1]}`).join(' · ')}};
  }
  if (mode === 'price'){
    const p = rint(61, 99), fr = `Ça coûte ${frNum(p)} euros.`, set = [p, ...frConf(p, 50, 99)];
    return fMC('f-obj', 'Ça coûte combien ?', `<div class="pic">${x.e}</div><div class="tag">${p} €</div>`, set.map(y => oFr(`Ça coûte ${frNum(y)} euros.`, String(y))), String(p),
      {h:fr, p:'', es:`Cuesta ${p} euros.`}, {wide:true});
  }
  if (mode === 'listen'){
    const fr = `Avec ça, on peut ${x.use[0]}.`;
    return fMC('f-obj', 'Escucha: ¿qué es?', audioBtns(fr, true), opts.map(y => oPic(y.e, y.un)), x.un, {h:`${fr} C'est ${x.un}.`, p:'', es:`Con esto se puede ${x.use[1]}: ${x.es}.`}, {say:fr});
  }
  const fr = `${sdUse(x)}.`, es = `Sirve para ${x.use[1]}.`;
  if (mode === 'speak') return fSpeak('f-obj', `${ovCap(x.es)}: ¿para qué sirve? ${es}`, fr);
  return fTiles('f-obj', 'Tradúcelo al francés', fcue(es), fr, es, ['pour', 'de'].filter(t => !frChunks(fr).includes(t)), [`C'est pour ${x.use[0]}.`]);
}

/* ---------- fe9 · objetos perdidos: describir y ce, cet, cette, ces ---------- */
ovWords('fe9', 'obj', [
  ['d_pm', 'le porte-monnaie', 'lë·pòrt·mo·nè', 'el monedero', '👛', 'Para las monedas.'], ['d_pf', 'le portefeuille', 'lë·pòr·të·föy', 'la billetera', null, 'Para los billetes y las tarjetas.'],
  ['d_sad', 'le sac à dos', 'lë·sak·a·do', 'la mochila', '🎒'], ['d_val', 'la valise', 'la·va·liz', 'la maleta', '🧳'], ['d_sds', 'le sac de sport', 'lë·sak·dë·spòr', 'el bolso deportivo'],
  ['d_ron', 'rond', 'rõ', 'redondo', null, 'Femenino: ronde.'], ['d_car', 'carré', 'ka·ré', 'cuadrado', null, 'Femenino: carrée.'], ['d_rec', 'rectangulaire', 'rèk·tã·gü·lèr', 'rectangular'],
  ['d_otr', 'les objets trouvés', 'lé·zob·zhè·tru·vé', 'la oficina de objetos perdidos', null, 'Literalmente «los objetos encontrados».'], ['d_per', "j'ai perdu", 'zhé·pèr·dü', 'perdí']]);
FG('f-ce', 'fe9', 'describir objetos y ce, cet, cette, ces');
// things that can be lost, with their Spanish
const SD_OBJ = [
  {h:'porte-monnaie', g:'m', e:'👛', es:'el monedero'}, {h:'portefeuille', g:'m', es:'la billetera'}, {h:'sac à dos', g:'m', e:'🎒', es:'la mochila'}, {h:'valise', g:'f', e:'🧳', es:'la maleta'},
  {h:'ordinateur', g:'m', e:'💻', es:'la computadora'}, {h:'appareil photo', g:'m', e:'📷', es:'la cámara'}, {h:'écran', g:'m', es:'la pantalla'}, {h:'liseuse', g:'f', e:'📖', es:'el lector electrónico'},
  {h:'tablette', g:'f', es:'la tableta'}, {h:'montre', g:'f', e:'⌚', es:'el reloj'}, {h:'souris', g:'f', e:'🖱️', es:'el mouse'}, {h:'lunettes', g:'fp', e:'👓', es:'los lentes'},
  {h:'écharpe', g:'f', e:'🧣', es:'la bufanda'}, {h:'imperméable', g:'m', es:'el impermeable'}, {h:'objets', g:'mp', es:'los objetos'}, {h:'livres', g:'mp', es:'los libros'}];
const SD_SHAPES = [{f:['rond', 'ronde'], cls:'sh-r', es:['redondo', 'redonda']}, {f:['carré', 'carrée'], cls:'sh-c', es:['cuadrado', 'cuadrada']}, {f:['rectangulaire', 'rectangulaire'], cls:'sh-x', es:['rectangular', 'rectangular']}];
const SD_OPP = [['lourd', 'léger'], ['grand', 'petit'], ['long', 'court'], ['clair', 'foncé']];
const sdMon = n => n.g === 'f' && !sdVow(n.h) ? 'ma' : n.g.endsWith('p') ? 'mes' : 'mon';
const sdEsMi = n => sdEsP(n.es) ? 'mis' : 'mi';
function sdCeEx(mode){
  const pool = [...SD_OBJ, ...SD_CLO];
  if (mode === 'dem'){
    const n = pick(pool), c = pick(SD_COL), right = sdCe(n), fr = `${ovCap(right)} ${n.h} ${sdEst(n)} ${sdForm(c, n)}.`;
    return fMC('f-ce', 'Completa con ce, cet, cette o ces', `${n.e ? `<div class="pic">${n.e}</div>` : ''}<div class="qtext han">___ ${esc(n.h)} ${sdEst(n)} ${esc(sdForm(c, n))}.</div>`,
      ['ce', 'cet', 'cette', 'ces'].map(t => oFr(t)), right, {h:fr, p:'', es:`${ovCap(sdEsEste(n.es))} ${sdEsP(n.es) ? 'son' : 'es'} ${sdEsA(c.es, n)}.${right === 'cet' ? ' Cet: masculino delante de vocal o h.' : ''}`});
  }
  if (mode === 'shape'){
    const s = pick(SD_SHAPES), n = pick(SD_OBJ.filter(x => x.g.length === 1)), right = s.f[n.g === 'f' ? 1 : 0];
    const opts = uniqBy([right, ...SD_SHAPES.filter(x => x !== s).map(x => x.f[n.g === 'f' ? 1 : 0]), s.f[n.g === 'f' ? 0 : 1], pick(SD_SHAPES.filter(x => x !== s)).f[n.g === 'f' ? 0 : 1]], t => t).slice(0, 4);
    const fr = `${ovCap(mdThe(n))} est ${right}.`;
    return fMC('f-ce', '¿Qué forma tiene?', `<div class="shape ${s.cls}" role="img" aria-label="${s.es[0]}"></div><div class="qtext han">${esc(ovCap(mdThe(n)))} est ___.</div>`, opts.map(t => oFr(t)), right,
      {h:fr, p:'', es:`${ovCap(n.es)} es ${sdEsAdj(s.es, sdEsG(n.es), false)}.`});
  }
  if (mode === 'opp'){
    const [x, y] = pick(SD_OPP).sort(() => Math.random() - 0.5), a = sdAdj(x), b = sdAdj(y), n = pick(SD_OBJ.filter(z => z.g.length === 1 && !['souris', 'objets', 'livres'].includes(z.h)));
    const right = sdForm(b, n), fr = `${ovCap(sdCe(n))} ${n.h} est ${sdForm(a, n)} ? — Non, ${lc1(sdIl(n))} est ${right} !`;
    const opts = uniqBy([right, b.f[n.g === 'f' ? 0 : 1], sdForm(a, n), sdForm(pick(SD_ADJ.filter(z => z !== a && z !== b && z.d)), n)], t => t).slice(0, 4);
    return fMC('f-ce', 'Di lo contrario', `<div class="qtext han">${esc(ovCap(sdCe(n)))} ${esc(n.h)} est ${esc(sdForm(a, n))} ?</div><div class="ask">Non, ${esc(lc1(sdIl(n)))} est…</div>`, opts.map(t => oFr(t)), right,
      {h:fr, p:'', es:`¿${ovCap(sdEsEste(n.es))} es ${sdEsA(a.es, n)}? No, es ${sdEsA(b.es, n)}.`});
  }
  if (mode === 'lost' || mode === 'listen'){
    const items = SD_OBJ.filter(x => x.e && x.g.length === 1).concat(SD_PICS.filter(x => x.g.length === 1 && ['sac', 'chapeau', 'parapluie'].includes(x.h)));
    const n = pick(items), c = pick(SD_COL), big = Math.random() < 0.5, sz = sdAdj(big ? 'grand' : 'petit'), n2 = pick(items.filter(x => x !== n)), c2 = pick(SD_COL.filter(x => x !== c));
    const fr = `J'ai perdu ${sdMon(n)} ${n.h}. ${sdIl(n)} est ${sdForm(c, n)} et ${sdForm(sz, n)}.`;
    const card = (o, col, b) => ({v:`${o.h}|${col.f[0]}|${b}`, html:`<span class="emo" style="font-size:${b ? 46 : 24}px">${o.e}</span><span class="sw" style="background:${col.css};width:22px;height:22px;border-radius:6px"></span>`});
    const es = `Perdí ${sdEsMi(n)} ${n.es.replace(/^(el|la|los|las) /, '')}. Es ${sdEsA(c.es, n)} y ${sdEsA(sz.es, n)}.`;
    return fMC('f-ce', mode === 'lost' ? 'En objetos perdidos' : 'Escucha: ¿cuál es?', mode === 'lost' ? bub('Turista', fr) + '<div class="ask">¿Cuál es su objeto?</div>' : audioBtns(fr, true),
      [card(n, c, big), card(n, c2, big), card(n, c, !big), card(n2, c, big)], `${n.h}|${c.f[0]}|${big}`, {h:fr, p:'', es}, {say:fr});
  }
  // C'est un portefeuille rouge. → Ce portefeuille est rouge.
  const n = pick(SD_OBJ.filter(x => x.g.length === 1)), c = pick(SD_COL), f = sdForm(c, n), src = `C'est ${sdUnN(n)} ${f}.`, fr = `${ovCap(sdCe(n))} ${n.h} est ${f}.`;
  const es = `${ovCap(sdEsEste(n.es))} es ${sdEsA(c.es, n)}.`;
  if (mode === 'speak') return fSpeak('f-ce', es, fr);
  return fTiles('f-ce', 'Transforma la frase', `<div class="qtext han">${esc(src)}</div><div class="hint">→ ${esc(ovCap(sdCe(n)))} ${esc(n.h)}…</div>`, fr, es, ['ce', 'cet', 'cette'].filter(t => t !== sdCe(n)).slice(0, 2).concat("c'est"));
}

/* ---------- fe10 · futuro próximo y pasado reciente ---------- */
ovWords('fe10', 'time', [
  ['f_ven', 'venir', 'vë·nir', 'venir', null, 'Je viens, tu viens, il vient, nous venons, vous venez, ils viennent.'],
  ['f_vde', 'venir de', 'vë·nir·dë', 'acabar de', null, "Je viens de manger: acabo de comer. Delante de vocal: d' (je viens d'arriver)."],
  ['f_all', 'aller', 'a·lé', 'ir, ir a', null, 'Je vais acheter: voy a comprar.'], ['f_dem', 'demain', 'dë·mẽ', 'mañana'],
  ['f_soi', 'ce soir', 'së·suar', 'esta noche'], ['f_dep', 'dépenser', 'dé·pã·sé', 'gastar (dinero)'], ['f_rev', 'revenir', 'rë·vë·nir', 'volver', null, 'Se conjuga como venir: je reviens.']]);
FG('f-time', 'fe10', 'futuro próximo, pasado reciente y liaison');
const SD_ALLER = ['vais', 'vas', 'va', 'allons', 'allez', 'vont'], SD_VENIR = ['viens', 'viens', 'vient', 'venons', 'venez', 'viennent'];
const SD_IR = ['voy', 'vas', 'va', 'vamos', 'van', 'van'], SD_ACABAR = ['acabo', 'acabas', 'acaba', 'acabamos', 'acaban', 'acaban'];
// [infinitive, Spanish infinitive, object (tiles), Spanish object]
const SD_ACTS = [['acheter', 'comprar', 'une tablette', 'una tableta'], ['faire', 'hacer', 'les courses', 'las compras'], ['regarder', 'ver', 'un film', 'una película'],
  ['manger', 'comer', 'au restaurant', 'en el restaurante'], ['trouver', 'encontrar', 'un ordinateur pas cher', 'una computadora barata'], ['dépenser', 'gastar', "beaucoup d'|argent", 'mucho dinero'],
  ['prendre', 'tomar', 'le métro', 'el metro'], ['vendre', 'vender', 'la voiture', 'el carro'], ['écouter', 'escuchar', 'un CD', 'un CD'], ['payer', 'pagar', "l'|addition", 'la cuenta'],
  ['arriver', 'llegar', 'à Paris', 'a París'], ['essayer', 'probarse', 'une robe', 'un vestido']];
const SD_WHEN = [['Demain', 'Mañana'], ['Ce soir', 'Esta noche'], ['Lundi matin', 'El lunes en la mañana'], ['Samedi', 'El sábado']];
const sdEsSubj = S => ['Yo', 'Tú'].includes(S.es) ? '' : S.es + ' ';
// past: viens de / d' + infinitive · future: vais + infinitive
function sdTimeS(kind, S = pick(OV_SUBJ), a = pick(SD_ACTS), w = pick(SD_WHEN)){
  const de = sdVow(a[0]) ? "d'|" : 'de ', obj = a[2], es0 = a[1] === 'probarse' ? `${kind === 'p' ? SD_ACABAR[S.i] + ' de' : SD_IR[S.i] + ' a'} probar${['me', 'te', 'se', 'nos', 'se', 'se'][S.i]}` : null;
  if (kind === 'p'){
    const t = `${S.fr} ${SD_VENIR[S.i]} ${de}${a[0]} ${obj}.`;
    return {t, fr:frText(t), es:ovCap(`${sdEsSubj(S)}${es0 || SD_ACABAR[S.i] + ' de ' + a[1]} ${a[3]}.`), S, a};
  }
  const t = `${w[0]}, ${lc1(S.fr)} ${SD_ALLER[S.i]} ${a[0]} ${obj}.`;
  return {t, fr:frText(t), es:`${w[1]}, ${sdEsSubj(S).toLowerCase()}${es0 || SD_IR[S.i] + ' a ' + a[1]} ${a[3]}.`, S, a};
}
// three moments: just before, now, just after
const SD_STORY = [
  {who:'Il', i:2, p:[['💥👞', 'casser sa chaussure', 'romperse el zapato'], ['🏬', 'entrer dans un magasin', 'entrar a una tienda'], ['🟢👞', 'acheter des chaussures vertes', 'comprar zapatos verdes']]},
  {who:'Ils', i:5, p:[['📋', 'regarder le menu', 'mirar la carta'], ['🍝', 'manger', 'comer'], ['🧾', "payer l'addition", 'pagar la cuenta']]},
  {who:'Elle', i:2, p:[['🚇', 'prendre le métro', 'tomar el metro'], ['🚶‍♀️', 'sortir du métro', 'salir del metro'], ['🚕', 'prendre un taxi', 'tomar un taxi']]},
  {who:'Nous', i:3, p:[['🛒', 'faire les courses', 'hacer las compras'], ['🍳', 'faire la cuisine', 'cocinar'], ['🍽️', 'manger ensemble', 'comer juntos']]},
  {who:'Elle', i:2, p:[['💳', 'acheter une tablette', 'comprar una tableta'], ['📦', 'ouvrir la boîte', 'abrir la caja'], ['🎬', 'regarder un film', 'ver una película']]}];
const sdDe = v => sdVow(v) ? "d'" + v : 'de ' + v;
// liaison: [words, kind (z, n or none), Spanish]
const SD_LIAISON = [['les accessoires', 'z'], ['des achats', 'z'], ['ces écharpes', 'z'], ['trois heures', 'z'], ['deux ans', 'z'], ['nous allons', 'z'], ['vous allez', 'z'], ['ils arrivent', 'z'],
  ['un euro', 'n'], ['un ordinateur', 'n'], ['un imperméable', 'n'], ['un hiver', 'n'], ['les DVD', '0'], ['des tablettes', '0'], ['ces lunettes', '0'], ['trois livres', '0'], ['deux chaussures', '0'], ['un portefeuille', '0']];
function sdTempsEx(mode){
  if (mode === 'when' || mode === 'hear'){
    const past = Math.random() < 0.5, s = sdTimeS(past ? 'p' : 'f');
    return fMC('f-time', mode === 'when' ? '¿Pasado reciente o futuro próximo?' : 'Escucha: ¿Pasado reciente o futuro próximo?', mode === 'when' ? fq(s.fr) : audioBtns(s.fr, true),
      [oEs('⏪ Acaba de pasar', 'p'), oEs('⏩ Va a pasar', 'f')], past ? 'p' : 'f', {h:s.fr, p:'', es:s.es + (past ? ' (venir de + infinitivo)' : ' (aller + infinitivo)')}, {say:s.fr});
  }
  if (mode === 'form'){
    const past = Math.random() < 0.5, S = pick(OV_SUBJ), a = pick(SD_ACTS), L = past ? SD_VENIR : SD_ALLER, right = L[S.i];
    const gap = past ? `${S.fr} ___ ${sdDe(a[0])} ${frText(a[2])}.` : `${S.fr} ___ ${a[0]} ${frText(a[2])}.`;
    const opts = uniqBy([right, ...shuffle(L.filter(x => x !== right)).slice(0, 2), (past ? SD_ALLER : SD_VENIR)[S.i]], t => t);
    const s = sdTimeS(past ? 'p' : 'f', S, a, ['', '']);
    return fMC('f-time', past ? 'Completa con venir' : 'Completa con aller', `<div class="qtext han">${esc(gap)}</div><div class="hint">${past ? 'pasado reciente: venir de + infinitivo' : 'futuro próximo: aller + infinitivo'}</div>`, opts.map(t => oFr(t)), right,
      {h:gap.replace('___', right), p:'', es:ovCap(s.es.replace(/^, /, ''))});
  }
  if (mode === 'story'){
    const st = pick(SD_STORY), past = Math.random() < 0.5, [p, m, f] = st.p, V = SD_VENIR[st.i], A = SD_ALLER[st.i];
    const badV = pick(SD_VENIR.filter(x => x !== V)), badA = pick(SD_ALLER.filter(x => x !== A));
    const right = past ? `${st.who} ${V} ${sdDe(p[1])}.` : `${st.who} ${A} ${f[1]}.`;
    const opts = past ? [right, `${st.who} ${V} ${sdDe(f[1])}.`, `${st.who} ${A} ${p[1]}.`, `${st.who} ${badV} ${sdDe(p[1])}.`] : [right, `${st.who} ${A} ${p[1]}.`, `${st.who} ${V} ${sdDe(f[1])}.`, `${st.who} ${badA} ${f[1]}.`];
    const tl = `<div class="tline"><div><i>${p[0]}</i>avant</div><div class="now"><i>${m[0]}</i>maintenant</div><div><i>${f[0]}</i>après</div></div>`;
    const who = {Il:'Él ', Elle:'Ella ', Ils:'Ellos ', Nous:''}[st.who];
    return fMC('f-time', past ? '¿Qué acaba de pasar?' : '¿Qué va a pasar?', tl + `<div class="ask">${past ? 'Mira el dibujo de «avant».' : 'Mira el dibujo de «après».'}</div>`, uniqBy(opts, t => t).map(t => oFr(t)), right,
      {h:right, p:'', es:ovCap(past ? `${who}${SD_ACABAR[st.i]} de ${p[2]}.` : `${who}${SD_IR[st.i]} a ${f[2]}.`)}, {wide:true});
  }
  if (mode === 'mail'){
    const [a, b] = shuffle(SD_ACTS.filter(x => x[0] !== 'essayer')).slice(0, 2), w = pick(SD_WHEN.slice(0, 2)), name = pick(['Léo', 'Chloé', 'Sami', 'Julie']);
    const txt = `Salut ! Je viens ${sdDe(a[0])} ${frText(a[2])}. ${w[0]}, je vais ${b[0]} ${frText(b[2])}. Et toi ? ${name}`, past = Math.random() < 0.5;
    const right = past ? a : b, opts = [right, past ? b : a, ...others(SD_ACTS.filter(x => x !== a && x !== b && x[0] !== 'essayer'), a, 2, y => y[0])];
    return fMC('f-time', 'Lee el mensaje', `<div class="forum"><div class="fhead"><b>${esc(name)}</b><small>SMS</small></div><div class="post"><span class="av">💬</span><p class="han">${esc(txt)}</p></div></div>
      <div class="ask">${past ? `¿Qué acaba de hacer ${esc(name)}?` : `¿Qué va a hacer ${esc(w[1].toLowerCase())}?`}</div>`, opts.map(y => oEs(ovCap(`${y[1]} ${y[3]}`), y[0])), right[0],
      {h:txt, p:'', es:`Acabo de ${a[1]} ${a[3]}. ${w[1]} voy a ${b[1]} ${b[3]}.`}, {wide:true});
  }
  if (mode === 'elide'){
    // verbs that go with a piece of clothing
    const [verb, ves] = pick([['acheter', 'comprar'], ['essayer', 'probarme'], ['regarder', 'mirar'], ['trouver', 'encontrar'], ['vendre', 'vender'], ['prendre', 'llevar']]);
    const n = pick(SD_CLO.filter(x => x.g.length === 1)), arts = n.g === 'm' ? 'le' : 'la', el = sdVow(n.h), vv = sdVow(verb);
    const mk = (d, l) => `Je viens ${d}${verb} ${l}${n.h}.`;
    const right = mk(vv ? "d'" : 'de ', el ? "l'" : arts + ' ');
    const opts = [mk("d'", "l'"), mk('de ', "l'"), mk("d'", arts + ' '), mk('de ', arts + ' ')];
    return fMC('f-time', '¿Cuál se escribe bien?', '<div class="hint">Delante de vocal o h: le, la, de, je y ne pierden la vocal.</div>', opts.map(t => oFr(t)), right,
      {h:right, p:'', es:`Acabo de ${ves} ${n.es}.`}, {wide:true});
  }
  if (mode === 'liaison'){
    const [w, k] = pick(SD_LIAISON), say = w;
    return fMC('f-time', '¿Hay liaison?', `<div class="qtext han">${esc(w)}</div>${audioBtns(say)}`, [oEs('Sí, suena [z]', 'z'), oEs('Sí, suena [n]', 'n'), oEs('No hay liaison', '0')], k,
      {h:w, p:'', es:k === 'z' ? 'La s o la x final suena [z] delante de vocal o h.' : k === 'n' ? 'Un + vocal: la n suena [n].' : 'La palabra siguiente empieza con consonante: no hay liaison.'}, {say});
  }
  const s = sdTimeS(Math.random() < 0.5 ? 'p' : 'f');
  if (mode === 'speak') return fSpeak('f-time', s.es, s.fr);
  const traps = [s.t.includes(SD_VENIR[s.S.i]) ? SD_ALLER[s.S.i] : SD_VENIR[s.S.i], 'de'].filter(t => !frChunks(s.t).includes(t));
  if (mode === 'listen') return fTiles('f-time', 'Escucha y ordena', audioBtns(s.fr), s.t, s.es, traps, [], {say:s.fr});
  return fTiles('f-time', 'Tradúcelo al francés', fcue(s.es), s.t, s.es, traps);
}

/* ---------- frases modelo ---------- */
FS('fe1', [['fs_e1', "Aujourd'hui, je porte un jean et un pull.", 'Hoy llevo un jean y un suéter.', ['une', 'portes']]]);
FS('fe2', [['fs_e2', "Une veste en cuir ? Quelle horreur !", '¿Una casaca de cuero? ¡Qué horror!', ['de', 'un']]]);
FS('fe3', [['fs_e3', "J'|ai deux pantalons noirs et une chemise blanche.", 'Tengo dos pantalones negros y una camisa blanca.', ['noir', 'blanc']]]);
FS('fe4', [['fs_e4', 'Les chaussures sont chères.', 'Los zapatos son caros.', ['cher', 'chers']]]);
FS('fe5', [['fs_e5', 'Elle porte une jolie robe rouge.', 'Ella lleva un vestido rojo bonito.', ['joli', 'un']]]);
FS('fe6', [['fs_e6', 'Il fait beau mais il fait froid.', 'Hace buen tiempo, pero hace frío.', ['et', 'chaud']], ['fs_e7', 'Il pleut : je prends mon parapluie.', 'Llueve: llevo mi paraguas.', ['ma', 'pleuve']]]);
FS('fe7', [['fs_e8', 'Je fais du 38 et je chausse du 40.', 'Uso talla 38 y calzo 40.', ['suis', 'ai']]]);
FS('fe8', [['fs_e9', 'Une liseuse, ça sert à lire.', 'Un lector electrónico sirve para leer.', ['pour', 'un']]]);
FS('fe9', [['fs_e10', 'Cet ordinateur est cher, mais cette valise est une bonne affaire.', 'Esta computadora es cara, pero esta maleta es una ganga.', ['ce', 'cette']]]);
FS('fe10', [['fs_e11', "Je viens d'|acheter une tablette.", 'Acabo de comprar una tableta.', ['de', 'vais']], ['fs_e12', 'Ce soir, nous allons regarder un film.', 'Esta noche vamos a ver una película.', ['venons', 'de']]]);

/* ---------- generators, modes and levels ---------- */
Object.assign(GEN, {'f-vet':sdVetEx, 'f-acc':sdAccEx, 'f-col':sdColEx, 'f-adj':sdAdjEx, 'f-place':sdPlaceEx, 'f-meteo':sdMeteoEx, 'f-sold':sdSoldeEx, 'f-obj':sdObjEx, 'f-ce':sdCeEx, 'f-time':sdTempsEx});
Object.assign(GEN_MODES, {'f-vet':['un','porte','mettre','listen','build'], 'f-acc':['match','mat','appr','pos','blog','build'], 'f-col':['swatch','outfit','agree','listen','build'],
  'f-adj':['agree','plur','hear','same','build'], 'f-place':['which','order','order','build'], 'f-meteo':['pic','map','temp','wear','mais','build'],
  'f-sold':['which','reply','size','promo','deal','quiz','build'], 'f-obj':['use','what','match','price','build'], 'f-ce':['dem','shape','opp','lost','build'],
  'f-time':['when','form','story','elide','liaison','build']});
Object.assign(L2_GEN, {'f-vet':['listen','mettre','porte','build'], 'f-acc':['listen','mat','blog','build'], 'f-col':['listen','agree','outfit','build'], 'f-adj':['hear','agree','plur','listen'],
  'f-place':['order','listen','build'], 'f-meteo':['listen','map','temp','intrus'], 'f-sold':['listen','size','reply','promo'], 'f-obj':['listen','price','what','build'],
  'f-ce':['listen','dem','opp','build'], 'f-time':['hear','form','mail','liaison','build']});
Object.assign(L3, {
  fe1: () => [...mix(sdVetEx, [['un',3],['porte',3],['mettre',3],['listen',3],['build',3],['speak',2]]), ...sentProd('fe1', 1)],
  fe2: () => [...mix(sdAccEx, [['match',1],['mat',3],['appr',2],['listen',2],['blog',3],['build',3],['speak',2]]), ...sentProd('fe2', 1)],
  fe3: () => [...mix(sdColEx, [['swatch',3],['outfit',3],['agree',3],['listen',3],['build',3],['speak',1]]), ...sentProd('fe3', 1)],
  fe4: () => mix(sdAdjEx, [['agree',4],['plur',3],['hear',3],['same',2],['build',3],['listen',2],['speak',1]]),
  fe5: () => [...mix(sdPlaceEx, [['order',4],['which',3],['build',4],['listen',3],['speak',2]]), ...sentProd('fe5', 1)],
  fe6: () => [...mix(sdMeteoEx, [['map',4],['pic',2],['temp',2],['wear',2],['mais',2],['intrus',2],['listen',3],['build',2],['speak',1]]), ...sentProd('fe6', 1)],
  fe7: () => mix(sdSoldeEx, [['size',2],['reply',3],['which',2],['promo',3],['deal',1],['quiz',3],['listen',3],['build',2],['speak',1]]),
  fe8: () => [...mix(sdObjEx, [['use',3],['what',3],['match',1],['price',3],['listen',3],['build',3],['speak',1]]), ...sentProd('fe8', 1)],
  fe9: () => [...mix(sdCeEx, [['dem',4],['shape',2],['opp',3],['lost',2],['listen',2],['build',3],['speak',1]]), ...sentProd('fe9', 1)],
  fe10: () => [...mix(sdTempsEx, [['when',2],['hear',2],['form',3],['story',3],['mail',2],['elide',2],['liaison',2],['build',3],['speak',2]]), ...sentProd('fe10', 1)]
});

/* ---------- units ---------- */
U('fe1', 'fe', 'Mode', 'La ropa', 'Je porte un jean et un pull.', 'Qué llevas puesto: porter y mettre', [
  R('Vocabulario', 'La ropa con su artículo', [['le tee-shirt · le pull · le pantalon · le jean', 'masculinos'], ['la chemise · la robe · la jupe · la veste', 'femeninos'], ['le manteau · le costume · l\'imperméable', 'abrigo, terno, impermeable']],
    'El género no siempre coincide con el español: <b>le</b> tee-shirt (la camiseta), <b>la</b> robe (el vestido). Aprende cada prenda con su artículo. ' + PREV('un, une, des de la unidad 2.')),
  R('Dos verbos', 'porter y mettre', [['Je porte une robe.', 'llevo puesto (porter, regular en -er)'], ['Je mets un manteau.', 'me pongo (mettre)'], ['je mets · tu mets · il met', 'singular: la t solo suena con il met + vocal'], ['nous mettons · vous mettez · ils mettent', 'plural']],
    'Porter describe lo que llevas; mettre, la acción de ponértelo. «Qu\'est-ce que je mets aujourd\'hui ?» = ¿Qué me pongo hoy?')], ['fs_e1']);
U('fe2', 'fe', 'Cuir', 'Accesorios y materiales', 'une veste en cuir', 'Accesorios, materiales y dar tu opinión', [
  R('Vocabulario', 'Los accesorios', [['le sac à main · la ceinture · le chapeau', 'cartera, cinturón, sombrero'], ['les lunettes de soleil · les bijoux', 'siempre en plural'], ['les chaussures · les bottes', 'zapatos y botas']],
    'En francés los zapatos y las botas se cuentan entre los accesorios de moda.'),
  R('Los materiales', 'en + material', [['une veste en cuir', 'de cuero'], ['un pull en laine', 'de lana'], ['un tee-shirt en coton', 'de algodón'], ['une chemise en jean', 'de jean']],
    'En español decimos «de cuero»; en francés, <b>en</b> cuir.'),
  R('Opinar', 'Ça me plaît / Quelle horreur !', [["C'est joli ! · Ça me plaît !", 'me gusta'], ["C'est à la mode.", 'está de moda'], ['Quelle horreur ! · C\'est moche !', 'no me gusta nada'], ['Ça ne me plaît pas.', 'no me gusta']],
    'Ça me plaît es «me gusta» cuando hablas de algo concreto que ves. ' + PREV('ne… pas de la unidad 1.'))], ['fs_e2']);
U('fe3', 'fe', 'Bleu', 'Los colores', 'une chemise blanche', 'Los colores y su concordancia', [
  R('La regla', 'El color concuerda', [['un pantalon noir · une jupe noire', '+ e en femenino'], ['des pantalons noirs · des jupes noires', '+ s en plural'], ['un sac blanc · une robe blanche', 'blanc → blanche'], ['un pull rouge · une veste rouge', 'termina en e: no cambia']],
    'El color siempre va <b>después</b> del nombre: une robe rouge, nunca une rouge robe.', [['nombre', 'une robe'], ['color', 'verte']]),
  R('Excepciones', 'Marron no cambia', [['des chaussures marron', 'ni femenino ni plural'], ['des pantalons gris', 'gris ya termina en s'], ['une veste grise', 'pero sí cambia en femenino']],
    'Oído: noir y noire, bleu y bleue suenan igual. En vert/verte, gris/grise o blanc/blanche, el femenino se oye.')], ['fs_e3']);
U('fe4', 'fe', 'Adj', 'Género y número', 'Les chaussures sont chères.', 'Concordar el adjetivo con el nombre', [
  R('La regla', 'Femenino y plural', [['petit → petite', 'en general, + e'], ['petit → petits', 'en plural, + s'], ['simple → simple', 'si termina en e, no cambia'], ['bon → bonne', 'algunos doblan la consonante']],
    'Igual que en español, el adjetivo concuerda con el nombre. Pero mira el género del nombre en <b>francés</b>: la robe est chère (el vestido es caro).'),
  R('Las formas raras', 'Hay que aprenderlas', [['beau → belle · beaux', 'lindo'], ['blanc → blanche', 'blanco'], ['long → longue', 'largo'], ['cher → chère', 'caro: la è lleva tilde grave'], ['léger → légère', 'ligero']],
    'Ojo con el falso amigo: large es <b>ancho</b>, y largo se dice long.')], ['fs_e4']);
U('fe5', 'fe', 'Joli', 'El lugar del adjetivo', 'une jolie robe rouge', 'Antes o después del nombre', [
  R('La regla', 'Casi siempre después', [['un manteau noir', 'colores: después'], ['une veste élégante', 'la mayoría: después'], ['une petite jupe · un grand sac', 'petit, grand: antes'], ['une jolie robe · une bonne affaire', 'joli, beau, bon: antes']],
    'Unos pocos adjetivos cortos y muy usados van <b>antes</b>: petit, grand, joli, beau, bon. Con dos adjetivos, cada uno va a su lugar: une jolie robe rouge.',
    [['antes', 'jolie'], ['nombre', 'robe'], ['después', 'rouge']])], ['fs_e5']);
U('fe6', 'fe', '☀️', 'El tiempo', 'Il fait beau mais il fait froid.', 'Hablar del tiempo y de la temperatura', [
  R('La regla', 'Il fait, il y a, il pleut', [['Il fait beau. · Il fait chaud. · Il fait froid.', 'con faire'], ['Il y a du soleil. · Il y a du vent. · Il y a des nuages.', 'con il y a + du, de la, des'], ['Il pleut. · Il neige.', 'verbos propios'], ['Il fait 18 degrés. · Il fait moins 5.', 'la temperatura']],
    'Para la persona se usa avoir: <b>j\'ai</b> froid (tengo frío). Para el tiempo, faire: <b>il fait</b> froid. ' + PREV('du, de la, des de la unidad 3.')),
  R('Unir ideas', 'mais = pero', [['Il fait beau mais il fait froid.', 'dos cosas que se oponen'], ['Il fait beau et il fait chaud.', 'dos cosas que van juntas: et']],
    'En el mapa del tiempo, cada ciudad tiene su dibujo y su temperatura en grados Celsius.')], ['fs_e6', 'fs_e7']);
U('fe7', 'fe', '−50%', 'Las rebajas', 'Je fais du 38.', 'Tallas, descuentos y precios', [
  R('Las tallas', 'taille y pointure', [['Quelle est votre taille ? — Je fais du 38.', 'ropa: faire du + número'], ['Quelle est votre pointure ? — Je chausse du 40.', 'zapatos: chausser du + número'], ['Vous faites du combien ?', 'sirve para los dos']],
    'Nunca «je suis 38»: la talla se dice con faire o chausser. Y «j\'ai 38 ans» es la edad.'),
  R('Las tallas francesas', 'Del número a la letra', [['34', 'XS'], ['36', 'S'], ['38 · 40', 'M'], ['42 · 44', 'L'], ['46 · 48', 'XL']],
    'Les soldes son en enero y en julio, unas semanas fijadas por el Estado. En Quebec, ir de compras se dice <b>magasiner</b>. ' + PREV('los números hasta 100 de la unidad 1.'))], ['fs_e8']);
U('fe8', 'fe', '📷', 'Objetos tecnológicos', 'Ça sert à lire.', 'Los objetos y para qué sirven', [
  R('Para qué sirve', 'Ça sert à + infinitivo', [['Ça sert à quoi ?', '¿Para qué sirve?'], ['Ça sert à lire.', 'sirve para leer'], ["C'est pour écouter de la musique.", 'es para…'], ['Avec ça, on peut prendre des photos.', 'con esto se puede…']],
    'Después de à, pour y peut va el verbo en infinitivo, igual que en español.'),
  R('El precio', 'Ça coûte combien ?', [['Ça coûte combien ? · Combien ça coûte ?', 'las dos sirven'], ['Ça coûte 99 €.', 'quatre-vingt-dix-neuf euros'], ["C'est cher. ≠ Ce n'est pas cher.", 'caro, barato']],
    'Un objet en promotion es un objeto con descuento. ' + PREV('Combien coûte… ? de la unidad 3.'))], ['fs_e9']);
U('fe9', 'fe', 'Cet', 'Objetos perdidos', 'Ce sac à dos est rouge.', 'Describir un objeto y ce, cet, cette, ces', [
  R('La regla', 'Ce, cet, cette, ces', [['ce sac · ce portefeuille', 'masculino'], ['cet ordinateur · cet homme', 'masculino delante de vocal o h'], ['cette valise · cette écharpe', 'femenino'], ['ces lunettes · ces livres', 'plural']],
    'Sirven para mostrar algo (este, esta) o para hablar de algo que ya nombraste. Cet y cette suenan igual.', [['masc.', 'ce / cet'], ['fem.', 'cette'], ['plural', 'ces']]),
  R('Describir', 'Forma, peso, tamaño y color', [['Il est rond, carré, rectangulaire.', 'la forma'], ['Il est lourd. ≠ Il est léger.', 'el peso'], ['Il est grand. ≠ Il est petit.', 'el tamaño'], ["C'est un sac vert et bleu.", 'el color']],
    'En la oficina de objetos perdidos (les objets trouvés) te preguntan cómo es tu objeto: «Il est de quelle couleur ?».')], ['fs_e10']);
U('fe10', 'fe', '⏩', 'Futuro próximo y pasado reciente', "Je viens d'acheter une tablette.", 'Lo que acaba de pasar y lo que va a pasar', [
  R('La regla', 'aller + infinitivo, venir de + infinitivo', [['Je vais acheter une tablette.', 'futuro próximo: voy a comprar'], ['Je viens d\'acheter une tablette.', 'pasado reciente: acabo de comprar'], ['Demain, ce soir, lundi matin…', 'marcadores del futuro']],
    'Es igual que en español: «ir a» + infinitivo. El pasado reciente se dice con venir de, como «acabar de».', [['sujeto', 'je'], ['venir', 'viens'], ['de', "d'"], ['infinitivo', 'acheter']]),
  R('Conjugación', 'aller y venir', [['je vais · je viens', 'yo'], ['tu vas · tu viens', 'tú'], ['il va · il vient', 'él, ella'], ['nous allons · nous venons', 'nosotros'], ['vous allez · vous venez', 'ustedes'], ['ils vont · ils viennent', 'ellos, ellas']],
    PREV('aller de la unidad 2 (je vais à la gare).')),
  R('Fonética', 'Elisión y liaison', [["l'hiver · j'adore · n'aime · d'acheter", 'le, je, ne, de pierden la e delante de vocal o h'], ['les_accessoires · deux_ans · nous_allons', 'liaison en [z]'], ['un_euro · un_ordinateur', 'liaison en [n]'], ['les DVD · deux chaussures', 'sin liaison: sigue consonante']],
    'En la liaison, la consonante final muda se pronuncia y se une a la vocal siguiente, sin pausa.')], ['fs_e11', 'fs_e12']);

/* ---------- dialogs ---------- */
const DLG_E = [
  {where:'En la tienda de ropa', who:'Vendedora', turns:[
    {say:'Bonjour ! Je peux vous aider ?', you:'Sí. Busco una casaca. Uso talla 38.', ans:'Oui. Je cherche une veste. Je fais du 38.', traps:['un', 'suis']},
    {say:'Cette veste en cuir est en solde : moins cinquante pour cent !', listen:['La casaca de cuero tiene 50 % de descuento.', 'La casaca de cuero cuesta 50 €.', 'La casaca de lana tiene 50 % de descuento.', 'La casaca de cuero tiene 15 % de descuento.'], ask:'¿Qué dijo la vendedora?', es:'¡Esta casaca de cuero está en rebaja: menos 50 %!'},
    {say:'Elle vous plaît ?', you:'Sí, me gusta. ¡Es una ganga!', ans:"Oui, elle me plaît. C'est une bonne affaire !", traps:['bon', 'plaît_pas']}]},
  {where:'En objetos perdidos', who:'Empleado', turns:[
    {say:'Bonjour, vous cherchez quoi ?', you:'Busco mi mochila.', ans:'Je cherche mon sac à dos.', traps:['ma', 'de']},
    {say:'Il est de quelle couleur ?', you:'Es roja, pequeña y liviana.', ans:'Il est rouge, petit et léger.', traps:['petite', 'légère']},
    {say:'Un sac à dos rouge… Voilà ! Il est à vous ?', listen:['Encontró una mochila roja y pregunta si es tuya.', 'No hay ninguna mochila roja.', 'Encontró una maleta roja.', 'Te pide volver mañana.'], ask:'¿Qué dijo el empleado?', es:'Una mochila roja… ¡Aquí está! ¿Es suya?'}]},
  {where:'En la tienda de tecnología', who:'Vendedor', turns:[
    {say:'Bonjour ! Vous cherchez quelque chose ?', you:'Sí, un lector electrónico. ¿Cuánto cuesta?', ans:'Oui, une liseuse. Ça coûte combien ?', alts:['Oui, une liseuse. Combien ça coûte ?'], traps:['un', 'quoi']},
    {say:'Elle coûte quatre-vingt-dix-neuf euros, mais demain, elle va être en promotion.', listen:['Cuesta 99 € y mañana va a estar en oferta.', 'Cuesta 99 € y ayer estuvo en oferta.', 'Cuesta 89 € y mañana va a estar en oferta.', 'Cuesta 99 € y ya está en oferta.'], ask:'¿Qué dijo el vendedor?', es:'Cuesta 99 euros, pero mañana va a estar en oferta.'},
    {say:'Vous revenez demain ?', you:'Sí, voy a volver mañana.', ans:'Oui, je vais revenir demain.', traps:['viens', 'de']}]},
  {where:'Con una amiga', who:'Léa', turns:[
    {say:"Qu'est-ce que tu mets aujourd'hui ?", you:'Hace frío: me pongo un abrigo y una bufanda.', ans:'Il fait froid : je mets un manteau et une écharpe.', traps:['chaud', 'un_écharpe']},
    {say:"Moi, je viens d'acheter des bottes en cuir. Elles sont belles !", listen:['Acaba de comprar unas botas de cuero.', 'Va a comprar unas botas de cuero.', 'Acaba de comprar unos zapatos de cuero.', 'Acaba de comprar unas botas de lana.'], ask:'¿Qué dijo Léa?', es:'Yo acabo de comprar unas botas de cuero. ¡Son lindas!'},
    {say:'On va faire les soldes demain ?', you:'Sí, ¡buena idea!', ans:"Oui, c'est une bonne idée !", traps:['bon', 'un']}]}];
MODULES.fe = {n:5, tab:'Les soldes', zh:"Les soldes, c'est parti !", p:'lé·sòld·sè·par·ti', es:'Unidad 4 · Ropa, colores, adjetivos, el tiempo, las rebajas, objetos, ce/cet/cette y el futuro próximo.',
  examKey:'examBestFe', dlgPlan:() => frDialogPlan(DLG_E, 'f-sold'), dlgSub:'En la tienda de ropa, en objetos perdidos, en la tienda de tecnología y con una amiga'};
