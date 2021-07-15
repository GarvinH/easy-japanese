import { gameData, GameDataProps } from "../../../data/practice";

export interface GameType extends GameDataProps {
  liked: boolean;
  id: string;
}

export interface GameHistoryProps {
  results: number[];
  id: string;
}

interface GameState {
  games: GameType[];
  history: HistoryProps[];
}

interface GameAction {
  type: string;
  gameId: string;
  results: number;
}

type DispatchType = (args: GameAction) => GameAction;
