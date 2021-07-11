import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Title } from "react-native-paper";
import Game from "./Game";

const GoalGame = () => (
  <View style={{ flex: 1 }}>
    <View style={styles.top}>
      <Title>10/20</Title>
    </View>
    <Game />
  </View>
);

const styles = StyleSheet.create({
  top: {
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default GoalGame;
