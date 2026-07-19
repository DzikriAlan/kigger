"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/shared/lib/utils";
import { locales, useLocaleSwitcher, useTranslations } from "@/shared/i18n";
import type { Locale } from "@/shared/i18n";

const HIDE_SCROLL_THRESHOLD_PX = 80;

const localeLabels: Record<Locale, string> = { en: "EN", id: "ID" };

export default function SiteHeader() {
  const { t } = useTranslations();
  const { locale, switchLocale } = useLocaleSwitcher();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const navLinks = [
    { label: t.nav.ourTeam, href: "#our-team" },
    { label: t.nav.culture, href: "#culture" },
    { label: t.nav.insights, href: "#insights" },
  ];

  const handleSelectLocale = (nextLocale: Locale) => {
    setIsLangMenuOpen(false);
    if (nextLocale !== locale) switchLocale(nextLocale);
  };

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
        "fixed inset-x-0 top-0 z-50 px-6 pt-6 transition-transform duration-500 ease-out sm:px-12 lg:px-20 xl:px-32 2xl:px-40",
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
            <div className="relative hidden lg:block">
              <button
                type="button"
                onClick={() => setIsLangMenuOpen((open) => !open)}
                aria-haspopup="listbox"
                aria-expanded={isLangMenuOpen}
                className="inline-flex items-center gap-1.5 rounded-full border border-divider px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground transition-colors duration-300 hover:border-foreground/60"
              >
                {localeLabels[locale]}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              <div
                className={cn(
                  "absolute right-0 top-full mt-2 min-w-[6rem] overflow-hidden rounded-xl border border-divider bg-midnight/95 backdrop-blur-md transition-opacity duration-200",
                  isLangMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                )}
                role="listbox"
              >
                {locales.map((option) => (
                  <button
                    key={option}
                    type="button"
                    role="option"
                    aria-selected={option === locale}
                    onClick={() => handleSelectLocale(option)}
                    className={cn(
                      "block w-full px-4 py-2 text-left text-xs font-medium uppercase tracking-widest transition-colors duration-300 hover:bg-foreground/5 hover:text-blue",
                      option === locale ? "text-blue" : "text-foreground/80"
                    )}
                  >
                    {localeLabels[option]}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleToggleMenu}
              aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
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
              <div className="mt-2 inline-flex w-fit items-center gap-1 rounded-full border border-divider p-1">
                {locales.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={option === locale}
                    onClick={() => handleSelectLocale(option)}
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest transition-colors duration-300",
                      option === locale ? "bg-foreground/10 text-blue" : "text-foreground/80"
                    )}
                  >
                    {localeLabels[option]}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
