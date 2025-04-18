
import React, { useEffect, useState } from 'react';
import { motion, spring } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-green-400/80 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isPointer ? 2 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.3,
          stiffness: 100,
          damping: 10,
          restDelta: 0.001
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          rotate: isPointer ? 45 : 0,
          scale: isPointer ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.3,
          stiffness: 100,
          damping: 10,
          restDelta: 0.001
        }}
      >
        <MousePointer2 className="text-green-400/80 w-4 h-4" />
      </motion.div>
    </>
  );
};

export default Cursor;
