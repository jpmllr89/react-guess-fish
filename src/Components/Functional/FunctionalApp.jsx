import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [score, setScore] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [answersLeft, setAnswersLeft] = useState(
    initialFishes.map((fish) => fish.name)
  );
  // const [gameOver, setGameOver] = useState(false);

  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const guesses = score + wrongGuesses;
  const gameOver = guesses === initialFishes.length;

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
            wrongGuesses={wrongGuesses}
          />
        </>
      )}
    </>
  );
}
