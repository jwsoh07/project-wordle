import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  return (
    <form className="guess-input-wrapper" onSubmit={(e) => {
      e.preventDefault();
      console.log({ guess })
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        maxLength={5}
        pattern=".{5,}"
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
