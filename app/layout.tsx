import type { Metadata } from "next";
import { Italiana, Jost } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nudgenic | Modern Womenswear",
  description:
    "Nudgenic is a women's fashion label offering dresses, tops, denim, outerwear, footwear, and accessories designed for effortless, everyday confidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${italiana.variable} ${jost.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
