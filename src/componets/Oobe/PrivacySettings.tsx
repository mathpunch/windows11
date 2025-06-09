import React from "react";
export default function PrivacySettings({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <h2>Choose privacy settings for your device</h2>
      <ul className="oobe-list">
        <li><input type="checkbox" defaultChecked /> Location</li>
        <li><input type="checkbox" defaultChecked /> Find my device</li>
        <li><input type="checkbox" defaultChecked /> Diagnostics</li>
        <li><input type="checkbox" defaultChecked /> Tailored experiences</li>
        <li><input type="checkbox" defaultChecked /> Advertising ID</li>
      </ul>
      <button onClick={onNext}>Accept</button>
    </div>
  );
}
