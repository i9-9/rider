export type TarotCard = {
  name: string
  arcana: "major" | "minor"
  suit?: string
  uprightMeaning: string
  reversedMeaning: string
}

// Major Arcana
export const majorArcana: TarotCard[] = [
  {
    name: "The Fool",
    arcana: "major",
    uprightMeaning: "New beginnings, spontaneity, a leap of faith",
    reversedMeaning: "Recklessness, risk-taking, poor judgment"
  },
  {
    name: "The Magician",
    arcana: "major",
    uprightMeaning: "Manifestation, resourcefulness, power",
    reversedMeaning: "Manipulation, poor planning, untapped talents"
  },
  {
    name: "The High Priestess",
    arcana: "major",
    uprightMeaning: "Intuition, sacred knowledge, divine feminine",
    reversedMeaning: "Secrets, disconnected from intuition, withdrawal"
  },
  {
    name: "The Empress",
    arcana: "major",
    uprightMeaning: "Femininity, beauty, nature, nurturing",
    reversedMeaning: "Dependence, smothering, emptiness"
  },
  {
    name: "The Emperor",
    arcana: "major",
    uprightMeaning: "Authority, structure, control, fatherhood",
    reversedMeaning: "Tyranny, rigidity, coldness"
  },
  {
    name: "The Hierophant",
    arcana: "major",
    uprightMeaning: "Tradition, conformity, morality, ethics",
    reversedMeaning: "Rebellion, subversiveness, new approaches"
  },
  {
    name: "The Lovers",
    arcana: "major",
    uprightMeaning: "Love, harmony, relationships, values alignment",
    reversedMeaning: "Self-love, disharmony, imbalance"
  },
  {
    name: "The Chariot",
    arcana: "major",
    uprightMeaning: "Direction, control, willpower, victory",
    reversedMeaning: "Lack of control, lack of direction, aggression"
  },
  {
    name: "Strength",
    arcana: "major",
    uprightMeaning: "Inner strength, bravery, compassion, focus",
    reversedMeaning: "Self-doubt, weakness, insecurity"
  },
  {
    name: "The Hermit",
    arcana: "major",
    uprightMeaning: "Soul-searching, introspection, being alone",
    reversedMeaning: "Isolation, loneliness, withdrawal"
  },
  {
    name: "Wheel of Fortune",
    arcana: "major",
    uprightMeaning: "Change, cycles, inevitable fate",
    reversedMeaning: "No control, clinging to control, bad luck"
  },
  {
    name: "Justice",
    arcana: "major",
    uprightMeaning: "Cause and effect, clarity, truth",
    reversedMeaning: "Dishonesty, unaccountability, unfairness"
  },
  {
    name: "The Hanged Man",
    arcana: "major",
    uprightMeaning: "Sacrifice, release, martyrdom",
    reversedMeaning: "Stalling, needless sacrifice, fear of sacrifice"
  },
  {
    name: "Death",
    arcana: "major",
    uprightMeaning: "End of cycle, beginnings, change, metamorphosis",
    reversedMeaning: "Fear of change, holding on, stagnation"
  },
  {
    name: "Temperance",
    arcana: "major",
    uprightMeaning: "Middle path, patience, finding meaning",
    reversedMeaning: "Extremes, excess, lack of balance"
  },
  {
    name: "The Devil",
    arcana: "major",
    uprightMeaning: "Addiction, materialism, playfulness",
    reversedMeaning: "Freedom, release, restoring control"
  },
  {
    name: "The Tower",
    arcana: "major",
    uprightMeaning: "Sudden upheaval, broken pride, disaster",
    reversedMeaning: "Disaster avoided, delayed disaster, fear of suffering"
  },
  {
    name: "The Star",
    arcana: "major",
    uprightMeaning: "Hope, faith, purpose, renewal",
    reversedMeaning: "Faithlessness, discouragement, insecurity"
  },
  {
    name: "The Moon",
    arcana: "major",
    uprightMeaning: "Unconscious, illusions, intuition",
    reversedMeaning: "Confusion, fear, misinterpretation"
  },
  {
    name: "The Sun",
    arcana: "major",
    uprightMeaning: "Joy, success, celebration, positivity",
    reversedMeaning: "Negativity, depression, sadness"
  },
  {
    name: "Judgement",
    arcana: "major",
    uprightMeaning: "Reflection, reckoning, awakening",
    reversedMeaning: "Lack of self awareness, doubt, self-loathing"
  },
  {
    name: "The World",
    arcana: "major",
    uprightMeaning: "Completion, integration, accomplishment",
    reversedMeaning: "Incompletion, no closure"
  }
]

