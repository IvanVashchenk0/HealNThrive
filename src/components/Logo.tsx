import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className="inline-flex shrink-0 items-center gap-3 rounded-sm" aria-label={`${siteContent.name} home`}><Image src="/media/branding/heal-thrive-logo.webp" alt="" width={56} height={56} className="rounded-lg" /><span className="leading-none"><span className={`block text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-forest"}`}>{siteContent.name}</span><span className={`mt-2 block text-[0.65rem] font-bold uppercase tracking-[0.2em] ${light ? "text-sage" : "text-muted"}`}>{siteContent.location}</span></span></Link>;
}
