export function TipFooter() {
  return (
    <footer className="mt-10 flex flex-col items-center gap-4 border-t border-arcade-border pt-8 sm:flex-row sm:justify-between">
      <div className="flex items-center gap-3 rounded-xl border border-neon-yellow/30 bg-neon-yellow/5 px-4 py-3">
        <span className="text-3xl">🎮</span>
        <div>
          <p className="text-xs font-bold uppercase text-neon-yellow">Pro Tip</p>
          <p className="text-sm text-gray-400">
            Play on mobile — every game works with touch!
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-neon-pink/30 bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 px-6 py-3">
        <p className="font-display text-[8px] uppercase tracking-wider text-neon-pink sm:text-[10px]">
          Have Fun &amp; Keep Gaming! ❤️
        </p>
      </div>
    </footer>
  );
}
