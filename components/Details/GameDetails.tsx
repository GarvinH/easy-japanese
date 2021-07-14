import React from "react";
import { StyleSheet, View } from "react-native";
import Likeable from "../Likeable";
import { Paragraph, Title } from "react-native-paper";
import Button from "../Button";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { PracticeParamList } from "../../types";

interface GameDetailsHeaderProps {
  title: string;
}

const Header = ({ title }: GameDetailsHeaderProps) => (
  <Title style={{ fontSize: 30 }}>{title}</Title>
);

interface GameDetailsBodyProps {
  description: string;
}
const Body = ({ description }: GameDetailsBodyProps) => (
  <Paragraph>{description}</Paragraph>
);

interface GameDetailsFooterProps {
  id: string;
}

const Footer = ({ id }: GameDetailsFooterProps) => {
  const navigation =
    useNavigation<
      StackNavigationProp<PracticeParamList, "PracticeSelectedScreen">
    >();
  return (
    <View style={styles.footer}>
      <View style={styles.buttonContainer}>
        <Button
          text="Practice"
          icon="play"
          onPress={() => navigation.navigate("GameScreen", { id: id })}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="Results"
          icon="chart-line"
          onPress={() => navigation.navigate("ResultsScreen")}
        />
      </View>
    </View>
  );
};

interface GameDetailsProps
  extends GameDetailsBodyProps,
    GameDetailsHeaderProps,
    GameDetailsFooterProps {
  liked: boolean;
}

const GameDetails = (props: GameDetailsProps) => (
  <Likeable
    liked={props.liked}
    header={<Header {...props} />}
    body={<Body {...props} />}
    footer={<Footer {...props} />}
  />
);

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default GameDetails;
