/* =================== Ruta 2 · Et vous ? (unidad 1) =================== */
const NATS = [
  {m:'français', f:'française', em:'francés', ef:'francesa'}, {m:'péruvien', f:'péruvienne', em:'peruano', ef:'peruana'}, {m:'espagnol', f:'espagnole', em:'español', ef:'española'},
  {m:'italien', f:'italienne', em:'italiano', ef:'italiana'}, {m:'mexicain', f:'mexicaine', em:'mexicano', ef:'mexicana'}, {m:'chinois', f:'chinoise', em:'chino', ef:'china'},
  {m:'anglais', f:'anglaise', em:'inglés', ef:'inglesa'}, {m:'allemand', f:'allemande', em:'alemán', ef:'alemana'}, {m:'belge', f:'belge', em:'belga', ef:'belga'},
  {m:'canadien', f:'canadienne', em:'canadiense', ef:'canadiense'}, {m:'suisse', f:'suisse', em:'suizo', ef:'suiza'}, {m:'brésilien', f:'brésilienne', em:'brasileño', ef:'brasileña'},
  {m:'colombien', f:'colombienne', em:'colombiano', ef:'colombiana'}, {m:'coréen', f:'coréenne', em:'coreano', ef:'coreana'}, {m:'russe', f:'russe', em:'ruso', ef:'rusa'},
  {m:'sénégalais', f:'sénégalaise', em:'senegalés', ef:'senegalesa'}];
const natOf = m => NATS.find(n => n.m === m);
FW('fb1', 'nat', [
  ['nt_fr', 'français', 'frã·sè', 'francés', 'Femenino: française. Ahí la s sí suena: frã·sèz.'],
  ['nt_pe', 'péruvien', 'pé·rü·viẽ', 'peruano', 'Femenino: péruvienne, que suena pé·rü·vièn.'],
  ['nt_es', 'espagnol', 'ès·pa·ñòl', 'español', 'Femenino: espagnole. Suena igual.'],
  ['nt_it', 'italien', 'i·ta·liẽ', 'italiano', 'Femenino: italienne (i·ta·lièn).'],
  ['nt_mx', 'mexicain', 'mèk·si·kẽ', 'mexicano', 'Femenino: mexicaine (mèk·si·kèn).'],
  ['nt_cn', 'chinois', 'shi·nua', 'chino', 'Femenino: chinoise (shi·nuaz).'],
  ['nt_en', 'anglais', 'ã·glè', 'inglés', 'Femenino: anglaise (ã·glèz).'],
  ['nt_de', 'allemand', 'al·mã', 'alemán', 'Femenino: allemande (al·mãd).'],
  ['nt_be', 'belge', 'bèlzh', 'belga', 'Termina en e: igual en femenino.'],
  ['nt_ca', 'canadien', 'ka·na·diẽ', 'canadiense', 'Femenino: canadienne (ka·na·dièn).']]);
FG('f-nat', 'fb1', 'nacionalidades');
const pron3 = g => g === 'f' ? ['Elle', 'Ella'] : ['Il', 'Él'];
function frNatEx(mode){
  const gendered = NATS.filter(n => n.m !== n.f);
  if (mode === 'agree'){
    const x = pick(gendered), g = pick(['m', 'f']), y = pick(gendered.filter(n => n !== x)), [P, E] = pron3(g);
    return fMC('f-nat', 'Elige la forma correcta', `<div class="qtext">${E} es ${esc(g === 'f' ? x.ef : x.em)}.</div><div class="qtext han">${P} est ___.</div>`,
      [x.f, x.m, y.f, y.m].map(t => oFr(t)), x[g], {h:`${P} est ${x[g]}.`, p:'', es:`${E} es ${g === 'f' ? x.ef : x.em}.`});
  }
  const x = pick(NATS), g = pick(['m', 'f']);
  if (mode === 'listen'){
    const y = pick(NATS.filter(n => n !== x)), [P] = pron3(g);
    const fr = `${P} est ${x[g]}.`;
    const es = (n, gg) => `${pron3(gg)[1]} es ${gg === 'f' ? n.ef : n.em}.`;
    const og = g === 'f' ? 'm' : 'f';
    return fMC('f-nat', 'Escucha y elige', audioBtns(fr, true), [es(x, g), es(x, og), es(y, g), es(y, og)].map(t => oEs(t)), es(x, g), {h:fr, p:'', es:es(x, g)}, {say:fr});
  }
  const me = Math.random() < 0.5, [P, E] = pron3(g), adj = g === 'f' ? x.ef : x.em;
  const fr = me ? `Je suis ${x[g]}.` : `${P} est ${x[g]}.`;
  // canadiense, belga…: when Spanish hides the gender, say it
  const es = me ? `Soy ${adj}${x.em === x.ef && x.m !== x.f ? (g === 'f' ? ' (mujer)' : ' (hombre)') : ''}.` : `${E} es ${adj}.`;
  if (mode === 'speak') return fSpeak('f-nat', es, fr);
  const other = x.m !== x.f ? x[g === 'f' ? 'm' : 'f'] : pick(NATS.filter(n => n !== x))[g];
  return fTiles('f-nat', 'Tradúcelo al francés', fcue(es), fr, es, [other, me ? 'es' : 'suis', me ? 'est' : (g === 'f' ? 'il' : 'elle')]);
}

FW('fb2', 'person', [
  ['p_ho', 'un homme', 'ẽ·nòm', 'un hombre', 'La h no suena y la n se une a la palabra: ẽ·nòm.'],
  ['p_fe', 'une femme', 'ün·fam', 'una mujer', 'Se escribe femme, pero suena «fam».'],
  ['p_ga', 'un garçon', 'ẽ·gar·sõ', 'un chico'],
  ['p_fi', 'une fille', 'ün·fiy', 'una chica / una hija', 'Fille quiere decir chica y también hija.'],
  ['p_en', 'un enfant', 'ẽ·nã·fã', 'un niño / una niña'],
  ['p_qa', 'quel âge ?', 'kè·lazh', '¿qué edad?'],
  ['p_an', 'un an', 'ẽ·nã', 'un año', 'En plural, ans, suena igual. Tengo 20 años = J\'ai vingt ans.']]);
