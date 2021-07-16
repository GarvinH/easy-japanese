import * as React from "react";
import _ from "lodash";
import { StyleSheet } from "react-native";
import { shallowEqual, useSelector } from "react-redux";

import globalStyles from "../../constants/Styles";

import { Text, View } from "../../components/Themed";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TutorsParamList } from "../../types";
import { TutorState } from "./redux/type";
import { Paragraph, Title } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/Button";

export default function BookingConfirmedScreen() {
  const { bookingInfo, tutors } = useSelector(
    (state: TutorState) => state,
    shallowEqual
  );

  if (_.isNil(bookingInfo)) {
    throw new Error("booking info should not be undefined");
  }

  const { tutorId, name, email, bookDate } = bookingInfo;

  const tutor = _.find(tutors, (tutor) => tutorId === tutor.id);

  if (_.isNil(tutor)) {
    throw new Error("tutor should not be undefined");
  }

  const navigation =
    useNavigation<
      StackNavigationProp<TutorsParamList, "BookingConfirmedScreen">
    >();

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <Title style={{ fontSize: 25, marginBottom: 20 }}>
          Booking for {tutor.name} Confirmed
        </Title>
        <Title>Name</Title>
        <Paragraph>{name}</Paragraph>
        <Title>Email</Title>
        <Paragraph>{email}</Paragraph>
        <Title>Date</Title>
        <Paragraph>{bookDate}</Paragraph>
        <Paragraph style={{marginTop: 20}}>
          Thank you! Expect an email from {tutor.name} within 48 hours.
        </Paragraph>
      </ScrollView>
      <Button
        text="Done"
        style={{ marginTop: 10 }}
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
