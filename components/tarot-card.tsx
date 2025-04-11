"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { TarotCard } from "@/lib/tarot-data"
import { getCardImagePath } from "@/lib/card-utils"

interface TarotCardProps {
  card: TarotCard
  position?: string
  onReveal?: () => void
  isRevealed?: boolean
  isReversed?: boolean
}

export function TarotCardComponent({ 
  card, 
  position, 
  onReveal,
  isRevealed = false,
  isReversed = false
}: TarotCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imagePath = getCardImagePath(card);

  const handleClick = () => {
    if (!isRevealed) {
      onReveal?.();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="w-[200px]">
      <div 
        className="cursor-pointer"
        onClick={handleClick}
      >
        <Card className="overflow-hidden aspect-[2/3] flex items-center justify-center bg-black border border-white/20">
          <CardContent className="p-0 w-full h-full">
            {!isRevealed ? (
              <motion.div
                key="back"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 0 }}
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
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full relative"
                style={{ 
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden'
                }}
              >
                <Image
                  src={imagePath}
                  alt={card.name}
                  fill
                  priority={true}
                  loading="eager"
                  quality={75}
                  className={`object-contain ${isReversed ? 'rotate-180' : ''}`}
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transition: 'none'
                  }}
                  onError={(e) => {
                    console.error(`Failed to load image for ${card.name} at path: ${imagePath}`)
                    const target = e.target as HTMLImageElement
                    target.src = '/images/major_arcana_fool.png'
                  }}
                />
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>

      {isModalOpen && (
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
                  <h3 className="font-semibold mb-2 text-white">Card Meaning:</h3>
                  <p className="text-base text-gray-400">
                    {isReversed ? card.interpretations.reversed : card.interpretations.upright}
                  </p>
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
  );
}