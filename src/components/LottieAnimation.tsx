import React from 'react';
import { motion } from 'motion/react';
import { Player } from '@lottiefiles/react-lottie-player';
import { WebDevAnimation } from './animations/WebDevAnimation';
import { EcommerceAnimation } from './animations/EcommerceAnimation';
import { CloudAnimation } from './animations/CloudAnimation';
import { DesignAnimation } from './animations/DesignAnimation';
import { MobileAnimation } from './animations/MobileAnimation';
import { ERPAnimation } from './animations/ERPAnimation';
import { AIAnimation } from './animations/AIAnimation';

interface LottieAnimationProps {
  url: string;
  localType?: string;
  className?: string;
}

const localAnimations: Record<string, React.FC> = {
  WebDev: WebDevAnimation,
  Ecommerce: EcommerceAnimation,
  Cloud: CloudAnimation,
  Design: DesignAnimation,
  Mobile: MobileAnimation,
  ERP: ERPAnimation,
  AI: AIAnimation
};

export default function LottieAnimation({ url, localType, className = "" }: LottieAnimationProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  // If localType is provided, use the local SVG animation
  if (localType && localAnimations[localType]) {
    const AnimationComponent = localAnimations[localType];
    return (
      <div className={className}>
        <AnimationComponent />
      </div>
    );
  }

  if (error) return (
    <div className="w-full h-full flex items-center justify-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
      <p className="text-slate-400 text-sm font-medium">Animation unavailable</p>
    </div>
  );
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
      className={`relative ${className}`}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-50 animate-pulse rounded-3xl" />
      )}
      <Player
        src={url}
        autoplay
        loop
        onEvent={(event) => {
          if (event === 'load') setIsLoaded(true);
          if (event === 'error') setError(true);
        }}
        style={{ width: '100%', height: '100%' }}
      />
    </motion.div>
  );
}
