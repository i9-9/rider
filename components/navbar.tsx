"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { TarotCard } from "@/lib/tarot-data"

interface NavbarProps {
  onDrawCards?: () => void
  cards?: TarotCard[]
  positions?: string[]
}

export function Navbar({ onDrawCards, cards = [], positions = [] }: NavbarProps) {
  const pathname = usePathname()
  const { toast } = useToast()

  const handleCopySpread = () => {
    if (!cards.length || !positions.length) {
      toast({
        title: "No spread to copy",
        description: "Please draw cards first",
        variant: "destructive"
      })
      return
    }

    const spreadText = cards.map((card, index) => {
      const position = positions[index]
      const orientation = card.isReversed ? "Reversed" : "Upright"
      return `${position}: ${card.name} (${orientation})`
    }).join("\n")

    navigator.clipboard.writeText(spreadText)
    toast({
      title: "Spread copied!",
      description: "The spread has been copied to your clipboard",
    })
  }

  return (
    <nav className="bg-black/50 backdrop-blur-sm border-b border-white/20 fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className={`text-white/60 hover:text-white transition-colors ${pathname === "/" ? "text-white" : ""}`}
            >
              Tarot Spread
            </Link>
            <Link 
              href="/encyclopedia" 
              className={`text-white/60 hover:text-white transition-colors ${pathname === "/encyclopedia" ? "text-white" : ""}`}
            >
              Encyclopedia
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {onDrawCards && (
              <>
                <Button 
                  onClick={handleCopySpread}
                  className="bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Copy Spread
                </Button>
                <Button 
                  onClick={onDrawCards}
                  className="bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Draw New Cards
                </Button>
              </>
            )}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                  About
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl bg-black text-white border-white/20 max-h-[90vh] overflow-y-auto pt-8">
                <DialogHeader>
                  <DialogTitle className="text-white text-base">About Celtic Cross Tarot Reading</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pb-8">
                  <p className="text-gray-400">
                    The Celtic Cross is one of the most popular and widely used tarot spreads. It&apos;s a comprehensive spread that provides insight into a specific situation or question, offering both immediate and long-term perspectives.
                  </p>
                  <p className="text-gray-400">
                    The spread consists of 10 cards arranged in a cross pattern, each position representing different aspects of the situation:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li><strong className="text-white">1. Present Situation:</strong> Your current circumstances and immediate influences</li>
                    <li><strong className="text-white">2. Challenge:</strong> The main obstacle or difficulty you&apos;re facing</li>
                    <li><strong className="text-white">3. Subconscious:</strong> Hidden factors affecting your situation</li>
                    <li><strong className="text-white">4. Past:</strong> Events that have led to your current situation</li>
                    <li><strong className="text-white">5. Conscious:</strong> Your current thoughts and feelings</li>
                    <li><strong className="text-white">6. Future:</strong> What is likely to happen in the near term</li>
                    <li><strong className="text-white">7. Self:</strong> How you can affect the situation</li>
                    <li><strong className="text-white">8. Environment:</strong> Outside factors affecting your situation</li>
                    <li><strong className="text-white">9. Hopes & Fears:</strong> Your emotional state and expectations</li>
                    <li><strong className="text-white">10. Outcome:</strong> The likely result if current trends continue</li>
                  </ul>
                  <p className="text-gray-400">
                    The Celtic Cross spread is particularly useful for gaining insight into complex situations, understanding the dynamics at play, and identifying potential paths forward.
                  </p>
                  <div className="mt-12 pt-6 border-t border-white/20">
                    <h3 className="text-white font-semibold mb-2 text-sm">About the Interpretations</h3>
                    <p className="text-gray-400">
                      The card interpretations in this reading draw from multiple esoteric and psychological traditions:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-400 mt-2">
                      <li><strong className="text-white">Jungian Psychology:</strong> Archetypes, the collective unconscious, and the process of individuation</li>
                      <li><strong className="text-white">Kabbalah:</strong> The Tree of Life, sephiroth, and the path of spiritual ascent</li>
                      <li><strong className="text-white">Alchemy:</strong> The process of transformation and the integration of opposites</li>
                      <li><strong className="text-white">Humanistic Psychology:</strong> Self-actualization, authenticity, and personal growth</li>
                      <li><strong className="text-white">Existential Philosophy:</strong> Meaning-making, choice, and personal responsibility</li>
                    </ul>
                    <p className="text-gray-400 mt-4">
                      These interpretations aim to provide a rich, multi-layered understanding of each card&apos;s meaning, connecting the personal with the archetypal, and the psychological with the spiritual.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  )
} 