/* ---------- generators, modes and levels ---------- */
Object.assign(GEN, {'f-greet':greetEx, 'f-abc':abcEx, 'f-name':nameEx, 'f-n10':n10Ex, 'f-n31':n31Ex, 'f-day':dayEx, 'f-month':frMonthEx, 'f-class':classEx,
  'f-nat':frNatEx, 'f-age':ageEx, 'f-conj':conjEx, 'f-art':artEx, 'f-n100':n100Ex, 'f-prep':prepEx, 'f-phone':phoneEx, 'f-neg':negEx, 'f-job':jobEx, 'f-id':idEx});
Object.assign(GEN_MODES, {'f-greet':['reply','tuvous','listen','reply'], 'f-abc':['letter','spell','acro','type'], 'f-name':['reply','pron','ask','listen'], 'f-n10':['listen','read','calc','mc'],
  'f-n31':['listen','read','spell','calc'], 'f-day':['next','listen','build','next'], 'f-month':['listen','pick','season','date','build'], 'f-class':['reply','listen','reply'],
  'f-nat':['agree','build','listen','agree'], 'f-age':['pic','reply','ask','listen'], 'f-conj':['form','pron','build','form','build','pron','build'], 'f-art':['art','pic','build','listen','reply'],
  'f-n100':['listen','read','spell','listen'], 'f-prep':['match','prep','pays','build','listen','reply'], 'f-phone':['listen','mail','ask','type'], 'f-neg':['elide','build','neg','listen','reply'],
  'f-job':['pic','agree','build','listen'], 'f-id':['present','ask','q','listen']});
Object.assign(L2_GEN, {'f-greet':['listen','reply','tuvous'], 'f-abc':['letter','spell','type'], 'f-name':['listen','reply','ask'], 'f-n10':['listen','listen','calc'], 'f-n31':['listen','spell','calc'],
  'f-day':['listen','next','build'], 'f-month':['listen','date','build'], 'f-class':['listen','reply'], 'f-nat':['listen','agree','build'], 'f-age':['listen','reply','ask'],
  'f-conj':['form','build','pron'], 'f-art':['listen','art','build'], 'f-n100':['listen','spell','read'], 'f-prep':['listen','match','prep','build'], 'f-phone':['listen','type','mail'],
  'f-neg':['listen','neg','reply'], 'f-job':['listen','agree','build'], 'f-id':['listen','present','ask']});
// GEN_MODES 'build' maps to the tiles mode of each generator
const wordProd = (uid, n) => shuffle(UNITS.find(u => u.id === uid).items.filter(id => ITEMS[id].kind === 'word')).slice(0, n).map(id => withRedo(() => exFor(id, pick(['dict', 'type', 'speak']))));
const sentProd = (uid, n) => shuffle(UNITS.find(u => u.id === uid).items.filter(id => ITEMS[id].kind === 'sent')).slice(0, n).map(id => withRedo(() => exFor(id, pick(['build', 'listen']))));
Object.assign(L3, {
  fa1: () => [...mix(greetEx, [['reply',4],['tuvous',3],['listen',3],['speak',2]]), ...sentProd('fa1', 2), ...wordProd('fa1', 2)],
  fa2: () => mix(abcEx, [['letter',5],['spell',4],['type',4],['acro',2]]),
  fa3: () => [...mix(nameEx, [['reply',4],['ask',3],['pron',3],['listen',3],['speak',2]]), ...sentProd('fa3', 2)],
  fa4: () => [...mix(n10Ex, [['listen',5],['calc',4],['read',2],['mc',2],['speak',2]])],
  fa5: () => [...mix(n31Ex, [['listen',5],['spell',3],['calc',3],['read',2],['speak',2]])],
  fa6: () => [...mix(dayEx, [['next',4],['listen',3],['build',3],['speak',2]]), ...wordProd('fa6', 2)],
  fa7: () => mix(frMonthEx, [['listen',3],['pick',2],['season',3],['date',3],['build',3],['speak',1]]),
  fa8: () => [...mix(classEx, [['reply',5],['listen',4],['speak',2]]), ...sentProd('fa8', 3)],
  fb1: () => mix(frNatEx, [['agree',4],['build',4],['listen',4],['speak',2]]),
  fb2: () => mix(ageEx, [['reply',4],['ask',3],['listen',4],['pic',2],['speak',2]]),
  fb3: () => mix(conjEx, [['form',4],['pron',3],['build',5],['speak',2]]),
  fb4: () => mix(artEx, [['art',4],['build',4],['reply',3],['listen',3],['speak',2]]),
  fb5: () => mix(n100Ex, [['listen',6],['spell',4],['read',3],['speak',2]]),
  fb6: () => mix(prepEx, [['match',2],['prep',3],['pays',2],['build',4],['reply',3],['listen',3],['speak',2]]),
  fb7: () => mix(phoneEx, [['listen',4],['type',4],['mail',3],['ask',3]]),
  fb8: () => [...mix(negEx, [['elide',3],['neg',4],['reply',4],['listen',3],['speak',2]]), ...sentProd('fb8', 2)],
  fb9: () => mix(jobEx, [['agree',4],['build',4],['listen',3],['pic',2],['speak',2]]),
  fb10: () => [...mix(idEx, [['present',5],['ask',3],['q',3],['listen',4]]), ...sentProd('fb10', 2)]
});

