import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import globalStyles from "../constants/Styles";
import { View } from "../components/Themed";

import ArticleSection, {
  ArticleSectionProps,
} from "../components/ArticleSection";
import { learnData } from "../data/learn";
import { Separator } from "../components/Separator";

export default function LearnScreen() {
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={learnData}
        renderItem={({ item }) => <ArticleSection {...item} />}
        ItemSeparatorComponent={Separator}
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
