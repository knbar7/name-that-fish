import React, { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    fishIndex: 0,
  };

  handleAnswer = (fishName) => {
    if (fishName === initialFishes[this.state.fishIndex].name) {
      this.setState((prevState) => ({
        correctCount: prevState.correctCount + 1,
      }));
    } else {
      this.setState((prevState) => ({
        incorrectCount: prevState.incorrectCount + 1,
      }));
    }
    this.setState((prevState) => ({
      fishIndex: prevState.fishIndex + 1,
    }));
  };
  

  render() {
    const { incorrectCount, correctCount, fishIndex } = this.state;
    const totalCount = initialFishes.length;
    const showFinalScore = this.state.fishIndex === initialFishes.length;

    const fishRemaining = initialFishes
      .filter((_, index) => index >= fishIndex)
      .map((fish) => fish.name);

    return (
      <>
        {showFinalScore ? (
          <ClassFinalScore
            correctCount={correctCount}
            totalCount={totalCount}
          />
        ) : (
          <>
            <ClassScoreBoard
              incorrectCount={incorrectCount}
              correctCount={correctCount}
              fishRemaining={fishRemaining}
            />
            <ClassGameBoard
              fish={initialFishes[fishIndex]}
              handleAnswer={this.handleAnswer}
            />
          </>
        )}
      </>
    );
  }
}
