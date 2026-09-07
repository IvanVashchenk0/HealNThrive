interface VideoEmbedProps {
  url: string;
  title: string;
  autoPlay?: boolean;
}

export function VideoEmbed({ url, title, autoPlay = false }: VideoEmbedProps) {
  const embedUrl = new URL(url);
  embedUrl.searchParams.set("playsinline", "1");
  embedUrl.searchParams.set("rel", "0");

  if (autoPlay) {
    // Muted playback allows autoplay without a prior user gesture.
    // YouTube requires the video ID as a playlist to loop a single video.
    embedUrl.searchParams.set("autoplay", "1");
    embedUrl.searchParams.set("mute", "1");
    embedUrl.searchParams.set("loop", "1");
    embedUrl.searchParams.set("playlist", embedUrl.pathname.split("/").pop() ?? "");
  }

  return (
    <div className="relative aspect-video min-h-[200px] w-full overflow-hidden bg-ink">
      <iframe
        src={embedUrl.toString()}
        title={title}
        className="absolute inset-0 size-full border-0"
        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading={autoPlay ? "eager" : "lazy"}
      />
    </div>
  );
}
