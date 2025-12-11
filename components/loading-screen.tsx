'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShow(false), 1000); // Wait for fade out
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-[100] ${!show && 'pointer-events-none'}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {/* Stranger Things inspired background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-red-600 rounded-full"
            style={{
              width: `${Math.random() * 8 + 1}px`,
              height: `${Math.random() * 8 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              y: [0, Math.random() * 20 - 10, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Flickering Title */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-red-600 text-glow-red"
          style={{ fontFamily: "'Benguiat', sans-serif" }}
          animate={{
            opacity: [1, 0.8, 1, 0.9, 1],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
          }}
        >
          CODEZEN
        </motion.h1>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden border border-red-600/50 mx-auto mt-8">
          <motion.div
            className="h-full bg-red-600"
            style={{ boxShadow: '0 0 10px rgba(255, 0, 0, 0.8)' }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'linear' }}
          />
        </div>

        {/* Loading Messages */}
        <div className="mt-6 text-gray-400 text-sm space-y-2 font-mono">
          <p>ENTERING THE UPSIDE DOWN...</p>
          <p className="text-red-500 animate-pulse">Reticulating Splines...</p>
        </div>
      </div>
    </motion.div>
  );
}
