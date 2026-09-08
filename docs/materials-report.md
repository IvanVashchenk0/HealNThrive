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

Other reviewed photographs: `20260505_160724~2.jpg` (seated in gym), `20260505_174445~2.jpg` (arms raised by lake), `20260505_174720~2.jpg` (outdoor portrait), `20260505_175017~2.jpg` (full-length lakefront portrait), `20260505_175227~2.jpg` (lakefront portrait), `20260505_191315.jpg` (alternate business portrait), and `KHeadshot.jpg` (casual lakefront headshot). The headshot was subsequently supplied again and selected for the final founder slide; the other alternatives were not copied. `previous examples ` is empty; `.DS_Store` files contain no website content.

Light edits corrected capitalization, punctuation, fragments, and inconsistent organization spelling. The website uses the requested Heal & Thrive Chicago name and the supplied Chicago logo. Omitted age and exact years of experience because the biography is undated. Weekly fitness frequency is presented only as a goal, not a published class schedule. No fabricated impact counts, active programs, partnerships, quotes, contact details, or payment integration remain in published pages.

The latest direct user request supplies the banner wording “501c3 certified”, “founder led”, and “community healing”. The banner displays this organization-provided copy with lightly corrected formatting; it is not an independent status verification. No donation tax-deductibility claim has been added. The overview's undated shooting statistic remains omitted.

## Production assets

The following five assets were added under `public/media/`, and all are referenced by the website. JPEG derivatives were resized without upscaling and encoded as WebP at quality 84; originals remain untouched.

| Production asset | Source | Output |
| --- | --- | --- |
| `founder/founder-workout.webp` | `20260505_160321.jpg` | 1200 px wide, ~344 KB |
| `founder/founder-portrait.webp` | `20260505_191313~2.jpg` | 1000 px wide, ~92 KB |
| `about/founder-lakefront.webp` | `20260505_174442~2.jpg` | 1000 px wide, ~180 KB |
| `founder/founder-headshot.webp` | User-supplied `Downloads/KHeadshot.jpg` | 1224 × 1632; WebP quality 88, used on the final founder slide |
| `branding/heal-thrive-logo.webp` | `Logo.png` | 640 × 640, ~40 KB |

The source MP4 is approximately 160 MiB / 167 MB and 14:32 long. The user subsequently supplied https://www.youtube.com/watch?v=g0a5GG2ph_g and requested autoplay. The website now uses the corresponding YouTube embed with muted autoplay, inline playback, native YouTube controls, and looping. No production MP4 or poster remains; the ignored original is untouched. Visitors can enable sound in the player. Browser preferences or YouTube restrictions can still prevent automatic playback. No separate reviewed transcript was supplied.

## Events and placeholders

No event names, dates, locations, flyers, descriptions, or confidently identifiable event photos were found. Photo filenames were not treated as event evidence. `src/data/events.ts` therefore contains an empty typed array; the Events section displays a clear empty state. Reusable cards are ready for confirmed past or upcoming events.

The donation link is centralized at `siteContent.donation.href` and now points to the user-supplied GoFundMe campaign. All donation links use it; the old coming-soon message is removed. The site itself collects no payment. Contact now uses a direct email CTA with the user-requested placeholder address centralized at `siteContent.contact.email`; the form and simulated submission behavior have been removed. No contact backend is used. Partner names are “coming soon,” matching the supplied document. No external font files or font specification were supplied; the site uses Georgia and system sans-serif.

## Implementation

Added `src/data/siteContent.ts`, `founder.ts`, and `events.ts`; replaced fictional program data with source-backed focus areas. Added prop-driven `FounderCarousel`, `MissionSection`, `EventsSection` / `EventCard`, and `DonateCTA`. Updated the existing homepage, Hero, About, Our Work/detail pages, Get Involved, Contact, navigation, logo, footer, metadata, global branding styles, and contact preview behavior. Removed the unused Unsplash allowlist. Preserved reusable existing components and the framework/dependencies; no dependencies changed.

Founder carousel: the homepage now opens with the founder heading/carousel, then the preserved “Turning survival into purpose” hero. The video uses a full-viewport-width desktop layout (1200px breakpoint), with its 16:9 iframe enlarged proportionally to cover the available height beneath navigation. Desktop edge cropping is intentional; tablet/mobile playback retains the entire 16:9 frame. There is no added media padding or artificial video minimum height. Original footage may include its own letterboxing. Description text follows the video.

Photo slides restore the earlier viewport-wide text-left/photo-right layout. Desktop photo width is 75% of `clamp(640px, calc(100svh - 5.25rem), 960px)`, with natural image height and no cropping or media padding. The opaque text panel restores the earlier generous spacing and larger headings. Full-width photographs stack above text below 1024px, keeping hands and the prosthetic leg visible. Swiper active-slide automatic height remains enabled; video layout and playback are unchanged by this photo restoration.

