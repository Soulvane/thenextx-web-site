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
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
          style={{
            color: "#3b82f6",
            background: "rgba(59, 130, 246, 0.1)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
        style={{ color: "#f0f0f8" }}
      >
        {titleGradient ? (
          <>
            {title}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
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
          style={{ color: "#6b6b8a" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
