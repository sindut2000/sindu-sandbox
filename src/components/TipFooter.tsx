export function TipFooter() {
  return (
    <footer className="mt-12 border-t border-white/5 pt-8">
      <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4 rounded-2xl border border-neon-yellow/20 bg-neon-yellow/5 px-5 py-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-yellow/10 text-2xl">
            🎮
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-neon-yellow">
              Pro Tip
            </p>
            <p className="mt-0.5 text-sm text-arcade-muted">
              Works great on mobile — every game supports touch controls.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center rounded-2xl border border-neon-pink/20 bg-gradient-to-r from-neon-pink/5 to-neon-purple/5 px-6 py-4">
          <p className="font-display text-[9px] uppercase leading-relaxed tracking-wider text-neon-pink sm:text-[10px]">
            Have Fun &amp; Keep Gaming
          </p>
        </div>
      </div>
    </footer>
  );
}
