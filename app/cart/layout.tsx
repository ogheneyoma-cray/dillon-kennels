import type { Metadata } from "next";

// The cart page itself is a client component and cannot export metadata.
export const metadata: Metadata = {
  title: "Your bag",
  description: "Review the pieces in your Xira Dix bag before checking out.",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
