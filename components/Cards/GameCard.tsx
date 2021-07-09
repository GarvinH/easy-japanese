import React from "react";
import { StyleSheet, View } from "react-native";
import { Paragraph, Title } from "react-native-paper";
import LikeableCard from "./LikeableCard";

interface ContentProps {
  title: string;
  description: string;
}

const template: ContentProps = {
  title: "Game title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const Content = ({ title, description }: ContentProps) => (
  <View>
    <Title>{title}</Title>
    <Paragraph>{description}</Paragraph>
  </View>
);

const GameCard = () => {
  return <LikeableCard liked={true} content={<Content {...template} />} />;
};

export default GameCard;
