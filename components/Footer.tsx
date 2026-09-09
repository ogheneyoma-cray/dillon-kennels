import Link from "next/link";
import Logo from "@/components/Logo";
import { addressLines, site } from "@/lib/site";

const GATES = [
  { href: "/shop", label: "Services" },
  { href: "/about", label: "About Us" },
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
    <span className="flex h-7 w-11 items-center justify-center rounded-md bg-paper text-[11px] font-black italic tracking-tight text-[#1A1F71]">
      VISA
    </span>
  );
}

function MastercardMark() {
  return (
    <span
      className="flex h-7 w-11 items-center justify-center rounded-md bg-paper"
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
    <footer className="bg-gate text-radar">
      <div className="container-page py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Logo tone="paper" />
            <p className="mt-4 text-sm leading-relaxed text-paper/60">
              {site.description}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MastercardMark />
            <VisaMark />
          </div>
        </div>

        {/* Departure-board style link directory */}
        <div className="mt-8 overflow-hidden rounded-lg border border-gate-soft">
          <div className="flex items-center gap-2 border-b border-gate-soft bg-gate-soft/40 px-4 py-2.5 text-[11px] uppercase tracking-widest2 text-paper/50">
            <span className="w-14">Gate</span>
            <span className="flex-1">Destination</span>
          </div>
          {GATES.map((gate, i) => (
            <Link key={gate.href} href={gate.href} className="board-row group hover:bg-gate-soft/40">
              <span className="w-14 text-beacon">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-paper/85 group-hover:text-paper">{gate.label}</span>
              <span className="text-xs uppercase tracking-widest2 text-radar-dark">Open →</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-gate-soft">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={`mailto:${site.email}`} className="hover:text-paper">
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="hover:text-paper">
              {site.phone}
            </a>
            <span className="text-paper/40">{addressLines.join(", ")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
