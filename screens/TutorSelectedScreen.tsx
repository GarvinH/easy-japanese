import * as React from "react";

import globalStyles from "../constants/Styles"

import { Text, View } from "../components/Themed";
import { RouteProp, useRoute } from "@react-navigation/native";
import { TutorsParamList } from "../types";
import TutorDetails from "../components/Details/TutorDetails";

export default function TutorSelectedScreen() {
  const route = useRoute<RouteProp<TutorsParamList, "TutorSelectedScreen">>();

  // const { content } = route.params;
  return (
    <View style={globalStyles.container}>
      <TutorDetails />
    </View>
  );
}