FG('f-age', 'fb2', 'la edad');
const PEOPLE_PIC = [['👨', 'un homme', 'un hombre'], ['👩', 'une femme', 'una mujer'], ['👦', 'un garçon', 'un chico'], ['👧', 'une fille', 'una chica']];
function ageEx(mode){
  const a = mode === 'reply' ? rint(15, 31) : rint(2, 31);
  if (mode === 'pic'){
    const [e, fr, es] = pick(PEOPLE_PIC);
    return fMC('f-age', '¿Quién es?', `<div class="pic">${e}</div><div class="qtext han">C'est ___.</div>`, PEOPLE_PIC.map(r => oFr(r[1])), fr, {h:`C'est ${fr}.`, p:'', es:`Es ${es}.`});
  }
  if (mode === 'reply'){
    const tv = pick(['tu', 'vous']), qq = tv === 'tu' ? 'Tu as quel âge ?' : 'Vous avez quel âge ?';
    return fTiles('f-age', 'Responde', bub(tv === 'tu' ? 'Amigo' : 'Señora', qq) + `<div class="ask">Responde: tienes <b>${a}</b> años.</div>`, `J'ai ${a} ans.`, `Tengo ${a} años.`, ['suis', 'an', 'a', 'je'], [], {say:qq});
  }
  if (mode === 'ask'){
    const tu = Math.random() < 0.5;
    return tu
      ? fTiles('f-age', 'Pregunta', `<div class="ask">Pregúntale la edad a tu amiga Léa.</div>`, 'Tu as quel âge ?', '¿Cuántos años tienes?', ['vous', 'es', 'a'], ['Quel âge tu as ?'])
      : fTiles('f-age', 'Pregunta', `<div class="ask">Pregúntale la edad a un señor que conoces en el tren.</div>`, 'Vous avez quel âge ?', '¿Cuántos años tiene usted?', ['tu', 'as', 'êtes'], ['Quel âge vous avez ?']);
  }
  const g = pick(['m', 'f']), [P, E] = pron3(g), fr = `${P} a ${a} ans.`;
  if (mode === 'speak') return fSpeak('f-age', `${E} tiene ${a} años.`, fr);
  const [a2, a3] = frConf(a, 2, 31, 2), O = pron3(g === 'f' ? 'm' : 'f')[1];
  const opts = [`${E} tiene ${a} años.`, `${O} tiene ${a} años.`, `${E} tiene ${a2} años.`, `${E} tiene ${a3} años.`];
  return fMC('f-age', 'Escucha y elige', audioBtns(fr, true), opts.map(t => oEs(t)), opts[0], {h:fr, p:'', es:opts[0]}, {say:fr});
}

FW('fb3', 'verb', [
  ['w_et', 'être', 'ètr', 'ser / estar', 'Je suis péruvien (soy) · Je suis à Lima (estoy).'],
  ['w_av', 'avoir', 'a·vuar', 'tener', 'La edad va con avoir: j\'ai 20 ans.']]);
FG('f-conj', 'fb3', 'être, avoir, s\'appeler');
const SUBJ = [{k:'je', fr:'Je', es:'Yo'}, {k:'tu', fr:'Tu', es:'Tú'}, {k:'il', fr:'Il', es:'Él', g:'m'}, {k:'elle', fr:'Elle', es:'Ella', g:'f'}, {k:'nous', fr:'Nous', es:'Nosotros', pl:1},
  {k:'vous', fr:'Vous', es:'Usted'}, {k:'vous2', fr:'Vous', es:'Ustedes', pl:1}, {k:'ils', fr:'Ils', es:'Ellos', pl:1}, {k:'elles', fr:'Elles', es:'Ellas', pl:1}];
const VERBS = {
  etre:{inf:'être', gloss:'ser / estar', f:{je:'suis', tu:'es', il:'est', elle:'est', nous:'sommes', vous:'êtes', vous2:'êtes', ils:'sont', elles:'sont'},
    es:{je:'estoy', tu:'estás', il:'está', elle:'está', nous:'estamos', vous:'está', vous2:'están', ils:'están', elles:'están'},
    comp:() => pick([['à Lima', 'en Lima'], ['à Paris', 'en París'], ['à Montréal', 'en Montreal']]), traps:['suis', 'es', 'est', 'sommes', 'êtes', 'sont']},
  avoir:{inf:'avoir', gloss:'tener', f:{je:'ai', tu:'as', il:'a', elle:'a', nous:'avons', vous:'avez', vous2:'avez', ils:'ont', elles:'ont'},
    es:{je:'tengo', tu:'tienes', il:'tiene', elle:'tiene', nous:'tenemos', vous:'tiene', vous2:'tienen', ils:'tienen', elles:'tienen'},
    comp:() => { const n = rint(12, 31); return [`${n} ans`, `${n} años`]; }, traps:['ai', 'as', 'a', 'avons', 'avez', 'ont']},
  appeler:{inf:"s'appeler", gloss:'llamarse', f:{je:"m'appelle", tu:"t'appelles", il:"s'appelle", elle:"s'appelle", nous:'nous appelons', vous:'vous appelez', vous2:'vous appelez', ils:"s'appellent", elles:"s'appellent"},
    es:{je:'me llamo', tu:'te llamas', il:'se llama', elle:'se llama', nous:'nos llamamos', vous:'se llama', vous2:'se llaman', ils:'se llaman', elles:'se llaman'},
    comp:s => { const pool = PEOPLE.filter(p => !s.g || p[1] === s.g); if (!s.pl) return [pick(pool)[0], null]; const [a, b] = shuffle(PEOPLE.filter(p => s.k !== 'ils' && s.k !== 'elles' || p[1] === (s.k === 'ils' ? 'm' : 'f'))); return [`${a[0]} et ${b[0]}`, `${a[0]} y ${b[0]}`]; },
    traps:["m'appelle", "t'appelles", "s'appelle", 'appelons', 'appelez', "s'appellent"]}};
