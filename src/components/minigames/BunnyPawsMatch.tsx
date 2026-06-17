import { useCallback, useEffect, useState } from "react";
import type { MiniGameProps } from "./types";

const PAIRS = ["🐾", "🥕", "🐰", "🌸", "⭐", "💗"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function BunnyPawsMatch({ onWin }: MiniGameProps) {
  const [cards, setCards] = useState<{ id: number; emoji: string; flipped: boolean; matched: boolean }[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [lock, setLock] = useState(false);

  useEffect(() => {
    const deck = shuffle([...PAIRS, ...PAIRS]).map((emoji, id) => ({
      id,
      emoji,
      flipped: false,
      matched: false,
    }));
    setCards(deck);
  }, []);

  const flip = useCallback(
    (idx: number) => {
      if (lock || cards[idx].flipped || cards[idx].matched) return;

      const next = cards.map((c, i) => (i === idx ? { ...c, flipped: true } : c));
      setCards(next);
      const sel = [...selected, idx];
      setSelected(sel);

      if (sel.length === 2) {
        setLock(true);
        const [a, b] = sel;
        if (next[a].emoji === next[b].emoji) {
          setTimeout(() => {
            setCards((cs) => {
              const updated = cs.map((c, i) =>
                i === a || i === b ? { ...c, matched: true } : c,
              );
              if (updated.every((c) => c.matched)) onWin();
              return updated;
            });
            setSelected([]);
            setLock(false);
          }, 400);
        } else {
          setTimeout(() => {
            setCards((cs) =>
              cs.map((c, i) => (i === a || i === b ? { ...c, flipped: false } : c)),
            );
            setSelected([]);
            setLock(false);
          }, 700);
        }
      }
    },
    [cards, lock, selected, onWin],
  );

  return (
    <div className="text-center">
      <p className="mb-4 text-sm text-neon-cyan">Match all paw pairs!</p>
      <div className="mx-auto grid w-fit grid-cols-4 gap-2">
        {cards.map((card, i) => (
          <button
            key={card.id}
            type="button"
            onClick={() => flip(i)}
            disabled={card.matched}
            className={[
              "flex h-14 w-14 items-center justify-center rounded-lg border-2 text-xl transition-all",
              card.flipped || card.matched
                ? "border-neon-cyan bg-neon-cyan/10"
                : "border-arcade-border bg-arcade-surface hover:border-game-orange",
              card.matched ? "opacity-50" : "",
            ].join(" ")}
          >
            {card.flipped || card.matched ? card.emoji : "?"}
          </button>
        ))}
      </div>
    </div>
  );
}
