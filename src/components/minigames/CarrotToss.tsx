import { useCallback, useState } from "react";
import type { MiniGameProps } from "./types";

export function CarrotToss({ onWin }: MiniGameProps) {
  const [score, setScore] = useState(0);
  const [throwsLeft, setThrowsLeft] = useState(10);
  const [aiming, setAiming] = useState(false);
  const [power, setPower] = useState(0);
  const [flying, setFlying] = useState(false);
  const target = 5;

  const throwCarrot = useCallback(() => {
    if (flying || throwsLeft <= 0) return;
    setFlying(true);
    const hit = power > 40 && power < 85;
    setTimeout(() => {
      if (hit) {
        setScore((s) => {
          const next = s + 1;
          if (next >= target) onWin();
          return next;
        });
      }
      setThrowsLeft((t) => t - 1);
      setFlying(false);
      setPower(0);
      setAiming(false);
    }, 600);
  }, [flying, throwsLeft, power, onWin]);

  return (
    <div className="text-center">
      <p className="mb-4 text-sm text-neon-cyan">
        Basket: {score}/{target} · Throws left: {throwsLeft}
      </p>
      <div className="relative mx-auto h-44 w-full max-w-md rounded-xl border-2 border-neon-cyan/40 bg-arcade-bg">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl">🐰</span>
        <span
          className={[
            "absolute text-2xl transition-all duration-500",
            flying ? "left-1/2 top-4 -translate-x-1/2" : "left-16 top-1/2 -translate-y-1/2",
          ].join(" ")}
        >
          🥕
        </span>
        <span className="absolute right-8 top-8 text-4xl">🧺</span>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="h-3 overflow-hidden rounded-full bg-arcade-border">
            <div
              className="h-full bg-gradient-to-r from-game-teal to-neon-green transition-all"
              style={{ width: `${power}%` }}
            />
          </div>
          <p className="mt-1 text-xs text-gray-400">Aim for the sweet spot (40–85%)</p>
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-3">
        {!aiming ? (
          <button
            type="button"
            onClick={() => setAiming(true)}
            disabled={throwsLeft <= 0 || flying}
            className="rounded-lg bg-game-teal px-5 py-2 font-bold text-arcade-bg disabled:opacity-40"
          >
            Aim
          </button>
        ) : (
          <>
            <button
              type="button"
              onMouseDown={() => {
                const iv = setInterval(() => {
                  setPower((p) => (p >= 100 ? 0 : p + 4));
                }, 30);
                const stop = () => {
                  clearInterval(iv);
                  document.removeEventListener("mouseup", stop);
                };
                document.addEventListener("mouseup", stop);
              }}
              className="rounded-lg bg-neon-yellow px-5 py-2 font-bold text-arcade-bg"
            >
              Hold to charge
            </button>
            <button
              type="button"
              onClick={throwCarrot}
              className="rounded-lg bg-neon-pink px-5 py-2 font-bold text-white"
            >
              Throw!
            </button>
          </>
        )}
      </div>
    </div>
  );
}
