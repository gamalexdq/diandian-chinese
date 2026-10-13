# Diǎn Diǎn 点点

Aprende chino mandarín en sesiones cortas: repaso espaciado, pinyin coloreado por tono y ejercicios generados. Un solo archivo HTML, sin instalar nada.

*Learn Mandarin in short bursts: spaced repetition, tone-colored pinyin, and generated exercises. Single HTML file, no install. (UI in Spanish.)*

**Pruébalo:** https://gamalexdq.github.io/diandian-chinese/

## Qué tiene

- **Siete rutas**
  - **Preséntate:** saludos, los cuatro tonos, sonidos difíciles, nacionalidades, estudios y familia.
  - **La hora:** números del 1 al 99, la hora, las partes del día y la rutina diaria.
  - **Comida:** platos, frutas, carnes, verduras y bebidas, con 什么, 吗 y 不.
  - **Compras:** colores, 这个/那个 y 件, precios en 块 y regatear.
  - **Ciudad:** transporte, qué hay cerca (有/没有), dónde está (在) y cómo llegar.
  - **Clima:** el tiempo, los grados, los meses, las estaciones (en Pekín y en Lima) y cómo te sientes.
  - **Aficiones:** los días de la semana, invitar a alguien, deportes, la tele e internet.
- **Tres niveles por unidad.** Si sacas 90% o más al primer intento se abre el siguiente nivel. El umbral es la constante `PASS_PCT` en `index.html`.
  - **N1:** tarjetas de introducción, y luego pasas de reconocer a producir.
  - **N2:** sin pinyin, más dictados y caracteres que armas uno por uno.
  - **N3:** frases nuevas generadas en cada sesión.
- **Repaso espaciado (cajas de Leitner).** Si aciertas una palabra vuelve en 1, 2, 4, 8, 16 y 32 días. Si la fallas, vuelve mañana.
- **Lo que fallas vuelve** al final de la misma lección.
- **Ejercicios:** reconocer tonos de oído, opción múltiple, armar frases con fichas, escribir pinyin, dictado, hablar en voz alta con autoevaluación, responder preguntas y formular preguntas.
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

**Audio:** Android, iOS y macOS ya traen voz china. En Windows, si no se oye nada, instala el paquete de voz «Chino (simplificado)» en *Configuración → Hora e idioma → Voz*.

## Estructura

Todo está en `index.html`:

- **`ITEMS`:** palabras y frases. Cada sílaba de pinyin se separa con `·`.
- **`UNITS` y `MODULES`:** las unidades y las rutas.
- **`lessonPlan`, `lessonPlan2` y `lessonPlan3`:** generan cada nivel.
- **`startSession` → `renderEx` → `grade` → `advance`:** el motor de la sesión.
- **`srsMark` y `dueIds`:** el repaso espaciado.

Para agregar vocabulario, crea un ítem con `W(id, unidad, hanzi, pinyin, español, pista)` y agrega su `id` a la unidad que corresponda en `UNITS`.
