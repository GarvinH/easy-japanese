import React from "react";
import { StyleSheet, View } from "react-native";
import { Paragraph, Title } from "react-native-paper";
import LikeableCard from "./LikeableCard";

type ContentProps = GameCardHeaderProps & GameCardBodyProps;

const template: ContentProps = {
  title: "Game title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

interface GameCardHeaderProps {
  title: string;
}

interface GameCardBodyProps {
  description: string;
}

const Header = ({ title }: GameCardHeaderProps) => <Title>{title}</Title>;

const Body = ({ description }: GameCardBodyProps) => (
  <Paragraph>{description}</Paragraph>
);

interface GameCardProps extends GameCardBodyProps, GameCardHeaderProps {
  liked: boolean;
}

const GameCard = (props: GameCardProps) => {
  return (
    <LikeableCard
      liked={props.liked}
      header={<Header {...props} />}
      body={<Body {...props} />}
    />
  );
};

export default GameCard;
