import React from 'react';

function GuessInput({ addGuessHandler }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => {
      e.preventDefault();
      addGuessHandler(tentativeGuess);
      setTentativeGuess('');
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={tentativeGuess}
        maxLength={5}
        pattern=".{5,}"
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