/* ---------- units ---------- */
const R = (kind, title, rows, tip, formula) => ({type:'rule', kind, title, rows, tip, formula});
const U = (id, mod, key, title, zh, ref, intro, models) => {
  UNITS.push({id, mod, key, title, zh, ref, intro, models, items:Object.values(ITEMS).filter(it => it.unit === id).map(it => it.id)});
};
U('fa1', 'fa', 'Bj', 'Hola y adiós', 'Bonjour ! Ça va ?', 'Saludar, despedirse, tu y vous', [{type:'frpron'},
  R('La regla', 'Tu o vous', [['Tu vas bien ?', 'a amigos, familia y niños'], ['Vous allez bien ?', 'a alguien que no conoces, por respeto o a varias personas']],
    'En Francia, entre amigos se saluda con besos en la mejilla (la bise); con alguien que no conoces, con un apretón de manos.')], ['fs_g2', 'fs_g5']);
U('fa2', 'fa', 'ABC', 'El alfabeto', "Comment ça s'écrit ?", 'Las letras y deletrear tu nombre', [
  R('El alfabeto', 'Las letras que confunden', [['E', '«ë», una e relajada'], ['I', '«i»'], ['U', '«ü»: labios de u, di i'], ['G', '«zhé»'], ['J', '«zhi»'], ['H', '«ash»; la h nunca suena'], ['Q', '«kü»'], ['R', '«èr»'], ['W', '«du·blë·vé»'], ['Y', '«i·grèk»']],
    'Las letras dobles se dicen «deux L»: CAMILLE = C, A, M, I, deux L, E. Las tildes: é es «e accent aigu», è es «e accent grave» y ç es «c cédille».')]);
U('fa3', 'fa', 'Je', 'Me llamo…', 'Je m\'appelle Ana, et vous ?', 'Decir y preguntar el nombre', [
  R('Los pronombres', 'Je, tu, il, elle…', [['je · moi', 'yo'], ['tu · toi', 'tú'], ['il · elle', 'él · ella'], ['nous', 'nosotros'], ['vous', 'usted · ustedes'], ['ils · elles', 'ellos · ellas']],
    'En francés el pronombre siempre va con el verbo: «Je m\'appelle Ana», nunca «M\'appelle Ana». Moi y toi refuerzan: Moi, je m\'appelle Hugo.')], ['fs_n2', 'fs_n3']);
