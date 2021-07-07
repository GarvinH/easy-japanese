/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import LearnScreen from "../screens/LearnScreen";
import TutorsScreen from "../screens/TutorsScreen";
import AboutScreen from "../screens/AboutScreen";
import {
  BottomTabParamList,
  LearnParamList,
  TutorsParamList,
  AboutParamList,
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
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Tutors"
        component={TutorsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen name="About" component={AboutNavigator} />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const LearnStack = createStackNavigator<LearnParamList>();

function LearnNavigator() {
  return (
    <LearnStack.Navigator>
      <LearnStack.Screen
        name="LearnScreen"
        component={LearnScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </LearnStack.Navigator>
  );
}

const TutorsStack = createStackNavigator<TutorsParamList>();

function TutorsNavigator() {
  return (
    <TutorsStack.Navigator>
      <TutorsStack.Screen
        name="TutorsScreen"
        component={TutorsScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TutorsStack.Navigator>
  );
}

const AboutStack = createStackNavigator<AboutParamList>();

const AboutNavigator = () => (
  <AboutStack.Navigator>
    <AboutStack.Screen
      name="AboutScreen"
      component={AboutScreen}
      options={{ headerTitle: "About Easy Japanese" }}
    />
  </AboutStack.Navigator>
);
