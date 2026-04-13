import React from 'react';
import { motion } from 'motion/react';

export const ERPAnimation: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 800 600" className="w-full h-full max-w-[600px]">
        {/* Central Hub */}
        <motion.rect
          x="350" y="250" width="100" height="100"
          rx="20"
          fill="#3b82f6"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Connected Nodes */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const x = 400 + Math.cos(angle) * 150;
          const y = 300 + Math.sin(angle) * 150;
          
          return (
            <React.Fragment key={i}>
              <motion.line
                x1="400" y1="300" x2={x} y2={y}
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="5 5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.circle
                cx={x} cy={y} r="25"
                fill="#8b5cf6"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
              />
            </React.Fragment>
          );
        })}
      </svg>
    </div>
  );
};
