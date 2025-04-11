export interface TarotCard {
  id: number
  name: string
  arcana: 'major' | 'minor'
  suit?: string
  number?: number
  interpretations: {
    upright: string
    reversed: string
  }
  isReversed?: boolean
}

// Major Arcana
export const majorArcana: TarotCard[] = [
  {
    id: 0,
    name: "The Fool",
    arcana: "major",
    interpretations: {
      upright: "New beginnings, spontaneity, a leap of faith",
      reversed: "Recklessness, risk-taking, lack of direction"
    }
  },
  {
    id: 1,
    name: "The Magician",
    arcana: "major",
    interpretations: {
      upright: "Manifestation, resourcefulness, power",
      reversed: "Manipulation, poor planning, untapped talents"
    }
  },
  {
    id: 2,
    name: "The High Priestess",
    arcana: "major",
    interpretations: {
      upright: "Intuition, sacred knowledge, divine feminine",
      reversed: "Secrets, disconnected from intuition, withdrawal"
    }
  },
  {
    id: 3,
    name: "The Empress",
    arcana: "major",
    interpretations: {
      upright: "Femininity, beauty, nature, nurturing",
      reversed: "Dependence, smothering, emptiness"
    }
  },
  {
    id: 4,
    name: "The Emperor",
    arcana: "major",
    interpretations: {
      upright: "Authority, structure, control, fatherhood",
      reversed: "Tyranny, rigidity, coldness"
    }
  },
  {
    id: 5,
    name: "The Hierophant",
    arcana: "major",
    interpretations: {
      upright: "Tradition, conformity, morality, ethics",
      reversed: "Rebellion, subversiveness, new approaches"
    }
  },
  {
    id: 6,
    name: "The Lovers",
    arcana: "major",
    interpretations: {
      upright: "Love, harmony, relationships, values alignment",
      reversed: "Self-love, disharmony, imbalance"
    }
  },
  {
    id: 7,
    name: "The Chariot",
    arcana: "major",
    interpretations: {
      upright: "Direction, control, willpower, victory",
      reversed: "Lack of control, lack of direction, aggression"
    }
  },
  {
    id: 8,
    name: "Strength",
    arcana: "major",
    interpretations: {
      upright: "Inner strength, bravery, compassion, focus",
      reversed: "Self-doubt, weakness, insecurity"
    }
  },
  {
    id: 9,
    name: "The Hermit",
    arcana: "major",
    interpretations: {
      upright: "Soul-searching, introspection, being alone",
      reversed: "Isolation, loneliness, withdrawal"
    }
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    arcana: "major",
    interpretations: {
      upright: "Change, cycles, inevitable fate",
      reversed: "No control, clinging to control, bad luck"
    }
  },
  {
    id: 11,
    name: "Justice",
    arcana: "major",
    interpretations: {
      upright: "Cause and effect, clarity, truth",
      reversed: "Dishonesty, unaccountability, unfairness"
    }
  },
  {
    id: 12,
    name: "The Hanged Man",
    arcana: "major",
    interpretations: {
      upright: "Sacrifice, release, martyrdom",
      reversed: "Stalling, needless sacrifice, fear of sacrifice"
    }
  },
  {
    id: 13,
    name: "Death",
    arcana: "major",
    interpretations: {
      upright: "End of cycle, beginnings, change, metamorphosis",
      reversed: "Fear of change, holding on, stagnation"
    }
  },
  {
    id: 14,
    name: "Temperance",
    arcana: "major",
    interpretations: {
      upright: "Middle path, patience, finding meaning",
      reversed: "Extremes, excess, lack of balance"
    }
  },
  {
    id: 15,
    name: "The Devil",
    arcana: "major",
    interpretations: {
      upright: "Addiction, materialism, playfulness",
      reversed: "Freedom, release, restoring control"
    }
  },
  {
    id: 16,
    name: "The Tower",
    arcana: "major",
    interpretations: {
      upright: "Sudden upheaval, broken pride, disaster",
      reversed: "Disaster avoided, delayed disaster, fear of suffering"
    }
  },
  {
    id: 17,
    name: "The Star",
    arcana: "major",
    interpretations: {
      upright: "Hope, faith, purpose, renewal",
      reversed: "Faithlessness, discouragement, insecurity"
    }
  },
  {
    id: 18,
    name: "The Moon",
    arcana: "major",
    interpretations: {
      upright: "Unconscious, illusions, intuition",
      reversed: "Confusion, fear, misinterpretation"
    }
  },
  {
    id: 19,
    name: "The Sun",
    arcana: "major",
    interpretations: {
      upright: "Joy, success, celebration, positivity",
      reversed: "Negativity, depression, sadness"
    }
  },
  {
    id: 20,
    name: "Judgement",
    arcana: "major",
    interpretations: {
      upright: "Reflection, reckoning, awakening",
      reversed: "Lack of self awareness, doubt, self-loathing"
    }
  },
  {
    id: 21,
    name: "The World",
    arcana: "major",
    interpretations: {
      upright: "Completion, integration, accomplishment",
      reversed: "Incompletion, no closure"
    }
  }
]