U('fa4', 'fa', '10', 'Números 0–10', 'un, deux, trois…', 'Contar y hacer cuentas', [
  R('Las cuentas', 'Plus, moins, égale', [['trois plus quatre égale sept', '3 + 4 = 7'], ['dix moins deux égale huit', '10 − 2 = 8']], 'Repite cada número en voz alta: las letras finales casi nunca suenan.')]);
U('fa5', 'fa', '31', 'Números 11–31', 'onze, douze… trente et un', 'Del 11 al 31', [
  R('La regla', 'Del 17 en adelante se suma', [['dix-sept', '17 = 10 + 7'], ['vingt et un', '21: «et un», sin guion'], ['vingt-deux', '22 = 20 + 2'], ['trente et un', '31']],
    'Del 11 al 16 tienen nombre propio: onze, douze, treize, quatorze, quinze, seize.')]);
U('fa6', 'fa', 'Lu', 'Los días', "Aujourd'hui, c'est lundi.", 'Los días de la semana, hoy y mañana', [
  R('La regla', 'Hoy y mañana', [["Aujourd'hui, c'est lundi.", 'Hoy es lunes.'], ["Demain, c'est mardi.", 'Mañana es martes.']], 'Los días se escriben con minúscula y sin artículo.')]);
U('fa7', 'fa', 'Mai', 'Meses y estaciones', 'le premier mai', 'Las fechas y las estaciones', [
  R('La fecha', 'le + número + mes', [['le quatorze juillet', 'el 14 de julio'], ['le premier mai', 'el 1 de mayo']], 'Sin «de» entre el número y el mes. El día 1 es «le premier». En Francia, julio es verano; en Perú, invierno.')]);
U('fa8', 'fa', '?!', 'En clase', 'Je ne comprends pas.', 'Pedir ayuda, disculparte y preguntar', [], ['fs_c1', 'fs_c2']);
U('fb1', 'fb', 'FR', 'Nacionalidades', 'Je suis péruvien.', 'Masculino y femenino', [
  R('La regla', 'El femenino de la nacionalidad', [['français · française', '+ e: la s empieza a sonar'], ['mexicain · mexicaine', '+ e: la n empieza a sonar'], ['italien · italienne', '-ien pasa a -ienne'], ['belge · belge', 'si ya termina en e, no cambia']],
    'Oído: en masculino la consonante final no suena; en femenino, sí.', [['masculino', 'péruvien'], ['femenino', 'péruvienne']])]);
U('fb2', 'fb', 'Âge', 'Personas y edad', 'Tu as quel âge ?', 'Preguntar y decir la edad', [
  R('La regla', 'La edad se dice con avoir', [["J'ai vingt ans.", 'Tengo 20 años.'], ['Tu as quel âge ?', '¿Cuántos años tienes?'], ['Vous avez quel âge ?', '¿Cuántos años tiene usted?']],
    'Igual que en español: se «tiene» la edad. Je + ai = j\'ai, porque delante de vocal je pierde la e.')]);
U('fb3', 'fb', 'Être', 'Ser, tener, llamarse', 'Nous sommes à Lima.', 'Être, avoir y s\'appeler', [
  R('Conjugación', 'Los tres verbos de la unidad', [['je suis · j\'ai · je m\'appelle', 'yo'], ['tu es · tu as · tu t\'appelles', 'tú'], ['il est · il a · il s\'appelle', 'él (ella igual)'],
    ['nous sommes · nous avons · nous nous appelons', 'nosotros'], ['vous êtes · vous avez · vous vous appelez', 'usted · ustedes'], ['ils sont · ils ont · ils s\'appellent', 'ellos (ellas igual)']],
    'Ojo al oído: ils ont (tienen) suena «il·zõ»; ils sont (son, están) suena «il·sõ».')]);
