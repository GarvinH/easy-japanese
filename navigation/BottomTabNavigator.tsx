/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import LearnScreen from "../screens/LearnScreen";
import TutorsScreen from "../screens/TutorsScreen";
import PracticeScreen from "../screens/PracticeScreen";
import AboutScreen from "../screens/AboutScreen";
import {
  BottomTabParamList,
  LearnParamList,
  TutorsParamList,
  AboutParamList,
  PracticeParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Learn"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
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

const defaultScreenOptions = () => {
  const colorScheme = useColorScheme();
  return {
    headerStyle: {
      backgroundColor: Colors[colorScheme].tint,
    },
    headerTintColor: Colors[colorScheme].textOnTint,
  };
};

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const LearnStack = createStackNavigator<LearnParamList>();

function LearnNavigator() {
  return (
    <LearnStack.Navigator screenOptions={defaultScreenOptions}>
      <LearnStack.Screen
        name="LearnScreen"
        component={LearnScreen}
        options={{ headerTitle: "Learn" }}
      />
    </LearnStack.Navigator>
  );
}

const TutorsStack = createStackNavigator<TutorsParamList>();

function TutorsNavigator() {
  return (
    <TutorsStack.Navigator screenOptions={defaultScreenOptions}>
      <TutorsStack.Screen
        name="TutorsScreen"
        component={TutorsScreen}
        options={{ headerTitle: "Tutors" }}
      />
    </TutorsStack.Navigator>
  );
}

const PracticeStack = createStackNavigator<PracticeParamList>();

const PracticeNavigator = () => (
  <PracticeStack.Navigator screenOptions={defaultScreenOptions}>
    <PracticeStack.Screen
      name="PracticeScreen"
      component={PracticeScreen}
      options={{ headerTitle: "Practice" }}
    />
  </PracticeStack.Navigator>
);

const AboutStack = createStackNavigator<AboutParamList>();

const AboutNavigator = () => (
  <AboutStack.Navigator screenOptions={defaultScreenOptions}>
    <AboutStack.Screen
      name="AboutScreen"
      component={AboutScreen}
      options={{ headerTitle: "About Easy Japanese" }}
    />
  </AboutStack.Navigator>
);
