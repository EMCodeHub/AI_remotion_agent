import React from 'react';
import {AbsoluteFill,Easing,Img,Sequence,interpolate,staticFile,useCurrentFrame} from 'remotion';
import {Audio,Video} from '@remotion/media';
import {allMatches,flagCodes,groupMatches,knockoutMatches,Match} from '../data/worldCup2026';

export const WORLD_CUP_RECAP={fps:30,durationInFrames:2400,width:1920,height:1080};
const C={navy:'#071421',blue:'#0b6cff',cyan:'#00d7ff',lime:'#b9ff2c',white:'#f7fbff',muted:'#9fb2c4'};
const clips=['world-cup-stadium.mp4','world-cup-goalkeeper.mp4','world-cup-match.mp4','world-cup-fans.mp4'];

const Flag=({team}: {team:string})=><Img src={staticFile(`images/flags/${flagCodes[team]}.svg`)} style={{width:44,height:30,objectFit:'cover',borderRadius:3,boxShadow:'0 2px 8px #0008'}}/>;
const Team=({name,align='left'}:{name:string;align?:'left'|'right'})=><div style={{display:'flex',alignItems:'center',gap:12,justifyContent:align==='right'?'flex-end':'flex-start',minWidth:0}}>{align==='left'&&<Flag team={name}/>}<span style={{whiteSpace:'nowrap',fontSize:name.length>19?23:undefined}}>{name}</span>{align==='right'&&<Flag team={name}/>}</div>;

const MatchRow=({match,compact=false}:{match:Match;compact?:boolean})=><div style={{display:'grid',gridTemplateColumns:compact?'72px 1fr 138px 1fr':'90px 1fr 180px 1fr',alignItems:'center',gap:compact?12:18,padding:compact?'9px 16px':'17px 24px',minHeight:compact?68:undefined,background:'#0d2236e8',border:'1px solid #ffffff18',borderRadius:12,fontSize:compact?26:31,fontWeight:700}}>
  <span style={{color:C.muted,fontSize:21}}>{match.date}</span><Team name={match.home} align="right"/><strong style={{textAlign:'center',fontSize:compact?28:34,color:C.lime,whiteSpace:'nowrap'}}>{match.score}</strong><Team name={match.away}/>
</div>;

const Background=({clipIndex=0}:{clipIndex?:number})=><AbsoluteFill>
  <Video src={staticFile(`videos/broll/${clips[clipIndex%clips.length]}`)} muted loop objectFit="cover" style={{width:'100%',height:'100%',filter:'saturate(.75) contrast(1.12) brightness(.48)',scale:1.03}}/>
  <AbsoluteFill style={{background:'linear-gradient(100deg,#06111df2 0%,#06111dbd 52%,#06111d70 100%)'}}/>
  <AbsoluteFill style={{backgroundImage:'linear-gradient(#ffffff08 1px,transparent 1px),linear-gradient(90deg,#ffffff08 1px,transparent 1px)',backgroundSize:'64px 64px'}}/>
</AbsoluteFill>;

