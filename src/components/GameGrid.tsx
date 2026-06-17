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
  return (
    <section
      aria-label="Online bunny games"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
    >
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          highlighted={game.id === highlightedId}
          onPlay={onPlay}
          completed={isComplete(game.id)}
        />
      ))}
    </section>
  );
}
