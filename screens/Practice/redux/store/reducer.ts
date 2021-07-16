import _ from "lodash";

import { gameData } from "../../../../data/practice";
import { GameAction, GameState, GameType } from "../type";
import * as actionTypes from "./actionTypes";
import { GameHistoryProps } from "../type";

const initialTutorData = _.map(gameData, (game) => ({
  ...game,
  liked: false,
}));

const initialState: GameState = {
  games: initialTutorData,
  history: [],
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
    case actionTypes.UPDATE_HISTORY: {
      const newHistory =
        _.findIndex(state.history, { id: action.gameId }) === -1
          ? _.concat(state.history, [
              { id: action.gameId, results: [action.results] },
            ])
          : _.map(state.history, (history: GameHistoryProps) =>
              history.id === action.gameId
                ? {
                    ...history,
                    results: _.chain(history.results)
                      .takeRight(9)
                      .concat([action.results])
                      .value(),
                  }
                : { ...history }
            );

      return { ...state, history: newHistory };
    }
  }

  return state;
};

export default reducer;
