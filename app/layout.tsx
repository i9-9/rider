import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tarot Reading | Celtic Cross Spread",
    template: "%s | Tarot Reading"
  },
  description: "Explore the ancient wisdom of tarot with our interactive Celtic Cross spread. Get detailed interpretations for each card position and discover insights about your past, present, and future.",
  keywords: ["tarot", "celtic cross", "tarot reading", "tarot spread", "divination", "fortune telling", "tarot cards", "tarot meanings"],
  authors: [{ name: "Ivan Nevares" }],
  openGraph: {
    title: "Tarot Reading | Celtic Cross Spread",
    description: "Explore the ancient wisdom of tarot with our interactive Celtic Cross spread. Get detailed interpretations for each card position and discover insights about your past, present, and future.",
    type: "website",
    locale: "en_US",
    siteName: "Tarot Reading",
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
    title: "Tarot Reading | Celtic Cross Spread",
    description: "Explore the ancient wisdom of tarot with our interactive Celtic Cross spread.",
    images: ["/images/og-image.jpg"]
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
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
  themeColor: "#000000",
  alternates: {
    canonical: "https://tarot-reading.com"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Tarot Reading | Celtic Cross Spread",
  "description": "Explore the ancient wisdom of tarot with our interactive Celtic Cross spread",
  "url": "https://tarot-reading.com",
  "applicationCategory": "LifestyleApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
