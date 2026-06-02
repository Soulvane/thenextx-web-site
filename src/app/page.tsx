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
    accentColor: "blue" as const,
  },
  {
    icon: "🛍️",
    title: "Shopify Development",
    description:
      "Custom Shopify themes, app integrations, and storefront optimizations that drive conversions and scale seamlessly.",
    href: "/shopify",
    tags: ["Shopify", "eCommerce", "Custom Dev"],
    accentColor: "violet" as const,
  },
  {
    icon: "🏢",
    title: "Shopify B2B",
    description:
      "Enterprise-grade B2B storefronts with custom pricing, account management, bulk ordering, and ERP integrations.",
    href: "/shopify",
    tags: ["B2B", "Enterprise", "Wholesale"],
    accentColor: "mixed" as const,
  },
  {
    icon: "📱",
    title: "Flutter App Development",
    description:
      "Cross-platform mobile apps built with Flutter — beautiful, performant, and deployed to iOS and Android from a single codebase.",
    href: "/app-development",
    tags: ["Flutter", "iOS", "Android"],
    accentColor: "blue" as const,
  },
  {
    icon: "✉️",
    title: "Mailing Campaign Operations",
    description:
      "Offline direct mail marketing — postcards, brochures, and mailers designed, printed, and delivered to your target audience with full ROI tracking.",
    href: "/mailing",
    tags: ["Postcards", "Direct Mail", "Print"],
    accentColor: "violet" as const,
  },
  {
    icon: "📄",
    title: "PDF to HTML Conversion",
    description:
      "Accurate, pixel-faithful conversion of PDF documents into clean, responsive, accessible HTML for web publishing.",
    href: "/services",
    tags: ["Conversion", "HTML", "Web"],
    accentColor: "mixed" as const,
  },
  {
    icon: "⚙️",
    title: "Business Workflow Automation",
    description:
      "Identify bottlenecks and replace manual processes with intelligent automation pipelines that save time and reduce errors.",
    href: "/services",
    tags: ["Automation", "Workflow", "Integration"],
    accentColor: "blue" as const,
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
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "#0d0d1a" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="What We Do"
            title="Everything your business needs"
            titleGradient="to grow"
            subtitle="Seven core services, one integrated team. We handle execution so you can focus on strategy."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                color: "#3b82f6",
                background: "rgba(59, 130, 246, 0.08)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
              }}
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
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "#0a0a0f" }}
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
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(13, 13, 26, 0.6)",
                  border: "1px solid rgba(59, 130, 246, 0.1)",
                }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "#f0f0f8" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6b6b8a" }}
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
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "#0d0d1a" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="relative rounded-3xl p-12 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.12) 100%)",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #8b5cf6, transparent)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #3b82f6, transparent)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
                style={{ color: "#f0f0f8" }}
              >
                Ready to activate your{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  agent workforce?
                </span>
              </h2>
              <p
                className="text-lg mb-8 max-w-xl mx-auto"
                style={{ color: "#6b6b8a" }}
              >
                Tell us about your project. We&apos;ll reply with a clear plan,
                timeline, and pricing within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl text-base font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.35)",
                  }}
                >
                  Get in Touch
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3.5 rounded-xl text-base font-semibold"
                  style={{
                    color: "#a0a0b8",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
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
