import React from 'react';
import { motion } from 'motion/react';

export const DesignAnimation: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 800 600" className="w-full h-full max-w-[600px]">
        {/* Canvas */}
        <motion.rect
          x="150" y="100" width="500" height="400"
          rx="20"
          fill="none"
          stroke="#1e293b"
          strokeWidth="4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        
        {/* Shapes */}
        <motion.rect
          x="200" y="150" width="150" height="150"
          rx="20"
          fill="#3b82f6"
          animate={{
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <motion.circle
          cx="500" cy="250" r="80"
          fill="#8b5cf6"
          fillOpacity="0.6"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        {/* Pen Tool Path */}
        <motion.path
          d="M200 400 Q400 300 600 400"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};
