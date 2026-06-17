import { useCallback, useState } from "react";
import { MiniGameButton, MiniGameFrame } from "./MiniGameFrame";
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
    <MiniGameFrame
      score={`${score}/${target} in basket · ${throwsLeft} throws`}
      hint="Charge power between 40–85%"
    >
      <div className="relative h-44">
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
          <div className="h-2.5 overflow-hidden rounded-full bg-arcade-border ring-1 ring-white/5">
            <div
              className="h-full bg-gradient-to-r from-game-teal to-neon-green transition-all"
              style={{ width: `${power}%` }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 border-t border-white/5 p-3">
        {!aiming ? (
          <MiniGameButton
            onClick={() => setAiming(true)}
            disabled={throwsLeft <= 0 || flying}
          >
            Aim
          </MiniGameButton>
        ) : (
          <>
            <MiniGameButton
              variant="secondary"
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
            >
              Charge
            </MiniGameButton>
            <MiniGameButton onClick={throwCarrot}>Throw!</MiniGameButton>
          </>
        )}
      </div>
    </MiniGameFrame>
  );
}
