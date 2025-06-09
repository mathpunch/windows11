import React, { useState } from "react";
import LanguageSelect from "./LanguageSelect";
import RegionSelect from "./RegionSelect";
import LicenseAgreement from "./LicenseAgreement";
import UserAccount from "./UserAccount";
import PrivacySettings from "./PrivacySettings";
import OobeFinish from "./OobeFinish";

export default function Oobe({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  const steps = [
    <LanguageSelect onNext={() => setStep(1)} />,
    <RegionSelect onNext={() => setStep(2)} />,
    <LicenseAgreement onNext={() => setStep(3)} />,
    <UserAccount onNext={() => setStep(4)} />,
    <PrivacySettings onNext={() => setStep(5)} />,
    <OobeFinish onNext={onComplete} />,
  ];

  return (
    <div className="oobe-bg">
      <div className="oobe-window">
        {steps[step]}
      </div>
    </div>
  );
}
