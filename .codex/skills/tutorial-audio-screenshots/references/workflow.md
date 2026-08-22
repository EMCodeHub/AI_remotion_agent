# Flujo de producción

## 1. Descubrir y preservar

1. Lee `AGENTS.md`, `README.md` y `notes/EDITING_NOTES.md`.
2. Localiza audio, screenshots, texto de referencia, intro y otros medios sin abrir archivos privados ajenos al vídeo.
3. Inspecciona duración, dimensiones, FPS, códecs y presencia de audio. Comprueba visualmente los clips: un archivo válido puede contener imagen negra.
4. Conserva la fuente original. Crea copias de trabajo en `public/audio/`, `public/images/`, `public/videos/` y `public/subtitles/`, todas excluidas de Git cuando contengan medios o datos de cuenta.
5. Normaliza nombres de capturas con ceros (`01`, `02`, ...), pero conserva un índice narrativo independiente si deben reordenarse.

## 2. Construir el mapa narrativo

1. Usa la narración como reloj maestro. Obtén timestamps por palabra y conserva una transcripción completa local.
2. Divide el discurso en hitos: contexto, acciones, errores, decisiones, verificaciones y resultado.
3. Para cada captura registra: archivo, segundo de entrada, título breve, capítulo y modo de encuadre.
4. Contrasta el contenido visible con una ventana de texto alrededor del timestamp. La captura debe mostrar la acción, estado o concepto que se está pronunciando.
5. No fuerces una captura por cada frase. Mantén la imagen anterior cuando siga siendo la evidencia correcta; el reposo mejora la comprensión.

## 3. Implementar en Remotion

- Centraliza FPS, duración, transición, escenas y capítulos en un archivo de datos.
- Usa `Sequence` para delimitar escenas y `interpolate()` con easing determinista para opacidad, desplazamiento y escala.
- Para screenshots, prefiere `objectFit: contain` dentro de un marco estable. Usa `cover` solo si el recorte es intencional.
- No asignes a una imagen una `durationInFrames` fija independiente de la escena: podría desaparecer antes de tiempo.
- Usa transiciones solapadas suaves, normalmente de 24–30 frames a 30 FPS. Una escena debe alcanzar opacidad completa cerca de su timestamp nominal.
- Las tarjetas de capítulo pueden cubrir brevemente la imagen, pero no deben ocultar una acción imprescindible.

## 4. Intro y carátula

- Si hay intro en vídeo, recorta solo el tramo solicitado y elimina su pista de audio cuando deba mantenerse la narración principal.
- Refuerza el silencio con `muted` en el componente `Video`.
- Cuando el usuario pida una carátula, conserva título y jerarquía; presenta el clip dentro de un marco menor como una captura animada.
- Al terminar la intro, reutiliza el mismo marco para las imágenes posteriores. Evita saltos de escala o composición.
- Las estampas de apertura deben seguir el discurso actual. No adelantes el resultado final si la narración todavía explica el problema.

## 5. Subtítulos

- Genera JSON compatible con `Caption` y páginas breves, normalmente de 2–3 segundos.
- Usa timestamps por palabra para resaltar el token activo.
- Mantén tipografía de sistema estilo Apple/SF Pro, alto contraste y movimiento discreto.
- Reserva una zona diferente de los rótulos de escena. Comprueba que el fondo del subtítulo no tape botones o datos esenciales de la captura.
- Conserva el audio principal a velocidad y nivel originales salvo petición expresa.

## 6. Validar y entregar

1. Ejecuta `npm run typecheck` y `npm run compositions`.
2. Haz QA semántico de todos los timestamps y QA visual en la intro, transiciones cortas, escenas largas, capítulos y cierre.
3. Renderiza solo bajo solicitud en `exports/final/`, normalmente H.264/AAC y `yuv420p`.
4. Verifica con `ffprobe` dimensiones, duración, FPS, pistas y códecs.
5. Decodifica el archivo completo con FFmpeg hacia salida nula para detectar corrupción.
6. Informa ruta, duración, tamaño, validaciones y estado Git.
