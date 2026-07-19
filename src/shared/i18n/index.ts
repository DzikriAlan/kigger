import { useRouter } from "next/router";

import en from "@/shared/i18n/dictionaries/en";
import id from "@/shared/i18n/dictionaries/id";
import type { Dictionary, Locale } from "@/shared/i18n/types";

export type { Dictionary, Locale };

export const locales: Locale[] = ["en", "id"];
export const defaultLocale: Locale = "en";

const dictionaries: Record<Locale, Dictionary> = { en, id };

const isLocale = (value: string | undefined): value is Locale =>
  value === "en" || value === "id";

export const useTranslations = () => {
  const router = useRouter();
  const locale: Locale = isLocale(router.locale) ? router.locale : defaultLocale;

  return { t: dictionaries[locale], locale };
};

export const useLocaleSwitcher = () => {
  const router = useRouter();
  const locale: Locale = isLocale(router.locale) ? router.locale : defaultLocale;

  const switchLocale = (nextLocale: Locale) => {
    router.push({ pathname: router.pathname, query: router.query }, router.asPath, { locale: nextLocale });
  };

  return { locale, switchLocale };
};
