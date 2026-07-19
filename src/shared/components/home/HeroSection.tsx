import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import rightHeroImage from "@/shared/images/righthero.png";
import { useTranslations } from "@/shared/i18n";

const HeroScene = dynamic(() => import("@/shared/components/home/HeroScene"), { ssr: false });

export default function HeroSection() {
  const { t } = useTranslations();

  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-midnight px-6 py-20 sm:px-14 lg:px-24 xl:px-40 2xl:px-52"
    >
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-blue-600/25 blur-3xl"
        aria-hidden
      />

      <HeroScene />

      <div
        className="pointer-events-none absolute right-0 bottom-2 aspect-[1156/1024] w-[150px] overflow-hidden opacity-90 sm:right-4 sm:bottom-4 sm:w-[230px] sm:opacity-100 lg:right-6 lg:top-1/2 lg:bottom-auto lg:w-[400px] lg:-translate-y-1/2 lg:overflow-visible xl:right-10 xl:w-[540px] 2xl:right-14 2xl:w-[640px]"
        style={{ mixBlendMode: "screen" }}
        aria-hidden
      >
        <Image
          src={rightHeroImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 640px, 230px"
          className="scale-[2.2] object-contain sm:scale-[1.8] lg:scale-100"
          priority
        />
      </div>

      <div
        className="pointer-events-none absolute left-16 top-1/2 hidden -translate-y-1/2 flex-col gap-2 lg:flex xl:left-24"
        aria-hidden
      >
        <svg width="140" height="180" viewBox="0 0 140 180" className="text-wireframe-line/30">
          <circle cx="8" cy="20" r="2" fill="currentColor" />
          <circle cx="60" cy="60" r="2" fill="currentColor" />
          <circle cx="20" cy="120" r="2" fill="currentColor" />
          <circle cx="90" cy="150" r="2" fill="currentColor" />
          <line x1="8" y1="20" x2="60" y2="60" stroke="currentColor" strokeWidth="1" />
          <line x1="60" y1="60" x2="20" y2="120" stroke="currentColor" strokeWidth="1" />
          <line x1="20" y1="120" x2="90" y2="150" stroke="currentColor" strokeWidth="1" />
        </svg>
        <span className="font-mono text-[10px] font-medium uppercase leading-relaxed tracking-widest text-white/40">
          {t.hero.eyebrowLine1}
          <br />
          {t.hero.eyebrowLine2}
          <br />
          {t.hero.eyebrowLine3}
        </span>
      </div>

      <div
        className="pointer-events-none absolute right-16 top-20 hidden items-start gap-2 font-mono text-[10px] uppercase tracking-widest text-white/40 lg:flex xl:right-24"
        aria-hidden
      >
        <Plus className="h-3 w-3" />
        <span>
          6.9175&deg; S
          <br />
          107.6191&deg; E
        </span>
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-start text-left sm:items-center sm:text-center">
        <h1
          className="font-display text-6xl text-foreground sm:text-7xl lg:text-8xl"
          style={{ fontWeight: 500 }}
        >
          {t.hero.titleLine1}
          <br />
          {t.hero.titleLine2Prefix ? `${t.hero.titleLine2Prefix} ` : ""}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text italic text-transparent">
            {t.hero.titleHighlight}
          </span>
          {t.hero.titleLine2Suffix ? ` ${t.hero.titleLine2Suffix}` : ""}
        </h1>
        <p className="mt-6 max-w-lg text-base text-white/70 sm:text-lg" style={{ fontWeight: 200 }}>
          {t.hero.description}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:opacity-90"
            style={{ fontWeight: 200 }}
          >
            <Link href="#our-team" className="inline-flex items-center gap-2">
              {t.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full" style={{ fontWeight: 200 }}>
            <Link href="#culture" className="inline-flex items-center gap-2">
              {t.hero.secondaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
