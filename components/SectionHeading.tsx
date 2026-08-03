/**
 * Centred section title above the reference layout's line–stars–line rule.
 */
export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="head-xl text-pine">{title}</h2>

      <div className="mt-4 flex items-center justify-center gap-3" aria-hidden="true">
        <span className="h-px w-14 bg-pine/20" />
        <span className="flex gap-1">
          {[0, 1, 2].map((index) => (
            <svg
              key={index}
              width="11"
              height="11"
              viewBox="0 0 20 20"
              className={index === 1 ? "text-tangerine" : "text-sunshine"}
            >
              <path
                d="m10 1.8 2.4 5 5.5.8-4 3.85.95 5.45L10 14.35 5.15 16.9l.95-5.45-4-3.85 5.5-.8 2.4-5Z"
                fill="currentColor"
              />
            </svg>
          ))}
        </span>
        <span className="h-px w-14 bg-pine/20" />
      </div>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-mudd">
          {subtitle}
        </p>
      )}
    </div>
  );
}
