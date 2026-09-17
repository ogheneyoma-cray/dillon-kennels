export const site = {
  name: "Richavaid",
  legalName: "Richavaid",
  wordmark: "Richavaid",
  tagline: "Premium themes & plugins for modern websites",
  description:
    "Richavaid is an online marketplace for premium WordPress themes, website plugins, and digital tools — handpicked for quality, priced fairly in USD or NGN.",
  email: "support@richavaid.com",
  phone: "+234",
  phoneHref: "+234",
  address: {
    line1: "19 Iyana Ajibode Street",
    line2: "Ibadan, Akinyele LGA",
    line3: "Oyo State, Nigeria",
  },
  addressOneLine:
    "19 Iyana Ajibode Street, Ibadan, Akinyele LGA, Oyo State, Nigeria",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
];
