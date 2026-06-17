function WhiskerMarks() {
  return (
    <span className="flex flex-col gap-1" aria-hidden="true">
      <span className="h-0.5 w-4 rounded-full bg-bunny-pink-border" />
      <span className="h-0.5 w-5 rounded-full bg-bunny-pink-border" />
      <span className="h-0.5 w-4 rounded-full bg-bunny-pink-border" />
    </span>
  );
}

function CarrotIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 animate-wiggle" aria-hidden="true">
      <path
        d="M12 4 C10 4 8 6 8 8 L8 18 C8 20 10 22 12 22 C14 22 16 20 16 18 L16 8 C16 6 14 4 12 4Z"
        fill="#fb923c"
        stroke="#ea580c"
        strokeWidth="0.5"
      />
      <path d="M10 6 L12 2 L14 6" fill="#22c55e" />
      <path d="M12 2 L14 4" stroke="#16a34a" strokeWidth="0.5" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="text-center">
      <div className="mb-3 flex items-center justify-center gap-3 sm:gap-5">
        <WhiskerMarks />
        <h1 className="text-3xl font-extrabold uppercase tracking-wide text-gray-900 sm:text-4xl md:text-5xl">
          Fun Bunny Games
        </h1>
        <WhiskerMarks />
      </div>

      <div className="flex items-center justify-center gap-3">
        <CarrotIcon />
        <div className="relative">
          <div className="rounded-full bg-bunny-ribbon px-6 py-2 shadow-sm sm:px-10">
            <p className="text-sm font-bold uppercase tracking-widest text-white sm:text-base">
              Easy &amp; Creative!
            </p>
          </div>
          <div className="absolute -left-3 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[10px] border-r-[12px] border-y-transparent border-r-bunny-ribbon" />
          <div className="absolute -right-3 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[10px] border-l-[12px] border-y-transparent border-l-bunny-ribbon" />
        </div>
        <CarrotIcon />
      </div>
    </header>
  );
}
