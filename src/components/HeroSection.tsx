"use client";

import Link from "next/link";

interface HeroSectionProps {
  eyebrow?: string;
  headline: string;
  headlineGradient?: string;
  subheadline: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  showBadges?: boolean;
}

export default function HeroSection({
  eyebrow,
  headline,
  headlineGradient,
  subheadline,
  primaryCTA,
  secondaryCTA,
  showBadges = false,
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(23, 23, 23, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(23, 23, 23, 0.045) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <div className="mb-6">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full"
                style={{
                  color: "var(--accent)",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "var(--accent)" }}
              />
              {eyebrow}
            </span>
          </div>
        )}

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
          style={{ color: "var(--foreground)" }}
        >
          {headline}
          {headlineGradient && (
            <>
              {" "}
              <span
                style={{
                  color: "var(--accent-2)",
                }}
              >
                {headlineGradient}
              </span>
            </>
          )}
        </h1>

        <p
          className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: "var(--muted-foreground)" }}
        >
          {subheadline}
        </p>

        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="px-8 py-3.5 rounded-xl text-base font-semibold text-white transition-all duration-200 w-full sm:w-auto text-center"
                style={{
                  background: "var(--foreground)",
                  boxShadow: "0 8px 18px rgba(23, 23, 23, 0.12)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.boxShadow = "0 12px 26px rgba(23, 23, 23, 0.16)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.boxShadow = "0 8px 18px rgba(23, 23, 23, 0.12)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 w-full sm:w-auto text-center"
                style={{
                  color: "var(--secondary-foreground)",
                  background: "#ffffff",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "var(--foreground)";
                  el.style.border = "1px solid #d1d5db";
                  el.style.background = "#f8fafc";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "var(--secondary-foreground)";
                  el.style.border = "1px solid var(--border)";
                  el.style.background = "#ffffff";
                }}
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        )}

        {showBadges && (
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
            {[
              "AI-First Approach",
              "7 Core Services",
              "Global Clients",
              "Rapid Delivery",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--subtle-foreground)" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
