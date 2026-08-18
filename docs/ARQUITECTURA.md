# Arquitectura de AI Remotion Agent

## Objetivo

Convertir instrucciones de edición en código versionable y reproducible. Los vídeos originales son entradas inmutables; Remotion describe la línea de tiempo y `exports/` contiene resultados generados.

## Capas

- `public/`: medios disponibles para Remotion.
- `src/compositions/`: líneas de tiempo y entregas concretas.
- `src/components/`: elementos reutilizables.
- `src/config/`: identidad de marca y valores predeterminados.
- `src/transitions/` y `src/effects/`: movimiento y tratamiento visual.
- `scripts/`: inspección, transcripción, subtítulos y render.
- `notes/`: decisiones persistentes.
- `exports/`: renders y previsualizaciones, excluidos de Git.

## Composiciones

| ID | Formato | Uso |
|---|---:|---|
| `MainVideo` | 1920×1080, 30 FPS | Vídeo horizontal |
| `SocialVertical` | 1080×1920, 30 FPS | Contenido vertical genérico |
| `SocialSquare` | 1080×1080, 30 FPS | Publicación cuadrada |
| `ObsidianInstagramShort` | 1080×1920, 30 FPS | Reel real de 49 segundos |

## Subtítulos

La transcripción local usa `@remotion/install-whisper-cpp`. Los datos de entrega siguen el tipo `Caption` de `@remotion/captions` y se agrupan en páginas breves con resaltado word-level. Las transcripciones completas permanecen fuera de Git.

## Render y verificación

`scripts/render.mjs` solicita H.264, AAC y MP4 compatibles con Filmora. La comprobación mínima incluye inspección, TypeScript, descubrimiento de composiciones, fotogramas de QA, render, ffprobe, decodificación completa y comparación del hash original cuando corresponda.

## Política Git

Se versionan código, configuración, documentación y datos ligeros necesarios para reproducir ediciones. Se excluyen vídeos originales, cachés, modelos Whisper, transcripciones completas y renders.
