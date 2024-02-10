import { React, Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  render() {
    const { answersLeft, wrongGuesses, score } = this.props;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {wrongGuesses}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {score}</div>
      </div>
    );
  }
}
