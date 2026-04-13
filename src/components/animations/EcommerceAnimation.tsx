import React from 'react';
import { motion } from 'motion/react';

export const EcommerceAnimation: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 800 600" className="w-full h-full max-w-[600px]">
        {/* Shopping Cart */}
        <motion.path
          d="M150 150 L250 150 L300 400 L600 400 L650 200 L270 200"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        
        {/* Wheels */}
        <motion.circle cx="350" cy="480" r="30" fill="#1e293b" animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        <motion.circle cx="550" cy="480" r="30" fill="#1e293b" animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        
        {/* Floating Items */}
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x={350 + i * 80} y="250"
            width="60" height="80"
            rx="10"
            fill={i % 2 === 0 ? "#8b5cf6" : "#3b82f6"}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.3, duration: 0.5 }}
          />
        ))}
      </svg>
    </div>
  );
};
