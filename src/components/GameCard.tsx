import type { Game } from "../types/game";
import { GameIllustration } from "./GameIllustration";
import { colorStyles } from "./gameStyles";

interface GameCardProps {
  game: Game;
  highlighted?: boolean;
}

export function GameCard({ game, highlighted = false }: GameCardProps) {
  const styles = colorStyles[game.color];

  return (
    <article
      id={`game-${game.id}`}
      className={[
        "flex flex-col rounded-2xl border-2 bg-white p-4 shadow-md transition-all duration-300",
        styles.border,
        highlighted ? "highlight-card scale-[1.02] ring-4 ring-bunny-ribbon" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mb-2 flex items-start gap-2">
        <span
          className={[
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white shadow-sm",
            styles.badge,
          ].join(" ")}
        >
          {game.number}
        </span>
        <h2 className="pt-0.5 text-base font-extrabold uppercase leading-tight text-gray-900 sm:text-lg">
          {game.name}
        </h2>
      </div>

      <div className={[styles.bg, "mb-3 rounded-xl p-2"].join(" ")}>
        <GameIllustration game={game} />
      </div>

      <div className="flex flex-1 flex-col gap-2 text-sm text-gray-800">
        <p>
          <span className="font-extrabold">You need:</span> {game.youNeed}
        </p>
        <p>
          <span className="font-extrabold">How to play:</span> {game.howToPlay}
        </p>
      </div>
    </article>
  );
}
