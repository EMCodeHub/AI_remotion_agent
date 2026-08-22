---
name: tutorial-audio-screenshots
description: "Prepara y edita tutoriales Remotion guiados por una narración y una secuencia de screenshots. Úsala cuando el audio marque el ritmo y las capturas deban coincidir semánticamente con lo explicado; incluye subtítulos, intros, transiciones, QA y render bajo solicitud."
---

# Tutorial con audio y capturas

Construye un tutorial legible y sincronizado en el proyecto Remotion de Agente 6. Trata el audio como reloj maestro y las capturas como evidencia visual, no como una presentación ordenada solo por nombre de archivo.

## Invariantes

- Inspecciona primero todos los medios y conserva intactos los originales.
- Mantén audio, screenshots, transcripciones y renders fuera de Git; no expongas datos visibles en capturas.
- Usa una composición específica, timeline centralizado y componentes reutilizables.
- Sincroniza cada cambio visual con el significado de la frase activa. Reordena las capturas cuando su numeración no represente el flujo narrativo.
- Deriva los subtítulos de timestamps reales del audio. Corrige solo terminología reconocida erróneamente, sin alterar tiempos ni sentido.
- No renderices el vídeo completo hasta que el usuario lo solicite. Las previsualizaciones y fotogramas aislados de QA no equivalen al render final.
- Registra fuentes, tiempos, decisiones, QA y estado de render en `notes/EDITING_NOTES.md`.

## Enrutamiento

- Para preparar materiales, construir la composición o ajustar sincronía, lee [references/workflow.md](references/workflow.md).
- Para inspeccionar transiciones, contradicciones, subtítulos o la entrega final, lee [references/qa-checklist.md](references/qa-checklist.md).

Aplica también las skills oficiales de Remotion que correspondan: multimedia para inspección y recortes, captions para subtítulos, markup para composición, Studio para previsualización y render solo al exportar.
