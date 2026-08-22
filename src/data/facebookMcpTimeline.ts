export const FACEBOOK_MCP_VIDEO = {
  id: 'FacebookMcpTutorial',
  fps: 30,
  width: 1920,
  height: 1080,
  audioDurationSeconds: 860.316735,
  durationInFrames: 25810,
  transitionFrames: 30,
} as const;

export type ScreenshotSceneData = {
  index: number;
  startSeconds: number;
  title: string;
  chapter: string;
  fit: 'contain' | 'wide';
};

// The timestamps are deliberately centralized: adjust only startSeconds after
// reviewing the voiceover in Studio. Every scene ends when the next one starts.
export const FACEBOOK_MCP_SCENES: readonly ScreenshotSceneData[] = [
  {index: 1, startSeconds: 169, title: 'El punto de partida', chapter: 'Crear la aplicación', fit: 'contain'},
  {index: 2, startSeconds: 172, title: 'Un nuevo proceso', chapter: 'Crear la aplicación', fit: 'contain'},
  {index: 3, startSeconds: 175, title: 'Casos de uso', chapter: 'Crear la aplicación', fit: 'contain'},
  {index: 4, startSeconds: 178, title: 'Portfolio comercial', chapter: 'Crear la aplicación', fit: 'contain'},
  {index: 5, startSeconds: 182, title: 'Revisar antes de crear', chapter: 'Crear la aplicación', fit: 'contain'},
  {index: 6, startSeconds: 186, title: 'Panel de MedifAds', chapter: 'Crear la aplicación', fit: 'contain'},
  {index: 7, startSeconds: 189, title: 'Permisos de Marketing API', chapter: 'Crear la aplicación', fit: 'contain'},
  {index: 8, startSeconds: 195, title: 'Configuración básica', chapter: 'Crear la aplicación', fit: 'contain'},
  {index: 13, startSeconds: 203, title: 'Configurar el puente OAuth', chapter: 'El intento con Codex', fit: 'contain'},
  {index: 14, startSeconds: 206, title: 'Consentimiento de Facebook', chapter: 'El intento con Codex', fit: 'contain'},
  {index: 9, startSeconds: 209, title: 'Autorización OAuth completada', chapter: 'El intento con Codex', fit: 'contain'},
  {index: 15, startSeconds: 212, title: 'Codex autorizado', chapter: 'El intento con Codex', fit: 'contain'},
  {index: 16, startSeconds: 216, title: 'Conexión técnica conseguida', chapter: 'El intento con Codex', fit: 'contain'},
  {index: 10, startSeconds: 222, title: 'Primer diagnóstico', chapter: 'El intento con Codex', fit: 'contain'},
  {index: 11, startSeconds: 226, title: 'Negocio en revisión', chapter: 'El intento con Codex', fit: 'contain'},
  {index: 12, startSeconds: 231, title: 'Acceso pendiente', chapter: 'El intento con Codex', fit: 'wide'},
  {index: 17, startSeconds: 236, title: 'Más verificaciones', chapter: 'El intento con Codex', fit: 'contain'},
  {index: 18, startSeconds: 240, title: 'MCP todavía desactivado', chapter: 'El intento con Codex', fit: 'contain'},
  {index: 19, startSeconds: 269, title: 'Cambiar de estrategia', chapter: 'Conectar ChatGPT', fit: 'contain'},
  {index: 20, startSeconds: 284, title: 'Modo desarrollador', chapter: 'Conectar ChatGPT', fit: 'contain'},
  {index: 21, startSeconds: 297, title: 'Preparar el conector', chapter: 'Conectar ChatGPT', fit: 'contain'},
  {index: 22, startSeconds: 308, title: 'Servidor oficial de Meta', chapter: 'Conectar ChatGPT', fit: 'contain'},
  {index: 23, startSeconds: 348, title: 'Añadir el conector', chapter: 'Conectar ChatGPT', fit: 'contain'},
  {index: 24, startSeconds: 361, title: 'Autorizar ChatGPT', chapter: 'Conectar ChatGPT', fit: 'contain'},
  {index: 25, startSeconds: 375, title: 'Elegir las páginas', chapter: 'Conectar ChatGPT', fit: 'contain'},
  {index: 26, startSeconds: 428, title: 'Verificación de tarjeta', chapter: 'Rollout y cuentas bloqueadas', fit: 'contain'},
  {index: 27, startSeconds: 431, title: 'Campañas existentes', chapter: 'Rollout y cuentas bloqueadas', fit: 'wide'},
  {index: 28, startSeconds: 433, title: 'Cuenta desactivada', chapter: 'Rollout y cuentas bloqueadas', fit: 'wide'},
  {index: 29, startSeconds: 438, title: 'Comparar las cuentas', chapter: 'Rollout y cuentas bloqueadas', fit: 'contain'},
  {index: 30, startSeconds: 460, title: 'Despliegue gradual', chapter: 'Rollout y cuentas bloqueadas', fit: 'contain'},
  {index: 31, startSeconds: 496, title: 'Servidor MCP para anuncios', chapter: 'Rollout y cuentas bloqueadas', fit: 'contain'},
  {index: 32, startSeconds: 504, title: 'Dónde encontrarlo', chapter: 'Rollout y cuentas bloqueadas', fit: 'contain'},
  {index: 33, startSeconds: 518, title: 'Solicitar soporte', chapter: 'Rollout y cuentas bloqueadas', fit: 'contain'},
  {index: 34, startSeconds: 523, title: 'Una recomendación que no desbloquea MCP', chapter: 'Rollout y cuentas bloqueadas', fit: 'contain'},
  {index: 35, startSeconds: 527, title: 'La respuesta definitiva de Meta', chapter: 'Rollout y cuentas bloqueadas', fit: 'contain'},
  {index: 36, startSeconds: 556, title: 'La cuenta Comodín', chapter: 'Una cuenta compatible', fit: 'contain'},
  {index: 37, startSeconds: 593, title: 'MCP activo, cuenta no consultable', chapter: 'Una cuenta compatible', fit: 'contain'},
  {index: 38, startSeconds: 610, title: 'Validar el método de pago', chapter: 'Una cuenta compatible', fit: 'contain'},
  {index: 39, startSeconds: 621, title: 'Cuenta lista para operar', chapter: 'Una cuenta compatible', fit: 'contain'},
  {index: 40, startSeconds: 641, title: 'Crear la primera campaña', chapter: 'La prueba definitiva', fit: 'contain'},
  {index: 41, startSeconds: 663, title: 'Resultado en Ads Manager', chapter: 'La prueba definitiva', fit: 'contain'},
  {index: 42, startSeconds: 701, title: 'La cadena completa funciona', chapter: 'La prueba definitiva', fit: 'contain'},
] as const;

export const FACEBOOK_MCP_CHAPTERS = [
  {startSeconds: 169, eyebrow: 'Capítulo 1', title: 'Crear la aplicación en Meta'},
  {startSeconds: 203, eyebrow: 'Capítulo 2', title: 'El intento con Codex'},
  {startSeconds: 269, eyebrow: 'Capítulo 3', title: 'Conectar ChatGPT'},
  {startSeconds: 420, eyebrow: 'Capítulo 4', title: 'Rollout y cuentas bloqueadas'},
  {startSeconds: 556, eyebrow: 'Capítulo 5', title: 'Una cuenta compatible'},
  {startSeconds: 641, eyebrow: 'Capítulo 6', title: 'La primera campaña'},
] as const;
