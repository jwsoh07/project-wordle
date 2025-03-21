import React from "react";

function Letter({ children, status }) {
  return <span className={`cell ${status}`}>{children}</span>;
}
export default Letter;
