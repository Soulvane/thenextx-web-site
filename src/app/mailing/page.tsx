import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "Direct Mail & Offline Marketing Operations — TheNextX",
  description:
    "End-to-end offline direct mail marketing. Postcard campaigns, catalog mailers, and print campaigns — strategy, design, print production, and delivery fully managed.",
  keywords: [
    "direct mail marketing",
    "direct mail agency",
    "postcard marketing",
    "offline marketing",
    "print marketing",
    "direct mail campaigns",
    "EDDM marketing",
    "catalog mailers",
    "direct mail management",
    "우편 마케팅",
    "오프라인 마케팅",
    "엽서 마케팅",
    "다이렉트 메일",
  ],
};

const services = [
  {
    icon: "✉️",
    title: "mailing.service.postcards.title",
    body: "mailing.service.postcards.body",
  },
  {
    icon: "📦",
    title: "mailing.service.packages.title",
    body: "mailing.service.packages.body",
  },
  {
    icon: "📋",
    title: "mailing.service.catalogs.title",
    body: "mailing.service.catalogs.body",
  },
  {
    icon: "🗂️",
    title: "mailing.service.lists.title",
    body: "mailing.service.lists.body",
  },
  {
    icon: "🎨",
    title: "mailing.service.print.title",
    body: "mailing.service.print.body",
  },
  {
    icon: "📊",
    title: "mailing.service.tracking.title",
    body: "mailing.service.tracking.body",
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
      >        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{
              color: "var(--accent-2)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <T>mailing.hero.eyebrow</T>
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: "var(--foreground)" }}
          >
            <T>mailing.hero.title</T>{" "}
            <span
              style={{ color: "var(--accent-2)" }}
            >
              <T>mailing.hero.highlight</T>
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "var(--muted-foreground)" }}
          >
            <T>mailing.hero.body</T>
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block px-8 py-3.5 rounded-lg text-base font-semibold"
            style={{
              background: "var(--foreground)",
              boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
            }}
          >
            <T>mailing.hero.primary</T>
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "4.4%", label: "mailing.stat.response" },
            { value: "90%", label: "mailing.stat.opened" },
            { value: "27%", label: "mailing.stat.recall" },
            { value: "100%", label: "mailing.stat.managed" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "var(--accent-2)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs" style={{ color: "var(--subtle-foreground)" }}>
                <T>{stat.label}</T>
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
            eyebrow="mailing.manage.eyebrow"
            title="mailing.manage.title"
            titleGradient="mailing.manage.highlight"
            subtitle="mailing.manage.body"
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
                <div className="mono-icon text-3xl mb-4">{svc.icon}</div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  <T>{svc.title}</T>
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <T>{svc.body}</T>
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
            eyebrow="mailing.process.eyebrow"
            title="mailing.process.title"
            titleGradient="mailing.process.highlight"
            subtitle="mailing.process.body"
          />
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "mailing.process.strategy.title",
                body: "mailing.process.strategy.body",
              },
              {
                step: "02",
                title: "mailing.process.design.title",
                body: "mailing.process.design.body",
              },
              {
                step: "03",
                title: "mailing.process.print.title",
                body: "mailing.process.print.body",
              },
              {
                step: "04",
                title: "mailing.process.deliver.title",
                body: "mailing.process.deliver.body",
              },
              {
                step: "05",
                title: "mailing.process.optimize.title",
                body: "mailing.process.optimize.body",
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
                  style={{ color: "var(--subtle-foreground)" }}
                >
                  {item.step}
                </span>
                <div>
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    <T>{item.title}</T>
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    <T>{item.body}</T>
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
            <T>mailing.formats</T>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {formats.map((f) => (
              <span
                key={f}
                className="px-4 py-2 rounded-lg text-sm font-medium"
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
            <T>mailing.cta.title</T>
          </h2>
          <p className="mb-8" style={{ color: "var(--muted-foreground)" }}>
            <T>mailing.cta.body</T>
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block px-8 py-3.5 rounded-lg text-base font-semibold"
            style={{
              background: "var(--foreground)",
              boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
            }}
          >
            <T>mailing.cta.button</T>
          </Link>
        </div>
      </section>
    </>
  );
}
