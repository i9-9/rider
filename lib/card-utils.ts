/**
 * This file contains critical utility functions for tarot card operations.
 * WARNING: These functions are core to the application's functionality.
 * Any changes to these functions must be thoroughly tested and reviewed.
 */

import { TarotCard } from "./tarot-data"

/**
 * Image path generation rules:
 * 
 * Major Arcana:
 * - Format: /images/major_arcana_[cardName].png
 * - Special cases:
 *   - "The Hanged Man" -> "hanged.png"
 *   - "The High Priestess" -> "priestess.png"
 *   - "Wheel of Fortune" -> "fortune.png"
 * - All other cards: remove "The " prefix and replace spaces with underscores
 * 
 * Minor Arcana:
 * - Format: /images/minor_arcana_[suit]_[value].png
 * - Suit: cups, pentacles, swords, wands (lowercase)
 * - Value: 
 *   - Number cards: 1-10 (as digits)
 *   - Court cards: page, knight, queen, king
 *   - Ace: "ace"
 * 
 * Example paths:
 * - Major: /images/major_arcana_fool.png
 * - Minor: /images/minor_arcana_cups_2.png
 * - Court: /images/minor_arcana_swords_queen.png
 */

/**
 * Generates the correct image path for a tarot card.
 * This function is critical for the application and should not be modified
 * without thorough testing and review.
 * 
 * @param card - The tarot card object containing name, arcana type, and suit
 * @returns The path to the card's image file
 * 
 * @example
 * // Major Arcana
 * getCardImagePath({ name: "The Fool", arcana: "major" })
 * // Returns: "/images/major_arcana_fool.png"
 * 
 * // Minor Arcana
 * getCardImagePath({ 
 *   name: "Two of Cups", 
 *   arcana: "minor", 
 *   suit: "Cups" 
 * })
 * // Returns: "/images/minor_arcana_cups_2.png"
 * 
 * // Court Card
 * getCardImagePath({ 
 *   name: "Queen of Swords", 
 *   arcana: "minor", 
 *   suit: "Swords" 
 * })
 * // Returns: "/images/minor_arcana_swords_queen.png"
 */
export function getCardImagePath(card: TarotCard): string {
  if (card.arcana === "major") {
    // For major arcana: major_arcana_[cardName].png
    // Handle special cases
    const cardName = card.name.toLowerCase().replace(/^the /, '')
    if (cardName === 'hanged man') {
      return '/images/major_arcana_hanged.png'
    } else if (cardName === 'high priestess') {
      return '/images/major_arcana_priestess.png'
    } else if (cardName === 'wheel of fortune') {
      return '/images/major_arcana_fortune.png'
    } else {
      return `/images/major_arcana_${cardName.replace(/ /g, '_')}.png`
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
    return `/images/minor_arcana_${card.suit?.toLowerCase()}_${numericValue}.png`
  }
} 