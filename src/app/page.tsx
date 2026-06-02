import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "TheNextX — AI-Powered Marketing & Operations Agency",
  description:
    "TheNextX is an AI-powered marketing and operations agency specializing in AI marketing automation, B2B lead generation, Shopify development, Flutter apps, and business workflow automation.",
  keywords: [
    "AI marketing agency",
    "AI-powered agency",
    "marketing agency",
    "AI lead generation",
    "AI sales automation",
    "B2B lead generation",
    "Shopify agency",
    "마케팅 대행",
    "AI 마케팅 자동화",
    "B2B 영업 대행",
    "쇼피파이 운영 대행",
  ],
};

const services = [
  {
    icon: "🤖",
    title: "service.aiAgents.title",
    description: "service.aiAgents.short",
    href: "/ai-agents",
    tags: ["common.automation", "tag.llm", "common.ops"],
  },
  {
    icon: "🛍️",
    title: "service.shopify.title",
    description: "service.shopify.short",
    href: "/shopify",
    tags: ["common.shopify", "common.ecommerce", "common.customDev"],
  },
  {
    icon: "🏢",
    title: "service.shopifyB2B.title",
    description: "service.shopifyB2B.short",
    href: "/shopify",
    tags: ["common.b2b", "common.enterprise", "common.wholesale"],
  },
  {
    icon: "📱",
    title: "service.flutter.title",
    description: "service.flutter.short",
    href: "/app-development",
    tags: ["common.flutter", "common.ios", "common.android"],
  },
  {
    icon: "✉️",
    title: "service.mailing.title",
    description: "service.mailing.short",
    href: "/mailing",
    tags: ["common.postcards", "common.directMail", "common.print"],
  },
  {
    icon: "📄",
    title: "service.pdf.title",
    description: "service.pdf.short",
    href: "/services",
    tags: ["common.conversion", "common.html", "common.web"],
  },
  {
    icon: "⚙️",
    title: "service.workflow.title",
    description: "service.workflow.short",
    href: "/services",
    tags: ["common.automation", "common.workflow", "common.integration"],
  },
];

const whyItems = [
  {
    icon: "⚡",
    title: "home.why.speed.title",
    body: "home.why.speed.body",
  },
  {
    icon: "🧠",
    title: "home.why.expertise.title",
    body: "home.why.expertise.body",
  },
  {
    icon: "🔁",
    title: "home.why.transparent.title",
    body: "home.why.transparent.body",
  },
  {
    icon: "📈",
    title: "home.why.scale.title",
    body: "home.why.scale.body",
  },
];

const operatingMetrics = [
  { label: "home.metric.strategy", value: "home.metric.strategyValue" },
  { label: "home.metric.build", value: "home.metric.buildValue" },
  { label: "home.metric.launch", value: "home.metric.launchValue" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="home.hero.eyebrow"
        headline="home.hero.title"
        headlineGradient="home.hero.highlight"
        subheadline="home.hero.body"
        primaryCTA={{ label: "home.hero.primary", href: "/contact" }}
        secondaryCTA={{ label: "home.hero.secondary", href: "/services" }}
        showBadges
      />

      {/* Services section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 border-b"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="home.services.eyebrow"
            title="home.services.title"
            titleGradient="home.services.highlight"
            subtitle="home.services.body"
          />
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-3">
            {operatingMetrics.map((item) => (
              <div key={item.label} className="ui-card rounded-lg px-5 py-4">
                <div
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--subtle-foreground)" }}
                >
                  <T>{item.label}</T>
                </div>
                <div
                  className="mt-1 text-base font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  <T>{item.value}</T>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
            >
              <T>home.services.viewAll</T>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why TheNextX */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 border-b"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="home.why.eyebrow"
            title="home.why.title"
            titleGradient="home.why.highlight"
            subtitle="home.why.body"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="ui-card rounded-lg p-6"
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

      {/* CTA Banner */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div
            className="ui-card relative rounded-lg p-6 sm:p-8 overflow-hidden"
          >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <h2
                  className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
                  style={{ color: "var(--foreground)" }}
                >
                  <T>home.cta.title</T>{" "}
                  <span style={{ color: "var(--accent-2)" }}>
                    <T>home.cta.highlight</T>
                  </span>
                </h2>
                <p
                  className="text-base sm:text-lg max-w-2xl"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <T>home.cta.body</T>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <Link
                  href="/contact"
                  className="btn-primary px-8 py-3.5 rounded-lg text-base font-semibold"
                >
                  <T>common.getInTouch</T>
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary px-8 py-3.5 rounded-lg text-base font-semibold"
                >
                  <T>common.browseServices</T>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