function conjSentence(vk, s){
  const V = VERBS[vk], [cf, ce0] = V.comp(s), ce = ce0 == null ? cf : ce0;
  const fr = vk === 'avoir' && s.k === 'je' ? `J'ai ${cf}.` : `${s.fr} ${V.f[s.k]} ${cf}.`;
  const es = `${s.es} ${V.es[s.k]} ${ce}.`;
  return {fr, es, cf, ce};
}
function conjEx(mode){
  const vk = pick(Object.keys(VERBS)), V = VERBS[vk];
  if (mode === 'pron'){
    const choices = SUBJ.filter(s => s.k !== 'vous2' && !(vk === 'avoir' && s.k === 'je'));
    const s = pick(choices), f = V.f[s.k];
    const wrong = shuffle(choices.filter(x => V.f[x.k] !== f)).slice(0, 3);
    const { cf, ce } = conjSentence(vk, s);
    return fMC('f-conj', 'Elige el pronombre', `<div class="qtext han">___ ${esc(f)} ${esc(cf)}.</div><div class="hint">verbo ${esc(V.inf)} (${esc(V.gloss)})</div>`,
      [s, ...wrong].map(x => oFr(x.k)), s.k, {h:`${s.fr} ${f} ${cf}.`, p:'', es:`${s.es} ${V.es[s.k]} ${ce}.`});
  }
  const s = pick(SUBJ.filter(x => !(mode === 'form' && vk === 'avoir' && x.k === 'je')));
  const {fr, es, cf} = conjSentence(vk, s);
  if (mode === 'form'){
    const f = V.f[s.k], forms = uniqBy(Object.values(V.f), x => x).filter(x => x !== f);
    return fMC('f-conj', `Conjuga ${V.inf}`, `<div class="qtext han">${esc(s.fr)} ___ ${esc(cf)}.</div><div class="hint">${esc(es)}</div>`,
      [f, ...shuffle(forms).slice(0, 3)].map(x => oFr(x)), f, {h:fr, p:'', es});
  }
  if (mode === 'speak') return fSpeak('f-conj', es, fr);
  const used = frChunks(fr).map(low);
  return fTiles('f-conj', 'Tradúcelo al francés', fcue(es), fr, es, shuffle(V.traps.filter(t => !used.includes(low(t)))).slice(0, 2));
}

FW('fb4', 'hobby', [
  ['l_ai', "j'aime", 'zhèm', 'me gusta', 'je + aime = j\'aime. «Je aime» no existe.'],
  ['l_ci', 'le cinéma', 'lë·si·né·ma', 'el cine'],
  ['l_mu', 'la musique', 'la·mü·zik', 'la música'],
  ['l_le', 'la lecture', 'la·lèk·tür', 'la lectura', 'Ojo: lecture es lectura, no «conferencia».'],
  ['l_da', 'la danse', 'la·dãs', 'el baile'],
  ['l_na', 'la natation', 'la·na·ta·siõ', 'la natación'],
  ['l_te', 'le tennis', 'lë·té·nis', 'el tenis'],
  ['l_pe', 'la peinture', 'la·pẽ·tür', 'la pintura'],
  ['l_sp', 'le sport', 'lë·spòr', 'el deporte']]);
FG('f-art', 'fb4', 'gustos y artículos');
const NOUNS = [{h:'musique', g:'f', es:'la música', e:'🎵'}, {h:'cinéma', g:'m', es:'el cine', e:'🎬'}, {h:'lecture', g:'f', es:'la lectura', e:'📖'}, {h:'danse', g:'f', es:'el baile', e:'💃'},
  {h:'natation', g:'f', es:'la natación', e:'🏊'}, {h:'tennis', g:'m', es:'el tenis', e:'🎾'}, {h:'peinture', g:'f', es:'la pintura', e:'🎨'}, {h:'sport', g:'m', es:'el deporte', e:'🏅', nopic:1},
  {h:'athlétisme', g:'m', es:'el atletismo', e:'🏃'}, {h:'escalade', g:'f', es:'la escalada', e:'🧗'}, {h:'films', g:'p', es:'las películas', e:'🎞️'}, {h:'voyages', g:'p', es:'los viajes', e:'✈️'},
  {h:'chocolat', g:'m', es:'el chocolate', e:'🍫'}];
const art = n => n.g === 'p' ? 'les' : /^[aeiouéèêh]/i.test(n.h) ? "l'" : n.g === 'm' ? 'le' : 'la';
const phrase = n => art(n) === "l'" ? "l'" + n.h : art(n) + ' ' + n.h;
const tilePhrase = n => art(n) === "l'" ? "l'|" + n.h : art(n) + ' ' + n.h;
const gusta = n => (n.g === 'p' ? 'Me gustan ' : 'Me gusta ') + n.es;
function artEx(mode){
  const n = pick(NOUNS);
  if (mode === 'art') return fMC('f-art', 'Elige el artículo', `<div class="pic">${n.e}</div><div class="qtext han">J'aime ___ ${esc(n.h)}.</div>`, ['le', 'la', "l'", 'les'].map(x => oFr(x)), art(n),
    {h:`J'aime ${phrase(n)}.`, p:'', es:gusta(n) + '.'});
  if (mode === 'pic'){
    const pool = NOUNS.filter(x => !x.nopic), x = pick(pool);
    return fMC('f-art', '¿Qué le gusta?', `<div class="pic">${x.e}</div><div class="qtext han">J'aime…</div>`, [x, ...others(pool, x, 3, y => y.h)].map(y => oFr(phrase(y))), phrase(x),
      {h:`J'aime ${phrase(x)}.`, p:'', es:gusta(x) + '.'});
  }
  if (mode === 'listen'){
    const fr = `J'aime ${phrase(n)}.`;
    return fMC('f-art', 'Escucha y elige', audioBtns(fr, true), [n, ...others(NOUNS, n, 3, y => y.h)].map(y => oEs(gusta(y) + '.')), gusta(n) + '.', {h:fr, p:'', es:gusta(n) + '.'}, {say:fr});
  }
  const wrongArts = ['le', 'la', 'les'].filter(a => a !== art(n));
  if (mode === 'reply'){
    const qq = `Tu aimes ${phrase(n)} ?`;
    return fTiles('f-art', 'Responde', bub('Amiga', qq) + `<div class="ask">Responde que sí.</div>`, `Oui, j'aime ${tilePhrase(n)}.`, `Sí, ${gusta(n).toLowerCase()}.`, [pick(wrongArts), 'aimes', 'tu'], [], {say:qq});
  }
  const me = Math.random() < 0.55, g = pick(['m', 'f']), [P, E] = pron3(g);
  const fr = me ? `J'aime ${tilePhrase(n)}.` : `${P} aime ${tilePhrase(n)}.`;
  const es = me ? gusta(n) + '.' : `A ${E.toLowerCase()} le gusta${n.g === 'p' ? 'n' : ''} ${n.es}.`;
  if (mode === 'speak') return fSpeak('f-art', es, fr);
  return fTiles('f-art', 'Tradúcelo al francés', fcue(es), fr, es, [...shuffle(wrongArts).slice(0, 2), 'aimes']);
}

