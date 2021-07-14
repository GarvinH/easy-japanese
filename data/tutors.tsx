import _ from "lodash";
import { AvatarImageSource } from "react-native-paper/lib/typescript/components/Avatar/AvatarImage";

export interface TutorProps {
  name: string;
  hourly: number;
  trial: number;
  languages: string[];
  rating: number;
  intro: string;
  image: AvatarImageSource;
}

const _tutorData: TutorProps[] = [
  {
    name: "Ohara Hitoshi",
    hourly: 11.99,
    trial: 3.99,
    languages: ["English", "Español"],
    rating: 3.5,
    image: require("../assets/images/tutor1.png"),
    intro: "Lorem",
  },
  {
    name: "Matsuo Yuko",
    hourly: 15.99,
    trial: 4.49,
    languages: ["English", "中文"],
    rating: 4.5,
    image: require("../assets/images/tutor2.png"),
    intro: "Ipsum",
  },
  {
    name: "Yokoyama Takumi",
    hourly: 14.99,
    trial: 4.99,
    languages: ["English", "Italiano"],
    rating: 4,
    image: require("../assets/images/tutor3.png"),
    intro: "Dolor",
  },
  {
    name: "Okane Noriko",
    hourly: 18.99,
    trial: 6.99,
    languages: ["English", "Français", "Deutsch"],
    rating: 5,
    image: require("../assets/images/tutor4.png"),
    intro: "Sit",
  },
  {
    name: "Jo Daisuke",
    hourly: 12.99,
    trial: 3.99,
    languages: ["English", "한국어"],
    rating: 3.5,
    image: require("../assets/images/tutor5.png"),
    intro: "Amet",
  },
];

export const tutorData = _.map(_tutorData, (data, index) => ({
  ...data,
  id: index.toString(),
}));
