import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import "../globals.css";
import SiteChrome from "@/components/SiteChrome";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { LOCALES, isLocale, type Locale } from "@/i18n/translations";
import { organizationJsonLd, SITE_URL } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const dynamicParams = false;

const BRAND = {
  en: {
    title: "TheNextX — Korean-Native AI Marketing & Development Agency",
    description:
      "TheNextX is a Korean-native, bilingual (KO/EN) agency partnering with Korean brands and US businesses — AI marketing automation, Shopify, app development, and workflow automation.",
  },
  ko: {
    title: "TheNextX — 한국어 네이티브 AI 마케팅·개발 에이전시",
    description:
      "한국 브랜드와 미국 기업을 잇는 한국어 네이티브 · 한/영 이중언어 에이전시. AI 마케팅 자동화, Shopify, 앱 개발, 업무 자동화를 한 팀에서 실행합니다.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const brand = BRAND[l];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: brand.title,
      template: "%s — TheNextX",
    },
    description: brand.description,
    alternates: {
      canonical: `${SITE_URL}/${l}`,
      languages: {
        en: `${SITE_URL}/en`,
        ko: `${SITE_URL}/ko`,
        "x-default": `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title: brand.title,
      description: brand.description,
      type: "website",
      siteName: "TheNextX",
      url: `${SITE_URL}/${l}`,
      locale: l === "ko" ? "ko_KR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: brand.title,
      description: brand.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col"
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        <LanguageProvider initialLocale={locale}>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd(locale)),
          }}
        />
      </body>
    </html>
  );
}
