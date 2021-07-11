import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
// import { View, Text } from "../Themed";

import colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Title, Avatar } from "react-native-paper";
import Rating from "../Rating";

interface LikeableDetailsProps {
  liked?: boolean;
  header: React.ReactElement;
  body?: React.ReactElement;
}

const LikeableDetails = ({ liked, header, body }: LikeableDetailsProps) => {
  const colorScheme = useColorScheme();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          {header}
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
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
      <View style={styles.body}>
          {body}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContent: {
    flex: 3,
    marginBottom: 10,
  },
  body: {
      flex: 1,
  }
});

export default LikeableDetails;
