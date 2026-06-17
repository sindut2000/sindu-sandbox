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
  const [wonFlash, setWonFlash] = useState(false);

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
      setWonFlash(true);
      window.setTimeout(() => setWonFlash(false), 2800);
    },
    [isComplete, toggle],
  );

  return (
    <div className="arcade-scene arcade-grid-bg">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Header />

        <div className="my-10">
          <RandomGameButton games={games} onSelect={handleRandomSelect} />
        </div>

        <div className="mb-12">
          <GameGrid
            games={games}
            highlightedId={highlightedId}
            onPlay={openGame}
            isComplete={isComplete}
          />
        </div>

        <div className="section-divider mb-6">
          <h2 className="shrink-0 font-display text-[10px] uppercase tracking-widest text-neon-cyan sm:text-xs">
            Progress
          </h2>
        </div>

        <GameProgress
          games={games}
          isComplete={isComplete}
          onToggle={toggle}
          onReset={reset}
          completedCount={completedCount}
          totalCount={totalCount}
        />

        <TipFooter />
      </main>

      <GameModal
        game={activeGame}
        onClose={() => setActiveGame(null)}
        onWin={handleWin}
      />

      {wonFlash && (
        <div className="pointer-events-none fixed inset-x-0 top-5 z-[60] flex justify-center px-4">
          <div className="animate-toast-in flex items-center gap-2 rounded-2xl border border-neon-green/40 bg-arcade-surface/95 px-5 py-3 shadow-[0_0_30px_rgba(57,255,20,0.2)] backdrop-blur-md">
            <span className="text-xl">🏆</span>
            <span className="font-display text-[9px] uppercase tracking-wide text-neon-green sm:text-[10px]">
              Level Cleared!
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
