import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services — TheNextX",
  description:
    "Explore all seven TheNextX services: AI agents, Shopify development, B2B, Flutter apps, mailing campaigns, PDF to HTML, and workflow automation.",
};

const allServices = [
  {
    icon: "🤖",
    title: "AI Agent Operations",
    description:
      "We design, deploy, and manage AI agent systems that operate continuously on your behalf. From customer support automation and lead qualification to document processing and data enrichment — our agents integrate directly into your existing tools and workflows.",
    href: "/ai-agents",
    tags: ["LLM Integration", "Workflow Automation", "24/7 Ops", "API Agents"],
  },
  {
    icon: "🛍️",
    title: "Shopify Development & Maintenance",
    description:
      "Full-cycle Shopify work — custom theme development, Liquid templating, app integrations (Klaviyo, Recharge, Gorgias, and more), performance optimization, and ongoing maintenance to keep your store running at peak performance.",
    href: "/shopify",
    tags: ["Custom Themes", "Liquid", "App Integration", "Maintenance"],
  },
  {
    icon: "🏢",
    title: "Shopify B2B",
    description:
      "Purpose-built B2B storefronts with net terms, tiered pricing by account, custom catalogs, approval workflows, and ERP/CRM sync. We leverage Shopify's native B2B features and extend them where your business demands more.",
    href: "/shopify",
    tags: ["B2B Portal", "Net Terms", "Custom Pricing", "ERP Sync"],
  },
  {
    icon: "📱",
    title: "Flutter App Development",
    description:
      "Native-quality mobile applications from a single Flutter codebase — deployed simultaneously to iOS and Android. We cover UI/UX, state management, backend integration, push notifications, and App Store / Play Store launch.",
    href: "/app-development",
    tags: ["Flutter", "iOS", "Android", "Cross-platform"],
  },
  {
    icon: "✉️",
    title: "Mailing Campaign Operations",
    description:
      "End-to-end offline direct mail marketing: postcard campaigns, direct mail packages, catalog mailers, mailing list management, print production, and ROI tracking via QR codes and custom landing pages.",
    href: "/mailing",
    tags: ["Postcards", "Direct Mail", "Print", "QR Tracking"],
  },
  {
    icon: "📄",
    title: "PDF to HTML Conversion",
    description:
      "Convert complex PDF documents — reports, catalogs, legal docs, manuals — into clean, semantic, responsive HTML. We preserve layouts, typography, and interactive elements, producing output ready for web or email publishing.",
    href: "/contact",
    tags: ["Semantic HTML", "Responsive", "Pixel-faithful", "Bulk Processing"],
  },
  {
    icon: "⚙️",
    title: "Business Workflow Automation",
    description:
      "End-to-end process automation using n8n, Make (Integromat), Zapier, or custom-built solutions. We map your manual processes, identify automation opportunities, and build robust pipelines that reduce operational overhead by up to 70%.",
    href: "/contact",
    tags: ["n8n", "Make", "Custom APIs", "Process Mining"],
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
            All Services
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Seven services.{" "}
            <span
              style={{ color: "var(--accent-2)" }}
            >
              One team.
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--muted-foreground)" }}
          >
            Every service is designed to integrate with the others, creating a
            compounding advantage for your business as you grow with TheNextX.
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
            eyebrow="How We Work"
            title="A process built for"
            titleGradient="clarity and speed"
            subtitle="No ambiguity. No delays. A repeatable process that consistently delivers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                body: "We learn your business, goals, and existing stack in a focused kickoff call.",
              },
              {
                step: "02",
                title: "Scoping",
                body: "We deliver a detailed proposal with milestones, deliverables, and fixed pricing.",
              },
              {
                step: "03",
                title: "Build",
                body: "Weekly demo calls keep you in control as we ship iteratively and transparently.",
              },
              {
                step: "04",
                title: "Handoff",
                body: "Full documentation, training, and optional ongoing support retainer.",
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
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {step.body}
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
            Not sure which service you need?
          </h2>
          <p className="mb-8" style={{ color: "var(--muted-foreground)" }}>
            Tell us your goal and we&apos;ll recommend the right approach — no
            commitment required.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block px-8 py-3.5 rounded-lg text-base font-semibold"
            style={{
              background: "var(--foreground)",
              boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
            }}
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}
