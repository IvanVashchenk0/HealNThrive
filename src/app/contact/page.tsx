import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteContent } from "@/data/siteContent";
export const metadata: Metadata = { title: "Contact", description: siteContent.contact.intro };
export default function ContactPage() {
  const { contact } = siteContent;
  const emailHref = `mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`;

  return (
    <>
      <PageHero eyebrow="Contact Heal & Thrive Chicago" title={contact.title} description={contact.intro} />
      <section className="page-shell py-14" aria-labelledby="contact-heading">
        <div className="grid items-center gap-8 rounded-3xl bg-mist p-6 sm:p-9 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12 lg:p-12">
          <div>
            <p className="eyebrow text-clay">Get in touch</p>
            <h2 id="contact-heading" className="mt-4 font-display text-3xl sm:text-4xl">Start a conversation.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-muted">{contact.supportingText}</p>
          </div>
          <div className="min-w-0 lg:text-center">
            <a href={emailHref} className="button button-primary w-full sm:w-auto">
              {contact.emailLabel} <span aria-hidden="true">↗</span>
            </a>
            <p className="mt-4 break-all text-sm leading-6 text-muted">{contact.email}</p>
          </div>
        </div>
      </section>
    </>
  );
}
