import type { Metadata, Viewport } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-8">The page you are looking for does not exist.</p>
      <Link href="/" className="text-white hover:text-gray-300">
        Return to Home
      </Link>
    </div>
  )
} 