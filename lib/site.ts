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
  name: "Silverpoodles",
  legalName: "Silverpoodles Ltd",
  wordmark: "Silverpoodles",
  tagline: "Software and web dev, precision built",
  description:
    "Silverpoodles is a digital marketplace for software and web development products — UI kits, boilerplates, admin panels and utility plugins — priced up front in USD or NGN.",
  email: "info@silverpoodles.com",
  phone: "09121031520",
  phoneHref: "+2349121031520",
  address: {
    line1: "3, Remi Senaike Close",
    line2: "Ifako-Ijaiye",
    line3: "Lagos State, Nigeria",
  },
  addressOneLine: "3, Remi Senaike Close, Ifako-Ijaiye, Lagos State, Nigeria",
} as const;

export const addressLines = [site.address.line1, site.address.line2, site.address.line3];
