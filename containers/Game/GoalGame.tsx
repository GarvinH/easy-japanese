import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import _ from "lodash";
import { StyleSheet, View, Text } from "react-native";
import { Title } from "react-native-paper";
import { KanaProps } from "./Characters/Kana";
import Game from "./Game";
import { KanaAnswerSet } from "./shared";
import { useEffect } from "react";

interface GoalGameProps {
  characterSet: KanaProps[];
}

const maxNumQuestions = 20;

interface HistoryProps {
  answerId: string | undefined; //what the question was
  responseId: string | undefined; //what the user responded
}

interface GoalGameState {
  questionNum: number;
  numCorrect: number;
  answerSet: KanaProps[];
  answer: KanaProps | undefined;
  history: HistoryProps[];
}

const hasDuplicates = (arr: any[]) => _.uniq(arr).length !== arr.length;

class GoalGame extends React.Component<GoalGameProps, GoalGameState> {
  constructor(props: GoalGameProps) {
    super(props);

    const { characterSet } = props;
    let newAnswerSet = _.sampleSize(characterSet, 4);

    while (hasDuplicates(newAnswerSet)) {
      newAnswerSet = _.sampleSize(characterSet, 4);
    }

    this.state = {
      questionNum: 1,
      numCorrect: 0,
      answerSet: newAnswerSet,
      answer: _.sample(newAnswerSet),
      history: [],
    };
  }

  updateAnswerSet = () => {
    const { characterSet } = this.props;
    let newAnswerSet = _.sampleSize(characterSet, 4);
    while (hasDuplicates(newAnswerSet)) {
      newAnswerSet = _.sampleSize(characterSet, 4);
    }
    this.setState({ answer: _.sample(newAnswerSet), answerSet: newAnswerSet });
  };

  onCorrect = () => {
    this.setState((prevState) => ({
      questionNum: prevState.questionNum + 1,
      numCorrect: prevState.numCorrect + 1,
      history: [
        ...prevState.history,
        {
          answerId: prevState.answer?.char_id,
          responseId: prevState.answer?.char_id,
        },
      ],
    }));
    this.updateAnswerSet();
  };

  onIncorrect = (response: KanaProps) => {
    this.setState((prevState) => ({
      questionNum: prevState.questionNum + 1,
      history: [
        ...prevState.history,
        { answerId: prevState.answer?.char_id, responseId: response.char_id },
      ],
    }));
    this.updateAnswerSet();
  };

  render() {
    const { answer, answerSet, questionNum } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.top}>
          <Title>
            {questionNum}/{maxNumQuestions}
          </Title>
        </View>
        <Game
          {...{
            answer,
            answerSet,
            onCorrect: this.onCorrect,
            onIncorrect: this.onIncorrect,
          }}
        />
      </View>
    );
  }
}

// const GoalGame = ({ characterSet }: GoalGame) => {
//   const [questionNum, setQuestionNum] = useState<number>(1);
//   const [numCorrect, setNumCorrect] = useState<number>(0);
//   const [answerSet, setAnswerSet] = useState<KanaProps[]>([]);
//   const [answer, setAnswer] = useState<KanaProps>();
//   const [history, setHistory] = useState<HistoryProps[]>([]);

//   useEffect(() => {
//     updateAnswerSet()
//   }, [])

//   const updateAnswerSet = useCallback(() => {

//   }, []);

//   const onCorrect = useCallback(() => {

//   }, []);

//   const onIncorrect = useCallback((response: KanaProps) => {
//     setQuestionNum(questionNum + 1);
//     setNumCorrect(numCorrect + 1);
//     setHistory([...history, {answerId: answer?.char_id, responseId: response?.char_id}])
//     updateAnswerSet();
//   }, [])

//   return (

//   );
// };

const styles = StyleSheet.create({
  top: {
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default GoalGame;
