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
  name: "Caribcore",
  legalName: "Caribcore Ltd",
  wordmark: "Caribcore",
  tagline: "Everyday household goods, styled right",
  description:
    "Caribcore is a household goods store — kitchen, decor, bedding, storage and lighting essentials, around fifteen pieces, priced up front in USD or NGN.",
  email: "support@caribcore.com",
  phone: "234",
  phoneHref: "+234",
  address: {
    line1: "37B Isiokpo Street",
    line2: "D/Line",
    line3: "Port Harcourt City LGA, Rivers State",
  },
  addressOneLine: "37B Isiokpo Street, D/Line, Port Harcourt City LGA, Rivers State",
} as const;

export const addressLines = [site.address.line1, site.address.line2, site.address.line3];
