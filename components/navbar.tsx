import { Button } from "@/components/ui/button"

interface NavbarProps {
  onDrawCards: () => void
}

export default function Navbar({ onDrawCards }: NavbarProps) {
  return (
    <nav className="w-full bg-black/50 border-b border-white/20 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Celtic Cross Tarot Reading</h1>
        <Button 
          onClick={onDrawCards}
          className="bg-white text-black hover:bg-gray-200"
        >
          Draw New Cards
        </Button>
      </div>
    </nav>
  )
} 