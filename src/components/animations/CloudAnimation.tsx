import React from 'react';
import { motion } from 'motion/react';

export const CloudAnimation: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 800 600" className="w-full h-full max-w-[600px]">
        {/* Cloud Body */}
        <motion.path
          d="M200 400 C150 400 150 300 250 300 C250 200 450 200 450 300 C550 300 550 400 500 400 Z"
          fill="#3b82f6"
          fillOpacity="0.1"
          stroke="#3b82f6"
          strokeWidth="10"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Data Nodes */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            cx={300 + i * 80} cy="350"
            r="15"
            fill="#8b5cf6"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
        
        {/* Connection Lines */}
        <motion.path
          d="M300 350 L380 350 L460 350 L540 350"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="10 10"
          animate={{ strokeDashoffset: [0, -100] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};
