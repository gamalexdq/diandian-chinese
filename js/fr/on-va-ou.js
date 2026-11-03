/* =================== Ruta 3 · On va où ? (unidad 2) ===================
   La ciudad: lugares, un/une/des y le/la/les, los verbos en -er, indicar el camino,
   transportes, el metro, quel/quelle/quels/quelles y más profesiones. Los planos del
   barrio y del metro se dibujan aquí (SVG); los textos y los ejercicios son propios. */
const ovWords = (unit, cat, rows) => rows.forEach(([id, h, p, es, e, tip]) => (ITEMS[id] = {id, unit, cat, kind:'word', h, p, es, e, tip}));
const oPic = (e, v) => ({v, html:`<span class="emo">${e}</span>`});
const ovUn = n => n.g === 'p' ? 'des' : n.g === 'm' ? 'un' : 'une';
// à + article: au musée, à la poste, à l'église, aux toilettes
const ovAu = n => ({le:'au ' + n.h, la:'à la ' + n.h, "l'":"à l'" + n.h, les:'aux ' + n.h})[art(n)];
const ovEsA = es => es.replace(/^el /, 'al ').replace(/^la /, 'a la ');
const ovEsUn = es => es.replace(/^el /, 'un ').replace(/^la /, 'una ');
const ovCap = s => s[0].toUpperCase() + s.slice(1);
const ALL_ARTS = ['un', 'une', 'des', 'le', 'la', "l'", 'les'];

/* ---------- fc1 · la ciudad ---------- */
// def: a riddle in simple French; "On y…" = "allí uno…"
const OV_PLACES = [
  {h:'restaurant', g:'m', e:'🍽️', es:'el restaurante', esp:'restaurantes', pl:'restaurants', def:'On y mange avec des amis.'},
  {h:'banque', g:'f', e:'🏦', es:'el banco', esp:'bancos', pl:'banques', def:"On y va pour retirer de l'argent."},
  {h:'bibliothèque', g:'f', e:'📚', es:'la biblioteca', esp:'bibliotecas', pl:'bibliothèques', def:'On y lit et on emprunte des livres.'},
  {h:'musée', g:'m', e:'🖼️', es:'el museo', esp:'museos', pl:'musées', def:'On y regarde des tableaux et des sculptures.', name:'Picasso'},
  {h:'poste', g:'f', e:'📮', es:'el correo', def:'On y envoie des lettres et des colis.'},
  {h:'théâtre', g:'m', e:'🎭', es:'el teatro', esp:'teatros', pl:'théâtres', def:'On y regarde une pièce avec des acteurs.', name:'Molière'},
  {h:'église', g:'f', e:'⛪', es:'la iglesia', esp:'iglesias', pl:'églises', def:'On y va pour la messe du dimanche.', name:'Saint-Paul'},
  {h:'mairie', g:'f', e:'🗳️', es:'la municipalidad', def:'Le maire de la ville travaille ici.'},
  {h:'gare', g:'f', e:'🚉', es:'la estación de tren', def:'On y prend le train.', name:'Saint-Charles'},
  {h:'place', g:'f', e:'⛲', es:'la plaza', esp:'plazas', pl:'places', def:"C'est un grand espace ouvert, au milieu des rues.", name:'Bellecour'},
  {h:'parc', g:'m', e:'🌳', es:'el parque', esp:'parques', pl:'parcs', def:'Il y a des arbres, des fleurs et des bancs.', name:'Monceau'},
  {h:'hôpital', g:'m', e:'🏥', es:'el hospital', def:'On y va quand on est très malade.'},
  {h:'école', g:'f', e:'🏫', es:'la escuela', esp:'escuelas', pl:'écoles', def:'Les enfants y apprennent à lire et à écrire.'},
  {h:'boulangerie', g:'f', e:'🥖', es:'la panadería', esp:'panaderías', pl:'boulangeries', def:'On y achète du pain et des croissants.'},
  {h:'pharmacie', g:'f', e:'💊', es:'la farmacia', esp:'farmacias', pl:'pharmacies', def:'On y achète des médicaments.'},
  {h:'piscine', g:'f', e:'🏊', es:'la piscina', esp:'piscinas', pl:'piscines', def:'On y nage.'}];
const ovPlace = h => OV_PLACES.find(n => n.h === h);
ovWords('fc1', 'city', [
  ['v_res', 'le restaurant', 'lë·rès·to·rã', 'el restaurante', '🍽️'],
  ['v_ban', 'la banque', 'la·bãk', 'el banco', '🏦', 'Femenino en francés: la banque.'],
  ['v_bib', 'la bibliothèque', 'la·bi·bli·o·tèk', 'la biblioteca', '📚', 'La th suena t.'],
  ['v_mus', 'le musée', 'lë·mü·zé', 'el museo', '🖼️', 'Termina en -ée pero es masculino.'],
  ['v_pos', 'la poste', 'la·pòst', 'el correo (la oficina)', '📮'],
  ['v_the', 'le théâtre', 'lë·té·atr', 'el teatro', '🎭'],
  ['v_egl', "l'église", 'lé·gliz', 'la iglesia', '⛪'],
  ['v_mai', 'la mairie', 'la·mè·ri', 'la municipalidad', '🗳️', 'Cada ciudad o pueblo de Francia tiene su mairie, con su maire (alcalde). Ahí también se vota.'],
  ['v_gar', 'la gare', 'la·gar', 'la estación de tren', '🚉'],
  ['v_pla', 'la place', 'la·plas', 'la plaza', '⛲'],
  ['v_par', 'le parc', 'lë·park', 'el parque', '🌳'],
  ['v_hop', "l'hôpital", 'lo·pi·tal', 'el hospital', '🏥', 'La h no suena: l\'hôpital.'],
  ['v_eco', "l'école", 'lé·kòl', 'la escuela', '🏫'],
  ['v_bou', 'la boulangerie', 'la·bu·lã·zhri', 'la panadería', '🥖']]);
FG('f-ville', 'fc1', 'lugares de la ciudad');
function ovVilleEx(mode){
  const n = pick(OV_PLACES), opts = () => [n, ...others(OV_PLACES, n, 3, x => x.h)];
  const rev = {h:phrase(n), p:'', es:n.es};
  if (mode === 'pic') return fMC('f-ville', '¿Qué lugar es?', `<div class="pic">${n.e}</div>`, opts().map(x => oFr(phrase(x))), phrase(n), rev);
  if (mode === 'riddle') return fMC('f-ville', 'Adivinanza: ¿de qué lugar se habla?', fq(n.def), opts().map(x => oFr(phrase(x))), phrase(n), rev);
  if (mode === 'guess') return {t:'type', item:'f-ville', kind:'Adivinanza: escribe el lugar', q:fq(n.def), answer:[phrase(n), n.h], ph:'Ej.: la gare',
    hint:'Con su artículo. ' + FR_TYPE_HINT, rev};
  if (mode === 'listen'){
    const fr = `Je vais ${ovAu(n)}.`;
    return fMC('f-ville', 'Escucha: ¿adónde va?', audioBtns(fr, true), opts().map(x => oPic(x.e, x.h)), n.h, {h:fr, p:'', es:`Voy ${ovEsA(n.es)}.`}, {say:fr});
  }
  const fr = `Je cherche ${tilePhrase(n)}.`, es = `Busco ${n.es}.`;
  if (mode === 'speak') return fSpeak('f-ville', es, fr);
  return fTiles('f-ville', 'Tradúcelo al francés', fcue(es), fr, es, ARTS.filter(a => a !== art(n)).slice(0, 2).concat('cherches'));
}

/* ---------- fc2 · un, une, des / le, la, les ---------- */
ovWords('fc2', 'art', [
  ['a_ilya', 'il y a', 'il·i·a', 'hay', null, 'Sirve para singular y plural: il y a un parc, il y a des parcs.'],
  ['a_un', 'un musée', 'ẽ·mü·zé', 'un museo'],
  ['a_une', 'une église', 'ü·né·gliz', 'una iglesia', null, 'Une + vocal: se unen al hablar, «ü·né·gliz».'],
  ['a_des', 'des musées', 'dé·mü·zé', 'museos (unos museos)', null, 'En plural, des es obligatorio: «hay museos» = il y a des musées.'],
  ['a_qua', 'le quartier', 'lë·kar·tié', 'el barrio'],
  ['a_tou', 'la tour', 'la·tur', 'la torre', '🗼', 'Ojo: le tour es «la vuelta»; la tour es «la torre».'],
  ['a_pon', 'le pont', 'lë·põ', 'el puente', '🌉']]);
