import React from 'react';
import { motion } from 'motion/react';

export const AIAnimation: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 800 600" className="w-full h-full max-w-[600px]">
        {/* Brain/Core */}
        <motion.circle
          cx="400" cy="300" r="80"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Neural Network Nodes */}
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={i}
            cx={400 + (Math.random() - 0.5) * 400}
            cy={300 + (Math.random() - 0.5) * 400}
            r={2 + Math.random() * 4}
            fill="#8b5cf6"
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
        
        {/* Pulse Lines */}
        <motion.circle
          cx="400" cy="300" r="150"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
          strokeDasharray="10 20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};
