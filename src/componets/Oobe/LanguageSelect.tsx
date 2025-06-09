import React from "react";
export default function LanguageSelect({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <h2>Let's start with region. Is this right?</h2>
      <p>United States (English)</p>
      <button onClick={onNext}>Yes</button>
    </div>
  );
}