// Minor Arcana - Wands
export const wands: TarotCard[] = [
  {
    id: 22,
    name: "Ace of Wands",
    arcana: "minor",
    suit: "Wands",
    interpretations: {
      upright: "Inspiration, new opportunities, growth, potential",
      reversed: "Delays, lack of motivation, missed opportunities"
    }
  },
  {
    id: 23,
    name: "Two of Wands",
    arcana: "minor",
    suit: "Wands",
    interpretations: {
      upright: "Planning, making decisions, leaving home",
      reversed: "Fear of change, bad planning, overanalyzing"
    }
  },
  {
    id: 24,
    name: "Three of Wands",
    arcana: "minor",
    suit: "Wands",
    interpretations: {
      upright: "Looking ahead, expansion, rapid growth",
      reversed: "Obstacles, delays, frustration"
    }
  },
  {
    id: 25,
    name: "Four of Wands",
    arcana: "minor",
    suit: "Wands",
    interpretations: {
      upright: "Celebration, joy, harmony, relaxation",
      reversed: "Transition, lack of support, home conflict"
    }
  },
  {
    id: 26,
    name: "Five of Wands",
    arcana: "minor",
    suit: "Wands",
    interpretations: {
      upright: "Competition, rivalry, conflict",
      reversed: "Avoiding conflict, respecting differences"
    }
  },
  {
    id: 27,
    name: "Six of Wands",
    arcana: "minor",
    suit: "Wands",
    interpretations: {
      upright: "Victory, success, public reward",
      reversed: "Excess pride, lack of recognition, punishment"
    }
  },
  {
    id: 28,
    name: "Seven of Wands",
    arcana: "minor",
    suit: "Wands",
    interpretations: {
      upright: "Perseverance, defensive, maintaining control",
      reversed: "Give up, destroyed confidence, overwhelmed"
    }
  },
  {
    id: 29,
    name: "Eight of Wands",
    arcana: "minor",
    suit: "Wands",
    interpretations: {
      upright: "Rapid action, movement, quick decisions",
      reversed: "Delays, frustration, holding off"
    }
  },
  {
    id: 30,
    name: "Nine of Wands",
    arcana: "minor",
    suit: "Wands",
    interpretations: {
      upright: "Resilience, grit, last stretch",
      reversed: "Exhaustion, fatigue, questioning motivations"
    }
  },
  {
    id: 31,
    name: "Ten of Wands",
    arcana: "minor",
    suit: "Wands",
    interpretations: {
      upright: "Accomplishment, responsibility, burden",
      reversed: "Inability to delegate, overstressed, burnt out"
    }
  },
  {
    id: 32,
    name: "Page of Wands",
    arcana: "minor",
    suit: "Wands",
    interpretations: {
      upright: "Exploration, excitement, freedom",
      reversed: "Lack of direction, procrastination, creating conflict"
    }
  },
  {
    id: 33,
    name: "Knight of Wands",
    arcana: "minor",
    suit: "Wands",
    interpretations: {
      upright: "Action, adventure, fearlessness",
      reversed: "Anger, impulsiveness, recklessness"
    }
  },
  {
    id: 34,
    name: "Queen of Wands",
    arcana: "minor",
    suit: "Wands",
    interpretations: {
      upright: "Courage, determination, joy",
      reversed: "Selfishness, jealousy, insecurities"
    }
  },
  {
    id: 35,
    name: "King of Wands",
    arcana: "minor",
    suit: "Wands",
    interpretations: {
      upright: "Big picture, leadership, overcoming challenges",
      reversed: "Impulsive, overbearing, unachievable expectations"
    }
  }
]

