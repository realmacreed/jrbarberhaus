import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JR Barber Haus",
  description: "Premium barbershop in Shelby Township, MI. Precision cuts, fades, beard trims, and hot towel shaves. Walk-ins welcome, appointments recommended.",
  openGraph: {
    title: "JR Barber Haus",
    description: "Premium barbershop in Shelby Township, MI.",
    url: "https://jrbarberhaus.com",
    siteName: "JR Barber Haus",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
