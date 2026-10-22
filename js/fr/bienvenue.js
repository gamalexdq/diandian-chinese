/* =================== Ruta 1 · Bienvenue (unidad 0) =================== */
FW('fa1', 'greet', [
  ['g_bj', 'bonjour', 'bõ·zhur', 'hola / buenos días', 'Sirve desde la mañana hasta el atardecer.'],
  ['g_bs', 'bonsoir', 'bõ·suar', 'buenas noches (al llegar)', 'Para saludar desde el atardecer. Para irse a dormir se dice bonne nuit.'],
  ['g_sa', 'salut', 'sa·lü', 'hola / chau (con amigos)', 'Informal. La t final no suena.'],
  ['g_ar', 'au revoir', 'o·rë·vuar', 'adiós'],
  ['g_ab', 'à bientôt', 'a·biẽ·to', 'hasta pronto'],
  ['g_me', 'merci', 'mèr·si', 'gracias'],
  ['g_cv', 'ça va ?', 'sa·va', '¿qué tal? / ¿todo bien?', 'Se responde igual: «Ça va !». La ç suena como s.'],
  ['g_tb', 'très bien', 'trè·biẽ', 'muy bien'],
  ['g_ma', 'madame', 'ma·dam', 'señora'],
  ['g_mo', 'monsieur', 'më·siö', 'señor', 'Se escribe monsieur, pero suena «më·siö».']]);
FS('fa1', [
  ['fs_g1', 'Bonjour, madame.', 'Buenos días, señora.', ['bonsoir', 'monsieur', 'salut']],
  ['fs_g2', 'Salut, ça va ?', 'Hola, ¿qué tal? (a un amigo)', ['bonsoir', 'vous', 'très']],
  ['fs_g3', 'Oui, ça va, et toi ?', 'Sí, todo bien, ¿y tú?', ['vous', 'moi', 'très']],
  ['fs_g5', 'Très bien, merci. Et vous ?', 'Muy bien, gracias. ¿Y usted?', ['toi', 'bonjour', 'pas']],
  ['fs_g6', 'Au_revoir, monsieur. À_bientôt !', 'Adiós, señor. ¡Hasta pronto!', ['bonsoir', 'madame', 'toi']]]);
FG('f-greet', 'fa1', 'saludos en contexto');
const GREET = [
  {s:'8 a. m. Entras a una panadería y te atiende una señora.', a:'Bonjour, madame.', w:['Bonsoir, madame.', 'Au revoir, madame.', 'Bonjour, monsieur.']},
  {s:'Ves a tu amiga Léa en la universidad.', a:'Salut, Léa !', w:['Au revoir, Léa !', 'Bonsoir, madame.', 'Merci, Léa !']},
  {s:'8 p. m. Llegas a una cena y saludas al papá de un amigo.', a:'Bonsoir, monsieur.', w:['Bonjour, monsieur.', 'Salut, monsieur !', 'Au revoir, monsieur.']},
  {s:'Sales de una tienda. Te atendió un señor.', a:'Au revoir, monsieur.', w:['Bonjour, monsieur.', 'Bonsoir, madame.', 'Salut, Léa !']},
  {s:'Tu amigo te pregunta «Ça va ?». Estás bien.', a:'Oui, ça va, et toi ?', w:['Très bien, merci. Et vous ?', 'Au revoir !', 'Bonsoir, monsieur.']},
  {s:'Tu profesora te pregunta «Vous allez bien ?». Estás muy bien.', a:'Très bien, merci. Et vous ?', w:['Oui, ça va, et toi ?', 'Salut !', 'Au revoir, madame.']},
  {s:'Quieres preguntarle a tu vecina mayor cómo está.', a:'Vous allez bien, madame ?', w:['Tu vas bien, madame ?', 'Au revoir, madame.', 'Merci, madame.']},
  {s:'Quieres preguntarle a tu hermano cómo está.', a:'Tu vas bien ?', w:['Vous allez bien ?', 'Bonsoir, monsieur.', 'Au revoir !']},
  {s:'Una señora te abre la puerta.', a:'Merci, madame !', w:['Bonsoir, monsieur !', 'Au revoir, Léa !', 'Salut, madame !']},
  {s:'Te despides de un amigo; lo verás pronto.', a:'Salut, à bientôt !', w:['Bonjour, monsieur.', 'Bonsoir, madame.', 'Très bien, merci.']}];
