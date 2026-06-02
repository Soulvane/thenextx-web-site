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
        style={{ background: "#0a0a0f" }}
      >
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{
              color: "#8b5cf6",
              background: "rgba(139, 92, 246, 0.1)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
          >
            Direct Mail & Offline Marketing
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: "#f0f0f8" }}
          >
            Offline mail that{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
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
            style={{ color: "#6b6b8a" }}
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
              background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.35)",
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
          background: "#0d0d1a",
          borderTop: "1px solid rgba(139,92,246,0.1)",
          borderBottom: "1px solid rgba(139,92,246,0.1)",
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
                  background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs" style={{ color: "#4a4a6a" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "#0a0a0f" }}
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
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(13, 13, 26, 0.8)",
                  border: "1px solid rgba(139, 92, 246, 0.12)",
                }}
              >
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "#f0f0f8" }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6b6b8a" }}
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
        style={{ background: "#0d0d1a" }}
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
                className="flex gap-6 rounded-2xl px-6 py-5"
                style={{
                  background: "rgba(13, 13, 26, 0.7)",
                  border: "1px solid rgba(139, 92, 246, 0.1)",
                }}
              >
                <span
                  className="text-2xl font-bold shrink-0 leading-none pt-1"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
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
                    style={{ color: "#f0f0f8" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b6b8a" }}>
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
        style={{ background: "#0a0a0f" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-xl font-semibold mb-8"
            style={{ color: "#4a4a6a" }}
          >
            Mail formats we produce
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {formats.map((f) => (
              <span
                key={f}
                className="px-4 py-2 rounded-xl text-sm font-medium"
                style={{
                  color: "#a0a0b8",
                  background: "rgba(13, 13, 26, 0.8)",
                  border: "1px solid rgba(139, 92, 246, 0.15)",
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
        style={{ background: "#0d0d1a" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "#f0f0f8" }}
          >
            Ready to put your brand in every mailbox?
          </h2>
          <p className="mb-8" style={{ color: "#6b6b8a" }}>
            Tell us about your target audience and goals — we&apos;ll propose a
            direct mail campaign plan.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-xl text-base font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.35)",
            }}
          >
            Get a Campaign Plan
          </Link>
        </div>
      </section>
    </>
  );
}
