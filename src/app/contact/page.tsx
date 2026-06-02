import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — TheNextX",
  description:
    "Get in touch with TheNextX. Tell us about your project and we'll respond within 24 hours with a clear plan and pricing.",
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
            Get in Touch
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Start your project with{" "}
            <span
              style={{ color: "var(--accent-2)" }}
            >
              TheNextX
            </span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--muted-foreground)" }}
          >
            Fill out the form and we&apos;ll respond within 24 hours with a
            clear plan and next steps.
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
                What to expect
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                After receiving your message, a senior member of the TheNextX
                team will review your requirements and respond with a proposed
                approach, timeline, and indicative pricing.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: "⏱️",
                  title: "Response in 24 hours",
                  body: "We review every enquiry the same business day.",
                },
                {
                  icon: "📋",
                  title: "Detailed proposal",
                  body: "Scoped deliverables, milestones, and fixed pricing.",
                },
                {
                  icon: "🔒",
                  title: "NDA available",
                  body: "Happy to sign before the discovery call if needed.",
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
                      {item.title}
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                      {item.body}
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
                Direct contact
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
