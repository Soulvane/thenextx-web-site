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
        style={{ background: "#0a0a0f" }}
      >
        <div
          className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
          aria-hidden="true"
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{
              color: "#3b82f6",
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
            }}
          >
            Get in Touch
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4"
            style={{ color: "#f0f0f8" }}
          >
            Start your project with{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              TheNextX
            </span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: "#6b6b8a" }}
          >
            Fill out the form and we&apos;ll respond within 24 hours with a
            clear plan and next steps.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "#0d0d1a" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2
                className="text-xl font-semibold mb-2"
                style={{ color: "#f0f0f8" }}
              >
                What to expect
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#6b6b8a" }}
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
                  className="flex gap-4 rounded-xl p-4"
                  style={{
                    background: "rgba(13, 13, 26, 0.7)",
                    border: "1px solid rgba(59, 130, 246, 0.1)",
                  }}
                >
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <div
                      className="text-sm font-semibold mb-0.5"
                      style={{ color: "#f0f0f8" }}
                    >
                      {item.title}
                    </div>
                    <div className="text-xs" style={{ color: "#6b6b8a" }}>
                      {item.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-5"
              style={{
                background: "rgba(13, 13, 26, 0.7)",
                border: "1px solid rgba(59, 130, 246, 0.12)",
              }}
            >
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#4a4a6a" }}
              >
                Direct contact
              </div>
              <a
                href="mailto:info@thenextx.net"
                className="text-sm font-medium"
                style={{ color: "#3b82f6" }}
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
