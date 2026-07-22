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
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-midnight px-6 py-32 sm:px-14 lg:px-24 xl:px-40 2xl:px-52"
    >
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-blue-600/25 blur-3xl"
        aria-hidden
      />

      <HeroScene />

      <div
        className="pointer-events-none absolute right-16 top-32 hidden items-start gap-2 font-mono text-[10px] uppercase tracking-widest text-white/40 lg:flex xl:right-24 xl:top-36"
        aria-hidden
      >
        <Plus className="h-3 w-3" />
        <span>
          6.9175&deg; S
          <br />
          107.6191&deg; E
        </span>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-start text-left">
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

        <div className="relative mx-auto hidden aspect-[1381/1139] w-full max-w-[520px] sm:block lg:max-w-none">
          <Image
            src={rightHeroImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 700px, 520px"
            className="scale-[1.3] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
