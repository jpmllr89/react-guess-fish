import "./styles/game-board.css";
import { React, useState } from "react";
import { initialFishes } from "../../data/fishes";

export function FunctionalGameBoard({
  setScore,
  setWrongGuesses,
  wrongGuesses,
  score,
  setAnswersLeft,
  answersLeft,
}) {
  const [fishes, setFishes] = useState(0);

  const [input, setInput] = useState("");

  const nextFishToName =
    fishes < initialFishes.length ? initialFishes[fishes] : null;

  function handleTextInput(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    determineScore(input);
    setInput("");
    if (nextFishToName) {
      setFishes(fishes + 1);
    }
  }

  function determineScore(input) {
    if (input === nextFishToName.name) {
      setScore(score + 1);
    } else {
      setWrongGuesses(wrongGuesses + 1);
    }
    setAnswersLeft(answersLeft.slice(1));
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        {nextFishToName && (
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        )}
      </div>
      <form id="fish-guess-form">
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          onChange={handleTextInput}
          value={input}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}
