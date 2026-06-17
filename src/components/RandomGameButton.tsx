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
      setLastPick(games[Math.floor(Math.random() * games.length)]);
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
        className={[
          "group relative overflow-hidden rounded-2xl border border-neon-purple/50 bg-arcade-elevated px-8 py-3.5 transition-all",
          "hover:border-neon-pink/60 hover:shadow-[0_0_30px_rgba(180,77,255,0.25)] active:scale-[0.98]",
          "disabled:opacity-60 disabled:hover:shadow-none",
        ].join(" ")}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-neon-pink/10 to-neon-purple/10 opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="relative flex items-center gap-3">
          <span
            className={[
              "text-xl transition-transform",
              spinning ? "animate-spin" : "group-hover:scale-110",
            ].join(" ")}
          >
            🎰
          </span>
          <span className="font-display text-[10px] uppercase tracking-wider text-white sm:text-xs">
            {spinning ? "Rolling..." : "Random Game"}
          </span>
        </span>
      </button>

      {lastPick && !spinning && (
        <p className="animate-toast-in text-center text-sm font-semibold text-neon-cyan">
          Launching <span className="text-white">{lastPick.name}</span>…
        </p>
      )}
    </div>
  );
}
