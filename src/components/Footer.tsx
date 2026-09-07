import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navigation, siteContent } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="page-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.9fr] lg:py-20">
        <div>
          <Logo light />
          <p className="mt-6 max-w-md text-lg leading-8 text-white/65">{siteContent.tagline}</p>
          <div className="mt-7 flex gap-3" aria-label="Social media links">
            {["Instagram", "Facebook", "LinkedIn"].map((network) => (
              <a key={network} href="#" className="grid size-10 place-items-center rounded-full border border-white/20 text-xs font-bold transition hover:border-clay hover:bg-clay focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay" aria-label={`${network} placeholder link`}>{network.slice(0, 2)}</a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-sage">Explore</h2>
          <ul className="mt-5 space-y-3">
            {navigation.slice(1).map((item) => <li key={item.href}><Link href={item.href} className="text-white/65 transition hover:text-white">{item.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-sage">Connect</h2>
          <address className="mt-5 space-y-3 not-italic text-white/65">
            <p>{siteContent.address}</p>
            <p><a className="hover:text-white" href={`mailto:${siteContent.email}`}>{siteContent.email}</a></p>
            <p><a className="hover:text-white" href={`tel:${siteContent.phone.replace(/\D/g, "")}`}>{siteContent.phone}</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-3 py-6 text-xs leading-5 text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HopeBridge Foundation. Prototype content only.</p>
          <p>HopeBridge Foundation is a fictional nonprofit created for demonstration.</p>
        </div>
      </div>
    </footer>
  );
}
