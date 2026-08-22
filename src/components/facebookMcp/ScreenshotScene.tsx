import {Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import type {ScreenshotSceneData} from '../../data/facebookMcpTimeline';
import {SmoothTransition} from './SmoothTransition';

export const ScreenshotScene: React.FC<{scene: ScreenshotSceneData; durationInFrames: number; position: number}> = ({scene, durationInFrames, position}) => {
  const frame = useCurrentFrame();
  const extension = [2, 8, 29].includes(scene.index) ? 'png' : 'jpg';
  const file = `${String(scene.index).padStart(2, '0')}.${extension}`;
  return <SmoothTransition durationInFrames={durationInFrames}>
    <div style={{position: 'absolute', inset: 0, backgroundColor: '#F4F2ED', fontFamily: 'Arial, Helvetica, sans-serif', overflow: 'hidden'}}>
      <div style={{position: 'absolute', left: 92, right: 92, top: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#61656C'}}>
        <div style={{fontSize: 24, fontWeight: 700, letterSpacing: 0.4}}>{scene.chapter}</div>
        <div style={{fontSize: 22, fontVariantNumeric: 'tabular-nums'}}>{String(position).padStart(2, '0')} / 42</div>
      </div>
      <div style={{position: 'absolute', left: 92, right: 92, top: 104, bottom: 112, borderRadius: 28, backgroundColor: '#FFFFFF', boxShadow: '0 28px 90px rgba(28,35,48,.13), 0 1px 0 rgba(255,255,255,.9) inset', overflow: 'hidden', scale: interpolate(frame, [0, durationInFrames], [1, scene.fit === 'wide' ? 1.015 : 1.025], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.quad)})}}>
        <Img src={staticFile(`images/facebook-mcp/${file}`)} style={{width: '100%', height: '100%', objectFit: 'contain', display: 'block'}} />
      </div>
      <div style={{position: 'absolute', left: 108, bottom: 43, display: 'flex', alignItems: 'center', gap: 18}}>
        <div style={{width: 42, height: 4, borderRadius: 4, backgroundColor: '#2C6FF6'}} />
        <div style={{fontSize: 30, color: '#23262B', fontWeight: 650, letterSpacing: -0.6}}>{scene.title}</div>
      </div>
    </div>
  </SmoothTransition>;
};
