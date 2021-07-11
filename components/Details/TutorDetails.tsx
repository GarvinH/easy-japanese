import React from "react";
import { StyleSheet, View } from "react-native";
import Rating from "../Rating";
import { Title, Avatar } from "react-native-paper";
import LikeableDetails from "./LikeableDetails";

const TutorHeader = () => (
  <View style={styles.header}>
    <Avatar.Image
      source={require("../../assets/images/tutor.png")}
      style={{ marginRight: 10, marginTop: 10 }}
    />
    <View>
      <Title>Title test test test test test test test test test test</Title>
      <Rating />
    </View>
  </View>
);

const TutorDetails = () => <LikeableDetails liked header={<TutorHeader />} />;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
  },
});
export default TutorDetails;
