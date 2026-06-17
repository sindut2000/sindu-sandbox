import { useCallback, useEffect, useRef, useState, type MouseEvent, type TouchEvent } from "react";
import type { MiniGameProps } from "./types";

export function FeedTheBunny({ onWin }: MiniGameProps) {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [carrots, setCarrots] = useState<{ id: number; x: number; y: number }[]>([]);
  const [mouthX, setMouthX] = useState(50);
  const areaRef = useRef<HTMLDivElement>(null);
  const target = 15;
  const idRef = useRef(0);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const t = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]);

  useEffect(() => {
    const iv = setInterval(() => {
      idRef.current += 1;
      setCarrots((c) => [
        ...c,
        { id: idRef.current, x: 10 + Math.random() * 80, y: 0 },
      ]);
    }, 600);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => {
      setCarrots((cs) => {
        const next = cs
          .map((c) => ({ ...c, y: c.y + 4 }))
          .filter((c) => {
            if (c.y > 85 && c.y < 95 && Math.abs(c.x - mouthX) < 12) {
              setScore((s) => {
                const n = s + 1;
                if (n >= target) onWin();
                return n;
              });
              return false;
            }
            return c.y < 100;
          });
        return next;
      });
    }, 50);
    return () => clearInterval(iv);
  }, [mouthX, onWin]);

  const onMove = useCallback((e: MouseEvent | TouchEvent) => {
    const rect = areaRef.current?.getBoundingClientRect();
    if (!rect) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setMouthX(Math.max(5, Math.min(95, pct)));
  }, []);

  return (
    <div className="text-center">
      <p className="mb-4 text-sm text-neon-cyan">
        Caught: {score}/{target} · Time: {timeLeft}s
      </p>
      <div
        ref={areaRef}
        className="relative mx-auto h-48 w-full max-w-md cursor-none overflow-hidden rounded-xl border-2 border-game-blue/40 bg-arcade-bg"
        onMouseMove={onMove}
        onTouchMove={onMove}
      >
        <span
          className="absolute bottom-2 text-4xl transition-all"
          style={{ left: `${mouthX}%`, transform: "translateX(-50%)" }}
        >
          🐰
        </span>
        {carrots.map((c) => (
          <span
            key={c.id}
            className="absolute text-2xl"
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
          >
            🥕
          </span>
        ))}
      </div>
      <p className="mt-2 text-xs text-gray-400">Move cursor to catch carrots!</p>
    </div>
  );
}
