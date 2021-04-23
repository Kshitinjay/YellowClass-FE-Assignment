import React, { useState, Suspense, lazy } from "react";
import "./App.css";
// import Result from "./components/Result/";
const Result = lazy(() => import("./components/Result/"));
const App=()=> {

  const [flag, setFlag] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleSwitch = (received) => {
    setFlag(!flag);
    setModalImage(received);
  };
  return (
    <div className="App ">
      <h1>Photo Feed App</h1>
      <p>The internet’s source of freely-usable images.</p>
      <p>Powered by creators everywhere.</p>
      <Suspense fallback={<div>PleaseWait...</div>}>
        <Result
          flag={flag}
          handleSwitch={handleSwitch}
          modalImage={modalImage}
        />
      </Suspense>
    </div>
  );
}

export default App;
