import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import SectionHeader from "@/components/SectionHeader";
import T from "@/components/T";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/translations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/shopify", {
    en: {
      title: "Shopify Development, Marketing & B2B",
      description:
        "Custom Shopify development, CRO, SEO, and enterprise B2B storefronts — your end-to-end, bilingual Shopify growth partner.",
    },
    ko: {
      title: "Shopify 개발·마케팅·B2B",
      description:
        "커스텀 Shopify 개발, 전환 최적화, SEO, 엔터프라이즈 B2B 스토어까지. 처음부터 끝까지 함께하는 Shopify 성장 파트너.",
    },
  });
}

const devServices = [
  {
    icon: "🎨",
    title: "shopify.dev.theme.title",
    body: "shopify.dev.theme.body",
  },
  {
    icon: "🔌",
    title: "shopify.dev.integration.title",
    body: "shopify.dev.integration.body",
  },
  {
    icon: "⚡",
    title: "shopify.dev.performance.title",
    body: "shopify.dev.performance.body",
  },
  {
    icon: "🛒",
    title: "shopify.dev.checkout.title",
    body: "shopify.dev.checkout.body",
  },
  {
    icon: "🔧",
    title: "shopify.dev.maintenance.title",
    body: "shopify.dev.maintenance.body",
  },
  {
    icon: "📦",
    title: "shopify.dev.migration.title",
    body: "shopify.dev.migration.body",
  },
];

const b2bFeatures = [
  {
    icon: "💰",
    title: "shopify.b2b.pricing.title",
    body: "shopify.b2b.pricing.body",
  },
  {
    icon: "📋",
    title: "shopify.b2b.terms.title",
    body: "shopify.b2b.terms.body",
  },
  {
    icon: "🏷️",
    title: "shopify.b2b.catalogs.title",
    body: "shopify.b2b.catalogs.body",
  },
  {
    icon: "👥",
    title: "shopify.b2b.accounts.title",
    body: "shopify.b2b.accounts.body",
  },
  {
    icon: "🔄",
    title: "shopify.b2b.sync.title",
    body: "shopify.b2b.sync.body",
  },
  {
    icon: "📊",
    title: "shopify.b2b.analytics.title",
    body: "shopify.b2b.analytics.body",
  },
];

export default function ShopifyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "var(--background)" }}
      >        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{
              color: "var(--accent-2)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <T>shopify.hero.eyebrow</T>
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: "var(--foreground)" }}
          >
            <T>shopify.hero.title</T>{" "}
            <span
              style={{ color: "var(--accent-2)" }}
            >
              <T>shopify.hero.highlight</T>
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "var(--muted-foreground)" }}
          >
            <T>shopify.hero.body</T>
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block px-8 py-3.5 rounded-lg text-base font-semibold"
            style={{
              background: "var(--foreground)",
              boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
            }}
          >
            <T>shopify.hero.primary</T>
          </Link>
        </div>
      </section>

      {/* DTC Development */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="shopify.dtc.eyebrow"
            title="shopify.dtc.title"
            titleGradient="shopify.dtc.highlight"
            subtitle="shopify.dtc.body"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {devServices.map((item) => (
              <div
                key={item.title}
                className="rounded-lg p-6"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="mono-icon text-3xl mb-4">{item.icon}</div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  <T>{item.title}</T>
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <T>{item.body}</T>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B divider */}
      <div
        className="px-4 sm:px-6 lg:px-8 py-px"
        style={{ background: "var(--surface-2)" }}
      >
        <div
          className="max-w-7xl mx-auto"
          style={{ borderTop: "1px solid var(--border)" }}
        />
      </div>

      {/* B2B Section */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="shopify.b2b.eyebrow"
            title="shopify.b2b.title"
            titleGradient="shopify.b2b.highlight"
            subtitle="shopify.b2b.body"
          />

          {/* B2B highlight box */}
          <div
            className="rounded-lg p-8 mb-12"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  value: "shopify.b2b.value.plus",
                  label: "shopify.b2b.native",
                },
                {
                  value: "shopify.b2b.value.apis",
                  label: "shopify.b2b.erp",
                },
                {
                  value: "shopify.b2b.value.whiteGlove",
                  label: "shopify.b2b.training",
                },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    className="text-xl font-bold mb-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    <T>{item.value}</T>
                  </div>
                  <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                    <T>{item.label}</T>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {b2bFeatures.map((item) => (
              <div
                key={item.title}
                className="rounded-lg p-6"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="mono-icon text-3xl mb-4">{item.icon}</div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  <T>{item.title}</T>
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <T>{item.body}</T>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            <T>shopify.cta.title</T>
          </h2>
          <p className="mb-8" style={{ color: "var(--muted-foreground)" }}>
            <T>shopify.cta.body</T>
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block px-8 py-3.5 rounded-lg text-base font-semibold"
            style={{
              background: "var(--foreground)",
              boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
            }}
          >
            <T>shopify.cta.button</T>
          </Link>
        </div>
      </section>
    </>
  );
}
