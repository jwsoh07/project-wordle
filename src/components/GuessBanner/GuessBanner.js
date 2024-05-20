import React from 'react';

function GuessBanner({ type, numGuesses, answer }) {
  let contents;

  if (type === "happy") {
    contents = (
      <p>
        <strong>Congratulations!</strong> Got it in {' '}
        <strong>{numGuesses === 1
          ? "1 guess"
          : `${numGuesses} guesses`}
        </strong>.
      </p>
    )

  } else if (type === "sad") {
    contents = (
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    )
  }

  return (
    <div className={`${type} banner`}>{contents}</div>
  );
}

export default GuessBanner;
