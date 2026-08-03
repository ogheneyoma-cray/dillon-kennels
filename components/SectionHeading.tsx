/**
 * Centred section title with the brush swash behind it and the three diamond
 * dots underneath, matching the reference section headers. The swash is drawn
 * as an inline SVG so it inherits no external asset.
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
      <div className="relative inline-block px-10 py-2">
        <svg
          viewBox="0 0 320 70"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full text-blush"
        >
          <path
            d="M6 42c38-22 92-30 156-28 42 1 88 6 152 20-52 14-104 20-166 19C82 52 34 48 6 42Z"
            fill="currentColor"
          />
        </svg>
        <h2 className="relative display-2">{title}</h2>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2" aria-hidden="true">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className={`h-[6px] w-[6px] rotate-45 ${
              index === 1 ? "bg-camel" : "bg-camel/45"
            }`}
          />
        ))}
      </div>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ash">
          {subtitle}
        </p>
      )}
    </div>
  );
}
