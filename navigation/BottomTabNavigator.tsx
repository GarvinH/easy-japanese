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
import PracticeSelectedScreen from "../screens/PracticeSelectedScreen";
import AboutScreen from "../screens/AboutScreen";
import {
  BottomTabParamList,
  LearnParamList,
  TutorsParamList,
  AboutParamList,
  PracticeParamList,
} from "../types";
import GameScreen from "../screens/GameScreen";
import TutorSelectedScreen from "../screens/TutorSelectedScreen";

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

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const LearnStack = createStackNavigator<LearnParamList>();

function LearnNavigator() {
  const colorScheme = useColorScheme();
  return (
    <LearnStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
        headerTintColor: Colors[colorScheme].textOnTint,
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

const TutorsStack = createStackNavigator<TutorsParamList>();

function TutorsNavigator() {
  const colorScheme = useColorScheme();
  return (
    <TutorsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
        headerTintColor: Colors[colorScheme].textOnTint,
      }}
    >
      <TutorsStack.Screen
        name="TutorsScreen"
        component={TutorsScreen}
        options={{ headerTitle: "Tutors" }}
      />
      <TutorsStack.Screen
        name="TutorSelectedScreen"
        component={TutorSelectedScreen}
        options={{ headerTitle: "Tutors" }}
      />
    </TutorsStack.Navigator>
  );
}

const PracticeStack = createStackNavigator<PracticeParamList>();

const PracticeNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <PracticeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
        headerTintColor: Colors[colorScheme].textOnTint,
      }}
    >
      <PracticeStack.Screen
        name="PracticeScreen"
        component={PracticeScreen}
        options={{ headerTitle: "Practice" }}
      />
      <PracticeStack.Screen
        name="PracticeSelectedScreen"
        component={PracticeSelectedScreen}
        options={{ headerTitle: "Practice" }}
      />
      <PracticeStack.Screen name="GameScreen"
        component={GameScreen}
        options={{ headerTitle: "Practice" }}/>
    </PracticeStack.Navigator>
  );
};

const AboutStack = createStackNavigator<AboutParamList>();

const AboutNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <AboutStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
        headerTintColor: Colors[colorScheme].textOnTint,
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