U('fb4', 'fb', 'Le', 'Me gusta…', "J'aime la musique.", 'Gustos y le, la, l\', les', [
  R('Los artículos', 'Le, la, l\', les', [['le cinéma', 'masculino'], ['la musique', 'femenino'], ["l'athlétisme · l'escalade", 'delante de vocal o h'], ['les films', 'plural']],
    'Con los gustos va el artículo, como en español: J\'aime la musique = Me gusta la música.')]);
U('fb5', 'fb', '80', 'Números 32–100', 'soixante-dix, quatre-vingts', 'Las decenas y el 70, 80 y 90', [
  R('La regla', 'Del 70 al 99 se cuenta distinto', [['soixante-dix', '70 = 60 + 10'], ['soixante et onze', '71 = 60 + 11'], ['quatre-vingts', '80 = 4 × 20'], ['quatre-vingt-dix', '90 = 4 × 20 + 10'], ['quatre-vingt-dix-neuf', '99 = 4 × 20 + 19']],
    'En Bélgica y Suiza dicen septante (70) y nonante (90); en Suiza, también huitante (80).')]);
U('fb6', 'fb', 'Au', 'Países y ciudades', "J'habite à Lima, au Pérou.", 'Dónde vives, dónde naciste y qué idiomas hablas', [
  R('Las preposiciones', 'À, au, en, aux', [['à Lima', 'ciudad'], ['au Pérou', 'país masculino'], ['en France · en Équateur', 'país femenino o que empieza con vocal'], ['aux États-Unis', 'país en plural']],
    'Casi todos los países que terminan en -e son femeninos (la France, la Chine). Excepciones: le Mexique, le Cambodge, le Mozambique.')]);
U('fb7', 'fb', '@', 'Teléfono y correo', 'Quel est ton numéro ?', 'Dar y pedir tus datos', [
  R('Los datos', 'De dos en dos', [['06 12 34 56 78', 'zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit'], ['arobase', '@'], ['point', '.'], ['tiret', '-']],
    'Los números de teléfono en Francia tienen 10 cifras y se leen en pares.')]);
U('fb8', 'fb', 'Pas', 'La negación', 'Je ne suis pas français.', 'Ne… pas', [
  R('La regla', 'Ne + verbo + pas', [['Je ne suis pas français.', 'No soy francés.'], ["Je n'aime pas le sport.", 'ne → n\' delante de vocal'], ["Il n'habite pas à Paris.", 'también delante de h']],
    'Al hablar, muchos franceses omiten el ne («J\'aime pas»), pero al escribir van las dos partes.', [['negación', 'ne'], ['verbo', 'suis'], ['negación', 'pas']])], ['fs_x1', 'fs_x2']);
U('fb9', 'fb', 'Pro', 'Profesiones', 'Elle est médecin.', 'Qué haces y el femenino de la profesión', [
  R('La regla', 'Sin artículo', [['Il est médecin.', 'Él es médico: sin un, como en español'], ['acteur · actrice', '-teur pasa a -trice'], ['chanteur · chanteuse', '-eur pasa a -euse'], ['étudiant · étudiante', '+ e']],
    'Médecin, architecte, pilote y journaliste no cambian en femenino.')]);
U('fb10', 'fb', 'ID', 'Mi ficha', "Je m'appelle Diego, j'ai 30 ans.", 'Presentarte con todos tus datos', [
  R('Pronunciación', 'Grupos rítmicos', [["Je m'appelle Arthur, je suis péruvien, j'ai trente ans.", 'tres grupos, tres pausas cortas']],
    'En francés no se separa palabra por palabra: cada grupo suena como una sola palabra larga, con el acento en la última sílaba. La voz sube al final de cada grupo y baja al final de la frase. En una pregunta sin palabra interrogativa, sube.')], ['fs_p1']);

