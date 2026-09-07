import Link from "next/link";
import { siteContent } from "@/data/siteContent";
export function Hero() {
  return <section className="intro-section"><div className="page-shell grid gap-8 py-12 md:grid-cols-[1.2fr_1fr] md:items-end md:py-16">
    <div><p className="eyebrow text-clay">{siteContent.name} · {siteContent.location}</p><h1 className="mt-5 max-w-xl font-display text-5xl leading-[1.04] tracking-[-0.04em] text-forest sm:text-6xl lg:text-7xl">{siteContent.heroTitle.opening}<br />{siteContent.heroTitle.closing} <em className="text-clay">{siteContent.heroTitle.emphasis}</em></h1></div>
    <div className="max-w-lg md:pb-2"><p className="text-lg leading-8 text-muted">{siteContent.intro}</p><div className="mt-6 flex flex-wrap items-center gap-5"><Link href="/contact" className="button button-primary">Connect with us <span aria-hidden="true">↗</span></Link><a href="#founder" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-forest">Meet Kalisha <span aria-hidden="true">↓</span></a></div></div>
  </div></section>;
}
