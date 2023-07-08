import React, { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

export class ClassGameBoard extends Component {
  render() {
    const { fish, answer, setAnswer, onSubmit } = this.props;

    const changeAnswer = (e) => {
      setAnswer(e.target.value);
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
            value={answer}
            onChange={changeAnswer}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
