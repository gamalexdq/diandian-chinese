/* ---------- state & saving ---------- */
const LS_KEY = LANG === 'fr' ? 'diandian-fr-v1' : 'diandian-v1';
const fresh = () => ({mod:'m1', v:1, xp:0, streak:0, lastDay:null, done:{}, lvl:{}, srs:{}, best7:0, examBest:null, updatedAt:0});
let S = fresh();
try { const raw = localStorage.getItem(LS_KEY); if (raw) S = Object.assign(fresh(), JSON.parse(raw)); } catch(e) {}
const syncNote = 'Tu progreso se guarda solo en este navegador.';
function save(){
  S.updatedAt = Date.now();
  try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch(e) {}
}

// first-try score needed to unlock the next level
const PASS_PCT = 90;
const lvState = uid => (S.lvl[uid] = S.lvl[uid] || {un:1, sel:1, best:{}});
const lvPeek = uid => S.lvl[uid] || {un:1, sel:1, best:{}};
const BOX_DAYS = [0, 1, 2, 4, 8, 16, 32];
function srsMark(id, ok){
  const st = S.srs[id] || {b:0, due:today()};
  st.b = ok ? Math.min(st.b + 1, 6) : 1;
  st.due = today() + (ok ? BOX_DAYS[st.b] : 0);
  S.srs[id] = st;
}
const dueIds = () => Object.keys(S.srs).filter(id => ITEMS[id] && S.srs[id].due <= today()).sort((a, b) => S.srs[a].due - S.srs[b].due);
function bumpStreak(){
  const t = today();
  if (S.lastDay === t) return;
  S.streak = S.lastDay === t - 1 ? S.streak + 1 : 1;
  S.lastDay = t;
}
