import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const LINKS = [
  { href: "/shop", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/shipping-policy", label: "Delivery Policy" },
  { href: "/refunds-policy", label: "Refunds Policy" },
];

function VisaMark() {
  return (
    <span className="flex h-8 w-12 items-center justify-center border border-line bg-white text-[11px] font-black italic tracking-tight text-[#1A1F71]">
      VISA
    </span>
  );
}

function MastercardMark() {
  return (
    <span className="flex h-8 w-12 items-center justify-center border border-line bg-white" aria-label="Mastercard">
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
    <footer className="border-t border-line bg-stone">
      {/* Footer rendered as a left-aligned three-part row, not a centered stack */}
      <div className="container-page grid grid-cols-1 gap-10 py-14 md:grid-cols-[1fr_auto_auto] md:items-start">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">{site.description}</p>
          <div className="mt-6 flex items-center gap-3">
            <MastercardMark />
            <VisaMark />
          </div>
        </div>

        <nav className="flex flex-col gap-2 text-sm text-ink-soft md:pl-10">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-signal">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm text-ink-soft md:pl-10">
          <a href={`mailto:${site.email}`} className="hover:text-signal">{site.email}</a>
          <a href={`tel:${site.phoneHref}`} className="hover:text-signal">{site.phone}</a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page py-5 text-xs text-ink-soft">
          <p>&copy; {year} {site.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
