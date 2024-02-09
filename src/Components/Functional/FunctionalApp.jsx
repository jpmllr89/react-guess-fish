import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { React, useState } from "react";
import { initialFishes } from "../../data/fishes";

export function FunctionalApp() {
  const [score, setScore] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const guesses = score + wrongGuesses;
  const gameOver = guesses === initialFishes.length;
  const answersLeft = initialFishes.map((fish) => fish.name).slice(guesses);

  return (
    <>
      {gameOver ? (
        <FunctionalFinalScore score={score} wrongGuesses={wrongGuesses} />
      ) : (
        <>
          <FunctionalScoreBoard
            score={score}
            wrongGuesses={wrongGuesses}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard
            setScore={setScore}
            setWrongGuesses={setWrongGuesses}
            nextFishToName={initialFishes[guesses]}
          />
        </>
      )}
    </>
  );
}
