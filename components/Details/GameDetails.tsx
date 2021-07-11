import React from "react";
import { StyleSheet, View } from "react-native";
import Likeable from "../Likeable";
import { Paragraph, Title } from "react-native-paper";
import Button from "../Button";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { PracticeParamList } from "../../types";

const Header = () => <Title style={{ fontSize: 30 }}>Game Title</Title>;

const Body = () => (
  <Paragraph>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum.",
  </Paragraph>
);

const Footer = () => {
  const navigation =
    useNavigation<StackNavigationProp<PracticeParamList, "PracticeSelectedScreen">>();
  return (
    <View style={styles.footer}>
      <Button text="Practice" icon="play" onPress={() => navigation.navigate("GameScreen")}/>
      <Button text="Results" icon="chart-line" onPress={() => {return}} />
    </View>
  );
};

const GameDetails = () => (
  <Likeable liked header={<Header />} body={<Body />} footer={<Footer />} />
);

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
  },
});

export default GameDetails;
