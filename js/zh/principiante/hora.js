/* ---------- content · Ruta 1: la hora y tu día ---------- */
const ITEMS = {};
const W = (id, unit, h, p, es, tip) => (ITEMS[id] = {id, unit, kind:'word', h, p, es, tip});
// Unidad 1
W('n1','u1','一','yī','uno (1)','Un solo trazo horizontal.');
W('n2','u1','二','èr','dos (2)','Dos trazos. Para decir la hora se usa otra palabra: 两.');
W('n3','u1','三','sān','tres (3)','Tres trazos.');
W('n4','u1','四','sì','cuatro (4)','Suena casi como 死 sǐ, “morir”; por eso el 4 se considera de mala suerte.');
W('n5','u1','五','wǔ','cinco (5)','Con la mano: palma abierta, los cinco dedos.');
W('n6','u1','六','liù','seis (6)','Con la mano: solo pulgar y meñique extendidos.');
W('n7','u1','七','qī','siete (7)','Con la mano: las puntas de pulgar, índice y medio juntas.');
W('n8','u1','八','bā','ocho (8)','Con la mano: pulgar e índice en forma de L.');
W('n9','u1','九','jiǔ','nueve (9)','Con la mano: el índice doblado como un gancho.');
W('n10','u1','十','shí','diez (10)','Parece una cruz (+). Con la mano: índices cruzados o el puño cerrado.');
// Unidad 2
W('n11','u2','十一','shí·yī','once (11)','10 + 1: primero 十, luego la unidad.');
W('n20','u2','二十','èr·shí','veinte (20)','2 × 10: el número va ANTES de 十.');
W('n21','u2','二十一','èr·shí·yī','veintiuno (21)','2 × 10 + 1.');
W('n99','u2','九十九','jiǔ·shí·jiǔ','noventa y nueve (99)','9 × 10 + 9. Con esto ya cuentas hasta 99.');
ITEMS['g-num'] = {id:'g-num', unit:'u2', kind:'gen', es:'números del 11 al 99'};
// Unidad 3
W('xz','u3','现在','xiàn·zài','ahora','Se pone al inicio: 现在… = “ahora…”.');
W('ji','u3','几','jǐ','¿cuántos? (pregunta por un número)','Va donde iría el número de la respuesta.');
W('dian','u3','点','diǎn','… en punto / hora','Número + 点 = la hora: 三点 = las 3.');
W('jd','u3','几点','jǐ diǎn','¿qué hora? / ¿a qué hora?','几 + 点: “¿cuántas horas?”.');
W('ld','u3','两点','liǎng diǎn','las dos (en punto)','¡Ojo! Para la hora se dice 两 liǎng, nunca 二点.');
W('xzjd','u3','现在几点？','xiàn·zài jǐ diǎn','¿Qué hora es ahora?','Literal: “¿ahora cuántas horas?”. No hace falta verbo “ser”.');
ITEMS['g-time'] = {id:'g-time', unit:'u3', kind:'gen', es:'decir la hora'};
// Unidad 4
W('zs','u4','早上','zǎo·shang','mañana temprano (≈ 5–8 h)','早 = temprano. Se usa para las primeras horas.');
W('sw','u4','上午','shàng·wǔ','media mañana (≈ 9–11 h)','上 = antes · 午 = mediodía → “antes del mediodía”, como a.m.');
W('zw','u4','中午','zhōng·wǔ','mediodía (≈ 12 h)','中 = centro → el centro del día.');
W('xw','u4','下午','xià·wǔ','tarde (≈ 13–17 h)','下 = después → “después del mediodía”, como p.m.');
W('ws','u4','晚上','wǎn·shang','noche (desde ≈ 18 h)','晚 = tarde, de noche.');
ITEMS['g-period'] = {id:'g-period', unit:'u4', kind:'gen', es:'hora con periodo del día'};
// Unidad 5
W('wo','u5','我','wǒ','yo','La palabra más útil: con ella empiezan casi todas tus frases.');
W('qc','u5','起床','qǐ·chuáng','levantarse','起 = levantar · 床 = cama → “levantarse de la cama”.');
W('gz','u5','工作','gōng·zuò','trabajar','También significa “trabajo”.');
W('hj','u5','回家','huí·jiā','volver a casa','回 = volver · 家 = casa.');
W('sj','u5','睡觉','shuì·jiào','dormir, irse a dormir','睡 lleva 目 (ojo) a la izquierda: cerrar los ojos.');
W('qu','u5','去','qù','ir','去 + lugar: 去学校 = ir a la escuela.');
W('xx','u5','学校','xué·xiào','escuela','学 = estudiar · 校 = escuela.');
// Unidad 6
W('chi','u6','吃','chī','comer','Lleva 口 (boca) a la izquierda.');
W('zf','u6','早饭','zǎo·fàn','desayuno','早 = temprano · 饭 = comida.');
W('wf','u6','午饭','wǔ·fàn','almuerzo','午 = mediodía (como en 中午) + 饭.');
W('wanf','u6','晚饭','wǎn·fàn','cena','晚 = noche (como en 晚上) + 饭.');
// Unidad 7: frases completas sobre tu día
const C = (h, p) => ({h, p});
const ch = {
  wo:C('我','wǒ'), ni:C('你','nǐ'), xz:C('现在','xiàn·zài'), jd:C('几点','jǐ diǎn'), chi:C('吃','chī'), qu:C('去','qù'), xx:C('学校','xué·xiào'),
  qc:C('起床','qǐ·chuáng'), gz:C('工作','gōng·zuò'), hj:C('回家','huí·jiā'), sj:C('睡觉','shuì·jiào'),
  zf:C('早饭','zǎo·fàn'), wf:C('午饭','wǔ·fàn'), wanf:C('晚饭','wǎn·fàn')
};
PERIODS.forEach(p => ch[p.id] = C(p.h, p.p));
const hc = h => C(hourZh(h), hourPy(h));
const S_ = (id, chunks, es, q, unit) => (ITEMS[id] = {id, unit:unit || 'u7', kind:'sent', chunks, es, q:!!q,
  h: chunks.map(c => c.h).join('') + (q ? '？' : '。'), p: chunks.map(c => c.p).join(' ')});
