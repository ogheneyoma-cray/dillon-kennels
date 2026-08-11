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
  name: "Adom Attic",
  wordmark: "adom attic",
  tagline: "Clothes for the years you figure out who you are",
  description:
    "Adom Attic makes everyday clothing and shoes for teenagers — tees, denim, skirts, hoodies, jackets and trainers, cut for the way sixteen actually dresses.",
  email: "supportteam@adomattic.com",
  phone: "07082697704",
  phoneHref: "tel:07082697704",
  address: {
    line1: "20A Kayode Oduba Street",
    line2: "Ajah",
    line3: "Eti-Osa Local Government Area",
    line4: "Lagos State",
  },
  addressOneLine:
    "20A Kayode Oduba Street, Ajah, Eti-Osa Local Government Area, Lagos State",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
  site.address.line4,
];
