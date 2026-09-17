import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const SERVICE_LINKS = [
  { href: "/shop", label: "All Services" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
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
    <footer className="bg-ink text-white">
      <div className="container-page grid grid-cols-1 gap-10 py-14 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <Logo tone="white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
            {site.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <MastercardMark />
            <VisaMark />
          </div>
        </div>

        <div>
          <p className="eyebrow text-flare">Services</p>
          <ul className="mt-4 space-y-2.5">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-flare">Company</p>
          <ul className="mt-4 space-y-2.5">
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-flare">Legal</p>
          <ul className="mt-4 space-y-2.5">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center gap-3 py-6 text-xs text-white/40 sm:flex-row sm:justify-between">
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
