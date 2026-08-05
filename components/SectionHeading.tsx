/**
 * Section header: a clay eyebrow with its leading dot, then a heavy title.
 * The reference sets these centred on full-width bands and left-aligned where
 * a row of controls sits opposite, so both are supported.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
  tone = "slate",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  /** "paper" when the heading sits on a dark band. */
  tone?: "slate" | "paper";
}) {
  const centred = align === "center";

  return (
    <div className={`${centred ? "text-center" : ""} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`display-2 mt-3 ${tone === "paper" ? "text-paper" : ""}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-xl text-[15px] leading-relaxed ${
            tone === "paper" ? "text-paper/70" : "text-body"
          } ${centred ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
