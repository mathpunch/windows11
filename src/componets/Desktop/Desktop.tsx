import React from "react";
import Taskbar from "../Taskbar/Taskbar";
import DesktopIcon from "./DesktopIcon";
import "./desktop.css";

export default function Desktop() {
  return (
    <div className="desktop-bg">
      <DesktopIcon icon="🗑️" label="Recycle Bin" />
      <DesktopIcon icon="📝" label="Notepad" />
      <Taskbar />
    </div>
  );
}
