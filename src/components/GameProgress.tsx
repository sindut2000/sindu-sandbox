import type { Game } from "../types/game";
import { colorStyles } from "./gameStyles";

interface GameProgressProps {
  games: Game[];
  isComplete: (id: string) => boolean;
  onToggle: (id: string) => void;
  onReset: () => void;
  completedCount: number;
  totalCount: number;
}

export function GameProgress({
  games,
  isComplete,
  onToggle,
  onReset,
  completedCount,
  totalCount,
}: GameProgressProps) {
  const allDone = completedCount === totalCount;
  const pct = Math.round((completedCount / totalCount) * 100);

  return (
    <section
      aria-label="Game progress"
      className="rounded-2xl border border-neon-purple/30 bg-arcade-surface/80 p-5 backdrop-blur"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-[10px] uppercase tracking-wider text-neon-purple sm:text-xs">
            🏆 Your Progress
          </h2>
          <p className="text-sm text-gray-400">Games you&apos;ve beaten</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-lg border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1.5 text-sm font-bold text-neon-cyan">
            {completedCount}/{totalCount}
          </span>
          {completedCount > 0 && (
            <button
              type="button"
              onClick={onReset}
              className="rounded-lg border border-arcade-border px-3 py-1.5 text-xs font-bold uppercase text-gray-400 transition hover:text-white"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      <div className="mb-4 h-2 overflow-hidden rounded-full bg-arcade-bg">
        <div
          className="h-full rounded-full bg-gradient-to-r from-neon-purple to-neon-pink transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      {allDone && (
        <div className="mb-4 rounded-xl border border-neon-green/30 bg-neon-green/10 px-4 py-3 text-center text-sm font-bold text-neon-green">
          🎉 All games cleared! You&apos;re a bunny gaming legend!
        </div>
      )}

      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {games.map((game) => {
          const done = isComplete(game.id);
          const styles = colorStyles[game.color];

          return (
            <li key={game.id}>
              <label
                className={[
                  "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-2.5 transition-all",
                  done
                    ? "border-neon-green/40 bg-neon-green/5"
                    : "border-arcade-border bg-arcade-card hover:border-neon-purple/40",
                ].join(" ")}
              >
                <input
                  type="checkbox"
                  checked={done}
                  onChange={() => onToggle(game.id)}
                  className="h-4 w-4 shrink-0 rounded accent-neon-green"
                />
                <span
                  className={[
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded text-[10px] font-extrabold",
                    styles.badge,
                  ].join(" ")}
                >
                  {game.number}
                </span>
                <span
                  className={[
                    "flex-1 text-sm font-semibold",
                    done ? "text-neon-green line-through" : "text-gray-300",
                  ].join(" ")}
                >
                  {game.name}
                </span>
                <span className="text-base" aria-hidden="true">
                  {done ? "🏆" : game.emoji}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
