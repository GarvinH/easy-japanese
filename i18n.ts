import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  en: {
    translation: {
      Learn: "Learn",
      Tutors: "Tutors",
      Practice: "Practice",
      About: "About",
      Liked_Only: "Show liked only",
      Hiragana20: "Hiragana 20 Questions",
      Hiragana20_Description: `Practice Hiragana for 20 questions to test your accuracy of identifying Hiragana characters. Only non-combination characters will be tested. For example, "きょ" will not be tested`,
      Katakana20: "Katakana 20 Questions",
      Katakana20_Description: `Practice Katakana for 20 questions to test your accuracy of identifying Katakana characters. Only non-combination characters will be tested. For example, "ファ" will not be tested`,
      Performance: "Performance",
      Practice_Help: "Practice Help",
      Practice_Help_Text1:
        "To select a game, click on their corresponding card.",
      Practice_Help_Text2:
        "Games can be favourited by clicking on the heart icon.",
      Practice_Help_Text3: `To only show favourited games, enable the "Show liked only" option in the top right.`,
      Done: "Done",
      Results: "Results",
      Not_Enough_Data: "Not Enough Data!",
      Not_Enough_Data_Details:
        "Please return after you have practiced 3 or more times.",
      How_Read_Graph: "How to Read the Graph",
      How_Read_Graph_X:
        "The x-axis of the graph represents the results of the last 10 games. In particular, 1 is the least recent game, while 10 is the most recent game. Only the last 10 games are recorded.",
      How_Read_Graph_Y:
        "The y-axis of the graph represents the score from the game of the corresponding x-value. This is represented in percentage.",
      Overall_Accuracy: "Overall accuracy",
      Character: "Character",
      Correct_Answer: "Correct Answer",
      Response: "Response",
      Play_Again: "Play Again"
    },
  },
  fr: {
    translation: {
      Learn: "Apprendre",
      Tutors: "Tuteurs",
      Practice: "Practiquer",
      About: "À propos",
      Liked_Only: "Afficher aimé seulement",
      Hiragana20: "Hiragana 20 Questions",
      Hiragana20_Description: `Pratiquez Hiragana pour 20 questions pour tester votre précision d'identification des caractères Hiragana. Seuls les caractères non combinés seront testés. Par exemple, "きょ" ne sera pas testé.`,
      Katakana20: "Katakana 20 Questions",
      Katakana20_Description: `Pratiquez le katakana pour 20 questions pour tester votre précision d'identification des caractères katakana. Seuls les caractères non combinés seront testés. Par exemple, "ファ" ne sera pas testé.`,
      Performance: "Performance",
      Practice_Help: "Aide à la pratique",
      Practice_Help_Text1:
        "Pour sélectionner un jeu, cliquez sur la carte correspondante.",
      Practice_Help_Text2:
        "Les jeux peuvent être favoris en cliquant sur l'icône en forme de cœur.",
      Practice_Help_Text3: `Pour afficher uniquement les jeux favoris, activez l'option "Afficher uniquement les jeux préférés" en haut à droite.`,
      Done: "Terminé",
      Results: "Résultats",
      Not_Enough_Data: "Pas assez de données!",
      Not_Enough_Data_Details:
        "Veuillez revenir après avoir pratiqué 3 fois ou plus.",
      How_Read_Graph: "Comment lire le graphique",
      How_Read_Graph_X:
        "L'axe des abscisses du graphique représente les résultats des 10 derniers matchs. En particulier, 1 est le jeu le moins récent, tandis que 10 est le jeu le plus récent. Seuls les 10 derniers matchs sont enregistrés.",
      How_Read_Graph_Y:
        "L'axe des y du graphique représente le score du jeu de la valeur x correspondante. Ceci est représenté en pourcentage.",
      Overall_Accuracy: "Précision globale",
      Character: "Lettre",
      Correct_Answer: "Bonne réponse",
      Response: "Réponse",
      Play_Again: "Rejouer",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: Localization.locale,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