const TV = [['tu mejor amiga', 'tu', 'con amigos se usa tu'], ['tu profesora', 'vous', 'por respeto se usa vous'], ['tu hermano menor', 'tu', 'en familia se usa tu'], ['un niño de 8 años', 'tu', 'con niños se usa tu'],
  ['la recepcionista de un hotel', 'vous', 'con alguien que no conoces se usa vous'], ['tu abuela', 'tu', 'en familia se usa tu'], ['un policía', 'vous', 'con alguien que no conoces se usa vous'],
  ['dos amigos a la vez', 'vous', 'para varias personas siempre se usa vous'], ['el director de la universidad', 'vous', 'por respeto se usa vous'], ['tu primo', 'tu', 'en familia se usa tu']];
const GREET_L = [['Bonjour, madame.', 'Buenos días, señora.'], ['Bonjour, monsieur.', 'Buenos días, señor.'], ['Bonsoir, monsieur.', 'Buenas noches, señor.'], ['Bonsoir, madame.', 'Buenas noches, señora.'],
  ['Au revoir, madame.', 'Adiós, señora.'], ['Salut, ça va ?', 'Hola, ¿qué tal?'], ['Très bien, merci.', 'Muy bien, gracias.'], ['À bientôt !', '¡Hasta pronto!'], ['Merci, monsieur.', 'Gracias, señor.']];
function greetEx(mode){
  if (mode === 'tuvous'){
    const [who, a, why] = pick(TV);
    return fMC('f-greet', '¿Tu o vous?', `<div class="qtext">Le hablas a ${esc(who)}.</div><div class="hint">¿Tuteas (tu) o hablas de usted (vous)?</div>`, [oFr('tu'), oFr('vous')], a,
      {h:a === 'tu' ? 'Tu vas bien ?' : 'Vous allez bien ?', p:'', es:`A ${who}: ${why}.`});
  }
  if (mode === 'listen' || mode === 'speak'){
    const [fr, es] = pick(GREET_L);
    if (mode === 'speak') return fSpeak('f-greet', es, fr);
    return fMC('f-greet', 'Escucha y elige', audioBtns(fr, true), [oEs(es), ...others(GREET_L, [fr, es], 3, g => g[1]).map(g => oEs(g[1]))], es, {h:fr, p:'', es}, {say:fr});
  }
  const g = pick(GREET);
  return fMC('f-greet', '¿Qué dices?', `<div class="qtext" style="font-size:20px">${esc(g.s)}</div>`, [oFr(g.a), ...g.w.map(w => oFr(w))], g.a, {h:g.a, p:'', es:g.s});
}

FW('fa2', 'abc', [
  ['a_le', 'une lettre', 'ün·lètr', 'una letra'],
  ['a_vo', 'une voyelle', 'ün·vua·yèl', 'una vocal', 'Las vocales: a, e, i, o, u, y.'],
  ['a_co', 'une consonne', 'ün·kõ·sòn', 'una consonante'],
  ['a_ec', "Comment ça s'écrit ?", 'ko·mã·sa·sé·kri', '¿cómo se escribe?']]);
FG('f-abc', 'fa2', 'deletrear');
const LETTER_P = {A:'a', B:'bé', C:'sé', D:'dé', E:'ë', F:'èf', G:'zhé', H:'ash', I:'i', J:'zhi', K:'ka', L:'èl', M:'èm', N:'èn', O:'o', P:'pé', Q:'kü', R:'èr', S:'ès', T:'té', U:'ü', V:'vé', W:'du·blë·vé', X:'iks', Y:'i·grèk', Z:'zèd'};
const ABC_SETS = [['E', 'I', 'U', 'A'], ['G', 'J', 'H', 'I'], ['C', 'S', 'K', 'Q'], ['Q', 'K', 'U', 'C'], ['Y', 'I', 'E', 'J'], ['V', 'W', 'B', 'F'], ['G', 'J', 'E', 'I'], ['A', 'H', 'R', 'E']];
const SPELL = ['HUGO', 'JULES', 'EMMA', 'LOUIS', 'MANON', 'CAMILLE', 'QUENTIN', 'YANIS', 'GABRIEL', 'JULIE', 'XAVIER', 'GUY', 'AXEL', 'JEAN', 'ROGER', 'GILLES'];
const SWAP = {G:'J', J:'G', E:'I', I:'E', U:'I', Q:'K', K:'Q', C:'S', S:'C', Y:'I', W:'V', V:'W', H:'A', A:'H'};
const ACRO = [['SNCF', 'la red de trenes de Francia'], ['RATP', 'el metro y los buses de París'], ['SMS', 'un mensaje de texto'], ['TGV', 'el tren de alta velocidad'],
  ['BD', 'un cómic (bande dessinée)'], ['PDG', 'el gerente general de una empresa'], ['UE', 'la Unión Europea']];
