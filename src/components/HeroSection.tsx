"use client";

import Link from "@/components/LocaleLink";
import { useI18n } from "@/i18n/LanguageProvider";

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
  const { t } = useI18n();

  const proofStats = [
    { value: "6", label: "home.board.stat.services" },
    { value: "24h", label: "home.board.stat.response" },
    { value: "60%", label: "home.board.stat.cycles" },
  ];

  const operatingStack = [
    "home.board.lane.shopify",
    "home.board.lane.flutter",
    "home.board.lane.mailing",
    "home.board.lane.workflow",
  ];

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden border-b"
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
              "linear-gradient(rgba(23, 23, 23, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(23, 23, 23, 0.035) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            {eyebrow && (
              <div className="mb-6">
                <span className="ui-pill inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: "var(--accent)" }}
                  />
                  {t(eyebrow)}
                </span>
              </div>
            )}

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] mb-6"
              style={{ color: "var(--foreground)" }}
            >
              {t(headline)}
              {headlineGradient && (
                <>
                  {" "}
                  <span style={{ color: "var(--accent-2)" }}>
                    {t(headlineGradient)}
                  </span>
                </>
              )}
            </h1>

            <p
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl"
              style={{ color: "var(--muted-foreground)" }}
            >
              {t(subheadline)}
            </p>

            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                {primaryCTA && (
                  <Link
                    href={primaryCTA.href}
                    className="btn-primary px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-200 w-full sm:w-auto text-center"
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.boxShadow =
                        "0 12px 26px rgba(23, 23, 23, 0.14)";
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.boxShadow =
                        "0 8px 18px rgba(23, 23, 23, 0.1)";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    {t(primaryCTA.label)}
                  </Link>
                )}
                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.href}
                    className="btn-secondary px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-200 w-full sm:w-auto text-center"
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "var(--foreground)";
                      el.style.border = "1px solid var(--border-strong)";
                      el.style.background = "var(--surface-2)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "var(--secondary-foreground)";
                      el.style.border = "1px solid var(--border)";
                      el.style.background = "var(--surface)";
                    }}
                  >
                    {t(secondaryCTA.label)}
                  </Link>
                )}
              </div>
            )}

            {showBadges && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
                {[
                  "home.badge.aiFirst",
                  "home.badge.coreServices",
                  "home.badge.globalClients",
                  "home.badge.rapidDelivery",
                ].map((badge) => (
                  <div
                    key={badge}
                    className="ui-card flex items-center gap-2 rounded-lg px-3 py-3 text-sm"
                    style={{ color: "var(--secondary-foreground)" }}
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
                    <span>{t(badge)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="ui-card rounded-lg overflow-hidden">
            <div
              className="flex items-center justify-between border-b px-5 py-4"
              style={{ borderColor: "var(--border)" }}
            >
              <div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--subtle-foreground)" }}
                >
                  {t("home.board.title")}
                </div>
                <div
                  className="mt-1 text-lg font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  {t("home.board.subtitle")}
                </div>
              </div>
              <div
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background: "var(--surface-2)",
                  color: "var(--secondary-foreground)",
                }}
              >
                {t("home.board.status")}
              </div>
            </div>

            <div className="grid grid-cols-3 border-b" style={{ borderColor: "var(--border)" }}>
              {proofStats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-5 py-5 border-r last:border-r-0"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="text-3xl font-bold tracking-tight"
                    style={{ color: "var(--foreground)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="mt-1 text-xs uppercase tracking-wide"
                    style={{ color: "var(--subtle-foreground)" }}
                  >
                    {t(stat.label)}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr]">
              <div
                className="border-b sm:border-b-0 sm:border-r p-5"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "var(--subtle-foreground)" }}
                >
                  {t("home.board.lanes")}
                </div>
                <div className="space-y-2">
                  {operatingStack.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-md px-3 py-2 text-sm"
                      style={{
                        background: "var(--surface-2)",
                        color: "var(--secondary-foreground)",
                      }}
                    >
                      <span>{t(item)}</span>
                      <span style={{ color: "var(--subtle-foreground)" }}>→</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "var(--subtle-foreground)" }}
                >
                  {t("home.board.rhythm")}
                </div>
                <div className="space-y-4">
                  {[
                    ["01", "home.board.step.map"],
                    ["02", "home.board.step.build"],
                    ["03", "home.board.step.iterate"],
                  ].map(([step, label]) => (
                    <div key={step} className="flex gap-3">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold"
                        style={{
                          background: "var(--foreground)",
                          color: "#ffffff",
                        }}
                      >
                        {step}
                      </div>
                      <div
                        className="pt-1 text-sm leading-relaxed"
                        style={{ color: "var(--secondary-foreground)" }}
                      >
                        {t(label)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
