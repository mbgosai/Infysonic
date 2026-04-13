import React from 'react';
import { motion } from 'motion/react';

export const WebDevAnimation: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 800 600" className="w-full h-full max-w-[600px]">
        {/* Monitor */}
        <motion.rect
          x="150" y="100" width="500" height="350" rx="20"
          fill="#1e293b"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <rect x="170" y="120" width="460" height="280" rx="10" fill="#0f172a" />
        
        {/* Code Lines */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.rect
            key={i}
            x="200" y={150 + i * 40}
            width={200 + Math.random() * 150}
            height="15"
            rx="7"
            fill={i % 2 === 0 ? "#3b82f6" : "#8b5cf6"}
            initial={{ width: 0 }}
            animate={{ width: 200 + Math.random() * 150 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2
            }}
          />
        ))}
        
        {/* Floating Elements */}
        <motion.circle
          cx="650" cy="150" r="40"
          fill="#3b82f6"
          fillOpacity="0.2"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.rect
          x="100" y="400" width="80" height="80" rx="15"
          fill="#8b5cf6"
          fillOpacity="0.2"
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};
