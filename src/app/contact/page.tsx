import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "Contact — TheNextX Marketing & Operations Agency",
  description:
    "Get in touch with TheNextX. Whether you need AI marketing automation, B2B lead generation, Shopify growth, or app development — tell us about your project and we'll respond within 24 hours.",
  keywords: [
    "contact marketing agency",
    "hire AI marketing agency",
    "Shopify agency contact",
    "B2B lead generation agency",
    "마케팅 대행사 문의",
    "AI 마케팅 문의",
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "var(--background)" }}
      >        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{
              color: "var(--accent)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <T>contact.hero.eyebrow</T>
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4"
            style={{ color: "var(--foreground)" }}
          >
            <T>contact.hero.title</T>{" "}
            <span
              style={{ color: "var(--accent-2)" }}
            >
              <T>contact.hero.highlight</T>
            </span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--muted-foreground)" }}
          >
            <T>contact.hero.body</T>
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--foreground)" }}
              >
                <T>contact.expect.title</T>
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                <T>contact.expect.body</T>
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: "⏱️",
                  title: "contact.expect.response.title",
                  body: "contact.expect.response.body",
                },
                {
                  icon: "📋",
                  title: "contact.expect.proposal.title",
                  body: "contact.expect.proposal.body",
                },
                {
                  icon: "🔒",
                  title: "contact.expect.nda.title",
                  body: "contact.expect.nda.body",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-lg p-4"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span className="mono-icon text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <div
                      className="text-sm font-semibold mb-0.5"
                      style={{ color: "var(--foreground)" }}
                    >
                      <T>{item.title}</T>
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                      <T>{item.body}</T>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-lg p-5"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--subtle-foreground)" }}
              >
                <T>contact.direct</T>
              </div>
              <a
                href="mailto:info@thenextx.net"
                className="text-sm font-medium"
                style={{ color: "var(--accent)" }}
              >
                info@thenextx.net
              </a>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
