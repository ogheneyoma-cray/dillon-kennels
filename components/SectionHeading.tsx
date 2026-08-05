/**
 * Section header: a script line, then a bold uppercase title, then a short
 * rose rule with a diamond set into its middle — the stack the reference
 * repeats above every band.
 */
export default function SectionHeading({
  script,
  title,
  subtitle,
  align = "center",
  className = "",
  tone = "ink",
}: {
  script?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  /** "paper" when the heading sits on the dark deal band. */
  tone?: "ink" | "paper";
}) {
  const centred = align === "center";

  return (
    <div className={`${centred ? "text-center" : ""} ${className}`}>
      {script && <p className="script-line">{script}</p>}
      <h2
        className={`display-2 mt-2 ${tone === "paper" ? "text-paper" : ""}`}
      >
        {title}
      </h2>

      <span
        aria-hidden="true"
        className={`mt-4 flex items-center gap-2 ${centred ? "justify-center" : ""}`}
      >
        <span className="h-px w-10 bg-line-firm" />
        <span className="h-1.5 w-1.5 rotate-45 bg-rose" />
        <span className="h-px w-10 bg-line-firm" />
      </span>

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
