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
    intro:
      "Hi there! My name is Hitoshi. I recently started tutoring Japanese " +
      "and found that I strongly enjoy it! I've been studying English and Spanish for " +
      "a couple years now, so I can clarify my thoughts in those languages as well.",
  },
  {
    name: "Matsuo Yuko",
    hourly: 15.99,
    trial: 4.49,
    languages: ["English", "中文"],
    rating: 4.5,
    image: require("../assets/images/tutor2.png"),
    intro:
      "Hello! My name is Yuko. I'm currently studying to become a teacher at the " +
      "University of Tokyo, thus I'm looking to practice teaching through tutoring. " +
      "I've previously done student exchanges to the UK and Taiwan, so I can also speak " +
      "English as well as Mandarin.",
  },
  {
    name: "Yokoyama Takumi",
    hourly: 14.99,
    trial: 4.99,
    languages: ["English", "Italiano"],
    rating: 4,
    image: require("../assets/images/tutor3.png"),
    intro:
      "Hey! My name is Takumi. Teaching is one of my favourite hobbies which " +
      "is why I tutor Japanese. I'm currently living in Italy with a job that requires " +
      "English, Italian, and Japanese so I can speak all three fluently.",
  },
  {
    name: "Okane Noriko",
    hourly: 18.99,
    trial: 6.99,
    languages: ["English", "Français", "Deutsch"],
    rating: 5,
    image: require("../assets/images/tutor4.png"),
    intro:
      "Hello! My name is Noriko. I absolutely love languages, both learning and teaching, " +
      "which is why I'm tutoring Japanese. I've previously worked in the Japanese embassies in " +
      "the UK, France, and Germany. As such, I can speak English, French, and German fluently.",
  },
  {
    name: "Jo Daisuke",
    hourly: 12.99,
    trial: 3.99,
    languages: ["English", "한국어"],
    rating: 3.5,
    image: require("../assets/images/tutor5.png"),
    intro:
      "Hi, My name is Daisuke! Learning languages is really awesome which is why " +
      "I want to help others by tutoring. I'm currently studying abroad in Korea, so " +
      "this means I'm able to speak Korean as well.",
  },
];

export const tutorData = _.map(_tutorData, (data, index) => ({
  ...data,
  id: index.toString(),
}));
