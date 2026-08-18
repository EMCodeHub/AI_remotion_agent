import {OffthreadVideo, staticFile} from 'remotion';
export const VideoClip: React.FC<{src:string; startFrom?:number; endAt?:number; muted?:boolean; fit?:'cover'|'contain'}> = ({src,startFrom,endAt,muted=false,fit='cover'}) => <OffthreadVideo src={staticFile(src)} startFrom={startFrom} endAt={endAt} muted={muted} style={{width:'100%',height:'100%',objectFit:fit}}/>;
