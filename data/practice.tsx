import _ from "lodash";

import { hiragana } from "../containers/Game/Characters/Hiragana";
import { KanaProps } from "../containers/Game/Characters/Kana";
import { katakana } from "../containers/Game/Characters/Katakana";

export interface GameDataProps {
  title: string;
  description: string;
  characterSet: KanaProps[];
}

const _gameData: GameDataProps[] = [
  {
    title: "Hiragana 20 Questions",
    description:
      "Practice Hiragana for 20 questions to test your accuracy of identifying Hiragana characters. " +
      'Only non-combination characters will be tested. For example, "きょ" will not be tested',
    characterSet: hiragana,
  },
  {
    title: "Katakana 20 Questions",
    description:
      "Practice Katakana for 20 questions to test your accuracy of identifying Katakana characters. " +
      'Only non-combination characters will be tested. For example, "ファ" will not be tested',
    characterSet: katakana,
  },
];

export const gameData = _.map(_gameData, (data, index) => ({
  ...data,
  id: index.toString(),
}));
