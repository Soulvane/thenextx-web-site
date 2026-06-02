import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "AI Agent Operations — TheNextX",
  description:
    "Deploy intelligent AI agents that run your workflows autonomously. TheNextX designs, builds, and manages AI agent systems integrated into your existing operations.",
};

const capabilities = [
  {
    icon: "💬",
    title: "Conversational AI Agents",
    body: "Customer-facing agents that handle support tickets, answer product questions, and qualify leads — indistinguishable from a human operator at scale.",
  },
  {
    icon: "🔍",
    title: "Data Extraction & Enrichment",
    body: "Agents that read, parse, and structure unstructured data from emails, PDFs, web pages, and APIs into clean databases or CRM records.",
  },
  {
    icon: "📋",
    title: "Document Processing",
    body: "Automated review, summarization, classification, and routing of contracts, invoices, reports, and forms — without human bottlenecks.",
  },
  {
    icon: "🔔",
    title: "Monitoring & Alerting",
    body: "Agents that watch your systems, detect anomalies, and take corrective action or alert the right person before issues escalate.",
  },
  {
    icon: "🔗",
    title: "Multi-System Orchestration",
    body: "Chain actions across Shopify, HubSpot, Slack, Google Workspace, and any REST API — triggered by events or on a schedule.",
  },
  {
    icon: "📊",
    title: "Reporting & Analysis",
    body: "Agents that pull data from disparate sources, compute KPIs, and deliver scheduled reports or real-time dashboards to your team.",
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
            AI Agent Operations
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Your business runs{" "}
            <span
              style={{ color: "var(--accent-2)" }}
            >
              24/7 on autopilot
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "var(--muted-foreground)" }}
          >
            We design and deploy AI agent systems that take over repetitive,
            high-volume, and complex tasks — integrated with your existing tools
            and supervised by your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary px-8 py-3.5 rounded-lg text-base font-semibold"
            >
              Deploy Your First Agent
            </Link>
            <Link
              href="/services"
              className="btn-secondary px-8 py-3.5 rounded-lg text-base font-semibold"
            >
              All Services
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
            { value: "70%", label: "Reduction in manual ops" },
            { value: "24/7", label: "Continuous operation" },
            { value: "<48h", label: "Typical deployment time" },
            { value: "10x", label: "Throughput increase" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "var(--accent-2)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs" style={{ color: "var(--subtle-foreground)" }}>
                {stat.label}
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
            eyebrow="Agent Capabilities"
            title="What our agents"
            titleGradient="can do for you"
            subtitle="From simple task automation to multi-step reasoning pipelines — we build agents that fit your exact operational needs."
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
                  {cap.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {cap.body}
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
            eyebrow="Deployment Process"
            title="From zero to operating agent"
            titleGradient="in days"
            subtitle="We handle the complexity of AI agent architecture so you don't have to."
          />
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Process Audit",
                body: "We map your existing workflows, identify the highest-ROI automation targets, and define success metrics.",
              },
              {
                step: "02",
                title: "Agent Design",
                body: "We architect the agent — selecting the right model, tools, memory, and retrieval strategy for your use case.",
              },
              {
                step: "03",
                title: "Integration",
                body: "We connect the agent to your existing systems via API, webhook, or direct database access — no disruption to live operations.",
              },
              {
                step: "04",
                title: "Testing & Tuning",
                body: "Rigorous evaluation against real-world edge cases before going live. We tune until accuracy meets your standard.",
              },
              {
                step: "05",
                title: "Monitoring & Improvement",
                body: "Post-launch monitoring, performance dashboards, and continuous improvement cycles included in our support retainer.",
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
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {item.body}
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
            Technologies we work with
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
            Ready to deploy your first agent?
          </h2>
          <p className="mb-8" style={{ color: "var(--muted-foreground)" }}>
            Share a workflow you want automated and we&apos;ll scope it within
            24 hours.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block px-8 py-3.5 rounded-lg text-base font-semibold"
            style={{
              background: "var(--foreground)",
              boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
            }}
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
