import { site } from "@/lib/site";

/**
 * Brand mark: a four-panel kite with a looping tail. Each quadrant carries a
 * different brand colour, so the mark reads as playful at large sizes and
 * still holds its diamond silhouette at favicon scale.
 */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path d="M24 3 40 19 24 35 8 19 24 3Z" fill="#FFC94A" />
      <path d="M24 3 40 19 24 35V3Z" fill="#F2703A" />
      <path d="M24 19 40 19 24 35 8 19h16Z" fill="#2AA198" />
      <path d="M24 19v16L8 19h16Z" fill="#1E5347" />
      <path
        d="M24 3 24 35M8 19h32"
        stroke="#FFF8F0"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M24 35c0 4-4 3.5-4 6s4 2.5 4 5"
        stroke="#143B32"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({
  className = "",
  markClassName = "h-9 w-9",
  wordClassName = "text-2xl",
  tone = "dark",
}: {
  className?: string;
  markClassName?: string;
  wordClassName?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      <span
        className={`font-display font-extrabold lowercase leading-none tracking-tight ${wordClassName} ${
          tone === "light" ? "text-canvas" : "text-pine"
        }`}
      >
        {site.wordmark}
      </span>
    </span>
  );
}