FG('f-indef', 'fc2', 'un, une, des · le, la, les');
['Picasso', 'Molière', 'Saint-Paul', 'Saint-Charles', 'Bellecour', 'Monceau'].forEach(x => FR_NAMES.add(x));
// [French with ### where the article goes, Spanish, which article]
function ovArtSent(kind){
  const named = OV_PLACES.filter(n => n.name), plural = OV_PLACES.filter(n => n.pl);
  if (kind === 'pl'){ const n = pick(plural); return {fr:`Il y a ### ${n.pl} dans le quartier.`, es:`Hay ${n.esp} en el barrio.`, a:'des', n:{...n, h:n.pl, g:'p'}}; }
  if (kind === 'name'){ const n = pick(named); return {fr:`Je visite ### ${n.h} ${n.name}.`, es:`Visito ${n.es} ${n.name}.`, a:art(n), n}; }
  const n = pick(OV_PLACES);
  if (kind === 'un') return Object.assign(pick([{fr:`Il y a ### ${n.h} ici ?`, es:`¿Hay ${ovEsUn(n.es)} aquí?`}, {fr:`Je cherche ### ${n.h}.`, es:`Busco ${ovEsUn(n.es)}.`}]), {a:ovUn(n), n});
  return Object.assign(pick([{fr:`Où est ### ${n.h} ?`, es:`¿Dónde está ${n.es}?`}, {fr:`### ${n.h} est à droite.`, es:`${ovCap(n.es)} está a la derecha.`}]), {a:art(n), n});
}
const ovFill = (fr, a) => { const t = fr.replace('### ', a === "l'" ? "l'" : a + ' '); return t[0].toUpperCase() + t.slice(1); };
// wrong options that make you think: the other gender, the other kind (un ↔ le) and the plural
const OV_NEAR = {un:['une', 'le', 'des'], une:['un', 'la', 'des'], des:['les', 'un', 'une'], le:['la', 'les', 'un'], la:['le', 'une', "l'"], "l'":['le', 'la', 'les'], les:['des', 'le', 'la']};
function ovIndefEx(mode){
  const x = ovArtSent(pick(['un', 'un', 'pl', 'def', 'def', 'name'])), fr = ovFill(x.fr, x.a), rev = {h:fr, p:'', es:x.es};
  const opts = [x.a, ...OV_NEAR[x.a]].map(a => oFr(a));
  if (mode === 'art'){
    const gap = x.fr.replace('### ', '___ ');
    return fMC('f-indef', 'Completa con el artículo', `<div class="qtext han">${esc(gap[0].toUpperCase() + gap.slice(1))}</div><div class="hint">${esc(x.es)}</div>`, opts, x.a, rev);
  }
  if (mode === 'listen') return fMC('f-indef', 'Escucha: ¿qué artículo oyes?', audioBtns(fr, true), opts, x.a, rev, {say:fr});
  if (mode === 'match'){
    const want = pick([['le', 'la', "l'", 'les'], ['un', 'une', 'des']]);
    const rows = shuffle(want.map(a => {
      if (a === 'les' || a === 'des'){ const n = pick(OV_PLACES.filter(y => y.pl)); return {fr:n.pl, a, full:`${a} ${n.pl}`, es:n.esp}; }
      const n = pick(OV_PLACES.filter(y => (a === 'un' || a === 'une') ? ovUn(y) === a : art(y) === a));
      return {fr:n.h, a, full:a === "l'" ? "l'" + n.h : `${a} ${n.h}`, es:a === 'un' || a === 'une' ? ovEsUn(n.es) : n.es};
    }));
    return {t:'match', item:'f-indef', kind:'Relaciona cada palabra con su artículo', q:'<div class="hint">Toca una palabra y luego su artículo.</div>',
      left:rows.map(r => ({v:r.fr, a:r.a, say:r.fr, html:`<span class="han">${esc(r.fr)}</span>`})), right:want.map(a => ({v:a, html:`<span class="han">${esc(a)}</span>`})),
      rev:{h:rows.map(r => r.full).join(' · '), p:'', es:rows.map(r => r.es).join(' · ')}};
  }
  if (mode === 'speak') return fSpeak('f-indef', x.es, fr);
  const s = x.fr.replace('### ', x.a === "l'" ? "l'|" : x.a + ' ');
  return fTiles('f-indef', 'Tradúcelo al francés', fcue(x.es), s, x.es, OV_NEAR[x.a].slice(0, 2));
}

/* ---------- fc3 · verbos en -er ---------- */
ovWords('fc3', 'verb', [
  ['e_par', 'parler', 'par·lé', 'hablar'], ['e_tou', 'tourner', 'tur·né', 'doblar, girar'], ['e_tra', 'traverser', 'tra·vèr·sé', 'cruzar'],
  ['e_che', 'chercher', 'shèr·shé', 'buscar'], ['e_con', 'continuer', 'kõ·ti·nü·é', 'seguir, continuar'],
  ['e_vis', 'visiter', 'vi·zi·té', 'visitar (un lugar)', null, 'Solo para lugares. Para personas: rendre visite à.'],
  ['e_arr', 'arriver', 'a·ri·vé', 'llegar', null, "Empieza con vocal: j'arrive."], ['e_reg', 'regarder', 'rë·gar·dé', 'mirar'],
  ['e_mar', 'marcher', 'mar·shé', 'caminar'], ['e_pas', 'passer', 'pa·sé', 'pasar']]);
FG('f-er', 'fc3', 'verbos en -er');
// Spanish forms: yo, tú, él/ella, nosotros, ustedes, ellos/ellas
const OV_ER = [
  {inf:'parler', es:['hablo', 'hablas', 'habla', 'hablamos', 'hablan', 'hablan'], c:[['français', 'francés'], ['espagnol', 'español'], ['beaucoup de langues', 'muchos idiomas']]},
  {inf:'habiter', es:['vivo', 'vives', 'vive', 'vivimos', 'viven', 'viven'], c:[['à Nantes', 'en Nantes'], ['dans le quartier', 'en el barrio'], ['près de la gare', 'cerca de la estación']]},
  {inf:'tourner', es:['doblo', 'doblas', 'dobla', 'doblamos', 'doblan', 'doblan'], c:[['à gauche', 'a la izquierda'], ['à droite', 'a la derecha']]},
  {inf:'traverser', es:['cruzo', 'cruzas', 'cruza', 'cruzamos', 'cruzan', 'cruzan'], c:[['la rue', 'la calle'], ['la place', 'la plaza'], ['le pont', 'el puente']]},
  {inf:'chercher', es:['busco', 'buscas', 'busca', 'buscamos', 'buscan', 'buscan'], c:[['la gare', 'la estación'], ['la poste', 'el correo'], ['une pharmacie', 'una farmacia']]},
  {inf:'continuer', es:['sigo', 'sigues', 'sigue', 'seguimos', 'siguen', 'siguen'], c:[['tout droit', 'derecho']]},
  {inf:'visiter', es:['visito', 'visitas', 'visita', 'visitamos', 'visitan', 'visitan'], c:[['le musée', 'el museo'], ['la ville', 'la ciudad'], ['le centre historique', 'el centro histórico']]},
  {inf:'arriver', es:['llego', 'llegas', 'llega', 'llegamos', 'llegan', 'llegan'], c:[['à la gare', 'a la estación'], ['à la place Bellecour', 'a la plaza Bellecour']]},
  {inf:'regarder', es:['miro', 'miras', 'mira', 'miramos', 'miran', 'miran'], c:[['le plan', 'el plano'], ['les tableaux', 'los cuadros']]},
  {inf:'marcher', es:['camino', 'caminas', 'camina', 'caminamos', 'caminan', 'caminan'], c:[["jusqu'à la place", 'hasta la plaza']]},
  {inf:'passer', es:['paso', 'pasas', 'pasa', 'pasamos', 'pasan', 'pasan'], c:[['devant la poste', 'por delante del correo'], ['devant le musée', 'por delante del museo']]},
  {inf:'travailler', es:['trabajo', 'trabajas', 'trabaja', 'trabajamos', 'trabajan', 'trabajan'], c:[['à la mairie', 'en la municipalidad'], ['au restaurant', 'en el restaurante']]}];
['Nantes'].forEach(x => FR_NAMES.add(x));
const OV_SUBJ = [{k:'je', fr:'Je', es:'Yo', i:0}, {k:'tu', fr:'Tu', es:'Tú', i:1}, {k:'il', fr:'Il', es:'Él', i:2}, {k:'elle', fr:'Elle', es:'Ella', i:2},
  {k:'nous', fr:'Nous', es:'Nosotros', i:3}, {k:'vous', fr:'Vous', es:'Ustedes', i:4}, {k:'ils', fr:'Ils', es:'Ellos', i:5}, {k:'elles', fr:'Elles', es:'Ellas', i:5}];
const OV_END = ['e', 'es', 'e', 'ons', 'ez', 'ent'];
const ovVowel = w => /^[aeiouéèêh]/i.test(w);
const erForm = (v, s) => v.inf.slice(0, -2) + OV_END[s.i];
// "J'" when je meets a vowel; the tiles version keeps J' and the verb apart
const erSubj = (v, s, tiles) => s.k === 'je' && ovVowel(v.inf) ? (tiles ? "J'|" : "J'") : s.fr + ' ';
function erSent(v, s, c, tiles){ return {fr:`${erSubj(v, s, tiles)}${erForm(v, s)} ${c[0]}.`, es:`${s.es} ${v.es[s.i]} ${c[1]}.`}; }
function ovErEx(mode){
  const v = pick(OV_ER), c = pick(v.c);
  if (mode === 'form' || mode === 'type'){
    const s = pick(OV_SUBJ.filter(x => !(x.k === 'je' && ovVowel(v.inf)))), f = erForm(v, s), {fr, es} = erSent(v, s, c);
    const q = `<div class="qtext han">${esc(s.fr)} ___ ${esc(c[0])}.</div><div class="hint">verbo ${esc(v.inf)} · ${esc(es)}</div>`;
    if (mode === 'type') return {t:'type', item:'f-er', kind:`Conjuga «${v.inf}»`, q, answer:f, ph:'Escribe el verbo', hint:FR_TYPE_HINT, rev:{h:fr, p:'', es}};
    const forms = uniqBy(OV_END.map(e => v.inf.slice(0, -2) + e), x => x).filter(x => x !== f);
    return fMC('f-er', `Conjuga «${v.inf}»`, q, [f, ...shuffle(forms).slice(0, 3)].map(x => oFr(x)), f, {h:fr, p:'', es});
  }
  if (mode === 'match'){
    // one subject per ending: je/il/elle (-e), tu (-es), nous (-ons), vous (-ez), ils/elles (-ent)
    const groups = shuffle([0, 1, 3, 4, 5]).slice(0, 4), vs = shuffle(OV_ER).slice(0, 4);
    const rows = groups.map((i, k) => {
      const s = pick(OV_SUBJ.filter(x => x.i === i)), w = vs[k], cc = pick(w.c), sj = erSubj(w, s).trim();
      return {l:sj, r:`${erForm(w, s)} ${cc[0]}`, fr:`${sj}${sj.endsWith("'") ? '' : ' '}${erForm(w, s)} ${cc[0]}.`, es:`${s.es} ${w.es[s.i]} ${cc[1]}.`};
    });
    const right = shuffle(rows);
    return {t:'match', item:'f-er', kind:'Relaciona para formar frases', q:'<div class="hint">Toca un pronombre y luego el final de la frase. Mira la terminación del verbo.</div>',
      left:rows.map(r => ({v:r.l, a:r.r, say:r.l, html:`<span class="han">${esc(r.l)}</span>`})), right:right.map(r => ({v:r.r, html:`<span class="han">${esc(r.r)}</span>`})),
      rev:{h:rows.map(r => r.fr).join(' '), p:'', es:rows.map(r => r.es).join(' ')}};
  }
  if (mode === 'sound'){
    // only verbs that start with a consonant: with a vowel, ils habitent links the s and sounds different
    const w = pick(OV_ER.filter(x => !ovVowel(x.inf))), same = Math.random() < 0.5;
    const quiet = OV_SUBJ.filter(x => [0, 1, 2, 5].includes(x.i)), loud = OV_SUBJ.filter(x => x.i === 3 || x.i === 4);
    let a, b;
    if (same){ [a, b] = shuffle(quiet); while (a.i === b.i) b = pick(quiet); }
    else { a = pick(loud); b = pick(OV_SUBJ.filter(x => x.i !== a.i)); }
    const t = `${a.fr.toLowerCase()} ${erForm(w, a)} · ${b.fr.toLowerCase()} ${erForm(w, b)}`, say = t.replace(' · ', ', ');
    const why = same ? 'Suenan igual: -e, -es y -ent no se pronuncian.' : 'Suenan distinto: -ons («õ») y -ez («é») sí se pronuncian.';
    return fMC('f-er', '¿Se pronuncian igual?', `<div class="qtext han">${esc(t)}</div>${audioBtns(say)}`, [oEs('Suenan igual', 'same'), oEs('Suenan distinto', 'diff')], same ? 'same' : 'diff',
      {h:t, p:'', es:why}, {say});
  }
  const s = pick(OV_SUBJ), {fr, es} = erSent(v, s, c, true);
  if (mode === 'speak') return fSpeak('f-er', es, fr);
  const f = erForm(v, s), traps = uniqBy(OV_END.map(e => v.inf.slice(0, -2) + e), x => x).filter(x => x !== f);
  if (mode === 'listen') return fTiles('f-er', 'Escucha y ordena', audioBtns(frText(fr)), fr, es, shuffle(traps).slice(0, 2), [], {say:frText(fr)});
  return fTiles('f-er', 'Tradúcelo al francés', fcue(es), fr, es, shuffle(traps).slice(0, 2));
}

