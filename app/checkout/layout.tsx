import type { Metadata } from "next";

// The checkout page itself is a client component and cannot export metadata.
export const metadata: Metadata = {
  title: "Checkout",
  description: "Enter your delivery details to complete your Xira Dix order.",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
