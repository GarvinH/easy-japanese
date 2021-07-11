import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import TextCard from "../../components/Cards/TextCard";

const Game = () => (
  <View style={{ flex: 1 }}>
    <View style={styles.top}>
      <TextCard text="か" />
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

const styles = StyleSheet.create({
  top: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  answerGroup: {
    flex: 1,
    justifyContent: "flex-end",
  },
  answerRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default Game;
