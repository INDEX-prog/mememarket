import type { Metadata } from "next";
import { Fraunces, Libre_Franklin } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MemeMarket | Licensed Corporate Memes for Investor Decks",
  description:
    "Your source for licensed corporate memes. Empower your investor presentations with engaging, compliant visuals that stand out.",
  keywords: [
    "corporate memes",
    "licensed memes",
    "investor deck",
    "presentation memes",
    "B2B marketing",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${libreFranklin.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
