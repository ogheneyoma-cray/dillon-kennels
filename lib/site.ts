/**
 * Single source of truth for storefront identity. Anything appearing in more
 * than one place reads from here so there is exactly one line to change per
 * detail.
 *
 * Note: the street address is deliberately NOT surfaced in the header, footer
 * or on the home page — it appears only on the contact page and within the
 * legal pages, where it is required.
 */
export const site = {
  name: "Crewsita",
  wordmark: "crewsita",
  tagline: "Shoes for men and women, built to be walked in",
  description:
    "Crewsita is a footwear shop for men and women — oxfords, loafers, heels, flats and sneakers, made on lasts that fit real feet and never priced past forty dollars.",
  email: "care@crewsita.com",
  phone: "09047430981",
  phoneHref: "tel:09047430981",
  address: {
    line1: "No. 3 Oke-Ori Omi Street",
    line2: "Lagos Mainland",
    line3: "Lagos State",
  },
  addressOneLine: "No. 3 Oke-Ori Omi Street, Lagos Mainland, Lagos State",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
];
