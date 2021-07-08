import * as React from "react";
import { StyleSheet, FlatList} from "react-native";

import globalStyles from "../constants/Styles";

import TutorCard from "../components/Cards/TutorCard";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TutorsScreen() {
  return (
    <View style={globalStyles.container}>
      <FlatList data={[1,2,3,4,5,6,7,8,9,0]} renderItem={({item}) => <TutorCard />}/>
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
