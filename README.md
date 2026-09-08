# Heal & Thrive Chicago

An existing Next.js App Router / React / TypeScript / Tailwind / Swiper prototype, updated with the organization's supplied materials. No Builder.io integration or payment service is installed.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000. Validate with `npm run lint`, `npm run typecheck`, and `npm run build`.

## Edit content

- `src/data/siteContent.ts`: organization copy, navigation, mission, contact availability, and donation configuration.
- `src/data/strongSteps.ts`: Strong Steps mission, two training levels, and monthly walking-clinic outline from the supplied document.
- `src/data/founder.ts`: typed founder slides, YouTube embed URL, captions, and image descriptions.
- `src/data/events.ts`: typed event records and empty-state copy. Add only confirmed events, marking past events explicitly.
- `src/data/programs.ts`: source-supported mission priorities and goals, with availability clearly distinguished from active services.
- `src/app/globals.css`: centralized brand colors in `@theme` and responsive layout styles.
- `public/media/`: selected, optimized production assets. The original `HealNThrive_materials/` stays ignored and is never required at runtime.

## Pending content

`siteContent.donation.href` contains the organization-supplied GoFundMe link. Navigation, donation panels, footer, and the giving page all use this destination.

The Contact page uses a direct email CTA. Replace `siteContent.contact.email` in `src/data/siteContent.ts` (currently `PLACEHOLDER_EMAIL@example.com`) with the real address; both the visible address and mailto destination update together. The subject is “HealNThrive Website Inquiry.” No contact backend, form submission, or database is used. No verified phone, address, office hours, or social links were supplied.

The homepage opens with Meet the Founder, followed by the retained “Turning survival into purpose” hero, Strong Steps, and the mission/events area. Meet the Founder is the page’s `h1`; the relocated hero and slide titles use `h2`.

The founder slide embeds the [supplied YouTube feature](https://www.youtube.com/watch?v=g0a5GG2ph_g&t=400s), starting muted at **6:40**. The YouTube IFrame API advances the carousel after **ten accumulated seconds of playback**, excluding buffering, pauses, disabled rotation, and hidden-tab time. Photo slides rotate every eight seconds. Returning to the video creates a new player and countdown at 6:40. Play/pause, sound, carousel navigation, blocked-autoplay recovery, and retry/YouTube fallback controls are provided. Player instances and timers are removed when inactive. Duration is configured in `src/data/founder.ts`.

At desktop widths of 1200px and above, the video fills the screen width and viewport height below navigation using a centered, enlarged 16:9 iframe with accepted edge cropping. Controls stay visible in the site’s toolbar. Below 1200px, the entire 16:9 video is shown without cropping or added height. The description sits below the video. Any black bars already present in the original footage are part of the source video.

The founder heading, video description, and carousel navigation use `min(94vw, 1500px)` content shells. Photo slides span the viewport with a large opaque text panel on the left and the full photograph on the right. Desktop photo width follows the original 3:4 proportions at a target height of `clamp(640px, calc(100svh - 5.25rem), 960px)`; image height stays automatic without cropping or media padding. Below 1024px, the full-width photograph stacks above its text. The full subject remains visible, including Kalisha’s hands and prosthetic leg. Swiper adjusts to the active slide’s natural height.

Run the playback-clock regression tests with Node 22.18 or newer:

```bash
node --experimental-strip-types --test tests/playback-clock.test.mjs
```

The soft green announcement banner uses the organization's requested “501(c)(3) certified”, “Founder-led”, and “Community healing” copy from `siteContent.banner`. It includes a pause control and becomes static for reduced-motion preferences.

See [the materials and implementation report](docs/materials-report.md) for provenance, omissions, asset mapping, and validation.

## Components and routes

The homepage uses `FounderCarousel`, `MissionSection`, `EventsSection` / `EventCard`, and `DonateCTA`, all accepting serializable content props for future Builder editing. Existing `SectionHeading`, `CTASection`, `PageHero`, `ProgramCard`, navigation, and footer were reused. The Contact page uses a server-rendered email link. `MediaGallery`, `VideoEmbed`, and `ProgramCarousel` remain available for future verified content.

Existing About, Our Work, Get Involved, and Contact routes remain. Source-backed focus pages are generated under `/programs/[slug]`. `/impact` redirects to `/programs` because no verified impact counts were supplied. Former fictional program slugs now return 404. The old generated image in `public/images/` is an unused legacy prototype asset.
