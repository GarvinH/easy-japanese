/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Learn: {
            screens: {
              LearnScreen: "learn",
            },
          },
          Tutors: {
            screens: {
              TutorsScreen: "tutor",
            },
          },
          Practice: {
            screens: {
              PracticeScreen: "practice",
              PracticeSelectedScreen: "practice-selected",
              GameScreen: "game",
              BookingConfirmedScreen: "booking-confirmed"
            },
          },
          About: {
            screens: {
              AboutScreen: "about",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
