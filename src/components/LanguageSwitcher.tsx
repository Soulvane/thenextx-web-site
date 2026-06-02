"use client";

import { useI18n } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/translations";

const locales: Locale[] = ["en", "ko"];

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className="flex items-center rounded-lg border p-0.5"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
      aria-label={t("language.selector")}
    >
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className="rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors"
          style={{
            background: locale === item ? "var(--foreground)" : "transparent",
            color: locale === item ? "#ffffff" : "var(--secondary-foreground)",
          }}
          aria-pressed={locale === item}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
