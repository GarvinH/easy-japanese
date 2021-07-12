import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import globalStyles from "../constants/Styles";
import { View } from "../components/Themed";

import ArticleSection, {
  ArticleSectionProps,
} from "../components/ArticleSection";

const template: ArticleSectionProps = {
  title: "Step 1: Learn Hiragana",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  videoId: "6p9Il_j0zjc",
  externalArticles: [
    { text: "Tofugu", href: "https://www.tofugu.com/japanese/learn-hiragana/" },
  ],
};

export default function LearnScreen() {
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
        renderItem={({ item }) => <ArticleSection {...template} />}
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
