import React, { useEffect } from "react";
export default function OobeFinish({ onNext }: { onNext: () => void }) {
  useEffect(() => {
    const t = setTimeout(onNext, 2000);
    return () => clearTimeout(t);
  }, [onNext]);
  return (
    <div>
      <h2>Getting things ready for you...</h2>
      <p className="oobe-spinner">⏳</p>
    </div>
  );
}
