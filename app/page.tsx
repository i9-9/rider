"use client"

import { useEffect, useState } from "react"
import TarotCardComponent from "@/components/tarot-card"
import { tarotDeck } from "@/lib/tarot-data"
import type { TarotCard } from "@/lib/tarot-data"
import Navbar from "@/components/navbar"

const spreadPositions = [
  { position: 1, meaning: "Present Situation" },
  { position: 2, meaning: "Challenge" },
  { position: 3, meaning: "Subconscious Influences" },
  { position: 4, meaning: "Recent Past" },
  { position: 5, meaning: "Near Future" },
  { position: 6, meaning: "Hopes and Fears" },
  { position: 7, meaning: "Your Influence" },
  { position: 8, meaning: "External Influences" },
  { position: 9, meaning: "Guidance" },
  { position: 10, meaning: "Outcome" }
]

export default function Home() {
  const [cards, setCards] = useState<TarotCard[]>([])

  useEffect(() => {
    drawCards()
  }, [])

  function drawCards() {
    // Shuffle the cards
    const shuffled = [...tarotDeck].sort(() => Math.random() - 0.5)
    
    // Take first 10 cards for Celtic Cross spread
    const selectedCards = shuffled.slice(0, 10)
    
    setCards(selectedCards)
  }

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar onDrawCards={drawCards} />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {/* First row - 5 cards */}
            <div className="col-span-2 md:col-span-5 grid grid-cols-2 md:grid-cols-5 gap-3">
              {cards.slice(0, 5).map((card, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-center text-xs text-gray-400 mb-1">
                    {spreadPositions[index].position}. {spreadPositions[index].meaning}
                  </div>
                  <TarotCardComponent card={card} priority={index < 2} />
                </div>
              ))}
            </div>
            
            {/* Second row - 5 cards */}
            <div className="col-span-2 md:col-span-5 grid grid-cols-2 md:grid-cols-5 gap-3">
              {cards.slice(5, 10).map((card, index) => (
                <div key={index + 5} className="flex flex-col items-center">
                  <div className="text-center text-xs text-gray-400 mb-1">
                    {spreadPositions[index + 5].position}. {spreadPositions[index + 5].meaning}
                  </div>
                  <TarotCardComponent card={card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
