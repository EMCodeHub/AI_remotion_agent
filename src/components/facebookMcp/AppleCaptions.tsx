import {createTikTokStyleCaptions, type Caption, type TikTokPage} from '@remotion/captions';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {AbsoluteFill, Easing, interpolate, Sequence, staticFile, useCurrentFrame, useDelayRender, useVideoConfig} from 'remotion';

const PAGE_DURATION_MS = 2600;

const AppleCaptionPage: React.FC<{page: TikTokPage}> = ({page}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const absoluteTimeMs = page.startMs + (frame / fps) * 1000;
  return <AbsoluteFill style={{justifyContent: 'flex-end', alignItems: 'center', padding: '0 150px 124px'}}>
    <div style={{maxWidth: 1390, textAlign: 'center', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Arial, sans-serif', fontSize: 44, fontWeight: 620, lineHeight: 1.17, letterSpacing: -1.1, color: 'white', whiteSpace: 'pre-wrap', textWrap: 'balance', backgroundColor: 'rgba(12,14,18,.88)', border: '1px solid rgba(255,255,255,.14)', borderRadius: 22, padding: '14px 24px 16px', boxShadow: '0 16px 48px rgba(0,0,0,.25)', opacity: interpolate(frame, [0, 8], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)}), translate: interpolate(frame, [0, 10], ['0px 10px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)})}}>
      {page.tokens.map((token) => <span key={`${token.fromMs}-${token.toMs}-${token.text}`} style={{color: token.fromMs <= absoluteTimeMs && token.toMs > absoluteTimeMs ? '#FFFFFF' : 'rgba(255,255,255,.66)', textShadow: token.fromMs <= absoluteTimeMs && token.toMs > absoluteTimeMs ? '0 0 20px rgba(255,255,255,.18)' : 'none'}}>{token.text}</span>)}
    </div>
  </AbsoluteFill>;
};

export const AppleCaptions: React.FC = () => {
  const [captions, setCaptions] = useState<Caption[] | null>(null);
  const {delayRender, continueRender, cancelRender} = useDelayRender();
  const [handle] = useState(() => delayRender('Loading Facebook MCP captions'));
  const load = useCallback(async () => {
    try {
      const response = await fetch(staticFile('subtitles/facebook-mcp.es.json'));
      if (!response.ok) throw new Error(`Caption fetch failed: ${response.status}`);
      setCaptions(await response.json());
      continueRender(handle);
    } catch (error) {
      cancelRender(error instanceof Error ? error : new Error(String(error)));
    }
  }, [cancelRender, continueRender, handle]);
  useEffect(() => {load();}, [load]);
  const pages = useMemo(() => captions ? createTikTokStyleCaptions({captions, combineTokensWithinMilliseconds: PAGE_DURATION_MS}).pages : [], [captions]);
  const {fps} = useVideoConfig();
  return <AbsoluteFill>{pages.map((page, index) => {
    const next = pages[index + 1] ?? null;
    const from = Math.round(page.startMs / 1000 * fps);
    const end = Math.min(next ? Math.round(next.startMs / 1000 * fps) : Infinity, from + Math.round(PAGE_DURATION_MS / 1000 * fps));
    return end > from ? <Sequence key={`${page.startMs}-${index}`} from={from} durationInFrames={end - from}><AppleCaptionPage page={page} /></Sequence> : null;
  })}</AbsoluteFill>;
};
