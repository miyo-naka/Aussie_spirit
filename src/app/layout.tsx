import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000";

export const metadata: Metadata = {
  title: "Aussie Spirit",
  description: "オーストラリア生活やWeb開発の記録ブログ「Aussie Spirit」",
  keywords: ["オーストラリア", "留学", "環境問題", "Web開発", "Next.js"],
  authors: [{ name: "Shari and Pikkoro" }],
  creator: "Pikkoro",
  metadataBase: new URL(siteUrl),

  openGraph: {
    title: "Aussie Spirit",
    description:
      "日本人一家のオーストラリア生活やそこに至るまでの記録を綴ったブログ",
    url: siteUrl,
    siteName: "Aussie Spirit",
    images: [
      {
        url: "/img/toppage.JPG",
        width: 1200,
        height: 630,
        alt: "Aussie Spirit OGP Image",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://aussie-spirit.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#EAF1EB]`}
      >
        {children}
      </body>
    </html>
  );
}
