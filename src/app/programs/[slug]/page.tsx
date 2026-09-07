import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { ProgramCard } from "@/components/ProgramCard";
import { getProgramBySlug, programs } from "@/data/programs";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return programs.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const program = getProgramBySlug((await params).slug);
  return { title: program?.title ?? "Page not found", description: program?.shortDescription };
}
export default async function ProgramPage({ params }: Props) {
  const program = getProgramBySlug((await params).slug);
  if (!program) notFound();
  return <><article className="page-shell py-14"><Link href="/programs" className="inline-flex min-h-11 items-center font-bold text-clay">← Our work</Link><div className="mt-6 grid gap-10 md:grid-cols-2 md:items-center"><div><p className="eyebrow text-clay">{program.category}</p><h1 className="mt-4 font-display text-5xl text-forest">{program.title}</h1><p className="mt-6 text-xl leading-8">{program.shortDescription}</p><div className="rich-copy mt-7">{program.fullDescription.map(text => <p key={text}>{text}</p>)}</div></div><div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-mist"><Image src={program.coverImage} alt={program.coverAlt} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-contain" /></div></div></article><section className="bg-mist py-14"><div className="page-shell"><h2 className="mb-8 font-display text-3xl">Explore our other priorities</h2><div className="grid gap-7 md:grid-cols-2">{programs.filter(item => item.slug !== program.slug).map(item => <ProgramCard key={item.slug} program={item} />)}</div></div></section><CTASection /></>;
}
