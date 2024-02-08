import { React, Component } from "react";
import "./styles/final-score.css";

export class ClassFinalScore extends Component {
  render() {
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{this.props.score}</p>
          <hr />
          <p>{this.props.score + this.props.wrongGuesses}</p>
        </div>
      </div>
    );
  }
}
