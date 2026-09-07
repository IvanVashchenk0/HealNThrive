import Image from "next/image";

export function MediaGallery({ images }: { images: Array<{ src: string; alt: string }> }) {
  if (!images.length) return null;
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {images.map((image, index) => (
        <div key={image.src} className={`relative overflow-hidden rounded-[1.25rem] bg-mist ${index === 0 && images.length >= 3 ? "aspect-[4/3] md:row-span-2 md:aspect-auto" : "aspect-[16/10]"}`}>
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500 hover:scale-[1.025]" />
        </div>
      ))}
    </div>
  );
}
