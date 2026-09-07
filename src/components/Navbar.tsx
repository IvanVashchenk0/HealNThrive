"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { navigation, siteContent } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) => href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream">
      <div className="page-shell flex h-[5.25rem] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href={siteContent.donation.href} className="button button-primary !px-5 !py-3">
            Donate
          </Link>
        </nav>

        <button
          ref={toggle}
          type="button"
          className="grid size-11 place-items-center rounded-full border border-forest/15 text-forest transition hover:bg-forest hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        inert={!open}
        aria-hidden={!open}
        onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } }}
        className={`overflow-hidden border-t border-forest/10 bg-cream transition-[max-height,opacity] duration-300 lg:hidden ${open ? "max-h-[34rem] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="page-shell flex flex-col py-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`border-b border-forest/10 py-3.5 text-sm font-bold ${isActive(item.href) ? "text-clay" : "text-ink"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href={siteContent.donation.href} onClick={() => setOpen(false)} className="button button-primary mt-4 justify-center">
            Donate
          </Link>
        </div>
      </nav>
    </header>
  );
}
