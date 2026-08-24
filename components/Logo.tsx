import { site } from "@/lib/site";

/**
 * Standalone mark: a rounded square in sky blue with a simple open-book
 * glyph cut out in white, and a small teal page-corner accent — reads
 * clearly at favicon size and carries no location or contact detail.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <rect width="40" height="40" rx="11" fill="#4FA3D1" />
      <path
        d="M9 12.5c3.4-1.6 6.6-1.6 9.5 0v16c-2.9-1.6-6.1-1.6-9.5 0v-16Z"
        fill="#FFFFFF"
      />
      <path
        d="M31 12.5c-3.4-1.6-6.6-1.6-9.5 0v16c2.9-1.6 6.1-1.6 9.5 0v-16Z"
        fill="#FFFFFF"
        fillOpacity="0.88"
      />
      <circle cx="30.5" cy="10.5" r="2.6" fill="#E0A23B" />
    </svg>
  );
}

/**
 * Lockup: the mark beside the wordmark, with a small caps descriptor
 * beneath — matching the left-to-right lockup used in the reference header.
 */
export default function Logo({
  className = "",
  wordClassName = "text-2xl",
  markClassName = "h-9 w-9",
  tone = "ink",
}: {
  className?: string;
  wordClassName?: string;
  markClassName?: string;
  /** "cream" when the logo sits on a dark band. */
  tone?: "ink" | "cream";
}) {
  const word = tone === "cream" ? "text-white" : "text-ink";
  const label = tone === "cream" ? "text-white/60" : "text-ink/45";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`${markClassName} shrink-0`} />
      <span className="flex flex-col leading-none">
        <span className={`font-display font-semibold leading-none tracking-tight ${word} ${wordClassName}`}>
          {site.wordmark}
        </span>
        <span className={`mt-1 font-body text-[9px] font-bold uppercase tracking-widest2 ${label}`}>
          Ebooks
        </span>
      </span>
    </span>
  );
}
