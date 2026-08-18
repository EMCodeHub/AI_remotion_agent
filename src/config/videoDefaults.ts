export const VIDEO_DEFAULTS = {
  fps: 30,
  durationInSeconds: 10,
  main: {width: 1920, height: 1080},
  vertical: {width: 1080, height: 1920},
  square: {width: 1080, height: 1080},
} as const;

export const secondsToFrames = (seconds: number, fps = VIDEO_DEFAULTS.fps) =>
  Math.round(seconds * fps);