/* ---------- fc4 · indicar el camino ---------- */
ovWords('fc4', 'way', [
  ['w_gau', 'à gauche', 'a·gosh', 'a la izquierda', '⬅️'],
  ['w_dro', 'à droite', 'a·druat', 'a la derecha', '➡️', 'La t final de droite sí suena.'],
  ['w_tdr', 'tout droit', 'tu·drua', 'derecho, todo recto', '⬆️', 'Ojo: droit (recto) no es droite (derecha). Aquí la t no suena.'],
  ['w_rue', 'la rue', 'la·rü', 'la calle'],
  ['w_car', 'le carrefour', 'lë·kar·fur', 'el cruce, la esquina'],
  ['w_bout', 'au bout de', 'o·bu·dë', 'al final de'],
  ['w_dev', 'devant', 'dë·vã', 'delante de'],
  ['w_fac', 'en face de', 'ã·fas·dë', 'enfrente de'],
  ['w_cot', 'à côté de', 'a·ko·té·dë', 'al lado de'],
  ['w_par', 'pardon', 'par·dõ', 'disculpe, perdón', null, 'Para hablarle a alguien en la calle: Pardon, madame…']]);
FG('f-way', 'fc4', 'indicar el camino');
// the street plan: you start at the dot, looking up. Keys: '0' straight on, '1g' first street left, '2d' second street right…
const OV_WAYS = ['0', '1g', '1d', '2g', '2d'];
const OV_ORD = {1:['première', 'primera'], 2:['deuxième', 'segunda']}, OV_SIDE = {g:['gauche', 'izquierda'], d:['droite', 'derecha']};
function wayMap(key, e, small){
  const k = +key[0], y = k === 1 ? 140 : 80, x = key[1] === 'g' ? 18 : 182;
  const [ex, ey] = k ? [x, y] : [100, 16];
  return `<svg class="waymap${small ? ' sm' : ''}" viewBox="0 0 200 212" role="img" aria-label="Plano con el camino"><rect width="200" height="212" rx="12" class="wm-b"/>
    ${[40, 100, 160].map(X => `<line x1="${X}" y1="0" x2="${X}" y2="212" class="wm-s"/>`).join('')}${[80, 140].map(Y => `<line x1="0" y1="${Y}" x2="200" y2="${Y}" class="wm-s"/>`).join('')}
    <polyline points="${k ? `100,198 100,${y} ${x},${y}` : '100,198 100,16'}" class="wm-r"/><circle cx="100" cy="198" r="7" class="wm-me"/>
    <circle cx="${ex}" cy="${ey}" r="15" class="wm-ec"/><text x="${ex}" y="${ey + 1}" class="wm-e" text-anchor="middle" dominant-baseline="central">${e}</text></svg>`;
}
function wayFr(key, tu){
  const k = +key[0], [go, take] = tu ? ['Tu vas', 'tu prends'] : ['Vous allez', 'vous prenez'];
  if (!k) return {fr:`${go} tout droit jusqu'au bout de la rue.`, es:`${tu ? 'Sigue' : 'Siga'} derecho hasta el final de la calle.`};
  return {fr:`${go} tout droit et ${take} la ${OV_ORD[k][0]} rue à ${OV_SIDE[key[1]][0]}.`,
    es:`${tu ? 'Sigue' : 'Siga'} derecho y ${tu ? 'toma' : 'tome'} la ${OV_ORD[k][1]} calle a la ${OV_SIDE[key[1]][1]}.`};
}
const wayTraps = key => +key[0] ? [OV_ORD[3 - key[0]][0], OV_SIDE[key[1] === 'g' ? 'd' : 'g'][0]] : ['première', 'gauche'];
const OV_TURNS = [['zuo', 'Vous tournez à gauche.', 'Doble a la izquierda.'], ['you', 'Vous tournez à droite.', 'Doble a la derecha.'],
  ['up', 'Vous allez tout droit.', 'Siga derecho.'], ['🚸', 'Vous traversez la rue.', 'Cruce la calle.']];
const ME_HINT = '<div class="hint">Estás en el punto y miras hacia arriba.</div>';
function ovWayEx(mode){
  const key = pick(OV_WAYS), n = pick(OV_PLACES), w = wayFr(key), four = [key, ...shuffle(OV_WAYS.filter(x => x !== key)).slice(0, 3)];
  if (mode === 'turn'){
    const t = pick(OV_TURNS), ic = ARROW[t[0]] ? `<div class="route"><i>${ARROW[t[0]]}</i></div>` : `<div class="pic">${t[0]}</div>`;
    return fMC('f-way', '¿Qué dice la señal?', ic, OV_TURNS.map(x => oFr(x[1])), t[1], {h:t[1], p:'', es:t[2]}, {wide:true});
  }
  if (mode === 'map') return fMC('f-way', 'Mira el plano y elige el camino', wayMap(key, n.e) + ME_HINT + `<div class="ask">Un turista busca ${esc(n.es)}.</div>`,
    four.map(x => oFr(wayFr(x).fr, x)), key, {h:w.fr, p:'', es:w.es}, {wide:true});
  if (mode === 'listen') return fMC('f-way', 'Escucha y elige el plano', audioBtns(w.fr, true), four.map(x => ({v:x, html:wayMap(x, n.e, true)})), key, {h:w.fr, p:'', es:w.es}, {say:w.fr});
  if (mode === 'au'){
    const m = pick(OV_PLACES), fr = `Pardon, pour aller ${ovAu(m)} ?`, a = ovAu(m).slice(0, ovAu(m).length - m.h.length).trim();
    return fMC('f-way', 'Completa', `<div class="pic">${m.e}</div><div class="qtext han">Pardon, pour aller ___ ${esc(m.h)} ?</div>`, ['au', 'à la', "à l'", 'aux'].map(x => oFr(x)), a,
      {h:fr, p:'', es:`Disculpe, ¿para ir ${ovEsA(m.es)}?`});
  }
  if (mode === 'reply'){
    const qq = `Pardon, où est ${phrase(n)}, s'il vous plaît ?`;
    return fTiles('f-way', 'Responde mirando el plano', bub('Turista', qq) + wayMap(key, n.e) + ME_HINT, w.fr, w.es, [...wayTraps(key), 'tu'], [], {say:qq});
  }
  if (mode === 'sms'){
    const t = wayFr(key, true);
    return fTiles('f-way', 'SMS a un amigo', `<div class="ask">Tu amigo llega por la calle de abajo. Explícale cómo llegar a tu casa 🏠.</div>` + wayMap(key, '🏠') + ME_HINT,
      t.fr, t.es, [...wayTraps(key), 'vous']);
  }
  if (mode === 'speak') return fSpeak('f-way', w.es, w.fr, 'Explícalo en francés mirando el plano.');
  return fTiles('f-way', 'Tradúcelo al francés', fcue(w.es) + wayMap(key, n.e, true), w.fr, w.es, [...wayTraps(key), 'tu']);
}

/* ---------- fc5 · transportes ---------- */
ovWords('fc5', 'trans', [
  ['t_tra', 'le train', 'lë·trẽ', 'el tren', '🚆'], ['t_avi', "l'avion", 'la·viõ', 'el avión', '✈️'],
  ['t_bus', 'le bus', 'lë·büs', 'el bus', '🚌', 'La s final sí suena.'], ['t_voi', 'la voiture', 'la·vua·tür', 'el carro, el auto', '🚗'],
  ['t_met', 'le métro', 'lë·mé·tro', 'el metro', '🚇'], ['t_vel', 'le vélo', 'lë·vé·lo', 'la bicicleta', '🚲', 'Masculino: le vélo.'],
  ['t_pie', 'à pied', 'a·pié', 'a pie', '🚶'], ['t_tram', 'le tramway', 'lë·tram·uè', 'el tranvía', '🚊', 'También se dice le tram.']]);
FG('f-trans', 'fc5', 'transportes');
const OV_TRANS = [
  {h:'train', a:'le', p:'en', e:'🚆', by:'en tren', the:'el tren'}, {h:'avion', a:"l'", p:'en', e:'✈️', by:'en avión', the:'el avión'}, {h:'bus', a:'le', p:'en', e:'🚌', by:'en bus', the:'el bus'},
  {h:'voiture', a:'la', p:'en', e:'🚗', by:'en carro', the:'el carro'}, {h:'métro', a:'le', p:'en', e:'🚇', by:'en metro', the:'el metro'}, {h:'tramway', a:'le', p:'en', e:'🚊', by:'en tranvía', the:'el tranvía'},
  {h:'taxi', a:'le', p:'en', e:'🚕', by:'en taxi', the:'el taxi'}, {h:'vélo', a:'le', p:'à', e:'🚲', by:'en bicicleta', the:'la bicicleta'}, {h:'moto', a:'la', p:'à', e:'🏍️', by:'en moto', the:'la moto'},
  {h:'pied', a:null, p:'à', e:'🚶', by:'a pie'}];
