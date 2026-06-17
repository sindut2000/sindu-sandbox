import type { GameColor } from "../types/game";

export const colorStyles: Record<
  GameColor,
  {
    border: string;
    glow: string;
    badge: string;
    tag: string;
    playBtn: string;
  }
> = {
  yellow: {
    border: "border-game-yellow/60",
    glow: "hover:shadow-[0_0_24px_rgba(251,191,36,0.35)]",
    badge: "bg-game-yellow text-arcade-bg",
    tag: "bg-game-yellow/20 text-game-yellow",
    playBtn: "from-game-yellow to-amber-500 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)]",
  },
  teal: {
    border: "border-game-teal/60",
    glow: "hover:shadow-[0_0_24px_rgba(45,212,191,0.35)]",
    badge: "bg-game-teal text-arcade-bg",
    tag: "bg-game-teal/20 text-game-teal",
    playBtn: "from-game-teal to-emerald-500 hover:shadow-[0_0_20px_rgba(45,212,191,0.5)]",
  },
  pink: {
    border: "border-game-pink/60",
    glow: "hover:shadow-[0_0_24px_rgba(244,114,182,0.35)]",
    badge: "bg-game-pink text-arcade-bg",
    tag: "bg-game-pink/20 text-game-pink",
    playBtn: "from-game-pink to-rose-500 hover:shadow-[0_0_20px_rgba(244,114,182,0.5)]",
  },
  green: {
    border: "border-game-green/60",
    glow: "hover:shadow-[0_0_24px_rgba(74,222,128,0.35)]",
    badge: "bg-game-green text-arcade-bg",
    tag: "bg-game-green/20 text-game-green",
    playBtn: "from-game-green to-emerald-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.5)]",
  },
  purple: {
    border: "border-game-purple/60",
    glow: "hover:shadow-[0_0_24px_rgba(167,139,250,0.35)]",
    badge: "bg-game-purple text-arcade-bg",
    tag: "bg-game-purple/20 text-game-purple",
    playBtn: "from-game-purple to-violet-500 hover:shadow-[0_0_20px_rgba(167,139,250,0.5)]",
  },
  orange: {
    border: "border-game-orange/60",
    glow: "hover:shadow-[0_0_24px_rgba(251,146,60,0.35)]",
    badge: "bg-game-orange text-arcade-bg",
    tag: "bg-game-orange/20 text-game-orange",
    playBtn: "from-game-orange to-orange-500 hover:shadow-[0_0_20px_rgba(251,146,60,0.5)]",
  },
  blue: {
    border: "border-game-blue/60",
    glow: "hover:shadow-[0_0_24px_rgba(56,189,248,0.35)]",
    badge: "bg-game-blue text-arcade-bg",
    tag: "bg-game-blue/20 text-game-blue",
    playBtn: "from-game-blue to-sky-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]",
  },
};
