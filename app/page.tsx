"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import TarotCardComponent from "@/components/tarot-card"
import { tarotDeck } from "@/lib/tarot-data"
import type { TarotCard } from "@/lib/tarot-data"

const spreadPositions = [
  { position: 1, meaning: "Present Situation - What is currently happening in your life" },
  { position: 2, meaning: "Challenge - What is blocking or opposing you" },
  { position: 3, meaning: "Subconscious Influences - Hidden factors affecting the situation" },
  { position: 4, meaning: "Recent Past - Events that led to the current situation" },
  { position: 5, meaning: "Possible Future - What could happen if current path continues" },
  { position: 6, meaning: "Near Future - What is likely to happen soon" },
  { position: 7, meaning: "Your Attitude - How you feel about the situation" },
  { position: 8, meaning: "External Influences - People or events affecting the situation" },
  { position: 9, meaning: "Hopes and Fears - Your desires and concerns" },
  { position: 10, meaning: "Final Outcome - The likely resolution of the situation" }
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
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold text-center">Celtic Cross Spread</h1>
          
          <div className="w-full">
            <div className="grid grid-cols-4 gap-4">
              {/* First row - 4 cards */}
              <div className="col-span-4 grid grid-cols-4 gap-4">
                {cards.slice(0, 4).map((card, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-center text-sm text-gray-400 mb-2">
                      {spreadPositions[index].position}. {spreadPositions[index].meaning}
                    </div>
                    <TarotCardComponent card={card} position={index + 1} priority={index < 2} />
                  </div>
                ))}
              </div>
              
              {/* Second row - 2 cards centered */}
              <div className="col-span-4 grid grid-cols-4 gap-4">
                <div className="col-span-1" />
                {cards.slice(4, 6).map((card, index) => (
                  <div key={index + 4} className="col-span-1 flex flex-col items-center">
                    <div className="text-center text-sm text-gray-400 mb-2">
                      {spreadPositions[index + 4].position}. {spreadPositions[index + 4].meaning}
                    </div>
                    <TarotCardComponent card={card} position={index + 5} />
                  </div>
                ))}
                <div className="col-span-1" />
              </div>
              
              {/* Third row - 4 cards */}
              <div className="col-span-4 grid grid-cols-4 gap-4">
                {cards.slice(6, 10).map((card, index) => (
                  <div key={index + 6} className="flex flex-col items-center">
                    <div className="text-center text-sm text-gray-400 mb-2">
                      {spreadPositions[index + 6].position}. {spreadPositions[index + 6].meaning}
                    </div>
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
