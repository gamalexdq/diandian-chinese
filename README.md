# Diǎn Diǎn 点点

Aprende chino mandarín en sesiones cortas: repaso espaciado, pinyin coloreado por tono y ejercicios generados. Un solo archivo HTML, sin instalar nada.

*Learn Mandarin in short bursts: spaced repetition, tone-colored pinyin, and generated exercises. Single HTML file, no install. (UI in Spanish.)*

**Pruébalo:** https://gamalexdq.github.io/diandian-chinese/

## Qué tiene

- **Dos rutas**
  - **La hora:** números del 1 al 99, la hora, las partes del día y la rutina diaria.
  - **Comida:** platos, frutas, carnes, verduras y bebidas, con 什么, 吗 y 不.
- **Tres niveles por unidad.** Si sacas 95% al primer intento se abre el siguiente nivel.
  - **N1:** tarjetas de introducción, y luego pasas de reconocer a producir.
  - **N2:** sin pinyin, más dictados y caracteres que armas uno por uno.
  - **N3:** frases nuevas generadas en cada sesión.
- **Repaso espaciado (cajas de Leitner).** Si aciertas una palabra vuelve en 1, 2, 4, 8, 16 y 32 días. Si la fallas, vuelve mañana.
- **Lo que fallas vuelve** al final de la misma lección.
- **Ejercicios:** opción múltiple, armar frases con fichas, escribir pinyin, dictado, hablar en voz alta con autoevaluación, responder preguntas y formular preguntas.
- **Extras:** diálogos de situaciones cotidianas, un examen por ruta y el juego 逢七过 («no digas 7»).
- **Audio** con la voz china del sistema (Web Speech API), a velocidad normal y lenta.
- **Modo claro y oscuro.** Se puede usar con el teclado: 1–4 eligen una opción y Enter comprueba o continúa.

## Cómo usarlo

Abre `index.html` en el navegador. No hace falta compilar nada ni instalar dependencias.

El progreso se guarda en `localStorage`, así que queda solo en ese navegador y en ese dispositivo.

**Audio:** Android, iOS y macOS ya traen voz china. En Windows, si no se oye nada, instala el paquete de voz «Chino (simplificado)» en *Configuración → Hora e idioma → Voz*.

## Estructura

Todo está en `index.html`:

- **`ITEMS`:** palabras y frases. Cada sílaba de pinyin se separa con `·`.
- **`UNITS` y `MODULES`:** las unidades y las rutas.
- **`lessonPlan`, `lessonPlan2` y `lessonPlan3`:** generan cada nivel.
- **`startSession` → `renderEx` → `grade` → `advance`:** el motor de la sesión.
- **`srsMark` y `dueIds`:** el repaso espaciado.

Para agregar vocabulario, crea un ítem con `W(id, unidad, hanzi, pinyin, español, pista)` y agrega su `id` a la unidad que corresponda en `UNITS`.
