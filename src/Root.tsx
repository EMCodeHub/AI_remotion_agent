import {Composition} from 'remotion';
import {MainVideo} from './compositions/MainVideo';
import {SocialVertical} from './compositions/SocialVertical';
import {SocialSquare} from './compositions/SocialSquare';
import {VIDEO_DEFAULTS,secondsToFrames} from './config/videoDefaults';
import {OBSIDIAN_SHORT,ObsidianInstagramShort} from './compositions/ObsidianInstagramShort';
import {WORLD_CUP_RECAP,WorldCup2026Recap} from './compositions/WorldCup2026Recap';
import {FacebookMcpTutorial} from './compositions/FacebookMcpTutorial';

const defaults={title:'Your Story',subtitle:'Drop media into public/ and ask Codex to edit.',introFrames:60,outroFrames:60};
export const RemotionRoot: React.FC = () => <>
  <Composition id="MainVideo" component={MainVideo} durationInFrames={secondsToFrames(VIDEO_DEFAULTS.durationInSeconds)} fps={VIDEO_DEFAULTS.fps} width={VIDEO_DEFAULTS.main.width} height={VIDEO_DEFAULTS.main.height} defaultProps={defaults}/>
  <Composition id="SocialVertical" component={SocialVertical} durationInFrames={secondsToFrames(VIDEO_DEFAULTS.durationInSeconds)} fps={VIDEO_DEFAULTS.fps} width={VIDEO_DEFAULTS.vertical.width} height={VIDEO_DEFAULTS.vertical.height} defaultProps={defaults}/>
  <Composition id="SocialSquare" component={SocialSquare} durationInFrames={secondsToFrames(VIDEO_DEFAULTS.durationInSeconds)} fps={VIDEO_DEFAULTS.fps} width={VIDEO_DEFAULTS.square.width} height={VIDEO_DEFAULTS.square.height} defaultProps={defaults}/>
  <Composition id="ObsidianInstagramShort" component={ObsidianInstagramShort} durationInFrames={OBSIDIAN_SHORT.durationInFrames} fps={30} width={1080} height={1920}/>
  <Composition id="WorldCup2026Recap" component={WorldCup2026Recap} durationInFrames={WORLD_CUP_RECAP.durationInFrames} fps={WORLD_CUP_RECAP.fps} width={WORLD_CUP_RECAP.width} height={WORLD_CUP_RECAP.height}/>
  <Composition id="FacebookMcpTutorial" component={FacebookMcpTutorial} durationInFrames={25810} fps={30} width={1920} height={1080}/>
</>;
