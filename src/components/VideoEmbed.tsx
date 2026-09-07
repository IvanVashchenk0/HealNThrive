export function VideoEmbed({ url, title }: { url: string; title: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-ink shadow-xl">
      <iframe
        src={url}
        title={title}
        className="absolute inset-0 size-full"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
