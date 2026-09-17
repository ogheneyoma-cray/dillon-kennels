export const site = {
  name: "Echo E-Rom Ltd",
  legalName: "Echo E-Rom Ltd",
  wordmark: "Echo E-Rom",
  tagline: "IT services, on demand",
  description:
    "Echo E-Rom Ltd is an IT services store offering managed support, network setup, cybersecurity, and cloud & data services — booked online and priced fairly in USD or NGN.",
  email: "help@echoerom.com",
  phone: "+234",
  phoneHref: "+234",
  address: {
    line1: "House 2, 17 Dada Asala Street",
    line2: "Ota, Ado-Odo/Ota LGA",
    line3: "Ogun State, Nigeria",
  },
  addressOneLine:
    "House 2, 17 Dada Asala Street, Ota, Ado-Odo/Ota LGA, Ogun State, Nigeria",
} as const;

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.line3,
];
