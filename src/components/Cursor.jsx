// src/components/Cursor.jsx
import { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over text elements
      const target = e.target;
      const isText = window.getComputedStyle(target).cursor === "text";
      const isInteractive = target.closest('a, button, [role="button"]');

      setIsTextHovered(isText);
      setIsClickable(isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className={`custom-cursor ${
        isTextHovered
          ? "cursor-text-effect"
          : isClickable
          ? "cursor-click-effect"
          : ""
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: "-10px",
        top: "-10px",
      }}
    />
  );
};

export default Cursor;
