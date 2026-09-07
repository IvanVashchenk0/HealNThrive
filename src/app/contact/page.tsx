import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { siteContent } from "@/data/site";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with HopeBridge Foundation." };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact us" title="Let’s start a conversation." description="Questions, ideas, and new connections are always welcome. Send us a note and our team will be in touch." />
      <section className="page-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <aside>
          <p className="eyebrow text-clay">Reach us directly</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink">We’re here to help.</h2>
          <div className="mt-8 space-y-7">
            <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Email</p><a href={`mailto:${siteContent.email}`} className="mt-2 block font-display text-xl font-semibold text-forest hover:text-clay">{siteContent.email}</a></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Phone</p><a href={`tel:${siteContent.phone.replace(/\D/g, "")}`} className="mt-2 block font-display text-xl font-semibold text-forest hover:text-clay">{siteContent.phone}</a></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Visit</p><p className="mt-2 max-w-xs font-display text-xl font-semibold leading-7 text-forest">{siteContent.address}</p></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Office hours</p><p className="mt-2 text-muted">Monday–Friday<br />9:00 a.m.–5:00 p.m.</p></div>
          </div>
        </aside>
        <div className="rounded-[1.75rem] bg-mist p-6 sm:p-10"><ContactForm /></div>
      </section>
    </>
  );
}
