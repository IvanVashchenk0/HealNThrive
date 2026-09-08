"use client";

import { useState } from "react";

export function AnnouncementBanner({ messages }: { messages: string[] }) {
  const [paused, setPaused] = useState(false);
  return (
    <aside className="announcement-banner" aria-label="About our organization">
      <p className="sr-only">{messages.join(". ")}</p>
      <div className="announcement-window" aria-hidden="true">
        <div className="announcement-track" style={{ animationPlayState: paused ? "paused" : "running" }}>
          {[0, 1].map((copy) => (
            <div className="announcement-group" key={copy}>
              {[...messages, ...messages].map((message, index) => (
                <span key={index}>{message}<span className="announcement-separator">✦</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Play announcement banner" : "Pause announcement banner"} className="announcement-toggle">
        <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
      </button>
    </aside>
  );
}
