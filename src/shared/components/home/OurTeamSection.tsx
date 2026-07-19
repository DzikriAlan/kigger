import Image from "next/image";

import gueyPhoto from "@/shared/images/guey.jpg";
import TeamMemberCard from "@/shared/components/home/TeamMemberCard";

const teamMembers = [
  {
    id: "dzikri-alan",
    name: "Dzikri Alan",
    role: "Fullstack Developer",
    linkedinUrl: "https://www.linkedin.com/in/dzikri-alan/",
    image: gueyPhoto,
  },
];

export default function OurTeamSection() {
  return (
    <section
      id="our-team"
      className="relative overflow-hidden bg-midnight px-6 py-20 sm:px-14 lg:px-24 lg:py-28 xl:px-40 2xl:px-52"
    >
      <div className="pointer-events-none absolute right-4 top-16 aspect-[290/100] w-[280px] opacity-40 sm:right-6 sm:top-20 sm:w-[380px] lg:top-24 lg:w-[480px]">
        <Image src="/indonesia-dot-map.svg" alt="" fill className="object-contain" aria-hidden />
      </div>

      <div className="relative">
        <h2 className="font-serif text-5xl text-foreground sm:text-6xl lg:text-7xl" style={{ fontWeight: 260 }}>
          Our team
        </h2>
        <p className="mt-6 max-w-xl text-base text-white">
          Meet the kigger making an impact for leading brands around the globe.
        </p>

        <div className="mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-14">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
