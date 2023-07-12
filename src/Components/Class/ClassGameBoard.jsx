import React, { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    answer: "",
  };

  render() {
    const { fish, handleAnswer } = this.props;

    const changeAnswer = (e) => {
      this.setState({ answer: e.target.value });
    };

    const onSubmit = (e) => {
      e.preventDefault();
      handleAnswer(this.state.answer);
      this.setState({ answer: "" });
    };

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fish ? fish.url : null} alt={fish ? fish.name : null} />
        </div>
        <form id="fish-guess-form" onSubmit={onSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.answer}
            onChange={changeAnswer}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
