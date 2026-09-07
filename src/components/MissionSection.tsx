import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
interface MissionContent { mission: string; missionSupport: string; missionImage: string; missionImageAlt: string }
export function MissionSection({ content }: { content: MissionContent }) {
  return <section id="mission" className="scroll-mt-28">
    <SectionHeading eyebrow="Why we are here" title="Our Mission" />
    <p className="mt-7 font-display text-2xl leading-relaxed text-forest sm:text-3xl">{content.mission}</p>
    <div className="mt-8 grid items-center gap-7 sm:grid-cols-[1fr_1.2fr]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src={content.missionImage} alt={content.missionImageAlt} fill sizes="(max-width: 640px) 100vw, 30vw" className="object-cover object-[center_35%]" /></div>
      <p className="leading-8 text-muted">{content.missionSupport}</p>
    </div>
  </section>;
}
