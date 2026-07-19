"use client";

import { useState } from "react";

import PrinciplesAccordionItem from "@/shared/components/home/PrinciplesAccordionItem";
import PrinciplesShowcase from "@/shared/components/home/PrinciplesShowcase";

const principles = [
  {
    id: "challenge-the-status-quo",
    title: "Challenge the status quo",
    description:
      "From launching game-changing products and services to redefining business as usual, our work bridges the gap between what could be and what should be.",
  },
  {
    id: "fuse-art-and-science",
    title: "Fuse art & science to make ideas real",
    description:
      "We pair rigorous strategy and engineering with craft and intuition, turning ambitious ideas into products people can actually touch, use, and trust.",
  },
  {
    id: "create-lasting-impact",
    title: "Create a lasting impact at global scale",
    description:
      "We design for durability, not novelty, building experiences and systems that keep delivering value for our clients and their customers long after launch.",
  },
  {
    id: "regenerate-systems",
    title: "Regenerate systems & communities",
    description:
      "Our work looks beyond the brief to the people and places it touches, aiming to leave the systems and communities we work within better than we found them.",
  },
];

export default function PrinciplesSection() {
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
          Our principles
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
