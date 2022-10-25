import React, { useState } from "react";
import MouseMove from "./MouseMove";

const DisplayCoords = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>toggle coords</button>
      {display && <MouseMove />}
    </div>
  );
};

export default DisplayCoords;
