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
    const maxTicks = 12;
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
    }, 80);
  }, [games, onSelect, spinning]);

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={pickRandom}
        disabled={spinning}
        className="group flex items-center gap-3 rounded-full bg-bunny-ribbon px-8 py-3 text-base font-extrabold uppercase tracking-wide text-white shadow-lg transition-all hover:bg-bunny-ribbon-dark hover:shadow-xl active:scale-95 disabled:opacity-70 sm:text-lg"
      >
        <span className="text-2xl transition-transform group-hover:animate-bounce-gentle">
          🎲
        </span>
        {spinning ? "Picking..." : "Random Game"}
      </button>

      {lastPick && !spinning && (
        <p className="animate-bounce-gentle text-center text-sm font-bold text-bunny-ribbon-dark sm:text-base">
          🐰 Let&apos;s play: {lastPick.name}!
        </p>
      )}
    </div>
  );
}
