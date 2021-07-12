import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
import colors from "../constants/Colors";
import Styles from "../constants/Styles";

interface LikeableProps {
  liked?: boolean;
  header: React.ReactElement;
  body?: React.ReactElement;
  footer?: React.ReactElement;
}

const Likeable = ({ liked, header, body, footer }: LikeableProps) => {
  const colorScheme = useColorScheme();
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.headerContent}>{header}</View>
        <TouchableOpacity>
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
        </TouchableOpacity>
      </View>
      <View>{body}</View>
      {footer && <View style={styles.footer}>{footer}</View>}
    </ScrollView>
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
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 50,
  },
});

export default Likeable;
