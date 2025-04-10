"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

interface NavbarProps {
  onDrawCards?: () => void
}

export default function Navbar({ onDrawCards }: NavbarProps) {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="w-full border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className={`text-white font-semibold hover:text-white/80 transition-colors ${
                pathname === "/" ? "text-white" : "text-white/60"
              }`}
            >
              Tarot Spread
            </Link>
            <Link 
              href="/encyclopedia" 
              className={`text-white font-semibold hover:text-white/80 transition-colors ${
                pathname === "/encyclopedia" ? "text-white" : "text-white/60"
              }`}
            >
              Encyclopedia
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {onDrawCards && (
              <Button
                onClick={onDrawCards}
                className="bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Draw New Cards
              </Button>
            )}
            <Button
              onClick={() => setIsAboutOpen(true)}
              variant="ghost"
              className="text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              About
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isAboutOpen} onOpenChange={setIsAboutOpen}>
        <DialogContent className="sm:max-w-2xl bg-black text-white border-white/20">
          <DialogHeader>
            <DialogTitle className="text-xl text-white">About the Celtic Cross Tarot Reading</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-300">
            <p>
              Each card interpretation includes insights for all 10 positions in the Celtic Cross spread, offering guidance that integrates:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hebrew letter correspondences (Kabbalistic approach)</li>
              <li>Tree of Life connections</li>
              <li>Jungian archetypes and psychological dynamics</li>
              <li>Humanistic psychology concepts</li>
              <li>The shadow and integration aspects of each position</li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  )
} 