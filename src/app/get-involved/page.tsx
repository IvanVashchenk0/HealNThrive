import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { siteContent } from "@/data/siteContent";
export const metadata: Metadata = { title: "Get Involved", description: siteContent.involvement.intro };
export default function GetInvolvedPage() {
  return <><PageHero eyebrow="Get involved" title={siteContent.involvement.title} description={siteContent.involvement.intro} /><section className="page-shell grid gap-6 py-14 md:grid-cols-2">{siteContent.involvement.options.map(option => <article key={option.title} className="rounded-2xl bg-mist p-8"><h2 className="font-display text-3xl">{option.title}</h2><p className="mt-5 leading-8 text-muted">{option.text}</p><Link href="/contact" className="mt-6 inline-flex min-h-11 items-center font-bold text-clay">Connect with us ↗</Link></article>)}</section><section id="donate" className="page-shell scroll-mt-28 pb-16"><div className="rounded-3xl bg-forest p-8 text-white sm:p-14"><p className="eyebrow text-sage">{siteContent.donation.eyebrow}</p><h2 className="mt-4 font-display text-4xl">{siteContent.donation.title}</h2><p className="mt-5 max-w-2xl text-lg leading-8">{siteContent.donation.text}</p><p className="mt-6 max-w-2xl rounded-xl border border-white/25 p-5 leading-7">{siteContent.donation.availability}</p><Link href={siteContent.donation.href} className="button button-light mt-6">Donate on GoFundMe ↗</Link></div></section></>;
}
