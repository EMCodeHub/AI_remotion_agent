# AI Remotion Agent

Estación local de edición de vídeo asistida por IA construida con React, TypeScript y Remotion. Permite entregar material audiovisual a Codex y convertir instrucciones en composiciones reproducibles sin modificar los archivos originales.

## Qué incluye

- Remotion Studio para previsualizar y ajustar ediciones.
- Composiciones base 16:9, 9:16 y 1:1.
- Componentes reutilizables para intros, outros, títulos, rótulos, logos, subtítulos, callouts, clips, imágenes, música y transiciones.
- Inspección local mediante ffprobe y transcripción local mediante Whisper.cpp.
- Render MP4 con vídeo H.264 y audio AAC, compatible con Filmora.
- Primera edición real: `ObsidianInstagramShort`, un Reel vertical de 49 segundos.

## Requisitos e instalación

Requiere Node.js 20 o posterior, npm y Git. FFmpeg, ffprobe y Whisper se gestionan localmente; no es necesario modificar el sistema.

```powershell
npm install
```

## Dónde colocar el material

| Material | Carpeta |
|---|---|
| Vídeos originales | `public/videos/raw/` |
| B-roll | `public/videos/broll/` |
| Música | `public/audio/music/` |
| Locuciones | `public/audio/voiceovers/` |
| Efectos de sonido | `public/audio/sound-effects/` |
| Logos | `public/images/logos/` |
| Fotografías y fondos | `public/images/photos/`, `public/images/backgrounds/` |
| Subtítulos | `public/subtitles/` |
| Fuentes | `public/fonts/` |

Los archivos de `public/videos/raw/` son fuentes inmutables: nunca deben sobrescribirse, renombrarse, recomprimirse ni eliminarse sin una petición explícita.

## Comandos

```powershell
npm run dev                 # Abre Remotion Studio
npm run inspect             # Inspecciona los vídeos originales
npm run typecheck           # Comprueba TypeScript
npm run compositions        # Lista las composiciones
npm run render              # Render 16:9
npm run render:vertical     # Render 9:16
npm run render:square       # Render 1:1
npm run render:test         # Render corto de comprobación
npm run render:obsidian-short
```

Los resultados finales aparecen en `exports/final/`; las comprobaciones y fotogramas de QA aparecen en `exports/previews/`.

## Flujo recomendado

1. Copiar el vídeo original a `public/videos/raw/`.
2. Ejecutar `npm run inspect`.
3. Pedir a Codex que analice el contenido y ejecute una edición.
4. Revisar la composición con `npm run dev`.
5. Ejecutar TypeScript, descubrimiento de composiciones y un render de prueba.
6. Renderizar el MP4 final y registrar las decisiones en `notes/EDITING_NOTES.md`.

## Ejemplos para Codex

> Inspecciona `public/videos/raw/interview.mp4` y crea una edición limpia en 16:9. Añade un título de tres segundos y el logo en la esquina superior derecha.

> Convierte `interview.mp4` en un Reel vertical de 60 segundos con subtítulos integrados.

> Añade un rótulo entre 00:08 y 00:14 con el nombre John Smith y el cargo CEO.

> Usa `music.mp3` como música sutil y reduce su volumen mientras habla la persona.

Consulta [docs/ARQUITECTURA.md](docs/ARQUITECTURA.md) para conocer la estructura técnica, las garantías de seguridad y el proceso de verificación.