FW('fb5', 'num', [
  ['z_40', 'quarante', 'ka·rãt', '40'], ['z_50', 'cinquante', 'sẽ·kãt', '50'], ['z_60', 'soixante', 'sua·sãt', '60', 'La x suena «s».'],
  ['z_70', 'soixante-dix', 'sua·sãt·dis', '70', '60 + 10. En Bélgica y Suiza: septante.'], ['z_80', 'quatre-vingts', 'ka·trë·vẽ', '80', '4 × 20. En Suiza también huitante.'],
  ['z_90', 'quatre-vingt-dix', 'ka·trë·vẽ·dis', '90', '4 × 20 + 10. En Bélgica y Suiza: nonante.'], ['z_100', 'cent', 'sã', '100']]);
FG('f-n100', 'fb5', 'números 32–100');

const COUNTRIES = [
  {h:'France', a:'la', p:'en', es:'Francia', city:'Paris', ce:'París'}, {h:'Pérou', a:'le', p:'au', es:'Perú', city:'Lima', ce:'Lima'},
  {h:'Espagne', a:"l'", p:'en', es:'España', city:'Madrid', ce:'Madrid'}, {h:'Mexique', a:'le', p:'au', es:'México', city:'Guadalajara', ce:'Guadalajara'},
  {h:'Canada', a:'le', p:'au', es:'Canadá', city:'Montréal', ce:'Montreal'}, {h:'États-Unis', a:'les', p:'aux', es:'Estados Unidos', city:'New_York', ce:'Nueva York'},
  {h:'Belgique', a:'la', p:'en', es:'Bélgica', city:'Bruxelles', ce:'Bruselas'}, {h:'Suisse', a:'la', p:'en', es:'Suiza', city:'Genève', ce:'Ginebra'},
  {h:'Italie', a:"l'", p:'en', es:'Italia', city:'Rome', ce:'Roma'}, {h:'Brésil', a:'le', p:'au', es:'Brasil', city:'Rio', ce:'Río'},
  {h:'Chine', a:'la', p:'en', es:'China', city:'Pékin', ce:'Pekín'}, {h:'Japon', a:'le', p:'au', es:'Japón', city:'Tokyo', ce:'Tokio'},
  {h:'Argentine', a:"l'", p:'en', es:'Argentina', city:'Buenos_Aires', ce:'Buenos Aires'}, {h:'Colombie', a:'la', p:'en', es:'Colombia', city:'Bogota', ce:'Bogotá'},
  {h:'Chili', a:'le', p:'au', es:'Chile', city:'Santiago', ce:'Santiago'}, {h:'Équateur', a:"l'", p:'en', es:'Ecuador', city:'Quito', ce:'Quito'},
  {h:'Pays-Bas', a:'les', p:'aux', es:'Países Bajos', city:'Amsterdam', ce:'Ámsterdam'}, {h:'Maroc', a:'le', p:'au', es:'Marruecos', city:'Rabat', ce:'Rabat'},
  {h:'Sénégal', a:'le', p:'au', es:'Senegal', city:'Dakar', ce:'Dakar'}, {h:'Portugal', a:'le', p:'au', es:'Portugal', city:'Lisbonne', ce:'Lisboa'}];
COUNTRIES.forEach(c => { FR_NAMES.add(c.h); FR_NAMES.add(c.city.replace(/_/g, ' ')); });
FW('fb6', 'country', [
  ['c_hab', "j'habite", 'zha·bit', 'vivo (en)', 'La h no suena: je + habite = j\'habite.'],
  ['c_par', 'je parle', 'zhë·parl', 'hablo'],
  ['c_fr', 'la France', 'la·frãs', 'Francia'], ['c_pe', 'le Pérou', 'lë·pé·ru', 'el Perú'], ['c_es', "l'Espagne", 'lès·pañ', 'España'],
  ['c_mx', 'le Mexique', 'lë·mèk·sik', 'México', 'Termina en -e pero es masculino: au Mexique.'], ['c_us', 'les États-Unis', 'lé·zé·ta·zü·ni', 'Estados Unidos'],
  ['c_be', 'la Belgique', 'la·bèl·zhik', 'Bélgica'], ['c_ch', 'la Suisse', 'la·süis', 'Suiza'], ['c_it', "l'Italie", 'li·ta·li', 'Italia']]);