// Minor Arcana - Wands
const wands: TarotCard[] = [
  {
    name: "Ace of Wands",
    arcana: "minor",
    suit: "Wands",
    uprightMeaning: "Inspiration, new opportunities, growth, potential",
    reversedMeaning: "Delays, lack of motivation, missed opportunities"
  },
  {
    name: "Two of Wands",
    arcana: "minor",
    suit: "Wands",
    uprightMeaning: "Planning, making decisions, leaving home",
    reversedMeaning: "Fear of change, bad planning, overanalyzing"
  },
  {
    name: "Three of Wands",
    arcana: "minor",
    suit: "Wands",
    uprightMeaning: "Looking ahead, expansion, rapid growth",
    reversedMeaning: "Obstacles, delays, frustration"
  },
  {
    name: "Four of Wands",
    arcana: "minor",
    suit: "Wands",
    uprightMeaning: "Celebration, joy, harmony, relaxation",
    reversedMeaning: "Transition, lack of support, home conflict"
  },
  {
    name: "Five of Wands",
    arcana: "minor",
    suit: "Wands",
    uprightMeaning: "Competition, rivalry, conflict",
    reversedMeaning: "Avoiding conflict, respecting differences"
  },
  {
    name: "Six of Wands",
    arcana: "minor",
    suit: "Wands",
    uprightMeaning: "Victory, success, public reward",
    reversedMeaning: "Excess pride, lack of recognition, punishment"
  },
  {
    name: "Seven of Wands",
    arcana: "minor",
    suit: "Wands",
    uprightMeaning: "Perseverance, defensive, maintaining control",
    reversedMeaning: "Give up, destroyed confidence, overwhelmed"
  },
  {
    name: "Eight of Wands",
    arcana: "minor",
    suit: "Wands",
    uprightMeaning: "Rapid action, movement, quick decisions",
    reversedMeaning: "Delays, frustration, holding off"
  },
  {
    name: "Nine of Wands",
    arcana: "minor",
    suit: "Wands",
    uprightMeaning: "Resilience, grit, last stretch",
    reversedMeaning: "Exhaustion, fatigue, questioning motivations"
  },
  {
    name: "Ten of Wands",
    arcana: "minor",
    suit: "Wands",
    uprightMeaning: "Accomplishment, responsibility, burden",
    reversedMeaning: "Inability to delegate, overstressed, burnt out"
  },
  {
    name: "Page of Wands",
    arcana: "minor",
    suit: "Wands",
    uprightMeaning: "Exploration, excitement, freedom",
    reversedMeaning: "Lack of direction, procrastination, creating conflict"
  },
  {
    name: "Knight of Wands",
    arcana: "minor",
    suit: "Wands",
    uprightMeaning: "Action, adventure, fearlessness",
    reversedMeaning: "Anger, impulsiveness, recklessness"
  },
  {
    name: "Queen of Wands",
    arcana: "minor",
    suit: "Wands",
    uprightMeaning: "Courage, determination, joy",
    reversedMeaning: "Selfishness, jealousy, insecurities"
  },
  {
    name: "King of Wands",
    arcana: "minor",
    suit: "Wands",
    uprightMeaning: "Big picture, leadership, overcoming challenges",
    reversedMeaning: "Impulsive, overbearing, unachievable expectations"
  }
]

