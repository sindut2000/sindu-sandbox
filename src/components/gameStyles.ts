import type { GameColor } from "../types/game";

export const colorStyles: Record<
  GameColor,
  { border: string; bg: string; badge: string; badgeText: string }
> = {
  yellow: {
    border: "border-bunny-yellow-border",
    bg: "bg-bunny-yellow/40",
    badge: "bg-bunny-yellow-border",
    badgeText: "text-amber-900",
  },
  teal: {
    border: "border-bunny-teal-border",
    bg: "bg-bunny-teal/40",
    badge: "bg-bunny-teal-border",
    badgeText: "text-emerald-900",
  },
  pink: {
    border: "border-bunny-pink-border",
    bg: "bg-bunny-pink/40",
    badge: "bg-bunny-pink-border",
    badgeText: "text-pink-900",
  },
  green: {
    border: "border-bunny-green-border",
    bg: "bg-bunny-green/40",
    badge: "bg-bunny-green-border",
    badgeText: "text-green-900",
  },
  purple: {
    border: "border-bunny-purple-border",
    bg: "bg-bunny-purple/40",
    badge: "bg-bunny-purple-border",
    badgeText: "text-purple-900",
  },
  orange: {
    border: "border-bunny-orange-border",
    bg: "bg-bunny-orange/40",
    badge: "bg-bunny-orange-border",
    badgeText: "text-orange-900",
  },
  blue: {
    border: "border-bunny-blue-border",
    bg: "bg-bunny-blue/40",
    badge: "bg-bunny-blue-border",
    badgeText: "text-sky-900",
  },
};
