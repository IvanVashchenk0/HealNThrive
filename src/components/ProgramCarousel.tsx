"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import type { Program } from "@/types/program";

export function ProgramCarousel({ items }: { items: Program[] }) {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <div className="program-carousel relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        loop
        speed={750}
        spaceBetween={20}
        autoplay={reducedMotion ? false : { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true, el: ".program-pagination" }}
        a11y={{ enabled: true }}
        breakpoints={{ 768: { spaceBetween: 28 } }}
      >
        {items.map((program, index) => (
          <SwiperSlide key={program.slug}>
            <article className="group relative isolate min-h-[34rem] overflow-hidden rounded-[1.75rem] bg-forest sm:min-h-[39rem]">
              <Image
                src={program.coverImage}
                alt={program.coverAlt}
                fill
                priority={index === 0}
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,39,30,0.96)_0%,rgba(12,39,30,0.78)_42%,rgba(12,39,30,0.16)_78%)]" />
              <Link href={`/programs/${program.slug}`} className="absolute inset-0 z-10 focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-clay" aria-label={`Learn more about ${program.title}`} />
              <div className="relative flex min-h-[34rem] max-w-xl flex-col justify-end p-7 text-white sm:min-h-[39rem] sm:justify-center sm:p-14 lg:p-16">
                <span className="w-fit rounded-full bg-white/12 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-sage backdrop-blur-sm">{program.category}</span>
                <h3 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-6xl">{program.title}</h3>
                <p className="mt-5 max-w-lg text-lg leading-8 text-white/75">{program.shortDescription}</p>
                <div className="mt-8 flex items-center gap-6">
                  <span className="button button-light">Learn More <span aria-hidden="true">→</span></span>
                  {program.mediaType === "video" && <span className="flex items-center gap-2 text-sm font-bold text-white/80"><span className="grid size-9 place-items-center rounded-full border border-white/35" aria-hidden="true">▶</span> Includes video</span>}
                </div>
              </div>
              {program.stat && <div className="absolute bottom-7 right-7 hidden rounded-xl bg-cream/95 px-5 py-4 text-forest shadow-xl sm:block">
                <strong className="block font-display text-2xl">{program.stat.value}</strong>
                <span className="text-xs font-bold uppercase tracking-[0.12em]">{program.stat.label}</span>
              </div>}
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 flex items-center justify-between">
        <div className="program-pagination !static flex !w-auto items-center gap-2" aria-label="Choose a program slide" />
        <div className="flex gap-2">
          <button type="button" onClick={() => swiperRef.current?.slidePrev()} className="carousel-button" aria-label="Previous program"><span aria-hidden="true">←</span></button>
          <button type="button" onClick={() => swiperRef.current?.slideNext()} className="carousel-button" aria-label="Next program"><span aria-hidden="true">→</span></button>
        </div>
      </div>
    </div>
  );
}
