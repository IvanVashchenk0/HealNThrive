export interface Program {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  category: string;
  coverImage: string;
  coverAlt: string;
  featured: boolean;
  displayOrder: number;
  mediaType: "image" | "video";
  videoUrl?: string;
  gallery?: Array<{ src: string; alt: string }>;
  stat: { value: string; label: string };
}
