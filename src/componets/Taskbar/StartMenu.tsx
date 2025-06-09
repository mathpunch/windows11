import React from "react";
import "./startmenu.css";

export default function StartMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="startmenu-backdrop" onClick={onClose}>
      <div className="startmenu" onClick={e => e.stopPropagation()}>
        <h3>Start</h3>
        <ul className="startmenu-apps">
          <li>Edge</li>
          <li>Store</li>
          <li>Settings</li>
          <li>Notepad</li>
        </ul>
      </div>
    </div>
  );
}
