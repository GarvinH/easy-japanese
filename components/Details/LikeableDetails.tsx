import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
// import { View, Text } from "../Themed";

import colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Title, Avatar } from "react-native-paper";
import { Rating } from "react-native-ratings";

interface LikeableDetailsProps {
  liked: boolean;
}

const LikeableDetails = ({ liked }: LikeableDetailsProps) => {
  const colorScheme = useColorScheme();
  return (
    <View>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.title}>
            <Avatar.Image
              source={require("../../assets/images/tutor.png")}
              style={{ marginRight: 10, marginTop: 10 }}
            />
            <View style={{backgroundColor: "pink"}}>
              <Title>Title test</Title>
              <Rating imageSize={20} readonly/>
            </View>
          </View>
          <View>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "baseline",
    justifyContent: "space-between",
    backgroundColor: "pink"    
  },
  title: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
});

export default LikeableDetails;
