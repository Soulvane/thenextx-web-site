import type { Metadata } from "next";
import type { Locale } from "@/i18n/translations";

export const SITE_URL = "https://thenextx.net";
export const SITE_NAME = "TheNextX";
export const CONTACT_EMAIL = "info@thenextx.net";

type MetaCopy = {
  /** Plain string flows through the "%s — TheNextX" template; use {absolute} to opt out. */
  title: string | { absolute: string };
  description: string;
};

function titleToString(title: MetaCopy["title"]): string {
  return typeof title === "string" ? title : title.absolute;
}

/**
 * Localized <head> metadata for a marketing page: canonical + hreflang
 * alternates (en / ko / x-default) and locale-aware Open Graph.
 * `path` is the segment after the locale, e.g. "" for home or "/services".
 */
export function pageMetadata(
  locale: Locale,
  path: string,
  copy: Record<Locale, MetaCopy>
): Metadata {
  const c = copy[locale];
  const canonical = `${SITE_URL}/${locale}${path}`;
  const ogTitle = titleToString(c.title);

  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en${path}`,
        ko: `${SITE_URL}/ko${path}`,
        "x-default": `${SITE_URL}/en${path}`,
      },
    },
    openGraph: {
      title: ogTitle,
      description: c.description,
      url: canonical,
      type: "website",
      siteName: SITE_NAME,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      alternateLocale: locale === "ko" ? "en_US" : "ko_KR",
    },
  };
}

/**
 * Organization / ProfessionalService structured data. `knowsLanguage` is the
 * key machine-readable signal that TheNextX operates natively in Korean and
 * English — this is what surfaces the agency for Korean-language / bilingual
 * search intent.
 */
export function organizationJsonLd(locale: Locale) {
  const description =
    locale === "ko"
      ? "TheNextX는 한국어와 영어로 운영하는 이중언어 에이전시입니다. 한국 브랜드·기업의 미국 시장 진출과 미국 기업의 성장을 AI 마케팅 자동화, Shopify 개발, 앱 개발, 업무 자동화로 지원합니다."
      : "TheNextX is a Korean-native, bilingual (Korean & English) agency. We help Korean brands enter the US market and help US businesses grow through AI marketing automation, Shopify development, app development, and workflow automation.";

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "The Next X",
    url: `${SITE_URL}/${locale}`,
    email: CONTACT_EMAIL,
    description,
    inLanguage: locale === "ko" ? "ko-KR" : "en-US",
    knowsLanguage: ["ko", "en"],
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "South Korea" },
    ],
    slogan:
      locale === "ko"
        ? "한국어 네이티브 · 사람 + AI 실행 에이전시"
        : "Korean-native · human + AI delivery agency",
    knowsAbout: [
      "AI marketing automation",
      "Korean market entry",
      "Shopify development",
      "Flutter app development",
      "B2B lead generation",
      "Workflow automation",
    ],
    makesOffer: [
      "AI Agent Operations",
      "Shopify Development & B2B",
      "Flutter App Development",
      "Direct Mail Marketing",
      "Business Workflow Automation",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT_EMAIL,
      contactType: "sales",
      availableLanguage: ["Korean", "English"],
    },
  };
}
