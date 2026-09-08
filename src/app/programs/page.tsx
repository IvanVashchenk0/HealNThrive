import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProgramCard } from "@/components/ProgramCard";
import { CTASection } from "@/components/CTASection";
import { StrongStepsSection } from "@/components/StrongStepsSection";
import { strongSteps } from "@/data/strongSteps";
import { programs } from "@/data/programs";
import { siteContent } from "@/data/siteContent";
export const metadata: Metadata = { title: "Our Work", description: siteContent.mission };
export default function ProgramsPage() {
  return <><PageHero eyebrow="Our mission & goals" title={siteContent.workTitle} description={siteContent.workIntro} /><StrongStepsSection content={strongSteps} /><section className="page-shell py-16"><h2 className="mb-8 font-display text-3xl">Our areas of focus</h2><div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{programs.map(program => <ProgramCard key={program.slug} program={program} />)}</div></section><CTASection /></>;
}
