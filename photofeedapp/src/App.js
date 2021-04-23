import React, { useState } from "react";
import "./App.css";
import Result from "./components/Result/";

function App() {
  const [flag, setFlag] = useState(false);
  const [sr, setSr] = useState("");
  const handleSwitch = (received) => {
    setFlag(!flag);
    setSr(received);
  };
  return (
    <div className="App ">
      <h1>Photo Feed App</h1>
      <p>The internet’s source of freely-usable images.</p>
      <p>Powered by creators everywhere.</p>
      <Result flag={flag} handleSwitch={handleSwitch} sr={sr} />
    </div>
  );
}

export default App;
