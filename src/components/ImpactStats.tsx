import { impactStats } from "@/data/site";

export function ImpactStats({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid grid-cols-2 ${compact ? "gap-x-5 gap-y-8" : "gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 lg:grid-cols-4"}`}>
      {impactStats.map((stat) => (
        <div key={stat.label} className={compact ? "border-l-2 border-clay pl-5" : "bg-forest px-6 py-9 text-center sm:px-8 sm:py-11"}>
          <strong className={`${compact ? "text-3xl text-forest" : "text-4xl text-white sm:text-5xl"} block font-display font-semibold tracking-tight`}>{stat.value}</strong>
          <span className={`${compact ? "text-ink" : "text-sage"} mt-2 block text-sm font-bold uppercase tracking-[0.12em]`}>{stat.label}</span>
          {!compact && <span className="mt-3 hidden text-sm text-white/55 sm:block">{stat.detail}</span>}
        </div>
      ))}
    </div>
  );
}