// each country word knows its country, so its exercises can ask for the article and the preposition
Object.values(ITEMS).filter(it => it.unit === 'fb6').forEach(it => { const c = COUNTRIES.find(c => (c.a === "l'" ? "l'" + c.h : c.a + ' ' + c.h) === it.h); if (c) it.cty = c; });
FG('f-prep', 'fb6', 'à, au, en, aux');
const LANGS_FR = [['espagnol', 'español'], ['anglais', 'inglés'], ['français', 'francés'], ['italien', 'italiano'], ['allemand', 'alemán'], ['chinois', 'chino'], ['portugais', 'portugués']];
const withArt = c => c.a === "l'" ? "l'" + c.h : c.a + ' ' + c.h;
const ARTS = ['le', 'la', "l'", 'les'], PREPS = ['à', 'au', 'en', 'aux'];
// relacionar: one country per article, or a city and one country per preposition. The names are
// almost the same in Spanish, so translating them teaches little; what changes is le/la and au/en
function matchEx(item, c, kind){
  const rest = COUNTRIES.filter(x => x !== c);
  let rows;
  if (kind === 'art') rows = ARTS.map(a => { const x = a === c.a ? c : pick(rest.filter(y => y.a === a)); return {fr:x.h, a, full:withArt(x), es:x.es}; });
  else rows = PREPS.map(pr => {
    if (pr === 'à'){ const x = pick(rest), city = x.city.replace(/_/g, ' '); return {fr:city, a:pr, full:`à ${city}`, es:x.ce}; }
    const x = pr === c.p ? c : pick(rest.filter(y => y.p === pr)); return {fr:x.h, a:pr, full:`${pr} ${x.h}`, es:x.es};
  });
  rows = shuffle(rows);
  return {t:'match', item, kind:kind === 'art' ? 'Relaciona cada país con su artículo' : 'Relaciona: ¿à, au, en o aux?',
    q:`<div class="hint">${kind === 'art' ? 'Toca un país y luego su artículo.' : 'Toca un lugar y luego la preposición que lleva después de «J\'habite».'}</div>`,
    left:rows.map(r => ({v:r.fr, a:r.a, say:r.fr, html:`<span class="han">${esc(r.fr)}</span>`})), right:(kind === 'art' ? ARTS : PREPS).map(x => ({v:x, html:`<span class="han">${esc(x)}</span>`})),
    rev:{h:rows.map(r => r.full).join(' · '), p:'', es:rows.map(r => r.es).join(' · ')}};
}
// a country word passes its own country (fixed): the exercise is then about that country and never a city
function prepEx(mode, fixed, item = 'f-prep'){
  const c = fixed || pick(COUNTRIES), city = c.city.replace(/_/g, ' ');
  if (mode === 'match') return matchEx(item, c, pick(['art', 'prep']));
  if (mode === 'prep'){
    const isCity = !fixed && Math.random() < 0.25, [P, E] = pick([["J'habite", 'Vivo'], ['Il habite', 'Él vive'], ['Elle habite', 'Ella vive']]);
    const place = isCity ? city : c.h, pr = isCity ? 'à' : c.p;
    return fMC(item, 'Completa con la preposición', `<div class="qtext han">${P} ___ ${esc(place)}.</div>`,
      PREPS.map(x => oFr(x)), pr, {h:`${P} ${pr} ${place}.`, p:'', es:`${E} en ${isCity ? c.ce : c.es}.`});
  }
  if (mode === 'pays') return fMC(item, 'Completa con el artículo', `<div class="qtext han">J'aime ___ ${esc(c.h)}.</div>`, ARTS.map(x => oFr(x)), c.a,
    {h:`J'aime ${withArt(c)}.`, p:'', es:`Me gusta ${c.es}.`});
  // short dictation: what is missing is the preposition and the place, so you hear them and spell them
  if (mode === 'listen'){
    const isCity = !fixed && Math.random() < 0.3, [P, E] = pick([["J'habite", 'Vivo'], ['Il habite', 'Él vive'], ['Elle habite', 'Ella vive']]);
    const place = isCity ? city : c.h, pr = isCity ? 'à' : c.p, fr = `${P} ${pr} ${place}.`;
    return {t:'type', item, kind:'Escucha y completa', say:fr, q:`${audioBtns(fr)}<div class="qtext han">${esc(P)} ___ ___.</div>`, answer:`${pr} ${place}`,
      ph:'Escribe lo que falta', hint:'La preposición y el lugar. ' + FR_TYPE_HINT, rev:{h:fr, p:'', es:`${E} en ${isCity ? c.ce : c.es}.`}};
  }
  if (mode === 'reply'){
    const qq = pick(['Tu habites où ?', 'Où tu habites ?']);
    return fTiles('f-prep', 'Responde', bub('Karim', qq) + `<div class="ask">Responde con la ciudad: vives en <b>${esc(c.ce)}</b>.</div>`, `J'habite à ${c.city}.`, `Vivo en ${c.ce}.`, ['au', 'en', 'habites'], [], {say:qq});
  }
  const wrongP = ['à', 'au', 'en', 'aux'].filter(x => x !== c.p && x !== 'à');
  const kind = pick(['live', 'live', 'born', 'lang']);
  let fr, es, traps, alts = [];
  if (kind === 'live'){ fr = `J'habite à ${c.city}, ${c.p} ${c.h}.`; es = `Vivo en ${c.ce}, ${c.es}.`; alts = [`J'habite ${c.p} ${c.h}, à ${c.city}.`]; traps = [...wrongP, 'le']; }
  else if (kind === 'born'){ const g = pick(['m', 'f']), [P, E] = pron3(g); fr = `${P} est ${g === 'f' ? 'née' : 'né'} à ${c.city}.`; es = `${E} nació en ${c.ce}.`; traps = [g === 'f' ? 'né' : 'née', c.p === 'à' ? 'au' : c.p, 'a']; }
  else { const [l1, l2] = shuffle(LANGS_FR); fr = `Je parle ${l1[0]} et ${l2[0]}.`; es = `Hablo ${l1[1]} y ${l2[1]}.`; alts = [`Je parle ${l2[0]} et ${l1[0]}.`]; traps = ['parles', 'le', l1[0] === 'espagnol' ? 'espagnole' : 'la']; }
  if (mode === 'speak') return fSpeak('f-prep', es, fr);
  return fTiles('f-prep', 'Tradúcelo al francés', fcue(es), fr, es, traps, alts);
}

FW('fb7', 'contact', [
  ['t_nu', 'le numéro', 'lë·nü·mé·ro', 'el número'],
  ['t_po', 'le portable', 'lë·pòr·tabl', 'el celular'],
  ['t_fi', 'le téléphone fixe', 'lë·té·lé·fòn·fiks', 'el teléfono fijo'],
  ['t_ma', "l'adresse mail", 'la·drès·mèl', 'el correo electrónico', 'También se dice le mail. En Quebec: le courriel.'],
  ['t_ar', 'arobase', 'a·ro·baz', 'arroba (@)'],
  ['t_pt', 'point', 'puẽ', 'punto (.)'],
  ['t_ti', 'tiret', 'ti·rè', 'guion (-)']]);
FG('f-phone', 'fb7', 'teléfono y correo');
const pad2 = n => String(n).padStart(2, '0');
const pairFr = n => n < 10 ? 'zéro ' + FR_U[n] : frNum(n);
const phoneText = ps => ps.map(pad2).join(' ');
const phoneSay = ps => ps.map(pairFr).join(', ');
const MAILS = [['lea.martin@mail.fr', 'léa, point, martin, arobase, mail, point, F, R'], ['hugo-roux@net.fr', 'hugo, tiret, roux, arobase, net, point, F, R'],
  ['ana.rojas@correo.pe', 'ana, point, rojas, arobase, correo, point, P, E'], ['karim.diallo@mail.sn', 'karim, point, diallo, arobase, mail, point, S, N'],
  ['ines-dubois@web.be', 'inès, tiret, dubois, arobase, web, point, B, E'], ['paul.moreau@mail.ca', 'paul, point, moreau, arobase, mail, point, C, A']];
