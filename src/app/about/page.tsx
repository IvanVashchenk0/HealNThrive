import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { siteContent } from "@/data/siteContent";
export const metadata: Metadata = { title: "About", description: siteContent.founderIntro };
export default function AboutPage() {
  return <><PageHero eyebrow="Meet the founder" title="Kalisha Pettus" description={siteContent.tagline} /><section className="page-shell grid items-center gap-10 py-16 md:grid-cols-2"><div className="relative aspect-[3/4] overflow-hidden rounded-3xl"><Image src="/media/founder/founder-portrait.webp" alt="Kalisha Pettus seated for a professional portrait in Chicago" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" /></div><div><p className="eyebrow text-clay">Founder · Heal & Thrive Chicago</p><h2 className="mt-4 font-display text-4xl text-forest">{siteContent.tagline}</h2><div className="rich-copy mt-6"><p>{siteContent.founderBio}</p><p>{siteContent.founderExperience}</p></div></div></section><section className="bg-mist py-16"><div className="page-shell max-w-4xl"><h2 className="font-display text-4xl">Our community. Our purpose.</h2><p className="mt-6 text-xl leading-9 text-forest">{siteContent.mission}</p><p className="mt-6 leading-8 text-muted">{siteContent.partners}</p><p className="mt-4 font-semibold text-clay">{siteContent.partnersStatus}</p></div></section><CTASection /></>;
}
