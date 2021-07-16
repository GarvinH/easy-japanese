import { RouteProp, useRoute } from "@react-navigation/native";
import _ from "lodash";
import React from "react";
import { StyleSheet } from "react-native";
import { Paragraph, Title } from "react-native-paper";
import { shallowEqual, useSelector } from "react-redux";
import ResultsGraph from "../../components/Results/Chart";
import { View } from "../../components/Themed";
import globalStyles from "../../constants/Styles";
import i18n from "../../i18n";
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
  return (
    <View style={{ ...globalStyles.container }}>
      {data && data.length >= 3 ? (
        <View style={{ flex: 1 }}>
          <ResultsGraph data={data} />
          <Title>{i18n.t("How_Read_Graph")}</Title>
          <Paragraph>{i18n.t("How_Read_Graph_X")}</Paragraph>
          <Paragraph>{i18n.t("How_Read_Graph_Y")}</Paragraph>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Title>{i18n.t("Not_Enough_Data")}</Title>
          <Paragraph>{i18n.t("Not_Enough_Data_Details")}</Paragraph>
        </View>
      )}
    </View>
  );
};
export default ResultsScreen;
