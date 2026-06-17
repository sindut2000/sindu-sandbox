import type { ReactNode } from "react";

interface MiniGameFrameProps {
  children: ReactNode;
  hint: string;
  score?: string;
}

export function MiniGameFrame({ children, hint, score }: MiniGameFrameProps) {
  return (
    <div>
      {(score || hint) && (
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs">
          {score && (
            <span className="rounded-lg border border-neon-cyan/25 bg-neon-cyan/10 px-3 py-1 font-bold tabular-nums text-neon-cyan">
              {score}
            </span>
          )}
          <span className="text-arcade-muted">{hint}</span>
        </div>
      )}
      <div className="overflow-hidden rounded-xl border border-white/8 bg-arcade-bg/80 ring-1 ring-white/5">
        {children}
      </div>
    </div>
  );
}

interface MiniGameButtonProps {
  children: ReactNode;
  onClick?: () => void;
  onMouseDown?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  className?: string;
}

const btnVariants = {
  primary:
    "bg-gradient-to-r from-neon-purple to-neon-pink text-white hover:shadow-[0_0_20px_rgba(180,77,255,0.4)]",
  secondary:
    "border border-arcade-border bg-arcade-elevated text-gray-200 hover:border-neon-cyan/40",
  danger:
    "border border-red-500/40 bg-red-500/10 text-red-400 hover:bg-red-500/20",
};

export function MiniGameButton({
  children,
  onClick,
  onMouseDown,
  variant = "primary",
  disabled,
  className = "",
}: MiniGameButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseDown={onMouseDown}
      disabled={disabled}
      className={[
        "rounded-lg px-4 py-2 text-sm font-bold transition-all active:scale-95 disabled:opacity-40",
        btnVariants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
