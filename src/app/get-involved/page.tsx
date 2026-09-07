import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = { title: "Get Involved", description: "Volunteer, donate, partner, or attend an event with HopeBridge." };

const ways = [
  { id: "volunteer", icon: "♡", title: "Volunteer", text: "Share your time as a mentor, event helper, market host, or skills-based volunteer.", action: "See volunteer roles" },
  { id: "donate", icon: "↗", title: "Donate", text: "Make a one-time or monthly prototype gift to help local programs respond quickly.", action: "Make a gift" },
  { id: "partner", icon: "⌁", title: "Partner With Us", text: "Bring your organization’s people, expertise, and resources to a shared goal.", action: "Explore partnerships" },
  { id: "events", icon: "◇", title: "Attend an Event", text: "Meet neighbors, learn about the work, and be part of what happens next.", action: "View upcoming events" },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero eyebrow="Get involved" title="There’s a place for you in this work." description="Whatever you have to offer—time, resources, expertise, or curiosity—there is a meaningful way to help." image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1800&q=85" imageAlt="Volunteers celebrating after a day of service" />
      <section className="page-shell py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center"><p className="eyebrow text-clay">Choose your path</p><h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Start where you are.</h2><p className="mt-5 text-lg leading-8 text-muted">Every kind of participation strengthens the bridge between need and opportunity.</p></div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ways.map((way) => <article id={way.id} key={way.id} className="scroll-mt-28 rounded-[1.75rem] border border-forest/10 bg-white p-7 shadow-[0_12px_40px_rgba(18,52,41,0.05)] sm:p-10"><span className="grid size-14 place-items-center rounded-full bg-sage/35 text-2xl text-forest" aria-hidden="true">{way.icon}</span><h3 className="mt-6 font-display text-3xl font-semibold text-ink">{way.title}</h3><p className="mt-3 max-w-lg text-lg leading-8 text-muted">{way.text}</p><Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-clay">{way.action} <span aria-hidden="true">→</span></Link></article>)}
        </div>
      </section>
      <section className="bg-sun py-20 sm:py-24"><div className="page-shell grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center"><div><p className="eyebrow text-clay">What to expect</p><h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">A warm welcome and a clear next step.</h2></div><ol className="grid gap-4 sm:grid-cols-3">{[["1", "Reach out"], ["2", "Meet your guide"], ["3", "Find your fit"]].map(([number, text]) => <li key={number} className="rounded-2xl bg-cream/75 p-5"><span className="text-xs font-bold text-clay">STEP {number}</span><strong className="mt-2 block font-display text-xl text-ink">{text}</strong></li>)}</ol></div></section>
      <CTASection eyebrow="Have another idea?" title="We’d love to hear what you’re imagining." description="Some of our best partnerships began with a simple conversation." primaryLabel="Contact our team" primaryHref="/contact" secondaryLabel="Explore programs" secondaryHref="/programs" />
    </>
  );
}
