"use client";

import { useState } from "react";

import PrinciplesAccordionItem from "@/shared/components/home/PrinciplesAccordionItem";
import PrinciplesShowcase from "@/shared/components/home/PrinciplesShowcase";
import { useTranslations } from "@/shared/i18n";

export default function PrinciplesSection() {
  const { t } = useTranslations();
  const principles = Object.entries(t.principles.items).map(([id, principle]) => ({ id, ...principle }));
  const [openId, setOpenId] = useState(principles[0].id);

  const handleToggleItem = (id: string) => {
    setOpenId((current) => (current === id ? "" : id));
  };

  return (
    <section id="culture" className="bg-midnight px-6 py-20 sm:px-14 lg:px-24 lg:py-28 xl:px-40 2xl:px-52">
      <div className="mx-auto max-w-8xl">
        <h2
          className="font-serif text-5xl text-foreground sm:text-6xl lg:text-7xl"
          style={{ fontWeight: 260 }}
        >
          {t.principles.heading}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            {principles.map((principle) => (
              <PrinciplesAccordionItem
                key={principle.id}
                title={principle.title}
                description={principle.description}
                isOpen={openId === principle.id}
                onToggleItem={() => handleToggleItem(principle.id)}
              />
            ))}
          </div>

          <PrinciplesShowcase />
        </div>
      </div>
    </section>
  );
}
