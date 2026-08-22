import {Easing, interpolate, useCurrentFrame} from 'remotion';

export const SmoothTransition: React.FC<React.PropsWithChildren<{durationInFrames: number}>> = ({children, durationInFrames}) => {
  const frame = useCurrentFrame();
  return <div style={{position: 'absolute', inset: 0, opacity: interpolate(frame, [0, 30, durationInFrames - 30, durationInFrames], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}), translate: interpolate(frame, [0, 30], ['0px 12px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)})}}>{children}</div>;
};
