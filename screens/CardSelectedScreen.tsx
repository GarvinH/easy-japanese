import * as React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";

import globalStyles from "../constants/Styles"

import { Text, View } from "../components/Themed";

export default function CardSelectedScreen() {
  return (
    <View style={globalStyles.container}>
      <Text>Test</Text>
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
