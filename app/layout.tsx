import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celtic Cross Tarot Reading",
  description: "A modern tarot reading experience with the Celtic Cross spread",
  keywords: ["tarot", "celtic cross", "tarot reading", "tarot spread", "divination", "fortune telling", "tarot cards", "tarot meanings"],
  authors: [{ name: "Ivan Nevares" }],
  openGraph: {
    title: "Celtic Cross Tarot Reading",
    description: "A modern tarot reading experience with the Celtic Cross spread",
    type: "website",
    locale: "en_US",
    siteName: "Celtic Cross Tarot Reading",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tarot Reading Celtic Cross Spread"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Celtic Cross Tarot Reading",
    description: "A modern tarot reading experience with the Celtic Cross spread.",
    images: ["/images/og-image.jpg"]
  },
  metadataBase: new URL('https://rider-tarot.vercel.app'),
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-icon.png" }
    ],
  },
  alternates: {
    canonical: "https://tarot-reading.com"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Celtic Cross Tarot Reading",
  "description": "A modern tarot reading experience with the Celtic Cross spread",
  "url": "https://tarot-reading.com",
  "applicationCategory": "LifestyleApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
