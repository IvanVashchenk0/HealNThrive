# Materials and implementation report

## Inspection and editorial decisions

Recursively inspected all source files, including hidden-file listings. Extracted DOCX and RTF text with macOS `textutil`; checked the DOCX archive for embedded media and external links (none). Visually reviewed all ten JPEG photographs and the logo using a contact sheet. Inspected the MP4's duration, tracks, and a frame; verified its derivative through Chrome playback.

| Source | What it supports / how it was used |
| --- | --- |
| `text /FILE_7118.docx` | Mission, founder biography, Level 1 CrossFit credential, fitness/culinary background, adaptive fitness goals, life skills, and collaboration language. Supplies founder slide copy, About, Mission, Our Work, and involvement content. |
| `Overview/overview.rtf` | Founder-first emphasis; survivors and families as the primary audience; contact as the main action; warm, accessible, grassroots presentation; purple and green, light and airy. |
| `Media/Logo.png` | Existing Chicago branding and “Turning survival into purpose” tagline. |
| `Media/20260505_160321.jpg` | Selected training photograph, showing Kalisha on a pull-up bar. |
| `Media/20260505_191313~2.jpg` | Selected business portrait for founder slide three, About, and the life-skills focus page. Stronger match for the requested professional slide than the more casual `KHeadshot.jpg`. |
| `Media/20260505_174442~2.jpg` | Selected lakefront portrait for Mission and whole-person support. |
| `Media/Shot 5 times and losing her leg, Kalisha Pettus fights to get back to her safe place_ the gym_1080p.mp4` | News slide; CBS News Chicago branding visible in the clip. Reviewed for the founder story. The website now embeds the YouTube URL subsequently supplied by the user. |

Other reviewed photographs: `20260505_160724~2.jpg` (seated in gym), `20260505_174445~2.jpg` (arms raised by lake), `20260505_174720~2.jpg` (outdoor portrait), `20260505_175017~2.jpg` (full-length lakefront portrait), `20260505_175227~2.jpg` (lakefront portrait), `20260505_191315.jpg` (alternate business portrait), and `KHeadshot.jpg` (casual lakefront headshot). These were not copied. `previous examples ` is empty; `.DS_Store` files contain no website content.

Light edits corrected capitalization, punctuation, fragments, and inconsistent organization spelling. The website uses the requested HealNThrive name and the supplied Chicago logo. Omitted age and exact years of experience because the biography is undated. Weekly fitness frequency is presented only as a goal, not a published class schedule. No fabricated impact counts, active programs, partnerships, quotes, contact details, or payment integration remain in published pages.

The overview requests a “501c3 certified” banner but provides no determination letter or clear status statement. That design request alone was not treated as certification evidence, so no certification/tax-deductibility claim was added. The overview's undated shooting statistic was also omitted.

## Production assets

Only the following four assets were added under `public/media/`, and all are referenced by the website. JPEG derivatives were resized without upscaling and encoded as WebP at quality 84; originals remain untouched.

| Production asset | Source | Output |
| --- | --- | --- |
| `founder/founder-workout.webp` | `20260505_160321.jpg` | 1200 px wide, ~344 KB |
| `founder/founder-portrait.webp` | `20260505_191313~2.jpg` | 1000 px wide, ~92 KB |
| `about/founder-lakefront.webp` | `20260505_174442~2.jpg` | 1000 px wide, ~180 KB |
| `branding/heal-thrive-logo.webp` | `Logo.png` | 640 × 640, ~40 KB |

The source MP4 is approximately 160 MiB / 167 MB and 14:32 long. The user subsequently supplied https://www.youtube.com/watch?v=g0a5GG2ph_g and requested autoplay. The website now uses the corresponding `youtube-nocookie.com` embed with muted autoplay, inline playback, native YouTube controls, and looping. No production MP4 or poster remains; the ignored original is untouched. Visitors can enable sound in the player. Browser preferences or YouTube restrictions can still prevent automatic playback. No separate reviewed transcript was supplied.

## Events and placeholders

No event names, dates, locations, flyers, descriptions, or confidently identifiable event photos were found. Photo filenames were not treated as event evidence. `src/data/events.ts` therefore contains an empty typed array; the Events section displays a clear empty state. Reusable cards are ready for confirmed past or upcoming events.

The donation link is centralized at `siteContent.donation.href` and points to `/get-involved#donate`, which explains that online giving is coming soon. No payment is collected. Contact details and the submission backend are pending; the existing form is explicitly labeled as a preview before interaction and after submission. Partner names are “coming soon,” matching the supplied document. No external font files or font specification were supplied; the site uses Georgia and system sans-serif.

## Implementation

Added `src/data/siteContent.ts`, `founder.ts`, and `events.ts`; replaced fictional program data with source-backed focus areas. Added prop-driven `FounderCarousel`, `MissionSection`, `EventsSection` / `EventCard`, and `DonateCTA`. Updated the existing homepage, Hero, About, Our Work/detail pages, Get Involved, Contact, navigation, logo, footer, metadata, global branding styles, and contact preview behavior. Removed the unused Unsplash allowlist. Preserved reusable existing components and the framework/dependencies; no dependencies changed.

Founder carousel: Swiper loop, seven-second autoplay, previous/next, labeled pagination buttons, scoped arrow-key navigation, swipe, hover pause, persistent pause after manual interaction, explicit pause/play, and reduced-motion support. The carousel holds the YouTube slide while it is active. Changing slides unmounts the player; returning remounts it with muted autoplay. The explicit Play slideshow control advances to the photos and resumes rotation. Reduced motion still disables carousel animation/autoplay; video autoplay follows the user’s explicit request. Inactive slides are inert and hidden from assistive technology. Mobile menu supports Escape and focus return; closed menu links are inert. Donation panel is sticky at desktop widths and a full-width block below 1024 px.

## Validation

- `npm run build`: successful production build and static page generation.
- `npm run lint`: passed.
- `npm run dev -- --port 3000`: started successfully at http://localhost:3000 (local server requires sandbox port permission).
- Chrome checks at 1440, 1024, 768, 390, and 320 px: no horizontal overflow; donation CTA switches to full-width below 1024 px.
- Browser interaction checks: seven-second autoplay, pagination, previous/next loop, keyboard navigation, inactive slide accessibility, playback stopping auto-advance, slide navigation pausing video, mobile menu/Escape/focus return, and reduced motion.
- Earlier local-video checks have been superseded by the YouTube embed. Image resolution, mobile touch swipe, navigation, and contact-form preview checks remain applicable.
- Existing routes checked at mobile width; no fictional branding remains and no browser runtime errors occurred.
- Source folder remains ignored by Git; no runtime source-folder references exist in `src/`, `public/`, or Next configuration.

### YouTube follow-up validation

Production build and lint passed after replacing the local player. Chrome displayed the supplied YouTube feature playing automatically without a play-button interaction. Verified muted autoplay/loop parameters, the carousel holding the video slide, player removal when navigating away, autoplay configuration when returning, photo rotation via Play slideshow, and responsive embeds at 390 and 320 px. No application runtime errors occurred.
