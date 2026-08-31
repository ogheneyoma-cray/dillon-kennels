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
  name: "Webreid",
  legalName: "Webreid Ltd",
  wordmark: "Webreid",
  tagline: "Expert-led courses for real-world careers",
  description:
    "Webreid is an online store stocking self-paced digital courses on business, web development, digital marketing, design, data and project management — around thirty courses, priced up front in USD or NGN.",
  email: "support@webreid.com",
  phone: "07015042270",
  phoneHref: "+2347015042270",
  address: {
    line1: "9, Honourable Precious Street",
    line2: "Rumuodara",
    line3: "Port Harcourt, Rivers State, Nigeria",
  },
  addressOneLine: "9, Honourable Precious Street, Rumuodara, Port Harcourt, Rivers State, Nigeria",
} as const;

export const addressLines = [site.address.line1, site.address.line2, site.address.line3];
