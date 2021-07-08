import * as React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";

import globalStyles from "../constants/Styles"

import { Text, View } from "../components/Themed";
import GameCard from "../components/Cards/GameCard";

export default function LearnScreen() {
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <GameCard />
      </ScrollView>
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
