import { useCallback, useMemo, useState } from "react";
import type { MiniGameProps } from "./types";

const ITEMS = [
  { id: 1, emoji: "🥕", x: 12, y: 18 },
  { id: 2, emoji: "🐰", x: 72, y: 12 },
  { id: 3, emoji: "🥕", x: 45, y: 55 },
  { id: 4, emoji: "🐰", x: 85, y: 65 },
  { id: 5, emoji: "🥕", x: 22, y: 78 },
  { id: 6, emoji: "🐰", x: 58, y: 32 },
];

export function BunnyScavengerHunt({ onWin }: MiniGameProps) {
  const [found, setFound] = useState<Set<number>>(new Set());
  const shuffled = useMemo(
    () =>
      ITEMS.map((item) => ({
        ...item,
        x: 8 + Math.random() * 82,
        y: 8 + Math.random() * 75,
      })),
    [],
  );

  const find = useCallback(
    (id: number) => {
      setFound((prev) => {
        const next = new Set(prev);
        next.add(id);
        if (next.size >= ITEMS.length) onWin();
        return next;
      });
    },
    [onWin],
  );

  return (
    <div className="text-center">
      <p className="mb-4 text-sm text-neon-cyan">
        Found: {found.size}/{ITEMS.length} — Click hidden items!
      </p>
      <div className="relative mx-auto h-52 w-full max-w-md rounded-xl border-2 border-game-yellow/40 bg-gradient-to-b from-arcade-surface to-arcade-bg">
        <span className="absolute left-2 top-2 text-xs text-gray-500">🌳 🌸 🌿</span>
        <span className="absolute right-2 top-2 text-xs text-gray-500">☁️ 🌤️</span>
        {shuffled.map((item) =>
          found.has(item.id) ? null : (
            <button
              key={item.id}
              type="button"
              onClick={() => find(item.id)}
              className="absolute text-xl opacity-40 transition hover:scale-125 hover:opacity-100"
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
            >
              {item.emoji}
            </button>
          ),
        )}
        {found.size > 0 && (
          <div className="absolute bottom-2 left-2 flex gap-1">
            {[...found].map((id) => (
              <span key={id} className="text-lg">
                {ITEMS.find((i) => i.id === id)?.emoji}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
