/* ---------- session plans ---------- */
function lessonPlan(u, lv){
  LV = lv || 1;
  if (LV === 2) return lessonPlan2(u);
  if (LV === 3) return lessonPlan3(u);
  const words = u.items.filter(id => ITEMS[id].kind === 'word');
  const gens = u.items.filter(id => ITEMS[id].kind === 'gen');
  const sents = u.items.filter(id => ITEMS[id].kind === 'sent');
  const cards = [...u.intro];
  words.forEach(id => cards.push({type:'word', id}));
  if (sents.length) (u.models || sents.slice(0, 2)).forEach(id => cards.push({type:'sent', id}));
  let ex = [];
  if (words.length){
    const focus = words.length > 7 ? shuffle(words).slice(0, 7) : words;
    ex.push(...shuffle(words).map(id => exFor(id, 'meaning')));
    ex.push(...shuffle(focus).map(id => exFor(id, pick(['hanzi','listen']))));
    ex.push(...shuffle(focus).slice(0, 5).map(id => exFor(id, pick(['type','speak','type']))));
  }
  gens.forEach(id => GEN_MODES[id].forEach(m => ex.push(exFor(id, m))));
  if (gens.length) ex = ex.slice(0, words.length).concat(shuffle(ex.slice(words.length)));
  if (u.id === 'u1') ex.push(...shuffle(['n2','n4','n6','n8']).slice(0, 2).map(id => exFor(id, 'listen')));
  if (sents.length){
    ex.push(...shuffle(sents).map(id => exFor(id, 'build')));
    ex.push(...shuffle(sents).slice(0, 3).map(id => exFor(id, 'listen')));
    ex.push(...shuffle(sents).slice(0, 3).map(id => exFor(id, 'speak')));
  }
  return {title:u.title, unit:u.id, level:1, cards, ex};
}
const L2_GEN = {'g-tone':['listen','listen','listen','listen','name'], 'g-pair':['listen','listen','listen','listen'], 'g-nat3':['listen','listen','country'], 'g-nat':['listen','listen','country'], 'g-stu':['listen','reply','ask'], 'g-fam':['listen','reply','ask'], 'g-intro':['listen','reply','ask'], 'g-food':['listen','reply','listen','mc'], 'g-num':['listen','listen','tiles','read'], 'g-time':['listen','listen','mc'], 'g-period':['listen','listen','tiles']};
function lessonPlan2(u){
  const words = u.items.filter(id => ITEMS[id].kind === 'word');
  const gens = u.items.filter(id => ITEMS[id].kind === 'gen');
  const sents = u.items.filter(id => ITEMS[id].kind === 'sent');
  let ex = [], rest = [];
  ex.push(...shuffle(words).map(id => exFor(id, 'listen')));
  rest.push(...shuffle(words).slice(0, 6).map(id => exFor(id, pick(['chars','dict']))));
  rest.push(...shuffle(words).slice(0, 4).map(id => exFor(id, pick(['hanzi','speak']))));
  gens.forEach(id => L2_GEN[id].forEach(m => rest.push(exFor(id, m))));
  if (sents.length){
    ex.push(...shuffle(sents).map(id => exFor(id, 'listen')));
    rest.push(...shuffle(sents).slice(0, 4).map(id => exFor(id, 'build')));
    rest.push(...shuffle(sents).slice(0, 3).map(id => exFor(id, 'speak')));
  }
  return {title:u.title, unit:u.id, level:2, cards:[{type:'lvl', lv:2}], ex: ex.concat(shuffle(rest))};
}
const times = (n, fn) => Array.from({length:n}, () => withRedo(fn));
const L3 = {
  a1: () => [...times(4, () => introEx('build', ['name'])), ...times(3, () => introEx('listen', ['name'])), ...times(2, () => introEx('speak', ['name'])), ...['anh','axie','azj','aqw','amz'].map(id => withRedo(() => exFor(id, 'dict')))],
  a2: () => [...times(8, () => toneEx('listen')), ...times(3, () => toneEx('name')), ...times(5, soundEx)],
  a3: () => [...times(4, () => natEx('build', NAT3, 'g-nat3')), ...times(4, () => natEx('listen', NAT3, 'g-nat3')), ...times(3, () => natEx('country', NAT3, 'g-nat3')), ...times(2, () => introEx('speak', ['nat']))],
  a4: () => [...times(4, () => natEx('build')), ...times(4, () => natEx('listen')), ...times(4, () => natEx('country')), ...times(2, () => introEx('speak', ['nat']))],
  a5: () => introSet(['stu','study','name','nat'], 'g-stu'),
  a6: () => introSet(['fam'], 'g-fam'),
  a7: () => introSet(null, 'g-intro'),
  u1: () => [...times(6, () => seqEx('listen')), ...times(3, () => seqEx('read')), ...times(2, () => seqEx('speak')), ...times(2, () => numEx('listen'))],
  u2: () => [...times(5, pairEx), ...times(3, () => numEx('tiles')), ...times(2, () => numEx('listen')), ...times(3, numSpeakEx)],
  u3: () => [...times(4, () => clockEx('build', false)), ...times(3, () => timeEx('listen')), ...times(3, () => clockEx('speak', false)), ...times(2, () => timeEx('type'))],
  u4: () => [...times(4, () => clockEx('build', true)), ...times(4, () => periodEx('listen')), ...times(3, () => clockEx('speak', true)), ...times(2, () => periodEx('tiles'))],
  u5: () => sentSet(ACTIONS.filter(a => a.u === 'u5'), ['yo','q'], ['yo','q','now']),
  u6: () => sentSet(ACTIONS, ['yo','q','now'], ['yo','q','now']),
  u7: () => sentSet(ACTIONS, ['two','now'], ['two','now','q']),
  c1: () => foodSet(['chi'], ['ans','ma']),
  c2: () => foodSet(['chi','xh','yao','he'], ['ma','neg','yes']),
  c3: () => foodSet(['xh'], ['ans','ma','neg','yes']),
  c4: () => foodSet(['yao'], ['ans','ma','neg','yes']),
  c5: () => foodSet(['he'], ['ans','ma','neg','yes']),
  c6: () => foodSet(['chi','xh','yao','he'], ['swap','neg','yes','ma'])
};
Object.assign(GEN, {'g-color':colorEx, 'g-size':sizeEx, 'g-price':priceEx, 'g-shop':shopEx, 'g-go':goEx, 'g-near':nearEx, 'g-where':whereEx, 'g-route':routeEx,
  'g-wx1':wx1Ex, 'g-wx':wxEx, 'g-month':monthEx, 'g-season':seasonEx, 'g-sick':sickEx, 'g-week':weekEx, 'g-invite':inviteEx, 'g-sport':sportEx, 'g-tv':tvEx, 'g-hobby':hobbyEx});
