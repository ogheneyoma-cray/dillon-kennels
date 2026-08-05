import { site } from "@/lib/site";

/**
 * Standalone mark — an M drawn as one mitred stroke with the middle vee cut
 * deep, so it reads as a notch lapel. The short bar across the vee is the
 * stitch motif that reappears as a divider throughout the layout.
 */
export function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 34 30"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 27.5V3l14 15.5L31 3v24.5"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="miter"
      />
      <path
        d="M12 12.5h10"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.55"
      />
    </svg>
  );
}

/**
 * Lockup: mark, hairline, wordmark. The rule between them is the same hairline
 * used for the header cell dividers, so the logo reads as part of the grid
 * rather than as something dropped on top of it.
 */
export default function Logo({
  className = "",
  wordClassName = "text-[1.4rem]",
  markClassName = "h-6 w-[26px]",
}: {
  className?: string;
  wordClassName?: string;
  markClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`${markClassName} shrink-0 text-brass`} />
      <span aria-hidden="true" className="h-5 w-px shrink-0 bg-rule" />
      <span
        className={`font-display font-light lowercase leading-none tracking-[0.16em] text-bone ${wordClassName}`}
      >
        {site.wordmark}
      </span>
    </span>
  );
}
