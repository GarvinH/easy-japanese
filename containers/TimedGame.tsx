import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
const Countdown = require("react-native-countdown-component").default;

import useColorScheme from "../hooks/useColorScheme";
import colors from "../constants/Colors";

import { Text, View } from "../components/Themed";
import TextCard from "../components/Cards/TextCard";
const TimedGame = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.game}>
      <View style={styles.top}>
        <Countdown
          until={59}
          onFinish={() => alert("finished")}
          size={20}
          timeToShow={["S"]}
          digitStyle={{ backgroundColor: colors[colorScheme].background }}
        />
        <View style={{ marginTop: 20 }}>
          <TextCard text="か" />
        </View>
      </View>

      <View style={styles.answerGroup}>
        <View style={styles.answerRow}>
          <TouchableOpacity>
            <TextCard text="Ka" />
          </TouchableOpacity>
          <TextCard text="Da" />
        </View>
        <View style={styles.answerRow}>
          <TextCard text="Ta" />
          <TextCard text="Ba" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  game: {
    flex: 1,
  },
  top: {
    flex: 1,
    alignItems: "center",
  },
  answerGroup: {
    flex: 1,
    justifyContent: "flex-end",
  },
  answerRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    // alignItems: "baseline"
  },
});

export default TimedGame;
