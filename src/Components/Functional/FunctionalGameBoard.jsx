import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

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

export function FunctionalGameBoard({setScore, setWrongGuesses, input, wrongGuesses, setInput, score, setAnswersLeft, answersLeft, gameOver, setGameOver}) {
  
  const [fishes, setFishes] = useState(0);
  
  const nextFishToName = fishes < initialFishes.length ? initialFishes[fishes] : null;

  function handleTextInput(e){
    setInput(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    determineScore(input);
    if (nextFishToName){
      setFishes(fishes + 1);
      gameState();
    };
  }

  function determineScore(input){
    if (input === nextFishToName.name){
      setScore(score + 1);
      console.log("correct!", score)
      setAnswersLeft(answersLeft.filter((answer) => answer !== input));
    } else {
      setWrongGuesses(wrongGuesses + 1);
      console.log("incorrect", wrongGuesses)
    }
  }

  function gameState(){
    if (wrongGuesses === 3 || answersLeft.length === 1){
      setGameOver(true);
      console.log("game over", gameOver)
    }
    console.log("gamestate checked", gameOver)
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        {nextFishToName && <img src={nextFishToName.url} alt={nextFishToName.name} />}      
      </div>
      <form id="fish-guess-form">
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" onChange={handleTextInput}/>
        <input type="submit"  onClick={handleSubmit}/>
      </form>
    </div>
  );
}
