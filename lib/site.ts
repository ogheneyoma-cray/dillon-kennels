/**
 * Single source of truth for storefront identity. Anything that appears in
 * more than one place (footer, contact page, legal pages, metadata) reads
 * from here so there is exactly one line to change per detail.
 */
export const site = {
  name: "Xira Dix",
  // Used where the mark is set in the display face and needs the spaced look.
  wordmark: "xira dix",
  tagline: "Nightwear for the hours that belong to you",
  description:
    "Xira Dix is a Lagos sleepwear house making nightwear for men and women — satin slips, brushed-cotton pyjama sets, robes and lounge sets designed for rest.",
  email: "care@xiradix.com",
  phone: "0806 234 2487",
  phoneHref: "tel:+2348062342487",
  address: {
    line1: "9 Bakare Avenue, off Babatunde Street",
    line2: "Oke Ira, Ajah",
    line3: "Eti-Osa Local Government Area, Lagos State",
  },
  addressOneLine:
    "9 Bakare Avenue, off Babatunde Street, Oke Ira, Ajah, Eti-Osa Local Government Area, Lagos State",
  founded: 2026,
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
];
