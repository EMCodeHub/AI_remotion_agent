# Recuperación de FacebookMcpTutorial

## Contenido necesario

La copia recuperable debe conservar:

- `src/Root.tsx`, `src/index.ts`, la composición, componentes y timeline de Facebook MCP.
- `package.json`, `package-lock.json`, `tsconfig.json`, `AGENTS.md` y `README.md`.
- Scripts de transcripción, normalización de captions y render.
- La skill `.codex/skills/tutorial-audio-screenshots/`.
- Material original de `video mcp facebook/`: narración, texto, 42 screenshots e `intro.flv`.
- Fuente completa `obsidian brain-use as intro.mp4`, guardada en `raw-sources/` dentro de la copia.
- Copias de trabajo consumidas por Remotion: audio, 42 imágenes normalizadas, subtítulos e intros MP4.
- `notes/EDITING_NOTES.md` y la transcripción con timestamps.

Los archivos pueden mostrar datos de cuentas y deben permanecer locales, fuera de Git y de servicios públicos.

## Restauración

1. Copia el contenido de la carpeta recuperable a un proyecto vacío conservando rutas relativas.
2. La fuente `raw-sources/obsidian brain-use as intro.mp4` es el original externo; la composición usa directamente `public/videos/broll/facebook-mcp-brain-intro.mp4`.
3. Ejecuta `npm install`.
4. Comprueba con `npm run typecheck` y `npm run compositions`.
5. Abre `npm run dev` y selecciona `FacebookMcpTutorial`.
6. Para regenerar el MP4 ejecuta `npm run render:facebook-mcp`.

La composición esperada es 1920×1080, 30 FPS y 25.810 frames.
