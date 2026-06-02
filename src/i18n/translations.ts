import { en } from "./locales/en";
import { ko } from "./locales/ko";

export type Locale = "en" | "ko";
export type Messages = Record<string, string>;

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "tnx-locale";

export const translations: Record<Locale, Messages> = {
  en,
  ko,
};

export function translate(key: string, locale: Locale) {
  return translations[locale][key] ?? key;
}
