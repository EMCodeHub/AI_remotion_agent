import {spring,useCurrentFrame,useVideoConfig} from 'remotion';
import {BRANDING} from '../config/branding';
export const Callout: React.FC<{text:string; x?:number; y?:number}> = ({text,x=50,y=50}) => {const frame=useCurrentFrame();const {fps}=useVideoConfig();const scale=spring({frame,fps,config:{damping:14}});return <div style={{position:'absolute',left:`${x}%`,top:`${y}%`,transform:`translate(-50%,-50%) scale(${scale})`,padding:'14px 22px',borderRadius:12,background:BRANDING.colors.primary,color:'white',fontFamily:BRANDING.fonts.body,fontSize:28,fontWeight:700}}>{text}</div>};
