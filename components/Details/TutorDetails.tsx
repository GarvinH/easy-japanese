import React from "react";
import { StyleSheet, View } from "react-native";
import Rating from "../Rating";
import { Title, Avatar, Paragraph } from "react-native-paper";
import Likeable from "../Likeable";
import dimensions from "../../constants/Layout";
import Button from "../Button";

const TutorHeader = () => <Title style={{ fontSize: 32 }}>Tutor's Name</Title>;

const Body = () => (
  <View>
    <View style={styles.header}>
      <Avatar.Image
        source={require("../../assets/images/tutor.png")}
        size={dimensions.window.width * 0.5}
        style={{ marginRight: 16 }}
      />
      <View style={styles.subheader}>
        <View>
          <Paragraph style={{ fontWeight: "bold" }}>Hourly Rate</Paragraph>
          <Paragraph>$19.99</Paragraph>
        </View>
        <View>
          <Paragraph style={{ fontWeight: "bold" }}>Trial Cost</Paragraph>
          <Paragraph>$5.99</Paragraph>
        </View>
        <View>
          <Paragraph style={{ fontWeight: "bold" }}>Also Speaks</Paragraph>
          <Paragraph>English</Paragraph>
        </View>
      </View>
    </View>
    <View style={{ flex: 1, alignItems: "center" }}>
      <Rating />
    </View>
    <View>
      <Title>Introduction</Title>
      <Paragraph>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.",
      </Paragraph>
    </View>
  </View>
);

const Footer = () => (
  <Button
    text="Book Now"
    onPress={() => {
      return;
    }}
    icon="calendar"
  />
);

const TutorDetails = () => (
  <Likeable
    liked
    header={<TutorHeader />}
    body={<Body />}
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
