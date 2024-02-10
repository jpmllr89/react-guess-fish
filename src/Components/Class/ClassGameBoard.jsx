import "./styles/game-board.css";
import { React, Component } from "react";

export class ClassGameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      inputValue: "",
    };
  }

  updateInput = (input) => {
    this.setState({ input: input });
  };

  handleTextInput = (e) => {
    this.setState({ inputValue: e.target.value });
    this.updateInput(e.target.value);
    // console.log(this.state.nextFishToName.name);
  };

  determineScore = () => {
    const { updateScore, nextFishToName, wrongGuesses, score } = this.props;
    const { input } = this.state;

    if (input === nextFishToName.name) {
      updateScore(score + 1);
    } else {
      this.props.updateWrongGuesses(wrongGuesses + 1);
    }

    // updateAnswersLeft();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.determineScore();
    this.setState({ inputValue: "" });
  };

  render() {
    const { nextFishToName } = this.props;
    console.log(nextFishToName);
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
            onChange={this.handleTextInput}
            value={this.state.inputValue}
          />
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
