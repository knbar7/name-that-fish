import React from "react";

export function FunctionalGameBoard(props) {
  const { answer, setAnswer, fish, onSubmit } = props; // Destructure the props

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
          onChange={changeAnswer} // Use the changeAnswer function to update the answer
        />
        <input type="submit" />
      </form>
    </div>
  );
}
