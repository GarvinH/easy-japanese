import { RouteProp, useRoute } from "@react-navigation/native";
import _ from "lodash";
import React from "react";
import { StyleSheet } from "react-native";
import { Paragraph, Title } from "react-native-paper";
import { shallowEqual, useSelector } from "react-redux";
import ResultsGraph from "../../components/Results/Chart";
import { View } from "../../components/Themed";
import globalStyles from "../../constants/Styles";
import { PracticeParamList } from "../../types";
import { GameState } from "./redux/type";

const ResultsScreen = () => {
  const route = useRoute<RouteProp<PracticeParamList, "ResultsScreen">>();

  const { id } = route.params;

  const data: readonly number[] = useSelector(
    (state: GameState) =>
      state.history.length > 0
        ? _.find(state.history, { id: id })?.results ?? []
        : [],
    shallowEqual
  );

  console.log(data);

  return (
    <View style={{ ...globalStyles.container }}>
      {data && data.length >= 3 ? (
        <View style={{ flex: 1 }}>
          <ResultsGraph data={data} />
          <Title>How to Read the Graph</Title>
          <Paragraph>
            The x-axis of the graph represents the results of the last 10 games.
            In particular, 1 is the least recent game, while 10 is the most
            recent game. Only the last 10 games are recorded.
          </Paragraph>
          <Paragraph>
            The y-axis of the graph represents the score from the game of the
            corresponding x-value. This is represented in percentage.
          </Paragraph>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Title>Not Enough Data!</Title>
          <Paragraph>
            Please return after you have practiced 3 or more times.
          </Paragraph>
        </View>
      )}
    </View>
  );
};
export default ResultsScreen;
