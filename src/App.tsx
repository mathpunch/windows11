import React, { useState } from "react";
import Oobe from "./components/Oobe/Oobe";
import Desktop from "./components/Desktop/Desktop";
import "./styles/windows11.css";

function App() {
  const [setupComplete, setSetupComplete] = useState(false);

  return (
    <div className="windows11-root">
      {!setupComplete ? (
        <Oobe onComplete={() => setSetupComplete(true)} />
      ) : (
        <Desktop />
      )}
    </div>
  );
}

export default App;
