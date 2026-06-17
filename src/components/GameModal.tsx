import { useEffect } from "react";
import type { Game } from "../types/game";
import { MiniGameHost } from "./minigames/MiniGameHost";
import { colorStyles } from "./gameStyles";

interface GameModalProps {
  game: Game | null;
  onClose: () => void;
  onWin: (gameId: string) => void;
}

export function GameModal({ game, onClose, onWin }: GameModalProps) {
  useEffect(() => {
    if (!game) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [game, onClose]);

  if (!game) return null;

  const styles = colorStyles[game.color];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={game.name}
    >
      <div
        className="w-full max-w-lg rounded-2xl border-2 border-neon-cyan/30 bg-arcade-surface p-5 shadow-[0_0_40px_rgba(0,245,255,0.15)] sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase ${styles.tag}`}>
                {game.genre}
              </span>
              <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold text-gray-300">
                {game.difficulty}
              </span>
            </div>
            <h2 className="text-lg font-extrabold text-white">{game.name}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-arcade-border px-3 py-1 text-sm text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <MiniGameHost
          game={game}
          onWin={() => onWin(game.id)}
        />

        <p className="mt-4 text-center text-xs text-gray-500">
          🎮 Playing online · Free to play
        </p>
      </div>
    </div>
  );
}
