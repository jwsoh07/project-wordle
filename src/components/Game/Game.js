import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
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
  const [answer, setAnswer] = React.useState(sample(WORDS));

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

  const restartGame = () => {
    setGuesses([]);
    setStatus('running');
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput status={status} addGuessHandler={addGuessHandler} />
      {status === 'won' && <WonBanner numGuesses={guesses.length} />}
      {status === 'lost' && <LostBanner answer={answer} />}
      {status !== 'running' &&
        <button
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            border: '1px solid black',
            borderRadius: '3px',
            padding: '5px 15px'
          }}
          onClick={restartGame}
        >Restart
        </button>}
    </>
  );
}

export default Game;
