import * as React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";

import { Text, View } from "../components/Themed";

export default function LearnScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.title}>{"Easy\nJapanese"}</Text>
        </View>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
        <Text>lorem ipsum dolor sit amet</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  logo: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.75,
    height: Dimensions.get("window").width * 0.75,
    backgroundColor: "red",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
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
