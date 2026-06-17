import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "fun-bunny-games-party-mode";

export function usePartyMode(gameIds: string[]) {
  const [completed, setCompleted] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: string[] = JSON.parse(stored);
        setCompleted(new Set(parsed.filter((id) => gameIds.includes(id))));
      }
    } catch {
      setCompleted(new Set());
    }
  }, [gameIds]);

  const persist = useCallback((next: Set<string>) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
  }, []);

  const toggle = useCallback(
    (id: string) => {
      setCompleted((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const reset = useCallback(() => {
    setCompleted(new Set());
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const isComplete = useCallback((id: string) => completed.has(id), [completed]);

  return {
    completedCount: completed.size,
    totalCount: gameIds.length,
    toggle,
    reset,
    isComplete,
  };
}
