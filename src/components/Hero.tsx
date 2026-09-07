import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5.25rem)] overflow-hidden bg-forest text-white">
      <Image
        src="/images/hopebridge-hero.png"
        alt="Neighbors and volunteers planting a community garden together"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[64%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,50,38,0.98)_0%,rgba(15,50,38,0.82)_35%,rgba(15,50,38,0.2)_72%,rgba(15,50,38,0.04)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-forest/35 to-transparent" />
      <div className="page-shell relative flex min-h-[calc(100svh-5.25rem)] items-center py-20">
        <div className="max-w-2xl">
          <p className="eyebrow text-sage">Together, hope takes root</p>
          <h1 className="mt-5 text-balance font-display text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[5.25rem]">
            Stronger communities start with opportunity.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/78 sm:text-xl">
            {siteContent.mission} <span className="hidden sm:inline">One neighborhood, one family, one possibility at a time.</span>
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-involved" className="button button-light justify-center">Support Our Mission <span aria-hidden="true">→</span></Link>
            <Link href="/programs" className="button button-ghost-light justify-center">Explore Our Work</Link>
          </div>
          <div className="mt-12 flex items-center gap-4 text-sm text-white/65">
            <span className="flex -space-x-2" aria-hidden="true">
              {[
                "bg-[#e9b48d]",
                "bg-[#b9d4c5]",
                "bg-[#cf8568]",
              ].map((color) => <span key={color} className={`size-9 rounded-full border-2 border-forest ${color}`} />)}
            </span>
            <span><strong className="text-white">800+ volunteers</strong><br />showing up with heart</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 right-6 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/65 md:flex">
        <span className="h-px w-12 bg-white/45" /> Scroll to explore
      </div>
    </section>
  );
}
