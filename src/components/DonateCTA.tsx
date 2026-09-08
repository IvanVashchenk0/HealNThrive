import Link from "next/link";
interface DonateContent { eyebrow: string; title: string; text: string; label: string; href: string }
export function DonateCTA({ content }: { content: DonateContent }) {
  return <aside className="donate-panel" aria-label="Support Heal & Thrive Chicago"><span className="donate-symbol" aria-hidden="true">♡</span><p className="eyebrow text-forest">{content.eyebrow}</p><h2 className="mt-5 font-display text-4xl leading-tight">{content.title}</h2><p className="mt-5 leading-7 text-muted">{content.text}</p><Link href={content.href} className="button button-light mt-8 w-full">{content.label} <span aria-hidden="true">↗</span></Link><div className="mt-9 h-px bg-forest/20" /></aside>;
}