const ovTr = h => OV_TRANS.find(t => t.h === h);
const byT = t => `${t.p} ${t.h}`;
const takeT = t => t.a === "l'" ? "l'" + t.h : t.a + ' ' + t.h;
// trips from a city like the one in the book exercise: which transport makes sense for each distance
// bad: the options that are clearly wrong for that distance (the bus for 500 m is not wrong, just odd, so it is left out)
const OV_TRIPS = [
  {to:'chez mon voisin', es:'a casa de mi vecino', d:'500 m', ok:['pied'], bad:['train', 'avion', 'métro']}, {to:'à la boulangerie', es:'a la panadería', d:'300 m', ok:['pied'], bad:['train', 'avion', 'métro']},
  {to:'au centre-ville', es:'al centro', d:'3 km', ok:['vélo', 'bus', 'métro', 'tramway'], bad:['train', 'avion']}, {to:"à l'université", es:'a la universidad', d:'5 km', ok:['bus', 'métro', 'vélo', 'tramway'], bad:['train', 'avion']},
  {to:'à Paris', es:'a París', d:'460 km', ok:['train', 'voiture'], bad:['pied', 'vélo', 'métro', 'tramway']}, {to:'à Madrid', es:'a Madrid', d:'1 300 km', ok:['avion'], bad:['pied', 'vélo', 'métro', 'tramway']},
  {to:'à Lima', es:'a Lima', d:'10 000 km', ok:['avion'], bad:['train', 'voiture', 'vélo', 'pied']}];
// where each transport takes you: nobody flies to work
const ovGoal = t => t.h === 'avion' ? ['à Madrid', 'a Madrid'] : t.h === 'train' ? ['à Paris', 'a París'] : ['au travail', 'al trabajo'];
function ovTransEx(mode){
  const t = pick(OV_TRANS), four = [t, ...others(OV_TRANS, t, 3, x => x.h)];
  const [gf, ge] = ovGoal(t);
  if (mode === 'pic') return fMC('f-trans', '¿Cómo va?', `<div class="pic">${t.e}</div><div class="qtext han">Je vais ${gf}…</div>`, four.map(x => oFr(byT(x))), byT(t),
    {h:`Je vais ${gf} ${byT(t)}.`, p:'', es:`Voy ${ge} ${t.by}.`});
  if (mode === 'prep') return fMC('f-trans', 'Completa: ¿en o à?', `<div class="pic">${t.e}</div><div class="qtext han">Je vais ${gf} ___ ${esc(t.h)}.</div>`, ['en', 'à', 'au', 'par'].map(x => oFr(x)), t.p,
    {h:`Je vais ${gf} ${byT(t)}.`, p:'', es:`Voy ${ge} ${t.by}.`});
  if (mode === 'prend'){
    const u = pick(OV_TRANS.filter(x => x.a)), fr = `Je prends ${takeT(u)}.`;
    return fMC('f-trans', 'Completa con prendre', `<div class="pic">${u.e}</div><div class="qtext han">Je prends ___ ${esc(u.h)}.</div>`, ['le', 'la', "l'", 'en'].map(x => oFr(x)), u.a,
      {h:fr, p:'', es:`Tomo ${u.the}.`});
  }
  if (mode === 'dist'){
    const tr = pick(OV_TRIPS), right = ovTr(pick(tr.ok)), wrong = shuffle(tr.bad).slice(0, 3).map(ovTr);
    const fr = `Pour aller ${tr.to}, ${right.h === 'pied' ? 'je vais à pied' : 'je prends ' + takeT(right)}.`;
    return fMC('f-trans', '¿Qué transporte tomas?', `<div class="ask">Vives en Lyon.</div><div class="qtext han">Pour aller ${esc(tr.to)}…</div><div class="hint">${esc(tr.d)}</div>`,
      [right, ...wrong].map(x => oFr(byT(x), x.h, `<small>${x.e}</small>`)), right.h, {h:fr, p:'', es:`Para ir ${tr.es} (${tr.d}), voy ${right.by}.`});
  }
  if (mode === 'listen'){
    const [P, E] = pron3(pick(['m', 'f'])), fr = `${P} va ${gf} ${byT(t)}.`;
    return fMC('f-trans', 'Escucha: ¿cómo va?', audioBtns(fr, true), four.map(x => oPic(x.e, x.h)), t.h, {h:fr, p:'', es:`${E} va ${ge} ${t.by}.`}, {say:fr});
  }
  const u = pick(OV_TRANS.filter(x => x.a)), tr = pick(OV_TRIPS.filter(x => !x.ok.includes('pied')));
  const [fr, es] = Math.random() < 0.5 ? [`Je vais ${gf} ${byT(t)}.`, `Voy ${ge} ${t.by}.`]
    : [`Pour aller ${tr.to}, je prends ${u.a === "l'" ? "l'|" + u.h : takeT(u)}.`, `Para ir ${tr.es}, tomo ${u.the}.`];
  if (mode === 'speak') return fSpeak('f-trans', es, fr);
  return fTiles('f-trans', 'Tradúcelo al francés', fcue(es), fr, es, ['en', 'à', 'le', 'la'].filter(x => !frChunks(fr).map(low).includes(x)).slice(0, 2));
}

/* ---------- fc6 · el metro ---------- */
ovWords('fc6', 'metro', [
  ['m_lig', 'la ligne', 'la·liñ', 'la línea'], ['m_sta', 'la station', 'la·sta·siõ', 'la estación (de metro)'],
  ['m_dir', 'la direction', 'la·di·rèk·siõ', 'la dirección, el sentido', null, 'En el metro, la dirección es la última estación de la línea.'],
  ['m_pre', 'prendre', 'prãdr', 'tomar', null, 'Irregular: je prends, tu prends, il prend.'],
  ['m_cha', 'changer', 'shã·zhé', 'cambiar (de línea)'],
  ['m_des', 'descendre', 'dé·sãdr', 'bajar (del metro o del bus)', null, 'Irregular: je descends, tu descends, il descend.'],
  ['m_pla', 'le plan', 'lë·plã', 'el plano'], ['m_arr', "l'arrêt", 'la·rè', 'el paradero (de bus)']]);
FG('f-metro', 'fc6', 'el metro');
// our own small network: three lines and two stations where you change
const OV_ST = {Gare:[22, 100], Marché:[82, 100], Mairie:[142, 100], Opéra:[212, 100], Aéroport:[282, 100], Université:[142, 24], Musée:[142, 148], Stade:[142, 190],
  Parc:[212, 24], Hôpital:[248, 148], Plage:[282, 190]};
// where each label goes: [dx, dy, anchor]
const OV_LBL = {Gare:[0, 17, 'middle'], Marché:[0, 17, 'middle'], Mairie:[-7, -9, 'end'], Opéra:[8, -9, 'start'], Aéroport:[12, 17, 'end'], Université:[-9, 4, 'end'],
  Musée:[9, 4, 'start'], Stade:[9, 4, 'start'], Parc:[9, 4, 'start'], Hôpital:[9, 4, 'start'], Plage:[-9, 4, 'end']};
const OV_LINES = [{n:1, c:'#E8590C', st:['Gare', 'Marché', 'Mairie', 'Opéra', 'Aéroport']}, {n:2, c:'#1C7ED6', st:['Université', 'Mairie', 'Musée', 'Stade']},
  {n:3, c:'#2F9E44', st:['Parc', 'Opéra', 'Hôpital', 'Plage']}];
Object.keys(OV_ST).forEach(x => FR_NAMES.add(x));
function metroMap(a, b){
  const lines = OV_LINES.map(l => `<polyline points="${l.st.map(s => OV_ST[s].join(',')).join(' ')}" fill="none" stroke="${l.c}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`).join('');
  // line numbers: above Gare, right of Université, left of Parc
  const badges = OV_LINES.map(l => { const [x, y] = OV_ST[l.st[0]]; const [bx, by] = l.n === 1 ? [x, y - 16] : l.n === 2 ? [x + 18, y] : [x - 18, y]; return `<circle cx="${bx}" cy="${by}" r="8" fill="${l.c}"/><text x="${bx}" y="${by + 0.5}" class="mt-n" text-anchor="middle" dominant-baseline="central">${l.n}</text>`; }).join('');
  const stations = Object.keys(OV_ST).map(s => {
    const [x, y] = OV_ST[s], [dx, dy, an] = OV_LBL[s], hot = s === a || s === b, change = s === 'Mairie' || s === 'Opéra';
    return `<circle cx="${x}" cy="${y}" r="${change ? 6 : 4.5}" class="mt-s${s === a ? ' a' : s === b ? ' b' : ''}"/><text x="${x + dx}" y="${y + dy}" text-anchor="${an}" dominant-baseline="central" class="mt-l${hot ? ' hot' : ''}">${s === a ? '★ ' : ''}${s}${s === b ? ' 🏁' : ''}</text>`;
  }).join('');
  return `<svg class="metro" viewBox="0 0 322 212" role="img" aria-label="Plano del metro"><rect width="322" height="212" rx="12" class="mt-bg"/>${lines}${badges}${stations}</svg>`;
}
const linesOf = s => OV_LINES.filter(l => l.st.includes(s));
// at most one change; lines 2 and 3 do not meet, so those trips are skipped
function ovTrip(a, b){
  for (const l of linesOf(a)) if (l.st.includes(b)) return [{l, from:a, to:b}];
  for (const l1 of linesOf(a)) for (const l2 of linesOf(b)){ const x = l1.st.find(s => l2.st.includes(s)); if (x && x !== a && x !== b) return [{l:l1, from:a, to:x}, {l:l2, from:x, to:b}]; }
  return null;
}
const dirOf = g => g.l.st.indexOf(g.to) > g.l.st.indexOf(g.from) ? g.l.st[g.l.st.length - 1] : g.l.st[0];
function pickTrip(legs){
  for (;;){ const [a, b] = shuffle(Object.keys(OV_ST)), t = ovTrip(a, b); if (t && (!legs || t.length === legs)) return {a, b, t}; }
}
function tripSteps(trip){
  const out = [];
  trip.t.forEach((g, k) => {
    if (k) out.push({fr:`Tu changes à la station ${g.from}.`, es:`Cambias en la estación ${g.from}.`});
    out.push({fr:`Tu prends la ligne ${g.l.n}, direction ${dirOf(g)}.`, es:`Tomas la línea ${g.l.n}, dirección ${dirOf(g)}.`});
  });
  out.push({fr:`Tu descends à la station ${trip.b}.`, es:`Bajas en la estación ${trip.b}.`});
  return out;
}
const tripHead = tr => `<div class="ask">De <b>${esc(tr.a)}</b> ★ a <b>${esc(tr.b)}</b> 🏁</div>` + metroMap(tr.a, tr.b);
function ovMetroEx(mode){
  if (mode === 'dir'){
    const tr = pickTrip(), g = tr.t[0], right = `ligne ${g.l.n}, direction ${dirOf(g)}`;
    const all = OV_LINES.flatMap(l => [l.st[0], l.st[l.st.length - 1]].map(d => `ligne ${l.n}, direction ${d}`));
    const near = all.filter(x => x !== right && x.startsWith(`ligne ${g.l.n}`)), rest = shuffle(all.filter(x => x !== right && !near.includes(x)));
    const steps = tripSteps(tr);
    return fMC('f-metro', 'Mira el plano: ¿qué tomas primero?', tripHead(tr) + '<div class="qtext han">Tu prends la…</div>', [right, ...near, ...rest].slice(0, 4).map(x => oFr(x)), right,
      {h:steps[0].fr, p:'', es:steps[0].es}, {wide:true});
  }
  if (mode === 'change'){
    const tr = pickTrip(2), x = tr.t[1].from, wrong = shuffle(Object.keys(OV_ST).filter(s => s !== x && s !== tr.a && s !== tr.b)).slice(0, 3);
    return fMC('f-metro', '¿Dónde cambias de línea?', tripHead(tr) + '<div class="qtext han">Tu changes à la station…</div>', [x, ...wrong].map(s => oFr(s)), x,
      {h:`Tu changes à la station ${x}.`, p:'', es:`Cambias en la estación ${x}.`});
  }
  if (mode === 'order'){
    const tr = pickTrip(2), steps = tripSteps(tr), g = tr.t[0];
    const other = g.l.st[0] === dirOf(g) ? g.l.st[g.l.st.length - 1] : g.l.st[0];
    const trap = `Tu prends la ligne ${g.l.n}, direction ${other}.`;
    return {t:'tiles', item:'f-metro', kind:'Ordena el itinerario', q:tripHead(tr) + '<div class="hint">Una de las fichas sobra.</div>',
      bank:shuffle([...steps.map(s => s.fr), trap]).map(h => ({h, p:''})), answer:[steps.map(s => s.fr).join(' ')], rev:{h:steps.map(s => s.fr).join(' '), p:'', es:steps.map(s => s.es).join(' ')}};
  }
  if (mode === 'listen'){
    const tr = pickTrip(), steps = tripSteps(tr), say = steps.map(s => s.fr).join(' ');
    const wrong = shuffle(Object.keys(OV_ST).filter(s => s !== tr.a && s !== tr.b)).slice(0, 3);
    return fMC('f-metro', 'Escucha: ¿a qué estación llegas?', `<div class="ask">Sales de <b>${esc(tr.a)}</b> ★</div>` + metroMap(tr.a, null) + audioBtns(say), [tr.b, ...wrong].map(s => oFr(s)), tr.b,
      {h:say, p:'', es:steps.map(s => s.es).join(' ')}, {say});
  }
  const tr = pickTrip(), st = pick(tripSteps(tr));
  if (mode === 'speak') return fSpeak('f-metro', st.es, st.fr);
  return fTiles('f-metro', 'Tradúcelo al francés', fcue(st.es), st.fr.replace(/ligne (\d)/, 'ligne_$1'), st.es, ['descends', 'prends', 'changes', 'le'].filter(x => !low(st.fr).includes(x)).slice(0, 2));
}

