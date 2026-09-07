# HealNThrive

An existing Next.js App Router / React / TypeScript / Tailwind / Swiper prototype, updated with the organization's supplied materials. No Builder.io integration or payment service is installed.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000. Validate with `npm run lint`, `npm run typecheck`, and `npm run build`.

## Edit content

- `src/data/siteContent.ts`: organization copy, navigation, mission, contact availability, and donation configuration.
- `src/data/founder.ts`: typed founder slides, YouTube embed URL, captions, and image descriptions.
- `src/data/events.ts`: typed event records and empty-state copy. Add only confirmed events, marking past events explicitly.
- `src/data/programs.ts`: source-supported mission priorities and goals, with availability clearly distinguished from active services.
- `src/app/globals.css`: centralized brand colors in `@theme` and responsive layout styles.
- `public/media/`: selected, optimized production assets. The original `HealNThrive_materials/` stays ignored and is never required at runtime.

## Pending content

Set `siteContent.donation.href` to the verified donation URL. It currently leads to the honest giving-availability section at `/get-involved#donate`. Update that section's availability text when giving is available.

No verified email, phone, address, office hours, social links, or contact endpoint was supplied. The retained contact form is explicitly a preview: it sends and stores nothing. Supply verified contact details and a real submission handler before enabling messaging.

The founder slide embeds the [supplied YouTube feature](https://www.youtube.com/watch?v=g0a5GG2ph_g) through `VideoEmbed`. It starts muted automatically, plays inline, and loops; visitors can enable sound using YouTube's controls. The carousel holds this slide so playback is not interrupted. Navigation removes the player, and returning starts it again. “Play slideshow” advances to the photos and resumes carousel autoplay. Browser settings may still restrict automatic playback. The local MP4 preview and poster have been removed; change `mediaSrc` in `src/data/founder.ts` to update the YouTube embed URL.

See [the materials and implementation report](docs/materials-report.md) for provenance, omissions, asset mapping, and validation.

## Components and routes

The homepage uses `FounderCarousel`, `MissionSection`, `EventsSection` / `EventCard`, and `DonateCTA`, all accepting serializable content props for future Builder editing. Existing `SectionHeading`, `CTASection`, `PageHero`, `ProgramCard`, navigation, footer, and contact form were reused. `MediaGallery`, `VideoEmbed`, and `ProgramCarousel` remain available for future verified content.

Existing About, Our Work, Get Involved, and Contact routes remain. Source-backed focus pages are generated under `/programs/[slug]`. `/impact` redirects to `/programs` because no verified impact counts were supplied. Former fictional program slugs now return 404. The old generated image in `public/images/` is an unused legacy prototype asset.
