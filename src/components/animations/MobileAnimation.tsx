import React from 'react';
import { motion } from 'motion/react';

export const MobileAnimation: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 800 600" className="w-full h-full max-w-[600px]">
        {/* Phone Frame */}
        <motion.rect
          x="300" y="50" width="200" height="400"
          rx="30"
          fill="#1e293b"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        />
        <rect x="315" y="70" width="170" height="360" rx="20" fill="#0f172a" />
        
        {/* UI Elements */}
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x="330" y={100 + i * 80}
            width="140" height="60"
            rx="10"
            fill="#3b82f6"
            fillOpacity="0.2"
            animate={{ x: [0, 5, 0] }}
            transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
          />
        ))}
        
        {/* Floating Bubbles */}
        <motion.circle
          cx="250" cy="200" r="30"
          fill="#8b5cf6"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.circle
          cx="550" cy="300" r="40"
          fill="#3b82f6"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};
