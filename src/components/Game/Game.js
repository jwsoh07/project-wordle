import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import GuessBanner from '../GuessBanner/GuessBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const addGuessHandler = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
  }

  // display end of game results
  let banner;

  if (guesses[guesses.length - 1] === answer) {
    banner = <GuessBanner type="happy" numGuesses={guesses.length} />;
  }

  if (guesses.length == 6 && !guesses.includes(answer)) {
    banner = <GuessBanner type="sad" />
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput isGameOver={banner != undefined} addGuessHandler={addGuessHandler} />
      {banner}
    </>
  );
}

export default Game;
