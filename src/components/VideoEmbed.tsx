"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { loadYouTubeAPI, type YouTubePlayer } from "@/lib/youtube";
import { PlaybackClock } from "@/lib/playbackClock";

export type PlaybackState = "loading" | "playing" | "paused" | "buffering" | "ended" | "blocked" | "error";
interface VideoEmbedProps {
  url: string;
  title: string;
  autoPlay?: boolean;
  active?: boolean;
  layout?: "inline" | "viewport";
  countdownEnabled?: boolean;
  playbackDurationSeconds?: number;
  onPlaybackStateChange?: (state: PlaybackState) => void;
  onPlaybackComplete?: () => void;
  children?: ReactNode;
}

export function VideoEmbed({
  url, title, autoPlay = false, active = true, layout = "inline",
  countdownEnabled = false, playbackDurationSeconds = 10,
  onPlaybackStateChange, onPlaybackComplete, children,
}: VideoEmbedProps) {
  const mount = useRef<HTMLDivElement>(null);
  const player = useRef<YouTubePlayer | null>(null);
  const [state, setState] = useState<PlaybackState>("loading");
  const [muted, setMuted] = useState(true);
  const [attempt, setAttempt] = useState(0);
  const updateClock = useRef<(() => void) | null>(null);
  const callbacks = useRef({ countdownEnabled, onPlaybackStateChange, onPlaybackComplete });

  useEffect(() => {
    callbacks.current = { countdownEnabled, onPlaybackStateChange, onPlaybackComplete };
    updateClock.current?.();
  }, [countdownEnabled, onPlaybackStateChange, onPlaybackComplete]);

  useEffect(() => {
    if (!active || !mount.current) return;
    const container = mount.current;
    let cancelled = false;
    let currentState: PlaybackState = "loading";
    let ready = false;
    const clock = new PlaybackClock(playbackDurationSeconds);
    const syncClock = () => {
      if (cancelled) return;
      const counting = currentState === "playing" && callbacks.current.countdownEnabled && !document.hidden;
      if (clock.update(counting, performance.now())) callbacks.current.onPlaybackComplete?.();
    };
    const report = (next: PlaybackState) => {
      if (cancelled) return;
      currentState = next;
      setState(next);
      callbacks.current.onPlaybackStateChange?.(next);
      syncClock();
    };
    updateClock.current = syncClock;
    const interval = window.setInterval(syncClock, 100);
    document.addEventListener("visibilitychange", syncClock);
    const readyTimeout = window.setTimeout(() => {
      if (!ready) report("error");
    }, 20000);

    loadYouTubeAPI().then((api) => {
      if (cancelled) return;
      report("loading");
      const embed = new URL(url);
      const slot = document.createElement("div");
      container.replaceChildren(slot);
      player.current = new api.Player(slot, {
        host: embed.origin,
        videoId: embed.pathname.split("/").pop() ?? "",
        width: "100%",
        height: "100%",
        playerVars: {
          origin: window.location.origin, enablejsapi: 1, playsinline: 1,
          autoplay: autoPlay ? 1 : 0, mute: 1, controls: 1, rel: 0,
          start: Number(embed.searchParams.get("start") ?? 0),
        },
        events: {
          onReady: ({ target }) => {
            if (cancelled) return;
            ready = true;
            clearTimeout(readyTimeout);
            target.getIframe().title = title;
            target.mute();
            setMuted(true);
            if (autoPlay) target.playVideo();
            else report("paused");
          },
          onStateChange: ({ data, target }) => {
            if (cancelled) return;
            setMuted(target.isMuted());
            const states: Record<number, PlaybackState> = { [-1]: "loading", 0: "ended", 1: "playing", 2: "paused", 3: "buffering", 5: "paused" };
            report(states[data] ?? "loading");
          },
          onError: () => report("error"),
          onAutoplayBlocked: () => report("blocked"),
        },
      });
      const iframe = player.current.getIframe();
      iframe.title = title;
      iframe.allow = "autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
    }).catch(() => report("error"));

    return () => {
      cancelled = true;
      clearInterval(interval);
      clearTimeout(readyTimeout);
      document.removeEventListener("visibilitychange", syncClock);
      updateClock.current = null;
      player.current?.destroy();
      player.current = null;
      container.replaceChildren();
    };
  }, [active, attempt, autoPlay, playbackDurationSeconds, title, url]);

  if (!active) return null;
  const unavailable = state === "error" || state === "blocked";
  const watchURL = new URL("https://www.youtube.com/watch");
  const embed = new URL(url);
  watchURL.searchParams.set("v", embed.pathname.split("/").pop() ?? "");
  watchURL.searchParams.set("t", `${embed.searchParams.get("start") ?? "0"}s`);

  return (
    <div className={`video-embed video-embed-${layout}`} data-playback-state={state}>
      <div className="youtube-viewport">
        <div className="youtube-stage" ref={mount} />
        {state === "loading" && <p className="video-status" role="status">Loading Kalisha’s story…</p>}
        {unavailable && (
          <div className="video-status" role="status">
            <p>{state === "error" ? "The video couldn’t load." : "Your browser paused automatic playback."}</p>
            <button type="button" className="video-control mt-3" onClick={() => {
              if (state === "blocked") player.current?.playVideo();
              else setAttempt(value => value + 1);
            }}>{state === "blocked" ? "Play video" : "Retry video"}</button>
            <a href={watchURL.toString()} target="_blank" rel="noreferrer" className="video-control mt-3">Watch on YouTube ↗</a>
          </div>
        )}
      </div>
      <div className="video-controls swiper-no-swiping">
        <div className="video-actions">
          <button type="button" className="video-control" disabled={state === "loading" || state === "error"} onClick={() => {
            if (state === "playing" || state === "buffering") player.current?.pauseVideo();
            else player.current?.playVideo();
          }}>{state === "playing" || state === "buffering" ? "Pause video" : "Play video"}</button>
          <button type="button" className="video-control" disabled={state === "loading" || state === "error"} aria-label={muted ? "Unmute video" : "Mute video"} onClick={() => {
            if (player.current?.isMuted()) { player.current.unMute(); setMuted(false); }
            else { player.current?.mute(); setMuted(true); }
          }}>{muted ? "Sound on" : "Sound off"}</button>
          <a href={watchURL.toString()} target="_blank" rel="noreferrer" className="video-control">YouTube ↗</a>
        </div>
        {children}
      </div>
    </div>
  );
}
