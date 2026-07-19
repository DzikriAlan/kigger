import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const HeroScene = dynamic(() => import("@/shared/components/home/HeroScene"), { ssr: false });

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-midnight px-6 py-24 sm:px-14 lg:px-24 xl:px-40 2xl:px-52"
    >
      <HeroScene />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-divider px-4 py-1.5 text-sm text-foreground">
          <span className="h-2 w-2 rounded-full bg-blue" />
          Available for new projects
        </span>

        <h1
          className="mt-8 font-sans text-5xl text-foreground sm:text-6xl lg:text-7xl"
          style={{ fontWeight: 400 }}
        >
          We design what&apos;s next
        </h1>
        <p className="mt-6 max-w-lg text-base text-white/70 sm:text-lg">
          kigger partners with ambitious teams to challenge the status quo and build products people actually love.
        </p>
        <Button asChild size="lg" className="mt-10 rounded-full">
          <Link href="#our-team" className="inline-flex items-center gap-2">
            Meet the team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
