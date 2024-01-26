import "./styles/score-board.css";
//  Where the score is presented



export function FunctionalScoreBoard({score, wrongGuesses, answersLeft}) {
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
