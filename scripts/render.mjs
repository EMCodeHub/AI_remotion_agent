import {spawnSync} from 'node:child_process';
import {mkdirSync} from 'node:fs';
import {dirname} from 'node:path';

const [composition='MainVideo', output='exports/final/main-video.mp4', ...extra] = process.argv.slice(2);
mkdirSync(dirname(output), {recursive:true});
const cli = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const result = spawnSync(cli, ['remotion','render','src/index.ts',composition,output,'--codec=h264','--audio-codec=aac','--pixel-format=yuv420p',...extra], {stdio:'inherit', shell:false});
process.exit(result.status ?? 1);
