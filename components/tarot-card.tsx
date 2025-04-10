"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { TarotCard } from "@/lib/tarot-data"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TarotCardProps {
  card: TarotCard
  priority?: boolean
}

export default function TarotCardComponent({ card, priority = false }: TarotCardProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isReversed] = useState(() => Math.random() < 0.5)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsRevealed(false)
    setIsModalOpen(false)
  }, [card])

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

  return (
    <div className="w-[200px]">
      <div 
        className="cursor-pointer"
        onClick={() => {
          if (!isRevealed) {
            setIsRevealed(true)
          } else {
            setIsModalOpen(true)
          }
        }}
      >
        <Card className="overflow-hidden aspect-[2/3] flex items-center justify-center bg-black border border-white/20">
          <CardContent className="p-0 w-full h-full">
            <AnimatePresence mode="wait">
              {!isRevealed ? (
                <motion.div
                  key="back"
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: 90 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative bg-gradient-to-br from-purple-900 to-black"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 border-2 border-white/20 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="front"
                  initial={{ rotateY: -90 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={imagePath}
                    alt={card.name}
                    fill
                    priority={priority}
                    loading={priority ? "eager" : "lazy"}
                    quality={75}
                    className={`object-contain ${isReversed ? 'rotate-180' : ''}`}
                    onError={(e) => {
                      console.error(`Failed to load image for ${card.name} at path: ${imagePath}`)
                      const target = e.target as HTMLImageElement
                      target.src = '/images/major_arcana_fool.png'
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
      {isRevealed && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-4xl bg-black text-white border-white/20">
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
                    priority={priority}
                    loading={priority ? "eager" : "lazy"}
                    quality={75}
                    className={`object-contain ${isReversed ? 'rotate-180' : ''}`}
                    onError={(e) => {
                      console.error(`Failed to load image for ${card.name} at path: ${imagePath}`)
                      const target = e.target as HTMLImageElement
                      target.src = '/images/major_arcana_fool.png'
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2 text-white">Position Meaning:</h3>
                  <p className="text-base text-gray-400 mb-4">
                    {card.position === "present" && "This card represents your current situation and immediate influences. It shows what is happening in your life right now and the energies surrounding you."}
                    {card.position === "challenge" && "This card reveals the main challenge or obstacle you're facing. It represents what is crossing you or working against you in your current situation."}
                    {card.position === "past" && "This card reflects past influences that have shaped your current situation. It shows what has led you to where you are now."}
                    {card.position === "future" && "This card indicates potential future developments and outcomes. It shows what is likely to happen if current trends continue."}
                    {card.position === "above" && "This card represents your conscious goals and aspirations. It shows what you are aiming for or what you hope to achieve."}
                    {card.position === "below" && "This card reveals subconscious influences and hidden factors. It represents the foundation of your situation and what lies beneath the surface."}
                    {card.position === "advice" && "This card offers guidance on how to approach your situation. It suggests the best way to handle the challenges you're facing."}
                    {card.position === "external" && "This card shows external influences and other people's perspectives. It represents how others see your situation and what outside forces are at play."}
                    {card.position === "hopes" && "This card reveals your hopes and fears about the situation. It shows what you desire and what you're afraid might happen."}
                    {card.position === "outcome" && "This card indicates the likely outcome if current trends continue. It represents the final resolution or culmination of your situation."}
                  </p>
                  <h3 className="font-semibold mb-2 text-white">Card Interpretation:</h3>
                  <p className="text-base text-gray-400 mb-4">
                    {card.position === "present" && `The ${card.name} in your present position suggests that ${isReversed ? card.reversedMeaning.toLowerCase() : card.uprightMeaning.toLowerCase()}. This energy is currently active in your life and influencing your immediate circumstances.`}
                    {card.position === "challenge" && `The ${card.name} as your challenge indicates that ${isReversed ? card.reversedMeaning.toLowerCase() : card.uprightMeaning.toLowerCase()}. This is what you need to overcome or work through to progress.`}
                    {card.position === "past" && `The ${card.name} in your past position shows that ${isReversed ? card.reversedMeaning.toLowerCase() : card.uprightMeaning.toLowerCase()}. This has significantly influenced your current situation.`}
                    {card.position === "future" && `The ${card.name} in your future position suggests that ${isReversed ? card.reversedMeaning.toLowerCase() : card.uprightMeaning.toLowerCase()}. This is the direction your path is currently taking.`}
                    {card.position === "above" && `The ${card.name} above you indicates that ${isReversed ? card.reversedMeaning.toLowerCase() : card.uprightMeaning.toLowerCase()}. This is what you're consciously working towards or aspiring to.`}
                    {card.position === "below" && `The ${card.name} below you reveals that ${isReversed ? card.reversedMeaning.toLowerCase() : card.uprightMeaning.toLowerCase()}. This is the underlying energy supporting your situation.`}
                    {card.position === "advice" && `The ${card.name} as advice suggests that ${isReversed ? card.reversedMeaning.toLowerCase() : card.uprightMeaning.toLowerCase()}. This is the guidance you should consider following.`}
                    {card.position === "external" && `The ${card.name} in the external position shows that ${isReversed ? card.reversedMeaning.toLowerCase() : card.uprightMeaning.toLowerCase()}. This is how others perceive your situation.`}
                    {card.position === "hopes" && `The ${card.name} in your hopes position indicates that ${isReversed ? card.reversedMeaning.toLowerCase() : card.uprightMeaning.toLowerCase()}. This is what you're hoping for or fearing.`}
                    {card.position === "outcome" && `The ${card.name} as your outcome suggests that ${isReversed ? card.reversedMeaning.toLowerCase() : card.uprightMeaning.toLowerCase()}. This is the likely result if current trends continue.`}
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
