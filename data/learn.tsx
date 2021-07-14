import _ from "lodash";
import { ArticleSectionProps } from "../components/ArticleSection";

const _learnData: ArticleSectionProps[] = [
  {
    title: "Step 1: Learn Hiragana",
    description:
      "The most important topic in learning Japanese is learning Hiragana — a form of writing similar to the Alphabets. " +
      "Learning Hiragana means that you will be able to read and write Hiragana, as well as being able pronounce Japanese sounds. " +
      "It is essential that you learn Hiragana as it also allows you to learn Japananese Grammar. " +
      "Provided below is a video and an article on learning Hiragana. The video is very helpful " +
      "if you want to hear how a native Japanese speaker pronounces each character.",
    videoId: "6p9Il_j0zjc",
    extraLinkSections: [
      {
        title: "Articles",
        links: [
          {
            text: "Tofugu",
            href: "https://www.tofugu.com/japanese/learn-hiragana/",
          },
        ],
      },
    ],
  },

  {
    title: "Step 2: Learn Katakana",
    description:
      "The next topic to learn is Katakana — an alternate form of writing to Hiragana. " +
      "Since Japanese does not use spaces to separate characters, It can easily become difficult to read text which is only in Hiragana " +
      "(however, this will not be an issue once you learn Kanji — a form of writing based on Chinese characters), thus Katakana " +
      "will be very helpful in separating words in a sentence. In addition, Katakana will allow you to expand your vocabulary as foreign loan words " +
      '(words that were taken from other languages) are represented in Katakana. For example: English word "party" is written as "パーティー" (paa-tii) in Katakana. ' +
      "Again, a video and an article on learning Katakana are provided below.",
    videoId: "s6DKRgtVLGA",
    extraLinkSections: [
      {
        title: "Articles",
        links: [
          {
            text: "Tofugu",
            href: "https://www.tofugu.com/japanese/learn-katakana/",
          },
        ],
      },
    ],
  },

  {
    title: "Step 3: Learn the Basics",
    description:
      "Learning the basics includes many topics, but is not limited to: common phrases, grammar and Kanji. " +
      "In this step, you will be exposed to many different topics of the language. As such, I strongly encourage the usage of a textbook. " +
      "Textbooks will typically cover all the basics (and more) in a structured manner while providing good explanations and examples. " +
      "I recommend the Genki series (linked below) of textbooks as they are often used in classrooms and they are popular with the Japanese learning community. " +
      "I will also link a couple other textbooks below if Genki does not interest you (make sure to check if the textbook comes as a set, as you will probably " +
      "want the practice books as well). " +
      "Finally, since this step is very broad, I will not be providing any videos, " +
      "but I will provide a couple links to blogs which discuss varying grammar concepts.",
    extraLinkSections: [
      {
        title: "Textbooks",
        links: [
          {
            text: "Genki",
            href: "https://genki3.japantimes.co.jp/en/",
          },
          {
            text: "Minna no Nihongo",
            href: "https://www.3anet.co.jp/np/en/books/2300/",
          },
        ],
      },
      {
        title: "Extra Resources",
        links: [
          {
            text: "Tae Kim's Guide to Learning Japanese",
            href: "http://www.guidetojapanese.org/learn/grammar",
          },
          {
            text: "Maggie Sensei",
            href: "https://maggiesensei.com/",
          },
        ],
      },
    ],
  },
  {
    title: "Step 3.5: Get a Tutor",
    description:
      "If possible, try to enroll in a Japanese class at a local university. Even better, try to get a tutor that you can practice Japanese with. " +
      "Doing so will help you advance greatly in speaking and listening. In addition, they will also be able to point out any mistakes you make in grammar. " +
      'There are many places to find tutors such as this app. Check out the "Tutors" tab!',
  },
  {
    title: "Step 4: Learn more Advanced Topics",
    description:
      "By now you should have a beginner skill level of Japanese in reading, writing, speaking, and listening. With that,  " +
      "you should be able to pass the Japanese Language Proficiency Test (JLPT) level N4 with a bit more studying. " +
      "Since there are still three more JLPT levels, I will provide more textbooks below to continue advancing your Japanese skills. " +
      'For those who enjoyed the structure of Genki, I recommend the textbook "Quartet". For those who want a bit more difficulty I recommend "Tobira: ' +
      'Gateway to Advanced Japanese". ',
    extraLinkSections: [
      {
        title: "Textbooks",
        links: [
          {
            text: "Tobira: Gateway to Advanced Japanese",
            href: "https://tobiraweb.9640.jp/",
          },
          {
            text: "Quartet",
            href: "https://quartet.japantimes.co.jp/en/",
          },
        ],
      },
    ],
  },

  {
    title: "Step 5: Coming soon",
    description:
      "Unfortunately, I too am still learning Japanese, thus cannot provide on any advice going forward for the time being. " +
      "However, I will state that it is very important to continue immersing yourself in Japanese to keep advancing, whether that be music, anime, or anything else. " +
      "Above all, don't give up!",
  },
];

export const learnData = _.map(_learnData, (data, index) => ({
  ...data,
  id: index.toString(),
}));
