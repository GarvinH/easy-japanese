import React from "react";
import { Button } from "react-native-paper";

import useColorScheme from "../hooks/useColorScheme";
import colors from "../constants/Colors";

interface BtnProps {
  text: string;
  icon?: string;
  onPress: (() => void);
  outlined?: boolean;
}

const Btn = ({ text, icon, onPress, outlined }: BtnProps) => {
  const colorScheme = useColorScheme();
  return (
    <Button
      mode={outlined ? "outlined" : "contained"}
      icon={icon}
      color={colors[colorScheme].tint}
      onPress={onPress}
    >
      {text}
    </Button>
  );
};

export default Btn;
