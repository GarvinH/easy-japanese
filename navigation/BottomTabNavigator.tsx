/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";

import tutorReducer from "../screens/Tutor/redux/store/reducer";
import gameReducer from "../screens/Practice/redux/store/reducer";

import colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import LearnScreen from "../screens/LearnScreen";
import TutorsScreen from "../screens/Tutor/TutorsScreen";
import PracticeScreen from "../screens/Practice/PracticeScreen";
import PracticeSelectedScreen from "../screens/Practice/PracticeSelectedScreen";
import AboutScreen from "../screens/AboutScreen";
import {
  BottomTabParamList,
  LearnParamList,
  TutorsParamList,
  AboutParamList,
  PracticeParamList,
} from "../types";
import GameScreen from "../screens/Practice/GameScreen";
import TutorSelectedScreen from "../screens/Tutor/TutorSelectedScreen";
import ResultsScreen from "../screens/Practice/ResultsScreen";
import BookingScreen from "../screens/Tutor/BookingScreen";
import {
  DispatchType as TutorDispatchType,
  TutorAction,
  TutorState,
} from "../screens/Tutor/redux/type";
import {
  GameAction,
  GameState,
  DispatchType as GameDispatchType,
} from "../screens/Practice/redux/type";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import {
  Button,
  Dialog,
  Modal,
  Paragraph,
  Portal,
  Title,
} from "react-native-paper";
import { View } from "../components/Themed";
import { useCallback } from "react";
import BookingConfirmedScreen from "../screens/Tutor/BookingConfirmedScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Learn"
      tabBarOptions={{ activeTintColor: colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Learn"
        component={LearnNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Tutors"
        component={TutorsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon2 name="chalkboard-teacher" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Practice"
        component={PracticeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="play" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="About"
        component={AboutNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="info-circle" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarIcon2(props: {
  name: React.ComponentProps<typeof FontAwesome5>["name"];
  color: string;
}) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const LearnStack = createStackNavigator<LearnParamList>();

function LearnNavigator() {
  const colorScheme = useColorScheme();
  return (
    <LearnStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors[colorScheme].tint,
        },
        headerTintColor: colors[colorScheme].textOnTint,
      }}
    >
      <LearnStack.Screen
        name="LearnScreen"
        component={LearnScreen}
        options={{ headerTitle: "Learn" }}
      />
    </LearnStack.Navigator>
  );
}

interface HelpIconButtonProps {
  onPress: () => void;
}

const HelpIconButton = ({ onPress }: HelpIconButtonProps) => {
  const colorScheme = useColorScheme();
  return (
    <TouchableOpacity style={{ marginRight: 20 }} onPress={onPress}>
      <FontAwesome
        name="question-circle-o"
        size={30}
        color={colors[colorScheme].textOnTint}
      />
    </TouchableOpacity>
  );
};

const TutorsStack = createStackNavigator<TutorsParamList>();
const tutorStore: Store<TutorState, TutorAction> & {
  dispatch: TutorDispatchType;
} = createStore(tutorReducer);

function TutorsNavigator() {
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const colorScheme = useColorScheme();

  const hideHelp = useCallback(() => setShowHelp(false), []);

  const TutorsHelpScreen = useCallback(
    () => (
      <View style={{ flex: 1 }}>
        <TutorsScreen />
        <Dialog visible={showHelp} onDismiss={hideHelp}>
          <Dialog.Title>Tutor Help</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              To select a tutor, click on their corresponding card.{"\n"}Tutors
              can be favourited by clicking on the heart icon.{"\n"}To only show
              favourited tutors, enable the "Show liked only" option in the top
              right.
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideHelp} color={colors[colorScheme].tint}>
              Done
            </Button>
          </Dialog.Actions>
        </Dialog>
      </View>
    ),
    [showHelp]
  );
  return (
    <Provider store={tutorStore}>
      <TutorsStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors[colorScheme].tint,
          },
          headerTintColor: colors[colorScheme].textOnTint,
        }}
      >
        <TutorsStack.Screen
          name="TutorsScreen"
          component={TutorsHelpScreen}
          options={{
            headerTitle: "Tutors",
            headerRight: () => (
              <HelpIconButton onPress={() => setShowHelp(true)} />
            ),
          }}
        />
        <TutorsStack.Screen
          name="TutorSelectedScreen"
          component={TutorSelectedScreen}
          options={{ headerTitle: "Tutors" }}
        />
        <TutorsStack.Screen
          name="BookingScreen"
          component={BookingScreen}
          options={{ headerTitle: "Booking" }}
        />
        <TutorsStack.Screen
          name="BookingConfirmedScreen"
          component={BookingConfirmedScreen}
          options={{ headerTitle: "Booking Confirmed", headerLeft: () => null }}
        />
      </TutorsStack.Navigator>
    </Provider>
  );
}

const PracticeStack = createStackNavigator<PracticeParamList>();
const practiceStore: Store<GameState, GameAction> & {
  dispatch: TutorDispatchType;
} = createStore(gameReducer);

const PracticeNavigator = () => {
  const [showHelp, setShowHelp] = useState<boolean>(false);

  const colorScheme = useColorScheme();

  const hideHelp = useCallback(() => setShowHelp(false), []);

  const PracticeHelpScreen = useCallback(
    () => (
      <View style={{ flex: 1 }}>
        <PracticeScreen />
        <Dialog visible={showHelp} onDismiss={hideHelp}>
          <Dialog.Title>Practice Help</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              To select a game, click on their corresponding card.
              {"\n"}Games can be favourited by clicking on the heart icon.{"\n"}
              To only show favourited games, enable the "Show liked only" option
              in the top right.
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideHelp} color={colors[colorScheme].tint}>
              Done
            </Button>
          </Dialog.Actions>
        </Dialog>
      </View>
    ),
    [showHelp]
  );
  return (
    <Provider store={practiceStore}>
      <PracticeStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors[colorScheme].tint,
          },
          headerTintColor: colors[colorScheme].textOnTint,
        }}
      >
        <PracticeStack.Screen
          name="PracticeScreen"
          component={PracticeHelpScreen}
          options={{
            headerTitle: "Practice",
            headerRight: () => (
              <HelpIconButton onPress={() => setShowHelp(true)} />
            ),
          }}
        />
        <PracticeStack.Screen
          name="PracticeSelectedScreen"
          component={PracticeSelectedScreen}
          options={{ headerTitle: "Practice" }}
        />
        <PracticeStack.Screen
          name="GameScreen"
          component={GameScreen}
          options={{ headerTitle: "Practice" }}
        />
        <PracticeStack.Screen
          name="ResultsScreen"
          component={ResultsScreen}
          options={{ headerTitle: "Results" }}
        />
      </PracticeStack.Navigator>
    </Provider>
  );
};

const AboutStack = createStackNavigator<AboutParamList>();

const AboutNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <AboutStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors[colorScheme].tint,
        },
        headerTintColor: colors[colorScheme].textOnTint,
      }}
    >
      <AboutStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ headerTitle: "About Easy Japanese" }}
      />
    </AboutStack.Navigator>
  );
};
