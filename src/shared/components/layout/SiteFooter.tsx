import Link from "next/link";

import { useTranslations } from "@/shared/i18n";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.98 1.83-2.02 3.77-2.02 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.46-2.2 3v5.8h-4V9Z",
  },
  {
    label: "Vimeo",
    href: "https://vimeo.com",
    path: "M22 7.35c-.09 2-1.49 4.75-4.2 8.24C15 19.22 12.53 21 10.5 21c-1.26 0-2.32-1.16-3.19-3.49L5.6 11.6c-.63-2.32-1.3-3.49-2.03-3.49-.16 0-.7.33-1.63 1L1 7.83c1.02-.9 2.03-1.8 3.03-2.7C5.4 3.9 6.44 3.32 7.13 3.26c1.67-.16 2.7.98 3.08 3.42.42 2.63.71 4.26.87 4.9.48 2.2.99 3.3 1.56 3.3.44 0 1.1-.7 1.98-2.09.87-1.4 1.34-2.46 1.4-3.2.13-1.2-.35-1.8-1.4-1.8-.5 0-1.02.11-1.55.34C13.99 3.9 15.9 1.63 19.3 1.75c2.48.08 3.65 1.68 3.51 4.8Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    path: "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.16.5.5.9 1.11 1.16 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.16 1.77 4.9 4.9 0 0 1-1.77 1.16c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-1.16-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.16-1.77A4.9 4.9 0 0 1 5.46 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 3.35A6.65 6.65 0 1 0 12 18.65 6.65 6.65 0 0 0 12 5.35Zm0 2.16a4.49 4.49 0 1 1 0 8.98 4.49 4.49 0 0 1 0-8.98Zm6.9-2.4a1.55 1.55 0 1 1-3.1 0 1.55 1.55 0 0 1 3.1 0Z",
  },
  {
    label: "Medium",
    href: "https://medium.com",
    path: "M3 5.5c2.35 0 4.25 3 4.25 6.7s-1.9 6.7-4.25 6.7S-1.25 15.9-1.25 12.2 0.65 5.5 3 5.5Zm10.35.5c1.17 0 2.12 2.78 2.12 6.2s-.95 6.2-2.12 6.2-2.12-2.78-2.12-6.2.95-6.2 2.12-6.2Zm7.5.35c.41 0 .74 2.62.74 5.85s-.33 5.85-.74 5.85-.75-2.62-.75-5.85.34-5.85.75-5.85Z",
  },
  {
    label: "Spotify",
    href: "https://www.spotify.com",
    path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.59 14.44a.62.62 0 0 1-.86.21c-2.35-1.44-5.31-1.76-8.79-.96a.62.62 0 1 1-.28-1.22c3.81-.87 7.08-.5 9.72 1.12.3.18.4.57.21.85Zm1.22-2.72a.78.78 0 0 1-1.07.26c-2.69-1.65-6.79-2.13-9.97-1.17a.78.78 0 1 1-.45-1.5c3.64-1.1 8.16-.57 11.24 1.33.37.23.49.72.25 1.08Zm.1-2.83c-3.23-1.92-8.56-2.09-11.64-1.16a.94.94 0 1 1-.54-1.8c3.53-1.07 9.4-.86 13.11 1.34a.94.94 0 0 1-.93 1.62Z",
  },
  {
    label: "Podcast",
    href: "https://podcasts.apple.com",
    path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 3.2a2.9 2.9 0 0 1 2.9 2.9c0 1.02-.53 1.9-1.32 2.42.6 1.9.44 3.94-.14 5.44-.16.4-.61.58-1 .42a.78.78 0 0 1-.44-1c.5-1.28.63-3.02.1-4.62A2.9 2.9 0 0 1 12 5.2Zm0 1.56a1.34 1.34 0 1 0 0 2.68 1.34 1.34 0 0 0 0-2.68ZM8.2 9.9a.78.78 0 0 1 .78.78c0 1.86.57 3.42 1.62 4.7a.78.78 0 1 1-1.2 1c-1.28-1.55-1.98-3.44-1.98-5.7a.78.78 0 0 1 .78-.78Zm7.6 0a.78.78 0 0 1 .78.78c0 2.26-.7 4.15-1.98 5.7a.78.78 0 1 1-1.2-1c1.05-1.28 1.62-2.84 1.62-4.7a.78.78 0 0 1 .78-.78ZM10.9 17.4c.44-.08.87.2.94.65.15.87.24 1.55.24 1.95a1 1 0 0 1-2 0c0-.24-.06-.78-.2-1.6a.78.78 0 0 1 .62-.9c.13-.03.27-.05.4-.1Z",
  },
];

export default function SiteFooter() {
  const { t } = useTranslations();

  const legalLinks = [
    { label: t.footer.legal.privacyPolicy, href: "#privacy-policy" },
    { label: t.footer.legal.termsOfUse, href: "#terms-of-use" },
    { label: t.footer.legal.cookiePolicy, href: "#cookie-policy" },
    { label: t.footer.legal.cookieSettings, href: "#cookie-settings" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-divider bg-midnight px-6 py-8 sm:px-14 lg:px-24 xl:px-40 2xl:px-52">
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-8xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-white sm:justify-start">
          <span className="font-sans text-base font-bold tracking-tighter text-foreground">baturion</span>
          {legalLinks.map((link) => (
            <span key={link.href} className="flex items-center gap-2">
              <span className="text-divider">|</span>
              <Link href={link.href} className="transition-colors duration-300 hover:text-blue">
                {link.label}
              </Link>
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-foreground transition-colors duration-300 hover:text-blue"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d={social.path} />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
