interface SectionHeadingProps {
  as?: "h1" | "h2";
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({ as: Heading = "h2", eyebrow, title, description, align = "left", light = false }: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && <p className={`eyebrow ${light ? "text-sage" : "text-clay"}`}>{eyebrow}</p>}
      <Heading className={`mt-3 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl ${light ? "text-white" : "text-ink"}`}>{title}</Heading>
      {description && <p className={`mt-5 text-lg leading-8 ${light ? "text-white/70" : "text-muted"}`}>{description}</p>}
    </div>
  );
}
