import { Hero } from "@/components/Hero";
import { FounderCarousel } from "@/components/FounderCarousel";
import { MissionSection } from "@/components/MissionSection";
import { EventsSection } from "@/components/EventsSection";
import { DonateCTA } from "@/components/DonateCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { founderSlides } from "@/data/founder";
import { events, eventsContent } from "@/data/events";
import { siteContent } from "@/data/siteContent";
export default function HomePage() {
  return <><Hero /><section id="founder" className="page-shell scroll-mt-28 pb-14 pt-7 sm:pb-20"><div className="mb-8"><SectionHeading eyebrow="The person behind the purpose" title={siteContent.founderHeading} description={siteContent.founderIntro} /></div><FounderCarousel slides={founderSlides} /></section>
    <div className="bg-mist/70 py-14 sm:py-20"><div className="page-shell content-with-donate"><div className="min-w-0 space-y-14"><MissionSection content={siteContent} /><EventsSection events={events} content={eventsContent} /></div><DonateCTA content={siteContent.donation} /></div></div>
    <CTASection title={siteContent.involvement.title} description={siteContent.involvement.intro} />
  </>;
}