/* ---------- fc7 · quel, quelle, quels, quelles ---------- */
ovWords('fc7', 'q', [
  ['q_ou', 'où', 'u', 'dónde', null, 'Con tilde. Sin tilde, ou significa «o».'],
  ['q_com', 'comment', 'ko·mã', 'cómo'],
  ['q_adr', "l'adresse", 'la·drès', 'la dirección (de una casa)', null, 'Una sola d y dos s: adresse.'],
  ['q_loin', "c'est loin", 'sè·luẽ', 'está lejos'],
  ['q_pres', "c'est près", 'sè·prè', 'está cerca']]);
FG('f-quel', 'fc7', 'quel, quelle, quels, quelles');
// # marks where quel goes; g: m, f, mp, fp
const OV_Q = [
  {n:'quartier', g:'m', q:'Tu habites dans # quartier ?', es:'¿En qué barrio vives?', a:'Dans le quartier Saint-Michel.'},
  {n:'bus', g:'m', q:'Tu prends # bus ?', es:'¿Qué bus tomas?', a:'Le 23.'},
  {n:'arrêt', g:'m', q:'Je descends à # arrêt ?', es:'¿En qué paradero bajo?', a:"À l'arrêt Opéra."},
  {n:'musée', g:'m', q:'Vous visitez # musée ?', es:'¿Qué museo visitan?', a:'Le musée Picasso.'},
  {n:'ligne', g:'f', q:'Tu prends # ligne ?', es:'¿Qué línea tomas?', a:'La ligne 4.'},
  {n:'station', g:'f', q:'Tu descends à # station ?', es:'¿En qué estación bajas?', a:'À la station Mairie.'},
  {n:'ville', g:'f', q:'Tu travailles dans # ville ?', es:'¿En qué ciudad trabajas?', a:'À Lyon.'},
  {n:'rue', g:'f', q:'Vous cherchez # rue ?', es:'¿Qué calle busca?', a:'La rue Voltaire.'},
  {n:'adresse', g:'f', q:'# est ton adresse ?', es:'¿Cuál es tu dirección?', a:'Douze, rue Molière.'},
  {n:'transports', g:'mp', q:'Tu utilises # transports ?', es:'¿Qué medios de transporte usas?', a:'Le bus et le métro.'},
  {n:'quartiers', g:'mp', q:'Vous aimez # quartiers ?', es:'¿Qué barrios le gustan?', a:'Le Marais et Montmartre.'},
  {n:'langues', g:'fp', q:'Tu parles # langues ?', es:'¿Qué idiomas hablas?', a:'Espagnol et français.'},
  {n:'stations', g:'fp', q:'Vous descendez à # stations ?', es:'¿En qué estaciones bajan?', a:'À Mairie et à Opéra.'},
  {n:'rues', g:'fp', q:'Elles tournent dans # rues ?', es:'¿En qué calles doblan?', a:'Rue Voltaire et rue Molière.'}];
['Saint-Michel', 'Lyon', 'Voltaire', 'Marais', 'Montmartre', 'Opéra'].forEach(x => FR_NAMES.add(x));
const OV_QUEL = {m:'quel', f:'quelle', mp:'quels', fp:'quelles'};
const qFill = (x, w = OV_QUEL[x.g]) => { const t = x.q.replace('#', w); return t[0].toUpperCase() + t.slice(1); };
// statements and questions that differ only in the voice
const OV_TONE = [['Tu prends le bus', 'Tomas el bus'], ['Vous habitez ici', 'Usted vive aquí'], ["C'est loin", 'Está lejos'], ['Elle travaille à la mairie', 'Ella trabaja en la municipalidad'],
  ['Il y a une pharmacie', 'Hay una farmacia'], ['Tu descends à Opéra', 'Bajas en Opéra']];
function ovQuelEx(mode){
  const x = pick(OV_Q), fr = qFill(x), rev = {h:fr, p:'', es:x.es};
  if (mode === 'form'){
    const gap = x.q.replace('#', '___');
    return fMC('f-quel', 'Completa con quel', `<div class="qtext han">${esc(gap[0].toUpperCase() + gap.slice(1))}</div><div class="hint">${esc(x.es)}</div>`, Object.values(OV_QUEL).map(w => oFr(w)), OV_QUEL[x.g], rev);
  }
  if (mode === 'match'){
    const rows = shuffle(Object.keys(OV_QUEL).map(g => pick(OV_Q.filter(y => y.g === g && y.q.startsWith('#') === false))));
    return {t:'match', item:'f-quel', kind:'Relaciona cada palabra con su quel', q:'<div class="hint">Las cuatro formas suenan igual: piensa en el género y el número.</div>',
      left:rows.map(r => ({v:r.n, a:OV_QUEL[r.g], say:r.n, html:`<span class="han">${esc(r.n)}</span>`})), right:Object.values(OV_QUEL).map(w => ({v:w, html:`<span class="han">${esc(w)}</span>`})),
      rev:{h:rows.map(r => `${OV_QUEL[r.g]} ${r.n}`).join(' · '), p:'', es:'quel (m.) · quelle (f.) · quels (m. pl.) · quelles (f. pl.)'}};
  }
  if (mode === 'listen'){
    const opts = [x, ...shuffle(OV_Q.filter(y => y.n !== x.n && y.a !== x.a)).slice(0, 3)];
    return fMC('f-quel', 'Escucha la pregunta y elige la respuesta', audioBtns(fr, true), opts.map(y => oFr(y.a)), x.a, {h:`${fr} — ${x.a}`, p:'', es:x.es}, {say:fr});
  }
  if (mode === 'tone'){
    const [s, e] = pick(OV_TONE), q = Math.random() < 0.5, say = s + (q ? ' ?' : '.');
    return fMC('f-quel', 'Escucha: ¿la voz sube o baja?', audioBtns(say, true), [oEs('↗ Sube: es una pregunta', 'q'), oEs('↘ Baja: es una afirmación', 's')], q ? 'q' : 's',
      {h:say, p:'', es:q ? `¿${e}?` : `${e}.`}, {say});
  }
  if (mode === 'speak') return fSpeak('f-quel', x.es, fr);
  const wrong = Object.values(OV_QUEL).filter(w => w !== OV_QUEL[x.g]);
  const parts = x.q.replace(' ?', '').split(' # ');
  const cue = x.q.startsWith('#') ? `${x.n} / ${x.q.slice(2).replace(' ?', '').replace(/ton |ta /, '')}` : `${parts[0]} / ${x.n}`;
  return fTiles('f-quel', 'Escribe la pregunta', `<div class="qtext han">${esc(cue)}</div><div class="hint">${esc(x.es)}</div>`, fr, x.es, shuffle(wrong).slice(0, 2));
}

