import type { Game } from "../types/game";
import { GameCard } from "./GameCard";

interface GameGridProps {
  games: Game[];
  highlightedId?: string | null;
  onPlay: (game: Game) => void;
  isComplete: (id: string) => boolean;
}

export function GameGrid({
  games,
  highlightedId,
  onPlay,
  isComplete,
}: GameGridProps) {
  const cleared = games.filter((g) => isComplete(g.id)).length;

  return (
    <section aria-label="Online bunny games">
      <div className="section-divider mb-6">
        <h2 className="shrink-0 font-display text-[10px] uppercase tracking-widest text-neon-purple sm:text-xs">
          All Games
        </h2>
      </div>

      <p className="mb-5 text-center text-sm text-arcade-muted">
        {cleared} of {games.length} cleared · pick any game to start
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            highlighted={game.id === highlightedId}
            onPlay={onPlay}
            completed={isComplete(game.id)}
          />
        ))}
      </div>
    </section>
  );
}