YouTube’s IFrame API supplies playback state. The video advances after ten accumulated playing seconds, excluding buffering, pause, disabled rotation, and hidden-tab intervals. Photo rotation remains eight seconds. Explicit carousel pause/keyboard interaction and reduced-motion behavior remain available. Video pause/mute and carousel controls are accessible independently of potentially cropped YouTube controls. Returning to the video resets its player/timer at 6:40; inactive players and callbacks are cleaned up. Errors and blocked autoplay have retry/play and YouTube-link fallbacks. No dependency was added.

`src/lib/playbackClock.ts` has focused unit regression coverage for loading delays, suspended intervals, single completion, explicit pause at the deadline, and a fresh allowance for each video visit.

`StrongStepsSection` and `src/data/strongSteps.ts` summarize the newly supplied `Downloads/Strong steps.docx` on the homepage below the relocated hero and on Our Work. Content includes the mission and philosophy, Foundations and Progress levels, and the monthly clinic’s 10/10/30/10-minute structure. The document was treated as source content; exercise instructions were not executed or expanded into new advice. No dates, venue, price, or enrollment availability were invented.

## Validation

- `npm run build`: successful production build and static page generation.
- `npm run lint`: passed.
- `npm run dev -- --port 3000`: started successfully at http://localhost:3000 (local server requires sandbox port permission).
- Chrome checks at 1440, 1024, 768, 390, and 320 px: no horizontal overflow; donation CTA switches to full-width below 1024 px.
- Browser interaction checks: seven-second autoplay, pagination, previous/next loop, keyboard navigation, inactive slide accessibility, playback stopping auto-advance, slide navigation pausing video, mobile menu/Escape/focus return, and reduced motion.
- Earlier local-video checks have been superseded by the YouTube embed. Image resolution, mobile touch swipe, navigation, and contact-form preview checks remain applicable.
- Existing routes checked at mobile width; no fictional branding remains and no browser runtime errors occurred.
- Source folder remains ignored by Git; no runtime source-folder references exist in `src/`, `public/`, or Next configuration.

### Earlier YouTube follow-up validation

Production build and lint passed after replacing the local player. Chrome displayed the supplied YouTube feature playing automatically without a play-button interaction. Verified muted autoplay/loop parameters, the carousel holding the video slide, player removal when navigating away, autoplay configuration when returning, photo rotation via Play slideshow, and responsive embeds at 390 and 320 px. No application runtime errors occurred.

### Earlier portrait redesign validation

- Homepage name, shared branding, and all donation destinations checked in Chrome; the giving page no longer has a placeholder donation link.
- YouTube iframe has `start=400` and muted autoplay. The full automatic video → workout → headshot → video carousel cycle passed, as did the pause control.
- Desktop photos checked at 1440 and 1024 px; tablet/mobile checked at 768, 390, and 320 px. Each image element matches its source 3:4 ratio with zero padding, preserving the whole photograph and prosthetic leg. No horizontal overflow. A tablet crop issue was corrected by stacking photo and copy below 1024 px.
- Banner animation, pause control, static reduced-motion rendering, and Strong Steps source content checked. About, Our Work, Get Involved, and Contact checked at mobile width with updated branding and no application runtime errors.
- Final lint and production build passed after the breakpoint correction.

### Founder-first fullscreen implementation validation

- Homepage order and heading hierarchy verified: founder (`h1`), retained hero (`h2`) with both buttons, Strong Steps, then subsequent content.
- Live YouTube API test: playback began automatically at 6:40 and advanced after ten playing seconds despite the pointer hovering over the video. Photo rotation remained eight seconds; returning recreated the player at 6:40.
- Browser measurements at 1920, 1440, 1200, 1024, 768, 390, and 320 px confirmed the `min(94vw, 1500px)` shell, desktop viewport coverage, exact mobile/tablet 16:9 video geometry, original portrait proportions, responsive image height caps, and no horizontal overflow.
- Controlled YouTube test-double checks verified loading/blocked autoplay, retry cleanup, buffering and hidden-tab exclusion, pause/resume, exactly one advancement, and ignored late events from destroyed players. Sound, video pause, reduced motion, and keyboard navigation passed.
- Landscape-phone layout and 200% text zoom passed, including visible controls within the viewport. No application runtime exceptions occurred.
- All five playback-clock unit regressions passed; lint and production build passed. No dependency changes or GitHub push were made.

### Photo-slide restoration validation

- Restored full-width text-left/photo-right slides for workout and headshot. Browser checks at 1920, 1440, 1024, 768, 390, and 320 px, plus 900 × 390 landscape, confirmed uncropped 3:4 photographs, no media padding, correct stacking below 1024 px, and no horizontal overflow at normal text size.
- Active-slide heights, manual navigation, eight-second photo rotation, and automatic return to the video passed. The first video's desktop coverage and smaller-screen 16:9 dimensions remain unchanged; playback implementation was not modified.
- At 200% text size, photo content remained within the viewport and Swiper expanded to fit. An existing desktop-navigation overflow at 1024 px was observed under this text-size override; navigation was left unchanged.
- Lint, production build, all five playback-clock tests, and browser runtime checks passed. Changes remain local with no GitHub push.