/* ---------- fc8 · más profesiones ---------- */
ovWords('fc8', 'job', [
  ['p_inf', 'infirmier', 'ẽ·fir·mié', 'enfermero', '💉', 'Femenino: infirmière (ẽ·fir·mièr).'],
  ['p_coi', 'coiffeur', 'kua·för', 'peluquero', '💇', 'Femenino: coiffeuse (kua·föz).'],
  ['p_ser', 'serveur', 'sèr·vör', 'mesero, mozo', '🍽️', 'Femenino: serveuse.'],
  ['p_ani', 'animateur', 'a·ni·ma·tör', 'animador', '🎉', 'Femenino: animatrice.'],
  ['p_ing', 'ingénieur', 'ẽ·zhé·niör', 'ingeniero', '👷', 'Femenino: ingénieure; suena igual.'],
  ['p_mus', 'musicien', 'mü·zi·siẽ', 'músico', '🎻', 'Femenino: musicienne (mü·zi·sièn).'],
  ['p_pho', 'photographe', 'fo·to·graf', 'fotógrafo / fotógrafa', '📷', 'Igual en femenino.'],
  ['p_pha', 'pharmacien', 'far·ma·siẽ', 'farmacéutico', '💊', 'Femenino: pharmacienne.'],
  ['p_fac', 'facteur', 'fak·tör', 'cartero', '📬', 'Femenino: factrice.'],
  ['p_bou', 'boulanger', 'bu·lã·zhé', 'panadero', '🧑‍🍳', 'Femenino: boulangère (bu·lã·zhèr).']]);
FG('f-job2', 'fc8', 'más profesiones');
// same: masculine and feminine sound the same; at: where they work
const OV_JOBS = [
  {m:'infirmier', f:'infirmière', em:'enfermero', ef:'enfermera', e:'💉', at:'hôpital'}, {m:'coiffeur', f:'coiffeuse', em:'peluquero', ef:'peluquera', e:'💇'},
  {m:'serveur', f:'serveuse', em:'mesero', ef:'mesera', e:'🍽️', at:'restaurant'}, {m:'animateur', f:'animatrice', em:'animador', ef:'animadora', e:'🎉'},
  {m:'ingénieur', f:'ingénieure', em:'ingeniero', ef:'ingeniera', e:'👷', same:1}, {m:'musicien', f:'musicienne', em:'músico', ef:'música', e:'🎻', at:'théâtre'},
  {m:'photographe', f:'photographe', em:'fotógrafo', ef:'fotógrafa', e:'📷', same:1}, {m:'pharmacien', f:'pharmacienne', em:'farmacéutico', ef:'farmacéutica', e:'💊', at:'pharmacie'},
  {m:'facteur', f:'factrice', em:'cartero', ef:'cartera', e:'📬', at:'poste'}, {m:'boulanger', f:'boulangère', em:'panadero', ef:'panadera', e:'🥖', at:'boulangerie'},
  {m:'professeur', f:'professeure', em:'profesor', ef:'profesora', e:'🧑‍🏫', same:1, at:'école'}, {m:'bibliothécaire', f:'bibliothécaire', em:'bibliotecario', ef:'bibliotecaria', e:'📚', same:1, at:'bibliothèque'},
  {m:'journaliste', f:'journaliste', em:'periodista', ef:'periodista', e:'📰', same:1}, {m:'avocat', f:'avocate', em:'abogado', ef:'abogada', e:'⚖️'},
  {m:'vendeur', f:'vendeuse', em:'vendedor', ef:'vendedora', e:'🛍️'}];
const OV_NM = ['Lucas', 'Henry', 'Yan', 'Hugo', 'Karim', 'Paulo', 'Omar'], OV_NF = ['Maïté', 'Nathalie', 'Adeline', 'Inès', 'Léa', 'Sofia', 'Camille'];
['Lucas', 'Henry', 'Yan', 'Hugo', 'Karim', 'Paulo', 'Omar', 'Maïté', 'Nathalie', 'Adeline', 'Inès', 'Léa', 'Sofia', 'Camille'].forEach(x => FR_NAMES.add(x));
// feminine forms a learner might invent: they come from applying the wrong rule
const fakeFem = m => uniqBy([m + 'e', m.replace(/eur$/, 'euse'), m.replace(/teur$/, 'trice'), m.replace(/ier$/, 'ière'), m.replace(/ien$/, 'ienne'), m.replace(/er$/, 'ère'), m.replace(/eur$/, 'rice'), m + 'esse', m.replace(/e?$/, 'ine')], x => x);
function ovJob2Ex(mode){
  const x = pick(OV_JOBS), g = pick(['m', 'f']), [P, E] = pron3(g), jes = g === 'f' ? x.ef : x.em, fr = `${P} est ${x[g]}.`, es = `${E} es ${jes}.`;
  if (mode === 'pic'){
    const opts = uniqBy([x[g], x[g === 'f' ? 'm' : 'f'], ...shuffle(OV_JOBS.filter(j => j !== x)).map(j => j[g])], t => t).slice(0, 4);
    return fMC('f-job2', '¿Qué profesión es?', `<div class="pic">${g === 'f' ? '👩' : '👨'}${x.e}</div><div class="qtext han">${P} est…</div>`, opts.map(t => oFr(t)), x[g], {h:fr, p:'', es});
  }
  if (mode === 'agree'){
    const y = pick(OV_JOBS.filter(j => j.m !== j.f)), name = pick(OV_NF), opts = uniqBy([y.f, y.m, ...shuffle(fakeFem(y.m).filter(t => t !== y.f && t !== y.m))], t => t).slice(0, 4);
    return fMC('f-job2', 'Elige la forma correcta', `<div class="pic">👩${y.e}</div><div class="qtext han">${esc(name)} est ___.</div>`, opts.map(t => oFr(t)), y.f,
      {h:`${name} est ${y.f}.`, p:'', es:`${name} es ${y.ef}.`});
  }
  if (mode === 'sound'){
    const say = x[g], ans = x.same ? 'both' : g;
    return fMC('f-job2', 'Escucha: ¿masculino, femenino o los dos?', audioBtns(say, true), [oEs('Masculino', 'm'), oEs('Femenino', 'f'), oEs('Los dos: suenan igual', 'both')], ans,
      {h:x.same ? `${x.m} · ${x.f}` : say, p:'', es:x.same ? `Suena igual en masculino y femenino (${x.em} / ${x.ef}).` : `${g === 'f' ? 'Femenino' : 'Masculino'}: ${jes}.`}, {say});
  }
  if (mode === 'place'){
    const rows = shuffle(OV_JOBS.filter(j => j.at)).slice(0, 4).map(j => ({j, n:ovPlace(j.at)}));
    return {t:'match', item:'f-job2', kind:'¿Dónde trabaja?', q:'<div class="hint">Relaciona cada profesión con su lugar de trabajo.</div>',
      left:rows.map(r => ({v:r.j.m, a:ovAu(r.n), say:r.j.m, html:`<span class="han">${esc(r.j.m)}</span>`})), right:shuffle(rows).map(r => ({v:ovAu(r.n), html:`<span class="han">${esc(ovAu(r.n))}</span>`})),
      rev:{h:rows.map(r => `${r.j.m} · ${ovAu(r.n)}`).join(' · '), p:'', es:rows.map(r => `${r.j.em}: ${r.n.es}`).join(' · ')}};
  }
  if (mode === 'listen'){
    const four = [x, ...others(OV_JOBS, x, 3, j => j.e)];
    return fMC('f-job2', 'Escucha: ¿qué hace?', audioBtns(fr, true), four.map(j => oPic(j.e, j.m)), x.m, {h:fr, p:'', es}, {say:fr});
  }
  const y = pick(OV_JOBS.filter(j => j.at)), n = ovPlace(y.at), yj = y[g], au = ovAu(n);
  const fr2 = `${P} est ${yj} et ${P.toLowerCase()} travaille ${au.replace("à l'", "à l'|")}.`, es2 = `${E} es ${g === 'f' ? y.ef : y.em} y trabaja en ${n.es}.`;
  if (mode === 'speak') return fSpeak('f-job2', es2, frText(fr2));
  return fTiles('f-job2', 'Tradúcelo al francés', fcue(es2) + '<div class="hint">Sin artículo delante de la profesión.</div>', fr2, es2,
    [g === 'f' ? 'une' : 'un', y.m !== y.f ? y[g === 'f' ? 'm' : 'f'] : 'travailles', au.startsWith('au') ? 'à_le' : 'au'].filter(t => !frChunks(fr2).includes(t)));
}

/* ---------- fc9 · mi lugar preferido ---------- */
ovWords('fc9', 'fav', [
  ['f_lieu', 'mon lieu préféré', 'mõ·liö·pré·fé·ré', 'mi lugar preferido'],
  ['f_ado', "j'adore", 'zha·dòr', 'me encanta'],
  ['f_mag', 'magnifique', 'ma·ñi·fik', 'precioso, magnífico'],
  ['f_cen', 'le centre-ville', 'lë·sã·trë·vil', 'el centro de la ciudad'],
  ['f_his', 'historique', 'is·to·rik', 'histórico'],
  ['f_jar', 'le jardin', 'lë·zhar·dẽ', 'el jardín', '🌷'],
  ['f_sms', 'le SMS', 'lë·è·sè·mès', 'el mensaje de texto', '📱']]);
FG('f-forum', 'fc9', 'leer un foro');
const OV_FAV = ['parc', 'bibliothèque', 'musée', 'théâtre', 'place', 'piscine', 'restaurant', 'église'];
function ovPost(){
  const g = pick(['m', 'f']), name = pick(g === 'f' ? OV_NF : OV_NM), j = pick(OV_JOBS), n = ovPlace(pick(OV_FAV)), t = pick(OV_TRANS.filter(x => x.h !== 'avion'));
  const text = `${pick(['Bonjour', 'Salut'])}, moi, c'est ${name}. Je suis ${j[g]}. Mon lieu préféré dans la ville, c'est ${phrase(n)}${n.name ? ' ' + n.name : ''} : c'est magnifique ! Je vais au travail ${byT(t)}.`;
  return {g, name, j, n, t, text};
}
function forumBox(posts){
  return `<div class="forum"><div class="fhead"><small>forum-ville.fr</small><b>Quel est votre lieu préféré dans la ville ?</b></div>${posts.map(p => `<div class="post"><span class="av">${p.g === 'f' ? '👩' : '👨'}</span><p class="han">${esc(p.text)}</p></div>`).join('')}</div>`;
}
function ovForumEx(mode){
  if (mode === 'read'){
    let posts; do { posts = [ovPost(), ovPost(), ovPost()]; } while (new Set(posts.map(p => p.name)).size < 3 || new Set(posts.map(p => p.n.h)).size < 3 || new Set(posts.map(p => p.j.m)).size < 3 || new Set(posts.map(p => p.t.h)).size < 3);
    const p = pick(posts), what = pick(['job', 'place', 'trans']), box = forumBox(posts);
    if (what === 'job'){
      const opts = uniqBy([...posts.map(q => q.j[q.g]), ...shuffle(OV_JOBS).map(j => j[p.g])], t => t).slice(0, 4);
      return fMC('f-forum', 'Lee el foro y responde', box + `<div class="ask">Quelle est la profession de ${esc(p.name)} ?</div>`, opts.map(t => oFr(t)), p.j[p.g],
        {h:`${p.name} est ${p.j[p.g]}.`, p:'', es:`${p.name} es ${p.g === 'f' ? p.j.ef : p.j.em}.`});
    }
    if (what === 'place'){
      const opts = uniqBy([...posts.map(q => q.n), ...shuffle(OV_PLACES)], n => n.h).slice(0, 4);
      return fMC('f-forum', 'Lee el foro y responde', box + `<div class="ask">Quel est le lieu préféré de ${esc(p.name)} ?</div>`, opts.map(n => oFr(phrase(n))), phrase(p.n),
        {h:`C'est ${phrase(p.n)}.`, p:'', es:`Su lugar preferido es ${p.n.es}.`});
    }
    const opts = uniqBy([...posts.map(q => q.t), ...shuffle(OV_TRANS)], t => t.h).slice(0, 4);
    return fMC('f-forum', 'Lee el foro y responde', box + `<div class="ask">Quel transport ${esc(p.name)} utilise pour aller au travail ?</div>`, opts.map(t => oPic(t.e, t.h)), p.t.h,
      {h:`${p.name} va au travail ${byT(p.t)}.`, p:'', es:`${p.name} va al trabajo ${p.t.by}.`});
  }
  const n = ovPlace(pick(OV_FAV)), fr = `Mon lieu préféré, c'est ${tilePhrase(n)}.`, es = `Mi lugar preferido es ${n.es}.`;
  if (mode === 'speak') return fSpeak('f-forum', es, frText(fr));
  if (mode === 'sms') return ovWayEx('sms');
  return fTiles('f-forum', 'Escribe tu mensaje en el foro', `<div class="pic">${n.e}</div>` + fcue(es), fr, es, ['ma', 'mes', ARTS.find(a => a !== art(n))]);
}

