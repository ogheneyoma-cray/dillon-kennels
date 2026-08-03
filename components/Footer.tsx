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

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    d: "M8.4 3h7.2A5.4 5.4 0 0 1 21 8.4v7.2a5.4 5.4 0 0 1-5.4 5.4H8.4A5.4 5.4 0 0 1 3 15.6V8.4A5.4 5.4 0 0 1 8.4 3Zm0 1.8A3.6 3.6 0 0 0 4.8 8.4v7.2a3.6 3.6 0 0 0 3.6 3.6h7.2a3.6 3.6 0 0 0 3.6-3.6V8.4a3.6 3.6 0 0 0-3.6-3.6H8.4ZM12 7.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 1.55a2.85 2.85 0 1 0 0 5.7 2.85 2.85 0 0 0 0-5.7Zm4.57-2.06a1.03 1.03 0 1 1 0 2.06 1.03 1.03 0 0 1 0-2.06Z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    d: "M13.2 20v-7.2h2.4l.36-2.8H13.2V8.22c0-.81.22-1.36 1.39-1.36h1.48V4.36A19.9 19.9 0 0 0 13.9 4.25c-2.14 0-3.6 1.3-3.6 3.7V10H7.9v2.8h2.4V20h2.9Z",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    d: "M14.2 4h2.15c.14 1.5 1.02 2.75 2.65 3v2.2a5.6 5.6 0 0 1-2.65-.78v4.9a4.55 4.55 0 1 1-4.55-4.55c.2 0 .4.01.6.04v2.24a2.36 2.36 0 1 0 1.8 2.29V4Z",
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    d: "M12 4a8 8 0 0 0-2.92 15.45c-.07-.62-.13-1.58.03-2.26l.9-3.83s-.23-.46-.23-1.14c0-1.07.62-1.87 1.39-1.87.65 0 .97.49.97 1.08 0 .66-.42 1.64-.64 2.55-.18.77.38 1.39 1.14 1.39 1.37 0 2.42-1.44 2.42-3.52 0-1.84-1.32-3.13-3.21-3.13-2.19 0-3.47 1.64-3.47 3.33 0 .66.25 1.37.57 1.75a.23.23 0 0 1 .05.22l-.22.88c-.03.14-.11.17-.26.1-.98-.45-1.59-1.87-1.59-3.01 0-2.45 1.78-4.7 5.13-4.7 2.69 0 4.79 1.92 4.79 4.49 0 2.68-1.69 4.83-4.03 4.83-.79 0-1.53-.41-1.78-.9l-.48 1.85c-.18.68-.65 1.53-.97 2.05A8 8 0 1 0 12 4Z",
  },
];

const PAYMENTS = ["Visa", "Mastercard", "Verve", "Paystack", "Flutterwave"];

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
          <div className="mt-6 flex gap-2.5">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-linen/20 text-linen/80 transition-colors hover:border-moon hover:text-moon"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={social.d} fill="currentColor" />
                </svg>
              </a>
            ))}
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
