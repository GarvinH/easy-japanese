import React from "react";
import { StyleSheet } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import ResultsGraph from "../../components/Results/Chart";
import { View } from "../../components/Themed";
import globalStyles from "../../constants/Styles";
import { GameState } from "./redux/type";

const ResultsScreen = () => {
  const data: readonly number[] = useSelector(
    (state: GameState) => state.history,
    shallowEqual
  );

  console.log(data)

  return (
    <View style={{ ...globalStyles.container }}>
      <ResultsGraph data={data} />
    </View>
  );
};
export default ResultsScreen;
