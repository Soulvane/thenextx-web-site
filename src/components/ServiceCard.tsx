"use client";

import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
  tags?: string[];
  accentColor?: "blue" | "violet" | "mixed";
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  tags,
  accentColor = "blue",
}: ServiceCardProps) {
  const iconBgs = {
    blue: "var(--surface-2)",
    violet: "var(--surface-2)",
    mixed: "var(--surface-2)",
  };

  const iconColors = {
    blue: "var(--accent)",
    violet: "var(--accent-2)",
    mixed: "var(--accent)",
  };

  const card = (
    <div
      className="group rounded-lg p-6 h-full flex flex-col transition-all duration-300"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
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
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
        style={{ background: iconBgs[accentColor] }}
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
                color: iconColors[accentColor],
                background: iconBgs[accentColor],
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
          style={{ color: iconColors[accentColor] }}
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
