import {spawnSync} from 'node:child_process';
import {readdirSync, statSync} from 'node:fs';
import {join, relative} from 'node:path';
import ffprobeStatic from 'ffprobe-static';

const root=join(process.cwd(),'public','videos','raw');
const mediaExtensions=new Set(['.mp4','.mov','.mkv','.avi','.webm','.m4v','.mts','.m2ts']);
const files=readdirSync(root,{recursive:true}).map((p)=>join(root,p)).filter((p)=>statSync(p).isFile() && mediaExtensions.has(p.slice(p.lastIndexOf('.')).toLowerCase()));
if(files.length===0){console.log('No source media found in public/videos/raw/.');process.exit(0);}
for(const file of files){
  const run=spawnSync(ffprobeStatic.path,['-v','error','-show_entries','format=duration:stream=index,codec_type,codec_name,width,height,r_frame_rate','-of','json',file],{encoding:'utf8'});
  if(run.status!==0){console.error(`\n${relative(root,file)}: unable to inspect (${run.stderr.trim()})`);continue;}
  const data=JSON.parse(run.stdout); const video=data.streams.find((s)=>s.codec_type==='video'); const audio=data.streams.find((s)=>s.codec_type==='audio');
  console.log(`\n${relative(root,file)}`);
  console.log(`  Duration: ${Number(data.format?.duration ?? 0).toFixed(3)} s`);
  console.log(`  Resolution: ${video ? `${video.width}x${video.height}` : 'none'}`);
  console.log(`  Frame rate: ${video?.r_frame_rate ?? 'n/a'}`);
  console.log(`  Video codec: ${video?.codec_name ?? 'none'}`);
  console.log(`  Audio codec: ${audio?.codec_name ?? 'none'}`);
  console.log(`  Has audio: ${audio ? 'yes' : 'no'}`);
}
