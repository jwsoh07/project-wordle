import React from 'react';

function GuessBanner({ type, numGuesses }) {
  let contents;

  if (type === "happy") {
    contents = (
      <p>
        <strong>Congratulations!</strong> Got it in {' '}
        <strong>{numGuesses} guesses</strong>.
      </p>
    )

  } else if (type === "sad") {
    contents = (
      <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
    )
  }

  return (
    <div className={`${type} banner`}>{contents}</div>
  );
}

export default GuessBanner;
