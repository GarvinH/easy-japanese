import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import useColorScheme from "../../hooks/useColorScheme";
import colors from "../../constants/Colors";

interface LikeableCardProps {
  liked?: boolean;
  content: any;
}

const LikeableCard = ({ liked, content }: LikeableCardProps) => {
  const colorScheme = useColorScheme();
  return (
    <Card style={styles.card} mode="outlined">
      {liked ? (
        <FontAwesome
          name="heart"
          size={32}
          style={styles.heartIcon}
          color={colors[colorScheme].tint}
        />
      ) : (
        <FontAwesome name="heart-o" size={35} style={styles.heartIcon} />
      )}
      <Card.Content>
        {content}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    minHeight: 100,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default LikeableCard;
