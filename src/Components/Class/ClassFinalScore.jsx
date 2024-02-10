import { React, Component } from "react";
import "./styles/final-score.css";

export class ClassFinalScore extends Component {
  render() {
    const { score, wrongGuesses } = this.props;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{score}</p>
          <hr />
          <p>{score + wrongGuesses}</p>
        </div>
      </div>
    );
  }
}