// "EMMA" → "E, deux M, A"
function spellSay(w){
  const out = [];
  for (let i = 0; i < w.length; i++){ if (w[i + 1] === w[i]){ out.push('deux ' + w[i]); i++; } else out.push(w[i]); }
  return out.join(', ');
}
const frCap = w => w[0] + w.slice(1).toLowerCase();
function abcEx(mode){
  if (mode === 'letter'){
    const set = pick(ABC_SETS), x = pick(set);
    return fMC('f-abc', 'Escucha la letra', audioBtns(x, true), set.map(l => oFr(l, l, LV >= 2 ? '' : `<small>${pyHTML(LETTER_P[l])}</small>`)), x, {h:x, p:LETTER_P[x], es:'la letra ' + x}, {say:x});
  }
  if (mode === 'acro'){
    const [a, es] = pick(ACRO);
    return fMC('f-abc', 'Escucha la sigla', audioBtns(spellSay(a), true), [oFr(a), ...others(ACRO, ACRO.find(r => r[0] === a), 3, r => r[0]).map(r => oFr(r[0]))], a, {h:a, p:'', es:`${a}: ${es}`}, {say:spellSay(a)});
  }
  const w = pick(SPELL), s = spellSay(w);
  if (mode === 'speak') return fSpeak('f-abc', 'Deletrea en voz alta: ' + w, s, 'Di cada letra en francés; las dobles, con «deux».');
  if (mode === 'type') return {t:'type', item:'f-abc', kind:'Escucha y escribe el nombre', say:s, q:audioBtns(s), answer:w, ph:'Escribe el nombre', hint:'Te lo deletrean letra por letra.', rev:{h:frCap(w), p:'', es:'Se deletrea: ' + s}};
  const vars = [];
  for (const i of shuffle([...w].map((_, i) => i))) if (SWAP[w[i]]){ const v = w.slice(0, i) + SWAP[w[i]] + w.slice(i + 1); if (v !== w && !vars.includes(v)) vars.push(v); }
  shuffle(SPELL).forEach(o => { if (o !== w && !vars.includes(o)) vars.push(o); });
  return fMC('f-abc', 'Escucha y elige el nombre', audioBtns(s, true), [oFr(w, w), ...vars.slice(0, 3).map(v => oFr(v, v))].map(o => ({...o, say:undefined})), w, {h:frCap(w), p:'', es:'Se deletrea: ' + s}, {say:s});
}

FW('fa3', 'name', [
  ['n_je', "je m'appelle", 'zhë·ma·pèl', 'me llamo'],
  ['n_il', "il s'appelle", 'il·sa·pèl', 'él se llama'],
  ['n_el', "elle s'appelle", 'èl·sa·pèl', 'ella se llama'],
  ['n_mo', 'moi', 'mua', 'yo (para reforzar)', 'Moi, je m\'appelle Ana. = Yo me llamo Ana.'],
  ['n_to', 'toi', 'tua', 'tú (para reforzar)'],
  ['n_ev', 'et vous ?', 'é·vu', '¿y usted?'],
  ['n_et', 'et toi ?', 'é·tua', '¿y tú?'],
  ['n_en', 'enchanté', 'ã·shã·té', 'encantado / encantada', 'En femenino se escribe enchantée, pero suena igual.']]);
FS('fa3', [
  ['fs_n1', "Comment tu t'appelles ?", '¿Cómo te llamas?', ['vous', 'appelez', "s'appelle"], ["Tu t'appelles comment ?"]],
  ['fs_n2', 'Comment vous vous appelez ?', '¿Cómo se llama usted?', ['tu', "t'appelles", 'allez'], ['Vous vous appelez comment ?']],
  ['fs_n3', "Je m'appelle Ana, et toi ?", 'Me llamo Ana, ¿y tú?', ['me', 'appelle', 'vous']],
  ['fs_n4', "Moi, je m'appelle Hugo.", 'Yo me llamo Hugo.', ['toi', "s'appelle", 'tu'], ["Je m'appelle Hugo."]],
  ['fs_n5', "Elle s'appelle Léa.", 'Ella se llama Léa.', ['il', "m'appelle", 'est']],
  ['fs_n6', "Il s'appelle comment ?", '¿Cómo se llama él?', ['elle', 'tu', "t'appelles"], ["Comment il s'appelle ?"]]]);
