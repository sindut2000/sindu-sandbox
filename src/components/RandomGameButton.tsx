import { useCallback, useState } from "react";
import type { Game } from "../types/game";

interface RandomGameButtonProps {
  games: Game[];
  onSelect: (game: Game) => void;
}

export function RandomGameButton({ games, onSelect }: RandomGameButtonProps) {
  const [lastPick, setLastPick] = useState<Game | null>(null);
  const [spinning, setSpinning] = useState(false);

  const pickRandom = useCallback(() => {
    if (spinning) return;

    setSpinning(true);
    let ticks = 0;
    const maxTicks = 14;

    const interval = setInterval(() => {
      const random = games[Math.floor(Math.random() * games.length)];
      setLastPick(random);
      ticks += 1;

      if (ticks >= maxTicks) {
        clearInterval(interval);
        const final = games[Math.floor(Math.random() * games.length)];
        setLastPick(final);
        onSelect(final);
        setSpinning(false);
      }
    }, 70);
  }, [games, onSelect, spinning]);

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={pickRandom}
        disabled={spinning}
        className="group animate-pulse-neon flex items-center gap-3 rounded-xl border-2 border-neon-purple bg-gradient-to-r from-neon-purple/30 to-neon-pink/30 px-8 py-3 font-display text-[10px] uppercase tracking-wider text-white transition-all hover:scale-105 active:scale-95 disabled:opacity-60 sm:text-xs"
      >
        <span className="text-lg">🎰</span>
        {spinning ? "Rolling..." : "Random Game"}
      </button>

      {lastPick && !spinning && (
        <p className="text-center text-sm font-bold text-neon-cyan">
          🎮 Launching {lastPick.name}...
        </p>
      )}
    </div>
  );
}
