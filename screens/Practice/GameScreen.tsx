import React from "react";
import _ from "lodash";
import { Dispatch } from "redux";

import { View } from "../../components/Themed";
import globalStyles from "../../constants/Styles";
import GoalGame from "../../containers/Game/GoalGame";
import { RouteProp, useRoute } from "@react-navigation/native";
import { PracticeParamList } from "../../types";
import { gameData } from "../../data/practice";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { updateHistory } from "./redux/store/actions";

const GameScreen = () => {
  const route = useRoute<RouteProp<PracticeParamList, "GameScreen">>();

  const dispatch: Dispatch<any> = useDispatch();

  const { id } = route.params;
  
  const onFinish = useCallback(
    (results: number) => dispatch(updateHistory(results, id)),
    []
  );

  const game = _.find(gameData, (gam) => id === gam.id);

  if (game === undefined) {
    throw new Error("no game not allowed");
  }
  return (
    <View style={{ ...globalStyles.container }}>
      <GoalGame characterSet={game.characterSet} onFinish={onFinish} />
    </View>
  );
};
export default GameScreen;
