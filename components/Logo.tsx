import { site } from "@/lib/site";

/**
 * Standalone diamond mark — the motif the whole layout is built on (nav
 * separators, section dots, slider bullets, back-to-top). Two nested rotated
 * squares with an open centre.
 */
export function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <rect
        x="16"
        y="1.5"
        width="20.5"
        height="20.5"
        rx="2"
        transform="rotate(45 16 1.5)"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="16"
        y="9"
        width="9.9"
        height="9.9"
        rx="1"
        transform="rotate(45 16 9)"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

/**
 * Wordmark with the diamond outline sitting behind its centre, echoing the
 * hexagon-behind-letters treatment in the reference header. The mark is
 * absolutely positioned so the letterspacing stays even.
 */
export default function Logo({
  className = "",
  wordClassName = "text-[1.35rem]",
  tone = "dark",
}: {
  className?: string;
  wordClassName?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={`relative inline-flex items-center ${className}`}>
      <LogoMark
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[2.15em] w-[2.15em] -translate-x-1/2 -translate-y-1/2 text-camel ${
          tone === "light" ? "opacity-70" : "opacity-60"
        }`}
      />
      <span
        className={`relative font-body font-semibold lowercase tracking-wide3 ${wordClassName} ${
          tone === "light" ? "text-paper" : "text-onyx"
        }`}
      >
        {site.wordmark}
      </span>
    </span>
  );
}