// Minor Arcana - Cups
const cups: TarotCard[] = [
  {
    name: "Ace of Cups",
    arcana: "minor",
    suit: "Cups",
    uprightMeaning: "New feelings, spirituality, intuition",
    reversedMeaning: "Blocked emotions, emptiness, feeling unloved"
  },
  {
    name: "Two of Cups",
    arcana: "minor",
    suit: "Cups",
    uprightMeaning: "Unity, partnership, mutual attraction",
    reversedMeaning: "Imbalance, broken communication, tension"
  },
  {
    name: "Three of Cups",
    arcana: "minor",
    suit: "Cups",
    uprightMeaning: "Friendship, community, happiness",
    reversedMeaning: "Overindulgence, gossip, isolation"
  },
  {
    name: "Four of Cups",
    arcana: "minor",
    suit: "Cups",
    uprightMeaning: "Meditation, contemplation, apathy",
    reversedMeaning: "New awareness, depression, hopelessness"
  },
  {
    name: "Five of Cups",
    arcana: "minor",
    suit: "Cups",
    uprightMeaning: "Loss, grief, self-pity",
    reversedMeaning: "Acceptance, moving on, finding peace"
  },
  {
    name: "Six of Cups",
    arcana: "minor",
    suit: "Cups",
    uprightMeaning: "Familiarity, happy memories, healing",
    reversedMeaning: "Moving forward, leaving home, independence"
  },
  {
    name: "Seven of Cups",
    arcana: "minor",
    suit: "Cups",
    uprightMeaning: "Searching for purpose, choices, daydreaming",
    reversedMeaning: "Lack of purpose, confusion, distractions"
  },
  {
    name: "Eight of Cups",
    arcana: "minor",
    suit: "Cups",
    uprightMeaning: "Walking away, disillusionment, leaving behind",
    reversedMeaning: "Avoidance, fear of change, fear of loss"
  },
  {
    name: "Nine of Cups",
    arcana: "minor",
    suit: "Cups",
    uprightMeaning: "Satisfaction, emotional stability, luxury",
    reversedMeaning: "Lack of inner joy, pretending, dissatisfaction"
  },
  {
    name: "Ten of Cups",
    arcana: "minor",
    suit: "Cups",
    uprightMeaning: "Inner happiness, fulfillment, dreams coming true",
    reversedMeaning: "Shattered dreams, broken family, domestic disharmony"
  },
  {
    name: "Page of Cups",
    arcana: "minor",
    suit: "Cups",
    uprightMeaning: "Happy surprise, dreamer, sensitivity",
    reversedMeaning: "Emotional immaturity, insecurity, disappointment"
  },
  {
    name: "Knight of Cups",
    arcana: "minor",
    suit: "Cups",
    uprightMeaning: "Following the heart, idealist, romantic",
    reversedMeaning: "Moodiness, disappointment, unrealistic"
  },
  {
    name: "Queen of Cups",
    arcana: "minor",
    suit: "Cups",
    uprightMeaning: "Compassion, calm, comfort",
    reversedMeaning: "Martyrdom, insecurity, dependence"
  },
  {
    name: "King of Cups",
    arcana: "minor",
    suit: "Cups",
    uprightMeaning: "Compassion, control, balance",
    reversedMeaning: "Coldness, moodiness, bad advice"
  }
]

// Minor Arcana - Swords
const swords: TarotCard[] = [
  {
    name: "Ace of Swords",
    arcana: "minor",
    suit: "Swords",
    uprightMeaning: "Breakthrough, clarity, sharp mind",
    reversedMeaning: "Confusion, brutality, chaos"
  },
  {
    name: "Two of Swords",
    arcana: "minor",
    suit: "Swords",
    uprightMeaning: "Difficult choices, indecision, stalemate",
    reversedMeaning: "Indecision, confusion, information overload"
  },
  {
    name: "Three of Swords",
    arcana: "minor",
    suit: "Swords",
    uprightMeaning: "Heartbreak, suffering, grief",
    reversedMeaning: "Recovery, forgiveness, moving on"
  },
  {
    name: "Four of Swords",
    arcana: "minor",
    suit: "Swords",
    uprightMeaning: "Rest, restoration, contemplation",
    reversedMeaning: "Restlessness, burnout, stress"
  },
  {
    name: "Five of Swords",
    arcana: "minor",
    suit: "Swords",
    uprightMeaning: "Unbridled ambition, win at all costs, sneakiness",
    reversedMeaning: "Reconciliation, making amends, past resentment"
  },
  {
    name: "Six of Swords",
    arcana: "minor",
    suit: "Swords",
    uprightMeaning: "Transition, leaving behind, moving on",
    reversedMeaning: "Emotional baggage, unresolved issues, resisting transition"
  },
  {
    name: "Seven of Swords",
    arcana: "minor",
    suit: "Swords",
    uprightMeaning: "Deception, trickery, tactics and strategy",
    reversedMeaning: "Coming clean, rethinking approach, deception"
  },
  {
    name: "Eight of Swords",
    arcana: "minor",
    suit: "Swords",
    uprightMeaning: "Restriction, confusion, powerlessness",
    reversedMeaning: "Self-acceptance, new perspective, freedom"
  },
  {
    name: "Nine of Swords",
    arcana: "minor",
    suit: "Swords",
    uprightMeaning: "Anxiety, worry, fear, depression",
    reversedMeaning: "Inner turmoil, deep-seated fears, secrets"
  },
  {
    name: "Ten of Swords",
    arcana: "minor",
    suit: "Swords",
    uprightMeaning: "Back-stabbed, defeat, crisis",
    reversedMeaning: "Recovery, regeneration, resistance"
  },
  {
    name: "Page of Swords",
    arcana: "minor",
    suit: "Swords",
    uprightMeaning: "Curiosity, restlessness, mental energy",
    reversedMeaning: "Deception, manipulation, all talk"
  },
  {
    name: "Knight of Swords",
    arcana: "minor",
    suit: "Swords",
    uprightMeaning: "Action, impulsiveness, defending beliefs",
    reversedMeaning: "No direction, disregard for consequences, unpredictability"
  },
  {
    name: "Queen of Swords",
    arcana: "minor",
    suit: "Swords",
    uprightMeaning: "Complexity, perceptiveness, clear boundaries",
    reversedMeaning: "Cold hearted, cruel, bitterness"
  },
  {
    name: "King of Swords",
    arcana: "minor",
    suit: "Swords",
    uprightMeaning: "Mental clarity, intellectual power, authority",
    reversedMeaning: "Manipulative, cruel, weakness"
  }
]

