import Link from "next/link";

export default function NotFound() {
  return <section className="page-shell flex min-h-[60vh] flex-col items-start justify-center py-20"><p className="eyebrow text-clay">404 · Page not found</p><h1 className="mt-4 font-display text-5xl font-semibold text-ink">This bridge doesn’t lead anywhere yet.</h1><p className="mt-5 max-w-xl text-lg leading-8 text-muted">The page may have moved, or the address may be incomplete.</p><Link href="/" className="button button-primary mt-8">Return home</Link></section>;
}
