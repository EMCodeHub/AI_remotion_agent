import {AbsoluteFill, Sequence, useVideoConfig} from 'remotion';
import {BRANDING} from '../config/branding';
import {Intro} from '../components/Intro';
import {Logo} from '../components/Logo';
import {Outro} from '../components/Outro';

export type EditProps = {title:string; subtitle:string; introFrames:number; outroFrames:number};
export const MainVideo: React.FC<EditProps> = ({title,subtitle,introFrames,outroFrames}) => {
  const {durationInFrames}=useVideoConfig();
  const safeIntro=Math.min(introFrames,durationInFrames);
  const safeOutro=Math.min(outroFrames,Math.max(0,durationInFrames-safeIntro));
  return <AbsoluteFill style={{backgroundColor:BRANDING.colors.background}}>
    <Sequence durationInFrames={safeIntro}><Intro title={title}/></Sequence>
    <Sequence from={safeIntro} durationInFrames={Math.max(1,durationInFrames-safeIntro-safeOutro)}><AbsoluteFill style={{justifyContent:'center',alignItems:'center',color:BRANDING.colors.text,fontFamily:BRANDING.fonts.body,fontSize:36}}>{subtitle}<Logo/></AbsoluteFill></Sequence>
    {safeOutro>0 ? <Sequence from={durationInFrames-safeOutro} durationInFrames={safeOutro}><Outro/></Sequence> : null}
  </AbsoluteFill>;
};
