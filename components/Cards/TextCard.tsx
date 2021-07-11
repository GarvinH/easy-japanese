import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../Themed";
import dimensions from "../../constants/Layout";

interface TextCardProps {
  text: string;
}

const TextCard = ({ text }: TextCardProps) => (
  <View style={styles.card}>
    <View style={styles.innerCard}>
      <Text style={{ fontSize: 50 }}>{text}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderColor: "#333",
    borderRadius: 10,
    borderWidth: 1,
    width: dimensions.window.width * 0.25,
    height: dimensions.window.width * 0.25,
  },
  innerCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TextCard;
