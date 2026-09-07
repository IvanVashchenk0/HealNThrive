import Image from "next/image";
import Link from "next/link";
import type { Program } from "@/types/program";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-forest/10 bg-white shadow-[0_12px_40px_rgba(18,52,41,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(18,52,41,0.12)]">
      <Link href={`/programs/${program.slug}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay">
        <div className="relative aspect-[4/3] overflow-hidden bg-mist">
          <Image src={program.coverImage} alt={program.coverAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.035]" />
          <span className="absolute left-5 top-5 rounded-full bg-cream/95 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-forest">{program.category}</span>
          {program.mediaType === "video" && <span className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-white text-forest shadow-lg" aria-label="Includes video"><span aria-hidden="true">▶</span></span>}
        </div>
        <div className="p-6 sm:p-7">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">{program.title}</h3>
          <p className="mt-3 leading-7 text-muted">{program.shortDescription}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-clay">Learn more <span className="transition group-hover:translate-x-1" aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  );
}
