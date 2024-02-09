import "./styles/game-board.css";
import { React, useState } from "react";

export function FunctionalGameBoard({
  setScore,
  setWrongGuesses,
  nextFishToName,
}) {
  const [input, setInput] = useState("");

  function handleTextInput(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e, fishes) {
    e.preventDefault();
    determineScore(input);
    setInput("");
  }

  function determineScore(input) {
    if (input === nextFishToName.name) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setWrongGuesses((prevWrongGuesses) => prevWrongGuesses + 1);
    }
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
