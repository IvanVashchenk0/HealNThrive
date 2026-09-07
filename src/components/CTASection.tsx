import Link from "next/link";
import { siteContent } from "@/data/siteContent";

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  eyebrow = "Your part matters",
  title = siteContent.involvement.title,
  description = siteContent.involvement.intro,
  primaryLabel = "Get involved",
  primaryHref = "/get-involved",
  secondaryLabel = "Talk with our team",
  secondaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="page-shell py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-clay px-6 py-14 text-center text-white sm:px-12 sm:py-20">
        <div className="absolute -left-12 -top-12 size-52 rounded-full border-[42px] border-white/8" aria-hidden="true" />
        <div className="absolute -bottom-20 -right-16 size-64 rounded-full border-[48px] border-forest/10" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <p className="eyebrow text-white/70">{eyebrow}</p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/78">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className="button button-light justify-center">{primaryLabel} <span aria-hidden="true">→</span></Link>
            <Link href={secondaryHref} className="button button-ghost-light justify-center">{secondaryLabel}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
