import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  // 1. Inisialisasi posisi mouse
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 2. Konfigurasi spring agar gerakan smooth
  // Kamu bisa mengatur damping dan stiffness untuk mengatur "kekenyalan" gerakan
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // 3. Update posisi mouse saat mouse digerakkan
    const handleMouseMove = (e: MouseEvent) => {
      // PERUBAHAN DI SINI:
      // Kita tidak lagi mengurangi setengah lebar/tinggi (e.g., e.clientX - 16).
      // Dengan mengaturnya langsung ke e.clientX, pojok kiri atas gambar 
      // akan mengikuti posisi tepat di mana mouse berada.
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
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
      // w-8 (32px) h-8 (32px) z-[9999] agar di atas semua elemen, 
      // pointer-events-none agar klik menembus gambar
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] flex items-center justify-center"
    >
      {/* 4. Tampilkan gambar kursor dari folder public */}
      <img 
        src="/cursor.png" // Ganti dengan path gambar kamu di folder public
        alt="custom cursor" 
        className="w-full h-full object-contain"
        onError={(e) => console.error("Gambar kursor tidak ditemukan!")}
      />
    </motion.div>
  );
};

export default CustomCursor;