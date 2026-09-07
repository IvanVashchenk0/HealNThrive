export interface FounderSlide {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  mediaType: "image" | "youtube";
  mediaSrc: string;
  alt: string;
  caption: string;
}

// Biography and credentials: FILE_7118.docx. News title: supplied MP4 filename; CBS News Chicago credit visible in the video.
export const founderSlides: FounderSlide[] = [
  {
    id: "story", eyebrow: "01 / Her story", title: "Finding her way back to strength.",
    text: "After surviving gun violence and losing her leg, Kalisha Pettus fought to return to the gym. This news feature shares that part of her journey — the lived experience behind her commitment to helping other survivors heal.",
    mediaType: "youtube", mediaSrc: "https://www.youtube-nocookie.com/embed/g0a5GG2ph_g",
    alt: "News feature about Kalisha Pettus and her return to the gym",
    caption: "CBS News Chicago · Plays muted · Sound available in player",
  },
  {
    id: "strength", eyebrow: "02 / Her strength", title: "Reclaiming strength, one movement at a time.",
    text: "Fitness is part of Kalisha’s own recovery and her vision for supporting others. As a Level 1 CrossFit trainer, she brings scaled, adaptive workouts into a mission centered on physical wellness and long-term healing.",
    mediaType: "image", mediaSrc: "/media/founder/founder-workout.webp",
    alt: "Kalisha hanging from a pull-up bar at the gym, with her prosthetic leg visible",
    caption: "Kalisha in the gym",
  },
  {
    id: "purpose", eyebrow: "03 / Her purpose", title: "Lived experience. A shared purpose.",
    text: "Kalisha founded HealNThrive to build the comprehensive support system she believes survivors deserve. Her experience in fitness, food, and nutrition informs a commitment to physical, mental, and financial healing in Black and Brown communities.",
    mediaType: "image", mediaSrc: "/media/founder/founder-portrait.webp",
    alt: "Kalisha seated in a green blouse and white trousers for a professional portrait",
    caption: "Kalisha Pettus · Founder, HealNThrive",
  },
];
