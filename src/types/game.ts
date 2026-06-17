export type GameColor =
  | "yellow"
  | "teal"
  | "pink"
  | "green"
  | "purple"
  | "orange"
  | "blue";

export interface Game {
  id: string;
  number: number;
  name: string;
  emoji: string;
  youNeed: string;
  howToPlay: string;
  color: GameColor;
}
