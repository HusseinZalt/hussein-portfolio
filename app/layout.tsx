import type { Metadata } from "next";
import { Cairo, Geist_Mono } from "next/font/google";
import "./globals.css";
import { metadata as siteMetadata } from "./metadata";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#07080c] text-slate-100 font-sans selection:bg-violet-500 selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

