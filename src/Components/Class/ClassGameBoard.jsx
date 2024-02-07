import React, { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { initialFishes } from "../../data/fishes";

export class ClassGameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      inputValue: "",
      initialFishes: initialFishes,
      fishes: 0,
      nextFishToName: null, // Change 1 to null
    };

    this.state.nextFishToName = this.state.initialFishes[0];
  }

  updateInput = (input) => {
    this.setState({ input: input });
  };

  handleTextInput = (e) => {
    this.setState({ inputValue: e.target.value });
    this.updateInput(e.target.value);
    console.log(this.state.nextFishToName.name);
  };

  determineScore = () => {
    const {
      updateScore,
      updateAnswersLeft,
      wrongGuesses,
      answersLeft,
      score,
      gameOver,
    } = this.props;
    const { input, nextFishToName } = this.state;

    if (!gameOver) {
      if (input === nextFishToName.name) {
        updateScore(score + 1);
      } else {
        this.props.updateWrongGuesses(wrongGuesses + 1);
      }
    }
    updateAnswersLeft(answersLeft.slice(1));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.determineScore();

    const { fishes } = this.state;
    this.setState({ inputValue: "" });

    // Check if there are more fishes left
    if (fishes < this.state.initialFishes.length - 1) {
      const nextFishToName = this.state.initialFishes[fishes + 1];
      this.setState({ fishes: fishes + 1, nextFishToName });
    }
  };

  render() {
    const { nextFishToName } =
      this.state.fishes < this.state.initialFishes.length ? this.state : null;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img
            src={nextFishToName ? nextFishToName.url : null}
            alt={nextFishToName ? nextFishToName.name : null}
          />
        </div>
        <form id="fish-guess-form">
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            onChange={this.handleTextInput}
            value={this.state.inputValue}
          />
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
