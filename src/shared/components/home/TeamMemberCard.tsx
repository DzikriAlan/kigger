import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  name: string;
  role: string;
  image: StaticImageData;
  linkedinUrl: string;
}

export default function TeamMemberCard({ name, role, image, linkedinUrl }: Props) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-square w-full overflow-hidden bg-white">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, 90vw"
          className="scale-125 object-cover object-top"
        />
      </div>

      <div className="mt-6 border-t border-divider pt-4">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="text-sm text-white">{role}</p>
      </div>

      <Link
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors duration-300 hover:text-blue"
      >
        Connect LinkedIn
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
