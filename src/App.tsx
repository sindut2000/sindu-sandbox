import { useCallback, useMemo, useState } from "react";
import { games } from "./data/games";
import { usePartyMode } from "./hooks/usePartyMode";
import { GameGrid } from "./components/GameGrid";
import { GameModal } from "./components/GameModal";
import { GameProgress } from "./components/GameProgress";
import { Header } from "./components/Header";
import { RandomGameButton } from "./components/RandomGameButton";
import { TipFooter } from "./components/TipFooter";
import type { Game } from "./types/game";

export default function App() {
  const gameIds = useMemo(() => games.map((g) => g.id), []);
  const { completedCount, totalCount, toggle, reset, isComplete } =
    usePartyMode(gameIds);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const [wonFlash, setWonFlash] = useState<string | null>(null);

  const openGame = useCallback((game: Game) => {
    setActiveGame(game);
  }, []);

  const handleRandomSelect = useCallback(
    (game: Game) => {
      setHighlightedId(game.id);
      openGame(game);
      window.setTimeout(() => setHighlightedId(null), 3000);
    },
    [openGame],
  );

  const handleWin = useCallback(
    (gameId: string) => {
      if (!isComplete(gameId)) toggle(gameId);
      setWonFlash(gameId);
      window.setTimeout(() => setWonFlash(null), 2500);
    },
    [isComplete, toggle],
  );

  return (
    <div className="arcade-grid-bg min-h-screen bg-arcade-bg">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Header />

        <div className="my-8">
          <RandomGameButton games={games} onSelect={handleRandomSelect} />
        </div>

        <div className="mb-10">
          <GameProgress
            games={games}
            isComplete={isComplete}
            onToggle={toggle}
            onReset={reset}
            completedCount={completedCount}
            totalCount={totalCount}
          />
        </div>

        <GameGrid
          games={games}
          highlightedId={highlightedId}
          onPlay={openGame}
          isComplete={isComplete}
        />

        <TipFooter />
      </main>

      <GameModal
        game={activeGame}
        onClose={() => setActiveGame(null)}
        onWin={handleWin}
      />

      {wonFlash && (
        <div className="pointer-events-none fixed inset-x-0 top-6 z-[60] flex justify-center">
          <div className="animate-bounce-gentle rounded-xl border border-neon-green bg-neon-green/20 px-6 py-3 font-display text-[10px] text-neon-green backdrop-blur">
            🏆 YOU WIN! Game cleared!
          </div>
        </div>
      )}
    </div>
  );
}
