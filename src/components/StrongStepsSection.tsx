import type { strongSteps } from "@/data/strongSteps";

type StrongStepsContent = typeof strongSteps;

export function StrongStepsSection({ content }: { content: StrongStepsContent }) {
  return (
    <section id="strong-steps" className="strong-steps-section scroll-mt-28">
      <div className="page-shell py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow text-clay">{content.eyebrow}</p>
            <h2 className="mt-4 font-display text-5xl tracking-tight sm:text-6xl">{content.title}</h2>
            <p className="mt-5 max-w-md font-display text-2xl leading-9 text-forest">{content.subtitle}</p>
          </div>
          <div>
            <p className="text-lg leading-8 text-muted">{content.mission}</p>
            <p className="mt-6 font-semibold text-clay">{content.philosophy}</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {content.levels.map((level) => (
            <article key={level.number} className="rounded-2xl border border-forest/15 bg-white/85 p-7 sm:p-9">
              <p className="eyebrow text-clay">Level {level.number}</p>
              <h3 className="mt-4 font-display text-3xl">{level.title}</h3>
              <p className="mt-4 font-semibold leading-7 text-forest">{level.audience}</p>
              <p className="mt-4 leading-7 text-muted">{level.description}</p>
              <p className="mt-5 border-t border-forest/15 pt-5 text-sm leading-7 text-muted">{level.focus}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-2xl bg-white/85 p-7 sm:p-9">
          <p className="eyebrow text-clay">{content.clinic.duration}</p>
          <h3 className="mt-4 font-display text-3xl">{content.clinic.title}</h3>
          <p className="mt-4 max-w-3xl leading-8 text-muted">{content.clinic.description}</p>
          <ol className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.clinic.activities.map((activity) => (
              <li key={activity.title} className="border-l-2 border-clay/30 pl-5">
                <p className="text-sm font-bold text-clay">{activity.duration}</p>
                <h4 className="mt-2 font-semibold">{activity.title}</h4>
                <p className="mt-2 text-sm leading-7 text-muted">{activity.description}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm leading-7 text-muted">{content.availability}</p>
        </div>
      </div>
    </section>
  );
}
