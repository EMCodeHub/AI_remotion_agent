# Estación de edición de vídeo asistida por IA

Este repositorio es un entorno local de Remotion. Antes de editar, inspecciona el material y expresa los cambios mediante componentes y composiciones reutilizables de React/TypeScript.

## Seguridad obligatoria

- `public/videos/raw/` contiene material original inmutable. Nunca sobrescribas, renombres, recomprimas, muevas ni elimines esos archivos salvo petición explícita.
- Guarda el material generado exclusivamente en `exports/` o en otro directorio de salida aprobado.
- Conserva composiciones, componentes, notas y ediciones existentes salvo que se solicite reemplazarlos.
- No incluyas en Git vídeos originales, audios pesados, transcripciones completas, cachés ni renders.

## Flujo de edición

1. Lee `README.md` y `notes/EDITING_NOTES.md`.
2. Ejecuta `npm run inspect` y revisa los metadatos.
3. Convierte peticiones de edición en props, secuencias y componentes reutilizables.
4. Prioriza `src/components/`, la configuración centralizada y una composición específica por entrega.
5. Registra fuentes, cortes, tiempos, decisiones y tareas pendientes en `notes/EDITING_NOTES.md`.
6. Ejecuta `npm run typecheck`, `npm run compositions` y un render de prueba antes de finalizar.
7. Genera MP4 H.264/AAC compatibles con Filmora en `exports/final/`.

Usa fotogramas internamente, pero documenta tiempos humanos como `HH:MM:SS` o segundos. Ante cambios destructivos o creativamente ambiguos, solicita confirmación; en los demás casos realiza una edición conservadora y reversible.
