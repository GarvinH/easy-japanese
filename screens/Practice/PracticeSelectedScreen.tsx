import * as React from "react";
import _ from "lodash";
import { StyleSheet } from "react-native";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { RouteProp, useRoute } from "@react-navigation/native";

import globalStyles from "../../constants/Styles";

import { Text, View } from "../../components/Themed";
import { PracticeParamList } from "../../types";
import GameDetails from "../../components/Details/GameDetails";
import { GameState, GameType } from "./redux/type";
import { toggleLiked } from "../Practice/redux/store/actions";

export default function PracticeSelectedScreen() {
  const route =
    useRoute<RouteProp<PracticeParamList, "PracticeSelectedScreen">>();

  const { id } = route.params;

  const games: readonly GameType[] = useSelector(
    (state: GameState) => state.games,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const game = _.find(games, (gam) => id === gam.id);

  if (game === undefined) {
    throw new Error("no practice selected not possible");
  }
  return (
    <View style={globalStyles.container}>
      <GameDetails
        {...game}
        onClickHeart={() => dispatch(toggleLiked(id))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
