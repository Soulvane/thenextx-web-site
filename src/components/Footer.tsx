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
        background: "#08080f",
        borderTop: "1px solid rgba(59, 130, 246, 0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                }}
              >
                NX
              </div>
              <span
                className="text-lg font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                TheNextX
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#6b6b8a" }}>
              Building the next generation of digital operations through human
              + AI collaboration. From Shopify stores to AI-powered workflows,
              we scale your business with precision.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:hello@thenextx.com"
                className="text-sm transition-colors duration-200"
                style={{ color: "#3b82f6" }}
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
                style={{ color: "#4a4a6a" }}
              >
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#6b6b8a" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "#f0f0f8";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "#6b6b8a";
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
          style={{ borderTop: "1px solid rgba(59, 130, 246, 0.08)" }}
        >
          <p className="text-xs" style={{ color: "#4a4a6a" }}>
            &copy; {new Date().getFullYear()} TheNextX. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#4a4a6a" }}>
            Powered by Human + AI Collaboration
          </p>
        </div>
      </div>
    </footer>
  );
}