/* ---------- dialogs ---------- */
const DLG_A = [
  {where:'En la universidad', who:'Léa', turns:[
    {say:'Salut ! Ça va ?', you:'Sí, todo bien, ¿y tú?', ans:'Oui, ça va, et toi ?', traps:['vous', 'bonsoir', 'très']},
    {say:'Très bien, merci ! À plus !', listen:['Muy bien, gracias. ¡Hasta luego!', 'Muy bien, gracias. ¡Buenas noches!', 'Bien, gracias. ¿Y usted?', 'Gracias. ¡Hasta mañana!'], ask:'¿Qué te dijo Léa?', es:'¡Muy bien, gracias! ¡Hasta luego!'}]},
  {where:'Primer día de clase', who:'Profesora', turns:[
    {say:'Bonjour ! Comment vous vous appelez ?', you:'Me llamo Diego Rojas.', ans:"Je m'appelle Diego_Rojas.", traps:["t'appelles", "s'appelle", 'me']},
    {say:'Rojas ? Ça s\'écrit R, O, J, A, S ?', listen:['Pregunta si tu apellido se escribe R, O, J, A, S.', 'Pregunta cuántos años tienes.', 'Pregunta de dónde eres.', 'Dice que llegas tarde.'], ask:'¿Qué te pregunta la profesora?', es:'¿Rojas? ¿Se escribe R, O, J, A, S?'},
    {say:'Vous êtes en retard ?', you:'Sí. Disculpe, llego tarde.', ans:'Oui. Excusez-moi, je suis en retard.', traps:['excuse-moi', 'tu', 'es']}]},
  {where:'En clase', who:'Profesor', turns:[
    {say:'Vous comprenez ?', you:'No, no entiendo. ¿Puede repetir, por favor?', ans:"Non, je ne comprends pas. Vous pouvez répéter, s'il_vous_plaît ?", traps:["s'il_te_plaît", 'tu', 'peux']},
    {say:"Aujourd'hui, c'est lundi.", listen:['Hoy es lunes.', 'Mañana es lunes.', 'Hoy es martes.', 'Hoy es domingo.'], ask:'¿Qué dijo el profesor?', es:'Hoy es lunes.'}]},
  {where:'Con un amigo', who:'Hugo', turns:[
    {say:"Quelle est la date aujourd'hui ?", you:'Es el 1 de mayo.', ans:"C'est le premier mai.", traps:['un', 'de', 'la']},
    {say:"Demain, c'est samedi !", listen:['Mañana es sábado.', 'Hoy es sábado.', 'Mañana es domingo.', 'Mañana es lunes.'], ask:'¿Qué dijo Hugo?', es:'¡Mañana es sábado!'}]}];
