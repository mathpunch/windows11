import React, { useState } from "react";
export default function UserAccount({ onNext }: { onNext: () => void }) {
  const [name, setName] = useState("");
  return (
    <div>
      <h2>Who's going to use this device?</h2>
      <input
        className="oobe-input"
        type="text"
        placeholder="Enter a name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={onNext} disabled={!name}>Next</button>
    </div>
  );
}
