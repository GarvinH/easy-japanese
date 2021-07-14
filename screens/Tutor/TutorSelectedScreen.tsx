import * as React from "react";
import _ from "lodash";

import globalStyles from "../../constants/Styles";

import { Text, View } from "../../components/Themed";
import { RouteProp, useRoute } from "@react-navigation/native";
import { TutorsParamList } from "../../types";
import TutorDetails from "../../components/Details/TutorDetails";
import { tutorData } from "../../data/tutors";
import { TutorState, TutorType } from "./redux/type";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { toggleLiked } from "./redux/store/actions";

export default function TutorSelectedScreen() {
  const route = useRoute<RouteProp<TutorsParamList, "TutorSelectedScreen">>();
  const { id } = route.params;

  const tutors: readonly TutorType[] = useSelector(
    (state: TutorState) => state.tutors,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const tutor = _.find(tutors, (tut) => id === tut.id);

  if (tutor === undefined) {
    throw new Error("Should not happen");
  }
  return (
    <View style={globalStyles.container}>
      <TutorDetails
        {...tutor}
        onClickHeart={() => dispatch(toggleLiked(tutor.id))}
      />
    </View>
  );
}
