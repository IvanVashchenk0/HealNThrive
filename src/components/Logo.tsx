import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay" aria-label="HopeBridge Foundation home">
      <span className={`grid size-10 place-items-center rounded-full ${light ? "bg-white text-forest" : "bg-forest text-white"}`} aria-hidden="true">
        <svg viewBox="0 0 32 32" className="size-6 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 21c3.5-6 7.5-9 11-9s7.5 3 11 9" />
          <path d="M8 21h16M16 12V6m0 0-3 3m3-3 3 3" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-display text-lg font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}>HopeBridge</span>
        <span className={`mt-1 block text-[0.64rem] font-bold uppercase tracking-[0.22em] ${light ? "text-white/65" : "text-forest/60"}`}>Foundation</span>
      </span>
    </Link>
  );
}
