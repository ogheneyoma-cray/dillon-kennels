/**
 * Single source of truth for storefront identity. Anything appearing in more
 * than one place reads from here so there is exactly one line to change per
 * detail.
 *
 * Note: the street address is deliberately NOT surfaced in the logo or on
 * the home page — it appears only on the contact page and within the legal
 * pages, where it is required.
 */
export const site = {
  name: "Panther-rade",
  legalName: "Panther-rade Ltd",
  wordmark: "Panther-rade",
  tagline: "Household items, priced to move",
  description:
    "Panther-rade Ltd is an online store for everyday household items — kitchen, cleaning, bedroom, storage and decor essentials, thirty pieces priced up front in USD or GHS.",
  email: "support@pantherade.com",
  phone: "09075794546",
  phoneHref: "+2349075794546",
  address: {
    line1: "1, Oke-Ira",
    line2: "Harmony Estate, Langbasa",
    line3: "Ajah",
    line4: "Lagos State, Nigeria",
  },
  addressOneLine: "1, Oke-Ira, Harmony Estate, Langbasa, Ajah, Lagos State, Nigeria",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
  site.address.line4,
];
