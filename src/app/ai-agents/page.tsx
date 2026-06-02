import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "AI Agent Operations & AI Marketing Automation — TheNextX",
  description:
    "Deploy AI agents that run your marketing, sales, and business workflows autonomously. TheNextX specializes in AI marketing automation, AI lead generation, AI sales automation, and AI customer engagement.",
  keywords: [
    "AI agent operations",
    "AI marketing automation",
    "AI lead generation",
    "AI sales automation",
    "AI customer engagement",
    "AI content automation",
    "AI marketing operations",
    "marketing automation agency",
    "AI workflow automation",
    "AI 마케팅 자동화",
    "AI 영업 자동화",
    "AI 업무 자동화",
    "AI 고객지원",
    "AI 콘텐츠 생성",
  ],
};

const capabilities = [
  {
    icon: "💬",
    title: "ai.capability.conversation.title",
    body: "ai.capability.conversation.body",
  },
  {
    icon: "🔍",
    title: "ai.capability.data.title",
    body: "ai.capability.data.body",
  },
  {
    icon: "📋",
    title: "ai.capability.documents.title",
    body: "ai.capability.documents.body",
  },
  {
    icon: "🔔",
    title: "ai.capability.monitoring.title",
    body: "ai.capability.monitoring.body",
  },
  {
    icon: "🔗",
    title: "ai.capability.orchestration.title",
    body: "ai.capability.orchestration.body",
  },
  {
    icon: "📊",
    title: "ai.capability.reporting.title",
    body: "ai.capability.reporting.body",
  },
];

const techStack = [
  "OpenAI GPT-4o",
  "Claude 3.5 Sonnet",
  "LangChain / LangGraph",
  "n8n",
  "Make (Integromat)",
  "Custom REST APIs",
  "Webhooks",
  "Vector Databases",
];

export default function AIAgentsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "var(--background)" }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span
            className="ui-pill inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "var(--accent)",
                animation: "pulse 2s infinite",
              }}
            />
            <T>service.aiAgents.title</T>
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: "var(--foreground)" }}
          >
            <T>ai.hero.title</T>{" "}
            <span
              style={{ color: "var(--accent-2)" }}
            >
              <T>ai.hero.highlight</T>
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "var(--muted-foreground)" }}
          >
            <T>ai.hero.body</T>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary px-8 py-3.5 rounded-lg text-base font-semibold"
            >
              <T>ai.hero.primary</T>
            </Link>
            <Link
              href="/services"
              className="btn-secondary px-8 py-3.5 rounded-lg text-base font-semibold"
            >
              <T>common.allServices</T>
            </Link>
          </div>
        </div>
      </section>

      {/* Stat bar */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "70%", label: "ai.stat.reduction" },
            { value: "24/7", label: "ai.stat.operation" },
            { value: "<48h", label: "ai.stat.deployment" },
            { value: "10x", label: "ai.stat.throughput" },
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

      {/* Capabilities */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="ai.capabilities.eyebrow"
            title="ai.capabilities.title"
            titleGradient="ai.capabilities.highlight"
            subtitle="ai.capabilities.body"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-lg p-6"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="mono-icon text-3xl mb-4">{cap.icon}</div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  <T>{cap.title}</T>
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <T>{cap.body}</T>
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
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="ai.process.eyebrow"
            title="ai.process.title"
            titleGradient="ai.process.highlight"
            subtitle="ai.process.body"
          />
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "ai.process.audit.title",
                body: "ai.process.audit.body",
              },
              {
                step: "02",
                title: "ai.process.design.title",
                body: "ai.process.design.body",
              },
              {
                step: "03",
                title: "ai.process.integration.title",
                body: "ai.process.integration.body",
              },
              {
                step: "04",
                title: "ai.process.testing.title",
                body: "ai.process.testing.body",
              },
              {
                step: "05",
                title: "ai.process.monitoring.title",
                body: "ai.process.monitoring.body",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 rounded-lg p-6"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="text-xl font-bold shrink-0 w-10"
                  style={{ color: "var(--subtle-foreground)" }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
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

      {/* Tech stack */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-xl font-semibold mb-8"
            style={{ color: "var(--subtle-foreground)" }}
          >
            <T>common.technologies</T>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  color: "var(--secondary-foreground)",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                {tech}
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
            <T>ai.cta.title</T>
          </h2>
          <p className="mb-8" style={{ color: "var(--muted-foreground)" }}>
            <T>ai.cta.body</T>
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block px-8 py-3.5 rounded-lg text-base font-semibold"
            style={{
              background: "var(--foreground)",
              boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
            }}
          >
            <T>ai.cta.button</T>
          </Link>
        </div>
      </section>
    </>
  );
}
