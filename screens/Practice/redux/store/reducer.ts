import _ from "lodash";

import { gameData } from "../../../../data/practice";
import { GameAction, GameState, GameType } from "../type";
import * as actionTypes from "./actionTypes";

const initialTutorData = _.map(gameData, (game) => ({
  ...game,
  liked: false,
}));

const initialState: GameState = {
  games: initialTutorData,
};

const reducer = (state: GameState = initialState, action: GameAction) => {
  switch (action.type) {
    case actionTypes.TOGGLE_LIKED: {
      const newGames = _.map(state.games, (game) =>
        game.id === action.gameId
          ? { ...game, liked: !game.liked }
          : { ...game }
      );
      return { ...state, games: newGames };
    }
  }

  return state;
};

export default reducer;