FG('f-name', 'fa3', 'presentarse');
const PEOPLE = [['Hugo', 'm'], ['Léa', 'f'], ['Ana', 'f'], ['Diego', 'm'], ['Inès', 'f'], ['Paul', 'm'], ['Marie', 'f'], ['Lucas', 'm'], ['Nadia', 'f'], ['Karim', 'm']];
PEOPLE.forEach(p => FR_NAMES.add(p[0]));
const ASKNAME = [['a la profesora', 'vous'], ['a un compañero de clase', 'tu'], ['a un niño', 'tu'], ['al recepcionista del hotel', 'vous'], ['a una señora en el tren', 'vous'], ['a tu nueva vecina de 20 años, en una fiesta', 'tu']];
function nameEx(mode){
  const [nm, g] = pick(PEOPLE);
  if (mode === 'reply'){
    const tv = pick(['tu', 'vous']);
    const qq = tv === 'tu' ? "Comment tu t'appelles ?" : 'Comment vous vous appelez ?';
    return fTiles('f-name', 'Responde', bub(tv === 'tu' ? 'Compañero' : 'Profesora', qq) + `<div class="ask">Responde: te llamas <b>${esc(nm)}</b>.</div>`, `Je m'appelle ${nm}.`, `Me llamo ${nm}.`, ["t'appelles", "s'appelle", 'me', 'appelle'], [], {say:qq});
  }
  if (mode === 'ask'){
    const [who, tv] = pick(ASKNAME);
    return tv === 'tu'
      ? fTiles('f-name', 'Pregunta', `<div class="ask">Pregúntale su nombre ${esc(who)}.</div>`, "Comment tu t'appelles ?", '¿Cómo te llamas?', ['vous', 'appelez', "s'appelle"], ["Tu t'appelles comment ?"])
      : fTiles('f-name', 'Pregunta', `<div class="ask">Pregúntale su nombre ${esc(who)}.</div>`, 'Comment vous vous appelez ?', '¿Cómo se llama usted?', ['tu', "t'appelles", "s'appelle"], ['Vous vous appelez comment ?']);
  }
  const forms = [["m'appelle", 'je', 'Yo me llamo'], ["t'appelles", 'tu', 'Tú te llamas'], ["s'appelle", g === 'm' ? 'il' : 'elle', g === 'm' ? 'Él se llama' : 'Ella se llama']];
  const [f, pr, es] = pick(forms);
  const full = `${pr[0].toUpperCase() + pr.slice(1)} ${f} ${nm}.`;
  if (mode === 'pron') return fMC('f-name', 'Completa', `<div class="qtext han">___ ${esc(f)} ${esc(nm)}.</div><div class="hint">${esc(es)} ${esc(nm)}.</div>`,
    ['je', 'tu', 'il', 'elle'].map(x => oFr(x)), pr, {h:full, p:'', es:`${es} ${nm}.`});
  if (mode === 'speak') return fSpeak('f-name', `${es} ${nm}.`, full);
  const L = [[`Je m'appelle ${nm}.`, `Me llamo ${nm}.`], [`Il s'appelle ${nm}.`, `Él se llama ${nm}.`], [`Elle s'appelle ${nm}.`, `Ella se llama ${nm}.`], [`Tu t'appelles ${nm} ?`, `¿Te llamas ${nm}?`]];
  const [fr, e] = pick(L.filter((_, k) => k !== (g === 'm' ? 2 : 1)));
  return fMC('f-name', 'Escucha y elige', audioBtns(fr, true), L.map(r => oEs(r[1])), e, {h:fr, p:'', es:e}, {say:fr});
}

FW('fa4', 'num', [
  ['z_0', 'zéro', 'zé·ro', '0'], ['z_1', 'un', 'ẽ', '1', 'Femenino: une (ün).'], ['z_2', 'deux', 'dö', '2', 'La x final no suena.'], ['z_3', 'trois', 'trua', '3'], ['z_4', 'quatre', 'katr', '4'],
  ['z_5', 'cinq', 'sẽk', '5', 'La q suena «k».'], ['z_6', 'six', 'sis', '6', 'Solo, la x suena «s».'], ['z_7', 'sept', 'sèt', '7', 'La p no suena.'], ['z_8', 'huit', 'üit', '8', 'La h no suena.'],
  ['z_9', 'neuf', 'nöf', '9'], ['z_10', 'dix', 'dis', '10', 'Solo, la x suena «s».']]);
