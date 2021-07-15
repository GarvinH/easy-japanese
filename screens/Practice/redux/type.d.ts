import { gameData, GameDataProps } from "../../../data/practice";

export interface GameType extends GameDataProps {
  liked: boolean;
  id: string;
}

interface GameState {
  games: GameType[];
  history: number[];
}

interface GameAction {
  type: string;
  gameId?: string;
  results?: number;
}

type DispatchType = (args: GameAction) => GameAction;