// Minor Arcana - Cups
export const cups: TarotCard[] = [
  {
    id: 1,
    name: "Ace of Cups",
    arcana: "minor",
    suit: "Cups",
    number: 1,
    interpretations: {
      upright: "New feelings, emotional awakening, creativity",
      reversed: "Emotional loss, blocked creativity, emptiness"
    }
  },
  {
    id: 2,
    name: "Two of Cups",
    arcana: "minor",
    suit: "Cups",
    interpretations: {
      upright: "Unity, partnership, mutual attraction",
      reversed: "Imbalance, broken communication, tension"
    }
  },
  {
    id: 3,
    name: "Three of Cups",
    arcana: "minor",
    suit: "Cups",
    interpretations: {
      upright: "Friendship, community, happiness",
      reversed: "Overindulgence, gossip, isolation"
    }
  },
  {
    id: 4,
    name: "Four of Cups",
    arcana: "minor",
    suit: "Cups",
    interpretations: {
      upright: "Meditation, contemplation, apathy",
      reversed: "New awareness, depression, hopelessness"
    }
  },
  {
    id: 5,
    name: "Five of Cups",
    arcana: "minor",
    suit: "Cups",
    interpretations: {
      upright: "Loss, grief, self-pity",
      reversed: "Acceptance, moving on, finding peace"
    }
  },
  {
    id: 6,
    name: "Six of Cups",
    arcana: "minor",
    suit: "Cups",
    interpretations: {
      upright: "Familiarity, happy memories, healing",
      reversed: "Moving forward, leaving home, independence"
    }
  },
  {
    id: 7,
    name: "Seven of Cups",
    arcana: "minor",
    suit: "Cups",
    interpretations: {
      upright: "Searching for purpose, choices, daydreaming",
      reversed: "Lack of purpose, confusion, distractions"
    }
  },
  {
    id: 8,
    name: "Eight of Cups",
    arcana: "minor",
    suit: "Cups",
    interpretations: {
      upright: "Walking away, disillusionment, leaving behind",
      reversed: "Avoidance, fear of change, fear of loss"
    }
  },
  {
    id: 9,
    name: "Nine of Cups",
    arcana: "minor",
    suit: "Cups",
    interpretations: {
      upright: "Satisfaction, emotional stability, luxury",
      reversed: "Lack of inner joy, pretending, dissatisfaction"
    }
  },
  {
    id: 10,
    name: "Ten of Cups",
    arcana: "minor",
    suit: "Cups",
    interpretations: {
      upright: "Inner happiness, fulfillment, dreams coming true",
      reversed: "Shattered dreams, broken family, domestic disharmony"
    }
  },
  {
    id: 11,
    name: "Page of Cups",
    arcana: "minor",
    suit: "Cups",
    interpretations: {
      upright: "Happy surprise, dreamer, sensitivity",
      reversed: "Emotional immaturity, insecurity, disappointment"
    }
  },
  {
    id: 12,
    name: "Knight of Cups",
    arcana: "minor",
    suit: "Cups",
    interpretations: {
      upright: "Following the heart, idealist, romantic",
      reversed: "Moodiness, disappointment, unrealistic"
    }
  },
  {
    id: 13,
    name: "Queen of Cups",
    arcana: "minor",
    suit: "Cups",
    interpretations: {
      upright: "Compassion, calm, comfort",
      reversed: "Martyrdom, insecurity, dependence"
    }
  },
  {
    id: 14,
    name: "King of Cups",
    arcana: "minor",
    suit: "Cups",
    interpretations: {
      upright: "Compassion, control, balance",
      reversed: "Coldness, moodiness, bad advice"
    }
  }
]

// Minor Arcana - Swords
export const swords: TarotCard[] = [
  {
    id: 15,
    name: "Ace of Swords",
    arcana: "minor",
    suit: "Swords",
    interpretations: {
      upright: "Breakthrough, clarity, sharp mind",
      reversed: "Confusion, brutality, chaos"
    }
  },
  {
    id: 16,
    name: "Two of Swords",
    arcana: "minor",
    suit: "Swords",
    interpretations: {
      upright: "Difficult choices, indecision, stalemate",
      reversed: "Indecision, confusion, information overload"
    }
  },
  {
    id: 17,
    name: "Three of Swords",
    arcana: "minor",
    suit: "Swords",
    interpretations: {
      upright: "Heartbreak, suffering, grief",
      reversed: "Recovery, forgiveness, moving on"
    }
  },
  {
    id: 18,
    name: "Four of Swords",
    arcana: "minor",
    suit: "Swords",
    interpretations: {
      upright: "Rest, restoration, contemplation",
      reversed: "Restlessness, burnout, stress"
    }
  },
  {
    id: 19,
    name: "Five of Swords",
    arcana: "minor",
    suit: "Swords",
    interpretations: {
      upright: "Unbridled ambition, win at all costs, sneakiness",
      reversed: "Reconciliation, making amends, past resentment"
    }
  },
  {
    id: 20,
    name: "Six of Swords",
    arcana: "minor",
    suit: "Swords",
    interpretations: {
      upright: "Transition, leaving behind, moving on",
      reversed: "Emotional baggage, unresolved issues, resisting transition"
    }
  },
  {
    id: 21,
    name: "Seven of Swords",
    arcana: "minor",
    suit: "Swords",
    interpretations: {
      upright: "Deception, trickery, tactics and strategy",
      reversed: "Coming clean, rethinking approach, deception"
    }
  },
  {
    id: 22,
    name: "Eight of Swords",
    arcana: "minor",
    suit: "Swords",
    interpretations: {
      upright: "Restriction, confusion, powerlessness",
      reversed: "Self-acceptance, new perspective, freedom"
    }
  },
  {
    id: 23,
    name: "Nine of Swords",
    arcana: "minor",
    suit: "Swords",
    interpretations: {
      upright: "Anxiety, worry, fear, depression",
      reversed: "Inner turmoil, deep-seated fears, secrets"
    }
  },
  {
    id: 24,
    name: "Ten of Swords",
    arcana: "minor",
    suit: "Swords",
    interpretations: {
      upright: "Back-stabbed, defeat, crisis",
      reversed: "Recovery, regeneration, resistance"
    }
  },
  {
    id: 25,
    name: "Page of Swords",
    arcana: "minor",
    suit: "Swords",
    interpretations: {
      upright: "Curiosity, restlessness, mental energy",
      reversed: "Deception, manipulation, all talk"
    }
  },
  {
    id: 26,
    name: "Knight of Swords",
    arcana: "minor",
    suit: "Swords",
    interpretations: {
      upright: "Action, impulsiveness, defending beliefs",
      reversed: "No direction, disregard for consequences, unpredictability"
    }
  },
  {
    id: 27,
    name: "Queen of Swords",
    arcana: "minor",
    suit: "Swords",
    interpretations: {
      upright: "Complexity, perceptiveness, clear boundaries",
      reversed: "Cold hearted, cruel, bitterness"
    }
  },
  {
    id: 28,
    name: "King of Swords",
    arcana: "minor",
    suit: "Swords",
    interpretations: {
      upright: "Mental clarity, intellectual power, authority",
      reversed: "Manipulative, cruel, weakness"
    }
  }
]

