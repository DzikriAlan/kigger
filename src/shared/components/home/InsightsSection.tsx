import InsightCard from "@/shared/components/home/InsightCard";

const insights = [
  {
    id: "brand-identity-best-feature",
    type: "Article",
    title: "Why Brand Identity Is Your Best Product Feature",
    cta: "Read",
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Abstract colorful gradient bubbles",
  },
  {
    id: "building-fullstack-products-that-scale",
    type: "Podcast",
    title: "Ep.01 – Building Fullstack Products That Scale",
    cta: "Listen",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of a podcast guest",
    grayscaleImage: true,
  },
  {
    id: "the-stack-behind-our-builds",
    type: "Article",
    title: "The Stack Behind Our Builds",
    cta: "Read",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Retro design objects on a desk",
  },
  {
    id: "designing-ui-that-converts",
    type: "Case Study",
    title: "Designing UI That Converts",
    cta: "Read",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Curated retail store interior",
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="border-t border-divider bg-midnight py-20 lg:py-28">
      <div className="px-6 sm:px-14 lg:px-24 xl:px-40 2xl:px-52">
        <h2 className="font-serif text-5xl text-foreground sm:text-6xl lg:text-7xl" style={{ fontWeight: 260 }}>
          Latest insights
        </h2>
        <p className="mt-6 max-w-xl text-base text-white">
          Notes from our team on brand identity, product engineering, and design — straight from our studio in
          Bandung.
        </p>
      </div>

      <div className="no-scrollbar mt-12 flex gap-6 overflow-x-auto scroll-smooth pl-6 pr-6 snap-x snap-mandatory sm:gap-8 sm:pl-14 lg:pl-24 lg:pr-0 xl:pl-40 2xl:pl-52">
        {insights.map((insight) => (
          <InsightCard
            key={insight.id}
            type={insight.type}
            title={insight.title}
            cta={insight.cta}
            href={`#${insight.id}`}
            imageUrl={insight.imageUrl}
            imageAlt={insight.imageAlt}
            grayscaleImage={insight.grayscaleImage}
          />
        ))}
        <div className="w-px shrink-0" aria-hidden />
      </div>
    </section>
  );
}
