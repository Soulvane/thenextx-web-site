import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import T from "@/components/T";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/translations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/services", {
    en: {
      title: "Services — AI Marketing, Shopify, Apps & Automation",
      description:
        "Full-service delivery: AI marketing automation, B2B lead generation, Shopify development, Flutter apps, direct mail, and workflow automation — one Korean-native, bilingual team.",
    },
    ko: {
      title: "서비스 — AI 마케팅·Shopify·앱·자동화",
      description:
        "AI 마케팅 자동화, B2B 리드 생성, Shopify 개발, 앱 개발, 다이렉트 메일, 업무 자동화까지 — 한국어 네이티브 이중언어 팀이 한 번에 실행합니다.",
    },
  });
}

const allServices = [
  {
    icon: "🛍️",
    title: "service.shopifyMaintenance.title",
    description: "service.shopifyMaintenance.body",
    href: "/shopify",
    tags: [
      "tag.customThemes",
      "tag.liquid",
      "tag.appIntegration",
      "tag.maintenance",
    ],
  },
  {
    icon: "🏢",
    title: "service.shopifyB2B.title",
    description: "service.shopifyB2B.body",
    href: "/shopify",
    tags: [
      "tag.b2bPortal",
      "tag.netTerms",
      "tag.customPricing",
      "tag.erpSync",
    ],
  },
  {
    icon: "📱",
    title: "service.flutter.title",
    description: "service.flutter.body",
    href: "/app-development",
    tags: [
      "common.flutter",
      "common.ios",
      "common.android",
      "tag.crossPlatform",
    ],
  },
  {
    icon: "✉️",
    title: "service.mailing.title",
    description: "service.mailing.body",
    href: "/mailing",
    tags: [
      "common.postcards",
      "common.directMail",
      "common.print",
      "tag.qrTracking",
    ],
  },
  {
    icon: "📄",
    title: "service.pdf.title",
    description: "service.pdf.body",
    href: "/contact",
    tags: [
      "tag.semanticHtml",
      "tag.responsive",
      "tag.pixelFaithful",
      "tag.bulkProcessing",
    ],
  },
  {
    icon: "⚙️",
    title: "service.workflow.title",
    description: "service.workflow.body",
    href: "/contact",
    tags: ["tag.n8n", "tag.make", "tag.customApis", "tag.processMining"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "var(--background)" }}
      >        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{
              color: "var(--accent)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <T>services.hero.eyebrow</T>
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: "var(--foreground)" }}
          >
            <T>services.hero.title</T>{" "}
            <span
              style={{ color: "var(--accent-2)" }}
            >
              <T>services.hero.highlight</T>
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--muted-foreground)" }}
          >
            <T>services.hero.body</T>
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allServices.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="services.process.eyebrow"
            title="services.process.title"
            titleGradient="services.process.highlight"
            subtitle="services.process.body"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "services.process.discovery.title",
                body: "services.process.discovery.body",
              },
              {
                step: "02",
                title: "services.process.scoping.title",
                body: "services.process.scoping.body",
              },
              {
                step: "03",
                title: "services.process.build.title",
                body: "services.process.build.body",
              },
              {
                step: "04",
                title: "services.process.handoff.title",
                body: "services.process.handoff.body",
              },
            ].map((step) => (
              <div
                key={step.step}
                className="rounded-lg p-6 relative overflow-hidden"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="text-5xl font-bold mb-4 leading-none"
                  style={{ color: "var(--accent-2)" }}
                >
                  {step.step}
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  <T>{step.title}</T>
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <T>{step.body}</T>
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
            <T>services.cta.title</T>
          </h2>
          <p className="mb-8" style={{ color: "var(--muted-foreground)" }}>
            <T>services.cta.body</T>
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block px-8 py-3.5 rounded-lg text-base font-semibold"
            style={{
              background: "var(--foreground)",
              boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
            }}
          >
            <T>common.talkToUs</T>
          </Link>
        </div>
      </section>
    </>
  );
}
