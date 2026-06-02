interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleGradient?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleGradient,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
          style={{
            color: "var(--accent)",
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
        style={{ color: "var(--foreground)" }}
      >
        {titleGradient ? (
          <>
            {title}{" "}
            <span
              style={{
                color: "var(--accent-2)",
              }}
            >
              {titleGradient}
            </span>
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${centered ? "mx-auto" : ""} max-w-2xl`}
          style={{ color: "var(--muted-foreground)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
