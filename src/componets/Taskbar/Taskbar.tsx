import React, { useState } from "react";
import StartMenu from "./StartMenu";
import "./taskbar.css";

export default function Taskbar() {
  const [startOpen, setStartOpen] = useState(false);
  return (
    <>
      <div className="taskbar">
        <button className="start-btn" onClick={() => setStartOpen(v => !v)}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/48/Windows_logo_-_2021.svg"
            alt="Start"
            height={28}
            style={{ filter: "drop-shadow(0 0 1px #0004)" }}
          />
        </button>
        <span className="taskbar-clock">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
      <StartMenu open={startOpen} onClose={() => setStartOpen(false)} />
    </>
  );
}
