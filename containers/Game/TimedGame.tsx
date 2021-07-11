import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
const Countdown = require("react-native-countdown-component").default;

import useColorScheme from "../../hooks/useColorScheme";
import colors from "../../constants/Colors";

import { Text, View } from "../../components/Themed";
import Game from "./Game";
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
      </View>
      <Game />
    </View>
  );
};

const styles = StyleSheet.create({
  game: {
    flex: 1,
  },
  top: {
    alignItems: "center",
  },
});

export default TimedGame;
