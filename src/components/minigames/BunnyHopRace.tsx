import { useCallback, useEffect, useRef, useState } from "react";
import { MiniGameButton, MiniGameFrame } from "./MiniGameFrame";
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
    <MiniGameFrame
      score={`${score} / ${target}`}
      hint="Tap or press Space to jump"
    >
      <div
        className="relative h-40 cursor-pointer select-none"
        onClick={jump}
        role="presentation"
      >
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-game-green/25 to-transparent" />
        <span
          className={[
            "absolute bottom-10 left-8 text-4xl transition-transform duration-300",
            jumping ? "-translate-y-14" : "",
          ].join(" ")}
        >
          🐰
        </span>
        {obstacle && (
          <span className="absolute bottom-10 right-16 text-3xl">🥕</span>
        )}
        {lost && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/75 backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-display text-[10px] text-neon-pink">Game Over</p>
            <MiniGameButton
              variant="secondary"
              onClick={() => {
                setScore(0);
                setLost(false);
                setObstacle(false);
              }}
            >
              Retry
            </MiniGameButton>
          </div>
        )}
      </div>
    </MiniGameFrame>
  );
}
