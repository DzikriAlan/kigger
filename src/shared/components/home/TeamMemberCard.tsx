import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  name: string;
  role: string;
  image?: StaticImageData;
  imageClassName?: string;
  linkedinUrl: string;
  connectLabel: string;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function TeamMemberCard({ name, role, image, imageClassName, linkedinUrl, connectLabel }: Props) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-square w-full overflow-hidden bg-white">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 33vw, 90vw"
            className={imageClassName ?? "scale-125 object-cover object-top"}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary">
            <span className="font-display text-5xl text-foreground/70">{getInitials(name)}</span>
          </div>
        )}
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
        {connectLabel}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
