import React, { useState } from 'react';
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
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [fishIndex, setFishIndex] = useState(0);
  const [answer, setAnswer] = useState(''); // Add the answer state

  const totalCount = initialFishes.length;

  const incrementCount = (countType) => {
    if (countType === 'incorrectCount') {
      setIncorrectCount((prevCount) => prevCount + 1);
    } else if (countType === 'correctCount') {
      setCorrectCount((prevCount) => prevCount + 1);
    }
  };

  const changeFish = () => {
    setFishIndex((prevIndex) => prevIndex + 1);
  };

  const handleFinalScore = () => {
    setShowFinalScore(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (initialFishes[fishIndex]?.name === answer) {
      incrementCount('correctCount');
    } else {
      incrementCount('incorrectCount');
    }
    if (fishIndex >= initialFishes.length - 1) {
      handleFinalScore();
    } else {
    changeFish();
    setAnswer('');
    }
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
            incrementCount={incrementCount}
          />
          <FunctionalGameBoard
            fish={initialFishes[fishIndex]}
            onSubmit={submitHandler}
            answer={answer}
            setAnswer={setAnswer} // Pass the setAnswer function as a prop
          />
        </>
      )}
    </>
  );
}
