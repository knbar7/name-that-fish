import { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
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

export function FunctionalApp() {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [fishIndex, setFishIndex] = useState(0);

  const fishRemaining = initialFishes
  .filter((_, index) => index >= fishIndex)
  .map((fish) => fish.name);

  const showFinalScore = fishIndex === initialFishes.length;
  const totalCount = initialFishes.length;

  const handleAnswer = (fishName) => {
    if (fishName === initialFishes[fishIndex].name) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    setFishIndex(fishIndex + 1);
  };

  return (
    <>
      {showFinalScore ? (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={totalCount}
        />
      ) : (
        <>
          <FunctionalScoreBoard
            incorrectCount={incorrectCount}
            correctCount={correctCount}
            fishRemaining={fishRemaining}
          />
          <FunctionalGameBoard
            fish={initialFishes[fishIndex]}
            handleAnswer={handleAnswer}
          />
        </>
      )}
    </>
  );
}
