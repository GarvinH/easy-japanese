import * as React from "react";
import _ from "lodash";
import { StyleSheet, Dimensions, ScrollView } from "react-native";

import globalStyles from "../../constants/Styles";

import { Text, View } from "../../components/Themed";
import { RouteProp, useRoute } from "@react-navigation/native";
import { PracticeParamList } from "../../types";
import GameDetails from "../../components/Details/GameDetails";
import { gameData } from "../../data/practice";

export default function PracticeSelectedScreen() {
  const route =
    useRoute<RouteProp<PracticeParamList, "PracticeSelectedScreen">>();

  const { id } = route.params;

  const game = _.find(gameData, (gam) => id === gam.id);

  if (game === undefined) {
    throw new Error("Should not happen");
  }
  return (
    <View style={globalStyles.container}>
      <GameDetails {...game} />
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
