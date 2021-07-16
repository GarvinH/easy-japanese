import * as React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import globalStyles from "../constants/Styles";

import { Text, View } from "../components/Themed";

export default function AboutScreen() {
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Text style={styles.title}>{"Easy\nJapanese"}</Text>
          </View>
        </View>
        <Text>
          Easy Japanese is an application made to help people who are interested
          in starting to learn Japanese. Japanese can be a hard language to
          start learning because there are many entry points which can cause
          confusion. As such, this application contains a structured guide on
          how to start learning Japanese to be able to learn more efficiently.
          Furthermore, input and practice are essential to learning languages.
          As such, this application also offers a service of searching for
          tutors and practice games.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    marginBottom: 20,
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
