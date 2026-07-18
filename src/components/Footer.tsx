"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/LanguageProvider";

const footerLinks = {
  "footer.services": [
    { href: "/shopify", label: "service.shopify.title" },
    { href: "/shopify", label: "service.shopifyB2B.title" },
    { href: "/app-development", label: "footer.flutterApps" },
    { href: "/mailing", label: "service.mailing.title" },
  ],
  "footer.company": [
    { href: "/services", label: "common.allServices" },
    { href: "/contact", label: "footer.contactUs" },
  ],
};

export default function Footer() {
  const { t, locale } = useI18n();
  const withLocale = (href: string) =>
    href === "/" ? `/${locale}` : `/${locale}${href}`;

  return (
    <footer
      style={{
        background: "var(--surface-2)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4 w-fit">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                style={{
                  background: "var(--foreground)",
                  color: "#ffffff",
                }}
              >
                NX
              </div>
              <span
                className="text-lg font-bold"
                style={{
                  color: "var(--foreground)",
                }}
              >
                TheNextX
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "var(--muted-foreground)" }}>
              {t("footer.body")}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:info@thenextx.net"
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--foreground)" }}
              >
                info@thenextx.net
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--subtle-foreground)" }}
              >
                {t(title)}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={withLocale(link.href)}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--muted-foreground)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "var(--foreground)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "var(--muted-foreground)";
                      }}
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--subtle-foreground)" }}>
            &copy; {new Date().getFullYear()} TheNextX. {t("footer.rights")}
          </p>
          <p className="text-xs" style={{ color: "var(--subtle-foreground)" }}>
            {t("footer.poweredBy")}
          </p>
        </div>
      </div>
    </footer>
  );
}
