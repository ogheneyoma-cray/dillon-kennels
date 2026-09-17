export const site = {
  name: "Site Optex",
  legalName: "Site Optex",
  wordmark: "Site Optex",
  tagline: "IT services, sharpened",
  description:
    "Site Optex is an IT services store offering website performance, security, cloud and networking work — booked online and priced fairly in USD or NGN.",
  email: "hello@siteoptex.com",
  phone: "+234",
  phoneHref: "+234",
  address: {
    line1: "19 Shogunwa Close, off Eyita Road",
    line2: "Benson Bus Stop, Eyita, Ikorodu LGA",
    line3: "Lagos State, Nigeria",
  },
  addressOneLine:
    "19 Shogunwa Close, off Eyita Road, Benson Bus Stop, Eyita, Ikorodu Local Government Area, Lagos State",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
];
