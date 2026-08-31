import { site } from "@/lib/site";

/**
 * Standalone mark: a panther paw print set on a rounded orange square — a
 * direct nod to the brand name that reads clearly at favicon size and
 * carries no location or contact detail.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <rect width="40" height="40" rx="11" fill="#E1560F" />
      <ellipse cx="20" cy="25.5" rx="8.4" ry="6.6" fill="#161311" />
      <ellipse cx="10.6" cy="15.8" rx="3.3" ry="4" transform="rotate(-18 10.6 15.8)" fill="#161311" />
      <ellipse cx="19.2" cy="12" rx="3.4" ry="4.2" fill="#161311" />
      <ellipse cx="28" cy="15.6" rx="3.3" ry="4" transform="rotate(18 28 15.6)" fill="#161311" />
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
        <span className={`font-display font-extrabold leading-none tracking-tight ${word} ${wordClassName}`}>
          {site.wordmark}
        </span>
        <span className={`mt-1 font-body text-[9px] font-bold uppercase tracking-widest2 ${label}`}>
          Household Essentials
        </span>
      </span>
    </span>
  );
}
