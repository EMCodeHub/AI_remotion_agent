# Auditoría audiovisual y UX

## Semántica

- Cada captura coincide con la frase activa, no solo con el capítulo general.
- Los estados visuales siguen el orden causal real: configuración, autorización, error, diagnóstico y resultado.
- No aparece una pantalla de éxito mientras el audio describe un fallo, ni una pantalla de configuración cuando ya se narra el resultado.
- Las etiquetas editoriales describen lo visible sin afirmar más de lo que demuestra la captura.

## Ritmo y transiciones

- No hay timestamps duplicados o no crecientes.
- Las escenas cortas dejan tiempo suficiente para reconocer el cambio.
- Las escenas largas conservan su imagen hasta la transición siguiente.
- Los fundidos no revelan el fondo entre escenas ni mezclan dos pantallas incompatibles durante demasiado tiempo.
- Los capítulos entran en pausas o cambios conceptuales y no interrumpen una instrucción crítica.

## Composición y legibilidad

- Intro, screenshots y marcos mantienen proporciones sin deformación.
- Subtítulos, rótulos y contadores no se superponen.
- Los subtítulos siguen siendo legibles sobre capturas claras y oscuras.
- El movimiento de escala es lento y no dificulta leer interfaces.
- No existen rectángulos o focos inferidos que apunten a zonas incorrectas. Distingue los overlays de selección de Remotion Studio de elementos renderizados.

## Audio y subtítulos

- La pista de narración comienza en cero y determina la duración total.
- Los clips visuales auxiliares están silenciados cuando no deben competir con la voz.
- Las palabras activas coinciden con el audio y los términos técnicos están normalizados.
- No hay páginas vacías, cortes de palabras o subtítulos que continúen después del audio.

## Controles automatizables

- Número esperado de escenas y archivos presentes.
- Timestamps únicos y estrictamente crecientes.
- Duraciones positivas tras aplicar solapamientos.
- TypeScript y listado de composiciones sin errores.
- MP4 final con vídeo H.264, audio AAC, resolución/FPS previstos y duración cercana al audio maestro.
- Decodificación completa sin errores.
