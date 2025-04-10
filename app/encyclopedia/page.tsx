"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import TarotCardComponent from "@/components/tarot-card"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { allCards, TarotCard } from "@/lib/tarot-data"
import Navbar from "@/components/navbar"

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
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8 text-white">Tarot Encyclopedia</h1>
            
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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredCards.map((card) => (
                <motion.div
                  key={card.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card 
                    className="cursor-pointer bg-black/50 border-white/20 hover:border-white/40 transition-colors"
                    onClick={() => setSelectedCard(card)}
                  >
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">{card.name}</h3>
                      <p className="text-sm text-white/70">
                        {card.arcana === "major" ? "Major Arcana" : `Minor Arcana - ${card.suit}`}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {selectedCard && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                <div className="bg-black border border-white/20 rounded-lg p-6 max-w-4xl w-full">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold text-white">{selectedCard.name}</h2>
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="text-white/70 hover:text-white"
                    >
                      Close
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="w-full">
                      <TarotCardComponent
                        card={selectedCard}
                        position="present"
                        isReversed={false}
                      />
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Arcana</h3>
                        <p className="text-white/70">
                          {selectedCard.arcana === "major" ? "Major Arcana" : `Minor Arcana - ${selectedCard.suit}`}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Upright Meaning</h3>
                        <p className="text-white/70">{selectedCard.uprightMeaning}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Reversed Meaning</h3>
                        <p className="text-white/70">{selectedCard.reversedMeaning}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  )
} 