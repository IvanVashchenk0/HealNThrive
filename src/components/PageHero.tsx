import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({ eyebrow, title, description, image, imageAlt = "" }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-forest py-20 text-white sm:py-28">
      {image && <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover opacity-28" />}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,50,38,0.98),rgba(15,50,38,0.68))]" />
      <div className="page-shell relative">
        <p className="eyebrow text-sage">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">{description}</p>
      </div>
    </section>
  );
}
