import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // example of guesses state - [{ word: 'WORLD', id: sadl-asdl-... }, { word: 'HELLO' id: sadl-asdl-... }]
  const [guesses, setGuesses] = React.useState([]);

  const addGuessHandler = (word) => {
    const nextGuesses = [...guesses, word];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuessHandler={addGuessHandler} />
    </>
  );
}

export default Game;
