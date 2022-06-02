import React from "react";

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>Congratulations You Won the Game</h1>
          <p className="solution">{solution}</p>
          <p>You Found the Solution in "{turn}" Guesses</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Never Mind!</h1>
          <p className="solution">Actual Solution is: {solution}</p>
          <p>Better Luck Next Time</p>
        </div>
      )}
    </div>
  );
}
