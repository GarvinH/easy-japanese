import * as React from "react";
import _ from "lodash";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import globalStyles from "../../constants/Styles";

import TutorCard from "../../components/Cards/TutorCard";

import { Text, View } from "../../components/Themed";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TutorsParamList } from "../../types";
import { Separator } from "../../components/Separator";
import { TutorState, TutorType } from "./redux/type";
import { toggleLiked } from "./redux/store/actions";
import LikedSwitch from "../../components/LikedSwitch";
import { useState } from "react";
import { useCallback } from "react";
import { Paragraph } from "react-native-paper";

export default function BookingConfirmedScreen() {
  const [likedOnly, setLikedOnly] = useState<boolean>(false);

  const tutors: readonly TutorType[] = useSelector(
    (state: TutorState) => state.tutors,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const filteredTutors = likedOnly
    ? _.filter(tutors, (tutor) => tutor.liked)
    : tutors;

  const navigation =
    useNavigation<StackNavigationProp<TutorsParamList, "TutorsScreen">>();

  return (
    <View style={globalStyles.container}>
      <Paragraph>Test</Paragraph>
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
