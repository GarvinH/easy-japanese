import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
import colors from "../constants/Colors";
import Styles from "../constants/Styles";
import { Paragraph } from "react-native-paper";

interface LikeableProps {
  liked?: boolean;
  header: React.ReactElement;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  onClickHeart: () => void;
}

const Likeable = ({
  liked,
  header,
  body,
  footer,
  onClickHeart,
}: LikeableProps) => {
  const colorScheme = useColorScheme();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.headerContent}>{header}</View>
        <TouchableOpacity onPress={onClickHeart}>
          <View style={{ marginLeft: 10 }}>
            {liked ? (
              <FontAwesome
                name="heart"
                size={32}
                color={colors[colorScheme].tint}
              />
            ) : (
              <View>
                <FontAwesome name="heart-o" size={32} />
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
      <View>{body}</View>
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};

export const ScrollLikeable = ({
  liked,
  header,
  body,
  footer,
  onClickHeart,
}: LikeableProps) => {
  const colorScheme = useColorScheme();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.headerContent}>{header}</View>
          <TouchableOpacity onPress={onClickHeart}>
            <View style={{ marginLeft: 10 }}>
              {liked ? (
                <FontAwesome
                  name="heart"
                  size={32}
                  color={colors[colorScheme].tint}
                />
              ) : (
                <View>
                  <FontAwesome name="heart-o" size={32} />
                </View>
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View>{body}</View>
      </ScrollView>
      {footer && <View style={styles.footer}>{footer}</View>}
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
  footer: {
    justifyContent: "flex-end",
    marginTop: 10,
  },
});

export default Likeable;
