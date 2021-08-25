import React from "react";
import ReactDOM from "react-dom";

function FirstComponent() {
  return <p>this is my first React Component</p>;
}

ReactDOM.render(<FirstComponent />, document.getElementById("root"));
