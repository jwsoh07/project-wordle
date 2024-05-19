import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => {
        // since the order of the guesses won't change, 
        // it's safe to use the index for the keys.
        return <p key={index} className="guess">{guess.word}</p>
      })}
    </div>
  );
}

export default GuessResults;
