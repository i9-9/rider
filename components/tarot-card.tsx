"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState, useEffect } from "react"
import majorArcanaData from "@/public/interpretations/major_arcana.json"
import wandsData from "@/public/interpretations/wands.json"
import cupsData from "@/public/interpretations/cups.json"
import swordsData from "@/public/interpretations/swords.json"
import pentaclesData from "@/public/interpretations/pentacles.json"
import type { TarotCard } from "@/lib/tarot-data"

type PositionNumber = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10"

const positionToNumber: Record<string, PositionNumber> = {
  "present": "1",
  "challenge": "2",
  "past": "3",
  "future": "4",
  "above": "5",
  "below": "6",
  "advice": "7",
  "external": "8",
  "hopes": "9",
  "outcome": "10"
}

type MinorArcanaCard = {
  id: string
  name: string
  interpretations: Record<PositionNumber, string>
}

type MinorArcanaSuit = {
  [key: string]: MinorArcanaCard
}

type MajorArcanaCard = {
  id: number
  name: string
  interpretations: Record<PositionNumber, string>
}

interface TarotCardProps {
  card: TarotCard
  position?: string
  isReversed?: boolean
  onFlip?: () => void
}

export default function TarotCard({ card, position, isReversed = false, onFlip }: TarotCardProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imagePath, setImagePath] = useState("")

  useEffect(() => {
    if (card.arcana === "major") {
      setImagePath(`/images/major_arcana_${card.name.toLowerCase().replace(/\s+/g, '_')}.png`)
    } else if (card.suit) {
      const value = card.name.split(' of ')[0].toLowerCase()
      const suit = card.suit.toLowerCase()
      setImagePath(`/images/${suit}_${value}.png`)
    }
  }, [card])

  const getInterpretation = () => {
    if (!position) {
      console.log('No position provided')
      return null
    }
    const positionNumber = positionToNumber[position]
    if (!positionNumber) {
      console.log('No position number found for position:', position)
      return null
    }

    console.log('Getting interpretation for:', {
      cardName: card.name,
      position,
      positionNumber,
      arcana: card.arcana,
      suit: card.suit,
      isReversed
    })

    if (card.arcana === "major") {
      console.log('Searching for major arcana card:', card.name)
      const majorCard = (majorArcanaData.majorArcana as unknown as MajorArcanaCard[]).find(m => m.name === card.name)
      console.log('Found major card:', majorCard)
      if (!majorCard) {
        console.log('Major card not found')
        return null
      }
      const interpretation = majorCard.interpretations[positionNumber]
      console.log('Major card interpretation:', interpretation)
      return interpretation
    } else if (card.arcana === "minor") {
      const cardKey = card.name.toLowerCase().split(' of ')[0]
      console.log('Minor card key:', cardKey)
      
      let cardData: MinorArcanaCard | undefined
      switch (card.suit) {
        case "Wands":
          console.log('Looking for Wands card:', cardKey)
          cardData = (wandsData.wands as unknown as MinorArcanaSuit)[cardKey]
          console.log('Found Wands data:', cardData)
          break
        case "Cups":
          console.log('Looking for Cups card:', cardKey)
          cardData = (cupsData.cups as unknown as MinorArcanaSuit)[cardKey]
          console.log('Found Cups data:', cardData)
          break
        case "Swords":
          console.log('Looking for Swords card:', cardKey)
          cardData = (swordsData.swords as unknown as MinorArcanaSuit)[cardKey]
          console.log('Found Swords data:', cardData)
          break
        case "Pentacles":
          console.log('Looking for Pentacles card:', cardKey)
          cardData = (pentaclesData.pentacles as unknown as MinorArcanaSuit)[cardKey]
          console.log('Found Pentacles data:', cardData)
          break
      }
      
      if (!cardData) {
        console.log('No card data found')
        return null
      }
      
      console.log('Found card data:', cardData)
      const interpretation = cardData.interpretations[positionNumber]
      console.log('Selected interpretation:', interpretation)
      return interpretation
    }
    return null
  }

  return (
    <div className="relative w-64 h-[28rem]">
      <div 
        className="cursor-pointer"
        onClick={() => {
          if (!isRevealed) {
            setIsRevealed(true)
          } else {
            setIsModalOpen(true)
            if (onFlip) {
              onFlip()
            }
          }
        }}
      >
        <div 
          className="absolute inset-0 backface-hidden cursor-pointer"
          onClick={() => {
            setIsRevealed(true)
            setIsModalOpen(true)
            onFlip?.()
          }}
        >
          <Image
            src="/images/card_back.png"
            alt="Card Back"
            fill
            priority={true}
            loading="eager"
            quality={75}
            className="object-contain"
          />
        </div>
        <div className="absolute inset-0 backface-hidden">
          <Image
            src={imagePath}
            alt={card.name}
            fill
            priority={true}
            loading="eager"
            quality={75}
            className={`object-contain ${isReversed ? 'rotate-180' : ''}`}
            onError={(e) => {
              console.error(`Failed to load image for ${card.name} at path: ${imagePath}`)
              const target = e.target as HTMLImageElement
              target.src = '/images/major_arcana_fool.png'
            }}
          />
        </div>
      </div>
      {isRevealed && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent 
            className="sm:max-w-4xl bg-black text-white border-white/20"
            aria-describedby="card-description"
          >
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-white">
                <span>{card.name}</span>
                {isRevealed && isReversed && <span className="text-gray-400 text-sm">(Reversed)</span>}
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="flex items-start gap-8">
                <div className="w-64 h-[28rem] relative">
                  <Image
                    src={imagePath}
                    alt={card.name}
                    fill
                    priority={true}
                    loading="eager"
                    quality={75}
                    className={`object-contain ${isReversed ? 'rotate-180' : ''}`}
                    onError={(e) => {
                      console.error(`Failed to load image for ${card.name} at path: ${imagePath}`)
                      const target = e.target as HTMLImageElement
                      target.src = '/images/major_arcana_fool.png'
                    }}
                  />
                </div>
                <div className="flex-1" id="card-description">
                  <h3 className="font-semibold mb-2 text-white">Position Meaning:</h3>
                  <p className="text-base text-gray-400 mb-4">
                    {position === "present" && "This card represents your current situation and immediate influences. It shows what is happening in your life right now and the energies surrounding you."}
                    {position === "challenge" && "This card reveals the main challenge or obstacle you're facing. It represents what is crossing you or working against you in your current situation."}
                    {position === "past" && "This card reflects past influences that have shaped your current situation. It shows what has led you to where you are now."}
                    {position === "future" && "This card indicates potential future developments and outcomes. It shows what is likely to happen if current trends continue."}
                    {position === "above" && "This card represents your conscious goals and aspirations. It shows what you are aiming for or what you hope to achieve."}
                    {position === "below" && "This card reveals subconscious influences and hidden factors. It represents the foundation of your situation and what lies beneath the surface."}
                    {position === "advice" && "This card offers guidance on how to approach your situation. It suggests the best way to handle the challenges you're facing."}
                    {position === "external" && "This card shows external influences and other people's perspectives. It represents how others see your situation and what outside forces are at play."}
                    {position === "hopes" && "This card reveals your hopes and fears about the situation. It shows what you desire and what you're afraid might happen."}
                    {position === "outcome" && "This card indicates the likely outcome if current trends continue. It represents the final resolution or culmination of your situation."}
                  </p>
                  <h3 className="font-semibold mb-2 text-white">Card Interpretation:</h3>
                  <p className="text-base text-gray-400 mb-4">
                    {getInterpretation() || "No interpretation available for this position."}
                  </p>
                  <h3 className="font-semibold mb-2 text-white">Card Meaning:</h3>
                  <p className="text-base text-gray-400">{isReversed ? card.reversedMeaning : card.uprightMeaning}</p>
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2 text-white">Arcana:</h3>
                    <p className="text-base text-gray-400">
                      {card.arcana === "major" ? "Major" : "Minor"}
                      {card.arcana === "minor" && ` - ${card.suit}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}