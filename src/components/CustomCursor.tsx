import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Tactical trailing ring spring config
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      // Base offset: cursor is 32px wide, so subtract 16 to center
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for interactive elements
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button')
      ) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }
      
      // Check for text elements for text-selection styling
      if (['p', 'h1', 'h2', 'h3', 'h4', 'span', 'li'].includes(target.tagName.toLowerCase())) {
        setIsHoveringText(true);
      } else {
        setIsHoveringText(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      <style>
        {`
          @media (pointer: fine) {
            * {
              cursor: none !important;
            }
          }
        `}
      </style>

      {/* Outer Tactical Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/60 pointer-events-none z-[9999] backdrop-invert backdrop-opacity-10 backdrop-contrast-125"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHoveringLink ? 1.8 : isHoveringText ? 0.3 : 1,
          borderColor: isHoveringLink ? 'rgba(34, 211, 238, 0.9)' : 'rgba(34, 211, 238, 0.5)',
          backgroundColor: isHoveringLink ? 'rgba(34, 211, 238, 0.15)' : 'transparent',
          opacity: 1
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Inner Tracking Core */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full pointer-events-none z-[10000] mix-blend-screen shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        style={{
          // Center the 6px dot inside the 32px ring area
          x: useTransform(mouseX, x => x + 16 - 3),
          y: useTransform(mouseY, y => y + 16 - 3),
        }}
        animate={{
          scale: isHoveringLink ? 0 : isHoveringText ? 0 : 1, // Shrink to nothing when hovering links
          opacity: 1
        }}
      />
    </>
  );
};

export default CustomCursor;
