import {Audio, staticFile} from 'remotion';
export const BackgroundMusic: React.FC<{src:string; volume?:number; loop?:boolean}> = ({src,volume=.12,loop=true}) => <Audio src={staticFile(src)} volume={volume} loop={loop}/>;