FG('f-n10', 'fa4', 'números 0–10');
FW('fa5', 'num', [
  ['z_11', 'onze', 'õz', '11'], ['z_12', 'douze', 'duz', '12'], ['z_13', 'treize', 'trèz', '13'], ['z_14', 'quatorze', 'ka·tòrz', '14'], ['z_15', 'quinze', 'kẽz', '15'],
  ['z_16', 'seize', 'sèz', '16'], ['z_20', 'vingt', 'vẽ', '20', 'Ni la g ni la t suenan.'], ['z_30', 'trente', 'trãt', '30']]);
FG('f-n31', 'fa5', 'números 11–31');
function numGen(item, lo, hi){
  return mode => {
    let n = rint(lo, hi);
    if (hi === 100 && Math.random() < 0.55) n = rint(60, 99);
    const w = frNum(n), rev = {h:w, p:'', es:String(n)};
    if (mode === 'listen') return {t:'digits', item, kind:'Escucha y escribe el número', say:w, q:audioBtns(w, true), answer:String(n), rev};
    if (mode === 'read') return {t:'digits', item, kind:'¿Qué número es?', q:fq(w, LV < 2), answer:String(n), rev};
    if (mode === 'speak') return fSpeak(item, String(n), w, 'Dilo en francés antes de ver la respuesta.');
    if (mode === 'calc'){
      const plus = Math.random() < 0.6;
      let a, b, r;
      if (plus){ r = rint(Math.max(2, lo), hi); a = rint(1, r - 1); b = r - a; } else { a = rint(Math.max(2, lo), hi); b = rint(1, a - 1); r = a - b; }
      const op = plus ? 'plus' : 'moins', sign = plus ? '+' : '−';
      const sp = `${frNum(a)} ${op} ${frNum(b)}`;
      return {t:'digits', item, kind:'Escucha la cuenta y resuélvela', say:sp, q:`<div class="qtext han">${esc(frNum(a))} ${sign} ${esc(frNum(b))} = ?</div>${audioBtns(sp)}`, answer:String(r), hint:'Escribe el resultado con cifras.',
        rev:{h:`${sp} égale ${frNum(r)}`, p:'', es:`${a} ${sign} ${b} = ${r}`}};
    }
    // mc / spell: the number in digits, choose how it is written
    const opts = [n, ...frConf(n, lo === 32 ? 20 : 0, hi)];
    return fMC(item, '¿Cómo se escribe?', `<div class="g7num">${n}</div>`, opts.map(x => oFr(frNum(x))), w, rev);
  };
}
const n10Ex = numGen('f-n10', 0, 10), n31Ex = numGen('f-n31', 11, 31), n100Ex = numGen('f-n100', 32, 100);

FW('fa6', 'day', [
  ['d_1', 'lundi', 'lẽ·di', 'lunes', 'Los días van en minúscula y sin artículo.'], ['d_2', 'mardi', 'mar·di', 'martes'], ['d_3', 'mercredi', 'mèr·krë·di', 'miércoles'],
  ['d_4', 'jeudi', 'zhö·di', 'jueves'], ['d_5', 'vendredi', 'vã·drë·di', 'viernes'], ['d_6', 'samedi', 'sam·di', 'sábado'], ['d_7', 'dimanche', 'di·mãsh', 'domingo'],
  ['d_au', "aujourd'hui", 'o·zhur·düi', 'hoy'], ['d_de', 'demain', 'dë·mẽ', 'mañana', 'Mañana (el día siguiente). La mañana del día es le matin.']]);
