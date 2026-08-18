import {Img,staticFile} from 'remotion';
export const ImageOverlay: React.FC<{src:string; opacity?:number; fit?:'cover'|'contain'}> = ({src,opacity=1,fit='contain'}) => <Img src={staticFile(src)} style={{width:'100%',height:'100%',objectFit:fit,opacity}}/>;
