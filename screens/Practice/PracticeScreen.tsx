import * as React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";

import globalStyles from "../../constants/Styles";

import { Text, View } from "../../components/Themed";
import GameCard from "../../components/Cards/GameCard";
import { StackNavigationProp } from "@react-navigation/stack";
import { PracticeParamList } from "../../types";
import { Separator } from "../../components/Separator";
import { GameState, GameType } from "./redux/type";
import { toggleLiked } from "./redux/store/actions";

export default function LearnScreen() {
  const games: readonly GameType[] = useSelector(
    (state: GameState) => state.games,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const navigation =
    useNavigation<StackNavigationProp<PracticeParamList, "PracticeScreen">>();
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PracticeSelectedScreen", { id: item.id })
            }
          >
            <GameCard
              {...item}
              onClickHeart={() => dispatch(toggleLiked(item.id))}
            />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={Separator}
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