const ASKC = [['Pregúntale su número a tu amiga.', 'Quel est ton numéro ?', '¿Cuál es tu número?', ['quelle', 'mon', 'es']],
  ['Pregúntale su correo a tu amigo.', 'Quelle est ton adresse mail ?', '¿Cuál es tu correo?', ['quel', 'ta', 'mon']],
  ['Pregúntale a tu compañero si tiene tu correo.', 'Tu as mon adresse mail ?', '¿Tienes mi correo?', ['ton', 'es', 'ma']]];
function phoneEx(mode){
  if (mode === 'mail'){
    const [m, s] = pick(MAILS), [loc, dom] = m.split('@');
    const sep = loc.includes('.') ? '.' : '-', alt = sep === '.' ? '-' : '.';
    const vars = [loc.replace(sep, alt) + '@' + dom, loc.replace(sep, '') + '@' + dom, loc + '@' + dom.replace(/\.\w+$/, '.com')];
    return fMC('f-phone', 'Escucha y elige el correo', audioBtns(s, true), [m, ...vars].map(x => oEs(x)), m, {h:m, p:'', es:'Se dice: ' + s}, {say:s});
  }
  if (mode === 'ask'){
    const [ins, fr, es, traps] = pick(ASKC);
    return fTiles('f-phone', 'Pregunta', `<div class="ask">${esc(ins)}</div>`, fr, es, traps);
  }
  const ps = [pick([6, 7]), rint(10, 99), rint(0, 99), rint(10, 99), rint(0, 99)];
  const text = phoneText(ps), sp = phoneSay(ps), rev = {h:text, p:'', es:'Se dice de dos en dos: ' + sp};
  if (mode === 'type') return {t:'digits', item:'f-phone', kind:'Escucha y escribe el número', say:sp, q:audioBtns(sp, true), answer:ps.map(pad2).join(''), hint:'Escribe los 10 dígitos; los espacios no importan.', rev};
  const vars = [];
  for (let tries = 0; vars.length < 3 && tries < 50; tries++){
    const k = rint(1, 4), v = ps.slice(); v[k] = frConf(ps[k], 0, 99, 1)[0];
    const t = phoneText(v); if (t !== text && !vars.includes(t)) vars.push(t);
  }
  return fMC('f-phone', 'Escucha y elige el número', audioBtns(sp, true), [text, ...vars].map(x => oEs(x)), text, rev, {say:sp});
}

FS('fb8', [
  ['fs_x1', 'Je ne suis pas français.', 'No soy francés.', ["n'", 'française', 'est']],
  ['fs_x2', "Je n'|aime pas le sport.", 'No me gusta el deporte.', ['ne', 'la', 'aimes']],
  ['fs_x3', "Elle n'|habite pas à Paris.", 'Ella no vive en París.', ['ne', 'en', 'habites']],
  ['fs_x4', 'Tu ne parles pas espagnol ?', '¿No hablas español?', ["n'", 'parle', 'espagnole']]]);
FG('f-neg', 'fb8', 'la negación');
const NEG = [
  ["J'aime le sport.", "Je n'|aime pas le sport.", 'Me gusta el deporte.', 'No me gusta el deporte.', 'aimes'],
  ['Il est mexicain.', "Il n'|est pas mexicain.", 'Él es mexicano.', 'Él no es mexicano.', 'es'],
  ['Elle habite à Paris.', "Elle n'|habite pas à Paris.", 'Ella vive en París.', 'Ella no vive en París.', 'habites'],
  ['Je parle chinois.', 'Je ne parle pas chinois.', 'Hablo chino.', 'No hablo chino.', 'parles'],
  ['Tu es étudiant.', "Tu n'|es pas étudiant.", 'Eres estudiante.', 'No eres estudiante.', 'est'],
  ['Nous sommes à Lima.', 'Nous ne sommes pas à Lima.', 'Estamos en Lima.', 'No estamos en Lima.', 'sont'],
  ['Il a vingt ans.', "Il n'|a pas vingt ans.", 'Él tiene veinte años.', 'Él no tiene veinte años.', 'as'],
  ["Elle s'appelle Léa.", "Elle ne s'appelle pas Léa.", 'Ella se llama Léa.', 'Ella no se llama Léa.', "s'appelles"],
  ["J'ai le numéro de Marie.", "Je n'|ai pas le numéro de Marie.", 'Tengo el número de Marie.', 'No tengo el número de Marie.', 'as'],
  ['Vous aimez la musique.', "Vous n'|aimez pas la musique.", 'A usted le gusta la música.', 'A usted no le gusta la música.', 'aime'],
  ['Ils parlent anglais.', 'Ils ne parlent pas anglais.', 'Ellos hablan inglés.', 'Ellos no hablan inglés.', 'parle'],
  ['Elle aime la danse.', "Elle n'|aime pas la danse.", 'A ella le gusta el baile.', 'A ella no le gusta el baile.', 'aimes']];
const elided = n => n[1].includes("n'|");
function negEx(mode){
  const n = pick(NEG), [aff, neg, ea, en, wf] = n, other = elided(n) ? 'ne' : "n'";
  if (mode === 'elide'){
    const gap = elided(n) ? neg.replace("n'|", '___ ') : neg.replace(' ne ', ' ___ ');
    return fMC('f-neg', 'Completa la negación', `<div class="qtext han">${esc(gap)}</div><div class="hint">${esc(en)}</div>`, ['ne', "n'", 'pas', 'non'].map(x => oFr(x)), elided(n) ? "n'" : 'ne',
      {h:frText(neg), p:'', es:en});
  }
  if (mode === 'listen'){
    const said = Math.random() < 0.5 ? 1 : 0, fr = frText(said ? neg : aff), es = said ? en : ea;
    const m = pick(NEG.filter(x => x !== n));
    return fMC('f-neg', 'Escucha y elige', audioBtns(fr, true), [ea, en, m[2], m[3]].map(t => oEs(t)), es, {h:fr, p:'', es}, {say:fr});
  }
  if (mode === 'speak') return fSpeak('f-neg', en, neg);
  if (mode === 'reply'){
    const thirds = NEG.filter(x => /^(Il|Elle|Ils) /.test(x[0])), t = pick(thirds), [ta, tn, , tes] = t;
    const qq = ta.replace(/\.$/, ' ?');
    const ans = 'Non, ' + lc1(tn);
    return fTiles('f-neg', 'Responde', bub('Amiga', qq) + `<div class="ask">Responde que no.</div>`, ans, 'No, ' + lc1(tes), [elided(t) ? 'ne' : "n'", t[4]], [], {say:qq});
  }
  // neg: affirmative → negative
  return fTiles('f-neg', 'Ponla en negativo', fq(aff), neg, en, [other, wf]);
}

