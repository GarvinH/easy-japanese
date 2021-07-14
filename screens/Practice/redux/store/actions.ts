import * as actionTypes from "./actionTypes";

export const toggleLiked = (gameId: string) => ({
  type: actionTypes.TOGGLE_LIKED,
  gameId: gameId,
});