// Minor Arcana - Pentacles
const pentacles: TarotCard[] = [
  {
    name: "Ace of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    uprightMeaning: "Opportunity, prosperity, new venture",
    reversedMeaning: "Lost opportunity, missed chance, bad investment"
  },
  {
    name: "Two of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    uprightMeaning: "Balance, adaptability, time management",
    reversedMeaning: "Disorganization, financial disarray, overwhelmed"
  },
  {
    name: "Three of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    uprightMeaning: "Teamwork, collaboration, learning",
    reversedMeaning: "Lack of teamwork, disorganized, group conflict"
  },
  {
    name: "Four of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    uprightMeaning: "Control, stability, security, possession",
    reversedMeaning: "Greed, materialism, self-protection"
  },
  {
    name: "Five of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    uprightMeaning: "Need, poverty, insecurity, hardship",
    reversedMeaning: "Recovery, charity, improvement"
  },
  {
    name: "Six of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    uprightMeaning: "Charity, generosity, sharing",
    reversedMeaning: "Strings attached, stinginess, power and domination"
  },
  {
    name: "Seven of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    uprightMeaning: "Hard work, perseverance, diligence",
    reversedMeaning: "Work without results, distractions, lack of rewards"
  },
  {
    name: "Eight of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    uprightMeaning: "Apprenticeship, education, quality",
    reversedMeaning: "Perfectionism, lack of quality, low motivation"
  },
  {
    name: "Nine of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    uprightMeaning: "Fruits of labor, rewards, luxury",
    reversedMeaning: "Reckless spending, living beyond means"
  },
  {
    name: "Ten of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    uprightMeaning: "Legacy, culmination, inheritance",
    reversedMeaning: "Financial failure, lack of stability, lack of resources"
  },
  {
    name: "Page of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    uprightMeaning: "Ambition, desire, diligence, concentration",
    reversedMeaning: "Lack of commitment, greediness, laziness"
  },
  {
    name: "Knight of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    uprightMeaning: "Efficiency, hard work, responsibility",
    reversedMeaning: "Laziness, obsessiveness, work without reward"
  },
  {
    name: "Queen of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    uprightMeaning: "Practicality, creature comforts, financial security",
    reversedMeaning: "Self-centeredness, jealousy, smothering"
  },
  {
    name: "King of Pentacles",
    arcana: "minor",
    suit: "Pentacles",
    uprightMeaning: "Abundance, prosperity, security",
    reversedMeaning: "Greed, indulgence, sensuality"
  }
]

// Combine all cards into a single deck
export const tarotDeck: TarotCard[] = [...majorArcana, ...wands, ...cups, ...swords, ...pentacles]
