import { useCallback, useEffect, useState } from "react";
import type { MiniGameProps } from "./types";

const GRID = 4;

export function FollowTheBunny({ onWin }: MiniGameProps) {
  const [round, setRound] = useState(1);
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerStep, setPlayerStep] = useState(0);
  const [lit, setLit] = useState<number | null>(null);
  const [phase, setPhase] = useState<"show" | "play">("show");
  const targetRounds = 3;

  const startRound = useCallback((r: number) => {
    const len = r + 2;
    const seq = Array.from({ length: len }, () => Math.floor(Math.random() * GRID * GRID));
    setSequence(seq);
    setPlayerStep(0);
    setPhase("show");

    let i = 0;
    const show = () => {
      if (i >= seq.length) {
        setLit(null);
        setPhase("play");
        return;
      }
      setLit(seq[i]);
      setTimeout(() => {
        setLit(null);
        setTimeout(() => {
          i += 1;
          show();
        }, 200);
      }, 600);
    };
    setTimeout(show, 500);
  }, []);

  useEffect(() => {
    startRound(round);
  }, [round, startRound]);

  const tapCell = (idx: number) => {
    if (phase !== "play") return;
    if (idx === sequence[playerStep]) {
      const next = playerStep + 1;
      setPlayerStep(next);
      setLit(idx);
      setTimeout(() => setLit(null), 200);
      if (next >= sequence.length) {
        if (round >= targetRounds) {
          onWin();
        } else {
          setTimeout(() => setRound((r) => r + 1), 800);
        }
      }
    } else {
      setPlayerStep(0);
      startRound(round);
    }
  };

  return (
    <div className="text-center">
      <p className="mb-4 text-sm text-neon-cyan">
        Round {round}/{targetRounds} — Repeat the paw trail!
      </p>
      <div className="mx-auto grid w-fit grid-cols-4 gap-2">
        {Array.from({ length: GRID * GRID }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => tapCell(i)}
            disabled={phase === "show"}
            className={[
              "flex h-14 w-14 items-center justify-center rounded-lg border-2 text-xl transition-all",
              lit === i
                ? "border-neon-cyan bg-neon-cyan/30 scale-110"
                : "border-arcade-border bg-arcade-surface hover:border-neon-purple",
            ].join(" ")}
          >
            🐾
          </button>
        ))}
      </div>
    </div>
  );
}
