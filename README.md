# HopeBridge Foundation — Version 0.1

A polished, responsive nonprofit prototype built with Next.js App Router, React, TypeScript, Tailwind CSS, and Swiper. Program content is centralized and typed so it can later be replaced by Builder.io CMS queries without changing the page or component architecture.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Editing guide

- **Program content and program images:** `src/data/programs.ts`
- **Organization name, tagline, contact details, impact stats, and navigation:** `src/data/site.ts`
- **Homepage sections:** `src/app/page.tsx`
- **Colors and global visual tokens:** the `@theme` block in `src/app/globals.css`
- **Generated hero image:** `public/images/hopebridge-hero.png`
- **Shared header and footer:** `src/components/Navbar.tsx` and `src/components/Footer.tsx`

## Routes

- `/`
- `/about`
- `/programs`
- `/programs/[slug]` (generated from program data)
- `/impact`
- `/get-involved`
- `/contact`

## Builder.io readiness

Visual components accept clean props and content lives outside them. A future integration can replace the data modules with typed Builder.io fetchers, then register components such as `ProgramCard`, `ImpactStats`, `CTASection`, and `MediaGallery` as custom components. No CMS dependency is included in this prototype.

## Prototype notes

All organization details, statistics, people, contact details, and stories are fictional placeholders. The contact form displays a local success state and sends no data. Donation buttons are placeholders; there is no payment flow.

The custom hero visual was generated for this prototype. Remaining demo photography is loaded from Unsplash through the allowlist in `next.config.ts`.
