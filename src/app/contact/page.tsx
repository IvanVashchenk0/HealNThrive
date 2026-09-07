import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { siteContent } from "@/data/siteContent";
export const metadata: Metadata = { title: "Contact", description: siteContent.contact.intro };
export default function ContactPage() {
  return <><PageHero eyebrow="Contact HealNThrive" title={siteContent.contact.title} description={siteContent.contact.intro} /><section className="page-shell grid gap-10 py-14 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow text-clay">Chicago</p><h2 className="mt-4 font-display text-3xl">Contact information</h2><p className="mt-5 leading-8 text-muted">{siteContent.contact.availability}</p></div><div className="rounded-3xl bg-mist p-6 sm:p-9"><ContactForm /></div></section></>;
}
