"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/i18n/LanguageProvider";

const navLinks = [
  { href: "/", label: "nav.home" },
  { href: "/services", label: "nav.services" },
  { href: "/shopify", label: "nav.shopify" },
  { href: "/app-development", label: "nav.appDevelopment" },
  { href: "/mailing", label: "nav.mailing" },
  { href: "/team", label: "nav.team" },
  { href: "/contact", label: "nav.contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, locale } = useI18n();

  const withLocale = (href: string) =>
    href === "/" ? `/${locale}` : `/${locale}${href}`;

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: "rgba(247, 247, 247, 0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{
                background: "var(--foreground)",
              }}
            >
              NX
            </div>
            <span
              className="text-lg font-bold tracking-tight"
              style={{
                color: "var(--foreground)",
              }}
            >
              TheNextX
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const href = withLocale(link.href);
              const active = pathname === href;
              return (
                <Link
                  key={link.href}
                  href={href}
                  className="px-3 py-2 text-sm rounded-md transition-colors duration-200"
                  style={{
                    color: active ? "var(--accent)" : "var(--secondary-foreground)",
                    background: active
                      ? "var(--surface-2)"
                      : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--foreground)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--secondary-foreground)";
                    }
                  }}
                >
                  {t(link.label)}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href={withLocale("/contact")}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200"
              style={{
                background: "var(--foreground)",
                boxShadow: "0 6px 16px rgba(23, 23, 23, 0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 10px 22px rgba(23, 23, 23, 0.16)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 6px 16px rgba(23, 23, 23, 0.12)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              {t("nav.getStarted")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md"
            style={{ color: "var(--secondary-foreground)" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={t("nav.toggleMenu")}
          >
            {mobileOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-1"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {navLinks.map((link) => {
            const href = withLocale(link.href);
            const active = pathname === href;
            return (
              <Link
                key={link.href}
                href={href}
                className="px-3 py-2.5 text-sm rounded-md"
                style={{
                  color: active ? "var(--accent)" : "var(--secondary-foreground)",
                  background: active
                    ? "var(--surface-2)"
                    : "transparent",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {t(link.label)}
              </Link>
            );
          })}
          <div className="mt-2">
            <LanguageSwitcher />
          </div>
          <Link
            href={withLocale("/contact")}
            className="mt-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white text-center"
            style={{
              background: "var(--foreground)",
            }}
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.getStarted")}
          </Link>
        </div>
      )}
    </header>
  );
}
