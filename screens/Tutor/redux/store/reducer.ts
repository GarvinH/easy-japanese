import _ from "lodash";

import { tutorData } from "../../../../data/tutors";
import { TutorAction, TutorState, TutorType } from "../type";
import * as actionTypes from "./actionTypes";

const initialTutorData = _.map(tutorData, (tutor) => ({
  ...tutor,
  liked: false,
}));

const initialState: TutorState = {
  tutors: initialTutorData,
};

const reducer = (state: TutorState = initialState, action: TutorAction) => {
  switch (action.type) {
    case actionTypes.TOGGLE_LIKED: {
      const newTutors = _.map(state.tutors, (tutor) =>
        tutor.id === action.tutorId
          ? { ...tutor, liked: !tutor.liked }
          : { ...tutor }
      );

      return { ...state, tutors: newTutors };
    }
  }

  return state;
};

export default reducer
