import type { Game } from "../types/game";

export const games: Game[] = [
  {
    id: "bunny-hop-race",
    number: 1,
    name: "Bunny Hop Race",
    emoji: "🏃",
    genre: "Endless Runner",
    difficulty: "Easy",
    controls: "Tap or Space to jump",
    howToPlay:
      "Hop over carrots and keep running! Survive 10 jumps to win. Miss one and it's game over.",
    color: "yellow",
  },
  {
    id: "carrot-toss",
    number: 2,
    name: "Carrot Toss",
    emoji: "🎯",
    genre: "Arcade",
    difficulty: "Easy",
    controls: "Click to aim & throw",
    howToPlay:
      "Land 5 carrots in the basket before you run out of throws. Aim carefully!",
    color: "teal",
  },
  {
    id: "bunny-ears-freeze",
    number: 3,
    name: "Bunny Ears Freeze",
    emoji: "🎵",
    genre: "Rhythm",
    difficulty: "Medium",
    controls: "Tap when the beat drops",
    howToPlay:
      "Dance when the music plays, freeze when it stops! Tap on green, hold still on red. Score 8 points to win.",
    color: "pink",
  },
  {
    id: "follow-the-bunny",
    number: 4,
    name: "Follow the Bunny",
    emoji: "🐾",
    genre: "Memory",
    difficulty: "Medium",
    controls: "Click paw prints in order",
    howToPlay:
      "Watch the bunny's trail light up, then repeat the pattern. Complete 3 rounds to win!",
    color: "green",
  },
  {
    id: "bunny-tail-tag",
    number: 5,
    name: "Bunny Tail Tag",
    emoji: "⚡",
    genre: "Action",
    difficulty: "Easy",
    controls: "Click the bunny fast",
    howToPlay:
      "Catch the bunny before it hops away! Tag it 8 times before the timer runs out.",
    color: "purple",
  },
  {
    id: "bunny-paws-match",
    number: 6,
    name: "Bunny Paws Match",
    emoji: "🃏",
    genre: "Puzzle",
    difficulty: "Easy",
    controls: "Click cards to flip",
    howToPlay:
      "Flip cards and find all matching paw pairs. Clear the board to win!",
    color: "orange",
  },
  {
    id: "feed-the-bunny",
    number: 7,
    name: "Feed the Bunny",
    emoji: "🥕",
    genre: "Catch",
    difficulty: "Medium",
    controls: "Move mouse / drag to catch",
    howToPlay:
      "Catch 15 falling carrots in the bunny's mouth before time runs out!",
    color: "blue",
  },
  {
    id: "bunny-scavenger-hunt",
    number: 8,
    name: "Bunny Scavenger Hunt",
    emoji: "🔍",
    genre: "Hidden Object",
    difficulty: "Hard",
    controls: "Click to find items",
    howToPlay:
      "Find all 6 hidden carrots and bunnies scattered across the scene!",
    color: "yellow",
  },
];
