"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/shared/lib/utils";

const navLinks = [
  { label: "Our Team", href: "#our-team" },
  { label: "Culture", href: "#culture" },
  { label: "Insights", href: "#insights" },
  { label: "Make Your Mark", href: "#make-your-mark" },
];

const HIDE_SCROLL_THRESHOLD_PX = 80;

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  const handleToggleMenu = () => setIsMenuOpen((open) => !open);
  const handleCloseMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      setIsHidden(isScrollingDown && currentScrollY > HIDE_SCROLL_THRESHOLD_PX);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 px-6 pt-6 transition-transform duration-500 ease-out sm:px-12 lg:px-20 xl:px-32 2xl:px-40",
        isHidden ? "-translate-y-[calc(100%+2rem)]" : "translate-y-0"
      )}
    >
      <div className="mx-auto max-w-8xl rounded-3xl border border-divider bg-midnight/70 backdrop-blur-md">
        <div className="flex h-14 items-center justify-between px-5 lg:h-16 lg:px-8">
          <Link href="/" onClick={handleCloseMenu} className="flex items-center gap-2.5">
            <span className="font-display text-2xl italic text-foreground">baturion</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-widest text-foreground/80 transition-colors duration-300 hover:text-blue"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="hidden items-center gap-1.5 rounded-full border border-divider px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground transition-colors duration-300 hover:border-foreground/60 lg:inline-flex"
            >
              Global
              <ChevronDown className="h-3.5 w-3.5" />
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
            "grid overflow-hidden border-divider transition-[grid-template-rows] duration-300 lg:hidden",
            isMenuOpen ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr] border-t-0"
          )}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleCloseMenu}
                  className="rounded-xs px-2 py-3 text-sm font-medium uppercase tracking-widest text-foreground/80 transition-colors duration-300 hover:bg-foreground/5 hover:text-blue"
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-divider px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground"
              >
                Global
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
