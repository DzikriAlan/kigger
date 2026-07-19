import type { NextPage } from "next";
import Head from "next/head";

import SiteHeader from "@/shared/components/layout/SiteHeader";
import SiteFooter from "@/shared/components/layout/SiteFooter";
import HeroSection from "@/shared/components/home/HeroSection";
import PrinciplesSection from "@/shared/components/home/PrinciplesSection";
import InsightsSection from "@/shared/components/home/InsightsSection";
import OurTeamSection from "@/shared/components/home/OurTeamSection";
import TestimonialsSection from "@/shared/components/home/TestimonialsSection";
import CtaSection from "@/shared/components/home/CtaSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>baturion</title>
        <meta
          name="description"
          content="baturion is a global design and innovation firm helping organizations challenge the status quo and create a lasting impact at scale."
        />
      </Head>

      <div className="flex min-h-screen flex-col bg-midnight">
        <SiteHeader />
        <main className="flex-1">
          <HeroSection />
          <OurTeamSection />
          <PrinciplesSection />
          <TestimonialsSection />
          <InsightsSection />
          <CtaSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
};

export default Home;
