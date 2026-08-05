import { site } from "@/lib/site";

/**
 * Standalone mark — a shoe in side profile, drawn as one filled silhouette:
 * low toe at the left, a dipped throat, and the heel counter rising at the
 * right. Solid rather than outlined so it survives at favicon size.
 */
export function LogoMark({ className = "h-7 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 43 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Upper: low toe at the left, vamp rising across the instep, then the
          quarter and a vertical heel back at the right. */}
      <path
        d="M2.5 20.5c0-2.6 1.3-4.2 3.9-5.2l11-4.2c1.9-.7 3.2-1.6 4.6-3l4.4-4.4c1.1-1.1 2.2-1.6 3.7-1.6h6.1c1.6 0 2.6 1 2.6 2.6v15.8H2.5Z"
        fill="currentColor"
      />
      {/* Sole, a shade deeper than the upper so the two read apart on both the
          white header and the dark footer. */}
      <rect x="1" y="20.5" width="41" height="2.8" rx="1" fill="#C4213C" />
      {/* Lace bars, punched out of the vamp */}
      <path
        d="M23 9.6l6.4 2.4M20.2 12.6l6.4 2.4"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Lockup: the mark beside the wordmark, with a rule-and-label line beneath.
 * The reference centres its logo in the bar, so the lockup is built to read
 * from the middle out.
 */
export default function Logo({
  className = "",
  wordClassName = "text-[1.6rem]",
  markClassName = "h-7 w-9",
  tone = "ink",
}: {
  className?: string;
  wordClassName?: string;
  markClassName?: string;
  /** "ink" on white bars, "paper" when the logo sits on a dark panel. */
  tone?: "ink" | "paper";
}) {
  const word = tone === "paper" ? "text-paper" : "text-ink";
  const label = tone === "paper" ? "text-paper/60" : "text-muted";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`${markClassName} shrink-0 text-rose`} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-bold lowercase leading-none tracking-wide2 ${word} ${wordClassName}`}
        >
          {site.wordmark}
        </span>
        <span className="mt-1.5 flex items-center gap-1.5">
          <span aria-hidden="true" className="h-px w-4 bg-rose" />
          <span
            className={`font-display text-[8px] font-semibold uppercase tracking-wide3 ${label}`}
          >
            Footwear
          </span>
        </span>
      </span>
    </span>
  );
}