const Header=({eyebrow,title,count}:{eyebrow:string;title:string;count:string})=><div style={{position:'absolute',left:80,right:80,top:58,display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>
  <div><div style={{color:C.cyan,fontSize:24,fontWeight:800,letterSpacing:5,textTransform:'uppercase'}}>{eyebrow}</div><div style={{fontSize:72,fontWeight:950,letterSpacing:-3}}>{title}</div></div>
  <div style={{textAlign:'right'}}><div style={{fontSize:48,fontWeight:950,color:C.lime}}>{count}</div><div style={{fontSize:20,color:C.muted,letterSpacing:3}}>MATCHES</div></div>
</div>;

const Intro=()=>{const f=useCurrentFrame();return <AbsoluteFill style={{color:C.white,fontFamily:'Arial, sans-serif'}}><Background clipIndex={0}/><div style={{position:'absolute',left:100,bottom:130,width:1150,opacity:interpolate(f,[0,18],[0,1],{extrapolateRight:'clamp'}),translate:`0 ${interpolate(f,[0,22],[50,0],{extrapolateRight:'clamp',easing:Easing.bezier(.16,1,.3,1)})}px`}}><div style={{fontSize:27,color:C.cyan,fontWeight:900,letterSpacing:8}}>THE COMPLETE TOURNAMENT RECAP</div><div style={{fontSize:138,lineHeight:.9,fontWeight:950,letterSpacing:-8,marginTop:20}}>WORLD CUP<br/><span style={{color:C.lime}}>2026</span></div><div style={{fontSize:34,marginTop:34,color:'#dbe7f2'}}>11 June — 19 July · 104 matches · 16 host cities</div></div><div style={{position:'absolute',right:90,top:70,fontWeight:900,fontSize:24}}>FINAL EDITION</div></AbsoluteFill>};

const GroupScene=({groupIndex}:{groupIndex:number})=>{const matches=groupMatches.slice(groupIndex*6,groupIndex*6+6);return <AbsoluteFill style={{color:C.white,fontFamily:'Arial, sans-serif'}}><Background clipIndex={groupIndex}/><Header eyebrow="Group stage" title={`GROUP ${String.fromCharCode(65+groupIndex)}`} count={`${groupIndex*6+1}–${groupIndex*6+6}`}/><div style={{position:'absolute',left:80,right:80,top:235,display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>{matches.map(m=><MatchRow key={m.id} match={m} compact/>)}</div><div style={{position:'absolute',left:80,bottom:44,color:C.muted,fontSize:19}}>Official FIFA results · Full-time score shown</div></AbsoluteFill>};

const KnockoutScene=({stage,title,clipIndex}:{stage:string;title:string;clipIndex:number})=>{const matches=knockoutMatches.filter(m=>m.stage===stage);return <AbsoluteFill style={{color:C.white,fontFamily:'Arial, sans-serif'}}><Background clipIndex={clipIndex}/><Header eyebrow="Knockout stage" title={title} count={`${matches.length}`}/><div style={{position:'absolute',left:80,right:80,top:235,display:'grid',gridTemplateColumns:matches.length>4?'1fr 1fr':'1fr',gap:matches.length>4?9:14}}>{matches.map(m=><MatchRow key={m.id} match={m} compact={matches.length>4}/>)}</div></AbsoluteFill>};

const FinalScene=()=>{const f=useCurrentFrame();return <AbsoluteFill style={{color:C.white,fontFamily:'Arial, sans-serif'}}><Background clipIndex={3}/><div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}><div style={{fontSize:27,letterSpacing:8,color:C.cyan,fontWeight:900}}>19 JULY · NEW YORK NEW JERSEY</div><div style={{fontSize:64,fontWeight:900,marginTop:22}}>WORLD CHAMPIONS</div><div style={{display:'flex',alignItems:'center',gap:28,marginTop:28,scale:interpolate(f,[8,34],[.82,1],{extrapolateRight:'clamp',easing:Easing.bezier(.16,1,.3,1)})}}><Flag team="Spain"/><span style={{fontSize:128,fontWeight:950,letterSpacing:-7,color:C.lime}}>SPAIN</span></div><div style={{fontSize:50,fontWeight:900,marginTop:20}}>SPAIN 1–0 ARGENTINA <span style={{color:C.muted,fontSize:28}}>AET</span></div><div style={{fontSize:25,color:C.muted,marginTop:22}}>A 104-match journey. One champion.</div></div></AbsoluteFill>};

export const WorldCup2026Recap:React.FC=()=> <AbsoluteFill style={{backgroundColor:C.navy}}>
  <Audio src={staticFile('audio/music/world-cup-sports-bed.wav')} loop volume={(f)=>interpolate(f,[0,30,2280,2399],[0,.24,.24,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}/>
  <Sequence durationInFrames={120}><Intro/></Sequence>
  {Array.from({length:12},(_,i)=><Sequence key={i} from={120+i*75} durationInFrames={75}><GroupScene groupIndex={i}/></Sequence>)}
  <Sequence from={1020} durationInFrames={360}><KnockoutScene stage="Round of 32" title="ROUND OF 32" clipIndex={1}/></Sequence>
  <Sequence from={1380} durationInFrames={240}><KnockoutScene stage="Round of 16" title="ROUND OF 16" clipIndex={2}/></Sequence>
  <Sequence from={1620} durationInFrames={180}><KnockoutScene stage="Quarter-finals" title="QUARTER-FINALS" clipIndex={0}/></Sequence>
  <Sequence from={1800} durationInFrames={150}><KnockoutScene stage="Semi-finals" title="SEMI-FINALS" clipIndex={1}/></Sequence>
  <Sequence from={1950} durationInFrames={120}><KnockoutScene stage="Third place" title="THIRD PLACE" clipIndex={2}/></Sequence>
  <Sequence from={2070} durationInFrames={330}><FinalScene/></Sequence>
</AbsoluteFill>;

if(allMatches.length!==104) throw new Error(`Expected 104 matches, got ${allMatches.length}`);
