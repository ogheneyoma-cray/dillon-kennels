import Link from "next/link";
import CurrencySwitch from "@/components/CurrencySwitch";
import Logo from "@/components/Logo";
import NewsletterBand from "@/components/NewsletterBand";
import { site } from "@/lib/site";

const CUSTOMER_LINKS = [
  { href: "/shipping-policy", label: "Shipping & Returns" },
  { href: "/refunds-policy", label: "Orders and Returns" },
  { href: "/size-guide", label: "Size Guide" },
  { href: "/contact", label: "Customer Service" },
];

const INFORMATION_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/contact", label: "Contact" },
];

const PAYMENTS = ["Visa", "Mastercard", "Verve"];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide2 text-onyx">
      <span aria-hidden="true" className="h-[6px] w-[6px] rotate-45 bg-camel" />
      {children}
    </p>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <NewsletterBand />

      <div className="frame grid gap-10 border-t border-line py-14 md:grid-cols-3 md:gap-0">
        <div className="md:pr-10">
          <ColumnHeading>Customer</ColumnHeading>
          <ul className="mt-5 space-y-3">
            {CUSTOMER_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-ash transition-colors hover:text-camel"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Centre column: mark, one-line blurb, and the contact details that
            are allowed off the contact page (email and phone only). */}
        <div className="text-center md:border-x md:border-line md:px-10">
          <Logo className="justify-center" wordClassName="text-[1.35rem]" />
          <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-ash">
            {site.description}
          </p>
          <div className="mt-5 space-y-1.5 text-sm">
            <p>
              <a
                href={`mailto:${site.email}`}
                className="text-onyx transition-colors hover:text-camel"
              >
                {site.email}
              </a>
            </p>
            <p>
              <a
                href={site.phoneHref}
                className="text-onyx transition-colors hover:text-camel"
              >
                {site.phone}
              </a>
            </p>
          </div>
          <CurrencySwitch className="mt-5" />
        </div>

        <div className="md:pl-10 md:text-right">
          <div className="md:flex md:justify-end">
            <ColumnHeading>Information</ColumnHeading>
          </div>
          <ul className="mt-5 space-y-3">
            {INFORMATION_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-ash transition-colors hover:text-camel"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="frame flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-mist">
            © {year}{" "}
            <span className="font-semibold text-onyx">{site.name}</span>. All
            rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {PAYMENTS.map((method) => (
              <li
                key={method}
                className="border border-line px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-mist"
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
