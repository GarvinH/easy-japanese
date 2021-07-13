import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import TimedGame from "../../containers/Game/TimedGame";
import globalStyles from "../../constants/Styles";
import GoalGame from "../../containers/Game/GoalGame";
import { hiragana } from "../../containers/Game/Characters/Hiragana";

const GameScreen = () => {
  return (
    <View style={{ ...globalStyles.container }}>
      {/* <TimedGame/> */}
      <GoalGame characterSet={hiragana} />
    </View>
  );
};
export default GameScreen;
