"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { allCards, TarotCard } from "@/lib/tarot-data"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { getCardImagePath } from "@/lib/card-utils"

function EncyclopediaCard({ card }: { card: TarotCard }) {
  return (
    <div className="w-[180px]">
      <Card className="overflow-hidden aspect-[2/3] flex items-center justify-center bg-black border border-white/20">
        <CardContent className="p-0 w-full h-full">
          <div className="w-full h-full relative">
            <Image
              src={getCardImagePath(card)}
              alt={card.name}
              fill
              priority={true}
              loading="eager"
              quality={75}
              className="object-contain"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function EncyclopediaPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null)
  const [selectedArcana, setSelectedArcana] = useState<"all" | "major" | "minor">("all")
  const [selectedSuit, setSelectedSuit] = useState<"all" | "Cups" | "Pentacles" | "Swords" | "Wands">("all")

  const filteredCards = allCards.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesArcana = selectedArcana === "all" || card.arcana === selectedArcana
    const matchesSuit = selectedSuit === "all" || card.suit === selectedSuit
    return matchesSearch && matchesArcana && matchesSuit
  })

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Tarot Encyclopedia</h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-8 space-y-4">
            <Input
              type="text"
              placeholder="Search for a card..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="bg-black/50 border-white/20 text-white placeholder:text-white/50"
            />
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <label className="text-white">Arcana:</label>
                <select
                  value={selectedArcana}
                  onChange={(e) => setSelectedArcana(e.target.value as "all" | "major" | "minor")}
                  className="bg-black/50 border border-white/20 text-white rounded px-2 py-1"
                >
                  <option value="all">All</option>
                  <option value="major">Major Arcana</option>
                  <option value="minor">Minor Arcana</option>
                </select>
              </div>

              {selectedArcana === "minor" && (
                <div className="flex items-center gap-2">
                  <label className="text-white">Suit:</label>
                  <select
                    value={selectedSuit}
                    onChange={(e) => setSelectedSuit(e.target.value as "all" | "Cups" | "Pentacles" | "Swords" | "Wands")}
                    className="bg-black/50 border border-white/20 text-white rounded px-2 py-1"
                  >
                    <option value="all">All</option>
                    <option value="Cups">Cups</option>
                    <option value="Pentacles">Pentacles</option>
                    <option value="Swords">Swords</option>
                    <option value="Wands">Wands</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {filteredCards.map((card) => (
              <motion.div
                key={`${card.name}-${card.arcana}-${card.suit || ''}`}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => setSelectedCard(card)}
              >
                <EncyclopediaCard card={card} />
              </motion.div>
            ))}
          </div>

          <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
            <DialogContent className="sm:max-w-4xl bg-black text-white border-white/20">
              <DialogHeader>
                <DialogTitle className="text-white">
                  {selectedCard?.name}
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="flex items-start gap-8">
                  <div className="w-64 h-[28rem] relative">
                    {selectedCard && (
                      <Image
                        src={getCardImagePath(selectedCard)}
                        alt={selectedCard.name}
                        fill
                        priority={true}
                        loading="eager"
                        quality={75}
                        className="object-contain"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-white">Card Meaning:</h3>
                    <p className="text-base text-gray-400 mb-4">
                      {selectedCard?.interpretations.upright}
                    </p>
                    <div className="mt-4">
                      <h3 className="font-semibold mb-2 text-white">Arcana:</h3>
                      <p className="text-base text-gray-400">
                        {selectedCard?.arcana === "major" ? "Major" : "Minor"}
                        {selectedCard?.arcana === "minor" && ` - ${selectedCard?.suit}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </main>
    </div>
  )
} 