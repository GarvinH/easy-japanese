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

export default function LearnScreen() {
  const navigation =
    useNavigation<StackNavigationProp<PracticeParamList, "PracticeScreen">>();
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("PracticeSelectedScreen")}
            >
              <GameCard />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
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
