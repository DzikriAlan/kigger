import Image from "next/image";

import gueyPhoto from "@/shared/images/guey.jpg";
import TeamMemberCard from "@/shared/components/home/TeamMemberCard";
import { useTranslations } from "@/shared/i18n";

const teamMemberLinks: Record<string, { linkedinUrl: string; image?: typeof gueyPhoto }> = {
  "dzikri-alan": { linkedinUrl: "https://www.linkedin.com/in/dzikri-alan/", image: gueyPhoto },
  ifaldzi: { linkedinUrl: "#contact" },
  fitri: { linkedinUrl: "#contact" },
};

export default function OurTeamSection() {
  const { t } = useTranslations();

  const teamMembers = Object.entries(t.ourTeam.members).map(([id, member]) => ({
    id,
    ...member,
    ...teamMemberLinks[id],
  }));

  return (
    <section
      id="our-team"
      className="relative overflow-hidden bg-midnight px-6 py-20 sm:px-14 lg:px-24 lg:py-28 xl:px-40 2xl:px-52"
    >
      <div className="pointer-events-none absolute right-0 top-14 aspect-[290/100] w-[80vw] opacity-40 sm:top-16 sm:w-[70vw] lg:top-20 lg:w-1/2 xl:w-[48vw]">
        <Image src="/indonesia-dot-map.svg" alt="" fill className="object-contain" aria-hidden />
      </div>

      <div className="relative">
        <h2 className="font-serif text-5xl text-foreground sm:text-6xl lg:text-7xl" style={{ fontWeight: 260 }}>
          {t.ourTeam.heading}
        </h2>
        <p className="mt-6 max-w-xl text-base text-white">{t.ourTeam.description}</p>

        <div className="no-scrollbar -mx-6 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-x-8 sm:gap-y-14 sm:overflow-visible sm:px-0">
          {teamMembers.map((member) => (
            <div key={member.id} className="w-[78vw] shrink-0 snap-start sm:w-auto sm:shrink sm:snap-align-none">
              <TeamMemberCard
                name={member.name}
                role={member.role}
                image={member.image}
                linkedinUrl={member.linkedinUrl}
                connectLabel={t.ourTeam.connectLinkedin}
              />
            </div>
          ))}
          <div className="w-px shrink-0 sm:hidden" aria-hidden />
        </div>
      </div>
    </section>
  );
}
