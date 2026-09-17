import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const ALL_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/shipping-policy", label: "Delivery Policy" },
  { href: "/refunds-policy", label: "Refunds Policy" },
];

function VisaMark() {
  return (
    <span className="flex h-8 w-12 items-center justify-center rounded-lg bg-white text-[11px] font-black italic tracking-tight text-[#1A1F71]">
      VISA
    </span>
  );
}

function MastercardMark() {
  return (
    <span
      className="flex h-8 w-12 items-center justify-center rounded-lg bg-white"
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
    <footer className="bg-indigo text-white">
      {/* Centered layout — logo, links in a wrapped row, then meta */}
      <div className="container-page flex flex-col items-center py-14 text-center">
        <Logo tone="white" />
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
          {site.description}
        </p>

        {/* All links in a single wrapped row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {ALL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Payment badges */}
        <div className="mt-8 flex items-center gap-3">
          <MastercardMark />
          <VisaMark />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center gap-3 py-6 text-xs text-white/35 sm:flex-row sm:justify-between">
          <p>&copy; {year} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="hover:text-white">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
