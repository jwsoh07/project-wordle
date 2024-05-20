import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import GuessBanner from '../GuessBanner/GuessBanner';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running | won | lost
  const [status, setStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  const addGuessHandler = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    updateGameStatus(tentativeGuess, nextGuesses);
  }

  const updateGameStatus = (tentativeGuess, nextGuesses) => {
    if (tentativeGuess === answer) {
      setStatus('won')
    } else if (nextGuesses.length == 6 && !nextGuesses.includes(answer)) {
      setStatus('lost')
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput status={status} addGuessHandler={addGuessHandler} />
      {status === 'won' && <WonBanner numGuesses={guesses.length} />}
      {status === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
