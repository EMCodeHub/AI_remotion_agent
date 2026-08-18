import {Video} from '@remotion/media';
import {AbsoluteFill,Easing,interpolate,staticFile,useCurrentFrame,useVideoConfig} from 'remotion';
import {ShortFormCaptions} from '../components/ShortFormCaptions';

export const OBSIDIAN_SHORT={sourceStartSeconds:408.3,sourceEndSeconds:457.3,durationInFrames:1470} as const;

export const ObsidianInstagramShort:React.FC=()=>{
  const frame=useCurrentFrame();
  const {fps}=useVideoConfig();
  const trimBefore=Math.round(OBSIDIAN_SHORT.sourceStartSeconds*fps);
  return <AbsoluteFill style={{backgroundColor:'#070911',overflow:'hidden'}}>
    <Video src={staticFile('videos/raw/video_obsidian.mp4')} trimBefore={trimBefore} muted objectFit="cover" style={{width:'100%',height:'100%',filter:'blur(34px) brightness(.28) saturate(1.25)',scale:1.16}}/>
    <AbsoluteFill style={{background:'linear-gradient(180deg,rgba(7,9,17,.35) 0%,rgba(7,9,17,.05) 38%,rgba(7,9,17,.55) 62%,rgba(7,9,17,.94) 100%)'}}/>
    <div style={{position:'absolute',top:300,left:0,width:1080,height:608,borderTop:'1px solid rgba(255,255,255,.18)',borderBottom:'1px solid rgba(255,255,255,.18)',boxShadow:'0 28px 70px rgba(0,0,0,.5)',overflow:'hidden'}}>
      <Video src={staticFile('videos/raw/video_obsidian.mp4')} trimBefore={trimBefore} volume={1.08} objectFit="contain" style={{width:'100%',height:'100%',scale:interpolate(frame,[0,OBSIDIAN_SHORT.durationInFrames],[1,1.025],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.inOut(Easing.quad)})}}/>
    </div>
    <div style={{position:'absolute',top:82,left:72,right:120,color:'white',fontFamily:'Arial, sans-serif',fontWeight:900,fontSize:62,lineHeight:1.02,letterSpacing:-2,textShadow:'0 4px 24px rgba(0,0,0,.85)',opacity:interpolate(frame,[0,7,72,88],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'}),translate:`0 ${interpolate(frame,[0,12],[22,0],{extrapolateRight:'clamp'})}px`}}>
      Your AI model is not<br/><span style={{color:'#A78BFA'}}>the most important part.</span>
    </div>
    <div style={{position:'absolute',left:72,bottom:235,width:90,height:5,borderRadius:4,background:'#A78BFA',opacity:.9}}/>
    <ShortFormCaptions src="subtitles/video_obsidian.instagram-short.json"/>
  </AbsoluteFill>;
};
