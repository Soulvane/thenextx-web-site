import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team — Korean Development, Design & Marketing Team — TheNextX",
  description:
    "TheNextX is a Korean team of developers, designers, and marketers. We combine deep technical expertise with AI-powered operations to deliver fast, high-quality results.",
  keywords: [
    "Korean development team",
    "Korean marketing agency",
    "Korean design team",
    "한국 개발팀",
    "한국 마케팅 대행",
    "한국 디자이너",
  ],
};

const values = [
  {
    icon: "🇰🇷",
    title: "Korean Work Ethic",
    body: "We bring the precision, dedication, and relentless execution culture that Korean teams are known for globally. Deadlines are commitments, not suggestions.",
  },
  {
    icon: "🤖",
    title: "AI-First Approach",
    body: "Every workflow is built with AI at the core — from campaign automation to code generation. We move faster because we've built the infrastructure to do so.",
  },
  {
    icon: "⚡",
    title: "Full-Stack Capability",
    body: "Development, design, and marketing under one roof. No hand-off friction, no agency blame games — one team owns the full outcome.",
  },
  {
    icon: "💬",
    title: "Direct Communication",
    body: "Flat structure, async-friendly, bilingual. You speak to the people actually doing the work — not account managers reading status updates.",
  },
];

const teams = [
  {
    icon: "💻",
    name: "Development Team",
    role: "Engineers",
    description:
      "Full-stack and mobile developers who ship production-quality code fast. We handle everything from backend APIs to pixel-perfect frontends and cross-platform apps.",
    tags: ["Next.js", "React", "Flutter", "Shopify Liquid"],
  },
  {
    icon: "🎨",
    name: "Design Team",
    role: "Designers",
    description:
      "UI/UX designers who create clean, modern interfaces grounded in real user behavior. We take projects from wireframe all the way to pixel-perfect implementation.",
    tags: ["UI / UX", "Figma", "Design Systems", "Prototyping"],
  },
  {
    icon: "📈",
    name: "Marketing Team",
    role: "Marketers",
    description:
      "Performance and growth marketers running AI-powered campaigns, B2B lead generation pipelines, direct mail operations, and deep analytics.",
    tags: ["AI Campaigns", "B2B Leads", "Direct Mail", "Analytics"],
  },
];

const advantages = [
  {
    title: "Asia-Pacific Timezone Coverage",
    body: "Based in Korea (UTC+9), we naturally cover the Asia-Pacific window that Western agencies miss. For global clients, this means near-24h execution across overlapping hours.",
  },
  {
    title: "Strong Technical Education Background",
    body: "Korea's engineering programs consistently rank among the world's best. Our developers and designers come from that foundation — rigorous, methodical, and precise.",
  },
  {
    title: "Fast Execution Culture",
    body: "Speed is cultural here. Rapid iteration, same-day responses, and short feedback loops are the default — not something we charge extra for.",
  },
  {
    title: "Bilingual EN / KO Operations",
    body: "All client communication happens in English. Internally we operate in Korean. You get the clarity of a native-English deliverable with the efficiency of a tightly-coordinated local team.",
  },
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
            The Team
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Meet the team{" "}
            <span style={{ color: "var(--accent-2)" }}>
              behind TheNextX
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--muted-foreground)" }}
          >
            A Korean team combining deep human expertise with AI-powered
            operations. We build, design, and grow — faster than agencies twice
            our size.
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
              How We Work
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              Culture &{" "}
              <span style={{ color: "var(--accent-2)" }}>Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
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
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {v.body}
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
              Team Units
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              Three teams,{" "}
              <span style={{ color: "var(--accent-2)" }}>one output</span>
            </h2>
            <p
              className="mt-4 text-base max-w-xl mx-auto"
              style={{ color: "var(--muted-foreground)" }}
            >
              Development, design, and marketing operate as a single integrated
              unit — not siloed departments handing off Jira tickets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teams.map((team) => (
              <div
                key={team.name}
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
                    {team.role}
                  </p>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {team.name}
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {team.description}
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
              The Advantage
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              Why work with a{" "}
              <span style={{ color: "var(--accent-2)" }}>Korean team?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
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
                    {adv.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {adv.body}
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
            Ready to work together?
          </h2>
          <p className="mb-8 text-base" style={{ color: "var(--muted-foreground)" }}>
            Tell us what you are building. We will tell you exactly how we can
            help — no fluff, no discovery calls that go nowhere.
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
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
