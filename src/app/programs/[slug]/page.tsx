import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { MediaGallery } from "@/components/MediaGallery";
import { ProgramCard } from "@/components/ProgramCard";
import { VideoEmbed } from "@/components/VideoEmbed";
import { getProgramBySlug, programs } from "@/data/programs";

type ProgramPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return { title: "Program not found" };
  return { title: program.title, description: program.shortDescription };
}

export default async function ProgramDetailPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();
  const related = programs.filter((item) => item.slug !== program.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="bg-forest text-white">
          <div className="page-shell py-12 sm:py-16">
            <Link href="/programs" className="inline-flex items-center gap-2 text-sm font-bold text-sage transition hover:text-white"><span aria-hidden="true">←</span> All programs</Link>
            <div className="mt-9 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
              <div className="pb-2">
                <p className="eyebrow text-sage">{program.category}</p>
                <h1 className="mt-4 text-balance font-display text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-7xl">{program.title}</h1>
                <p className="mt-6 text-xl leading-8 text-white/72">{program.shortDescription}</p>
                <div className="mt-9 border-l-2 border-clay pl-5"><strong className="block font-display text-4xl">{program.stat.value}</strong><span className="text-sm font-bold uppercase tracking-[0.13em] text-sage">{program.stat.label}</span></div>
              </div>
              <div className="relative aspect-[5/4] overflow-hidden rounded-t-[1.75rem] bg-mist lg:-mb-16">
                <Image src={program.coverImage} alt={program.coverAlt} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
              </div>
            </div>
          </div>
        </header>

        <section className="page-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.7fr_0.3fr] lg:gap-20 lg:pt-36">
          <div>
            <p className="eyebrow text-clay">About the program</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Support that starts by listening.</h2>
            <div className="rich-copy mt-7">{program.fullDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
          <aside className="h-fit rounded-[1.5rem] bg-mist p-7">
            <h2 className="font-display text-2xl font-semibold text-ink">At a glance</h2>
            <dl className="mt-5 divide-y divide-forest/10">
              <div className="py-4"><dt className="text-xs font-bold uppercase tracking-[0.13em] text-muted">Focus</dt><dd className="mt-1 font-semibold text-ink">{program.category}</dd></div>
              <div className="py-4"><dt className="text-xs font-bold uppercase tracking-[0.13em] text-muted">Who it serves</dt><dd className="mt-1 font-semibold text-ink">Neighbors across our region</dd></div>
              <div className="py-4"><dt className="text-xs font-bold uppercase tracking-[0.13em] text-muted">How to help</dt><dd className="mt-1"><Link href="/get-involved" className="font-bold text-clay">Volunteer or give →</Link></dd></div>
            </dl>
          </aside>
        </section>

        {program.mediaType === "video" && program.videoUrl && (
          <section className="bg-mist py-20 sm:py-28"><div className="page-shell"><div className="mb-9 max-w-2xl"><p className="eyebrow text-clay">See the work</p><h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">A closer look at community care.</h2><p className="mt-4 text-muted">Prototype video embed demonstrating CMS-ready video content. Video does not autoplay.</p></div><VideoEmbed url={program.videoUrl} title={`${program.title} program video`} /></div></section>
        )}

        {program.gallery && <section className="page-shell py-20 sm:py-28"><div className="mb-9"><p className="eyebrow text-clay">In the community</p><h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">Moments that move us forward.</h2></div><MediaGallery images={program.gallery} /></section>}
      </article>

      <section className="bg-mist py-20 sm:py-28">
        <div className="page-shell">
          <div className="mb-9 flex items-end justify-between gap-6"><div><p className="eyebrow text-clay">Keep exploring</p><h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">Related programs</h2></div><Link href="/programs" className="hidden text-sm font-bold text-clay sm:block">View all →</Link></div>
          <div className="grid gap-7 md:grid-cols-3">{related.map((item) => <ProgramCard key={item.slug} program={item} />)}</div>
        </div>
      </section>
      <CTASection title={`Stand with ${program.title}.`} description="Every gift and every volunteer hour helps this work reach another neighbor." />
    </>
  );
}