FW('fb9', 'job', [
  ['j_me', 'médecin', 'méd·sẽ', 'médico / médica', 'Igual para mujeres: elle est médecin.'],
  ['j_av', 'avocat', 'a·vo·ka', 'abogado', 'Femenino: avocate (a·vo·kat).'],
  ['j_ar', 'architecte', 'ar·shi·tèkt', 'arquitecto / arquitecta'],
  ['j_pi', 'pilote', 'pi·lòt', 'piloto'],
  ['j_jo', 'journaliste', 'zhur·na·list', 'periodista'],
  ['j_ac', 'acteur', 'ak·tör', 'actor', 'Femenino: actrice (ak·tris).'],
  ['j_ch', 'chanteur', 'shã·tör', 'cantante', 'Femenino: chanteuse (shã·töz).'],
  ['j_ec', 'écrivain', 'é·kri·vẽ', 'escritor', 'Femenino: écrivaine (é·kri·vèn).'],
  ['j_et', 'étudiant', 'é·tü·diã', 'estudiante', 'Femenino: étudiante; ahí la t suena.'],
  ['j_in', 'informaticien', 'ẽ·for·ma·ti·siẽ', 'informático', 'Femenino: informaticienne.']]);
FG('f-job', 'fb9', 'profesiones');
const JOBS = [
  {m:'médecin', f:'médecin', em:'médico', ef:'médica', e:'🩺'}, {m:'avocat', f:'avocate', em:'abogado', ef:'abogada', e:'⚖️'},
  {m:'architecte', f:'architecte', em:'arquitecto', ef:'arquitecta', e:'📐'}, {m:'pilote', f:'pilote', em:'piloto', ef:'piloto', e:'✈️'},
  {m:'journaliste', f:'journaliste', em:'periodista', ef:'periodista', e:'📰'}, {m:'acteur', f:'actrice', em:'actor', ef:'actriz', e:'🎬'},
  {m:'chanteur', f:'chanteuse', em:'cantante', ef:'cantante', e:'🎤'}, {m:'écrivain', f:'écrivaine', em:'escritor', ef:'escritora', e:'✍️'},
  {m:'étudiant', f:'étudiante', em:'estudiante', ef:'estudiante', e:'🎓'}, {m:'informaticien', f:'informaticienne', em:'informático', ef:'informática', e:'💻'},
  {m:'professeur', f:'professeure', em:'profesor', ef:'profesora', e:'🧑‍🏫'}];
function jobEx(mode){
  const x = pick(JOBS), g = pick(['m', 'f']), [P, E] = pron3(g), jes = g === 'f' ? x.ef : x.em;
  const fr = `${P} est ${x[g]}.`, es = `${E} es ${jes}.`;
  if (mode === 'pic'){
    return fMC('f-job', '¿Qué profesión es?', `<div class="pic">${x.e}</div><div class="qtext han">Il est…</div>`, [x, ...others(JOBS, x, 3, j => j.m)].map(j => oFr(j.m)), x.m, {h:`Il est ${x.m}.`, p:'', es:`Él es ${x.em}.`});
  }
  if (mode === 'agree'){
    const y = pick(JOBS.filter(j => j !== x && j.m !== j.f));
    const opts = uniqBy([x[g], x[g === 'f' ? 'm' : 'f'], y[g], y[g === 'f' ? 'm' : 'f'], ...shuffle(JOBS).map(j => j[g])], t => t).slice(0, 4);
    return fMC('f-job', 'Elige la forma correcta', `<div class="qtext">${esc(es)}</div><div class="qtext han">${P} est ___.</div>`, opts.map(t => oFr(t)), x[g], {h:fr, p:'', es});
  }
  if (mode === 'listen'){
    const y = pick(JOBS.filter(j => j !== x)), og = g === 'f' ? 'm' : 'f';
    const e = (j, gg) => `${pron3(gg)[1]} es ${gg === 'f' ? j.ef : j.em}.`;
    return fMC('f-job', 'Escucha y elige', audioBtns(fr, true), uniqBy([e(x, g), e(x, og), e(y, g), e(y, og)], t => t).map(t => oEs(t)), e(x, g), {h:fr, p:'', es}, {say:fr});
  }
  if (mode === 'speak') return fSpeak('f-job', es, fr);
  return fTiles('f-job', 'Tradúcelo al francés', fcue(es) + '<div class="hint">Sin artículo, como en español.</div>', fr, es, [g === 'f' ? 'une' : 'un', x.m !== x.f ? x[g === 'f' ? 'm' : 'f'] : (g === 'f' ? 'il' : 'elle')]);
}

FS('fb10', [
  ['fs_p1', "Je m'appelle Diego, je suis péruvien et j'ai 30 ans.", 'Me llamo Diego, soy peruano y tengo 30 años.', ['péruvienne', 'es', 'an']],
  ['fs_p2', 'Elle est architecte et elle habite à Montréal.', 'Ella es arquitecta y vive en Montreal.', ['une', 'au', 'il']],
  ['fs_p3', 'Il parle français et anglais.', 'Él habla francés e inglés.', ['parles', 'le', 'elle'], ['Il parle anglais et français.']],
  ['fs_p4', "Je n'|habite pas en France, j'habite au Pérou.", 'No vivo en Francia, vivo en el Perú.', ['ne', 'à', 'aux']]]);
