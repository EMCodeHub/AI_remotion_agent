import {AbsoluteFill} from 'remotion';
import {BRANDING} from '../config/branding';
export const Outro: React.FC<{message?: string}> = ({message='Thanks for watching'}) => <AbsoluteFill style={{backgroundColor: BRANDING.colors.background, color: BRANDING.colors.text, justifyContent:'center', alignItems:'center', fontFamily:BRANDING.fonts.heading, fontSize:64, fontWeight:700}}>{message}</AbsoluteFill>;
