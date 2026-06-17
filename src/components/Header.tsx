export function Header() {
  return (
    <header className="relative text-center">
      <div className="mb-2 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan">
        <span className="h-px w-8 bg-neon-cyan/50" />
        Free Online Arcade
        <span className="h-px w-8 bg-neon-cyan/50" />
      </div>

      <h1 className="font-display text-lg leading-relaxed text-white glow-text-pink sm:text-2xl md:text-3xl">
        FUN BUNNY
        <br />
        <span className="glow-text-cyan">GAMES</span>
      </h1>

      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-neon-pink/40 bg-neon-pink/10 px-5 py-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-green opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-green" />
        </span>
        <p className="text-xs font-bold uppercase tracking-widest text-neon-pink sm:text-sm">
          Play Instantly · No Download
        </p>
      </div>

      <p className="mx-auto mt-3 max-w-md text-sm text-gray-400">
        8 bunny mini-games you can play right in your browser. Tap{" "}
        <span className="font-bold text-neon-cyan">PLAY</span> to jump in!
      </p>
    </header>
  );
}