FG('f-day', 'fa6', 'días de la semana');
const DAYS = [['lundi', 'lunes'], ['mardi', 'martes'], ['mercredi', 'miércoles'], ['jeudi', 'jueves'], ['vendredi', 'viernes'], ['samedi', 'sábado'], ['dimanche', 'domingo']];
function dayEx(mode){
  const i = rint(0, 6), [d, de] = DAYS[i], [n, ne] = DAYS[(i + 1) % 7];
  if (mode === 'next'){
    const s1 = `Aujourd'hui, c'est ${d}.`;
    return fMC('f-day', 'Completa', `<div class="qtext han">${esc(s1)}<br>Demain, c'est…</div>${audioBtns(s1)}`, [(i + 1) % 7, i, (i + 2) % 7, (i + 6) % 7].map(k => oFr(DAYS[k][0])), n,
      {h:`${s1} Demain, c'est ${n}.`, p:'', es:`Hoy es ${de}. Mañana es ${ne}.`});
  }
  if (mode === 'listen') return fMC('f-day', 'Escucha y elige', audioBtns(d, true), [oEs(de), ...others(DAYS, DAYS[i], 3, r => r[1]).map(r => oEs(r[1]))], de, {h:d, p:'', es:de}, {say:d});
  const isToday = Math.random() < 0.6, other = pick(DAYS.filter((_, k) => k !== i))[0];
  const fr = isToday ? `Aujourd'hui, c'est ${d}.` : `Demain, c'est ${d}.`, es = (isToday ? 'Hoy es ' : 'Mañana es ') + de + '.';
  if (mode === 'speak') return fSpeak('f-day', es, fr);
  return fTiles('f-day', 'Tradúcelo al francés', fcue(es), fr, es, [isToday ? 'demain' : "aujourd'hui", other, 'est']);
}

FW('fa7', 'season', [
  ['s_pr', 'le printemps', 'lë·prẽ·tã', 'la primavera', 'Masculino en francés.'],
  ['s_et', "l'été", 'lé·té', 'el verano'],
  ['s_au', "l'automne", 'lo·tòn', 'el otoño', 'La m no suena.'],
  ['s_hi', "l'hiver", 'li·vèr', 'el invierno', 'La h no suena.'],
  ['s_1', 'le premier', 'lë·prë·mié', 'el primero (el día 1)', 'Para fechas: le premier mai = el 1 de mayo.']]);
FG('f-month', 'fa7', 'meses y fechas');
const MONTHS = [['janvier', 'enero'], ['février', 'febrero'], ['mars', 'marzo'], ['avril', 'abril'], ['mai', 'mayo'], ['juin', 'junio'], ['juillet', 'julio'], ['août', 'agosto'],
  ['septembre', 'septiembre'], ['octobre', 'octubre'], ['novembre', 'noviembre'], ['décembre', 'diciembre']];
const SEASON_OF = {0:'hi', 1:'hi', 3:'pr', 4:'pr', 6:'et', 7:'et', 9:'au', 10:'au'};
const FR_SEASONS = {pr:['le printemps', 'la primavera'], et:["l'été", 'el verano'], au:["l'automne", 'el otoño'], hi:["l'hiver", 'el invierno']};
const dayFr = d => d === 1 ? 'premier' : frNum(d);
function frMonthEx(mode){
  const i = rint(0, 11), [m, me] = MONTHS[i];
  if (mode === 'listen'){
    const opts = uniqBy([MONTHS[(i + 1) % 12], MONTHS[(i + 11) % 12], ...shuffle(MONTHS)].filter(r => r[0] !== m), r => r[0]).slice(0, 3);
    return fMC('f-month', 'Escucha y elige', audioBtns(m, true), [oEs(me), ...opts.map(r => oEs(r[1]))], me, {h:m, p:'', es:me}, {say:m});
  }
  if (mode === 'pick'){
    const opts = uniqBy([MONTHS[(i + 1) % 12], ...shuffle(MONTHS)].filter(r => r[0] !== m), r => r[0]).slice(0, 3);
    return fMC('f-month', 'Elige en francés', fcue(me), [oFr(m), ...opts.map(r => oFr(r[0]))], m, {h:m, p:'', es:me});
  }
  if (mode === 'season'){
    const k = +pick(Object.keys(SEASON_OF)), [mm, mme] = MONTHS[k], s = FR_SEASONS[SEASON_OF[k]];
    return fMC('f-month', 'En Francia', `<div class="qtext han">${esc(mm)}</div>${audioBtns(mm)}<div class="ask">¿Qué estación es en Francia?</div>`, Object.values(FR_SEASONS).map(x => oFr(x[0])), s[0],
      {h:`${mm} : ${s[0]}`, p:'', es:`En Francia, ${mme} es ${s[1]}. En Perú es al revés.`});
  }
  const d = rint(1, 28), fr = `le ${dayFr(d)} ${m}`, es = `el ${d} de ${me}`;
  if (mode === 'date'){
    const [d2] = frConf(d, 1, 28, 1), [d3] = frConf(d, 1, 28, 1).concat(rint(1, 28));
    const m2 = MONTHS[(i + 1) % 12][1], m3 = MONTHS[(i + 11) % 12][1];
    const cands = uniqBy([`${d} de ${me}`, `${d2} de ${me}`, `${d} de ${m2}`, `${d3} de ${m3}`, `${d2} de ${m2}`, `${d} de ${m3}`], x => x).slice(0, 4);
    return fMC('f-month', 'Escucha la fecha', audioBtns(fr, true), cands.map(x => oEs(x)), `${d} de ${me}`, {h:fr, p:'', es}, {say:fr});
  }
  if (mode === 'speak') return fSpeak('f-month', es, fr);
  const src = `le ${d === 1 ? 'premier' : d} ${m}`;
  return fTiles('f-month', 'Escribe la fecha en francés', fcue(es), src, es, ['de', d === 1 ? 'un' : 'premier', MONTHS[(i + 1) % 12][0]]);
}

