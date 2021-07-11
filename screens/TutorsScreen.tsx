import * as React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";

import globalStyles from "../constants/Styles";

import TutorCard from "../components/Cards/TutorCard";

import { Text, View } from "../components/Themed";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TutorsParamList } from "../types";

export default function TutorsScreen() {
  const navigation =
    useNavigation<StackNavigationProp<TutorsParamList, "TutorsScreen">>();
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("TutorSelectedScreen")}
          >
            <TutorCard />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
