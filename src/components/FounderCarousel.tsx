"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { VideoEmbed } from "@/components/VideoEmbed";
import type { FounderSlide } from "@/data/founder";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeMotion(callback: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function FounderCarousel({ slides }: { slides: FounderSlide[] }) {
  const swiper = useRef<SwiperInstance | null>(null);
  const reducedMotion = useSyncExternalStore(subscribeMotion, () => window.matchMedia(motionQuery).matches, () => true);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(0);
  const running = !paused && !reducedMotion;
  const videoActive = slides[active]?.mediaType === "youtube";

  useEffect(() => {
    if (running && !videoActive) swiper.current?.autoplay.start();
    else swiper.current?.autoplay.stop();
  }, [running, videoActive, active]);

  const completeVideo = useCallback(() => swiper.current?.slideNext(), []);
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

  function controls(embedded = false) {
    return (
      <div className={`carousel-toolbar ${embedded ? "carousel-toolbar-embedded" : "founder-shell"}`}>
        <div className="flex items-center" aria-label="Choose a founder slide">
          {slides.map((slide, index) => (
            <button key={slide.id} type="button" className="founder-dot" aria-label={`Go to slide ${index + 1}: ${slide.title}`} aria-current={active === index ? "true" : undefined} onClick={() => navigate(index)}><span /></button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {!reducedMotion && <button type="button" className="carousel-toggle" onClick={() => setPaused(running)} aria-label={running ? "Pause slideshow" : "Play slideshow"}>{running ? "Pause slideshow Ⅱ" : "Play slideshow ▷"}</button>}
          <button type="button" className="carousel-button" aria-label="Previous founder slide" onClick={() => navigate("prev")}>←</button>
          <button type="button" className="carousel-button" aria-label="Next founder slide" onClick={() => navigate("next")}>→</button>
        </div>
      </div>
    );
  }

  return (
    <div className="founder-carousel" role="region" aria-roledescription="carousel" aria-label="Meet Kalisha Pettus"
      onFocusCapture={(event) => { if (!(event.target as HTMLElement).closest(".carousel-toggle")) stop(); }}
      onKeyDown={(event) => {
        if ((event.target as HTMLElement).tagName === "IFRAME") return;
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          navigate(event.key === "ArrowRight" ? "next" : "prev");
        }
      }}>
      <Swiper modules={[Autoplay, A11y]} slidesPerView={1} loop={slides.length > 1} speed={reducedMotion ? 0 : 550} autoHeight
        autoplay={{ delay: 8000, disableOnInteraction: true, pauseOnMouseEnter: true }}
        onSwiper={(instance) => { swiper.current = instance; if (!running || videoActive) instance.autoplay.stop(); }}
        onSliderFirstMove={stop}
        onSlideChange={(instance) => {
          if (slides[instance.realIndex]?.mediaType === "youtube") instance.autoplay.stop();
          setActive(instance.realIndex);
        }}
        a11y={{ enabled: true, slideRole: "group", itemRoleDescriptionMessage: "slide", slideLabelMessage: "{{index}} of {{slidesLength}}" }}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <article className={`founder-slide founder-slide-${slide.mediaType}`} inert={!isActive} aria-hidden={!isActive}>
                <figure aria-label={slide.caption} className="founder-media">
                  {slide.mediaType === "youtube" ? (
                    isActive ? <VideoEmbed url={slide.mediaSrc} title={slide.alt} autoPlay active={isActive} layout="viewport"
                      playbackDurationSeconds={slide.playbackDurationSeconds} countdownEnabled={running}
                      onPlaybackComplete={completeVideo}>{controls(true)}</VideoEmbed> : null
                  ) : <Image src={slide.mediaSrc} alt={slide.alt} width={slide.width} height={slide.height}
                    sizes="(max-width: 1023px) 100vw, 720px" className="founder-photo"
                    onLoad={() => swiper.current?.updateAutoHeight()} />}
                </figure>
                <div className={`founder-copy ${slide.mediaType === "youtube" ? "founder-shell" : ""}`}>
                  <p className="eyebrow text-clay">{slide.eyebrow}</p>
                  <h2 className={`font-display leading-[1.12] tracking-tight ${slide.mediaType === "image" ? "mt-5 text-4xl lg:text-5xl" : "mt-4 text-3xl lg:text-4xl"}`}>{slide.title}</h2>
                  <p className={`text-base text-muted ${slide.mediaType === "image" ? "mt-6 leading-8 lg:text-lg" : "mt-5 leading-7"}`}>{slide.text}</p>
                  <a href="/about" className={`inline-flex min-h-11 items-center gap-3 font-bold text-forest ${slide.mediaType === "image" ? "mt-7" : "mt-5"}`}>More about Kalisha <span aria-hidden="true">↗</span></a>
                  <p className="founder-credit">{slide.caption}</p>
                </div>
              </article>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {!videoActive && controls()}
      <span className="sr-only" aria-live={running ? "off" : "polite"}>Slide {active + 1} of {slides.length}</span>
    </div>
  );
}
