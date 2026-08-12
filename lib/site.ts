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
  name: "Wazuri Technologies",
  wordmark: "Wazuri",
  tagline: "Technology support you can actually reach",
  description:
    "Wazuri Technologies is a technology support service provider — remote and on-site help with devices, networks, cybersecurity, cloud backup and software, delivered by certified technicians across Ghana.",
  email: "care@wazuritech.com",
  address: {
    line1: "UNN House, Near The Market",
    line2: "Achimota-Accra",
    line3: "2nd Avenue",
    line4: "Accra, Ghana",
  },
  addressOneLine: "UNN House, Near The Market, Achimota-Accra, 2nd Avenue, Accra, Ghana",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
  site.address.line4,
];
