import React from 'react';
import { checkGuess } from '../../game-helpers';

function Guess({ word, answer }) {
  let letters;

  if (word) {
    letters = word.split('');
  } else {
    // we want the cells to be shown even before 
    // the player guess a word, hence 5 white spaces
    letters = [" ", " ", " ", " ", " "];
  }

  // checkGuess will only run when there is a new guess word
  const result = checkGuess(word, answer);

  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span key={index} className={result ? `cell ${result[index]['status']}` : "cell"}>{letter}</span>)
      )}
    </p>
  );
}

export default React.memo(Guess);
