import { useCallback, useEffect, useRef, useState } from "react";
import type { MiniGameProps } from "./types";

export function BunnyHopRace({ onWin }: MiniGameProps) {
  const [score, setScore] = useState(0);
  const [obstacle, setObstacle] = useState(false);
  const [jumping, setJumping] = useState(false);
  const [lost, setLost] = useState(false);
  const target = 10;
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const jump = useCallback(() => {
    if (lost) return;
    if (obstacle) {
      setScore((s) => {
        const next = s + 1;
        if (next >= target) onWin();
        return next;
      });
      setObstacle(false);
    }
    setJumping(true);
    setTimeout(() => setJumping(false), 300);
  }, [lost, obstacle, onWin]);

  useEffect(() => {
    tickRef.current = setInterval(() => {
      setObstacle((prev) => {
        if (prev) {
          setLost(true);
          return false;
        }
        return Math.random() > 0.45;
      });
    }, 900);
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [jump]);

  return (
    <div className="select-none text-center" onClick={jump} role="presentation">
      <p className="mb-4 text-sm text-neon-cyan">
        Score: {score}/{target} — Tap or Space to jump!
      </p>
      <div className="relative mx-auto h-40 w-full max-w-md overflow-hidden rounded-xl border-2 border-neon-cyan/40 bg-arcade-bg">
        <div className="absolute bottom-0 h-8 w-full bg-game-green/30" />
        <span
          className={[
            "absolute bottom-8 left-8 text-4xl transition-transform duration-300",
            jumping ? "-translate-y-14" : "",
          ].join(" ")}
        >
          🐰
        </span>
        {obstacle && (
          <span className="absolute bottom-8 right-16 text-3xl">🥕</span>
        )}
        {lost && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70">
            <p className="font-display text-xs text-neon-pink">GAME OVER</p>
          </div>
        )}
      </div>
      {lost && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setScore(0);
            setLost(false);
            setObstacle(false);
          }}
          className="mt-4 rounded-lg bg-neon-purple px-4 py-2 text-sm font-bold"
        >
          Retry
        </button>
      )}
    </div>
  );
}
