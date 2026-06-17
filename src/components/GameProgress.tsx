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
      className="overflow-hidden rounded-2xl border border-neon-purple/25 bg-arcade-surface/90 shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-md"
    >
      <div className="border-b border-white/5 bg-gradient-to-r from-neon-purple/10 to-neon-pink/5 px-5 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-[10px] uppercase tracking-widest text-neon-purple sm:text-xs">
              Your Progress
            </h2>
            <p className="mt-0.5 text-sm text-arcade-muted">
              Track games you&apos;ve beaten
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-lg border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1.5 text-sm font-bold tabular-nums text-neon-cyan">
              {completedCount}/{totalCount}
            </span>
            {completedCount > 0 && (
              <button
                type="button"
                onClick={onReset}
                className="rounded-lg border border-arcade-border bg-arcade-card px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-arcade-muted transition hover:border-neon-pink/40 hover:text-white"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="px-5 py-4">
        <div className="mb-1 flex justify-between text-[10px] font-bold uppercase tracking-wider text-arcade-muted">
          <span>Arcade completion</span>
          <span className="text-neon-pink">{pct}%</span>
        </div>
        <div className="mb-4 h-2.5 overflow-hidden rounded-full bg-arcade-bg ring-1 ring-white/5">
          <div
            className="relative h-full rounded-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan transition-all duration-700 ease-out"
            style={{ width: `${pct}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
          </div>
        </div>

        {allDone && (
          <div className="mb-4 rounded-xl border border-neon-green/30 bg-neon-green/10 px-4 py-3 text-center text-sm font-bold text-neon-green">
            All games cleared — bunny gaming legend unlocked!
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
                    "flex cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-2.5 transition-all",
                    done
                      ? "border-neon-green/30 bg-neon-green/5"
                      : "border-arcade-border/80 bg-arcade-card/60 hover:border-neon-purple/35 hover:bg-arcade-elevated",
                  ].join(" ")}
                >
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={() => onToggle(game.id)}
                    className="h-4 w-4 shrink-0 rounded border-arcade-border accent-neon-green"
                  />
                  <span
                    className={[
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[10px] font-extrabold",
                      styles.badge,
                    ].join(" ")}
                  >
                    {game.number}
                  </span>
                  <span
                    className={[
                      "flex-1 truncate text-sm font-semibold",
                      done ? "text-neon-green/80 line-through" : "text-gray-200",
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
      </div>
    </section>
  );
}
