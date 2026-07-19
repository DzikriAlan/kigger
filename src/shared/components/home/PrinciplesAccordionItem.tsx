import { Minus, Plus } from "lucide-react";

import { cn } from "@/shared/lib/utils";

interface Props {
  title: string;
  description: string;
  isOpen: boolean;
  onToggleItem: () => void;
}

export default function PrinciplesAccordionItem({ title, description, isOpen, onToggleItem }: Props) {
  return (
    <div className="border-b border-divider py-6 first:pt-0 lg:py-7">
      <button
        type="button"
        onClick={onToggleItem}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <span className="text-xl font-semibold text-foreground sm:text-2xl">{title}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center text-foreground">
          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-out",
          isOpen ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-xl text-base text-foreground/70">{description}</p>
        </div>
      </div>
    </div>
  );
}
