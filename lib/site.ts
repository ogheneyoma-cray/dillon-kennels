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
  name: "Venture Collection",
  legalName: "Venture Collection Ltd",
  wordmark: "Venture Collection",
  tagline: "Everyday household essentials, thoughtfully made",
  description:
    "Venture Collection is an online household store stocking bathroom accessories, kitchen tools, storage & organization, home decor and cleaning essentials — priced up front in USD or NGN.",
  email: "help@venturecollection.com",
  phone: "07046815504",
  phoneHref: "+2347046815504",
  address: {
    line1: "2, Atlantic Nominee Estate, Alasia",
    line2: "Sangotedo",
    line3: "Lagos State, Nigeria",
  },
  addressOneLine: "2, Atlantic Nominee Estate, Alasia, Sangotedo, Lagos State, Nigeria",
} as const;

export const addressLines = [site.address.line1, site.address.line2, site.address.line3];
