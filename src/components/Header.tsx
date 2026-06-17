function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-white/5 bg-white/5 px-4 py-2 backdrop-blur-sm">
      <span className="text-lg font-extrabold text-white">{value}</span>
      <span className="text-[10px] font-semibold uppercase tracking-wider text-arcade-muted">
        {label}
      </span>
    </div>
  );
}

export function Header() {
  return (
    <header className="relative text-center">
      <div className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-4 py-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-green opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-green shadow-[0_0_6px_#39ff14]" />
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-neon-cyan">
          Live · Free to Play
        </span>
      </div>

      <div className="animate-float mb-4 inline-block text-5xl drop-shadow-[0_0_20px_rgba(255,110,199,0.4)] sm:text-6xl">
        🐰
      </div>

      <h1 className="font-display text-base leading-loose text-white glow-text-pink sm:text-xl md:text-2xl">
        FUN BUNNY
        <br />
        <span className="glow-text-cyan">GAMES</span>
      </h1>

      <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-arcade-muted sm:text-base">
        A neon arcade of bunny mini-games — pick a card, hit{" "}
        <span className="font-bold text-neon-pink">Play</span>, and go!
      </p>

      <div className="mt-6 flex justify-center gap-3 sm:gap-4">
        <StatPill label="Games" value="8" />
        <StatPill label="Price" value="Free" />
        <StatPill label="Platform" value="Web" />
      </div>
    </header>
  );
}
