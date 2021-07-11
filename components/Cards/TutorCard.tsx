import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Title, Avatar } from "react-native-paper";
import _ from "lodash";

import LikeableCard from "./LikeableCard";
import Rating from "../Rating";

export interface ContentProps {
  name: string;
  hourly: number;
  trial: number;
  languages: string[];
}

const Content = ({ name, hourly, trial, languages }: ContentProps) => {
  return (
    <View>
      <View style={styles.title}>
        <Avatar.Image
          source={require("../../assets/images/tutor.png")}
          style={{ marginRight: 10, marginTop: 10 }}
        />
        <View>
          <Title>{name}</Title>
          <Rating />
        </View>
      </View>
      <View style={styles.costTable}>
        <View style={{ marginRight: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Hourly Rate</Text>
          <Text>${hourly}</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>Trial Cost</Text>
          <Text>${trial}</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: "bold" }}>Also Speaks</Text>
        <Text>
          {_.map(
            languages,
            (language, index) =>
              language + (index + 1 === languages.length ? "" : ", ")
          )}
        </Text>
      </View>
    </View>
  );
};

const template = {
  name: "Tutor Name",
  hourly: 19.99,
  trial: 5.99,
  languages: ["English"],
};

const TutorCard = () => {
  return <LikeableCard content={<Content {...template} />} />;
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
  costTable: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
});

export default TutorCard;
