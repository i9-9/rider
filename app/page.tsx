"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import TarotCardComponent from "@/components/tarot-card"
import { tarotDeck } from "@/lib/tarot-data"
import type { TarotCard } from "@/lib/tarot-data"

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
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold text-center">Celtic Cross Spread</h1>
          
          <div className="w-full">
            <div className="grid grid-cols-4 gap-4">
              {/* First row - 4 cards */}
              <div className="col-span-4 grid grid-cols-4 gap-4">
                {cards.slice(0, 4).map((card, index) => (
                  <div key={index} className="flex justify-center">
                    <TarotCardComponent card={card} position={index + 1} priority={index < 2} />
                  </div>
                ))}
              </div>
              
              {/* Second row - 2 cards centered */}
              <div className="col-span-4 grid grid-cols-4 gap-4">
                <div className="col-span-1" />
                {cards.slice(4, 6).map((card, index) => (
                  <div key={index + 4} className="col-span-1 flex justify-center">
                    <TarotCardComponent card={card} position={index + 5} />
                  </div>
                ))}
                <div className="col-span-1" />
              </div>
              
              {/* Third row - 4 cards */}
              <div className="col-span-4 grid grid-cols-4 gap-4">
                {cards.slice(6, 10).map((card, index) => (
                  <div key={index + 6} className="flex justify-center">
                    <TarotCardComponent card={card} position={index + 7} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button 
            onClick={drawCards}
            className="bg-white text-black hover:bg-gray-200"
          >
            Draw New Cards
          </Button>
        </div>
      </div>
    </main>
  )
}
