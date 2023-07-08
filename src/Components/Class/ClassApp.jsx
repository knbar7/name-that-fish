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
    showFinalScore: false,
    fishIndex: 0,
    answer: "",
  };

  incrementCount = (countType) => {
    this.setState((prevState) => ({
      [countType]: prevState[countType] + 1,
    }));
  };

  changeFish = () => {
    this.setState((prevState) => ({
      fishIndex: prevState.fishIndex + 1,
    }));
  };

  handleFinalScore = () => {
    this.setState({
      showFinalScore: true,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { fishIndex, answer } = this.state;
  
    if (initialFishes[fishIndex]?.name === answer) {
      this.incrementCount("correctCount");
    } else {
      this.incrementCount("incorrectCount");
    }
    if (fishIndex < initialFishes.length - 1) {
      this.changeFish();
      this.setState({
        answer: "",
      });
    } else {
      this.handleFinalScore();
      this.setState({
        showFinalScore: true, // Set showFinalScore to true
      });
    }
  };
  
  

  render() {
    const { incorrectCount, correctCount, showFinalScore, fishIndex, answer } =
      this.state;

    const totalCount = initialFishes.length;

    return (
      <>
        {showFinalScore ? (
          <ClassFinalScore
            incorrectCount={incorrectCount}
            correctCount={correctCount}
            totalCount={totalCount}
          />
        ) : (
          <>
            <ClassScoreBoard
              incorrectCount={incorrectCount}
              correctCount={correctCount}
              incrementCount={this.incrementCount}
            />
            <ClassGameBoard
              fish={initialFishes[fishIndex]}
              onSubmit={this.submitHandler}
              answer={answer}
              setAnswer={(value) => this.setState({ answer: value })}
            />
          </>
        )}
      </>
    );
  }
}
