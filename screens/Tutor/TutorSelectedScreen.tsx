import * as React from "react";
import _ from "lodash";

import globalStyles from "../../constants/Styles";

import { Text, View } from "../../components/Themed";
import { RouteProp, useRoute } from "@react-navigation/native";
import { TutorsParamList } from "../../types";
import TutorDetails from "../../components/Details/TutorDetails";
import { tutorData } from "../../data/tutors";

export default function TutorSelectedScreen() {
  const route = useRoute<RouteProp<TutorsParamList, "TutorSelectedScreen">>();
  const { id } = route.params;

  const tutor = _.find(tutorData, (tut) => id === tut.id);

  if (tutor === undefined) {
    throw new Error("Should not happen");
  }
  return (
    <View style={globalStyles.container}>
      <TutorDetails {...tutor} />
    </View>
  );
}
