import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Menggunakan spring agar gerakan kursor terasa smooth/kenyal
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // 16 adalah setengah dari lebar w-8 (32px)
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] flex items-center justify-center"
    >
      {/* Ganti 'cursor-kamu.png' dengan path gambar di folder public kamu */}
      <img 
        src="/cursor-kamu.png" 
        alt="custom cursor" 
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};
// Di dalam CustomCursor.tsx
<motion.div
  className="fixed top-0 left-0 pointer-events-none z-[9999]" // <--- Pastikan ada pointer-events-none
  // ... rest of code
>
  <img src="/cursor-kamu.png" className="pointer-events-none" />
</motion.div>
export default CustomCursor;