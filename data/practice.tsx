import i18next from "i18next";
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
    title: i18next.t("Hiragana20"),
    description: i18next.t("Hiragana20_Description"),
    characterSet: hiragana,
  },
  {
    title: i18next.t("Katakana20"),
    description: i18next.t("Katakana20_Description"),
    characterSet: katakana,
  },
];

export const gameData = _.map(_gameData, (data, index) => ({
  ...data,
  id: index.toString(),
}));
