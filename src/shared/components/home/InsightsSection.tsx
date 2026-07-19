import InsightCard from "@/shared/components/home/InsightCard";

const insights = [
  {
    id: "agentic-marketing-organization",
    type: "Article",
    title: "Building the Agentic Marketing Organization",
    cta: "Read",
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Abstract colorful gradient bubbles",
  },
  {
    id: "co-evolving-with-physical-ai",
    type: "Podcast",
    title: "Ep.60 – Co-evolving with Physical AI",
    cta: "Listen",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Portrait of a podcast guest",
    grayscaleImage: true,
  },
  {
    id: "live-from-milan-design-week",
    type: "Podcast",
    title: "Ep.59 – Live from Milan Design Week",
    cta: "Listen",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Retro design objects on a desk",
  },
  {
    id: "future-of-retail-experience",
    type: "Report",
    title: "The Future of Retail Experience",
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
          Explore research, provocations and perspectives on trends across technology, creativity, business and
          culture.
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
