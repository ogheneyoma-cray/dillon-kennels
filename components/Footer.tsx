import Link from "next/link";
import CurrencySwitch from "@/components/CurrencySwitch";
import Logo from "@/components/Logo";
import NewsletterForm from "@/components/NewsletterForm";
import { categories } from "@/data/products";
import { addressLines, site } from "@/lib/site";

const QUICK_LINKS = [
  { href: "/shop", label: "All Products" },
  { href: "/about", label: "About Us" },
  { href: "/size-guide", label: "Size Guide" },
  { href: "/cart", label: "Basket" },
];

const HELP_LINKS = [
  { href: "/contact", label: "Help & Contact" },
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/refunds-policy", label: "Returns & Refunds" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const PAYMENTS = ["Visa", "Mastercard", "Verve"];

function ContactIcon({ d }: { d: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-tangerine"
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-pine text-canvas">
      {/* Centred brand block, as in the reference footer. */}
      <div className="boxed pt-16 text-center">
        <Logo
          className="justify-center"
          markClassName="h-10 w-10"
          wordClassName="text-3xl"
          subClassName="text-[10px]"
          tone="light"
        />
        <div className="mt-5 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-12 bg-canvas/20" />
          <span className="flex gap-1">
            {[0, 1, 2].map((index) => (
              <svg
                key={index}
                width="10"
                height="10"
                viewBox="0 0 20 20"
                className={index === 1 ? "text-tangerine" : "text-sunshine"}
              >
                <path
                  d="m10 1.8 2.4 5 5.5.8-4 3.85.95 5.45L10 14.35 5.15 16.9l.95-5.45-4-3.85 5.5-.8 2.4-5Z"
                  fill="currentColor"
                />
              </svg>
            ))}
          </span>
          <span className="h-px w-12 bg-canvas/20" />
        </div>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-canvas/65">
          {site.description}
        </p>
      </div>

      <div className="boxed grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="head-sm text-canvas">Contact Us</p>
          <ul className="mt-5 space-y-4 text-sm text-canvas/70">
            <li className="flex gap-3">
              <ContactIcon d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <address className="not-italic leading-relaxed">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
            <li className="flex gap-3">
              <ContactIcon d="M3.5 6.5h17v11h-17v-11Zm0 .8 8.5 6 8.5-6" />
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-sunshine"
              >
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <ContactIcon d="M5 4h3.5l1.7 4.2-2.1 1.5a12 12 0 0 0 5.6 5.6l1.5-2.1L19.5 15V18a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />
              <a
                href={site.phoneHref}
                className="transition-colors hover:text-sunshine"
              >
                {site.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="head-sm text-canvas">Quick Links</p>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-canvas/70 transition-colors hover:text-sunshine"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="head-sm text-canvas">Help</p>
          <ul className="mt-5 space-y-3">
            {HELP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-canvas/70 transition-colors hover:text-sunshine"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="head-sm text-canvas">Shop By</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {categories.map((item) => (
              <li key={item}>
                <Link
                  href={`/shop?category=${encodeURIComponent(item)}`}
                  className="inline-flex border border-canvas/20 px-3 py-2 text-[11px] text-canvas/70 transition-colors hover:border-tangerine hover:text-sunshine"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Full-width subscribe bar. */}
      <div className="boxed pb-12">
        <NewsletterForm />
      </div>

      <div className="border-t border-canvas/10">
        <div className="boxed flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-canvas/50">
            © {year} {site.name}. All rights reserved.
          </p>
          <CurrencySwitch tone="light" />
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {PAYMENTS.map((method) => (
              <li
                key={method}
                className="border border-canvas/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-canvas/55"
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
