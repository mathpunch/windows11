import React from "react";
export default function RegionSelect({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <h2>Is this the right keyboard layout?</h2>
      <p>US Keyboard</p>
      <button onClick={onNext}>Yes</button>
    </div>
  );
}
