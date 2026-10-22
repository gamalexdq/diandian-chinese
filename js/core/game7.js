/* ---------- 逢七过 game ---------- */
let g7 = null;
const isSeven = n => n % 7 === 0 || String(n).includes('7');
function startG7(){
  screen = 'g7'; g7 = {n:1, timer:null};
  app.innerHTML = `<div class="sbar"><button class="xbtn" id="quit" aria-label="Salir">${ICON.x}</button><div style="flex:1"></div><span class="chip">${ICON.star} récord ${S.best7}</span></div>
  <div class="card center"><div class="kind">Juego · 逢七过 féng qī guò</div><h2>No digas siete</h2>
  <p class="es">Se cuenta en voz alta. Cuando el número es múltiplo de 7 o lleva un 7 (7, 14, 17, 21…), no se dice: se aplaude. Elige la forma correcta antes de que se acabe el tiempo.</p>
  <button class="btn main big" id="g7go">Empezar</button></div>`;
  bindQuit();
  document.getElementById('g7go').onclick = g7Step;
}
function g7Step(){
  const n = g7.n;
  const near = [n + 1, n - 1, n + 10, n - 10, Number(String(n).split('').reverse().join(''))].filter(x => x > 0 && x < 100 && x !== n && numZh(x) !== numZh(n));
  const opts = shuffle([n, ...shuffle([...new Set(near)]).slice(0, 2)]);
  const limit = Math.max(2.6, 5 - n * 0.05);
  app.innerHTML = `<div class="sbar"><button class="xbtn" id="quit" aria-label="Salir">${ICON.x}</button><div style="flex:1"></div><span class="chip">${ICON.star} récord ${S.best7}</span></div>
  <div class="card center"><div class="kind">Turno ${n}</div><div class="g7num">${n}</div><div class="timer"><i id="g7t" style="width:100%"></i></div>
  <div class="opts" style="width:100%">${opts.map(x => `<button class="opt" data-v="${x}"><span class="han">${numZh(x)}</span></button>`).join('')}<button class="clap" data-v="clap">拍手 · aplaudir</button></div></div>`;
  bindQuit();
  const t0 = performance.now(), bar = document.getElementById('g7t');
  const tick = () => { if (screen !== 'g7' || g7.n !== n) return; const f = 1 - (performance.now() - t0) / (limit * 1000); if (f <= 0) return g7Over(n, 'Se acabó el tiempo'); bar.style.width = (f * 100) + '%'; g7.timer = requestAnimationFrame(tick); };
  g7.timer = requestAnimationFrame(tick);
  app.querySelectorAll('[data-v]').forEach(b => b.onclick = () => {
    if (g7.n !== n) return;
    const v = b.dataset.v, ok = isSeven(n) ? v === 'clap' : v === String(n);
    cancelAnimationFrame(g7.timer);
    if (!ok) return g7Over(n, isSeven(n) ? `El ${n} ${n % 7 === 0 ? 'es múltiplo de 7' : 'lleva un 7'}: tocaba aplaudir.` : 'Ese no era el número.');
    if (!isSeven(n)) say(numZh(n), 1.1);
    g7.n++; g7Step();
  });
}
function g7Over(n, why){
  cancelAnimationFrame(g7.timer);
  const score = n - 1, rec = score > S.best7;
  if (rec) S.best7 = score;
  S.xp += Math.floor(score / 5); bumpStreak(); save();
  g7.n = -1;
  app.innerHTML = `<div class="result"><div class="eyebrow">逢七过 · fin</div><div class="big">${score}</div><div class="es">${rec ? '¡Nuevo récord!' : 'números seguidos'}</div>
  <p class="es">${esc(why)}</p>${isSeven(n) ? '' : revHTML({h:numZh(n), p:numPy(n), es:String(n)})}
  <div class="row"><button class="btn main" id="again">Otra vez</button><button class="btn" id="home">Volver al inicio</button></div></div>`;
  document.getElementById('again').onclick = startG7;
  document.getElementById('home').onclick = () => { screen = 'home'; renderHome(); };
}
