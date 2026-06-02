import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Direct Mail & Offline Marketing — TheNextX",
  description:
    "End-to-end offline direct mail marketing operations. Postcards, mailers, catalogs, and print campaigns — strategy, design, print, and delivery managed for you.",
};

const services = [
  {
    icon: "✉️",
    title: "Postcard Campaigns",
    body: "Design, print, and mail targeted postcard campaigns to prospects and customers. High-impact visuals that stand out in the mailbox.",
  },
  {
    icon: "📦",
    title: "Direct Mail Packages",
    body: "Full envelope packages including letters, brochures, and inserts. Perfect for premium offers, B2B outreach, and high-value customer acquisition.",
  },
  {
    icon: "📋",
    title: "Catalog & Lookbook Mailers",
    body: "Seasonal catalogs, product lookbooks, and brand magazines printed and distributed to your target audience.",
  },
  {
    icon: "🗂️",
    title: "Mailing List Management",
    body: "Audience list sourcing, segmentation, deduplication, and NCOA address verification to maximize deliverability and minimize waste.",
  },
  {
    icon: "🎨",
    title: "Print Design & Production",
    body: "Print-ready design for every format — postcards, flyers, brochures, and oversized mailers. On-brand, press-optimized files every time.",
  },
  {
    icon: "📊",
    title: "Campaign Tracking & Reporting",
    body: "Unique promo codes, QR codes, and dedicated landing pages to attribute offline conversions and measure true campaign ROI.",
  },
];

const formats = [
  "4×6 Postcards",
  "6×9 Postcards",
  "6×11 Postcards",
  "EDDM Mailers",
  "Tri-fold Brochures",
  "Catalogs",
  "Envelope Packages",
  "Oversized Flats",
];

export default function MailingPage() {
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
            Direct Mail & Offline Marketing
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Offline mail that{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent-2) 0%, var(--accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              drives real results
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "var(--muted-foreground)" }}
          >
            We manage your physical mail marketing from start to finish —
            strategy, design, print production, and delivery. Postcards,
            brochures, and direct mail packages that reach customers where
            digital can&apos;t.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-xl text-base font-semibold text-white"
            style={{
              background: "var(--foreground)",
              boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
            }}
          >
            Start a Mail Campaign
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid rgba(17, 24, 39, 0.1)",
          borderBottom: "1px solid rgba(17, 24, 39, 0.1)",
        }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "4.4%", label: "Avg. direct mail response rate" },
            { value: "90%", label: "Of mail gets opened & read" },
            { value: "27%", label: "Higher recall vs. digital ads" },
            { value: "100%", label: "Fully managed — end-to-end" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-3xl font-bold mb-1"
                style={{
                  background: "linear-gradient(135deg, var(--accent-2) 0%, var(--accent) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs" style={{ color: "var(--subtle-foreground)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="What We Manage"
            title="Every piece of your"
            titleGradient="offline mail operation"
            subtitle="From list sourcing to doorstep delivery — nothing falls through the cracks."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="rounded-lg p-6"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {svc.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Our Process"
            title="From brief to"
            titleGradient="mailbox"
            subtitle="A clear, repeatable process that gets your mail in front of the right people."
          />
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Strategy & Audience",
                body: "Define campaign goals, select target geography or demographics, and build or source your mailing list.",
              },
              {
                step: "02",
                title: "Design & Copywriting",
                body: "Print-ready creative with compelling copy, strong CTA, and tracking elements (QR code, promo code, or custom URL).",
              },
              {
                step: "03",
                title: "Print Production",
                body: "Coordinate with print vendors for the right format, paper stock, and finish. Proof review before any production run.",
              },
              {
                step: "04",
                title: "Mail & Deliver",
                body: "Postage, presort, and USPS/carrier submission. Tracking confirmation and delivery window estimates provided.",
              },
              {
                step: "05",
                title: "Measure & Optimize",
                body: "Attribution reporting via QR scans, landing page visits, and promo code redemptions. Insights fed into the next campaign.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 rounded-lg px-6 py-5"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="text-2xl font-bold shrink-0 leading-none pt-1"
                  style={{
                    background: "var(--foreground)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.step}
                </span>
                <div>
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-xl font-semibold mb-8"
            style={{ color: "var(--subtle-foreground)" }}
          >
            Mail formats we produce
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {formats.map((f) => (
              <span
                key={f}
                className="px-4 py-2 rounded-xl text-sm font-medium"
                style={{
                  color: "var(--secondary-foreground)",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                {f}
              </span>
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
            Ready to put your brand in every mailbox?
          </h2>
          <p className="mb-8" style={{ color: "var(--muted-foreground)" }}>
            Tell us about your target audience and goals — we&apos;ll propose a
            direct mail campaign plan.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-xl text-base font-semibold text-white"
            style={{
              background: "var(--foreground)",
              boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
            }}
          >
            Get a Campaign Plan
          </Link>
        </div>
      </section>
    </>
  );
}
