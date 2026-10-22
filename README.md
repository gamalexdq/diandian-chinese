# Diǎn Diǎn 点点

Aprende chino mandarín o francés en sesiones cortas: repaso espaciado, pronunciación escrita y ejercicios generados. HTML, CSS y JavaScript sin compilar, sin instalar nada.

*Learn Mandarin or French in short bursts: spaced repetition, written pronunciation, and generated exercises. Plain HTML, CSS and JS, no build, no install. (UI in Spanish.)*

**Pruébalo:** https://gamalexdq.github.io/diandian-chinese/ (chino) · https://gamalexdq.github.io/diandian-chinese/?lang=fr (francés)

El idioma se cambia arriba, en el inicio. Cada idioma guarda su propio progreso.

## Francés (nivel A1)

Dos rutas que siguen el orden de las unidades 0 y 1 de un manual A1. El contenido es propio: los temas y el vocabulario vienen del temario, pero los textos y los ejercicios están escritos para la app.

- **Bienvenue (unidad 0), con 8 unidades:** saludos y tu/vous, el alfabeto (deletrear y siglas), presentarse, números del 0 al 31 con cuentas, días, meses, estaciones y fechas, y frases para la clase.
- **Et vous ? (unidad 1), con 10 unidades:**
  - nacionalidades en masculino y femenino;
  - la edad;
  - être, avoir y s'appeler;
  - gustos con le, la, l' y les;
  - números del 32 al 100;
  - à, au, en y aux con países y ciudades. Los países no se traducen eligiendo entre cuatro opciones, porque se parecen demasiado al español. En cambio se relacionan con su artículo (le, la, l', les) o con su preposición, se completa el hueco y se escriben;
  - teléfono y correo;
  - ne… pas;
  - profesiones;
  - la ficha de identidad.
- **Pronunciación escrita con letras del español** (por ejemplo `bõ·zhur`). Solo se muestra en N1, igual que el pinyin.
- **Trampas a propósito:** «Je ai», «le 14 de juillet», «Il est un médecin», «Je suis 20 ans», ils ont / ils sont.
- **Diálogos:** en clase, en el tren, entre voluntarios y al intercambiar contactos.

## Chino

Dos secciones, que se eligen arriba en el inicio: **Principiante** y **HSK 1**. Cada una guarda la última ruta que abriste.

### Principiante

- **Siete rutas**
  - **Preséntate:** saludos, los cuatro tonos, sonidos difíciles, nacionalidades, estudios y familia.
  - **La hora:** números del 1 al 99, la hora, las partes del día y la rutina diaria.
  - **Comida:** platos, frutas, carnes, verduras y bebidas, con 什么, 吗 y 不.
  - **Compras:** colores, 这个/那个 y 件, precios en 块 y regatear.
  - **Ciudad:** transporte, qué hay cerca (有/没有), dónde está (在) y cómo llegar.
  - **Clima:** el tiempo, los grados, los meses, las estaciones (en Pekín y en Lima) y cómo te sientes.
  - **Aficiones:** los días de la semana, invitar a alguien, deportes, la tele e internet.

### HSK 1

Sigue el temario de un curso HSK 1 de seis semanas. Cada semana es una ruta con cinco unidades (una por lección) y una de frases completas. Los temas vienen del temario; las frases y los ejercicios son propios. Usa otro color de acento para que se note en qué sección estás.

- **Saludos:** 您 y 你们, 你好吗？ y 呢, dónde vives (住在), la edad (岁, 多大, 几岁), el número de teléfono con el 1 que se dice yāo, y la cortesía (请, 不客气, 没关系).
- **Familia:** 谁 y 的, mascotas con 只, 个 y 两 (nunca 二只), libros con 本, 会 + idiomas, 也, 都 y 和.
- **Hora y clima:** horas con 分, 半 y 零; fechas (月, 号, el año cifra por cifra, 生日); 下雨了 y el 了 de cambio; 在 + lugar; 了 y 没 para lo que ya pasó.
- **Trabajo:** profesiones, 在医院工作 (y la trampa 工作在医院), 想 y 能, aficiones con 爱, el cine (部, 好看, 有意思) y 认识 frente a 知道.
- **Compras:** 买 y 卖, precios con 块 y 毛, 一共 y 斤, comprar por internet, 会做中国菜 y pedir bebidas con 杯 y 瓶.
- **Transporte:** taxi, avión y tren, 离 + 远/近 y cuánto se tarda (分钟 frente a 分), 是…的, dónde está algo (上, 下面, 呢) y 太…了.
- **Ejercicios nuevos:** dictar teléfonos, leer horas con minutos, armar fechas, sumar precios, una escena para ubicar al gato y respuestas que cambian según la pista.
- **Examen final HSK 1** con lo de las seis semanas, además del examen y los diálogos de cada ruta.

### En las dos secciones

- **Tres niveles por unidad.** Si sacas 90% o más al primer intento se abre el siguiente nivel. El umbral es la constante `PASS_PCT` en `js/core/state.js`.
  - **N1:** tarjetas de introducción, y luego pasas de reconocer a producir.
  - **N2:** sin pinyin, más dictados y caracteres que armas uno por uno.
  - **N3:** frases nuevas generadas en cada sesión.
- **Repaso espaciado (cajas de Leitner).** Si aciertas una palabra vuelve en 1, 2, 4, 8, 16 y 32 días. Si la fallas, vuelve mañana.
- **Lo que fallas vuelve** al final de la misma lección.
- **Ejercicios:** reconocer tonos de oído, opción múltiple, relacionar en dos columnas, armar frases con fichas, escribir pinyin, dictado, hablar en voz alta con autoevaluación, responder preguntas y formular preguntas.
- **Extras:** entrenamiento de oído (tonos y pares de sonidos), diálogos de situaciones cotidianas, un examen por ruta y el juego 逢七过 («no digas 7»).
- **Ejercicios con dibujos:** muestras de color, etiquetas de precio, un plano de la calle, flechas de ruta, el pronóstico del tiempo y un calendario.
- **Varias respuestas válidas:** si el chino admite otro orden (每天我… o 我每天…) o dos formas (红色 o 红的), las dos cuentan.
- **Audio** con la voz china del sistema (Web Speech API), a velocidad normal y lenta.
- **Modo claro y oscuro.** Se puede usar con el teclado: 1–4 eligen una opción y Enter comprueba o continúa.

## Cómo usarlo

Abre `index.html` en el navegador. No hace falta compilar nada ni instalar dependencias.

El progreso se guarda en `localStorage`, así que queda solo en ese navegador y en ese dispositivo.

**Llevar el progreso a otro dispositivo:** al final del inicio está «Llevar mi progreso a otro dispositivo». Genera un enlace y un QR que llevan todo tu avance: unidades, niveles, XP, racha y el calendario de repaso.
- Lo abres en el otro dispositivo y confirmas.
- El progreso va después del `#`, así que nunca llega a ningún servidor.
- Es una copia del momento en que lo generas, no una sincronización.

**Audio:** Android, iOS y macOS ya traen voz china y francesa. En Windows, si no se oye nada, instala el paquete de voz «Chino (simplificado)» en *Configuración → Hora e idioma → Voz*.

## Estructura

`index.html` solo tiene el marco de la página y carga, en orden, `css/app.css` y los scripts. Son scripts clásicos (no módulos), así que comparten las variables globales y la app sigue funcionando al abrir `index.html` directo desde el disco. El orden de carga importa: cada archivo puede usar lo que definen los anteriores.

- **`js/core/`:** lo que no depende del idioma.
  - `util.js`: utilidades, `LANG`, el pinyin y los números.
  - `state.js`: el progreso y `PASS_PCT`.
  - `audio.js`: la voz del sistema.
  - `exercises.js`: los constructores de ejercicios (`wordEx`, `sentEx`, `exFor`).
  - `plans.js`: `lessonPlan`, `lessonPlan2` y `lessonPlan3` generan cada nivel.
  - `cards.js`: las tarjetas de introducción.
  - `session.js`: el motor de la sesión, `startSession` → `renderEx` → `grade` → `advance`. Tipos de ejercicio: `mc`, `tiles`, `type`, `digits`, `speak` y `match` (relacionar).
  - `game7.js`: el juego 逢七过.
  - `home.js`: el inicio.
  - `share.js`: llevar el progreso a otro dispositivo y el teclado.
- **`js/zh/principiante/`:** las siete rutas de Principiante, un archivo por ruta. `rutas.js` arma las unidades, los diálogos y `MODULES`.
- **`js/zh/hsk1/`:** la sección HSK 1. `base.js` tiene los ayudantes, hay un archivo por semana, y `rutas.js` tiene los diálogos y el examen final.
- **`js/fr/`:** el francés. Solo se carga con `?lang=fr`, después del chino, y reemplaza `ITEMS`, `UNITS`, `MODULES` y los generadores. También adapta `wordEx`, `sentEx` y `cardHTML`.
  - `base.js`: los ayudantes.
  - `bienvenue.js` y `et-vous.js`: las dos rutas.
  - `rutas.js`: los modos, los niveles, las unidades y los diálogos.
  - `engine.js`: las piezas del motor que dependen del idioma.
  - En las frases, `_` une dos palabras en una ficha y `|` separa una palabra en dos (`n'|aime`).
- **`js/main.js`:** dibuja el inicio cuando ya cargó todo.

Datos principales: `ITEMS` (palabras y frases; cada sílaba de pinyin se separa con `·`), `UNITS` y `MODULES` (unidades y rutas), y `srsMark` y `dueIds` (el repaso espaciado).

Para agregar vocabulario, crea un ítem con `W(id, unidad, hanzi, pinyin, español, pista)` en el archivo de su ruta y agrega su `id` a la unidad que corresponda en `UNITS`.
