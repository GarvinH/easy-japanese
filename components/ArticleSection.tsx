import React from "react";
import { View, StyleSheet } from "react-native";
import { Paragraph, Title } from "react-native-paper";
import YoutubePlayer from "react-native-youtube-iframe";
import _ from "lodash";

import dim from "../constants/Layout";
import globalStyles from "../constants/Styles";

import Anchor, { AnchorProps } from "./Anchor";

interface LinkSectionProps {
  title: string;
  links: AnchorProps[];
}

export interface ArticleSectionProps {
  title: string;
  description: string;
  videoId?: string;
  extraLinkSections?: LinkSectionProps[];
}

const ArticleSection = ({
  title,
  description,
  videoId,
  extraLinkSections,
}: ArticleSectionProps) => (
  <View>
    <Title style={styles.title}>{title}</Title>
    <Paragraph>{description}</Paragraph>
    {videoId && (
      <View style={styles.subsection}>
        <Title>Videos</Title>
        <YoutubePlayer
          videoId={videoId}
          height={
            ((dim.window.width - 2 * globalStyles.container.padding) * 9) / 16
          }
        />
      </View>
    )}
    {extraLinkSections &&
      _.map(extraLinkSections, (linkSection) => (
        <View style={{ ...styles.subsection, alignItems: "baseline" }}>
          <Title>{linkSection.title}</Title>
          {_.map(linkSection.links, (article) => (
            <Anchor
              key={article.href}
              text={article.text}
              href={article.href}
            />
          ))}
        </View>
      ))}
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "red",
  },
  subsection: {
    marginTop: 10,
  },
});

export default ArticleSection;
