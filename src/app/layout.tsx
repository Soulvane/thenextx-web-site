import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TheNextX — AI-Powered Marketing & Operations Agency",
    template: "%s — TheNextX",
  },
  description:
    "TheNextX is an AI-powered marketing and operations agency. We deliver AI marketing automation, B2B lead generation, Shopify growth, Flutter app development, email outreach, and business workflow automation through human + AI collaboration.",
  keywords: [
    // Korean Agency
    "Korean marketing agency",
    "Korean digital marketing agency",
    "Korean advertising agency",
    "Korean marketing company",
    // US ↔ Korea
    "Korean market entry services",
    "Korean market expansion",
    "Korean business consulting",
    "Korean localization services",
    // Korean language marketing
    "Korean language marketing",
    "Korean content marketing",
    "Korean social media marketing",
    "Korean SEO services",
    // US-Korea cross-border
    "Korean-American marketing agency",
    "cross-border marketing agency",
    "US Korea marketing agency",
    "Korea US business marketing",
    // AI Marketing
    "AI marketing automation",
    "AI lead generation",
    "AI sales automation",
    "AI marketing operations",
    "AI customer engagement",
    "AI content automation",
    "AI 마케팅 자동화",
    "AI 영업 자동화",
    "AI 업무 자동화",
    "AI 콘텐츠 생성",
    // General Marketing
    "marketing agency",
    "digital marketing agency",
    "performance marketing agency",
    "growth marketing agency",
    "marketing consulting",
    "마케팅 대행",
    "디지털 마케팅",
    "퍼포먼스 마케팅",
    "마케팅 컨설팅",
    // Lead Generation
    "lead generation",
    "B2B lead generation",
    "lead generation agency",
    "sales development",
    "appointment setting",
    "outbound marketing",
    "B2B 마케팅",
    "B2B 영업 대행",
    "리드 발굴",
    "잠재 고객 발굴",
    "세일즈 아웃바운드",
    // Email
    "email marketing",
    "email automation",
    "email campaign management",
    "email outreach",
    "cold email campaigns",
    "newsletter management",
    "이메일 마케팅",
    "뉴스레터 운영",
    "이메일 자동화",
    // Shopify
    "Shopify development",
    "Shopify marketing",
    "Shopify growth agency",
    "Shopify CRO",
    "Shopify SEO",
    "Shopify B2B",
    "쇼피파이 마케팅",
    "쇼피파이 SEO",
    "쇼피파이 운영 대행",
    // Social / Content
    "social media management",
    "content marketing",
    "SEO content writing",
    "content strategy",
    // App Dev
    "Flutter app development",
    "cross-platform mobile app",
    // Automation
    "business automation",
    "workflow automation",
    "AI 고객지원",
  ],
  openGraph: {
    title: "TheNextX — AI-Powered Marketing & Operations Agency",
    description:
      "AI marketing automation, B2B lead generation, Shopify growth, Flutter apps, and business workflow automation — powered by human + AI collaboration.",
    type: "website",
    siteName: "TheNextX",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheNextX — AI-Powered Marketing & Operations Agency",
    description:
      "AI marketing automation, B2B lead generation, Shopify growth, Flutter apps, and business automation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
