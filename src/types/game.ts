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
  genre: string;
  difficulty: "Easy" | "Medium" | "Hard";
  controls: string;
  howToPlay: string;
  color: GameColor;
}
