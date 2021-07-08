import React from "react";
import { StyleSheet, View } from "react-native";
import LikeableCard from "./LikeableCard";
import { Title, Avatar } from "react-native-paper";

const Content = () => {
  return (
    <View>
      <View style={styles.title}>
        <Avatar.Image source={require("../../assets/images/tutor.png")} style={{marginRight: 10}}/>
        <Title>Tutor Name</Title>
      </View>
    </View>
  );
};

const TutorCard = () => {
  return <LikeableCard content={<Content />} />;
};

const styles = StyleSheet.create({
    title: {
        flex: 1,
        flexDirection: "row",
    }
})

export default TutorCard;
