import React, { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

export class ClassGameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      initialFishes: [
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
      ],
      fishes: 0,
      nextFishToName: null, // Change 1 to null
    };

    this.state.nextFishToName = this.state.initialFishes[0];
  }

  handleTextInput = (e) => {
    this.setState({ inputValue: e.target.value });
    this.props.updateInput(e.target.value);
  };

  determineScore = () => {
    const { input, updateScore, updateAnswersLeft, wrongGuesses, answersLeft, score, gameOver } = this.props;
    const { nextFishToName } = this.state;

   if(!gameOver){
    if (input === nextFishToName.name) {
      updateScore(score + 1);

    } else {
      this.props.updateWrongGuesses(wrongGuesses + 1);

    }
    updateAnswersLeft(answersLeft.slice(1));
   }
    
    
  };

  gameState = () => {
    const { wrongGuesses, answersLeft, updateGameOver, gameOver } = this.props;

    if (wrongGuesses === 3 || answersLeft.length === 1) {
      updateGameOver(true);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.determineScore();
    this.gameState();
  
    const { fishes } = this.state;
  
    // Check if there are more fishes left
    if (fishes < this.state.initialFishes.length - 1) {
      const nextFishToName = this.state.initialFishes[fishes + 1];
      this.setState({ fishes: fishes + 1, nextFishToName });
      this.gameState();
    }
    this.setState({ inputValue: "" });
  };
  

  render() {
    const { nextFishToName } = this.state;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName ? nextFishToName.url : null} alt={nextFishToName ? nextFishToName.name : null} />
        </div>
        <form id="fish-guess-form">
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input type="text" name="fish-guess" onChange={this.handleTextInput} value={this.state.inputValue} />
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
