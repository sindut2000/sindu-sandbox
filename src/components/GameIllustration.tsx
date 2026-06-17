import type { Game } from "../types/game";

interface GameIllustrationProps {
  game: Game;
}

export function GameIllustration({ game }: GameIllustrationProps) {
  switch (game.id) {
    case "bunny-hop-race":
      return (
        <svg viewBox="0 0 120 80" className="h-20 w-full" aria-hidden="true">
          <ellipse cx="60" cy="68" rx="50" ry="8" fill="#86efac" opacity="0.5" />
          <rect x="10" y="55" width="100" height="12" rx="6" fill="#4ade80" />
          <circle cx="25" cy="58" r="3" fill="#f472b6" />
          <circle cx="45" cy="56" r="2" fill="#fbbf24" />
          <circle cx="70" cy="57" r="2.5" fill="#f472b6" />
          <circle cx="90" cy="55" r="2" fill="#fbbf24" />
          <ellipse cx="55" cy="45" rx="14" ry="16" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="48" cy="28" rx="5" ry="14" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="62" cy="28" rx="5" ry="14" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="48" cy="28" rx="3" ry="10" fill="#fbcfe8" />
          <ellipse cx="62" cy="28" rx="3" ry="10" fill="#fbcfe8" />
          <circle cx="50" cy="42" r="2" fill="#374151" />
          <circle cx="60" cy="42" r="2" fill="#374151" />
          <ellipse cx="55" cy="48" rx="3" ry="2" fill="#f472b6" />
          <path d="M68 52 Q80 40 90 48" fill="none" stroke="#f9fafb" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );

    case "carrot-toss":
      return (
        <svg viewBox="0 0 120 80" className="h-20 w-full" aria-hidden="true">
          <ellipse cx="35" cy="55" rx="18" ry="20" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="28" cy="38" rx="5" ry="12" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="42" cy="38" rx="5" ry="12" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="28" cy="38" rx="3" ry="9" fill="#fbcfe8" />
          <ellipse cx="42" cy="38" rx="3" ry="9" fill="#fbcfe8" />
          <circle cx="32" cy="52" r="2" fill="#374151" />
          <circle cx="40" cy="52" r="2" fill="#374151" />
          <path d="M55 60 L75 60 L80 45 L70 40 L60 45 Z" fill="#d97706" stroke="#b45309" strokeWidth="1" />
          <path d="M60 45 L65 35 L70 40" fill="#22c55e" />
          <rect x="72" y="48" width="4" height="14" rx="2" fill="#fb923c" transform="rotate(-20 74 55)" />
          <rect x="78" y="44" width="4" height="14" rx="2" fill="#fb923c" transform="rotate(10 80 51)" />
          <rect x="84" y="50" width="4" height="14" rx="2" fill="#fb923c" />
          <rect x="68" y="52" width="4" height="14" rx="2" fill="#fb923c" transform="rotate(-35 70 59)" />
        </svg>
      );

    case "bunny-ears-freeze":
      return (
        <svg viewBox="0 0 120 80" className="h-20 w-full" aria-hidden="true">
          <rect x="75" y="40" width="30" height="22" rx="4" fill="#f472b6" stroke="#ec4899" strokeWidth="1.5" />
          <circle cx="82" cy="48" r="4" fill="#374151" />
          <circle cx="98" cy="48" r="4" fill="#374151" />
          <rect x="78" y="55" width="24" height="4" rx="2" fill="#ec4899" />
          <text x="88" y="30" fontSize="14" fill="#f472b6">♪</text>
          <text x="98" y="24" fontSize="10" fill="#f472b6">♫</text>
          <ellipse cx="40" cy="50" rx="20" ry="18" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="30" cy="30" rx="6" ry="16" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="50" cy="30" rx="6" ry="16" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="30" cy="30" rx="4" ry="12" fill="#fbcfe8" />
          <ellipse cx="50" cy="30" rx="4" ry="12" fill="#fbcfe8" />
          <circle cx="34" cy="48" r="2.5" fill="#374151" />
          <circle cx="46" cy="48" r="2.5" fill="#374151" />
          <ellipse cx="40" cy="56" rx="4" ry="3" fill="#f472b6" />
        </svg>
      );

    case "follow-the-bunny":
      return (
        <svg viewBox="0 0 120 80" className="h-20 w-full" aria-hidden="true">
          <ellipse cx="85" cy="35" rx="14" ry="16" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="80" cy="20" rx="4" ry="12" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="90" cy="20" rx="4" ry="12" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="80" cy="20" rx="2.5" ry="9" fill="#fbcfe8" />
          <ellipse cx="90" cy="20" rx="2.5" ry="9" fill="#fbcfe8" />
          <circle cx="20" cy="65" r="5" fill="#92400e" opacity="0.6" />
          <circle cx="35" cy="58" r="5" fill="#92400e" opacity="0.6" />
          <circle cx="48" cy="52" r="5" fill="#92400e" opacity="0.6" />
          <circle cx="58" cy="48" r="5" fill="#92400e" opacity="0.6" />
          <circle cx="68" cy="44" r="5" fill="#92400e" opacity="0.6" />
          <ellipse cx="22" cy="63" rx="3" ry="2" fill="#78350f" opacity="0.4" />
          <ellipse cx="37" cy="56" rx="3" ry="2" fill="#78350f" opacity="0.4" />
          <ellipse cx="50" cy="50" rx="3" ry="2" fill="#78350f" opacity="0.4" />
        </svg>
      );

    case "bunny-tail-tag":
      return (
        <svg viewBox="0 0 120 80" className="h-20 w-full" aria-hidden="true">
          <ellipse cx="30" cy="50" rx="14" ry="15" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
          <ellipse cx="24" cy="34" rx="4" ry="11" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
          <ellipse cx="36" cy="34" rx="4" ry="11" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
          <circle cx="27" cy="48" r="2" fill="#374151" />
          <circle cx="33" cy="48" r="2" fill="#374151" />
          <circle cx="18" cy="58" r="5" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1" />
          <ellipse cx="85" cy="45" rx="14" ry="15" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="79" cy="29" rx="4" ry="11" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="91" cy="29" rx="4" ry="11" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <circle cx="82" cy="43" r="2" fill="#374151" />
          <circle cx="88" cy="43" r="2" fill="#374151" />
          <circle cx="95" cy="52" r="5" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1" />
          <path d="M45 50 Q60 35 75 45" fill="none" stroke="#f472b6" strokeWidth="2" strokeDasharray="4 3" />
        </svg>
      );

    case "bunny-paws-match":
      return (
        <svg viewBox="0 0 120 80" className="h-20 w-full" aria-hidden="true">
          <rect x="10" y="20" width="28" height="36" rx="4" fill="#fbcfe8" stroke="#f472b6" strokeWidth="1.5" />
          <ellipse cx="24" cy="38" rx="8" ry="10" fill="#f9fafb" />
          <circle cx="18" cy="30" r="3" fill="#f9fafb" />
          <circle cx="24" cy="28" r="3" fill="#f9fafb" />
          <circle cx="30" cy="30" r="3" fill="#f9fafb" />
          <rect x="46" y="20" width="28" height="36" rx="4" fill="#fde68a" stroke="#fbbf24" strokeWidth="1.5" />
          <ellipse cx="60" cy="38" rx="8" ry="10" fill="#f9fafb" />
          <circle cx="54" cy="30" r="3" fill="#f9fafb" />
          <circle cx="60" cy="28" r="3" fill="#f9fafb" />
          <circle cx="66" cy="30" r="3" fill="#f9fafb" />
          <rect x="82" y="20" width="28" height="36" rx="4" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" transform="rotate(8 96 38)" />
          <text x="90" y="42" fontSize="16" fill="#9ca3af">?</text>
        </svg>
      );

    case "feed-the-bunny":
      return (
        <svg viewBox="0 0 120 80" className="h-20 w-full" aria-hidden="true">
          <rect x="35" y="15" width="50" height="55" rx="6" fill="#f9fafb" stroke="#d1d5db" strokeWidth="2" />
          <ellipse cx="50" cy="35" rx="5" ry="12" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="70" cy="35" rx="5" ry="12" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="50" cy="35" rx="3" ry="9" fill="#fbcfe8" />
          <ellipse cx="70" cy="35" rx="3" ry="9" fill="#fbcfe8" />
          <circle cx="52" cy="48" r="3" fill="#374151" />
          <circle cx="68" cy="48" r="3" fill="#374151" />
          <circle cx="60" cy="58" r="10" fill="#374151" />
          <circle cx="60" cy="58" r="7" fill="#1f2937" />
          <rect x="85" y="30" width="6" height="20" rx="3" fill="#fb923c" transform="rotate(-30 88 40)" />
          <path d="M88 28 L92 22 L96 28" fill="#22c55e" />
          <ellipse cx="95" cy="55" rx="8" ry="5" fill="#fde68a" opacity="0.8" />
        </svg>
      );

    case "bunny-scavenger-hunt":
      return (
        <svg viewBox="0 0 120 80" className="h-20 w-full" aria-hidden="true">
          <text x="15" y="25" fontSize="12" fill="#f472b6">♥</text>
          <text x="95" y="30" fontSize="10" fill="#f472b6">♥</text>
          <text x="80" y="18" fontSize="8" fill="#f472b6">♥</text>
          <ellipse cx="45" cy="45" rx="18" ry="16" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="35" cy="26" rx="5" ry="13" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="55" cy="26" rx="5" ry="13" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" />
          <ellipse cx="35" cy="26" rx="3" ry="10" fill="#fbcfe8" />
          <ellipse cx="55" cy="26" rx="3" ry="10" fill="#fbcfe8" />
          <circle cx="39" cy="43" r="2.5" fill="#374151" />
          <circle cx="51" cy="43" r="2.5" fill="#374151" />
          <circle cx="70" cy="48" r="14" fill="none" stroke="#374151" strokeWidth="3" />
          <line x1="80" y1="58" x2="92" y2="70" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
          <circle cx="70" cy="48" r="10" fill="#bae6fd" opacity="0.4" />
        </svg>
      );

    default:
      return (
        <div className="flex h-20 items-center justify-center text-5xl" aria-hidden="true">
          {game.emoji}
        </div>
      );
  }
}