Object.assign(GEN_MODES, {'g-color':['swatch','listen','build','reply'], 'g-size':['build','reply','build','listen'], 'g-price':['read','listen','mc','reply'], 'g-shop':['reply','build','reply','listen'],
  'g-go':['pic','build','reply','listen'], 'g-near':['build','reply','reply','listen'], 'g-where':['pic','listen','reply','ask'], 'g-route':['pic','mc','ask','listen'],
  'g-wx1':['pic','reply','listen','pic'], 'g-wx':['pic','reply','temp','listen'], 'g-month':['tiles','mc','listen','tiles'], 'g-season':['build','reply','why','listen'], 'g-sick':['reply','build','reply','listen'],
  'g-week':['tiles','listen','next','reply'], 'g-invite':['build','reply','reply','listen'], 'g-sport':['pic','build','reply','listen'], 'g-tv':['build','reply','listen','build'], 'g-hobby':['pic','build','reply','listen']});
Object.assign(L2_GEN, {'g-color':['listen','listen','reply','build'], 'g-size':['listen','reply','build'], 'g-price':['listen','mc','listen','read'], 'g-shop':['reply','listen','reply'],
  'g-go':['listen','reply','build'], 'g-near':['listen','reply','build'], 'g-where':['listen','reply','pic'], 'g-route':['mc','listen','pic'],
  'g-wx1':['listen','reply','pic'], 'g-wx':['listen','temp','reply'], 'g-month':['listen','listen','tiles'], 'g-season':['reply','listen','why'], 'g-sick':['listen','reply','build'],
  'g-week':['listen','next','reply'], 'g-invite':['listen','reply','build'], 'g-sport':['listen','reply','build'], 'g-tv':['listen','reply','build'], 'g-hobby':['listen','reply','build']});
