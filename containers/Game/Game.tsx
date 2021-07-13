import _ from "lodash";
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import TextCard from "../../components/Cards/TextCard";
import { KanaProps } from "./Characters/Kana";

interface GameProps {
  answerSet: KanaProps[];
  answer: KanaProps | undefined;
  onCorrect: () => void;
  onIncorrect: (response: KanaProps) => void;
}

const Game = ({ answerSet, answer, onCorrect, onIncorrect }: GameProps) => {
  if (_.isUndefined(answer)) {
    throw new Error("no answer not allowed");
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.top}>
        <TextCard text={answer.character} />
      </View>

      <View style={styles.answerGroup}>
        {_.chain(answerSet)
          .chunk(2)
          .map((answerChunk, index) => (
            <View key={index} style={styles.answerRow}>
              {_.map(answerChunk, (answerObj) => (
                <TouchableOpacity
                  key={answerObj.char_id}
                  onPress={() =>
                    answerObj.char_id === answer.char_id
                      ? onCorrect()
                      : onIncorrect(answerObj)
                  }
                >
                  <TextCard text={_.capitalize(answerObj.romanization)} />
                </TouchableOpacity>
              ))}
            </View>
          ))
          .value()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    alignItems: "center",
    marginTop: 20,
  },
  answerGroup: {
    flex: 1,
    justifyContent: "flex-end",
  },
  answerRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginVertical: 20,
  },
});

export default Game;
