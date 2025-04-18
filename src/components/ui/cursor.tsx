
import React, { useEffect, useState } from 'react';
import { motion, spring, useSpring } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isLink, setIsLink] = useState(false);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
      setIsLink(target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button');
      
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-purple-500/60 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isPointer ? 1.5 : 1,
          transition: { type: "spring", damping: 20, stiffness: 200, mass: 0.5 }
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-purple-400/40 rounded-full pointer-events-none z-50"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isLink ? 1.5 : 1,
          transition: { type: "spring", damping: 20, stiffness: 200, mass: 0.5 }
        }}
      />
    </>
  );
};

export default Cursor;
