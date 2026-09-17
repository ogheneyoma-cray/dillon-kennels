import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const LINKS = [
  { href: "/shop", label: "Services" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
  { href: "/cart", label: "Cart" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-and-conditions", label: "Terms" },
  { href: "/shipping-policy", label: "Delivery" },
  { href: "/refunds-policy", label: "Refunds" },
];

function VisaMark() {
  return (
    <span className="flex h-8 w-12 items-center justify-center border-2 border-ink bg-white text-[11px] font-black italic tracking-tight text-[#1A1F71]">
      VISA
    </span>
  );
}

function MastercardMark() {
  return (
    <span
      className="flex h-8 w-12 items-center justify-center border-2 border-ink bg-white"
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
    <footer className="border-t-2 border-ink bg-ink text-cream">
      <div className="container-page flex flex-col items-start justify-between gap-8 py-12 lg:flex-row lg:items-center">
        <Logo tone="white" />

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-xs font-bold uppercase tracking-wide text-cream/70 transition-colors hover:text-optic"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MastercardMark />
          <VisaMark />
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col items-center gap-3 py-5 text-xs text-cream/40 sm:flex-row sm:justify-between">
          <p>&copy; {year} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href={`mailto:${site.email}`} className="hover:text-cream">
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="hover:text-cream">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
