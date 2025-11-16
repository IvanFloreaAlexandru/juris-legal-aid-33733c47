interface HeroSectionProps {
  backgroundImage: string;
  category?: string;
  categoryEn?: string;
  title: string;
  titleEn?: string;
  subtitle?: string;
  subtitleEn?: string;
  language?: string;
}

export default function HeroSection({
  backgroundImage,
  category,
  categoryEn,
  title,
  titleEn,
  subtitle,
  subtitleEn,
  language = "ro",
}: HeroSectionProps) {
  const displayTitle = language === "en" && titleEn ? titleEn : title;
  const displaySubtitle =
    language === "en" && subtitleEn ? subtitleEn : subtitle;
  const displayCategory =
    language === "en" && categoryEn ? categoryEn : category;

  return (
    <section className="relative bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        {displayCategory && (
          <p className="text-sm uppercase tracking-wider mb-4 opacity-90">
            / {displayCategory}
          </p>
        )}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
          {displayTitle}
        </h1>
        {displaySubtitle && (
          <p className="text-lg md:text-xl mt-4 opacity-90 max-w-3xl">
            {displaySubtitle}
          </p>
        )}
      </div>
    </section>
  );
}
