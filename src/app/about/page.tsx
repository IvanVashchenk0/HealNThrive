import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = { title: "About Us", description: "Learn about HopeBridge Foundation's story, mission, vision, and values." };

const values = [
  { number: "01", title: "Listen deeply", text: "We start with lived experience and make space for every voice." },
  { number: "02", title: "Act with care", text: "We pair urgency with empathy, thoughtfulness, and respect." },
  { number: "03", title: "Share power", text: "Communities help set priorities, guide decisions, and measure success." },
  { number: "04", title: "Stay for the long term", text: "Trust and meaningful progress are built through consistent presence." },
];

const team = [
  { name: "Maya Bennett", role: "Executive Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85" },
  { name: "Daniel Ortiz", role: "Director of Programs", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85" },
  { name: "Amina Hayes", role: "Community Partnerships Lead", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About HopeBridge" title="Rooted in community. Built on trust." description="For fifteen years, we’ve brought neighbors, resources, and local ideas together to create opportunities that last." image="/images/hopebridge-hero.png" imageAlt="Neighbors building a community garden together" />

      <section className="page-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <SectionHeading eyebrow="Our story" title="A simple idea grew into a shared movement." />
          <div className="rich-copy mt-7"><p>HopeBridge began in 2011 around a borrowed table at a neighborhood library. Parents, teachers, health workers, and small-business owners came together around one question: what could change if local support were easier to find?</p><p>That conversation became a tutoring circle, then a food market, then a network of partners committed to showing up for the long haul. Today, our work reaches thousands of people—but our approach remains personal, practical, and led by community.</p></div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-[1.75rem] bg-mist">
          <Image src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85" alt="Friends and community members gathered together outdoors" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <div className="page-shell grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.75rem] bg-forest p-8 text-white sm:p-12"><p className="eyebrow text-sage">Our mission</p><h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">Connect people to opportunity.</h2><p className="mt-5 text-lg leading-8 text-white/68">We work alongside communities to expand access to education, health, food, stable housing, and meaningful ways to contribute.</p></div>
          <div className="rounded-[1.75rem] bg-sun p-8 text-ink sm:p-12"><p className="eyebrow text-clay">Our vision</p><h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">A future where everyone can thrive.</h2><p className="mt-5 text-lg leading-8 text-ink/65">We imagine connected communities where every person has the support, dignity, and agency to shape what comes next.</p></div>
        </div>
      </section>

      <section className="page-shell py-20 sm:py-28">
        <SectionHeading eyebrow="How we work" title="Values we practice every day." description="These principles guide the choices we make, the partnerships we build, and the way we measure progress." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-forest/10 bg-forest/10 md:grid-cols-2">
          {values.map((value) => <article key={value.number} className="bg-cream p-7 sm:p-9"><span className="text-xs font-bold tracking-[0.2em] text-clay">{value.number}</span><h3 className="mt-5 font-display text-2xl font-semibold text-ink">{value.title}</h3><p className="mt-3 leading-7 text-muted">{value.text}</p></article>)}
        </div>
      </section>

      <section className="bg-forest py-20 text-white sm:py-28">
        <div className="page-shell"><SectionHeading eyebrow="Our leadership" title="People who believe in the power of community." description="Our placeholder leadership team brings experience across education, public health, and neighborhood organizing." light />
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{team.map((person) => <article key={person.name}><div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-white/10"><Image src={person.image} alt={`Portrait of ${person.name}`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover grayscale-[15%]" /></div><h3 className="mt-5 font-display text-2xl font-semibold">{person.name}</h3><p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-sage">{person.role}</p></article>)}</div>
        </div>
      </section>
      <CTASection eyebrow="Build with us" title="The next chapter belongs to all of us." description="Bring your time, resources, or perspective—and help shape what comes next." />
    </>
  );
}
