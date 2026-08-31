/**
 * Single source of truth for storefront identity. Anything appearing in more
 * than one place reads from here so there is exactly one line to change per
 * detail.
 *
 * Note: the street address is deliberately NOT surfaced in the logo or on
 * the home page — it appears only on the contact page and within the legal
 * pages, where it is required. No social links appear anywhere on the site.
 */
export const site = {
  name: "zenpulse digital",
  legalName: "Zenpulse Digital Ltd",
  wordmark: "zenpulse digital",
  tagline: "Practical skills for the digital economy",
  description:
    "zenpulse digital is an online store stocking self-paced digital courses on digital marketing, SEO, branding, analytics and content strategy — around thirty courses, priced up front in USD or NGN.",
  email: "support@zenpulsedigital.com",
  phone: "07071201754",
  phoneHref: "+2347071201754",
  address: {
    line1: "23, Yahaya Madaki",
    line2: "Katsina",
    line3: "Katsina State, Nigeria",
  },
  addressOneLine: "23, Yahaya Madaki, Katsina, Katsina State, Nigeria",
} as const;

export const addressLines = [site.address.line1, site.address.line2, site.address.line3];
