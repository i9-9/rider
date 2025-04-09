"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import type { TarotCard } from "@/lib/tarot-data"

interface TarotCardProps {
  card: TarotCard
  position: number
  priority?: boolean
}

export default function TarotCardComponent({ 
  card, 
  position,
  priority = false
}: TarotCardProps) {
  const isReversed = Math.random() > 0.5
  
  // Generate the correct image path based on card type
  let imagePath: string
  if (card.arcana === "major") {
    // For major arcana: major_arcana_[cardName].png
    // Handle special cases
    const cardName = card.name.toLowerCase().replace(/^the /, '')
    if (cardName === 'hanged man') {
      imagePath = '/images/major_arcana_hanged.png'
    } else if (cardName === 'high priestess') {
      imagePath = '/images/major_arcana_priestess.png'
    } else if (cardName === 'wheel of fortune') {
      imagePath = '/images/major_arcana_fortune.png'
    } else {
      imagePath = `/images/major_arcana_${cardName.replace(/ /g, '_')}.png`
    }
  } else {
    // For minor arcana: minor_arcana_[suitName]_[number].png or minor_arcana_[suit]_[character].png
    const cardValue = card.name.toLowerCase().split(' of ')[0]
    // Convert number words to digits for numbered cards
    const numberMap: { [key: string]: string } = {
      'ace': 'ace',
      'two': '2',
      'three': '3',
      'four': '4',
      'five': '5',
      'six': '6',
      'seven': '7',
      'eight': '8',
      'nine': '9',
      'ten': '10',
      'page': 'page',
      'knight': 'knight',
      'queen': 'queen',
      'king': 'king'
    }
    const numericValue = numberMap[cardValue] || cardValue
    imagePath = `/images/minor_arcana_${card.suit?.toLowerCase()}_${numericValue}.png`
  }

  console.log(`Card: ${card.name}, Path: ${imagePath}`)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer w-[180px]">
          <div className="text-center text-sm text-gray-400 mb-2">Position {position}</div>
          <Card className="overflow-hidden aspect-[9/16] flex items-center justify-center bg-black border-2 border-white">
            <CardContent className="p-0 w-full h-full">
              <div className="w-full h-full relative">
                <Image
                  src={imagePath}
                  alt={card.name}
                  fill
                  priority={priority}
                  loading={priority ? "eager" : "lazy"}
                  quality={75}
                  className={`object-cover ${isReversed ? 'rotate-180' : ''}`}
                  onError={(e) => {
                    console.error(`Failed to load image for ${card.name} at path: ${imagePath}`)
                    const target = e.target as HTMLImageElement
                    target.src = '/images/major_arcana_fool.png' // Fallback image
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-black text-white border-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            <span>{card.name}</span>
            {isReversed && <span className="text-gray-400 text-sm">(Reversed)</span>}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="flex items-start gap-4">
            <div className="w-24 h-40 relative">
              <Image
                src={imagePath}
                alt={card.name}
                fill
                priority={priority}
                loading={priority ? "eager" : "lazy"}
                quality={75}
                className={`object-cover ${isReversed ? 'rotate-180' : ''}`}
                onError={(e) => {
                  console.error(`Failed to load image for ${card.name} at path: ${imagePath}`)
                  const target = e.target as HTMLImageElement
                  target.src = '/images/major_arcana_fool.png' // Fallback image
                }}
              />
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-white">Meaning:</h3>
              <p className="text-sm text-gray-400">{isReversed ? card.reversedMeaning : card.uprightMeaning}</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-white">Arcana:</h3>
            <p className="text-sm text-gray-400">
              {card.arcana === "major" ? "Major" : "Minor"}
              {card.arcana === "minor" && ` - ${card.suit}`}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
