import * as React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";

import globalStyles from "../../constants/Styles";

import TutorCard from "../../components/Cards/TutorCard";

import { Text, View } from "../../components/Themed";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TutorsParamList } from "../../types";
import { tutorData } from "../../data/tutors";

export default function TutorsScreen() {
  const navigation =
    useNavigation<StackNavigationProp<TutorsParamList, "TutorsScreen">>();
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={tutorData}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TutorSelectedScreen", { id: item.id })
            }
            style={index !== tutorData.length - 1 && { marginBottom: 20 }}
          >
            <TutorCard {...item} />
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
