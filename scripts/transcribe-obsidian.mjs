import {existsSync, mkdirSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
import ffmpegPath from 'ffmpeg-static';
import {
  downloadWhisperModel,
  installWhisperCpp,
  transcribe,
  toCaptions,
} from '@remotion/install-whisper-cpp';

const whisperVersion='1.5.5';
const model='small';
const cacheDir=join(process.cwd(),'.remotion','whisper.cpp');
const audioDir=join(process.cwd(),'.remotion','audio');
const input=join(process.cwd(),'video_obsidian.mp4');
const wav=join(audioDir,'video_obsidian-16khz.wav');
const output=join(process.cwd(),'public','subtitles','video_obsidian.full.json');
const rawOutput=join(process.cwd(),'notes','video_obsidian_transcript.txt');

mkdirSync(join(process.cwd(),'.remotion'),{recursive:true});
mkdirSync(audioDir,{recursive:true});
if(!existsSync(wav)){
  const conversion=spawnSync(ffmpegPath,['-i',input,'-vn','-ac','1','-ar','16000','-c:a','pcm_s16le',wav],{stdio:'inherit'});
  if(conversion.status!==0) process.exit(conversion.status ?? 1);
}

console.log(`Installing Whisper.cpp ${whisperVersion}...`);
await installWhisperCpp({to:cacheDir,version:whisperVersion,printOutput:true});
console.log(`Downloading/checking Whisper model ${model}...`);
await downloadWhisperModel({model,folder:cacheDir,printOutput:true});
console.log('Transcribing...');
const whisperCppOutput=await transcribe({
  model,
  whisperPath:cacheDir,
  whisperCppVersion:whisperVersion,
  inputPath:wav,
  tokenLevelTimestamps:true,
  splitOnWord:true,
  printOutput:true,
});
const {captions}=toCaptions({whisperCppOutput});
writeFileSync(output,JSON.stringify(captions,null,2));
writeFileSync(rawOutput,whisperCppOutput.transcription.map((item)=>`[${item.timestamps.from} --> ${item.timestamps.to}] ${item.text.trim()}`).join('\n'));
console.log(`Language: ${whisperCppOutput.result.language}`);
console.log(`Captions: ${output}`);
console.log(`Transcript: ${rawOutput}`);
