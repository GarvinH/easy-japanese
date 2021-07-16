import React from "react";
import _ from "lodash";
import { StyleSheet, View, Text } from "react-native";
import { Paragraph, Title } from "react-native-paper";
import { KanaProps } from "./Characters/Kana";
import Game from "./Game";
import { FlatList } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../../components/Button";
import i18n from "../../i18n";

interface GoalGameProps {
  characterSet: KanaProps[];
  onFinish: (results: number) => void;
}

const maxNumQuestions = 20;

interface HistoryProps {
  answer: KanaProps | undefined; //what the question was
  response: KanaProps | undefined; //what the user responded
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

  replay = () => {
    this.setState({
      questionNum: 1,
      numCorrect: 0,
      history: [],
    });
    this.updateAnswerSet();
  };

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
          answer: prevState.answer,
          response: prevState.answer,
          id: prevState.questionNum.toString(),
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
        {
          answer: prevState.answer,
          response: response,
          id: prevState.questionNum.toString(),
        },
      ],
    }));
    this.updateAnswerSet();
  };

  componentDidUpdate(prevProps: GoalGameProps, prevState: GoalGameState) {
    const { questionNum, numCorrect } = this.state;
    const { questionNum: prevQuestionNum } = prevState;
    if (questionNum !== prevQuestionNum && questionNum > maxNumQuestions) {
      this.props.onFinish((numCorrect / maxNumQuestions) * 100);
    }
  }

  render() {
    const { answer, answerSet, questionNum, numCorrect, history } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {questionNum <= maxNumQuestions ? (
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
        ) : (
          <View style={{ flex: 1 }}>
            <View style={styles.top}>
              <Title>{i18n.t("Results")}</Title>
              <Paragraph>
              {i18n.t("Overall_Accuracy")}: {(numCorrect / maxNumQuestions) * 100}%
              </Paragraph>
            </View>
            <FlatList
              data={history}
              renderItem={({ item }) => (
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.resultsCol}>
                    <Paragraph>{item.answer.character}</Paragraph>
                  </View>
                  <View style={styles.resultsCol}>
                    <Paragraph>{item.answer.romanization}</Paragraph>
                  </View>
                  <View style={styles.resultsCol}>
                    <Paragraph>{item.response.romanization}</Paragraph>
                  </View>
                  <View style={styles.resultsCol}>
                    {item.answer.char_id == item.response.char_id ? (
                      <FontAwesome name="check" />
                    ) : (
                      <FontAwesome name="close" />
                    )}
                  </View>
                </View>
              )}
              ListHeaderComponent={() => (
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.resultsCol}>
                    <Paragraph style={styles.resultsHeader}>
                      {i18n.t("Character")}
                    </Paragraph>
                  </View>
                  <View style={styles.resultsCol}>
                    <Paragraph style={styles.resultsHeader}>
                      {i18n.t("Correct_Answer")}
                    </Paragraph>
                  </View>
                  <View style={styles.resultsCol}>
                    <Paragraph style={styles.resultsHeader}>
                      {i18n.t("Response")}
                    </Paragraph>
                  </View>
                  <View style={styles.resultsCol}></View>
                </View>
              )}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    borderBottomColor: "rgba(0,0,0,0.5)",
                    borderBottomWidth: 0.5,
                  }}
                />
              )}
            />
            <View style={{ marginTop: 10 }}>
              <Button
                text={i18n.t("Play_Again")}
                icon="refresh"
                onPress={this.replay}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    alignItems: "center",
    paddingVertical: 10,
  },
  resultsCol: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  resultsHeader: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default GoalGame;
