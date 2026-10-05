import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./responsive.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "방어회 | 사이버 위협에 맞서는 사람들",
  description: "공격을 이해하고, 더 나은 방어를 설계하는 정보보안 동아리 방어회입니다.",
  openGraph: {
    title: "방어회 | 사이버 위협에 맞서는 사람들",
    description: "공격을 이해하고, 더 나은 방어를 설계하는 정보보안 동아리 방어회입니다.",
    url: "https://bangeohoe.hallym-ac.workers.dev",
    siteName: "방어회",
    locale: "ko_KR",
    type: "website",
  },
  verification:{
    google: "I2YJzL66Tg595IYGpKO3ebiNnH1-bY7oWrVBNeGgVQA",
    other:{
      "naver-site-verification": "d78857c1c7dd629b0f5631018abce98e3efc5ed6",
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "방어회",
    alternateName: ["한림대학교 방어회", "Hallym Bangeohoe"],
    "url": "https://bangeohoe.hallym-ac.workers.dev",
  }
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
