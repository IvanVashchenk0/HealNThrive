import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProgramCard } from "@/components/ProgramCard";
import { CTASection } from "@/components/CTASection";
import { programs } from "@/data/programs";

export const metadata: Metadata = { title: "Our Work", description: "Explore HopeBridge Foundation programs." };

export default function ProgramsPage() {
  return (
    <>
      <PageHero eyebrow="Our programs" title="Practical support. Lasting possibility." description="Our programs are shaped with communities and connected by one belief: everyone deserves the chance to thrive." image={programs[4].coverImage} imageAlt="HopeBridge volunteers working together" />
      <section className="page-shell py-20 sm:py-28">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow text-clay">Explore our work</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Five paths to a stronger community.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">Each program meets an immediate need while creating room for longer-term opportunity.</p>
        </div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {[...programs].sort((a, b) => a.displayOrder - b.displayOrder).map((program) => <ProgramCard key={program.slug} program={program} />)}
        </div>
      </section>
      <CTASection title="Help a neighbor take the next step." description="Your support makes each of these programs more responsive, welcoming, and sustainable." />
    </>
  );
}
