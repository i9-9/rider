import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Tarot Encyclopedia | Complete Guide to Tarot Cards",
  description: "Explore our comprehensive tarot card encyclopedia. Learn about the meanings, interpretations, and symbolism of all 78 tarot cards, including both Major and Minor Arcana.",
  keywords: ["tarot encyclopedia", "tarot card meanings", "major arcana", "minor arcana", "tarot guide", "tarot learning", "tarot card interpretations"],
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
}

export default function EncyclopediaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 