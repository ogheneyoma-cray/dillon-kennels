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
  name: "Lawin Store",
  legalName: "Lawin Store Ltd",
  wordmark: "Lawin Store",
  tagline: "Themes and plugins that just work",
  description:
    "Lawin Store is a marketplace for premium website themes and plugins — landing pages, e-commerce themes, admin dashboards and utility plugins — priced up front in USD or NGN.",
  email: "support@lawinstore.com",
  phone: "08024384755",
  phoneHref: "+2348024384755",
  address: {
    line1: "1/3 Liasu Ajakaiye Street",
    line2: "Iba Estate",
    line3: "Ojo, Lagos State, Nigeria",
  },
  addressOneLine: "1/3 Liasu Ajakaiye Street, Iba Estate, Ojo, Lagos State, Nigeria",
} as const;

export const addressLines = [site.address.line1, site.address.line2, site.address.line3];
