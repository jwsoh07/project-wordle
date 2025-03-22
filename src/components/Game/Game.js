import React from "react";
import Banner from "../Banner";
import GuessInput from "../GuessInput";
import Keyboard from "../Keyboard/Keyboard";

import { checkGuess, generateInitialLetterStatuses } from "../../game-helpers";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Letter from "../Letter";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guess, setGuess] = React.useState("");
  const [results, setResults] = React.useState([
    { word: "", statuses: [] },
    { word: "", statuses: [] },
    { word: "", statuses: [] },
    { word: "", statuses: [] },
    { word: "", statuses: [] },
    { word: "", statuses: [] },
  ]);
  const [letterStatuses, setLetterStatuses] = React.useState(() =>
    generateInitialLetterStatuses()
  );
  const [numAttempts, setNumAttempts] = React.useState(0);

  const lastGuessedWord =
    numAttempts > 0 ? results[numAttempts - 1]["word"] : "";
  const gameEnded =
    lastGuessedWord === answer || numAttempts === NUM_OF_GUESSES_ALLOWED;

  const displayedResults = results.slice(0, NUM_OF_GUESSES_ALLOWED);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextResults = [...results];
    const statuses = checkGuess(guess, answer);

    nextResults[numAttempts] = {
      word: guess,
      statuses: statuses,
    };

    setResults(nextResults);

    const nextLetterStatuses = { ...letterStatuses };

    statuses.forEach(({ letter, status }) => {
      nextLetterStatuses[letter] = status;
    });

    setLetterStatuses(nextLetterStatuses);
    setNumAttempts(numAttempts + 1);
    setGuess("");
  };

  const restartGame = () => {
    const initialResults = new Array(6).fill({ word: "", statuses: [] });
    setResults(initialResults);
    setNumAttempts(0);
    setGuess("");
    setLetterStatuses(generateInitialLetterStatuses());

    const nextAnswer = sample(WORDS);
    setAnswer(nextAnswer);
    console.log(nextAnswer);
  };

  console.log(answer);

  return (
    <>
      <div className="guess-results">
        {displayedResults.map(({ word, statuses }, wordIndex) => {
          let letters = word !== "" ? word : "     ";

          return (
            <p key={wordIndex} className="guess">
              {letters.split("").map((letter, letterIndex) => {
                const letterStatus = statuses[letterIndex]?.status ?? "";

                return (
                  <Letter key={letterIndex} status={letterStatus}>
                    {letter}
                  </Letter>
                );
              })}
            </p>
          );
        })}
      </div>
      <GuessInput
        handleSubmit={handleSubmit}
        setGuess={setGuess}
        guess={guess}
      />
      {/* If I decided to implement the keyboard feature
          then I can consider placing it here.
      */}
      <Keyboard letterStatuses={letterStatuses} />

      {gameEnded &&
        (lastGuessedWord === answer ? (
          <Banner
            type="happy"
            buttonText="restart"
            buttonClickHandler={restartGame}
          >
            <strong>Congratulations!</strong> Got it in
            <strong> {numAttempts} guesses</strong>
          </Banner>
        ) : (
          <Banner
            type="sad"
            buttonText="restart"
            buttonClickHandler={restartGame}
          >
            Sorry, the correct answer is <strong>{answer}</strong>.
          </Banner>
        ))}
    </>
  );
}

export default Game;
