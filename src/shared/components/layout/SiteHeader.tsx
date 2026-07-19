"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/shared/lib/utils";

const navLinks = [
  { label: "Our Team", href: "#our-team" },
  { label: "Culture", href: "#culture" },
  { label: "Insights", href: "#insights" },
  { label: "Make Your Mark", href: "#make-your-mark" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((open) => !open);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-midnight/95 backdrop-blur-xs">
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-6 sm:px-14 lg:h-20 lg:px-24 xl:px-40 2xl:px-52">
        <Link href="/" onClick={handleCloseMenu} className="flex items-center gap-2.5">
          <span className="font-sans text-2xl font-bold tracking-tighter text-foreground">kigger</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/90 transition-colors duration-300 hover:text-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="hidden items-center gap-1.5 rounded-full border border-divider px-4 py-1.5 text-sm text-foreground transition-colors duration-300 hover:border-foreground/60 lg:inline-flex"
          >
            Global
            <ChevronDown className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={handleToggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-divider bg-midnight transition-[grid-template-rows] duration-300 lg:hidden",
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        )}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleCloseMenu}
                className="rounded-xs px-2 py-3 text-base text-foreground/90 transition-colors duration-300 hover:bg-foreground/5 hover:text-blue"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-divider px-4 py-1.5 text-sm text-foreground"
            >
              Global
              <ChevronDown className="h-4 w-4" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
