import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Paragraph } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";

export interface AnchorProps {
  href: string;
  text: string;
}

const Anchor = ({ href, text }: AnchorProps) => (
  <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(href)}>
    <Paragraph style={styles.link}>{text}</Paragraph>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  link: {
    color: "#007bff",
  },
});

export default Anchor;
