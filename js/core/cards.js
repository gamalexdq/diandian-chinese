/* ---------- intro cards ---------- */
function cardHTML(c){
  if (c.type === 'word'){
    const it = ITEMS[c.id];
    return `<div class="card center"><div class="kind">Palabra nueva</div>${tzg(it.h)}<div class="pybig">${pyHTML(it.p)}</div>${audioBtns(it.h)}<div class="es">${esc(it.es)}</div>${it.tip ? `<div class="tip">${esc(it.tip)}</div>` : ''}</div>`;
  }
  if (c.type === 'sent'){
    const it = ITEMS[c.id];
    return `<div class="card center"><div class="kind">Oración modelo</div><div class="han" style="font-size:34px">${esc(it.h)}</div><div class="pybig" style="font-size:20px">${pyHTML(it.p)}</div>${audioBtns(it.h)}<div class="es">${esc(it.es)}</div></div>`;
  }
  if (c.type === 'tones') return `<div class="card center"><div class="kind">Antes de empezar</div><h2>Cuatro tonos, cuatro palabras</h2>
    <div class="rules">${[['妈','mā','1.º · alto y plano','mamá'], ['麻','má','2.º · sube, como al preguntar «¿sí?»','cáñamo'], ['马','mǎ','3.º · baja y sube un poco','caballo'], ['骂','mà','4.º · cae fuerte, como una orden','regañar']].map(r =>
      `<div class="rule"><div><span class="han">${r[0]}</span> ${pyHTML(r[1])}<div class="muted">${r[2]} → ${r[3]}</div></div><button class="audio" data-say="${r[0]}">${ICON.play}</button></div>`).join('')}</div>
    <p class="es">Misma sílaba, otro tono, otra palabra. También hay un tono neutro, corto y sin marca: el segundo 妈 de 妈妈.</p>
    <div class="tip">En esta app el pinyin siempre tiene el color de su tono: naranja 1.º, azul 2.º, violeta 3.º y rosa 4.º.</div></div>`;
  if (c.type === 'sounds') return `<div class="card center"><div class="kind">Sonidos nuevos</div><h2>Lo que no existe en español</h2>
    <div class="rules">${[['中 是 吃 人','zh · sh · ch · r','la punta de la lengua se curva hacia atrás'], ['字 四 菜','z · s · c','lengua plana detrás de los dientes; c suena «ts» con aire'], ['几 七 西','j · q · x','lengua abajo, como sonriendo; q suena «ch» suave con aire'], ['女 绿','ü','di «i» con los labios redondos de «u»'], ['怕 爸 · 兔 肚','p/b · t/d','p, t y k llevan un soplo de aire; b, d y g no']].map(r =>
      `<div class="rule"><div><span class="han">${r[0]}</span> <b>${r[1]}</b><div class="muted">${r[2]}</div></div><button class="audio" data-say="${r[0].replace(/ · /g, '，').replace(/ /g, '，')}">${ICON.play}</button></div>`).join('')}</div>
    <p class="es">Aquí entrenas el oído: escuchas y eliges el tono o el sonido correcto.</p></div>`;
  if (c.type === 'nation') return `<div class="card center"><div class="kind">La regla</div><h2>País + 人 = nacionalidad</h2>
    <div class="formula"><div><small>país</small><span class="han">中国</span></div><div class="op">+</div><div><small>persona</small><span class="han">人</span></div><div class="op">=</div><div><small>chino/a</small><span class="han">中国人</span></div></div>
    <div class="rules">
      <div class="rule"><div><span class="han">你是哪国人？</span><div class="muted">¿De qué país eres?</div></div><button class="audio" data-say="你是哪国人">${ICON.play}</button></div>
      <div class="rule"><div><span class="han">我是秘鲁人。</span><div class="muted">Soy de Perú.</div></div><button class="audio" data-say="我是秘鲁人">${ICON.play}</button></div>
    </div><p class="es">哪 va donde iría el país en la respuesta.</p></div>`;
  if (c.type === 'shima') return `<div class="card center"><div class="kind">La regla</div><h2>是, 不是 y 吗</h2>
    <div class="rules">
      <div class="rule"><div><span class="han">我<b>是</b>学生。</span><div class="muted">Soy estudiante.</div></div><button class="audio" data-say="我是学生">${ICON.play}</button></div>
      <div class="rule"><div><span class="han">我<b>不是</b>学生。</span><div class="muted">No soy estudiante. 不是 suena bú shì.</div></div><button class="audio" data-say="我不是学生">${ICON.play}</button></div>
      <div class="rule"><div><span class="han">你是学生<b>吗</b>？</span><div class="muted">¿Eres estudiante? Frase + 吗.</div></div><button class="audio" data-say="你是学生吗">${ICON.play}</button></div>
    </div><p class="es">Para decir que sí, repite el verbo: 是，我是学生。 Para decir que no: 不，我不是学生。</p></div>`;
  if (c.type === 'family') return `<div class="card center"><div class="kind">La familia</div><h2>Mayor o menor, siempre</h2>
    <div class="rules">${[['爸爸 · 妈妈','papá · mamá'], ['哥哥 · 姐姐','hermano mayor · hermana mayor'], ['弟弟 · 妹妹','hermano menor · hermana menor']].map(r =>
      `<div class="rule"><div><span class="han">${r[0]}</span><div class="muted">${r[1]}</div></div><button class="audio" data-say="${r[0].replace(' · ', '，')}">${ICON.play}</button></div>`).join('')}</div>
    <p class="es">这是我妈妈。= Esta es mi mamá. 她是谁？= ¿Quién es ella?</p><div class="tip">他 (él) y 她 (ella) suenan igual: tā.</div></div>`;
  if (c.type === 'review1') return `<div class="card center"><div class="kind">Seis preguntas para presentarte</div><h2>Pregunta y responde</h2>
    <div class="rules">${[['你叫什么名字？','tu nombre'], ['你是哪国人？','tu país'], ['你是学生吗？','qué eres'], ['你学习什么？','qué estudias'], ['这是你爸爸吗？','tu familia'], ['她是谁？','quién es alguien']].map(r =>
      `<div class="rule"><div><span class="han">${r[0]}</span><div class="muted">${r[1]}</div></div><button class="audio" data-say="${r[0].replace('？', '')}">${ICON.play}</button></div>`).join('')}</div>
    <div class="tip">Practicas las dos direcciones: responder una pregunta y hacer la pregunta para una respuesta.</div></div>`;
  if (c.type === 'shenme') return `<div class="card center"><div class="kind">La regla</div><h2>什么 se queda en su sitio</h2>
    <div class="rules">
      <div class="rule"><div><span class="han">你 · 吃 · <b>什么</b>？</span><div class="muted">¿Qué comes?</div></div><button class="audio" data-say="你吃什么">${ICON.play}</button></div>
      <div class="rule"><div><span class="han">我 · 吃 · <b>饺子</b>。</span><div class="muted">Como jiaozi.</div></div><button class="audio" data-say="我吃饺子">${ICON.play}</button></div>
    </div><p class="es">La pregunta y la respuesta tienen el mismo orden. Para responder, cambia 你 por 我 y 什么 por la comida.</p></div>`;
  if (c.type === 'ma') return `<div class="card center"><div class="kind">La regla</div><h2>Frase + 吗 = pregunta de sí o no</h2>
    <div class="formula"><div><small>frase</small><span class="han">你吃饺子</span></div><div class="op">+</div><div><small>pregunta</small><span class="han">吗？</span></div></div>
    ${audioBtns('你吃饺子吗')}
    <div class="rules">
      <div class="rule"><div><b>Sí:</b> repite el verbo. <span class="han">吃，我吃饺子。</span></div><button class="audio" data-say="吃，我吃饺子">${ICON.play}</button></div>
      <div class="rule"><div><b>No:</b> 不 + verbo. <span class="han">不，我不吃饺子。</span></div><button class="audio" data-say="不，我不吃饺子">${ICON.play}</button></div>
    </div><div class="tip">En chino no hay una palabra única para “sí”: se responde con el mismo verbo de la pregunta.</div></div>`;
  if (c.type === 'bu') return `<div class="card center"><div class="kind">Pronunciación</div><h2>不 cambia de tono antes de un 4.º tono</h2>
    <div class="rules">
      <div class="rule"><div><span class="han">不吃</span> <span class="t4">bù</span> <span class="t1">chī</span></div><button class="audio" data-say="不吃">${ICON.play}</button></div>
      <div class="rule"><div><span class="han">不喜欢</span> <span class="t4">bù</span> <span class="t3">xǐ</span>huan</div><button class="audio" data-say="不喜欢">${ICON.play}</button></div>
      <div class="rule"><div><span class="han">不要</span> <span class="t2">bú</span> <span class="t4">yào</span></div><button class="audio" data-say="不要">${ICON.play}</button></div>
    </div><div class="tip">Dos cuartos tonos seguidos cuestan, así que el primero sube: bù yào → bú yào.</div></div>`;
  if (c.type === 'review3') return `<div class="card center"><div class="kind">Las 4 preguntas clave</div><h2>Un verbo para cada cosa</h2>
    <div class="rules">
      <div class="rule"><div><span class="han">你吃什么？</span><div class="muted">platos: 饺子, 炒饭…</div></div><button class="audio" data-say="你吃什么">${ICON.play}</button></div>
      <div class="rule"><div><span class="han">你喜欢什么水果？</span><div class="muted">frutas: 苹果, 香蕉…</div></div><button class="audio" data-say="你喜欢什么水果">${ICON.play}</button></div>
      <div class="rule"><div><span class="han">你要什么？</span><div class="muted">en el mercado: 鸡肉, 鱼…</div></div><button class="audio" data-say="你要什么">${ICON.play}</button></div>
      <div class="rule"><div><span class="han">你喝什么？</span><div class="muted">bebidas: 茶, 咖啡…</div></div><button class="audio" data-say="你喝什么">${ICON.play}</button></div>
    </div><div class="tip">Para conversar necesitas dos cosas: responder preguntas y hacerlas. Aquí practicas ambas.</div></div>`;
  if (c.type === 'rule') return `<div class="card center"><div class="kind">${esc(c.kind)}</div><h2>${esc(c.title)}</h2>
    ${c.formula ? `<div class="formula">${c.formula.map(([l, h]) => `<div><small>${esc(l)}</small><span class="han">${esc(h)}</span></div>`).join('')}</div>` : ''}
    <div class="rules">${c.rows.map(r => `<div class="rule"><div><span class="han">${esc(r[0])}</span><div class="muted">${esc(r[1])}</div></div><button class="audio" data-say="${esc(r[0].replace(/ · /g, '，'))}" aria-label="Escuchar">${ICON.play}</button></div>`).join('')}</div>
    ${c.tip ? `<div class="tip">${c.tip}</div>` : ''}</div>`;
  if (c.type === 'lvl') return c.lv === 2
    ? `<div class="card center"><div class="kind">Nivel 2</div><h2>Sin pinyin, más oído</h2>
      <p class="es">Las preguntas y las fichas ya no muestran pinyin: lees los caracteres. Hay más dictados y armas cada palabra carácter por carácter.</p>
      <div class="tip">Después de cada respuesta sigues viendo el pinyin, para corregir tu pronunciación.</div></div>`
    : `<div class="card center"><div class="kind">Nivel 3</div><h2>Frases que nunca viste</h2>
      <p class="es">Cada vez se generan frases nuevas con el vocabulario de la ruta, con horas al azar, dictados más largos y respuestas completas. Sin pinyin.</p>
      <div class="tip">No memorices frases: aplica la regla <b>quién · cuándo · qué hace</b>.</div></div>`;
  if (c.type === 'hands') return `<div class="card center"><div class="kind">Antes de empezar</div><h2>Contar con una sola mano</h2>
    <p class="es">En China los números del 6 al 10 se hacen con gestos de una sola mano. Cada tarjeta te dirá el gesto: hazlo mientras repites la palabra en voz alta. Mover la mano y decir la palabra a la vez ayuda a recordarla.</p>
    <div class="tip">Los tonos tienen color: <b class="t1">1.º alto ā</b> · <b class="t2">2.º sube á</b> · <b class="t3">3.º baja y sube ǎ</b> · <b class="t4">4.º cae à</b></div></div>`;
  if (c.type === 'numrules') return `<div class="card center"><div class="kind">La regla</div><h2>Con 10 caracteres cuentas hasta 99</h2>
    <div class="rules">
      <div class="rule"><div><span class="han">十 + 一</span> = 11</div><button class="audio" data-say="十一">${ICON.play}</button></div>
      <div class="rule"><div><span class="han">二 × 十</span> = 20</div><button class="audio" data-say="二十">${ICON.play}</button></div>
      <div class="rule"><div><span class="han">二 × 十 + 一</span> = 21</div><button class="audio" data-say="二十一">${ICON.play}</button></div>
      <div class="rule"><div><span class="han">九 × 十 + 九</span> = 99</div><button class="audio" data-say="九十九">${ICON.play}</button></div>
    </div><div class="tip">Si el número va <b>antes</b> de 十, multiplica. Si va <b>después</b>, suma.</div></div>`;
  if (c.type === 'timerule') return `<div class="card center"><div class="kind">La regla</div><h2>Número + 点 = la hora</h2>
    <div class="clockwrap">${clockSVG(3)}<div class="formula"><div><small>número</small><span class="han">三</span></div><div class="op">+</div><div><small>hora</small><span class="han">点</span></div></div></div>
    ${audioBtns('三点')}<div class="tip">La única excepción: las 2 son <b class="han">两点</b> liǎng diǎn, no 二点.</div></div>`;
  if (c.type === 'daybar') {
    const segs = [['', 0, 5, 'var(--sky-night)'], ['早上', 5, 9, 'color-mix(in srgb,var(--sky-day) 55%,var(--surface))'], ['上午', 9, 12, 'var(--sky-day)'], ['中午', 12, 13, 'var(--gold)'], ['下午', 13, 18, 'color-mix(in srgb,var(--sky-day) 70%,var(--t1))'], ['晚上', 18, 24, 'var(--sky-night)']];
    return `<div class="card center"><div class="kind">El día en chino</div><h2>Primero el periodo, después la hora</h2>
    <div class="daybar"><div class="bar">${segs.map(s => `<div style="flex:${s[2]-s[1]};background:${s[3]};color:${s[3].includes('night') ? 'var(--on-night)' : 'var(--ink)'}">${s[0]}</div>`).join('')}</div>
    <div class="ticks"><span>0 h</span><span>6</span><span>12</span><span>18</span><span>24 h</span></div></div>
    <div class="formula"><div><small>periodo</small><span class="han">下午</span></div><div class="op">+</div><div><small>hora</small><span class="han">三点</span></div></div>
    ${audioBtns('下午三点')}<div class="tip">下午三点 = las 3 de la tarde. Va de lo grande a lo pequeño: primero la parte del día, luego la hora.</div></div>`;
  }
  if (c.type === 'grammar') return `<div class="card center"><div class="kind">La regla clave</div><h2>El “cuándo” va antes de la acción</h2>
    <div class="formula"><div><small>quién</small><span class="han">我</span></div><div><small>cuándo</small><span class="han">早上六点</span></div><div><small>qué hace</small><span class="han">起床</span></div></div>
    <p class="es">En español decimos “me levanto <i>a las 6</i>”. En chino es “yo <i>a las 6 de la mañana</i> me levanto”. La hora nunca va al final.</p>
    <div class="tip">Para preguntar, pon 几点 justo donde iría la hora: 你<b>几点</b>去学校？</div></div>`;
  return '';
}
