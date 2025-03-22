import React from "react";
import Key from "../Key/Key";

function Keyboard({ letterStatuses }) {
  return (
    <section>
      <p className="keyboard-row">
        <Key status={letterStatuses["Q"]}>Q</Key>
        <Key status={letterStatuses["W"]}>W</Key>
        <Key status={letterStatuses["E"]}>E</Key>
        <Key status={letterStatuses["R"]}>R</Key>
        <Key status={letterStatuses["T"]}>T</Key>
        <Key status={letterStatuses["Y"]}>Y</Key>
        <Key status={letterStatuses["U"]}>U</Key>
        <Key status={letterStatuses["I"]}>I</Key>
        <Key status={letterStatuses["O"]}>O</Key>
        <Key status={letterStatuses["P"]}>P</Key>
      </p>
      <p className="keyboard-row">
        <Key status={letterStatuses["A"]}>A</Key>
        <Key status={letterStatuses["S"]}>S</Key>
        <Key status={letterStatuses["D"]}>D</Key>
        <Key status={letterStatuses["F"]}>F</Key>
        <Key status={letterStatuses["G"]}>G</Key>
        <Key status={letterStatuses["H"]}>H</Key>
        <Key status={letterStatuses["J"]}>J</Key>
        <Key status={letterStatuses["K"]}>K</Key>
        <Key status={letterStatuses["L"]}>L</Key>
      </p>
      <p className="keyboard-row">
        <Key status={letterStatuses["Z"]}>Z</Key>
        <Key status={letterStatuses["X"]}>X</Key>
        <Key status={letterStatuses["C"]}>C</Key>
        <Key status={letterStatuses["V"]}>V</Key>
        <Key status={letterStatuses["B"]}>B</Key>
        <Key status={letterStatuses["N"]}>N</Key>
        <Key status={letterStatuses["M"]}>M</Key>
      </p>
    </section>
  );
}
export default Keyboard;
