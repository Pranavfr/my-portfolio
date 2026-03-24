import React, { useState, useEffect } from 'react';

export const GlitchText = ({ 
  text, 
  className = "", 
  scrambleSpeed = 30, 
  revealSpeed = 1/3 
}: { 
  text: string, 
  className?: string,
  scrambleSpeed?: number,
  revealSpeed?: number
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  // Hacker-like cryptographic characters
  const chars = "!<>-_\\\\/[]{}—=+*^?#_01";

  const triggerGlitch = () => {
    if (isGlitching) return;
    setIsGlitching(true);
    let iterations = 0;
    
    const interval = setInterval(() => {
      setDisplayText(text.split("").map((letter, index) => {
        if (index < iterations) return text[index];
        // Keep spaces intact so layout doesn't completely break
        if (text[index] === " ") return " ";
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      
      if (iterations >= text.length) {
        clearInterval(interval);
        setIsGlitching(false);
        setDisplayText(text);
      }
      iterations += revealSpeed;
    }, scrambleSpeed);
  };

  return (
    <span 
      onMouseEnter={triggerGlitch} 
      className={`inline-block whitespace-wrap transition-colors duration-300 ${className} hover:text-cyan-400`}
      style={{ cursor: "crosshair" }}
    >
      {displayText}
    </span>
  );
};

export default GlitchText;
