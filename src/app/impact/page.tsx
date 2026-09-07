import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ImpactStats } from "@/components/ImpactStats";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = { title: "Our Impact", description: "See the shared impact of HopeBridge programs and partnerships." };

export default function ImpactPage() {
  return (
    <>
      <PageHero eyebrow="Our impact" title="Progress you can feel, stories you can share." description="Every number represents a person, a relationship, and a community moving forward on its own terms." image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=85" imageAlt="Community members together outdoors" />
      <section className="bg-forest py-20 sm:py-28"><div className="page-shell"><ImpactStats /></div></section>

      <section className="page-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-mist"><Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=85" alt="A student smiling with confidence in a classroom" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div>
        <div><p className="eyebrow text-clay">A story of possibility</p><blockquote className="mt-5 font-display text-3xl font-semibold leading-snug tracking-tight text-ink sm:text-4xl">“My mentor didn’t just help with homework. She helped me see a future I could choose.”</blockquote><p className="mt-6 leading-7 text-muted">— Jordan, Youth Education participant</p><p className="mt-7 text-lg leading-8 text-muted">After joining a HopeBridge learning hub, Jordan found steady academic support and a community that celebrated every milestone. This fall, Jordan begins a first-choice college program.</p><Link href="/programs/youth-education" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-clay">Explore Youth Education <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="bg-mist py-20 sm:py-28"><div className="page-shell"><SectionHeading eyebrow="How we measure" title="Accountability shaped by people, not just numbers." description="We pair clear program data with participant feedback and long-term community learning." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">{[
          ["01", "Reach", "Who can access support, and where barriers still remain."],
          ["02", "Experience", "Whether people feel respected, heard, and able to make choices."],
          ["03", "Lasting change", "What becomes more stable, connected, and possible over time."],
        ].map(([number, title, text]) => <article key={number} className="rounded-[1.5rem] bg-white p-7 shadow-sm sm:p-9"><span className="font-display text-4xl text-clay/45">{number}</span><h3 className="mt-7 font-display text-2xl font-semibold text-ink">{title}</h3><p className="mt-3 leading-7 text-muted">{text}</p></article>)}</div>
      </div></section>
      <CTASection eyebrow="Keep it moving" title="Your support turns momentum into lasting change." />
    </>
  );
}
