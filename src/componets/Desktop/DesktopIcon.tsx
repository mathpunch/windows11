import React from "react";
import "./desktop.css";

export default function DesktopIcon({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="desktop-icon">
      <span className="desktop-icon-img">{icon}</span>
      <span className="desktop-icon-label">{label}</span>
    </div>
  );
}
