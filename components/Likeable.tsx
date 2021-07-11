import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
import colors from "../constants/Colors";

interface LikeableProps {
  liked?: boolean;
  header: React.ReactElement;
  body?: React.ReactElement;
  footer?: React.ReactElement;
}

const Likeable = ({ liked, header, body, footer }: LikeableProps) => {
  const colorScheme = useColorScheme();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.headerContent}>{header}</View>
        <View style={{ marginLeft: 10 }}>
          {liked ? (
            <FontAwesome
              name="heart"
              size={32}
              color={colors[colorScheme].tint}
            />
          ) : (
            <FontAwesome name="heart-o" size={35} />
          )}
        </View>
      </View>
      <View style={styles.body}>{body}</View>
    </View>
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

export default Likeable;
