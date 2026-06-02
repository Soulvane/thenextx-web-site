import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Flutter App Development — TheNextX",
  description:
    "Cross-platform mobile app development with Flutter. Ship to iOS and Android simultaneously — beautiful, fast, and production-ready.",
};

const features = [
  {
    icon: "🎯",
    title: "Single Codebase, Both Platforms",
    body: "One Flutter codebase deployed to iOS and Android. Consistent UX, reduced maintenance overhead, and faster iteration cycles.",
  },
  {
    icon: "🎨",
    title: "Pixel-Perfect UI",
    body: "Custom widget development, animations, and design system implementation that brings your brand to life on mobile.",
  },
  {
    icon: "⚡",
    title: "High Performance",
    body: "Flutter compiles to native ARM code — no JavaScript bridge. Smooth 60/120fps rendering and fast startup times.",
  },
  {
    icon: "🔌",
    title: "Backend Integration",
    body: "REST API, GraphQL, Firebase, Supabase, WebSockets — we connect your app to any backend with clean, typed data layers.",
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    body: "FCM-based push notification setup with segmented targeting, deep linking, and notification permission best practices.",
  },
  {
    icon: "🏪",
    title: "App Store Launch",
    body: "Full App Store and Google Play submission — assets, metadata, review preparation, and post-launch monitoring.",
  },
];

const deliverables = [
  "UI/UX design files (Figma)",
  "Production Flutter codebase",
  "iOS & Android builds",
  "App Store / Play Store submission",
  "Unit & integration test coverage",
  "CI/CD pipeline setup",
  "Backend API integration",
  "Documentation & handoff",
];

export default function AppDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "#0a0a0f" }}
      >
        <div
          className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{
              color: "#3b82f6",
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
            }}
          >
            Flutter App Development
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: "#f0f0f8" }}
          >
            Beautiful apps on{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              iOS and Android
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "#6b6b8a" }}
          >
            We build production-ready Flutter applications from design to App
            Store launch — fast, polished, and built to grow with your user
            base.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-xl text-base font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.35)",
            }}
          >
            Start Your App
          </Link>
        </div>
      </section>

      {/* Why Flutter */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{
          background: "#0d0d1a",
          borderTop: "1px solid rgba(59,130,246,0.1)",
          borderBottom: "1px solid rgba(59,130,246,0.1)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                stat: "1 codebase",
                label: "Runs on iOS, Android, and Web",
              },
              {
                stat: "60–120 fps",
                label: "Native-quality rendering",
              },
              {
                stat: "~40% faster",
                label: "Development vs. native dual-platform",
              },
            ].map((item) => (
              <div key={item.label}>
                <div
                  className="text-2xl font-bold mb-1"
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.stat}
                </div>
                <div className="text-sm" style={{ color: "#6b6b8a" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "#0a0a0f" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="What We Build"
            title="Full-stack mobile"
            titleGradient="app delivery"
            subtitle="Every aspect of your app covered — from the first pixel to production monitoring."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(13, 13, 26, 0.8)",
                  border: "1px solid rgba(59, 130, 246, 0.12)",
                }}
              >
                <div className="text-3xl mb-4">{feat.icon}</div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "#f0f0f8" }}
                >
                  {feat.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6b6b8a" }}
                >
                  {feat.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "#0d0d1a" }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Deliverables"
            title="Everything you get"
            titleGradient="at handoff"
            subtitle="No black boxes. You own everything and have the documentation to maintain it."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl px-5 py-4"
                style={{
                  background: "rgba(13, 13, 26, 0.7)",
                  border: "1px solid rgba(59, 130, 246, 0.1)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm" style={{ color: "#a0a0b8" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "#0a0a0f" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "#f0f0f8" }}
          >
            Have an app idea?
          </h2>
          <p className="mb-8" style={{ color: "#6b6b8a" }}>
            Tell us about your app concept and we&apos;ll send back a scoped
            proposal with timeline and cost estimate.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-xl text-base font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.35)",
            }}
          >
            Discuss Your App
          </Link>
        </div>
      </section>
    </>
  );
}
