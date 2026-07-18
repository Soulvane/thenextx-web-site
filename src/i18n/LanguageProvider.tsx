"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  translate,
  type Locale,
} from "./translations";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (value: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  initialLocale = DEFAULT_LOCALE,
}: {
  children: ReactNode;
  /** Locale resolved from the URL (`/en`, `/ko`) on the server. */
  initialLocale?: Locale;
}) {
  // The URL is the single source of truth for locale; it updates on navigation.
  const locale = initialLocale;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Persist the preference so future direct visits to `/` can honor it.
  const setLocale = useCallback((nextLocale: Locale) => {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    } catch {
      /* storage unavailable — locale still lives in the URL */
    }
  }, []);

  const t = useCallback((value: string) => translate(value, locale), [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider.");
  }
  return context;
}
