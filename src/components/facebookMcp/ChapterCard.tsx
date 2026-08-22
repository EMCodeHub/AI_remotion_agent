import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

export const ChapterCard: React.FC<{eyebrow: string; title: string}> = ({eyebrow, title}) => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{backgroundColor: '#F4F2ED', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, Helvetica, sans-serif', opacity: interpolate(frame, [0, 12, 62, 78], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
    <div style={{width: 1320, translate: interpolate(frame, [0, 24], ['0px 28px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)})}}>
      <div style={{fontSize: 30, fontWeight: 700, color: '#2C6FF6', letterSpacing: 2.4, textTransform: 'uppercase', marginBottom: 24}}>{eyebrow}</div>
      <div style={{fontSize: 92, lineHeight: 1.02, letterSpacing: -4.5, fontWeight: 700, color: '#121419'}}>{title}</div>
    </div>
  </AbsoluteFill>;
};
