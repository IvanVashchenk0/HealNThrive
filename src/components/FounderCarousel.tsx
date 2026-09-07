"use client";

import Image from "next/image";
import { VideoEmbed } from "@/components/VideoEmbed";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import type { FounderSlide } from "@/data/founder";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeMotion(callback: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function FounderCarousel({ slides }: { slides: FounderSlide[] }) {
  const swiper = useRef<SwiperInstance | null>(null);
  const region = useRef<HTMLDivElement>(null);
  const reducedMotion = useSyncExternalStore(subscribeMotion, () => window.matchMedia(motionQuery).matches, () => true);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(0);
  const videoActive = slides[active]?.mediaType === "youtube";
  const running = !paused && !reducedMotion && !videoActive;

  useEffect(() => {
    if (running) swiper.current?.autoplay.start();
    else swiper.current?.autoplay.stop();
  }, [running]);

  function stop() {
    swiper.current?.autoplay.stop();
    setPaused(true);
  }
  function navigate(direction: "next" | "prev" | number) {
    stop();
    if (typeof direction === "number") swiper.current?.slideToLoop(direction);
    else if (direction === "next") swiper.current?.slideNext();
    else swiper.current?.slidePrev();
  }

  return (
    <div ref={region} className="founder-carousel" role="region" aria-roledescription="carousel" aria-label="Meet Kalisha Pettus" onFocusCapture={(event) => { if (!(event.target as HTMLElement).closest(".carousel-toggle")) stop(); }}
      onKeyDown={(event) => {
        if ((event.target as HTMLElement).tagName === "IFRAME") return;
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          navigate(event.key === "ArrowRight" ? "next" : "prev");
        }
      }}>
      <Swiper modules={[Autoplay, A11y]} slidesPerView={1} loop={slides.length > 1} speed={reducedMotion ? 0 : 550}
        autoplay={{ delay: 7000, disableOnInteraction: true, pauseOnMouseEnter: true }}
        onSwiper={(instance) => { swiper.current = instance; if (!running) instance.autoplay.stop(); }}
        onSliderFirstMove={stop}
        onSlideChange={(instance) => {
          setActive(instance.realIndex);
        }}
        a11y={{ enabled: true, slideRole: "group", itemRoleDescriptionMessage: "slide", slideLabelMessage: "{{index}} of {{slidesLength}}" }}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <article className="founder-slide" inert={!isActive} aria-hidden={!isActive}>
                <figure className={`founder-media ${slide.mediaType === "youtube" ? "founder-media-video" : ""}`}>
                  {slide.mediaType === "youtube" ? (
                    // Unmount inactive players so hidden slides cannot keep playing.
                    // Returning to this slide starts the muted YouTube video again.
                    isActive ? <VideoEmbed url={slide.mediaSrc} title={slide.alt} autoPlay /> : null
                  ) : <Image src={slide.mediaSrc} alt={slide.alt} fill sizes="(max-width: 767px) 100vw, 55vw" className="object-contain" />}
                  <figcaption>{slide.caption}</figcaption>
                </figure>
                <div className="founder-copy">
                  <p className="eyebrow text-clay">{slide.eyebrow}</p>
                  <h3 className="mt-5 font-display text-4xl leading-[1.12] tracking-tight lg:text-5xl">{slide.title}</h3>
                  <p className="mt-6 text-base leading-8 text-muted lg:text-lg">{slide.text}</p>
                  <a href="/about" className="mt-7 inline-flex min-h-11 items-center gap-3 font-bold text-forest">More about Kalisha <span aria-hidden="true">↗</span></a>
                </div>
              </article>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="carousel-toolbar">
        <div className="flex items-center gap-1" aria-label="Choose a founder slide">
          {slides.map((slide, index) => <button key={slide.id} type="button" className="founder-dot" aria-label={`Go to slide ${index + 1}: ${slide.title}`} aria-current={active === index ? "true" : undefined} onClick={() => navigate(index)}><span /></button>)}
        </div>
        <div className="flex items-center gap-2">
          {!reducedMotion && <button type="button" className="carousel-toggle" onClick={() => {
            // Explicitly starting the slideshow moves past the held video slide.
            if (!running && videoActive) swiper.current?.slideNext();
            setPaused(running);
          }} aria-label={running ? "Pause slideshow" : "Play slideshow"}>{running ? "Pause" : "Play"}<span aria-hidden="true">{running ? " Ⅱ" : " ▷"}</span></button>}
          <button type="button" className="carousel-button" aria-label="Previous founder slide" onClick={() => navigate("prev")}>←</button>
          <button type="button" className="carousel-button" aria-label="Next founder slide" onClick={() => navigate("next")}>→</button>
        </div>
        <span className="sr-only" aria-live={running ? "off" : "polite"}>Slide {active + 1} of {slides.length}</span>
      </div>
    </div>
  );
}
