import type { NextPage } from "next";
import Head from "next/head";

import SiteHeader from "@/shared/components/layout/SiteHeader";
import SiteFooter from "@/shared/components/layout/SiteFooter";
import HeroSection from "@/shared/components/home/HeroSection";
import PrinciplesSection from "@/shared/components/home/PrinciplesSection";
import InsightsSection from "@/shared/components/home/InsightsSection";
import OurTeamSection from "@/shared/components/home/OurTeamSection";
import PortfolioSection from "@/shared/components/home/PortfolioSection";
import TestimonialsSection from "@/shared/components/home/TestimonialsSection";
import CtaSection from "@/shared/components/home/CtaSection";
import { useTranslations } from "@/shared/i18n";

const Home: NextPage = () => {
  const { t } = useTranslations();

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
      </Head>

      <div className="flex min-h-screen flex-col bg-midnight">
        <SiteHeader />
        <main className="flex-1">
          <HeroSection />
          <OurTeamSection />
          <PortfolioSection />
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
