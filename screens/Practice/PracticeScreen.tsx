import * as React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import globalStyles from "../../constants/Styles";

import { Text, View } from "../../components/Themed";
import GameCard from "../../components/Cards/GameCard";
import { StackNavigationProp } from "@react-navigation/stack";
import { PracticeParamList } from "../../types";
import { gameData } from "../../data/practice";
import { Separator } from "../../components/Separator";

export default function LearnScreen() {
  const navigation =
    useNavigation<StackNavigationProp<PracticeParamList, "PracticeScreen">>();
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={gameData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PracticeSelectedScreen", { id: item.id })
            }
          >
            <GameCard {...item} />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
