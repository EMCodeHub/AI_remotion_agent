import {createTikTokStyleCaptions,type Caption,type TikTokPage} from '@remotion/captions';
import {useCallback,useEffect,useMemo,useState} from 'react';
import {AbsoluteFill,Easing,interpolate,Sequence,staticFile,useCurrentFrame,useDelayRender,useVideoConfig} from 'remotion';

const SWITCH_CAPTIONS_EVERY_MS=1350;
const HIGHLIGHT='#A78BFA';

const CaptionPage:React.FC<{page:TikTokPage}>=({page})=>{
  const frame=useCurrentFrame();
  const {fps}=useVideoConfig();
  const absoluteTimeMs=page.startMs+(frame/fps)*1000;
  return <AbsoluteFill style={{justifyContent:'flex-end',alignItems:'center',padding:'0 120px 360px 80px'}}>
    <div style={{maxWidth:880,textAlign:'center',fontFamily:'Arial, sans-serif',fontSize:56,fontWeight:800,lineHeight:1.14,letterSpacing:-1.2,color:'white',whiteSpace:'pre-wrap',textShadow:'0 3px 3px rgba(0,0,0,.95), 0 0 18px rgba(0,0,0,.95)',background:'rgba(5,8,18,.72)',border:'1px solid rgba(255,255,255,.12)',borderRadius:22,padding:'18px 24px',scale:interpolate(frame,[0,5],[.97,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.out(Easing.quad)})}}>
      {page.tokens.map((token)=><span key={`${token.fromMs}-${token.text}`} style={{color:token.fromMs<=absoluteTimeMs&&token.toMs>absoluteTimeMs?HIGHLIGHT:'white'}}>{token.text}</span>)}
    </div>
  </AbsoluteFill>;
};

export const ShortFormCaptions:React.FC<{src:string}>=({src})=>{
  const [captions,setCaptions]=useState<Caption[]|null>(null);
  const {delayRender,continueRender,cancelRender}=useDelayRender();
  const [handle]=useState(()=>delayRender('Loading short captions'));
  const load=useCallback(async()=>{try{const response=await fetch(staticFile(src));if(!response.ok)throw new Error(`Caption fetch failed: ${response.status}`);setCaptions(await response.json());continueRender(handle);}catch(error){cancelRender(error instanceof Error?error:new Error(String(error)));}},[cancelRender,continueRender,handle,src]);
  useEffect(()=>{load();},[load]);
  const pages=useMemo(()=>captions?createTikTokStyleCaptions({captions,combineTokensWithinMilliseconds:SWITCH_CAPTIONS_EVERY_MS}).pages:[],[captions]);
  const {fps}=useVideoConfig();
  return <AbsoluteFill>{pages.map((page,index)=>{const next=pages[index+1]??null;const from=Math.round(page.startMs/1000*fps);const end=Math.min(next?Math.round(next.startMs/1000*fps):Infinity,from+Math.round(SWITCH_CAPTIONS_EVERY_MS/1000*fps));return end>from?<Sequence key={`${page.startMs}-${index}`} from={from} durationInFrames={end-from}><CaptionPage page={page}/></Sequence>:null;})}</AbsoluteFill>;
};
