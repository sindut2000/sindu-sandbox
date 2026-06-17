import { useCallback, useEffect, useState } from "react";
import type { MiniGameProps } from "./types";

export function BunnyEarsFreeze({ onWin }: MiniGameProps) {
  const [score, setScore] = useState(0);
  const [dancing, setDancing] = useState(true);
  const target = 8;

  useEffect(() => {
    const iv = setInterval(() => setDancing((d) => !d), 1200 + Math.random() * 800);
    return () => clearInterval(iv);
  }, []);

  const tap = useCallback(() => {
    if (dancing) {
      setScore((s) => {
        const next = s + 1;
        if (next >= target) onWin();
        return next;
      });
    } else {
      setScore(0);
    }
  }, [dancing, onWin]);

  return (
    <div className="text-center">
      <p className="mb-4 text-sm text-neon-cyan">
        Score: {score}/{target} — Tap on 🟢 DANCE, stay still on 🔴 FREEZE
      </p>
      <button
        type="button"
        onClick={tap}
        className={[
          "mx-auto flex h-44 w-full max-w-md flex-col items-center justify-center rounded-xl border-2 transition-all",
          dancing
            ? "border-neon-green bg-neon-green/10 animate-pulse"
            : "border-red-500 bg-red-500/10",
        ].join(" ")}
      >
        <span className="text-6xl">{dancing ? "💃" : "🧊"}</span>
        <span className="mt-2 font-display text-[10px]">
          {dancing ? "DANCE!" : "FREEZE!"}
        </span>
      </button>
    </div>
  );
}
