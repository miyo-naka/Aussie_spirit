import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000";

export const metadata: Metadata = {
  title: "Aussie Spirit",
  description: "オーストラリア生活やWeb開発の記録ブログ「Aussie Spirit」",
  keywords: ["オーストラリア", "留学", "環境問題", "Web開発", "Next.js"],
  authors: [{ name: "Shari and Pikkoro" }],
  creator: "Pikkoro",
  metadataBase: new URL(siteUrl),

  openGraph: {
    title: "Aussie Spirit",
    description: "オーストラリア生活やWeb開発の記録ブログ",
    url: siteUrl,
    siteName: "Aussie Spirit",
    images: [
      {
        url: "/img/toppage.png",
        width: 1200,
        height: 630,
        alt: "Aussie Spirit OGP Image",
      },
    ],
    locale: "ja_JP",
    type: "website",
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
    canonical: "https://aussie-spirit.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#EAF1EB]`}
      >
        {children}
      </body>
    </html>
  );
}
