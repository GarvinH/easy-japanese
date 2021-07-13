import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Title, Avatar } from "react-native-paper";
import _ from "lodash";

import LikeableCard from "./LikeableCard";
import Rating from "../Rating";
import { AvatarImageSource } from "react-native-paper/lib/typescript/components/Avatar/AvatarImage";

interface HeaderProps {
  name: string;
  image: AvatarImageSource;
  rating: number;
}

interface BodyProps {
  hourly: number;
  trial: number;
  languages: string[];
}

const Header = ({ name, image, rating }: HeaderProps) => (
  <View style={styles.title}>
    <Avatar.Image source={image} style={{ marginRight: 10 }} />
    <View style={{ flex: 1 }}>
      <Title style={{ lineHeight: 20 }}>{name}</Title>
      <Rating {...{ rating }} />
    </View>
  </View>
);

const Body = ({ hourly, trial, languages }: BodyProps) => {
  return (
    <View>
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

export type TutorCardProps = HeaderProps & BodyProps;

const TutorCard = (props: TutorCardProps) => {
  return (
    <LikeableCard header={<Header {...props} />} body={<Body {...props} />} />
  );
};

const styles = StyleSheet.create({
  title: {
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
