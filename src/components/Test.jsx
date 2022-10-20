import React, { useState } from "react";
let style = false;

function Test() {
  const [s, ss] = useState(false);
  const test = () => {
      ss(!s);
    style = s;
    if (style) {
      require("./file.css");
    } else {
      require("./file2.css");
    }
    console.log("red");
  };
  return (
    <div className="container p-5">
      <button onClick={test} className="btn btn-dark">
        toggle
      </button>
    </div>
  );
}

export default Test;