S_('s1', [ch.xz, ch.jd], '¿Qué hora es ahora?', 1);
S_('s2', [ch.xz, ch.ws, hc(20)], 'Ahora son las 8 de la noche.');
S_('s3', [ch.wo, ch.zs, hc(7), ch.qc], 'Me levanto a las 7 de la mañana.');
S_('s4', [ch.wo, ch.zs, hc(7), ch.chi, ch.zf], 'Desayuno a las 7 de la mañana.');
S_('s5', [ch.wo, ch.sw, hc(9), ch.gz], 'Trabajo a las 9 de la mañana.');
S_('s6', [ch.wo, ch.zw, hc(13), ch.chi, ch.wf], 'Almuerzo a la 1 del mediodía.');
S_('s7', [ch.wo, ch.xw, hc(18), ch.hj], 'Vuelvo a casa a las 6 de la tarde.');
S_('s8', [ch.wo, ch.ws, hc(20), ch.chi, ch.wanf], 'Ceno a las 8 de la noche.');
S_('s9', [ch.wo, ch.ws, hc(22), ch.sj], 'Me voy a dormir a las 10 de la noche.');
S_('s10', [ch.ni, ch.jd, ch.hj], '¿A qué hora vuelves a casa?', 1);
const DISTRACT = [ch.zs, ch.sw, ch.zw, ch.xw, ch.ws, ch.chi, ch.qu, ch.qc, ch.gz, ch.hj, ch.sj, ch.zf, ch.wf, ch.wanf, hc(14), hc(9), hc(4), ch.ni, ch.wo];

const UNITS = [
  {id:'u1', key:'七', title:'Números 1–10', zh:'一二三', ref:'Contar del 1 al 10, también con una mano', items:['n1','n2','n3','n4','n5','n6','n7','n8','n9','n10'],
   intro:[{type:'hands'}]},
  {id:'u2', key:'十', title:'Números 11–99', zh:'十一 … 九十九', ref:'Decenas: todo se arma con 十', items:['n11','n20','n21','n99','g-num'],
   intro:[{type:'numrules'}]},
  {id:'u3', key:'点', title:'¿Qué hora es?', zh:'现在几点？', ref:'Número + 点', items:['xz','ji','dian','jd','ld','xzjd','g-time'],
   intro:[{type:'timerule'}]},
  {id:'u4', key:'午', title:'Mañana, tarde y noche', zh:'早上 上午 中午 下午 晚上', ref:'Las cinco partes del día', items:['zs','sw','zw','xw','ws','g-period'],
   intro:[{type:'daybar'}]},
  {id:'u5', key:'床', title:'Mi rutina', zh:'起床 工作 回家 睡觉', ref:'Verbos de todos los días', items:['wo','qc','gz','hj','sj','qu','xx'], intro:[]},
  {id:'u6', key:'饭', title:'Las comidas del día', zh:'吃早饭 吃午饭 吃晚饭', ref:'Desayuno, almuerzo y cena', items:['chi','zf','wf','wanf'], intro:[]},
  {id:'u7', key:'校', title:'Tu día en oraciones', zh:'你几点回家？', ref:'Frases completas sobre tu día', models:['s3','s10'], items:['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10'],
   intro:[{type:'grammar'}]}
];
