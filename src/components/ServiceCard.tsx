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
  const gradients = {
    blue: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))",
    violet:
      "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))",
    mixed:
      "linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(139, 92, 246, 0.08))",
  };

  const iconBgs = {
    blue: "rgba(59, 130, 246, 0.15)",
    violet: "rgba(139, 92, 246, 0.15)",
    mixed: "rgba(99, 111, 246, 0.15)",
  };

  const iconColors = {
    blue: "#3b82f6",
    violet: "#8b5cf6",
    mixed: "#6366f1",
  };

  const card = (
    <div
      className="group rounded-2xl p-6 h-full flex flex-col transition-all duration-300"
      style={{
        background: "rgba(13, 13, 26, 0.8)",
        border: "1px solid rgba(59, 130, 246, 0.12)",
        backdropFilter: "blur(12px)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.border = "1px solid rgba(59, 130, 246, 0.35)";
        el.style.boxShadow = "0 8px 40px rgba(59, 130, 246, 0.12)";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.border = "1px solid rgba(59, 130, 246, 0.12)";
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
        style={{ color: "#f0f0f8" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "#6b6b8a" }}>
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
