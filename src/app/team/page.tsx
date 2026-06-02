import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "Team — Korean Development, Design & Marketing Team — TheNextX",
  description:
    "TheNextX is a Korean team of developers, designers, and marketers. We combine deep technical expertise with AI-powered operations to deliver fast, high-quality results.",
  keywords: [
    "Korean marketing agency",
    "Korean digital marketing agency",
    "Korean advertising agency",
    "Korean marketing company",
    "Korean market entry services",
    "Korean market expansion",
    "Korean business consulting",
    "Korean localization services",
    "Korean language marketing",
    "Korean content marketing",
    "Korean social media marketing",
    "Korean SEO services",
    "Korean-American marketing agency",
    "cross-border marketing agency",
    "US Korea marketing agency",
    "Korea US business marketing",
    "Korean development team",
    "Korean design team",
    "한국 마케팅 대행",
    "한국 디지털 마케팅",
    "한국 광고 대행",
    "한국 시장 진출",
    "한국어 마케팅",
    "한미 마케팅",
    "한국 개발팀",
    "한국 디자이너",
  ],
};

const values = [
  { icon: "🇰🇷", titleKey: "team.value.ethic.title", bodyKey: "team.value.ethic.body" },
  { icon: "🤖", titleKey: "team.value.ai.title", bodyKey: "team.value.ai.body" },
  { icon: "⚡", titleKey: "team.value.fullstack.title", bodyKey: "team.value.fullstack.body" },
  { icon: "💬", titleKey: "team.value.comms.title", bodyKey: "team.value.comms.body" },
];

const teams = [
  {
    icon: "💻",
    roleKey: "team.unit.dev.role",
    nameKey: "team.unit.dev.name",
    bodyKey: "team.unit.dev.body",
    tags: ["Next.js", "React", "Flutter", "Shopify Liquid"],
  },
  {
    icon: "🎨",
    roleKey: "team.unit.design.role",
    nameKey: "team.unit.design.name",
    bodyKey: "team.unit.design.body",
    tags: ["UI / UX", "Figma", "Design Systems", "Prototyping"],
  },
  {
    icon: "📈",
    roleKey: "team.unit.marketing.role",
    nameKey: "team.unit.marketing.name",
    bodyKey: "team.unit.marketing.body",
    tags: ["AI Campaigns", "B2B Leads", "Direct Mail", "Analytics"],
  },
];

const advantages = [
  { titleKey: "team.why.timezone.title", bodyKey: "team.why.timezone.body" },
  { titleKey: "team.why.education.title", bodyKey: "team.why.education.body" },
  { titleKey: "team.why.speed.title", bodyKey: "team.why.speed.body" },
  { titleKey: "team.why.bilingual.title", bodyKey: "team.why.bilingual.body" },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{
              color: "var(--accent)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <T>team.hero.eyebrow</T>
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: "var(--foreground)" }}
          >
            <T>team.hero.title</T>{" "}
            <span style={{ color: "var(--accent-2)" }}>
              <T>team.hero.highlight</T>
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--muted-foreground)" }}
          >
            <T>team.hero.body</T>
          </p>
        </div>
      </section>

      {/* Values / Culture */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{
                color: "var(--accent)",
                background: "var(--background)",
                border: "1px solid var(--border)",
              }}
            >
              <T>team.values.eyebrow</T>
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              <T>team.values.title</T>{" "}
              <span style={{ color: "var(--accent-2)" }}>
                <T>team.values.highlight</T>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.titleKey}
                className="rounded-lg p-6"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  <T>{v.titleKey}</T>
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <T>{v.bodyKey}</T>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Units */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{
                color: "var(--accent)",
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <T>team.units.eyebrow</T>
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              <T>team.units.title</T>{" "}
              <span style={{ color: "var(--accent-2)" }}>
                <T>team.units.highlight</T>
              </span>
            </h2>
            <p
              className="mt-4 text-base max-w-xl mx-auto"
              style={{ color: "var(--muted-foreground)" }}
            >
              <T>team.units.body</T>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teams.map((team) => (
              <div
                key={team.nameKey}
                className="rounded-lg p-8 flex flex-col gap-5"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                  style={{
                    background: "var(--background)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {team.icon}
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "var(--accent)" }}
                  >
                    <T>{team.roleKey}</T>
                  </p>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    <T>{team.nameKey}</T>
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <T>{team.bodyKey}</T>
                </p>
                <div className="flex flex-wrap gap-2">
                  {team.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: "var(--background)",
                        color: "var(--subtle-foreground)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Korean Team */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--surface)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{
                color: "var(--accent)",
                background: "var(--background)",
                border: "1px solid var(--border)",
              }}
            >
              <T>team.why.eyebrow</T>
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              <T>team.why.title</T>{" "}
              <span style={{ color: "var(--accent-2)" }}>
                <T>team.why.highlight</T>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((adv, i) => (
              <div
                key={adv.titleKey}
                className="rounded-lg p-6 flex gap-5"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="text-2xl font-bold shrink-0 w-10 text-right leading-none pt-0.5"
                  style={{ color: "var(--accent-2)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    <T>{adv.titleKey}</T>
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    <T>{adv.bodyKey}</T>
                  </p>
                </div>
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
            <T>team.cta.title</T>
          </h2>
          <p className="mb-8 text-base" style={{ color: "var(--muted-foreground)" }}>
            <T>team.cta.body</T>
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-lg text-base font-semibold"
            style={{
              background: "var(--foreground)",
              color: "var(--background)",
              boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
            }}
          >
            <T>team.cta.button</T>
          </Link>
        </div>
      </section>
    </>
  );
}
