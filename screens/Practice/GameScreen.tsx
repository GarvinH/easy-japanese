import React from "react";
import _ from "lodash";
import { View } from "../../components/Themed";
import globalStyles from "../../constants/Styles";
import GoalGame from "../../containers/Game/GoalGame";
import { RouteProp, useRoute } from "@react-navigation/native";
import { PracticeParamList } from "../../types";
import { gameData } from "../../data/practice";

const GameScreen = () => {
  const route = useRoute<RouteProp<PracticeParamList, "GameScreen">>();

  const { id } = route.params;

  const game = _.find(gameData, (gam) => id === gam.id);

  if (game === undefined) {
    throw new Error("Should not happen");
  }
  return (
    <View style={{ ...globalStyles.container }}>
      <GoalGame characterSet={game.characterSet} />
    </View>
  );
};
export default GameScreen;