Object.assign(L3, {
  d1: () => mix(colorEx, [['swatch',3],['listen',3],['build',3],['reply',3],['speak',2]]),
  d2: () => mix(sizeEx, [['build',4],['listen',3],['reply',3],['mc',2],['speak',2]]),
  d3: () => mix(priceEx, [['listen',4],['mc',3],['read',3],['reply',2],['ask',2]]),
  d4: () => mix(shopEx, [['reply',4],['build',3],['listen',3],['mc',2],['speak',2]]),
  d5: () => [...mix(shopEx, [['reply',3],['speak',2]]), ...mix(sizeEx, [['build',3]]), ...mix(priceEx, [['mc',2],['reply',2]]), ...mix(colorEx, [['reply',2]])],
  e1: () => mix(goEx, [['pic',2],['build',4],['listen',3],['reply',3],['speak',2]]),
  e2: () => mix(nearEx, [['build',3],['reply',4],['listen',3],['mc',2],['speak',2]]),
  e3: () => mix(whereEx, [['pic',3],['listen',3],['reply',3],['ask',2],['speak',2]]),
  e4: () => mix(routeEx, [['pic',3],['mc',3],['listen',3],['ask',2],['speak',2]]),
  e5: () => [...mix(goEx, [['reply',2],['speak',2]]), ...mix(nearEx, [['reply',2]]), ...mix(whereEx, [['listen',2],['reply',2]]), ...mix(routeEx, [['pic',2],['mc',2]])],
  f1: () => mix(wx1Ex, [['pic',4],['reply',3],['listen',3],['mc',2],['speak',2]]),
  f2: () => mix(wxEx, [['pic',4],['reply',3],['listen',3],['temp',2],['speak',2]]),
  f3: () => mix(monthEx, [['tiles',4],['listen',4],['mc',3],['speak',2]]),
  f4: () => mix(seasonEx, [['build',3],['reply',3],['why',3],['listen',2],['speak',2]]),
  f5: () => mix(sickEx, [['reply',4],['build',3],['listen',3],['speak',2]]),
  f6: () => [...mix(wxEx, [['pic',2],['reply',2],['speak',2]]), ...mix(seasonEx, [['reply',2],['why',2]]), ...mix(sickEx, [['reply',2],['listen',2]])],
  h1: () => mix(weekEx, [['tiles',3],['listen',3],['next',3],['reply',3],['speak',2]]),
  h2: () => mix(inviteEx, [['build',3],['reply',4],['listen',3],['mc',2],['speak',2]]),
  h3: () => mix(sportEx, [['pic',3],['build',3],['reply',3],['listen',3],['speak',2]]),
  h4: () => mix(tvEx, [['build',4],['reply',3],['listen',3],['mc',2],['speak',2]]),
  h5: () => mix(hobbyEx, [['pic',3],['build',3],['reply',3],['listen',3],['speak',2]]),
  h6: () => [...mix(weekEx, [['next',2],['reply',2]]), ...mix(inviteEx, [['reply',2],['build',2]]), ...mix(sportEx, [['build',2]]), ...mix(hobbyEx, [['reply',2],['speak',2]])]
});
function introSet(groups, item){
  return [...times(4, () => introEx('build', groups, item)), ...times(3, () => introEx('listen', groups, item)), ...times(3, () => introEx('reply', groups, item)),
          ...times(3, () => introEx('ask', groups, item)), ...times(2, () => introEx('speak', groups, item))];
}
function sentSet(acts, buildForms, otherForms){
  return [...times(4, () => sentGenEx('build', acts, buildForms)), ...times(3, () => sentGenEx('listen', acts, otherForms)),
          ...times(3, () => sentGenEx('mc', acts, otherForms)), ...times(3, () => sentGenEx('speak', acts, otherForms))];
}
function foodSet(verbs, forms){
  return [...times(4, () => foodEx('build', verbs, forms)), ...times(3, () => foodEx('listen', verbs, forms)), ...times(3, () => foodEx('reply', verbs)),
          ...times(2, () => foodEx('ask', verbs)), ...times(3, () => foodEx('speak', verbs, forms))];
}
function lessonPlan3(u){
  const ex = L3[u.id]();
  return {title:u.title, unit:u.id, level:3, cards:[{type:'lvl', lv:3}], ex: ex.slice(0, 3).concat(shuffle(ex.slice(3)))};
}
function reviewPlan(){
  LV = 1;
  const ids = dueIds().slice(0, 14);
  return {title:'Repaso', review:true, cards:[], ex: shuffle(ids).map(id => exFor(id, srsMode(id)))};
}
function examPlan(){
  LV = 1;
  const ex = [];
  shuffle(['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10']).forEach(id => ex.push(exFor(id, 'build')));
  for (let i = 0; i < 3; i++) ex.push(periodEx(i ? 'tiles' : 'listen'));
  ex.push(numEx('tiles'), numEx('listen'), timeEx('mc'), timeEx('type'));
  ['qc','sj','hj','zf','wanf'].forEach(id => ex.push(exFor(id, 'type')));
  return {title:'Examen: la hora', exam:true, cards:[], ex: shuffle(ex)};
}
