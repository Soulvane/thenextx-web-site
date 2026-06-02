import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TheNextX — AI-Powered Agency",
  description:
    "TheNextX delivers AI agent operations, Shopify development, Flutter apps, mailing campaigns, and business workflow automation — powered by human + AI collaboration.",
  keywords: [
    "AI agents",
    "Shopify development",
    "Flutter app development",
    "mailing campaigns",
    "business automation",
    "workflow automation",
    "B2B Shopify",
  ],
  openGraph: {
    title: "TheNextX — AI-Powered Agency",
    description:
      "AI agent operations, Shopify development, Flutter apps, and business automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col"
        style={{ background: "#0a0a0f", color: "#f0f0f8" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