// Minor Arcana - Pentacles
export const pentacles: TarotCard[] = [
  {
    id: 29,
    name: "Ace of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    interpretations: {
      upright: "Opportunity, prosperity, new venture",
      reversed: "Lost opportunity, missed chance, bad investment"
    }
  },
  {
    id: 30,
    name: "Two of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    interpretations: {
      upright: "Balance, adaptability, time management",
      reversed: "Disorganization, financial disarray, overwhelmed"
    }
  },
  {
    id: 31,
    name: "Three of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    interpretations: {
      upright: "Teamwork, collaboration, learning",
      reversed: "Lack of teamwork, disorganized, group conflict"
    }
  },
  {
    id: 32,
    name: "Four of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    interpretations: {
      upright: "Control, stability, security, possession",
      reversed: "Greed, materialism, self-protection"
    }
  },
  {
    id: 33,
    name: "Five of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    interpretations: {
      upright: "Need, poverty, insecurity, hardship",
      reversed: "Recovery, charity, improvement"
    }
  },
  {
    id: 34,
    name: "Six of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    interpretations: {
      upright: "Charity, generosity, sharing",
      reversed: "Strings attached, stinginess, power and domination"
    }
  },
  {
    id: 35,
    name: "Seven of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    interpretations: {
      upright: "Hard work, perseverance, diligence",
      reversed: "Work without results, distractions, lack of rewards"
    }
  },
  {
    id: 36,
    name: "Eight of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    interpretations: {
      upright: "Apprenticeship, education, quality",
      reversed: "Perfectionism, lack of quality, low motivation"
    }
  },
  {
    id: 37,
    name: "Nine of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    interpretations: {
      upright: "Fruits of labor, rewards, luxury",
      reversed: "Reckless spending, living beyond means"
    }
  },
  {
    id: 38,
    name: "Ten of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    interpretations: {
      upright: "Legacy, culmination, inheritance",
      reversed: "Financial failure, lack of stability, lack of resources"
    }
  },
  {
    id: 39,
    name: "Page of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    interpretations: {
      upright: "Ambition, desire, diligence, concentration",
      reversed: "Lack of commitment, greediness, laziness"
    }
  },
  {
    id: 40,
    name: "Knight of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    interpretations: {
      upright: "Efficiency, hard work, responsibility",
      reversed: "Laziness, obsessiveness, work without reward"
    }
  },
  {
    id: 41,
    name: "Queen of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    interpretations: {
      upright: "Practicality, creature comforts, financial security",
      reversed: "Self-centeredness, jealousy, smothering"
    }
  },
  {
    id: 42,
    name: "King of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    interpretations: {
      upright: "Abundance, prosperity, security",
      reversed: "Greed, indulgence, sensuality"
    }
  }
]

// Combine all minor arcana cards
export const minorArcana: TarotCard[] = [...wands, ...cups, ...swords, ...pentacles]

// Combine all cards
export const allCards: TarotCard[] = [...majorArcana, ...minorArcana]
