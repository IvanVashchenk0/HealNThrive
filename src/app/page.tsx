import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProgramCarousel } from "@/components/ProgramCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { ImpactStats } from "@/components/ImpactStats";
import { CTASection } from "@/components/CTASection";
import { featuredPrograms } from "@/data/programs";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="page-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-mist">
            <Image src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=85" alt="Community volunteers sharing a joyful moment" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-7 -right-3 max-w-[15rem] rounded-[1.25rem] bg-sun p-5 text-ink shadow-xl sm:-right-8 sm:p-6">
            <strong className="font-display text-4xl font-semibold">15 years</strong>
            <p className="mt-1 text-sm font-bold leading-5">of listening, learning, and growing together.</p>
          </div>
        </div>
        <div className="pt-6 lg:pt-0">
          <SectionHeading eyebrow="Who we are" title="We build bridges to what’s possible." description="HopeBridge works alongside neighbors to turn local insight into practical, lasting progress. We listen first, invest for the long term, and make sure every person has a voice in the work." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl bg-mist p-5"><span className="text-2xl" aria-hidden="true">◎</span><h3 className="mt-3 font-display text-xl font-semibold">Community-led</h3><p className="mt-2 text-sm leading-6 text-muted">Solutions begin with the people who know their communities best.</p></div>
            <div className="rounded-2xl bg-mist p-5"><span className="text-2xl" aria-hidden="true">↗</span><h3 className="mt-3 font-display text-xl font-semibold">Built to last</h3><p className="mt-2 text-sm leading-6 text-muted">Partnerships and resources designed for meaningful, durable change.</p></div>
          </div>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-clay underline decoration-clay/30 underline-offset-8 transition hover:decoration-clay">More about HopeBridge <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section id="programs" className="scroll-mt-20 bg-mist py-20 sm:py-28">
        <div className="page-shell">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Our work" title="Opportunity, close to home." description="Five connected programs. One shared commitment to help every neighbor move forward." />
            <Link href="/programs" className="button button-outline shrink-0 self-start md:self-auto">View all programs <span aria-hidden="true">→</span></Link>
          </div>
          <ProgramCarousel items={featuredPrograms} />
        </div>
      </section>

      <section className="bg-forest py-20 sm:py-28">
        <div className="page-shell">
          <div className="mb-12 grid gap-7 lg:grid-cols-2 lg:items-end">
            <SectionHeading eyebrow="Our collective impact" title="Small steps. Shared momentum. Real change." light />
            <p className="max-w-xl text-lg leading-8 text-white/65 lg:justify-self-end">Numbers are only part of the story, but they help show what is possible when communities have the right resources and support.</p>
          </div>
          <ImpactStats />
          <div className="mt-8 text-center"><Link href="/impact" className="inline-flex items-center gap-2 text-sm font-bold text-sage hover:text-white">See the stories behind the numbers <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="page-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <SectionHeading eyebrow="A place for everyone" title="Your time and care can open a door." description="Change doesn’t belong to a few people. It grows through everyday acts—an hour of mentoring, a team project, a monthly gift, or a new idea shared." />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-involved" className="button button-primary justify-center">Find your way to help <span aria-hidden="true">→</span></Link>
            <Link href="/contact" className="button button-outline justify-center">Start a conversation</Link>
          </div>
        </div>
        <div className="relative aspect-[6/5] overflow-hidden rounded-[1.75rem] bg-mist">
          <Image src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=85" alt="Volunteers joining hands during a community project" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>

      <CTASection />
    </>
  );
}
