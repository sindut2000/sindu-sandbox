import type { Game } from "../types/game";
import { colorStyles } from "./gameStyles";

interface PartyModeChecklistProps {
  games: Game[];
  isComplete: (id: string) => boolean;
  onToggle: (id: string) => void;
  onReset: () => void;
  completedCount: number;
  totalCount: number;
}

export function PartyModeChecklist({
  games,
  isComplete,
  onToggle,
  onReset,
  completedCount,
  totalCount,
}: PartyModeChecklistProps) {
  const allDone = completedCount === totalCount;

  return (
    <section
      aria-label="Party mode checklist"
      className="rounded-2xl border-2 border-bunny-purple-border bg-bunny-purple/30 p-5 shadow-md"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-extrabold uppercase text-gray-900">
            🎉 Party Mode
          </h2>
          <p className="text-sm text-gray-700">
            Mark each game as you play it!
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-purple-700 shadow-sm">
            {completedCount} / {totalCount} done
          </span>
          {completedCount > 0 && (
            <button
              type="button"
              onClick={onReset}
              className="rounded-full border-2 border-purple-300 bg-white px-3 py-1.5 text-xs font-bold uppercase text-purple-600 transition hover:bg-purple-50"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {allDone && (
        <div className="mb-4 rounded-xl bg-white/80 px-4 py-3 text-center font-bold text-purple-700">
          🏆 Amazing! You played all the bunny games!
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
                  "flex cursor-pointer items-center gap-3 rounded-xl border-2 bg-white px-4 py-3 transition-all",
                  done
                    ? "border-green-400 opacity-75"
                    : "border-gray-200 hover:border-purple-300",
                ].join(" ")}
              >
                <input
                  type="checkbox"
                  checked={done}
                  onChange={() => onToggle(game.id)}
                  className="h-5 w-5 shrink-0 rounded accent-purple-500"
                />
                <span
                  className={[
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white",
                    styles.badge,
                  ].join(" ")}
                >
                  {game.number}
                </span>
                <span
                  className={[
                    "flex-1 text-sm font-bold text-gray-800",
                    done ? "line-through" : "",
                  ].join(" ")}
                >
                  {game.name}
                </span>
                <span className="text-lg" aria-hidden="true">
                  {done ? "✅" : game.emoji}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
