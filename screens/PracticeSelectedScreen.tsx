import * as React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";

import globalStyles from "../constants/Styles"

import { Text, View } from "../components/Themed";
import { RouteProp, useRoute } from "@react-navigation/native";
import { PracticeParamList } from "../types";
import GameDetails from "../components/Details/GameDetails";
import TutorDetails from "../components/Details/TutorDetails";

export default function PracticeSelectedScreen() {
  const route = useRoute<RouteProp<PracticeParamList, "PracticeSelectedScreen">>();

  // const { content } = route.params;
  return (
    <View style={globalStyles.container}>
      <GameDetails />
      {/* <TutorDetails /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
