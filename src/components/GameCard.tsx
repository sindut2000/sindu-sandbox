import type { Game } from "../types/game";
import { colorStyles, difficultyColors } from "./gameStyles";

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
  const diffStyle = difficultyColors[game.difficulty] ?? difficultyColors.Easy;

  return (
    <article
      id={`game-${game.id}`}
      className={[
        "group relative flex flex-col overflow-hidden rounded-2xl border bg-arcade-card transition-all duration-300 hover:-translate-y-1",
        styles.border,
        styles.glow,
        highlighted ? "highlight-card z-10 scale-[1.02] ring-2 ring-neon-cyan/60" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={`absolute inset-x-0 top-0 h-0.5 ${styles.accent} opacity-60`} />

      <div className="flex flex-col p-4">
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span
              className={[
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-extrabold",
                styles.badge,
              ].join(" ")}
            >
              {game.number}
            </span>
            <div>
              <h2 className="text-sm font-extrabold leading-snug text-white sm:text-base">
                {game.name}
              </h2>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                <span
                  className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${styles.tag}`}
                >
                  {game.genre}
                </span>
                <span
                  className={`rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase ${diffStyle}`}
                >
                  {game.difficulty}
                </span>
              </div>
            </div>
          </div>
          {completed && (
            <span className="shrink-0 rounded-lg border border-neon-green/40 bg-neon-green/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-neon-green">
              Cleared
            </span>
          )}
        </div>

        <div
          className={[
            "relative mb-3 flex h-28 items-center justify-center overflow-hidden rounded-xl border border-white/5",
            `bg-gradient-to-br ${styles.preview}`,
          ].join(" ")}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.06),transparent_60%)]" />
          <span className="relative text-6xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
            {game.emoji}
          </span>
        </div>

        <div className="mb-4 flex flex-1 flex-col gap-2 text-xs leading-relaxed text-arcade-muted">
          <p>
            <span className="font-bold text-gray-300">Controls · </span>
            {game.controls}
          </p>
          <p>
            <span className="font-bold text-gray-300">Goal · </span>
            {game.howToPlay}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onPlay(game)}
          className={[
            "btn-shine w-full rounded-xl bg-gradient-to-r py-3 text-xs font-extrabold uppercase tracking-widest text-arcade-bg active:scale-[0.98]",
            styles.playBtn,
          ].join(" ")}
        >
          ▶ Play Now
        </button>
      </div>
    </article>
  );
}
