import { useCallback, useEffect, useState } from "react";
import type { MiniGameProps } from "./types";

export function BunnyTailTag({ onWin }: MiniGameProps) {
  const [score, setScore] = useState(0);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [timeLeft, setTimeLeft] = useState(15);
  const target = 8;

  useEffect(() => {
    if (timeLeft <= 0) return;
    const t = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]);

  useEffect(() => {
    const iv = setInterval(() => {
      setPos({
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 70,
      });
    }, 700);
    return () => clearInterval(iv);
  }, []);

  const tag = useCallback(() => {
    setScore((s) => {
      const next = s + 1;
      if (next >= target) onWin();
      return next;
    });
    setPos({ x: 10 + Math.random() * 80, y: 10 + Math.random() * 70 });
  }, [onWin]);

  return (
    <div className="text-center">
      <p className="mb-4 text-sm text-neon-cyan">
        Tags: {score}/{target} · Time: {timeLeft}s
      </p>
      <div className="relative mx-auto h-44 w-full max-w-md rounded-xl border-2 border-neon-purple/40 bg-arcade-bg">
        {timeLeft > 0 && score < target && (
          <button
            type="button"
            onClick={tag}
            className="absolute text-4xl transition-all duration-200 hover:scale-125"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          >
            🐰
          </button>
        )}
        {(timeLeft <= 0 || score >= target) && score < target && (
          <p className="flex h-full items-center justify-center font-display text-xs text-red-400">
            TIME UP!
          </p>
        )}
      </div>
    </div>
  );
}
