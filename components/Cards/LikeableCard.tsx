import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import useColorScheme from "../../hooks/useColorScheme";
import colors from "../../constants/Colors";
import Likeable from "../Likeable";

interface LikeableCardProps {
  liked?: boolean;
  header: React.ReactElement;
  body?: React.ReactElement;
  onClickHeart: () => void;
}

const LikeableCard = (props: LikeableCardProps) => {
  const colorScheme = useColorScheme();
  return (
    <Card mode="outlined">
      <Card.Content>
        <Likeable {...props} />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  headerContent: {
    flexGrow: 1,
    marginBottom: 10,
  },
  body: {
    flex: 1,
  },
});

export default LikeableCard;
