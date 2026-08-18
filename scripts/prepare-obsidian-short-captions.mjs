import {readFileSync,writeFileSync} from 'node:fs';

const sourceStartMs=408300;
const sourceEndMs=457300;
const input='public/subtitles/video_obsidian.full.json';
const output='public/subtitles/video_obsidian.instagram-short.json';
const corrections=new Map([
  [' Faber',' GPT'],
  [' Cloud,',' Claude,'],
  [' obsidian',' Obsidian'],
]);

const captions=JSON.parse(readFileSync(input,'utf8'))
  .filter((caption)=>caption.endMs>sourceStartMs&&caption.startMs<sourceEndMs)
  .map((caption)=>({
    ...caption,
    text:corrections.get(caption.text) ?? caption.text,
    startMs:Math.max(0,caption.startMs-sourceStartMs),
    endMs:Math.min(sourceEndMs-sourceStartMs,caption.endMs-sourceStartMs),
    timestampMs:caption.timestampMs===null?null:Math.max(0,caption.timestampMs-sourceStartMs),
  }));

writeFileSync(output,`${JSON.stringify(captions,null,2)}\n`);
console.log(`Wrote ${captions.length} timed caption tokens to ${output}`);
