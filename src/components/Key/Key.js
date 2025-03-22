import React from "react";

function Key({ children, status }) {
  return <span className={`cell ${status}`}>{children}</span>;
}
export default Key;
