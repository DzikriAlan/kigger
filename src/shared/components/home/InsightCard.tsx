import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/shared/lib/utils";

interface Props {
  type: string;
  title: string;
  cta: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  grayscaleImage?: boolean;
}

export default function InsightCard({ type, title, cta, href, imageUrl, imageAlt, grayscaleImage }: Props) {
  return (
    <Link
      href={href}
      className="group flex w-[260px] shrink-0 snap-start flex-col gap-4 sm:w-[320px] lg:w-[380px]"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 320px, 260px"
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-105",
            grayscaleImage && "grayscale"
          )}
        />
      </div>

      <div>
        <span className="text-lg font-semibold text-foreground">{type}</span>
        <p className="mt-1 text-base text-white">{title}</p>
        <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-blue">
          {cta}
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
