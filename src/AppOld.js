import { useEffect, useState } from "react";
import "./App.css";
import DisplayCoords from "./DisplayCoords";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      {time}
      <DisplayCoords />
    </div>
  );
}

export default App;
