import { gameData, GameDataProps } from "../../../data/practice";

export interface GameType extends GameDataProps {
    liked: boolean,
    id: string
}

interface GameState {
  games: GameType[];
}

interface GameAction {
  type: string;
  gameId: string;
}

type DispatchType = (args: GameAction) => GameAction;
