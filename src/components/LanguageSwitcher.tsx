"use client";

import { usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/i18n/LanguageProvider";
import { LOCALES, isLocale, type Locale } from "@/i18n/translations";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    setLocale(next);
    const segments = pathname.split("/");
    // segments[1] holds the current locale prefix (e.g. "" / "ko" / "services")
    if (segments[1] && isLocale(segments[1])) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    router.push(segments.join("/") || `/${next}`);
  };

  return (
    <div
      className="flex items-center rounded-lg border p-0.5"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
      aria-label={t("language.selector")}
    >
      {LOCALES.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => switchTo(item)}
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