/* ---------- frases modelo ---------- */
FS('fc2', [
  ['fs_v1', 'Il y a des musées dans le quartier.', 'Hay museos en el barrio.', ['les', 'un']],
  ['fs_v2', "Où est la poste, s'il_vous_plaît ?", '¿Dónde está el correo, por favor?', ['le', 'à']]]);
FS('fc4', [
  ['fs_v3', "Pardon, pour aller au musée, s'il_vous_plaît ?", 'Disculpe, ¿para ir al museo, por favor?', ['à', 'le']],
  ['fs_v4', 'Vous allez tout droit et vous tournez à gauche.', 'Siga derecho y doble a la izquierda.', ['droite', 'tu']]]);
FS('fc5', [
  ['fs_v5', 'Je vais au travail à vélo.', 'Voy al trabajo en bicicleta.', ['en', 'le']],
  ['fs_v6', "Pour aller à Madrid, je prends l'|avion.", 'Para ir a Madrid, tomo el avión.', ['en', 'le']]]);
FS('fc6', [
  ['fs_v7', 'Tu prends la ligne_2, direction Stade.', 'Tomas la línea 2, dirección Stade.', ['le', 'descends']],
  ['fs_v8', 'Tu descends à la station Musée.', 'Bajas en la estación Musée.', ['prends', 'au']]]);
FS('fc7', [
  ['fs_v9', 'Tu prends quelle ligne ?', '¿Qué línea tomas?', ['quel', 'quels']],
  ['fs_v10', 'Tu habites dans quel quartier ?', '¿En qué barrio vives?', ['quelle', 'où']]]);
FS('fc9', [
  ['fs_v11', "Mon lieu préféré, c'est la bibliothèque.", 'Mi lugar preferido es la biblioteca.', ['ma', 'le']],
  ['fs_v12', "J'|adore le théâtre de la ville.", 'Me encanta el teatro de la ciudad.', ['la', 'adores']]]);
['Madrid', 'Stade', 'Musée'].forEach(x => FR_NAMES.add(x));

/* ---------- generators, modes and levels ---------- */
Object.assign(GEN, {'f-ville':ovVilleEx, 'f-indef':ovIndefEx, 'f-er':ovErEx, 'f-way':ovWayEx, 'f-trans':ovTransEx, 'f-metro':ovMetroEx, 'f-quel':ovQuelEx, 'f-job2':ovJob2Ex, 'f-forum':ovForumEx});
Object.assign(GEN_MODES, {'f-ville':['pic','riddle','listen','build'], 'f-indef':['art','match','listen','build','art'], 'f-er':['form','match','sound','type','build'],
  'f-way':['turn','map','au','reply','listen'], 'f-trans':['pic','prep','dist','prend','listen','build'], 'f-metro':['dir','order','change','listen','build'],
  'f-quel':['form','match','build','listen','tone'], 'f-job2':['pic','agree','sound','place','build','listen'], 'f-forum':['read','read','post','sms','read']});
Object.assign(L2_GEN, {'f-ville':['listen','guess','riddle'], 'f-indef':['listen','art','build'], 'f-er':['type','sound','listen'], 'f-way':['listen','map','reply','au'],
  'f-trans':['listen','prep','dist','build'], 'f-metro':['listen','dir','order'], 'f-quel':['listen','form','build','tone'], 'f-job2':['listen','sound','agree','build'], 'f-forum':['read','read','post','sms']});
Object.assign(L3, {
  fc1: () => [...mix(ovVilleEx, [['pic',3],['riddle',3],['guess',3],['listen',3],['build',2],['speak',2]])],
  fc2: () => [...mix(ovIndefEx, [['art',4],['listen',4],['match',2],['build',3],['speak',2]]), ...sentProd('fc2', 1)],
  fc3: () => mix(ovErEx, [['form',2],['type',4],['match',2],['sound',3],['build',3],['listen',2],['speak',2]]),
  fc4: () => [...mix(ovWayEx, [['turn',2],['map',3],['listen',3],['au',2],['reply',3],['sms',2],['speak',2]]), ...sentProd('fc4', 1)],
  fc5: () => [...mix(ovTransEx, [['pic',2],['prep',3],['prend',2],['dist',3],['listen',2],['build',3],['speak',2]]), ...sentProd('fc5', 1)],
  fc6: () => mix(ovMetroEx, [['dir',3],['change',2],['order',3],['listen',3],['build',2],['speak',2]]),
  fc7: () => [...mix(ovQuelEx, [['form',3],['match',2],['build',4],['listen',3],['tone',2],['speak',2]]), ...sentProd('fc7', 1)],
  fc8: () => mix(ovJob2Ex, [['pic',2],['agree',3],['sound',3],['place',2],['build',3],['listen',2],['speak',2]]),
  fc9: () => [...mix(ovForumEx, [['read',5],['post',3],['sms',2],['speak',2]]), ...mix(ovVilleEx, [['guess',2]]), ...mix(ovMetroEx, [['order',1]])]
});

/* ---------- units ---------- */
const PREV = t => `<b>Repaso:</b> ${t}`;
U('fc1', 'fc', 'Ville', 'La ciudad', 'Pardon, où est la poste ?', 'Los lugares de la ciudad', [
  R('Vocabulario', 'Cada lugar con su artículo', [['le musée · le théâtre · le parc', 'masculinos (musée termina en -ée y es masculino)'], ['la poste · la banque · la gare', 'femeninos'], ["l'église · l'école · l'hôpital", "delante de vocal o h: l'"]],
    'Aprende cada lugar con su artículo: el género no siempre coincide con el español (<b>la</b> banque = <b>el</b> banco). ' + PREV("le, la, l' y les de la unidad 1 (J'aime la musique).")),
  R('Adivinanzas', 'On y… = allí uno…', [['On y mange.', 'Allí se come: le restaurant'], ['On y achète du pain.', 'Allí se compra pan: la boulangerie'], ['On y prend le train.', 'Allí se toma el tren: la gare']],
    'En esta unidad hay adivinanzas así. No hace falta entender cada palabra: busca el verbo (mange, achète, prend) y piensa en el lugar.')]);
U('fc2', 'fc', 'Un', 'Un, une, des', 'Il y a un musée ?', 'Artículos indefinidos y definidos', [
  R('Los artículos', 'Un museo o el museo', [['un musée · une église', 'uno cualquiera, o la primera vez que lo mencionas'], ['des musées', 'plural: unos museos'], ['le musée Picasso', 'uno concreto, que ya conocemos'], ['la place Bellecour', 'con nombre propio va el definido']],
    'Funciona como en español (un museo, el museo), con una diferencia grande: en plural el francés <b>siempre</b> pone des. «Hay museos» = Il y a <b>des</b> musées. Nunca «Il y a musées».',
    [['indefinido', 'un · une · des'], ['definido', "le · la · l' · les"]]),
  R('Al oído', 'le · les · des', [['le musée', 'lë: una e corta y relajada'], ['les musées', 'lé: e cerrada, como sonriendo'], ['des musées', 'dé'], ['un musée · une église', 'ẽ (nasal) · ün']],
    'Musée y musées suenan igual: el artículo es lo único que te dice si es uno o varios. Por eso en esta unidad escuchas y eliges el artículo.')], ['fs_v1']);
U('fc3', 'fc', '-er', 'Verbos en -er', 'Nous arrivons à la gare.', 'El presente de los verbos regulares', [
  R('Conjugación', 'Raíz + terminación', [['je parle', 'yo hablo'], ['tu parles', 'tú hablas'], ['il · elle parle', 'él · ella habla'], ['nous parlons', 'nosotros hablamos'], ['vous parlez', 'usted habla · ustedes hablan'], ['ils · elles parlent', 'ellos · ellas hablan']],
    'Quita -er del infinitivo y agrega la terminación. Casi todos los verbos franceses son así: parler, habiter, tourner, chercher, visiter… ' + PREV('être y avoir (unidad 1) son irregulares; estos no.'),
    [['raíz', 'parl-'], ['terminaciones', '-e · -es · -e · -ons · -ez · -ent']]),
  R('Pronunciación', 'Seis formas, tres sonidos', [['je parle · tu parles · ils parlent', 'suenan igual: «parl»'], ['nous parlons', '«par·lõ»'], ['vous parlez', '«par·lé»']],
    "La -s y la -ent del final no suenan. Delante de vocal o h: <b>j'</b>habite, <b>j'</b>arrive. Y con ils, la s se une a la vocal: ils habitent suena «il·za·bit».")]);
