import React from "react";
import { StyleSheet, View } from "react-native";
import { Paragraph, Title } from "react-native-paper";
import LikeableCard from "./LikeableCard";

type ContentProps = GameCardHeaderProps & GameCardBodyProps;

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
  onClickHeart: () => void;
}

const GameCard = (props: GameCardProps) => {
  return (
    <LikeableCard
      {...props}
      header={<Header {...props} />}
      body={<Body {...props} />}
    />
  );
};

export default GameCard;
