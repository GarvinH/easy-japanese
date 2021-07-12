import React from "react";
import { StyleSheet } from "react-native";
import AxesExample from "../../components/Results/Chart";
import { View } from "../../components/Themed";
import globalStyles from "../../constants/Styles";

const ResultsScreen = () => {
  return (
    <View style={{ ...globalStyles.container }}>
      <AxesExample />
    </View>
  );
};
export default ResultsScreen;
