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
import i18next from "i18next";
import i18n from "../i18n";

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
          tabBarLabel: i18next.t("Learn"),
        }}
      />
      <BottomTab.Screen
        name="Tutors"
        component={TutorsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon2 name="chalkboard-teacher" color={color} />
          ),
          tabBarLabel: i18next.t("Tutors"),
        }}
      />
      <BottomTab.Screen
        name="Practice"
        component={PracticeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="play" color={color} />,
          tabBarLabel: i18next.t("Practice"),
        }}
      />
      <BottomTab.Screen
        name="About"
        component={AboutNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="info-circle" color={color} />
          ),
          tabBarLabel: i18next.t("About"),
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
        options={{ headerTitle: i18n.t("Learn") }}
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
              To select a tutor, click on their corresponding card.
            </Paragraph>
            <Paragraph>
              Tutors can be favourited by clicking on the heart icon.
            </Paragraph>
            <Paragraph>
              To only show favourited tutors, enable the "Show liked only"
              option in the top right.
            </Paragraph>
            <Paragraph>
              Please note that booking a tutor does not include any
              transactions. The booking service is used for making contact with
              tutors.
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideHelp} color={colors[colorScheme].tint}>
              {i18next.t("Done")}
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
          <Dialog.Title>{i18next.t("Practice_Help")}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{i18next.t("Practice_Help_Text1")}</Paragraph>
            <Paragraph>{i18next.t("Practice_Help_Text2")}</Paragraph>
            <Paragraph>{i18next.t("Practice_Help_Text3")}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideHelp} color={colors[colorScheme].tint}>
              {i18next.t("Done")}
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
            headerTitle: i18n.t("Practice"),
            headerRight: () => (
              <HelpIconButton onPress={() => setShowHelp(true)} />
            ),
          }}
        />
        <PracticeStack.Screen
          name="PracticeSelectedScreen"
          component={PracticeSelectedScreen}
          options={{ headerTitle: i18n.t("Practice") }}
        />
        <PracticeStack.Screen
          name="GameScreen"
          component={GameScreen}
          options={{ headerTitle: i18n.t("Practice") }}
        />
        <PracticeStack.Screen
          name="ResultsScreen"
          component={ResultsScreen}
          options={{ headerTitle: i18n.t("Performance") }}
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
