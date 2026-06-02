"use client";

import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
  tags?: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  tags,
}: ServiceCardProps) {
  const card = (
    <div
      className="ui-card group rounded-lg p-6 h-full flex flex-col transition-all duration-300"
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.border = "1px solid var(--border-strong)";
        el.style.boxShadow = "0 12px 28px rgba(23, 23, 23, 0.08)";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.border = "1px solid var(--border)";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Icon */}
      <div
        className="mono-icon w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-5"
        style={{ background: "var(--surface-2)" }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="text-lg font-semibold mb-3 leading-snug"
        style={{ color: "var(--foreground)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted-foreground)" }}>
        {description}
      </p>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                color: "var(--secondary-foreground)",
                background: "var(--surface-2)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Link arrow */}
      {href && (
        <div
          className="mt-5 flex items-center gap-1.5 text-sm font-medium"
          style={{ color: "var(--foreground)" }}
        >
          Learn more
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{card}</Link>;
  }

  return card;
}