FG('f-id', 'fb10', 'ficha de identidad');
const ORIG = [{c:'Pérou', nat:'péruvien', city:'Lima', l:'espagnol'}, {c:'France', nat:'français', city:'Paris', l:'français'}, {c:'Belgique', nat:'belge', city:'Bruxelles', l:'français'},
  {c:'Canada', nat:'canadien', city:'Montréal', l:'français'}, {c:'Mexique', nat:'mexicain', city:'Guadalajara', l:'espagnol'}, {c:'Italie', nat:'italien', city:'Rome', l:'italien'},
  {c:'Suisse', nat:'suisse', city:'Genève', l:'français'}, {c:'Espagne', nat:'espagnol', city:'Madrid', l:'espagnol'}, {c:'Sénégal', nat:'sénégalais', city:'Dakar', l:'français'}];
const ID_M = ['Marc', 'Hugo', 'Diego', 'Karim', 'Paul', 'Lucas', 'Omar', 'Thomas'], ID_F = ['Ana', 'Léa', 'Inès', 'Nadia', 'Marie', 'Sofia', 'Camille', 'Julia'];
const ID_L = ['Martin', 'Dubois', 'Rojas', 'Diallo', 'Tremblay', 'Bernard', 'Moreau', 'Quispe'];
[...ID_M, ...ID_F, ...ID_L].forEach(n => FR_NAMES.add(n));
function person(){
  const g = pick(['m', 'f']), o = pick(ORIG), N = natOf(o.nat), J = pick(JOBS);
  const l2 = pick(LANGS_FR.filter(l => l[0] !== o.l && ['anglais', 'français', 'espagnol'].includes(l[0])));
  return {g, first:pick(g === 'f' ? ID_F : ID_M), last:pick(ID_L), age:rint(20, 69), o, N, nat:N[g], natEs:g === 'f' ? N.ef : N.em, J, job:J[g], jobEs:g === 'f' ? J.ef : J.em,
    langs:[o.l, l2[0]], langsEs:[LANGS_FR.find(l => l[0] === o.l)[1], l2[1]], ce:COUNTRIES.find(c => c.h === o.c)};
}
const fiche = p => `<dl class="fiche"><dt>Nom</dt><dd>${esc(p.last)}</dd><dt>Prénom</dt><dd>${esc(p.first)}</dd><dt>Âge</dt><dd>${p.age} ans</dd><dt>Nationalité</dt><dd>${esc(p.nat)}</dd>
  <dt>Profession</dt><dd>${esc(p.job)}</dd><dt>Ville</dt><dd>${esc(p.o.city)} (${esc(p.o.c)})</dd><dt>Langues</dt><dd>${esc(p.langs.join(', '))}</dd></dl>`;
function idFacts(p){
  const [P, E] = pron3(p.g);
  return {
    name:{q:`${P} s'appelle comment ?`, a:`${P} s'appelle ${p.first} ${p.last}.`, es:`${E} se llama ${p.first} ${p.last}.`, tr:[p.g === 'f' ? 'il' : 'elle', "m'appelle"]},
    age:{q:`${P} a quel âge ?`, a:`${P} a ${p.age} ans.`, es:`${E} tiene ${p.age} años.`, tr:['est', 'an']},
    nat:{q:`${P} est de quelle nationalité ?`, a:`${P} est ${p.nat}.`, es:`${E} es ${p.natEs}.`, tr:[p.N.m !== p.N.f ? p.N[p.g === 'f' ? 'm' : 'f'] : (p.g === 'f' ? 'il' : 'elle'), 'a']},
    job:{q:'Quelle est sa profession ?', a:`${P} est ${p.job}.`, es:`${E} es ${p.jobEs}.`, tr:[p.g === 'f' ? 'une' : 'un', 'a']},
    city:{q:`${P} habite où ?`, a:`${P} habite à ${p.o.city}.`, es:`${E} vive en ${p.ce.ce}.`, tr:['au', 'en']},
    lang:{q:`${P} parle quelles langues ?`, a:`${P} parle ${p.langs[0]} et ${p.langs[1]}.`, es:`${E} habla ${p.langsEs[0]} y ${p.langsEs[1]}.`, tr:['parles', 'le'], alt:[`${P} parle ${p.langs[1]} et ${p.langs[0]}.`]}};
}
const FIELD_ES = {name:'su nombre', age:'su edad', nat:'su nacionalidad', job:'su profesión', city:'dónde vive', lang:'qué idiomas habla'};
function idEx(mode){
  const p = person(), F = idFacts(p), k = pick(Object.keys(F)), f = F[k];
  if (mode === 'present') return fTiles('f-id', 'Presenta a la persona', fiche(p) + `<div class="ask">Di <b>${FIELD_ES[k]}</b>.</div>`, f.a, f.es, f.tr, f.alt || []);
  if (mode === 'ask'){
    const opts = [k, ...shuffle(Object.keys(F).filter(x => x !== k)).slice(0, 3)];
    return fMC('f-id', 'Responde la pregunta', fiche(p) + bub('Pregunta', f.q), opts.map(x => oFr(F[x].a)), f.a, {h:f.a, p:'', es:f.es}, {say:f.q});
  }
  if (mode === 'q'){
    const opts = [k, ...shuffle(Object.keys(F).filter(x => x !== k)).slice(0, 3)];
    return fMC('f-id', '¿Cuál es la pregunta?', `<div class="ask">Respuesta:</div>${fq(f.a)}`, opts.map(x => oFr(F[x].q)), f.q, {h:f.q, p:'', es:f.es});
  }
  if (mode === 'speak') return fSpeak('f-id', f.es, f.a);
  // listen: a self-introduction
  const fr = `Je m'appelle ${p.first}. Je suis ${p.nat} et j'ai ${p.age} ans.`;
  const n2 = pick(NATS.filter(n => n !== p.N)), a2 = frConf(p.age, 20, 69, 1)[0];
  const s = (natEs, age) => `${p.first}: ${natEs}, ${age} años`;
  const o2 = p.g === 'f' ? n2.ef : n2.em;
  const opts = uniqBy([s(p.natEs, p.age), s(o2, p.age), s(p.natEs, a2), s(o2, a2)], t => t);
  return fMC('f-id', 'Escucha y elige', audioBtns(fr, true), opts.map(t => oEs(t)), opts[0], {h:fr, p:'', es:`Me llamo ${p.first}. Soy ${p.natEs} y tengo ${p.age} años.`}, {say:fr});
}
