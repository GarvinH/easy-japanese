import React, { Dispatch, SetStateAction } from "react";
import { View } from "./Themed";
import { Paragraph, Switch } from "react-native-paper";
import colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import i18next from "i18next";

interface LikedSwitchProps {
  value: boolean;
  onValueChange: () => void;
}

const LikedSwitch = (props: LikedSwitchProps) => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <Paragraph>{i18next.t("Liked_Only")}</Paragraph>
      <Switch
        {...props}
        style={{ marginLeft: 10 }}
        color={colors[colorScheme].tint}
      />
    </View>
  );
};

export default LikedSwitch;
