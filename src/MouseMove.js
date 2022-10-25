import { useEffect, useState } from "react";

function MouseMove() {
  const [count, setCount] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const mouseMoveHandler = (event) => {
    console.log("mouse move handler");
    setCoords({ x: event.clientx, y: event.clientY });
  };

  useEffect(() => {
    console.log("use effect");

    document.title = `count is ${count}`;
    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  });

  return (
    <div className="App">
      <h1>
        Coords: x -{coords.x}, y - {coords.y}
      </h1>
      <h1>Count{count}</h1>
      <button onClick={() => setCount(count + 1)}> Increment count</button>
    </div>
  );
}

export default MouseMove;
