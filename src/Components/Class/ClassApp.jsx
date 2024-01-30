import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      score: 0,
      wrongGuesses: 0,
      answersLeft: ["trout", "salmon", "tuna", "shark"],
      gameOver: false,
      input: "",
      answer: "",
    };
  }

  updateScore = (score) => {
    this.setState(prevState => ({ score: prevState.score +1 }));
  }

  updateWrongGuesses = (wrongGuesses) => {
    this.setState(prevState => ({wrongGuesses: prevState.wrongGuesses +1 }));
  }

  updateAnswersLeft = (answersLeft) => {
    this.setState({ answersLeft: this.state.answersLeft.filter(answer => answer !== this.state.input) });
  }
  
  updateGameOver = (gameOver) => {
    this.setState({ gameOver: !this.state.gameOver });
  }

  updateInput = (input) => {
    this.setState({ input: input });
  }

  updateAnswer = (answer) => {
    this.setState({ answer: answer });
  }

  render() {
    return (
      <>
      {this.state.gameOver ?
        
        <ClassFinalScore 
          score = {this.state.score}
          wrongGuesses = {this.state.wrongGuesses}
        />
        : 
        <>
            <ClassScoreBoard 
              score = {this.state.score}
              wrongGuesses={this.state.wrongGuesses}
              answersLeft={this.state.answersLeft}
            />
            <ClassGameBoard 
              updateScore={this.updateScore} 
              updateWrongGuesses={this.updateWrongGuesses} 
              updateInput={this.updateInput}
              input = {this.state.input}
              answer = {this.state.answer}
              updateAnswer = {this.updateAnswer}
              score = {this.state.score}
              wrongGuesses = {this.state.wrongGuesses}
              updateAnswersLeft = {this.updateAnswersLeft}
              answersLeft = {this.state.answersLeft}
              gameOver = {this.state.gameOver}
              updateGameOver = {this.updateGameOver}
            />
          </>
      }
      </>
    );
  }
}
