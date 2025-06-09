import React from "react";
export default function LicenseAgreement({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <h2>License Agreement</h2>
      <div className="oobe-scroll">
        <p>
          Please review and accept the license agreement to continue using Windows 11.
        </p>
        <div className="oobe-license-text">
          [Fake Windows 11 license text goes here...]
        </div>
      </div>
      <button onClick={onNext}>Accept</button>
    </div>
  );
}
