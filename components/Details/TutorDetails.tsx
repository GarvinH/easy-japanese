import React from "react";
import _ from "lodash";
import { StyleSheet, View } from "react-native";
import Rating from "../Rating";
import { Title, Avatar, Paragraph } from "react-native-paper";
import { ScrollLikeable } from "../Likeable";
import dimensions from "../../constants/Layout";
import Button from "../Button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TutorsParamList } from "../../types";
import { AvatarImageSource } from "react-native-paper/lib/typescript/components/Avatar/AvatarImage";

interface TutorHeaderProps {
  name: string;
}

const TutorHeader = ({ name }: TutorHeaderProps) => (
  <Title style={{ fontSize: 32 }}>{name}</Title>
);

interface TutorBodyProps {
  hourly: number;
  trial: number;
  languages: string[];
  rating: number;
  image: AvatarImageSource;
  intro: string;
}

const Body = ({
  hourly,
  trial,
  languages,
  rating,
  image,
  intro,
}: TutorBodyProps) => (
  <View>
    <View style={styles.header}>
      <Avatar.Image
        source={image}
        size={dimensions.window.width * 0.5}
        style={{ marginRight: 16 }}
      />
      <View style={styles.subheader}>
        <View>
          <Paragraph style={{ fontWeight: "bold" }}>Hourly Rate</Paragraph>
          <Paragraph>${hourly}</Paragraph>
        </View>
        <View>
          <Paragraph style={{ fontWeight: "bold" }}>Trial Cost</Paragraph>
          <Paragraph>${trial}</Paragraph>
        </View>
        <View>
          <Paragraph style={{ fontWeight: "bold" }}>Also Speaks</Paragraph>
          <Paragraph>
            {_.map(
              languages,
              (language, index) =>
                language + (index + 1 === languages.length ? "" : ", ")
            )}
          </Paragraph>
        </View>
      </View>
    </View>
    <View style={{ flex: 1, alignItems: "center" }}>
      <Rating {...{ rating }} />
    </View>
    <View>
      <Title>Introduction</Title>
      <Paragraph>{intro}</Paragraph>
    </View>
  </View>
);

const Footer = () => {
  const navigation =
    useNavigation<
      StackNavigationProp<TutorsParamList, "TutorSelectedScreen">
    >();
  return (
    <Button
      text="Book Now"
      onPress={() => {
        navigation.navigate("BookingScreen");
      }}
      icon="calendar"
    />
  );
};

type TutorDetailsProps = TutorBodyProps &
  TutorHeaderProps & { liked: boolean; onClickHeart: () => void };

const TutorDetails = (props: TutorDetailsProps) => (
  <ScrollLikeable
    {...props}
    header={<TutorHeader {...props} />}
    body={<Body {...props} />}
    footer={<Footer />}
  />
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginBottom: 10,
  },
  subheader: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});
export default TutorDetails;