const DLG_B = [
  {where:'En el tren', who:'Camille', turns:[
    {say:'Bonjour ! Vous êtes français ?', you:'No, soy peruano. ¿Y usted?', ans:'Non, je suis péruvien. Et vous ?', traps:['péruvienne', 'toi', 'es']},
    {say:"Moi, je suis belge. Je m'appelle Camille.", listen:['Es belga y se llama Camille.', 'Es suiza y se llama Camille.', 'Es francesa y se llama Camille.', 'Es belga y se llama Emma.'], ask:'¿Quién es ella?', es:'Yo soy belga. Me llamo Camille.'},
    {say:'Vous avez quel âge ?', you:'Tengo 28 años.', ans:"J'ai 28 ans.", traps:['suis', 'a', 'an']}]},
  {where:'Encuentro de voluntarios', who:'Karim', turns:[
    {say:'Tu habites où ?', you:'Vivo en Lima, en el Perú.', ans:"J'habite à Lima, au Pérou.", alts:["J'habite au Pérou, à Lima."], traps:['en', 'le', 'aux']},
    {say:'Tu parles quelles langues ?', you:'Hablo español, inglés y francés.', ans:'Je parle espagnol, anglais et français.',
      alts:['Je parle anglais, espagnol et français.', 'Je parle espagnol, français et anglais.', 'Je parle français, espagnol et anglais.', 'Je parle anglais, français et espagnol.', 'Je parle français, anglais et espagnol.'], traps:['parles', 'le', 'espagnole']},
    {say:"Moi, j'habite au Niger. Je suis né à Niamey.", listen:['Vive en Níger y nació en Niamey.', 'Vive en Niamey y nació en Senegal.', 'Vive en Malí y nació en Bamako.', 'Vive en Níger y nació en París.'], ask:'¿Qué dijo Karim?', es:'Yo vivo en Níger. Nací en Niamey.'}]},
  {where:'Intercambiar contactos', who:'Inès', turns:[
    {say:"Mon numéro, c'est le zéro six, quarante-deux, dix-sept, quatre-vingt-dix, soixante et onze.", listen:['06 42 17 90 71', '06 42 17 80 71', '06 42 70 90 71', '06 52 17 90 61'], ask:'¿Cuál es el número de Inès?', es:'Mi número es el 06 42 17 90 71.'},
    {say:'Tu as mon adresse mail ?', you:'No. ¿Cuál es tu correo?', ans:'Non. Quelle est ton adresse mail ?', traps:['quel', 'ta', 'mon']},
    {say:"C'est inès, point, martin, arobase, mail, point, F, R.", listen:['ines.martin@mail.fr', 'ines-martin@mail.fr', 'inesmartin@mail.fr', 'ines.martin@mail.com'], ask:'¿Cuál es su correo?', es:'Es ines.martin@mail.fr.'}]},
  {where:'Gustos', who:'Hugo', turns:[
    {say:'Tu aimes le sport ?', you:'Sí, me gusta el tenis y la natación.', ans:"Oui, j'aime le tennis et la natation.", alts:["Oui, j'aime la natation et le tennis."], traps:['les', 'aimes', 'pas']},
    {say:"Moi, je n'aime pas le sport. J'aime la lecture et le cinéma.", listen:['No le gusta el deporte; le gusta leer y el cine.', 'Le gusta el deporte, la lectura y el cine.', 'No le gusta el cine; le gusta leer y el deporte.', 'No le gusta leer; le gusta el deporte y el cine.'], ask:'¿Qué le gusta a Hugo?', es:'A mí no me gusta el deporte. Me gusta la lectura y el cine.'}]}];
['Diego', 'Rojas'].forEach(n => FR_NAMES.add(n));
function frDialogPlan(list, item){
  LV = 1;
  const ex = [];
  list.forEach(d => d.turns.forEach((t, k) => {
    const head = `<div class="kind">${esc(d.where)} · ${k + 1}/${d.turns.length}</div>${bub(d.who, t.say)}`;
    if (t.listen) ex.push(fMC(item, 'Diálogo', head + `<div class="ask">${esc(t.ask)}</div>`, t.listen.map(o => oEs(o)), t.listen[0], {h:frText(t.say), p:'', es:t.es}, {say:frText(t.say)}));
    else ex.push(fTiles(item, 'Diálogo', head + `<div class="ask">Responde: <b>${esc(t.you)}</b></div>`, t.ans, t.you, t.traps, t.alts || [], {say:frText(t.say)}));
  }));
  return {title:'Diálogos', cards:[], ex};
}

MODULES.fa = {n:1, tab:'Bienvenue', zh:'Bonjour ! Ça va ?', p:'bõ·zhur · sa·va', es:'Unidad 0 · Saludos, el alfabeto, los números hasta 31, el calendario y el francés de la clase.',
  examKey:'examBestFa', dlgPlan:() => frDialogPlan(DLG_A, 'f-greet'), dlgSub:'Saludar, presentarte y pedir ayuda en clase'};
MODULES.fb = {n:2, tab:'Et vous ?', zh:'Comment vous vous appelez ?', p:'ko·mã·vu·vu·za·plé', es:'Unidad 1 · Nacionalidad, edad, gustos, países, teléfono, profesión y cómo presentarte.',
  examKey:'examBestFb', dlgPlan:() => frDialogPlan(DLG_B, 'f-id'), dlgSub:'En el tren, entre voluntarios y al dar tu número'};
