import { React, Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../data/fishes";

export class ClassApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      wrongGuesses: 0,
    };
  }

  updateScore = () => {
    this.setState((prevState) => ({ score: prevState.score + 1 }));
  };

  updateWrongGuesses = () => {
    this.setState((prevState) => ({
      wrongGuesses: prevState.wrongGuesses + 1,
    }));
  };

  render() {
    const { score, wrongGuesses } = this.state;
    const guesses = score + wrongGuesses;
    const gameOver = guesses === initialFishes.length;
    const answersLeft = initialFishes.map((fish) => fish.name).slice(guesses);

    return (
      <>
        {gameOver ? (
          <ClassFinalScore
            score={this.state.score}
            wrongGuesses={this.state.wrongGuesses}
          />
        ) : (
          <>
            <ClassScoreBoard
              score={this.state.score}
              wrongGuesses={this.state.wrongGuesses}
              answersLeft={answersLeft}
            />
            <ClassGameBoard
              updateScore={this.updateScore}
              updateWrongGuesses={this.updateWrongGuesses}
              nextFishToName={initialFishes[guesses]}
            />
          </>
        )}
      </>
    );
  }
}
