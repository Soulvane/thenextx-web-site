import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "Flutter App Development — iOS & Android — TheNextX",
  description:
    "Cross-platform mobile app development with Flutter. Ship production-ready iOS and Android apps simultaneously — fast, beautiful, and scalable.",
  keywords: [
    "Flutter app development",
    "cross-platform mobile app",
    "iOS app development",
    "Android app development",
    "Flutter agency",
    "mobile app development agency",
    "Flutter developer",
    "앱 개발",
    "모바일 앱 개발",
    "Flutter 개발",
    "iOS Android 앱",
  ],
};

const features = [
  {
    icon: "🎯",
    title: "app.feature.codebase.title",
    body: "app.feature.codebase.body",
  },
  {
    icon: "🎨",
    title: "app.feature.ui.title",
    body: "app.feature.ui.body",
  },
  {
    icon: "⚡",
    title: "app.feature.performance.title",
    body: "app.feature.performance.body",
  },
  {
    icon: "🔌",
    title: "app.feature.backend.title",
    body: "app.feature.backend.body",
  },
  {
    icon: "🔔",
    title: "app.feature.push.title",
    body: "app.feature.push.body",
  },
  {
    icon: "🏪",
    title: "app.feature.launch.title",
    body: "app.feature.launch.body",
  },
];

const deliverables = [
  "app.deliverable.design",
  "app.deliverable.codebase",
  "app.deliverable.builds",
  "app.deliverable.submission",
  "app.deliverable.tests",
  "app.deliverable.cicd",
  "app.deliverable.backend",
  "app.deliverable.docs",
];

export default function AppDevelopmentPage() {
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
              color: "var(--accent)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <T>service.flutter.title</T>
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: "var(--foreground)" }}
          >
            <T>app.hero.title</T>{" "}
            <span
              style={{ color: "var(--accent-2)" }}
            >
              <T>app.hero.highlight</T>
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "var(--muted-foreground)" }}
          >
            <T>app.hero.body</T>
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block px-8 py-3.5 rounded-lg text-base font-semibold"
            style={{
              background: "var(--foreground)",
              boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
            }}
          >
            <T>app.hero.primary</T>
          </Link>
        </div>
      </section>

      {/* Why Flutter */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                stat: "1 codebase",
                label: "app.stat.platforms",
              },
              {
                stat: "60–120 fps",
                label: "app.stat.rendering",
              },
              {
                stat: "~40% faster",
                label: "app.stat.speed",
              },
            ].map((item) => (
              <div key={item.label}>
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "var(--accent-2)" }}
                >
                  {item.stat}
                </div>
                <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  <T>{item.label}</T>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="app.features.eyebrow"
            title="app.features.title"
            titleGradient="app.features.highlight"
            subtitle="app.features.body"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="rounded-lg p-6"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="mono-icon text-3xl mb-4">{feat.icon}</div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  <T>{feat.title}</T>
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <T>{feat.body}</T>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="app.deliverables.eyebrow"
            title="app.deliverables.title"
            titleGradient="app.deliverables.highlight"
            subtitle="app.deliverables.body"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg px-5 py-4"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm" style={{ color: "var(--secondary-foreground)" }}>
                  <T>{item}</T>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            <T>app.cta.title</T>
          </h2>
          <p className="mb-8" style={{ color: "var(--muted-foreground)" }}>
            <T>app.cta.body</T>
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block px-8 py-3.5 rounded-lg text-base font-semibold"
            style={{
              background: "var(--foreground)",
              boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
            }}
          >
            <T>app.cta.button</T>
          </Link>
        </div>
      </section>
    </>
  );
}
