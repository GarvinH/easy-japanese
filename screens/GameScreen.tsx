import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import TimedGame from "../containers/TimedGame";
import globalStyles from "../constants/Styles"

const GameScreen = () => {
  return <View style={{...globalStyles.container,}}>
      <TimedGame/>
  </View>;
};
export default GameScreen;
