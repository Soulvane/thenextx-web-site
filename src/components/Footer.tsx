"use client";

import Link from "next/link";

const footerLinks = {
  Services: [
    { href: "/ai-agents", label: "AI Agent Operations" },
    { href: "/shopify", label: "Shopify Development" },
    { href: "/shopify", label: "Shopify B2B" },
    { href: "/app-development", label: "Flutter Apps" },
    { href: "/mailing", label: "Mailing Campaigns" },
  ],
  Company: [
    { href: "/services", label: "All Services" },
    { href: "/ai-agents", label: "AI Agents" },
    { href: "/contact", label: "Contact Us" },
  ],
};

export default function Footer() {
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
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit">
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
              Building the next generation of digital operations through human
              + AI collaboration. From Shopify stores to AI-powered workflows,
              we scale your business with precision.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:hello@thenextx.com"
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--foreground)" }}
              >
                hello@thenextx.com
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
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
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
                      {link.label}
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
            &copy; {new Date().getFullYear()} TheNextX. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--subtle-foreground)" }}>
            Powered by Human + AI Collaboration
          </p>
        </div>
      </div>
    </footer>
  );
}
