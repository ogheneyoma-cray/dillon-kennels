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
  name: "alcopip",
  legalName: "Alcopip Ltd",
  wordmark: "alcopip",
  tagline: "Stories worth shelving",
  description:
    "alcopip is an online bookstore stocking fiction, mystery, drama, cookery and lifestyle titles — around thirty books, priced up front in USD or NGN.",
  email: "info@aclopip.com",
  phone: "08078731670",
  phoneHref: "+2348078731670",
  address: {
    line1: "5, Gbenga Onyewusi Street",
    line2: "Ajah",
    line3: "Lagos State, Nigeria",
  },
  addressOneLine: "5, Gbenga Onyewusi Street, Ajah, Lagos State, Nigeria",
} as const;

export const addressLines = [site.address.line1, site.address.line2, site.address.line3];
