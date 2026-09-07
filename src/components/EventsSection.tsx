import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import type { CommunityEvent } from "@/data/events";
export function EventCard({ event }: { event: CommunityEvent }) {
  return <article className="overflow-hidden rounded-2xl border border-forest/15 bg-white">
    {event.image && <div className="relative aspect-video"><Image src={event.image} alt={event.imageAlt ?? event.title} fill sizes="(max-width: 640px) 100vw, 40vw" className="object-cover" /></div>}
    <div className="p-6"><p className="eyebrow text-clay">{event.status === "past" ? "Past community event" : "Upcoming event"}</p><h3 className="mt-3 font-display text-2xl">{event.title}</h3>{event.date && <p className="mt-3 font-semibold">{event.date}</p>}{event.location && <p>{event.location}</p>}<p className="mt-3 leading-7 text-muted">{event.description}</p>{event.link && <a href={event.link} className="mt-5 inline-flex min-h-11 items-center font-bold text-clay">Event details →</a>}</div>
  </article>;
}
interface EventsContent { eyebrow: string; title: string; intro: string; emptyTitle: string; emptyText: string }
export function EventsSection({ events, content }: { events: CommunityEvent[]; content: EventsContent }) {
  return <section id="events" className="scroll-mt-28 border-t border-forest/15 pt-12"><SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.intro} />
    <div className="mt-7 grid gap-6 sm:grid-cols-2">{events.length ? events.map(event => <EventCard key={event.id} event={event} />) : <div className="rounded-2xl border border-forest/15 bg-white p-7 sm:col-span-2"><span className="text-3xl text-clay" aria-hidden="true">↗</span><h3 className="mt-4 font-display text-2xl">{content.emptyTitle}</h3><p className="mt-3 max-w-xl leading-7 text-muted">{content.emptyText}</p></div>}</div>
  </section>;
}
