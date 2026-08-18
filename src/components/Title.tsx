import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {BRANDING} from '../config/branding';

export const Title: React.FC<{text: string; subtitle?: string}> = ({text, subtitle}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const entrance = spring({frame, fps, config: {damping: 18}});
  return <div style={{textAlign: 'center', color: BRANDING.colors.text, opacity: interpolate(frame, [0, 12], [0, 1]), transform: `translateY(${(1-entrance)*30}px)`}}>
    <div style={{fontFamily: BRANDING.fonts.heading, fontSize: 82, fontWeight: BRANDING.title.fontWeight, letterSpacing: BRANDING.title.letterSpacing}}>{text}</div>
    {subtitle ? <div style={{fontFamily: BRANDING.fonts.body, fontSize: 30, marginTop: 18, opacity: 0.8}}>{subtitle}</div> : null}
  </div>;
};
