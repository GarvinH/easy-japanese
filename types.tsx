/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Learn: undefined;
  Tutors: undefined;
  Practice: undefined;
  About: undefined;
};

export type LearnParamList = {
  LearnScreen: undefined;
};

export type TutorsParamList = {
  TutorsScreen: undefined;
  TutorSelectedScreen: { id: string };
  BookingScreen: undefined;
};

export type PracticeParamList = {
  PracticeScreen: undefined;
  PracticeSelectedScreen: { id: string };
  GameScreen: { id: string };
  ResultsScreen: undefined;
};

export type AboutParamList = {
  AboutScreen: undefined;
};
