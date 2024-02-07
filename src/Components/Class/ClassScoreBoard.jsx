import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  render() {
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {this.props.wrongGuesses}</div>
        <div id="choices-left">
          {this.props.answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {this.props.score}</div>
      </div>
    );
  }
}
