import type { Program } from "@/types/program";

// Builder.io integration point: replace this module with a typed content fetcher.
export const programs: Program[] = [
  {
    slug: "youth-education",
    title: "Youth Education",
    shortDescription: "Opening doors through tutoring, mentoring, and tools that help young people thrive.",
    fullDescription: [
      "Every young person deserves a place to feel supported, curious, and capable. Our neighborhood learning hubs pair students with caring mentors and practical resources throughout the school year.",
      "From small-group tutoring to creative workshops and career exploration, the program is shaped with families, schools, and local leaders. Together, we help students build confidence that carries far beyond the classroom.",
    ],
    category: "Education",
    coverImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85",
    coverAlt: "Students learning together in a bright classroom",
    featured: true,
    displayOrder: 1,
    mediaType: "image",
    gallery: [
      { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80", alt: "Student reading with a mentor" },
      { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80", alt: "Young learner smiling in class" },
      { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80", alt: "Young people collaborating outdoors" },
    ],
    stat: { value: "2,400", label: "students supported" },
  },
  {
    slug: "community-health",
    title: "Community Health",
    shortDescription: "Bringing trusted preventive care and wellness resources closer to home.",
    fullDescription: [
      "Healthy communities begin with care people can reach and trust. Our mobile wellness days connect neighbors with screenings, health education, and referrals in familiar community spaces.",
      "Local clinicians and trained volunteers work side by side, listening first and reducing barriers to follow-up care. Each event is designed around the priorities residents identify.",
    ],
    category: "Health & Wellness",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85",
    coverAlt: "Healthcare professional speaking with a community member",
    featured: true,
    displayOrder: 2,
    mediaType: "video",
    videoUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ",
    gallery: [
      { src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80", alt: "Nurse caring for a patient" },
      { src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80", alt: "Community health checkup" },
    ],
    stat: { value: "6,800", label: "wellness visits" },
  },
  {
    slug: "food-assistance",
    title: "Food Assistance",
    shortDescription: "Making fresh, nourishing food accessible with dignity and choice.",
    fullDescription: [
      "Our community markets bring fresh produce, pantry staples, and household essentials to neighborhoods where access is limited. Families choose what works for them in a welcoming, market-style setting.",
      "We partner with growers, grocers, and resident volunteers to rescue quality food and keep shelves stocked. Nutrition workshops and shared meals turn each market into a place of connection, too.",
    ],
    category: "Food Security",
    coverImage: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1800&q=85",
    coverAlt: "Volunteers organizing fresh food for community distribution",
    featured: true,
    displayOrder: 3,
    mediaType: "image",
    gallery: [
      { src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80", alt: "Colorful fresh produce at a market" },
      { src: "https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?auto=format&fit=crop&w=1200&q=80", alt: "Hands passing a donation box" },
    ],
    stat: { value: "31,000", label: "meals shared" },
  },
  {
    slug: "housing-support",
    title: "Housing Support",
    shortDescription: "Helping neighbors find stable housing and a stronger path forward.",
    fullDescription: [
      "A stable home creates room for every other part of life to grow. Our housing navigators help individuals and families understand options, complete applications, and connect with trusted local services.",
      "Flexible support helps address the practical hurdles that can put housing at risk. We stay alongside each household as they move toward lasting stability.",
    ],
    category: "Housing Stability",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
    coverAlt: "Welcoming residential buildings in a growing neighborhood",
    featured: true,
    displayOrder: 4,
    mediaType: "image",
    gallery: [
      { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80", alt: "Keys held in front of a new home" },
      { src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80", alt: "A welcoming family home" },
    ],
    stat: { value: "420", label: "households stabilized" },
  },
  {
    slug: "volunteer-outreach",
    title: "Volunteer Outreach",
    shortDescription: "Connecting people, talents, and local ideas to create lasting change together.",
    fullDescription: [
      "Volunteers bring HopeBridge to life. Whether they offer an afternoon, professional expertise, or ongoing mentorship, every person adds something meaningful to our shared work.",
      "We make it easy to find a role that fits your interests and schedule. Team days, neighborhood events, and skills-based projects all begin with a simple orientation and a warm welcome.",
    ],
    category: "Community",
    coverImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1800&q=85",
    coverAlt: "A diverse volunteer team working together outdoors",
    featured: true,
    displayOrder: 5,
    mediaType: "image",
    gallery: [
      { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80", alt: "Volunteers gathering for a community project" },
      { src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80", alt: "Children and volunteers spending time together" },
    ],
    stat: { value: "800+", label: "active volunteers" },
  },
];

export const getProgramBySlug = (slug: string) => programs.find((program) => program.slug === slug);

export const featuredPrograms = [...programs]
  .filter((program) => program.featured)
  .sort((a, b) => a.displayOrder - b.displayOrder);
