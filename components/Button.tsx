import React from "react";
import { Button } from "react-native-paper";

import useColorScheme from "../hooks/useColorScheme";
import colors from "../constants/Colors";

interface BtnProps {
  text: string;
  icon?: string;
  onPress: () => void;
}

const Btn = ({ text, icon, onPress }: BtnProps) => {
  const colorScheme = useColorScheme();
  return (
    <Button
      mode="contained"
      icon={icon}
      color={colors[colorScheme].tint}
      style={{ flex: 1, marginHorizontal: 10 }}
      onPress={onPress}
    >
      {text}
    </Button>
  );
};

export default Btn;
