import React from "react";

function GuessInput({ handleSubmit, setGuess, guess }) {
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="[A-Za-z]{5}"
        maxLength={5}
        onInput={(e) => e.target.setCustomValidity("")}
        onInvalid={(e) =>
          e.target.setCustomValidity(
            "Please enter exactly 5 letters (A-Z, a-z) only."
          )
        }
        onChange={(event) => {
          const input = event.target.value.toUpperCase();
          setGuess(input);
        }}
      />
    </form>
  );
}
export default GuessInput;
