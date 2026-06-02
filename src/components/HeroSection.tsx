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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0a0a0f" }}
    >
      {/* Background radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)",
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
                color: "#3b82f6",
                background: "rgba(59, 130, 246, 0.08)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#3b82f6" }}
              />
              {eyebrow}
            </span>
          </div>
        )}

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
          style={{ color: "#f0f0f8" }}
        >
          {headline}
          {headlineGradient && (
            <>
              {" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {headlineGradient}
              </span>
            </>
          )}
        </h1>

        <p
          className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: "#6b6b8a" }}
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
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.35)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.boxShadow = "0 0 50px rgba(59, 130, 246, 0.55)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.boxShadow = "0 0 30px rgba(59, 130, 246, 0.35)";
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
                  color: "#a0a0b8",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#f0f0f8";
                  el.style.border = "1px solid rgba(255,255,255,0.2)";
                  el.style.background = "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#a0a0b8";
                  el.style.border = "1px solid rgba(255,255,255,0.1)";
                  el.style.background = "rgba(255,255,255,0.04)";
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
                style={{ color: "#4a4a6a" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
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
