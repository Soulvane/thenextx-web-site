import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify Development & B2B — TheNextX",
  description:
    "Custom Shopify theme development, app integrations, maintenance, and enterprise B2B storefronts. TheNextX is your Shopify development partner.",
};

const devServices = [
  {
    icon: "🎨",
    title: "Custom Theme Development",
    body: "Pixel-perfect storefronts built on Shopify's latest Dawn architecture or fully custom Liquid templates that match your brand identity.",
  },
  {
    icon: "🔌",
    title: "App Integration",
    body: "Seamless integration with Klaviyo, Recharge, Gorgias, Yotpo, ShipBob, Loop Returns, and hundreds of other Shopify apps.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    body: "Core Web Vitals tuning, image optimization, lazy loading, and Shopify CDN configuration for sub-2s page loads.",
  },
  {
    icon: "🛒",
    title: "Checkout Customization",
    body: "Checkout UI extensions, custom fields, upsell logic, and post-purchase flows using Shopify Functions and Extensions.",
  },
  {
    icon: "🔧",
    title: "Ongoing Maintenance",
    body: "Monthly retainer packages covering updates, bug fixes, new feature additions, and proactive theme audits.",
  },
  {
    icon: "📦",
    title: "Shopify Plus Migration",
    body: "Seamless migration from WooCommerce, BigCommerce, or Magento to Shopify Plus with zero data loss.",
  },
];

const b2bFeatures = [
  {
    icon: "💰",
    title: "Custom B2B Pricing",
    body: "Account-specific pricing tiers, volume discounts, and negotiated rates — applied automatically at checkout.",
  },
  {
    icon: "📋",
    title: "Net Terms & Credit",
    body: "Net 30/60/90 payment terms, purchase order support, and credit limit management built into the checkout flow.",
  },
  {
    icon: "🏷️",
    title: "Custom Catalogs",
    body: "Restricted product catalogs per company or buyer group — show only what each B2B account is permitted to purchase.",
  },
  {
    icon: "👥",
    title: "Account Management",
    body: "Company accounts with multiple buyers, location-based shipping, approval workflows, and admin dashboards.",
  },
  {
    icon: "🔄",
    title: "ERP / CRM Sync",
    body: "Real-time bidirectional sync with NetSuite, SAP, Salesforce, and other enterprise systems via Shopify Flow or custom API.",
  },
  {
    icon: "📊",
    title: "B2B Analytics",
    body: "Detailed reporting on account-level revenue, order frequency, product mix, and replenishment cycles.",
  },
];

export default function ShopifyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "var(--background)" }}
      >
        <div
          className="hidden"
          style={{ background: "radial-gradient(circle, var(--accent-2), transparent)" }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{
              color: "var(--accent-2)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            Shopify Development & B2B
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Shopify stores that{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent-2) 0%, var(--accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              convert and scale
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "var(--muted-foreground)" }}
          >
            From DTC storefronts to complex B2B portals — we build, optimize,
            and maintain Shopify experiences that perform. Expert development
            paired with deep platform knowledge.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-xl text-base font-semibold text-white"
            style={{
              background: "var(--foreground)",
              boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
            }}
          >
            Start Your Shopify Project
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
            eyebrow="Shopify Development"
            title="Full-cycle DTC"
            titleGradient="store development"
            subtitle="We handle every layer of your Shopify store — from design to deployment and beyond."
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
                <div className="text-3xl mb-4">{item.icon}</div>
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

      {/* B2B divider */}
      <div
        className="px-4 sm:px-6 lg:px-8 py-px"
        style={{ background: "rgba(17, 24, 39, 0.06)" }}
      >
        <div
          className="max-w-7xl mx-auto"
          style={{ borderTop: "1px solid rgba(17, 24, 39, 0.12)" }}
        />
      </div>

      {/* B2B Section */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Shopify B2B"
            title="Enterprise wholesale &"
            titleGradient="B2B storefronts"
            subtitle="Shopify Plus B2B features, extended and customized for your exact wholesale or distributor operation."
          />

          {/* B2B highlight box */}
          <div
            className="rounded-lg p-8 mb-12"
            style={{
              background:
                "linear-gradient(135deg, rgba(17, 24, 39, 0.08) 0%, rgba(17, 24, 39, 0.08) 100%)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  value: "Shopify Plus",
                  label: "Native B2B features as foundation",
                },
                {
                  value: "Custom APIs",
                  label: "Deep ERP & CRM integrations",
                },
                {
                  value: "White-glove",
                  label: "Onboarding & training included",
                },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    className="text-xl font-bold mb-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    {item.value}
                  </div>
                  <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                    {item.label}
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
                <div className="text-3xl mb-4">{item.icon}</div>
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
            Let&apos;s build your Shopify store
          </h2>
          <p className="mb-8" style={{ color: "var(--muted-foreground)" }}>
            DTC or B2B — share your requirements and we&apos;ll respond with a
            scoped proposal within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-xl text-base font-semibold text-white"
            style={{
              background: "var(--foreground)",
              boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
            }}
          >
            Get a Proposal
          </Link>
        </div>
      </section>
    </>
  );
}