U('fc4', 'fc', 'Rue', 'Indicar el camino', 'Vous tournez à gauche.', 'Preguntar y explicar cómo llegar', [
  R('Indicar el camino', 'Las instrucciones', [['Vous allez tout droit.', 'Siga derecho.'], ['Vous tournez à gauche.', 'Doble a la izquierda.'], ['Vous prenez la deuxième rue à droite.', 'Tome la segunda calle a la derecha.'], ['Vous traversez la place.', 'Cruce la plaza.'], ['Vous passez devant la poste.', 'Pase por delante del correo.']],
    'Para indicar el camino se usa el presente (vous tournez) o el imperativo (tournez). Ojo: <b>droite</b> = derecha; <b>tout droit</b> = derecho, recto.'),
  R('Contracciones', 'à + le = au', [['Pour aller au musée ?', 'à + le → au'], ['Pour aller à la poste ?', 'à + la: no cambia'], ["Pour aller à l'église ?", "à + l': no cambia"], ['Pour aller aux toilettes ?', 'à + les → aux']],
    'Es como «a + el = al» en español, pero en francés también pasa con les. ' + PREV('ya lo viste con los países: au Pérou, aux États-Unis.')),
  R('El plano', 'Cómo leer los planos', [['●', 'tú, mirando hacia arriba'], ['la première rue', 'la primera calle que cruzas'], ['la deuxième rue', 'la segunda']],
    'En los ejercicios con plano, empiezas en el punto de abajo y caminas hacia arriba. Izquierda y derecha son las tuyas.')], ['fs_v3', 'fs_v4']);
U('fc5', 'fc', 'Bus', 'Transportes', 'Je vais au travail à vélo.', 'Cómo vas y qué transporte tomas', [
  R('La regla', 'En o à', [['en bus · en train · en voiture', 'vas adentro: en'], ['en avion · en métro · en taxi', 'también en'], ['à vélo · à moto', 'vas encima: à'], ['à pied', 'a pie']],
    'Truco: si puedes entrar en el transporte, va <b>en</b>; si vas montado encima, va <b>à</b>.'),
  R('Prendre', 'Tomar un transporte', [['Je prends le bus.', '= Je vais en bus.'], ["Je prends l'avion.", 'tomo el avión'], ['Je vais au travail à pied.', 'a pie no se «toma»']],
    "Con prendre va el artículo (le bus, la voiture, l'avion); con aller va en o à. Elige el transporte según la distancia: a pie para 500 m, en avión para 1000 km.")], ['fs_v5']);
U('fc6', 'fc', 'M', 'En metro', 'Tu prends la ligne 2.', 'Moverse en metro y leer el plano', [
  R('En el metro', 'Tu itinerario', [['Tu prends la ligne 1, direction Aéroport.', 'la dirección es la última estación de la línea'], ['Tu changes à la station Mairie.', 'cambias de línea'], ['Tu descends à la station Musée.', 'bajas']],
    'En Francia cada línea tiene un número, y el sentido se nombra por la última estación: «direction Aéroport». En el plano: busca tu estación (★), la de llegada (🏁) y hacia qué extremo vas.'),
  R('Verbos', 'Prendre y descendre', [['je prends · tu prends · il prend', 'tomar'], ['je descends · tu descends · il descend', 'bajar'], ['je change · tu changes · il change', 'cambiar: verbo en -er']],
    'Prendre y descendre no son verbos en -er. En singular terminan en -s, -s y sin -s; la d de il descend no suena.')], ['fs_v7', 'fs_v8']);
U('fc7', 'fc', 'Quel', 'Quel, quelle…', 'Tu prends quelle ligne ?', 'Preguntar con quel y la entonación', [
  R('La regla', 'Quel concuerda con el sustantivo', [['quel quartier ?', 'masculino'], ['quelle ligne ?', 'femenino'], ['quels transports ?', 'masculino plural'], ['quelles langues ?', 'femenino plural']],
    'Las cuatro formas suenan igual («kèl»): la diferencia solo se ve al escribir. Mira el género y el número del sustantivo, como con le y la. ' + PREV('ya usaste «Quelle est ton adresse mail ?» en la unidad 1.'),
    [['masculino', 'quel · quels'], ['femenino', 'quelle · quelles']]),
  R('Entonación', 'La voz sube o baja', [['Tu prends le bus ?', 'pregunta: la voz sube al final ↗'], ['Tu prends le bus.', 'afirmación: la voz baja ↘']],
    'En el francés hablado, muchas preguntas son una afirmación con la voz hacia arriba. Escucha las dos frases: las palabras son las mismas.')], ['fs_v9']);
U('fc8', 'fc', 'Job', 'Más profesiones', 'Elle est infirmière.', 'El femenino de las profesiones y dónde trabajan', [
  R('El femenino', 'Las terminaciones', [['infirmier · infirmière', '-ier → -ière'], ['coiffeur · coiffeuse', '-eur → -euse'], ['animateur · animatrice', '-teur → -trice'], ['musicien · musicienne', '-ien → -ienne'], ['boulanger · boulangère', '-er → -ère'], ['photographe · photographe', '-e: no cambia']],
    'Professeur e ingénieur agregan una e (professeure, ingénieure) pero suenan igual. ' + PREV('la profesión va sin artículo, como en español: Elle est infirmière.')),
  R('Dónde trabaja', 'travailler à…', [["L'infirmière travaille à l'hôpital.", "à + l'"], ['Le serveur travaille au restaurant.', 'à + le = au'], ['Le facteur travaille à la poste.', 'à + la']],
    'Usa los lugares de la ciudad y las contracciones que practicaste para indicar el camino.')]);
U('fc9', 'fc', 'Fav', 'Mi lugar preferido', "Mon lieu préféré, c'est le parc.", 'Leer un foro y escribir un SMS', [
  R('Comprensión', 'Leer un foro', [["Salut, moi, c'est Inès.", 'así se presenta cada persona'], ["Mon lieu préféré, c'est le jardin.", 'su lugar preferido'], ['Je vais au travail à vélo.', 'cómo se mueve']],
    'Lee primero la pregunta y luego busca la respuesta en el texto: no hace falta entender cada palabra. Los mensajes juntan todo lo de la unidad: profesiones, lugares y transportes.'),
  R('Escribir un SMS', 'Explicar el camino a un amigo', [['Tu vas tout droit.', 'con un amigo: tu'], ['Tu prends la première rue à gauche.', 'tu prends'], ['Tu descends à la station Opéra.', 'también en metro']],
    'Con un amigo usa tu (tu vas, tu prends, tu tournes); con alguien que no conoces, vous.')], ['fs_v11', 'fs_v12']);

/* ---------- dialogs ---------- */
const DLG_C = [
  {where:'En la calle', who:'Turista', turns:[
    {say:"Pardon, madame, où est la gare, s'il vous plaît ?", you:'Siga derecho y tome la segunda calle a la derecha.', ans:'Vous allez tout droit et vous prenez la deuxième rue à droite.', traps:['première', 'gauche', 'tu']},
    {say:"Merci ! C'est loin ?", you:'No, está a cinco minutos a pie.', ans:"Non, c'est à cinq minutes à pied.", traps:['en', 'près', 'vélo']},
    {say:'Et il y a une pharmacie près de la gare ?', listen:['Pregunta si hay una farmacia cerca de la estación.', 'Pregunta dónde está el hospital.', 'Pregunta si la estación está lejos.', 'Pregunta si hay un banco en la plaza.'], ask:'¿Qué pregunta el turista?', es:'¿Y hay una farmacia cerca de la estación?'}]},
  {where:'En el metro', who:'Lucie', turns:[
    {say:'Pour aller au stade, je prends quelle ligne ?', you:'Tomas la línea 2, dirección Stade.', ans:'Tu prends la ligne_2, direction Stade.', traps:['quelle', 'le', 'descends']},
    {say:'Et je descends où ?', you:'Bajas en la estación Stade.', ans:'Tu descends à la station Stade.', traps:['prends', 'au', 'changes']},
    {say:"Super ! D'habitude, je vais au travail à vélo.", listen:['Normalmente va al trabajo en bicicleta.', 'Normalmente va al trabajo en metro.', 'Normalmente va al estadio a pie.', 'Nunca toma la bicicleta.'], ask:'¿Qué dijo Lucie?', es:'¡Genial! Normalmente voy al trabajo en bicicleta.'}]},
  {where:'En el foro de la ciudad', who:'Paulo', turns:[
    {say:'Quel est ton lieu préféré dans la ville ?', you:'Mi lugar preferido es la biblioteca.', ans:"Mon lieu préféré, c'est la bibliothèque.", alts:['Mon lieu préféré est la bibliothèque.'], traps:['ma', 'le', 'quel']},
    {say:"Moi, je suis musicien. J'adore le théâtre de la ville, il est magnifique !", listen:['Es músico y le encanta el teatro de la ciudad.', 'Es fotógrafo y le encanta el museo.', 'Es músico y no le gusta el teatro.', 'Es actor y le encanta la plaza.'], ask:'¿Qué dijo Paulo?', es:'Yo soy músico. Me encanta el teatro de la ciudad, ¡es precioso!'}]},
  {where:'En la oficina de turismo', who:'Empleada', turns:[
    {say:'Bonjour ! Vous cherchez quelque chose ?', you:'Sí, busco el museo Picasso.', ans:'Oui, je cherche le musée Picasso.', traps:['un', 'cherches', 'la']},
    {say:'Vous prenez le bus 23 et vous descendez à la place Bellecour.', listen:['Tomar el bus 23 y bajar en la plaza Bellecour.', 'Tomar el metro 23 y bajar en la estación Bellecour.', 'Ir a pie hasta la plaza Bellecour.', 'Tomar el bus 32 y bajar en el museo.'], ask:'¿Qué le aconseja?', es:'Toma el bus 23 y baja en la plaza Bellecour.'},
    {say:'Le musée est en face de la mairie.', listen:['El museo está enfrente de la municipalidad.', 'El museo está al lado de la municipalidad.', 'El museo está detrás de la iglesia.', 'El museo está lejos de la municipalidad.'], ask:'¿Dónde está el museo?', es:'El museo está enfrente de la municipalidad.'}]}];
['Lucie'].forEach(n => FR_NAMES.add(n));
MODULES.fc = {n:3, tab:'On va où ?', zh:'Pardon, où est la gare ?', p:'par·dõ · u·è·la·gar', es:'Unidad 2 · La ciudad, un/une/des, los verbos en -er, indicar el camino, los transportes, el metro, quel y más profesiones.',
  examKey:'examBestFc', dlgPlan:() => frDialogPlan(DLG_C, 'f-way'), dlgSub:'En la calle, en el metro y en la oficina de turismo'};
