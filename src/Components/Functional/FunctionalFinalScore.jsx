import "./styles/final-score.css";

export function FunctionalFinalScore({ wrongGuesses, score }) {
  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{score}</p>
        <hr />
        <p>{wrongGuesses + score}</p>
      </div>
    </div>
  );
}
