import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import globalStyles from "../constants/Styles";
import { View } from "../components/Themed";

import ArticleSection, {
  ArticleSectionProps,
} from "../components/ArticleSection";
import { learnData } from "../data/learn";

export default function LearnScreen() {
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={learnData}
        renderItem={({ item, index }) => (
          <View style={index != learnData.length - 1 && { marginBottom: 20 }}>
            <ArticleSection {...item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
