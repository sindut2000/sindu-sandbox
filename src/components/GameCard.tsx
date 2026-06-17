import type { Game } from "../types/game";
import { colorStyles } from "./gameStyles";

interface GameCardProps {
  game: Game;
  highlighted?: boolean;
  onPlay: (game: Game) => void;
  completed?: boolean;
}

export function GameCard({
  game,
  highlighted = false,
  onPlay,
  completed = false,
}: GameCardProps) {
  const styles = colorStyles[game.color];

  return (
    <article
      id={`game-${game.id}`}
      className={[
        "group flex flex-col rounded-2xl border bg-arcade-card p-4 transition-all duration-300",
        styles.border,
        styles.glow,
        highlighted ? "highlight-card scale-[1.02] ring-2 ring-neon-cyan" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className={[
              "flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-extrabold",
              styles.badge,
            ].join(" ")}
          >
            {game.number}
          </span>
          <div>
            <h2 className="text-sm font-extrabold leading-tight text-white sm:text-base">
              {game.name}
            </h2>
            <div className="mt-1 flex gap-1.5">
              <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${styles.tag}`}>
                {game.genre}
              </span>
              <span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] font-bold text-gray-400">
                {game.difficulty}
              </span>
            </div>
          </div>
        </div>
        {completed && (
          <span className="rounded-full bg-neon-green/20 px-2 py-0.5 text-[10px] font-bold text-neon-green">
            ✓ BEAT
          </span>
        )}
      </div>

      <div className="mb-3 flex h-24 items-center justify-center rounded-xl border border-white/5 bg-arcade-bg text-6xl">
        {game.emoji}
      </div>

      <div className="mb-4 flex flex-1 flex-col gap-1.5 text-xs text-gray-400">
        <p>
          <span className="font-bold text-gray-300">Controls:</span> {game.controls}
        </p>
        <p>
          <span className="font-bold text-gray-300">Goal:</span> {game.howToPlay}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onPlay(game)}
        className={[
          "w-full rounded-xl bg-gradient-to-r py-2.5 text-sm font-extrabold uppercase tracking-wider text-arcade-bg transition-all active:scale-95",
          styles.playBtn,
        ].join(" ")}
      >
        ▶ Play Now
      </button>
    </article>
  );
}
