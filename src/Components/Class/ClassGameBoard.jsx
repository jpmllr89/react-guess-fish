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

  // Called when the input changes in the box
  handleTextInput = (e) => {
    this.setState({ inputValue: e.target.value });
    this.setState({ input: e.target.value });
  };

  // Call when the form is submitted to add the score
  determineScore = () => {
    const {
      updateScore,
      nextFishToName,
      updateWrongGuesses,
      wrongGuesses,
      score,
    } = this.props;
    const { input } = this.state;

    if (input === nextFishToName.name) {
      updateScore(score + 1);
    } else {
      updateWrongGuesses(wrongGuesses + 1);
    }
  };

  // Below function will be called when the form is submitted
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ inputValue: "" });
    this.determineScore();
  };

  render() {
    const { nextFishToName } = this.props;
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
