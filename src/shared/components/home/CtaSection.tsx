import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const secondaryLinks = [
  { label: "Services", href: "#culture" },
  { label: "Culture", href: "#culture" },
  { label: "Careers", href: "#careers" },
  { label: "Blog", href: "#insights" },
];

export default function CtaSection() {
  return (
    <section
      id="make-your-mark"
      className="relative overflow-hidden border-t border-divider bg-midnight px-6 py-16 sm:px-14 lg:px-24 lg:py-20 xl:px-40 2xl:px-52"
    >
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-8xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              className="font-serif text-4xl text-foreground sm:text-5xl lg:text-6xl"
              style={{ fontWeight: 260 }}
            >
              Ready to make your mark?
            </h2>
            <p className="mt-4 max-w-md text-base text-foreground/70">
              As your identity partner, our Bandung-based team is here to help you stand out.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:items-end lg:text-right">
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="#contact">Get in touch</Link>
            </Button>

            <div className="lg:max-w-sm">
              <p className="text-base text-foreground/70">
                Do your best work with a small, tight-knit team that treats every project like its own.
              </p>
              <Link
                href="#careers"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-blue"
              >
                Join our team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <nav className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-divider pt-8 text-sm text-foreground/90 lg:justify-end">
          {secondaryLinks.map((link, index) => (
            <span key={link.href} className="flex items-center gap-6">
              <Link href={link.href} className="transition-colors duration-300 hover:text-blue">
                {link.label}
              </Link>
              {index < secondaryLinks.length - 1 && (
                <span className="hidden h-4 w-px bg-divider sm:block" aria-hidden />
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
