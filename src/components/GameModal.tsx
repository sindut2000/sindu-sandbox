import { useEffect } from "react";
import type { Game } from "../types/game";
import { MiniGameHost } from "./minigames/MiniGameHost";
import { colorStyles, difficultyColors } from "./gameStyles";

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
  const diffStyle = difficultyColors[game.difficulty] ?? difficultyColors.Easy;

  return (
    <div
      className="animate-overlay-in fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-3 backdrop-blur-md sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={game.name}
    >
      <div
        className={[
          "animate-modal-in w-full max-w-lg overflow-hidden rounded-2xl border bg-arcade-surface shadow-2xl",
          styles.border,
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={[
            "border-b border-white/5 px-5 py-4",
            `bg-gradient-to-r ${styles.preview}`,
          ].join(" ")}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{game.emoji}</span>
              <div>
                <div className="mb-1.5 flex flex-wrap gap-1.5">
                  <span
                    className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${styles.tag}`}
                  >
                    {game.genre}
                  </span>
                  <span
                    className={`rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase ${diffStyle}`}
                  >
                    {game.difficulty}
                  </span>
                </div>
                <h2 className="text-lg font-extrabold text-white">{game.name}</h2>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close game"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/20 text-sm text-arcade-muted transition hover:border-neon-pink/40 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <MiniGameHost game={game} onWin={() => onWin(game.id)} />

          <p className="mt-5 flex items-center justify-center gap-2 text-[11px] text-arcade-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-green shadow-[0_0_6px_#39ff14]" />
            Playing in browser · Free · Press Esc to close
          </p>
        </div>
      </div>
    </div>
  );
}
