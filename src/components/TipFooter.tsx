export function TipFooter() {
  return (
    <footer className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex w-full max-w-sm items-center gap-3 rounded-2xl border-2 border-bunny-yellow-border bg-bunny-yellow/50 p-4 shadow-sm sm:w-auto">
        <span className="text-4xl" aria-hidden="true">
          🐰
        </span>
        <div>
          <p className="text-sm font-extrabold uppercase text-amber-900">
            Tip:
          </p>
          <p className="text-sm font-semibold text-gray-800">
            Add bunny ears for extra fun!
          </p>
        </div>
        <span className="ml-auto text-3xl" aria-hidden="true">
          👯
        </span>
      </div>

      <div className="rounded-full bg-bunny-ribbon px-8 py-3 shadow-md">
        <p className="text-center text-sm font-extrabold uppercase tracking-wide text-white sm:text-base">
          Have Fun &amp; Be Creative! ❤️
        </p>
      </div>
    </footer>
  );
}
