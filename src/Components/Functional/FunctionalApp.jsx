import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [score, setScore] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [answersLeft, setAnswersLeft] = useState(["trout", "salmon", "tuna", "shark"]);
  const [gameOver, setGameOver] = useState(false);

  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  

  return (
    <>
    {gameOver ? 
      <FunctionalFinalScore 
        score = {score}
        wrongGuesses={wrongGuesses}
      />:
      <>
        <FunctionalScoreBoard 
          score = {score}
          wrongGuesses={wrongGuesses}
          answersLeft={answersLeft}
        />
        <FunctionalGameBoard 
          setScore={setScore} 
          setWrongGuesses={setWrongGuesses} 
          setInput={setInput}
          input = {input}
          answer = {answer}
          setAnswer = {setAnswer}
          score = {score}
          wrongGuesses = {wrongGuesses}
          setAnswersLeft = {setAnswersLeft}
          answersLeft = {answersLeft}
          gameOver = {gameOver}
          setGameOver = {setGameOver}
        />
      </>
      }
     
      
    </>
  );
}
