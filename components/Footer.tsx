import Link from "next/link";
import CurrencySelect from "@/components/CurrencySelect";
import Logo from "@/components/Logo";
import NewsletterForm from "@/components/NewsletterForm";
import { addressLines, site } from "@/lib/site";

const INFORMATION = [
  { href: "/about", label: "Our Story" },
  { href: "/shop", label: "All Sleepwear" },
  { href: "/size-guide", label: "Size Guide" },
  { href: "/contact", label: "Contact Us" },
];

const CUSTOMER_CARE = [
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/refunds-policy", label: "Returns & Refunds" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const PAYMENTS = ["Visa", "Mastercard", "Verve"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-midnight text-linen">
      <div className="shell grid grid-cols-2 gap-x-8 gap-y-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="col-span-2 lg:col-span-4">
          <Logo
            markClassName="h-7 w-7 text-moon"
            wordClassName="text-[1.6rem] text-linen"
          />
          <address className="mt-6 space-y-1 text-sm not-italic leading-relaxed text-linen/65">
            {addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
          <div className="mt-5 space-y-1.5 text-sm">
            <p>
              <a
                href={`mailto:${site.email}`}
                className="text-linen/80 transition-colors hover:text-moon"
              >
                {site.email}
              </a>
            </p>
            <p>
              <a
                href={site.phoneHref}
                className="text-linen/80 transition-colors hover:text-moon"
              >
                {site.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="text-sm font-semibold tracking-wide">Information</p>
          <ul className="mt-5 space-y-3">
            {INFORMATION.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-linen/65 transition-colors hover:text-linen"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-semibold tracking-wide">Customer Care</p>
          <ul className="mt-5 space-y-3">
            {CUSTOMER_CARE.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-linen/65 transition-colors hover:text-linen"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-3">
          <p className="text-sm font-semibold tracking-wide">Sleep Letter</p>
          <p className="mt-5 text-sm leading-relaxed text-linen/65">
            One note a month on new arrivals, restocks and fabric notes. No
            noise, and you can leave whenever you like.
          </p>
          <NewsletterForm className="mt-5" />
        </div>
      </div>

      <div className="border-t border-linen/10">
        <div className="shell flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-linen/50">
            © {year} {site.name}. All rights reserved.
          </p>
          <CurrencySelect tone="dark" />
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {PAYMENTS.map((method) => (
              <li
                key={method}
                className="rounded border border-linen/15 px-2.5 py-1 text-[10px] tracking-wide text-linen/55"
              >
                {method}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
