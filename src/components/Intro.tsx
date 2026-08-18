import {AbsoluteFill} from 'remotion';
import {BRANDING} from '../config/branding';
import {Title} from './Title';
export const Intro: React.FC<{title?: string}> = ({title = BRANDING.name}) => <AbsoluteFill style={{background: `linear-gradient(135deg, ${BRANDING.colors.background}, ${BRANDING.colors.secondary})`, justifyContent: 'center', alignItems: 'center'}}><Title text={title} subtitle="AI-assisted edit" /></AbsoluteFill>;
