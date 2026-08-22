# Notas de edición

## Skill reutilizable

- El procedimiento aprendido durante `FacebookMcpTutorial` está documentado en `.codex/skills/tutorial-audio-screenshots/`.
- La skill cubre preparación de fuentes, audio maestro, timeline semántico de screenshots, subtítulos, intro silenciosa, transiciones, QA UX y validación del MP4 final.

## Tutorial Facebook Ads MCP

- Composición: `FacebookMcpTutorial`; salida prevista: `exports/final/facebook-mcp-tutorial.mp4`.
- Estado: composición preparada, sincronizada y renderizada en `exports/final/facebook-mcp-tutorial.mp4` por petición del usuario.
- Formato: 1920×1080, 30 FPS, 25.810 frames. El audio dura 860,316735 segundos (`14:20.316735`) y determina la duración total.
- Audio local: `public/audio/voiceovers/facebook-mcp.mp3`; copia de trabajo excluida de Git.
- Imágenes: 42 capturas numeradas en `public/images/facebook-mcp/`, excluidas de Git porque pueden mostrar datos de cuenta. Las capturas 12, 27 y 28 tienen relaciones de aspecto no 16:9 y se presentan con `contain`.
- Sincronización: transcripción local Whisper en español con timestamps por palabra. La transcripción completa se guarda en `public/subtitles/facebook-mcp.full.json` y `notes/facebook-mcp-transcript.txt`, ambos excluidos de Git.
- Hitos narrativos: Meta `02:51`, Codex `03:23`, ChatGPT `04:29`, rollout `07:08`, cuenta Comodín `09:16`, campaña `10:41`, permisos `11:41` y conclusión `12:04`.
- Sistema visual: fondo marfil o negro profundo, acento azul, marcos blancos, tipografía sans serif local, transiciones solapadas de 30 frames y movimiento determinista con `interpolate()`.
- Timeline editable: `src/data/facebookMcpTimeline.ts`; componentes específicos en `src/components/facebookMcp/`.
- QA visual: revisados fotogramas de control en la salida de la intro, el primer capítulo, una escena larga de conexión y el bloque de facturación. No se generó el render final.
- Revisión de ritmo: transiciones solapadas de 30 frames para evitar flashes del fondo y más reposo en las capturas 1–8, 26–29 y 33–35.
- Auditoría semántica: las 42 capturas se contrastaron con las palabras activas de la narración. El bloque de Codex se reordenó según el flujo OAuth real (`13, 14, 9, 15, 16, 10, 11, 12, 17, 18`); el bloque de facturación comienza al mencionarse el pago (`07:08`) y las respuestas de soporte ya no se solapan. El contador visual conserva el orden narrativo `01/42–42/42` aunque cambie el nombre del archivo fuente.
- Auditoría UX de apertura: tras los 15 segundos de Obsidian, las estampas siguen el discurso `nuevo agente → conexión con Meta → MCP no habilitado → cambio de enfoque → MCP en ChatGPT → planteamiento original`; se retiró el adelanto prematuro de la campaña final.
- Legibilidad: los subtítulos se elevaron a 124 px del borde inferior y se ajustaron a 44 px para no tapar los rótulos de escena. Las capturas ya no tienen una duración interna fija, por lo que permanecen visibles hasta su transición real incluso en escenas largas.
- Subtítulos: `AppleCaptions`, páginas de 2,6 segundos, timestamps derivados directamente del audio, normalización de términos técnicos y tipografía de sistema compatible con SF Pro/Segoe UI.
- `intro.flv`: original preservado en `video mcp facebook/intro.flv` y copia MP4 local en `public/videos/broll/facebook-mcp-intro.mp4`. El análisis de los 36,483 segundos detecta negro puro de principio a fin, por lo que no se incorpora visualmente hasta recibir una fuente con imagen.
- Intro de sustitución: primeros 15 segundos de `obsidian brain-use as intro.mp4`, preparados como `public/videos/broll/facebook-mcp-brain-intro.mp4`. La copia de trabajo no contiene pista de audio y el componente `Video` también usa `muted`; la narración principal permanece intacta. El clip aparece escalado dentro del marco lateral de la carátula, conservando el título original, y se comporta como una captura animada. Entrada y salida con fundidos de 12 y 30 frames, respectivamente; después el mismo marco vuelve al montaje de imágenes anterior.
- Focos visuales: se retiraron todos los rectángulos azules inferidos; las capturas se presentan limpias con movimiento suave. El borde azul grande que puede verse al seleccionar una capa pertenece a Remotion Studio y no forma parte de la composición.

## FIFA World Cup 2026 recap

- Composición: `WorldCup2026Recap`; salida: `exports/final/world-cup-2026-recap.mp4`.
- Duración: 80 segundos, 1920×1080, 30 FPS, 2.400 fotogramas.
- Datos: los 104 resultados y fechas proceden del `CompetitionSummary-English.pdf` oficial de FIFA, versión 34 del 19-07-2026.
- Estructura: introducción, 12 paneles de grupos, ronda de 32, octavos, cuartos, semifinales, tercer puesto y final.
- B-roll: cuatro clips Full HD 16:9 con derechos comerciales gratuitos de Coverr; se usan como imágenes editoriales genéricas y no se presentan como grabaciones de partidos concretos.
- Música: cama deportiva original generada localmente, sin material protegido ni dependencia de Content ID.
- Banderas: 48 SVG descargados de FlagCDN; nombres de países en inglés.
- Notación: `p` indica el resultado de la tanda de penaltis; `AET`, prórroga.

## Material fuente

- `video_obsidian.mp4`, en la raíz local y tratado como material inmutable.
- Enlace local para Remotion: `public/videos/raw/video_obsidian.mp4`.
- Metadatos: 18:15.05, 1920×1080, 60 FPS, vídeo H.264 y audio AAC estéreo.

## Cortes y tiempos

- Short seleccionado desde `06:48.30` hasta `07:37.30`.
- Duración final: 49 segundos, 30 FPS y 1.470 fotogramas.
- Sin saltos internos; el recorte empieza y termina en límites naturales de frase.

## Títulos, subtítulos y gráficos

- Hook: «Your AI model is not the most important part».
- Subtítulos ingleses integrados con resaltado de la palabra activa.
- Transcripción completa local: `public/subtitles/video_obsidian.full.json`, excluida de Git.
- Subtítulos de la entrega: `public/subtitles/video_obsidian.instagram-short.json`.

## Música y tratamiento

- Diálogo original con multiplicador de volumen `1.08`; sin música.
- Vídeo 16:9 completo en lienzo vertical, fondo desenfocado y push-in del 2,5 %.
- Hook y subtítulos dentro de áreas seguras para Instagram.

## Pendiente

- Revisión humana opcional de `5.6 Sol`, `GPT` y `Claude`.

## Estado

- Composición: `ObsidianInstagramShort`.
- Salida local: `exports/final/video_obsidian_instagram_short.mp4`.
- Verificado: 1080×1920, 30 FPS, 1.470 fotogramas, H.264/AAC, 49.046 segundos, decodificación completa sin errores y sin fotogramas negros detectados.
