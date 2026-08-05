import { LogoMark } from "@/components/Logo";

/**
 * Section header: the mark, a letterspaced eyebrow, then a large light-weight
 * title — the stack the reference repeats above every band. Set `align` to
 * "left" for the sections that run against the column rules.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const centred = align === "center";

  return (
    <div className={`${centred ? "text-center" : ""} ${className}`}>
      <LogoMark
        className={`h-5 w-[22px] text-brass ${centred ? "mx-auto" : ""}`}
      />
      {eyebrow && <p className="eyebrow mt-4">{eyebrow}</p>}
      <h2 className={`display-2 ${eyebrow ? "mt-3" : "mt-4"}`}>{title}</h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-xl text-[15px] font-light leading-relaxed text-smoke ${
            centred ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
