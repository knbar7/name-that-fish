import "./styles/score-board.css";
//  Where the score is presented

export const FunctionalScoreBoard = ({ correctCount, incorrectCount, fishRemaining }) => {
  return(
  <div id="score-board">
    <div>Incorrect 🔻: {incorrectCount}</div>
    <div id="choices-left">
      {fishRemaining.map((answer) => (
        <div key={answer} className="choice">
          {answer}
        </div>
      ))}
    </div>
    <div>Correct ✅: {correctCount}</div>
  </div>
  )
};
