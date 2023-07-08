import "./styles/score-board.css";
//  Where the score is presented

const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard(props) {

  const correctCount = props.correctCount;
  const incorrectCount = props.incorrectCount;

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
