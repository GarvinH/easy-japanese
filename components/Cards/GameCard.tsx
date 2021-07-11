import React from "react";
import { StyleSheet, View } from "react-native";
import { Paragraph, Title } from "react-native-paper";
import LikeableCard from "./LikeableCard";

type ContentProps = HeaderProps & BodyProps;

const template: ContentProps = {
  title: "Game title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

interface HeaderProps {
  title: string;
}

interface BodyProps {
  description: string;
}

const Header = ({ title }: HeaderProps) => <Title>{title}</Title>;

const Body = ({ description }: BodyProps) => (
  <Paragraph>{description}</Paragraph>
);

const GameCard = () => {
  return (
    <LikeableCard header={<Header {...template} />} body={<Body {...template} />} />
  );
};

export default GameCard;
