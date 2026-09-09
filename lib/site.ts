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
  name: "Aims I-Tech",
  legalName: "Aims I-Tech Solutions",
  wordmark: "Aims I-Tech",
  tagline: "Software and web dev, ready to ship",
  description:
    "Aims I-Tech is a digital marketplace for ready-to-ship software — web templates, UI kits, starter codebases, plugins and mobile app templates — priced up front in USD or NGN.",
  email: "support@aimsitech.com",
  phone: "09048764725",
  phoneHref: "+2349048764725",
  address: {
    line1: "7, John Soares Street",
    line2: "Elemoro",
    line3: "Ibeju-Lekki, Lagos State, Nigeria",
  },
  addressOneLine: "7, John Soares Street, Elemoro, Ibeju-Lekki, Lagos State, Nigeria",
} as const;

export const addressLines = [site.address.line1, site.address.line2, site.address.line3];
