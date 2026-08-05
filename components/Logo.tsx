import { site } from "@/lib/site";

/**
 * Standalone mark — an open book seen head-on, drawn as two leaves meeting at
 * a raised spine, with a clay bookmark dropping through the gutter. The two
 * leaves are set in different tones so the mark still reads when it is scaled
 * down to a favicon.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Left leaf */}
      <path
        d="M3 9.6c4.9-1.9 9.6-1.9 14.2.6a2 2 0 0 1 1 1.7v18.4c0 1.1-1.1 1.8-2.1 1.4-4-1.8-8.1-1.8-12.3-.2A1.5 1.5 0 0 1 2 30.1V11a1.5 1.5 0 0 1 1-1.4Z"
        fill="currentColor"
      />
      {/* Right leaf, a shade lighter so the spine reads */}
      <path
        d="M37 9.6c-4.9-1.9-9.6-1.9-14.2.6a2 2 0 0 0-1 1.7v18.4c0 1.1 1.1 1.8 2.1 1.4 4-1.8 8.1-1.8 12.3-.2a1.5 1.5 0 0 0 1.8-1.4V11a1.5 1.5 0 0 0-1-1.4Z"
        fill="currentColor"
        opacity="0.55"
      />
      {/* Bookmark through the gutter */}
      <path
        d="M17.4 4h5.2v13.2l-2.6-2.3-2.6 2.3V4Z"
        fill="#D16655"
      />
    </svg>
  );
}

/**
 * Lockup: the mark beside the wordmark, with a small caps descriptor beneath.
 * The reference centres nothing in its header, so this reads left to right.
 */
export default function Logo({
  className = "",
  wordClassName = "text-[1.75rem]",
  markClassName = "h-9 w-9",
  tone = "slate",
}: {
  className?: string;
  wordClassName?: string;
  markClassName?: string;
  /** "paper" when the logo sits on the dark footer. */
  tone?: "slate" | "paper";
}) {
  const word = tone === "paper" ? "text-paper" : "text-slate";
  const mark = tone === "paper" ? "text-paper" : "text-slate";
  const label = tone === "paper" ? "text-paper/55" : "text-muted";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className={`${markClassName} shrink-0 ${mark}`} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-bold lowercase leading-none tracking-tight ${word} ${wordClassName}`}
        >
          {site.wordmark}
        </span>
        <span
          className={`mt-1 font-display text-[9px] font-semibold uppercase tracking-wide3 ${label}`}
        >
          Ebooks &amp; Fiction
        </span>
      </span>
    </span>
  );
}
