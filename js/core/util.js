/* ---------- utilities ---------- */
const app = document.getElementById('app');
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const today = () => { const d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 864e5); };
// language being learned: Chinese (zh) or French (fr). ?lang=fr switches it and is remembered
const LANG = (() => {
  let l = null;
  try { l = new URLSearchParams(location.search).get('lang'); } catch(e) {}
  try { if (l === 'fr' || l === 'zh') localStorage.setItem('dd-lang', l); else l = localStorage.getItem('dd-lang'); } catch(e) {}
  return l === 'fr' ? 'fr' : 'zh';
})();
function setLang(l, hash = ''){ try { localStorage.setItem('dd-lang', l); } catch(e) {} location.href = location.pathname + '?lang=' + l + hash; }
if (LANG === 'fr' && document.documentElement && document.documentElement.classList){ document.documentElement.classList.add('fr'); document.title = 'Diǎn Diǎn · Francés'; }
const ICON = {
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
  slow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  fire: '<svg viewBox="0 0 24 24" fill="currentColor" style="color:var(--t1)"><path d="M12 2s5 4.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 1.5-4S9 11 11 11c0-4 1-9 1-9z"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" style="color:var(--gold)"><path d="m12 2 3 7 7 .6-5.3 4.7L18.3 22 12 18l-6.3 4 1.6-7.7L2 9.6 9 9z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><rect x="3" y="6" width="13" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/></svg>'
};

/* ---------- pinyin ---------- */
const TONES = {1:'āēīōūǖĀĒĪŌŪ', 2:'áéíóúǘÁÉÍÓÚ', 3:'ǎěǐǒǔǚǍĚǏǑǓ', 4:'àèìòùǜÀÈÌÒÙ'};
const toneOf = s => { for (const t in TONES) for (const c of TONES[t]) if (s.includes(c)) return +t; return 0; };
// internal pinyin: syllables joined by "·", words by spaces
const pyHTML = p => LANG === 'fr' ? (p ? `<span class="pron">${esc(p)}</span>` : '') : p.split(' ').map(w => '<span class="pw">' + w.split('·').map(s => `<span class="t${toneOf(s)}">${esc(s)}</span>`).join('') + '</span>').join(' ');
const pyPlain = p => p.replace(/·/g, '');
const loose = s => s.replace(/œ/g, 'oe').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/v/g, 'u').replace(/[^a-z]/g, '');
const strict = s => s.normalize('NFC').toLowerCase().replace(/[\s·'’?？.,。!！]/g, '');

/* ---------- numbers & time ---------- */
const NZH = ['', '一','二','三','四','五','六','七','八','九','十'];
const NPY = ['', 'yī','èr','sān','sì','wǔ','liù','qī','bā','jiǔ','shí'];
function numZh(n){ if (n <= 10) return NZH[n]; const t = Math.floor(n/10), o = n % 10; return (t > 1 ? NZH[t] : '') + '十' + (o ? NZH[o] : ''); }
function numPy(n){ if (n <= 10) return NPY[n]; const t = Math.floor(n/10), o = n % 10; return [t > 1 ? NPY[t] : null, 'shí', o ? NPY[o] : null].filter(Boolean).join('·'); }
const h12 = h => (h % 12) || 12;
const hourZh = h => (h12(h) === 2 ? '两' : numZh(h12(h))) + '点';
const hourPy = h => (h12(h) === 2 ? 'liǎng' : numPy(h12(h))) + ' diǎn';
const PERIODS = [
  {id:'zs', h:'早上', p:'zǎo·shang', from:5,  to:8,  es:'mañana temprano'},
  {id:'sw', h:'上午', p:'shàng·wǔ',  from:9,  to:11, es:'media mañana'},
  {id:'zw', h:'中午', p:'zhōng·wǔ',  from:12, to:12, es:'mediodía'},
  {id:'xw', h:'下午', p:'xià·wǔ',    from:13, to:17, es:'tarde'},
  {id:'ws', h:'晚上', p:'wǎn·shang', from:18, to:23, es:'noche'}
];
const periodOf = h => PERIODS.find(p => h >= p.from && h <= p.to);
const isDay = h => h >= 6 && h < 18;
function clockSVG(h, opts = {}){
  const a = (h % 12) * 30, sky = opts.sky;
  const rad = d => (d - 90) * Math.PI / 180;
  const hx = 50 + 24 * Math.cos(rad(a)), hy = 50 + 24 * Math.sin(rad(a));
  let ticks = '';
  for (let i = 0; i < 12; i++){ const r1 = i % 3 ? 40 : 36; ticks += `<line x1="${50+r1*Math.cos(rad(i*30))}" y1="${50+r1*Math.sin(rad(i*30))}" x2="${50+44*Math.cos(rad(i*30))}" y2="${50+44*Math.sin(rad(i*30))}" stroke="var(--ink)" stroke-width="${i%3?1.5:3}" stroke-linecap="round"/>`; }
  let skyMark = '';
  if (sky){
    skyMark = isDay(h)
      ? `<circle cx="50" cy="70" r="6" fill="var(--sky-day)" stroke="var(--gold)" stroke-width="1.5"/>`
      : `<path d="M53 64a7 7 0 1 0 0 12a5.5 5.5 0 1 1 0-12z" fill="var(--sky-night)" stroke="var(--muted)" stroke-width="1"/>`;
  }
  return `<svg class="clk" viewBox="0 0 100 100" role="img" aria-label="Reloj marcando las ${h12(h)}"><circle cx="50" cy="50" r="47" fill="var(--surface)" stroke="var(--ink)" stroke-width="3"/>${ticks}${skyMark}<line x1="50" y1="50" x2="50" y2="14" stroke="var(--muted)" stroke-width="2.5" stroke-linecap="round"/><line x1="50" y1="50" x2="${hx}" y2="${hy}" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="50" r="3.5" fill="var(--ink)"/></svg>`;
}
const fmt24 = h => String(h).padStart(2,'0') + ':00';
