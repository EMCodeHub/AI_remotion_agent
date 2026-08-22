import {Audio} from '@remotion/media';
import {AbsoluteFill, Easing, Img, interpolate, Sequence, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {Video} from '@remotion/media';
import {ChapterCard} from '../components/facebookMcp/ChapterCard';
import {ScreenshotScene} from '../components/facebookMcp/ScreenshotScene';
import {AppleCaptions} from '../components/facebookMcp/AppleCaptions';
import {FACEBOOK_MCP_CHAPTERS, FACEBOOK_MCP_SCENES, FACEBOOK_MCP_VIDEO} from '../data/facebookMcpTimeline';

const OpeningPreview: React.FC<{durationInFrames: number; file: string; label: string}> = ({durationInFrames, file, label}) => {
  const frame = useCurrentFrame();
  return <div style={{position: 'absolute', right: 94, top: 166, width: 890, height: 650, borderRadius: 30, backgroundColor: '#171A20', border: '1px solid rgba(255,255,255,.16)', boxShadow: '0 44px 120px rgba(0,0,0,.52)', overflow: 'hidden', opacity: interpolate(frame, [0, 18, durationInFrames - 18, durationInFrames], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}), scale: interpolate(frame, [0, durationInFrames], [0.985, 1.02], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
    <Img src={staticFile(`images/facebook-mcp/${file}`)} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
    <div style={{position: 'absolute', left: 26, bottom: 24, borderRadius: 999, padding: '12px 20px', backgroundColor: 'rgba(10,12,16,.82)', fontSize: 22, fontWeight: 700}}>{label}</div>
  </div>;
};

const Opening: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: '#0A0C10', color: '#F8F7F3', fontFamily: 'Arial, Helvetica, sans-serif', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
    <div style={{position: 'absolute', width: 820, height: 820, borderRadius: 999, background: 'radial-gradient(circle, rgba(44,111,246,.18) 0%, rgba(44,111,246,0) 68%)', scale: interpolate(frame, [0, 4 * fps], [0.85, 1.08], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}} />
    <div style={{position: 'absolute', left: 110, width: 720, opacity: interpolate(frame, [0, 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}), translate: interpolate(frame, [0, 28], ['0px 34px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)})}}>
      <div style={{fontSize: 30, color: '#75A2FF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 3, marginBottom: 28}}>Tutorial · Facebook Ads MCP</div>
      <div style={{fontSize: 88, lineHeight: 0.98, letterSpacing: -5, fontWeight: 720}}>De Codex<br />a ChatGPT.</div>
      <div style={{fontSize: 34, color: '#A9ADB7', lineHeight: 1.35, marginTop: 38}}>Conexión, permisos, rollout y una campaña creada hablando.</div>
    </div>
    {[
      {from: 15 * fps, duration: 20 * fps, file: '07.jpg', label: 'Nuevo agente · Ads MCP'},
      {from: 33 * fps, duration: 25 * fps, file: '16.jpg', label: 'Conexión técnica con Meta'},
      {from: 56 * fps, duration: 36 * fps, file: '18.jpg', label: 'MCP aún no habilitado'},
      {from: 90 * fps, duration: 32 * fps, file: '19.jpg', label: 'Cambio de enfoque'},
      {from: 120 * fps, duration: 34 * fps, file: '22.jpg', label: 'MCP oficial en ChatGPT'},
      {from: 152 * fps, duration: 17 * fps, file: '01.jpg', label: 'El planteamiento original'},
    ].map((preview) => <Sequence key={preview.file} from={preview.from} durationInFrames={preview.duration} layout="none">
      <OpeningPreview durationInFrames={preview.duration} file={preview.file} label={preview.label} />
    </Sequence>)}
    <div style={{position: 'absolute', left: 110, right: 110, bottom: 68, height: 3, borderRadius: 3, backgroundColor: 'rgba(255,255,255,.12)', overflow: 'hidden'}}><div style={{height: '100%', width: `${interpolate(frame, [0, 130 * fps], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}%`, backgroundColor: '#2C6FF6'}} /></div>
    <Sequence from={0} durationInFrames={450} layout="none" name="Obsidian Brain intro (silent)">
      <div style={{position: 'absolute', right: 94, top: 166, width: 890, height: 650, borderRadius: 30, backgroundColor: '#171A20', border: '1px solid rgba(255,255,255,.16)', boxShadow: '0 44px 120px rgba(0,0,0,.52)', overflow: 'hidden', opacity: interpolate(frame, [0, 12, 420, 450], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}), scale: interpolate(frame, [0, 450], [0.985, 1.01], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
        <Video
          src={staticFile('videos/broll/facebook-mcp-brain-intro.mp4')}
          muted
          durationInFrames={450}
          style={{width: '100%', height: '100%', objectFit: 'contain'}}
        />
        <div style={{position: 'absolute', left: 26, bottom: 24, borderRadius: 999, padding: '12px 20px', backgroundColor: 'rgba(10,12,16,.82)', fontSize: 22, fontWeight: 700}}>MEDIF Brain · Obsidian</div>
      </div>
    </Sequence>
  </AbsoluteFill>;
};

const ClosingMessage: React.FC<{durationInFrames: number; eyebrow: string; title: React.ReactNode; body: string}> = ({durationInFrames, eyebrow, title, body}) => {
  const frame = useCurrentFrame();
  return <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: interpolate(frame, [0, 18, durationInFrames - 18, durationInFrames], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}), translate: interpolate(frame, [0, 24], ['0px 24px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)})}}>
    <div style={{width: 1430}}>
      <div style={{fontSize: 28, fontWeight: 700, color: '#2C6FF6', textTransform: 'uppercase', letterSpacing: 2.8, marginBottom: 28}}>{eyebrow}</div>
      <div style={{fontSize: 92, lineHeight: 1.03, letterSpacing: -4.6, fontWeight: 720}}>{title}</div>
      <div style={{fontSize: 36, color: '#61656C', lineHeight: 1.4, maxWidth: 1220, marginTop: 36}}>{body}</div>
    </div>
  </div>;
};

const Closing: React.FC = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: '#F4F2ED', color: '#121419', fontFamily: 'Arial, Helvetica, sans-serif', overflow: 'hidden'}}>
    <div style={{position: 'absolute', right: -180, top: -240, width: 920, height: 920, borderRadius: 999, background: 'radial-gradient(circle, rgba(44,111,246,.13) 0%, rgba(44,111,246,0) 69%)'}} />
    <Sequence from={0} durationInFrames={47 * fps} layout="none"><ClosingMessage durationInFrames={47 * fps} eyebrow="Conclusión" title={<>La integración funciona.<br />El rollout marca el ritmo.</>} body="ChatGPT puede consultar activos y ejecutar acciones reales mediante el MCP oficial de Meta." /></Sequence>
    <Sequence from={45 * fps} durationInFrames={50 * fps} layout="none"><ClosingMessage durationInFrames={50 * fps} eyebrow="La limitación" title={<>Cada cuenta tiene<br />su propio estado.</>} body="Si una cuenta no responde, comprueba primero si Ads MCP está realmente habilitado." /></Sequence>
    <Sequence from={93 * fps} durationInFrames={44 * fps} layout="none"><ClosingMessage durationInFrames={44 * fps} eyebrow="Antes de publicar" title={<>La IA ejecuta.<br />Tú decides.</>} body="Revisa presupuesto, segmentación, permisos y creatividades antes de activar cualquier campaña." /></Sequence>
  </AbsoluteFill>;
};

export const TutorialVideo: React.FC = () => {
  const fps = FACEBOOK_MCP_VIDEO.fps;
  const closingStart = Math.round(724 * fps);
  return <AbsoluteFill style={{backgroundColor: '#F4F2ED'}}>
    <Audio src={staticFile('audio/voiceovers/facebook-mcp.mp3')} />
    <Sequence from={0} durationInFrames={Math.round(FACEBOOK_MCP_SCENES[0].startSeconds * fps)} name="Opening"><Opening /></Sequence>
    {FACEBOOK_MCP_SCENES.map((scene, index) => {
      const transition = FACEBOOK_MCP_VIDEO.transitionFrames;
      const from = Math.max(0, Math.round(scene.startSeconds * fps) - (index === 0 ? 0 : transition));
      const next = FACEBOOK_MCP_SCENES[index + 1];
      const until = Math.min(FACEBOOK_MCP_VIDEO.durationInFrames, next ? Math.round(next.startSeconds * fps) + transition : closingStart + transition);
      return <Sequence key={scene.index} from={from} durationInFrames={until - from} name={`Screenshot ${scene.index}`}><ScreenshotScene scene={scene} durationInFrames={until - from} position={index + 1} /></Sequence>;
    })}
    {FACEBOOK_MCP_CHAPTERS.map((chapter) => <Sequence key={chapter.title} from={Math.round(chapter.startSeconds * fps)} durationInFrames={78} name={chapter.title}><ChapterCard eyebrow={chapter.eyebrow} title={chapter.title} /></Sequence>)}
    <Sequence from={closingStart} durationInFrames={FACEBOOK_MCP_VIDEO.durationInFrames - closingStart} name="Conclusion"><Closing /></Sequence>
    <AppleCaptions />
  </AbsoluteFill>;
};

export const FacebookMcpTutorial = TutorialVideo;
