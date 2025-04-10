import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

interface NavbarProps {
  onDrawCards: () => void
}

export default function Navbar({ onDrawCards }: NavbarProps) {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <nav className="w-full bg-black/50 border-b border-white/20 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Celtic Cross Tarot Reading</h1>
        <div className="flex items-center gap-4">
          <Button 
            onClick={() => setIsAboutOpen(true)}
            variant="ghost"
            className="text-white hover:bg-white/10"
          >
            About
          </Button>
          <Button 
            onClick={onDrawCards}
            className="bg-white text-black hover:bg-gray-200"
          >
            Draw New Cards
          </Button>
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