import React from 'react';
import { motion } from 'motion/react';

export const ChatbotAnimation: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 800 600" className="w-full h-full max-w-[500px]">
        {/* Robot Head */}
        <motion.rect
          x="250" y="200" width="300" height="250"
          rx="60"
          fill="#1e293b"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Face Screen */}
        <rect x="280" y="230" width="240" height="160" rx="40" fill="#0f172a" />
        
        {/* Eyes */}
        <motion.circle
          cx="350" cy="300" r="15"
          fill="#3b82f6"
          animate={{
            scaleY: [1, 0.1, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.2] }}
        />
        <motion.circle
          cx="450" cy="300" r="15"
          fill="#3b82f6"
          animate={{
            scaleY: [1, 0.1, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.2] }}
        />
        
        {/* Mouth/Pulse */}
        <motion.rect
          x="360" y="350" width="80" height="8"
          rx="4"
          fill="#3b82f6"
          animate={{
            width: [40, 80, 40],
            x: [380, 360, 380]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Antenna */}
        <motion.line
          x1="400" y1="200" x2="400" y2="150"
          stroke="#1e293b"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <motion.circle
          cx="400" cy="140" r="15"
          fill="#8b5cf6"
          animate={{
            scale: [1, 1.3, 1],
            fill: ["#8b5cf6", "#3b82f6", "#8b5cf6"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Chat Bubbles */}
        <motion.path
          d="M600 150 L700 150 L700 220 L630 220 L600 250 Z"
          fill="#3b82f6"
          fillOpacity="0.2"
          stroke="#3b82f6"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
        <motion.path
          d="M100 300 L200 300 L200 370 L130 370 L100 400 Z"
          fill="#8b5cf6"
          fillOpacity="0.2"
          stroke="#8b5cf6"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        />
      </svg>
    </div>
  );
};
