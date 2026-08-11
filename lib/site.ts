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
  name: "Coquinate",
  wordmark: "coquinate",
  tagline: "A small press for fiction you finish in a weekend",
  description:
    "Coquinate publishes and sells fiction in ebook form — science fiction, fantasy, romance, mystery and literary novels, delivered to your reader the second you buy them.",
  email: "care@coquinate.com",
  phone: "08082180992",
  phoneHref: "tel:08082180992",
  address: {
    line1: "2 Folarin Street",
    line2: "Iju Ishaga",
    line3: "Ifako-Ijaiye Local Government Area",
    line4: "Lagos State",
  },
  addressOneLine:
    "2 Folarin Street, Iju Ishaga, Ifako-Ijaiye Local Government Area, Lagos State",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
  site.address.line4,
];
