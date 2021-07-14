import * as actionTypes from "./actionTypes";

export const toggleLiked = (tutorId: string) => ({
  type: actionTypes.TOGGLE_LIKED,
  tutorId: tutorId,
});
