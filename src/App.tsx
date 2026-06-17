import { useCallback, useMemo, useState } from "react";
import { games } from "./data/games";
import { usePartyMode } from "./hooks/usePartyMode";
import { GameGrid } from "./components/GameGrid";
import { Header } from "./components/Header";
import { PartyModeChecklist } from "./components/PartyModeChecklist";
import { RandomGameButton } from "./components/RandomGameButton";
import { TipFooter } from "./components/TipFooter";
import type { Game } from "./types/game";

export default function App() {
  const gameIds = useMemo(() => games.map((g) => g.id), []);
  const { completedCount, totalCount, toggle, reset, isComplete } =
    usePartyMode(gameIds);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const handleRandomSelect = useCallback((game: Game) => {
    setHighlightedId(game.id);
    const el = document.getElementById(`game-${game.id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });

    window.setTimeout(() => setHighlightedId(null), 4500);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Header />

        <div className="my-8">
          <RandomGameButton games={games} onSelect={handleRandomSelect} />
        </div>

        <div className="mb-10">
          <PartyModeChecklist
            games={games}
            isComplete={isComplete}
            onToggle={toggle}
            onReset={reset}
            completedCount={completedCount}
            totalCount={totalCount}
          />
        </div>

        <GameGrid games={games} highlightedId={highlightedId} />

        <TipFooter />
      </main>
    </div>
  );
}
