import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "TheNextX — AI-Powered Agency for Modern Businesses",
  description:
    "TheNextX delivers AI agent operations, Shopify development, Flutter apps, mailing campaigns, and business workflow automation through human + AI collaboration.",
};

const services = [
  {
    icon: "🤖",
    title: "AI Agent Operations",
    description:
      "Deploy intelligent AI agents that handle complex workflows, customer interactions, and operational tasks autonomously — 24/7.",
    href: "/ai-agents",
    tags: ["Automation", "LLM", "Ops"],
  },
  {
    icon: "🛍️",
    title: "Shopify Development",
    description:
      "Custom Shopify themes, app integrations, and storefront optimizations that drive conversions and scale seamlessly.",
    href: "/shopify",
    tags: ["Shopify", "eCommerce", "Custom Dev"],
  },
  {
    icon: "🏢",
    title: "Shopify B2B",
    description:
      "Enterprise-grade B2B storefronts with custom pricing, account management, bulk ordering, and ERP integrations.",
    href: "/shopify",
    tags: ["B2B", "Enterprise", "Wholesale"],
  },
  {
    icon: "📱",
    title: "Flutter App Development",
    description:
      "Cross-platform mobile apps built with Flutter — beautiful, performant, and deployed to iOS and Android from a single codebase.",
    href: "/app-development",
    tags: ["Flutter", "iOS", "Android"],
  },
  {
    icon: "✉️",
    title: "Mailing Campaign Operations",
    description:
      "Offline direct mail marketing — postcards, brochures, and mailers designed, printed, and delivered to your target audience with full ROI tracking.",
    href: "/mailing",
    tags: ["Postcards", "Direct Mail", "Print"],
  },
  {
    icon: "📄",
    title: "PDF to HTML Conversion",
    description:
      "Accurate, pixel-faithful conversion of PDF documents into clean, responsive, accessible HTML for web publishing.",
    href: "/services",
    tags: ["Conversion", "HTML", "Web"],
  },
  {
    icon: "⚙️",
    title: "Business Workflow Automation",
    description:
      "Identify bottlenecks and replace manual processes with intelligent automation pipelines that save time and reduce errors.",
    href: "/services",
    tags: ["Automation", "Workflow", "Integration"],
  },
];

const whyItems = [
  {
    icon: "⚡",
    title: "Speed Without Compromise",
    body: "AI-augmented delivery cycles cut timelines by up to 60% while maintaining quality you can put in production.",
  },
  {
    icon: "🧠",
    title: "Embedded Expertise",
    body: "Senior engineers, Shopify Partners, and AI specialists collaborate as one team aligned to your outcomes.",
  },
  {
    icon: "🔁",
    title: "Iterative & Transparent",
    body: "Weekly demos, clear milestones, and async communication keep you in the loop at every stage.",
  },
  {
    icon: "📈",
    title: "Built to Scale",
    body: "Every solution is architected for growth — from MVP to enterprise with no painful rewrites.",
  },
];

const operatingMetrics = [
  { label: "Strategy", value: "Discovery + scope" },
  { label: "Build", value: "Weekly production slices" },
  { label: "Launch", value: "Docs, handoff, support" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="The Agent Workforce Is Here"
        headline="Scale Your Business with"
        headlineGradient="Human + AI Power"
        subheadline="TheNextX blends elite human expertise with cutting-edge AI agents to deliver Shopify stores, mobile apps, direct mail campaigns, and automation workflows — faster than you thought possible."
        primaryCTA={{ label: "Start a Project", href: "/contact" }}
        secondaryCTA={{ label: "Explore Services", href: "/services" }}
        showBadges
      />

      {/* Services section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 border-b"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="What We Do"
            title="Everything your business needs"
            titleGradient="to grow"
            subtitle="Seven core services, one integrated team. We handle execution so you can focus on strategy."
          />
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-3">
            {operatingMetrics.map((item) => (
              <div key={item.label} className="ui-card rounded-lg px-5 py-4">
                <div
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--subtle-foreground)" }}
                >
                  {item.label}
                </div>
                <div
                  className="mt-1 text-base font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  {item.value}
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
              View all services
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
            eyebrow="Why TheNextX"
            title="The operating model that"
            titleGradient="sets us apart"
            subtitle="We don't just deliver features. We deliver outcomes — through a methodology built for the AI era."
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
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {item.body}
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
                  Ready to activate your{" "}
                  <span style={{ color: "var(--accent-2)" }}>
                    agent workforce?
                  </span>
                </h2>
                <p
                  className="text-base sm:text-lg max-w-2xl"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Tell us about your project. We&apos;ll reply with a clear
                  plan, timeline, and pricing within 24 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <Link
                  href="/contact"
                  className="btn-primary px-8 py-3.5 rounded-lg text-base font-semibold"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary px-8 py-3.5 rounded-lg text-base font-semibold"
                >
                  Browse Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
