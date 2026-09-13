import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/motion/LenisProvider";
import GrainOverlay from "@/components/ui/GrainOverlay";
import { NavBar } from "@/components/ui/NavBar";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Naman \u2014 Creative Developer",
    template: "%s \u00b7 Naman",
  },
  description:
    "Portfolio of a creative frontend developer building quiet, living interfaces for the web.",
};

export const viewport: Viewport = {
  themeColor: "#1a1a18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <LenisProvider>
          <NavBar />
          {children}
        </LenisProvider>
        <GrainOverlay />
      </body>
    </html>
  );
}
