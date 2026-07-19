"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useTranslations } from "@/shared/i18n";
import lspImage from "@/shared/images/lsp.png";
import costControlImage from "@/shared/images/costcontrol.png";

const AUTOPLAY_INTERVAL_MS = 6000;

const portfolioImages: Record<string, { src: StaticImageData; alt: string }> = {
  "lsp-smkn2-cikarang-barat": { src: lspImage, alt: "LSP SMKN 2 Cikarang Barat certification dashboard" },
  "cost-control-akkarya-jaya": { src: costControlImage, alt: "Cost Control dashboard for PT Akkarya Jaya Pratama" },
};

export default function PortfolioSection() {
  const { t } = useTranslations();
  const projects = Object.entries(t.portfolio.items).map(([id, project]) => ({
    id,
    ...project,
    ...portfolioImages[id],
  }));
  const [activeIndex, setActiveIndex] = useState(0);

  const handleShowProject = (index: number) => setActiveIndex(index);

  useEffect(() => {
    if (projects.length < 2) return;
    const timer = setTimeout(() => {
      setActiveIndex((index) => (index + 1) % projects.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [activeIndex, projects.length]);

  const project = projects[activeIndex];

  return (
    <section id="portfolio" className="border-t border-divider bg-midnight">
      <div className="no-scrollbar relative w-full overflow-x-auto overflow-y-hidden bg-black sm:overflow-x-visible">
        {projects.map((item, index) => (
          <div
            key={item.id}
            className={`transition-opacity duration-700 ease-out ${
              index === activeIndex ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.src.width}
              height={item.src.height}
              priority={index === 0}
              className="h-[42vh] w-auto max-w-none sm:h-auto sm:w-full sm:max-w-full"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8 px-6 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-14 sm:py-12 lg:px-24 lg:py-16 xl:px-40 2xl:px-52">
        {projects.length > 1 && (
          <div className="flex gap-3">
            {projects.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={item.title}
                onClick={() => handleShowProject(index)}
                className="h-[3px] w-14 overflow-hidden rounded-full bg-white/25"
              >
                <span
                  className="block h-full origin-left rounded-full bg-white transition-transform duration-500 ease-out"
                  style={{ transform: index === activeIndex ? "scaleX(1)" : "scaleX(0)" }}
                />
              </button>
            ))}
          </div>
        )}

        <div className="max-w-md sm:ml-auto sm:text-right">
          <h3 className="font-serif text-3xl text-foreground sm:text-4xl" style={{ fontWeight: 400 }}>
            {project.title}
          </h3>
          <p className="mt-3 text-sm text-white/70">{project.description}</p>
          <Link
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 font-serif text-base text-foreground transition-colors duration-300 hover:text-blue"
            style={{ fontWeight: 500 }}
          >
            {project.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
