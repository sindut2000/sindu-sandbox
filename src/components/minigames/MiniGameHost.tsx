import type { ComponentType } from "react";
import type { Game } from "../../types/game";
import { BunnyEarsFreeze } from "./BunnyEarsFreeze";
import { BunnyHopRace } from "./BunnyHopRace";
import { BunnyPawsMatch } from "./BunnyPawsMatch";
import { BunnyScavengerHunt } from "./BunnyScavengerHunt";
import { BunnyTailTag } from "./BunnyTailTag";
import { CarrotToss } from "./CarrotToss";
import { FeedTheBunny } from "./FeedTheBunny";
import { FollowTheBunny } from "./FollowTheBunny";
import type { MiniGameProps } from "./types";

interface MiniGameHostProps extends MiniGameProps {
  game: Game;
}

const MINI_GAMES: Record<string, ComponentType<MiniGameProps>> = {
  "bunny-hop-race": BunnyHopRace,
  "carrot-toss": CarrotToss,
  "bunny-ears-freeze": BunnyEarsFreeze,
  "follow-the-bunny": FollowTheBunny,
  "bunny-tail-tag": BunnyTailTag,
  "bunny-paws-match": BunnyPawsMatch,
  "feed-the-bunny": FeedTheBunny,
  "bunny-scavenger-hunt": BunnyScavengerHunt,
};

export function MiniGameHost({ game, onWin, onLose }: MiniGameHostProps) {
  const Component = MINI_GAMES[game.id];
  if (!Component) return <p className="text-center text-gray-400">Game not found.</p>;
  return <Component onWin={onWin} onLose={onLose} />;
}
