import React from "react";

function Banner({ buttonClickHandler, buttonText, type, children }) {
  return (
    <div className={`${type} banner`}>
      <p>{children}</p>
      {buttonText && <button onClick={buttonClickHandler}>{buttonText}</button>}
    </div>
  );
}
export default Banner;