FS('fa8', [
  ['fs_c1', 'Je ne comprends pas.', 'No entiendo.', ["n'", 'comprend', 'suis']],
  ['fs_c2', "Vous pouvez répéter, s'il_vous_plaît ?", '¿Puede repetir, por favor?', ["s'il_te_plaît", 'tu', 'comprends']],
  ['fs_c3', 'Comment on dit merci en espagnol ?', '¿Cómo se dice «merci» en español?', ['écrit', 'français', 'vous']],
  ['fs_c4', 'Excusez-moi, je suis en retard.', 'Disculpe, llego tarde.', ['excuse-moi', 'es', 'tu']],
  ['fs_c5', "Tu peux répéter, s'il_te_plaît ?", '¿Puedes repetir, por favor?', ["s'il_vous_plaît", 'pouvez', 'vous'], ["S'il_te_plaît, tu peux répéter ?"]],
  ['fs_c6', "J'ai une question.", 'Tengo una pregunta.', ['suis', 'un', 'as']]]);
FG('f-class', 'fa8', 'frases de la clase');
const CLASS = [
  {id:'rv', s:'El profesor habla muy rápido y no captas nada.', a:"Vous pouvez répéter, s'il vous plaît ?", es:'¿Puede repetir, por favor?', not:['nc']},
  {id:'nc', s:'No entiendes la explicación.', a:'Je ne comprends pas.', es:'No entiendo.', not:['rv', 'rt']},
  {id:'lt', s:'Llegas 10 minutos tarde a clase.', a:'Excusez-moi, je suis en retard.', es:'Disculpe, llego tarde.', not:['pd']},
  {id:'cd', s:'Quieres saber cómo se dice «gracias» en francés.', a:'Comment on dit « gracias » en français ?', es:'¿Cómo se dice «gracias» en francés?', not:[]},
  {id:'ce', s:'No sabes cómo se escribe una palabra.', a:"Comment ça s'écrit ?", es:'¿Cómo se escribe?', not:[]},
  {id:'pd', s:'Chocas con alguien sin querer en el pasillo.', a:'Pardon !', es:'¡Perdón!', not:['lt']},
  {id:'rt', s:'Tu compañero de clase habla muy rápido.', a:"Tu peux répéter, s'il te plaît ?", es:'¿Puedes repetir, por favor?', not:['nc']},
  {id:'qu', s:'Quieres hacerle una pregunta a la profesora.', a:"J'ai une question.", es:'Tengo una pregunta.', not:[]}];
function classEx(mode){
  const c = pick(CLASS);
  const pool = shuffle(CLASS.filter(x => x.id !== c.id && !c.not.includes(x.id))).slice(0, 3);
  if (mode === 'listen') return fMC('f-class', 'Escucha y elige', audioBtns(c.a, true), [c, ...pool].map(x => oEs(x.es)), c.es, {h:c.a, p:'', es:c.es}, {say:c.a});
  if (mode === 'speak') return fSpeak('f-class', c.s, c.a, 'Dilo en francés.');
  return fMC('f-class', '¿Qué dices?', `<div class="qtext" style="font-size:20px">${esc(c.s)}</div>`, [c, ...pool].map(x => oFr(x.a)), c.a, {h:c.a, p:'', es:c.es});
}
