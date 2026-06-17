import type { GameColor } from "../types/game";

export const colorStyles: Record<
  GameColor,
  {
    border: string;
    glow: string;
    badge: string;
    tag: string;
    playBtn: string;
    preview: string;
    accent: string;
  }
> = {
  yellow: {
    border: "border-game-yellow/40",
    glow: "hover:shadow-[0_8px_32px_rgba(251,191,36,0.2)] hover:border-game-yellow/70",
    badge: "bg-game-yellow text-arcade-bg shadow-[0_0_12px_rgba(251,191,36,0.4)]",
    tag: "bg-game-yellow/15 text-game-yellow border border-game-yellow/25",
    playBtn:
      "from-game-yellow via-amber-400 to-game-yellow hover:shadow-[0_0_24px_rgba(251,191,36,0.45)]",
    preview: "from-game-yellow/20 via-amber-500/5 to-transparent",
    accent: "bg-game-yellow",
  },
  teal: {
    border: "border-game-teal/40",
    glow: "hover:shadow-[0_8px_32px_rgba(45,212,191,0.2)] hover:border-game-teal/70",
    badge: "bg-game-teal text-arcade-bg shadow-[0_0_12px_rgba(45,212,191,0.4)]",
    tag: "bg-game-teal/15 text-game-teal border border-game-teal/25",
    playBtn:
      "from-game-teal via-emerald-400 to-game-teal hover:shadow-[0_0_24px_rgba(45,212,191,0.45)]",
    preview: "from-game-teal/20 via-emerald-500/5 to-transparent",
    accent: "bg-game-teal",
  },
  pink: {
    border: "border-game-pink/40",
    glow: "hover:shadow-[0_8px_32px_rgba(244,114,182,0.2)] hover:border-game-pink/70",
    badge: "bg-game-pink text-arcade-bg shadow-[0_0_12px_rgba(244,114,182,0.4)]",
    tag: "bg-game-pink/15 text-game-pink border border-game-pink/25",
    playBtn:
      "from-game-pink via-rose-400 to-game-pink hover:shadow-[0_0_24px_rgba(244,114,182,0.45)]",
    preview: "from-game-pink/20 via-rose-500/5 to-transparent",
    accent: "bg-game-pink",
  },
  green: {
    border: "border-game-green/40",
    glow: "hover:shadow-[0_8px_32px_rgba(74,222,128,0.2)] hover:border-game-green/70",
    badge: "bg-game-green text-arcade-bg shadow-[0_0_12px_rgba(74,222,128,0.4)]",
    tag: "bg-game-green/15 text-game-green border border-game-green/25",
    playBtn:
      "from-game-green via-emerald-400 to-game-green hover:shadow-[0_0_24px_rgba(74,222,128,0.45)]",
    preview: "from-game-green/20 via-emerald-500/5 to-transparent",
    accent: "bg-game-green",
  },
  purple: {
    border: "border-game-purple/40",
    glow: "hover:shadow-[0_8px_32px_rgba(167,139,250,0.2)] hover:border-game-purple/70",
    badge: "bg-game-purple text-arcade-bg shadow-[0_0_12px_rgba(167,139,250,0.4)]",
    tag: "bg-game-purple/15 text-game-purple border border-game-purple/25",
    playBtn:
      "from-game-purple via-violet-400 to-game-purple hover:shadow-[0_0_24px_rgba(167,139,250,0.45)]",
    preview: "from-game-purple/20 via-violet-500/5 to-transparent",
    accent: "bg-game-purple",
  },
  orange: {
    border: "border-game-orange/40",
    glow: "hover:shadow-[0_8px_32px_rgba(251,146,60,0.2)] hover:border-game-orange/70",
    badge: "bg-game-orange text-arcade-bg shadow-[0_0_12px_rgba(251,146,60,0.4)]",
    tag: "bg-game-orange/15 text-game-orange border border-game-orange/25",
    playBtn:
      "from-game-orange via-orange-400 to-game-orange hover:shadow-[0_0_24px_rgba(251,146,60,0.45)]",
    preview: "from-game-orange/20 via-orange-500/5 to-transparent",
    accent: "bg-game-orange",
  },
  blue: {
    border: "border-game-blue/40",
    glow: "hover:shadow-[0_8px_32px_rgba(56,189,248,0.2)] hover:border-game-blue/70",
    badge: "bg-game-blue text-arcade-bg shadow-[0_0_12px_rgba(56,189,248,0.4)]",
    tag: "bg-game-blue/15 text-game-blue border border-game-blue/25",
    playBtn:
      "from-game-blue via-sky-400 to-game-blue hover:shadow-[0_0_24px_rgba(56,189,248,0.45)]",
    preview: "from-game-blue/20 via-sky-500/5 to-transparent",
    accent: "bg-game-blue",
  },
};

export const difficultyColors: Record<string, string> = {
  Easy: "text-neon-green border-neon-green/30 bg-neon-green/10",
  Medium: "text-neon-yellow border-neon-yellow/30 bg-neon-yellow/10",
  Hard: "text-neon-pink border-neon-pink/30 bg-neon-pink/10",
};
