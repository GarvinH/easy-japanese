import * as actionTypes from "./actionTypes";

export const toggleLiked = (gameId: string) => ({
  type: actionTypes.TOGGLE_LIKED,
  gameId: gameId,
});

export const updateHistory = (results: number, gameId: string) => ({
  type: actionTypes.UPDATE_HISTORY,
  results: results,
  gameId: gameId
})