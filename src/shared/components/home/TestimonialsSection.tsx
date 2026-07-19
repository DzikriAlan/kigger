"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_INTERVAL_MS = 6000;

const testimonials = [
  {
    id: "adrian-kessler",
    name: "Adrian Kessler",
    role: "VP of Product, Meridian Health",
    quote:
      "baturion didn't just hand us a deck of concepts — they stayed in the trenches with our team through engineering, launch, and the messy parts in between. The result is a product our patients actually trust.",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "priya-anand",
    name: "Priya Anand",
    role: "Head of Design, Lumen Retail",
    quote:
      "What stood out was how quickly baturion's team understood our customers better than we did. Every workshop pushed us to challenge assumptions we didn't even know we were holding onto.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "sofia-marchetti",
    name: "Sofia Marchetti",
    role: "Director of Innovation, Nova Mobility",
    quote:
      "This wasn't a typical agency engagement. baturion embedded with our engineers, challenged our roadmap, and left behind a team that's genuinely more capable than before we started.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleShowTestimonial = (index: number) => setActiveIndex(index);

  const handlePreviousTestimonial = () => {
    setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setActiveIndex((index) => (index + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(handleNextTestimonial, AUTOPLAY_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const testimonial = testimonials[activeIndex];

  return (
    <section className="border-t border-divider bg-midnight px-6 py-20 sm:px-14 lg:px-24 lg:py-28 xl:px-40 2xl:px-52">
      <div className="mx-auto max-w-4xl">
        <span className="block font-serif text-5xl text-blue" aria-hidden>
          &ldquo;
        </span>
        <p className="whitespace-pre-line text-2xl !font-normal leading-relaxed text-foreground sm:text-3xl">
          {testimonial.quote}
        </p>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-divider">
              <Image src={testimonial.avatarUrl} alt={testimonial.name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-xs text-foreground/60">{testimonial.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show testimonial from ${item.name}`}
                  onClick={() => handleShowTestimonial(index)}
                  className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? "bg-blue" : "bg-divider"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handlePreviousTestimonial}
                aria-label="Previous testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-divider text-foreground transition-colors duration-300 hover:border-foreground/60"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNextTestimonial}
                aria-label="Next testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-divider text-foreground transition-colors duration-300 hover:border-foreground/60"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
