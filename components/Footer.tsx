import Link from "next/link";
import Logo from "@/components/Logo";
import { addressLines, site } from "@/lib/site";

const LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/shipping-policy", label: "Delivery Policy" },
  { href: "/refunds-policy", label: "Refunds Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

function VisaMark() {
  return (
    <span className="flex h-7 w-11 items-center justify-center rounded-md border border-line bg-paper text-[11px] font-black italic tracking-tight text-[#1A1F71]">
      VISA
    </span>
  );
}

function MastercardMark() {
  return (
    <span
      className="flex h-7 w-11 items-center justify-center rounded-md border border-line bg-paper"
      aria-label="Mastercard"
    >
      <svg width="26" height="16" viewBox="0 0 26 16" aria-hidden="true">
        <circle cx="9" cy="8" r="8" fill="#EB001B" />
        <circle cx="17" cy="8" r="8" fill="#F79E1B" />
        <path d="M13 2.2a8 8 0 0 1 0 11.6 8 8 0 0 1 0-11.6Z" fill="#FF5F00" />
      </svg>
    </span>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-silver-pale">
      {/* Minimal centered stack — no column grid */}
      <div className="container-page flex flex-col items-center py-14 text-center">
        <Logo />
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
          {site.description}
        </p>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-fuchsia"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex items-center gap-2">
          <MastercardMark />
          <VisaMark />
        </div>

        <div className="mt-8 space-y-1 text-xs text-ink-soft">
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-fuchsia">
              {site.email}
            </a>
            {" · "}
            <a href={`tel:${site.phoneHref}`} className="hover:text-fuchsia">
              {site.phone}
            </a>
          </p>
          <p>{addressLines.join(", ")}</p>
          <p className="pt-2">© {year} {site.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
