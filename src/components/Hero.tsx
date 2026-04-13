import { motion, useInView } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChatbotAnimation } from './animations/ChatbotAnimation';
import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -40 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f010_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f010_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(14,165,233,0.08),transparent)]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-blue/5 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-purple/5 blur-[150px] rounded-full" 
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-brand-blue/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 border border-brand-blue/20 mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-brand-purple" />
              </motion.div>
              <span className="text-[10px] font-black text-brand-slate uppercase tracking-[0.3em]">
                Next-Gen IT Solutions
              </span>
            </motion.div>
            
            <div className="overflow-hidden mb-8">
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter font-display text-brand-dark"
              >
                <motion.span variants={wordVariants} className="block">Building the</motion.span>
                <motion.span variants={wordVariants} className="block text-gradient-brand">Digital Future</motion.span>
                <motion.span variants={wordVariants} className="block">for Enterprises.</motion.span>
              </motion.h1>
            </div>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-brand-slate mb-12 leading-relaxed max-w-xl font-medium"
            >
              Infysonic delivers professional, scalable, and high-impact IT services 
              designed to help modern businesses scale with absolute confidence.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-brand-dark text-white rounded-xl font-bold uppercase tracking-widest text-xs overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <a
                href="#services"
                className="group px-8 py-4 bg-white text-brand-dark border border-slate-200 rounded-xl font-bold uppercase tracking-widest text-xs hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/10 transition-all flex items-center gap-2"
              >
                Our Expertise
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-100 pt-10"
            >
              <div className="group">
                <div className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter font-display group-hover:text-brand-blue transition-colors">
                  <AnimatedCounter value={80} suffix="+" />
                </div>
                <div className="text-[10px] text-brand-slate font-black uppercase tracking-[0.2em] mt-2">Projects</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter font-display group-hover:text-brand-blue transition-colors">
                  <AnimatedCounter value={99} suffix="%" />
                </div>
                <div className="text-[10px] text-brand-slate font-black uppercase tracking-[0.2em] mt-2">Success</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-black text-brand-dark tracking-tighter font-display group-hover:text-brand-blue transition-colors">
                  24/7
                </div>
                <div className="text-[10px] text-brand-slate font-black uppercase tracking-[0.2em] mt-2">Support</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Animated border ring */}
              <motion.div
                className="absolute inset-0 rounded-[4rem] border-2 border-dashed border-brand-blue/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="absolute inset-4 bg-gradient-to-br from-brand-blue/10 via-brand-purple/10 to-brand-cyan/10 rounded-[3.5rem] animate-gradient-slow" />
              <div className="absolute inset-8 bg-white/60 backdrop-blur-3xl rounded-[3rem] border border-white/50 shadow-premium flex items-center justify-center overflow-hidden">
                {/* Floating gradient shapes */}
                <motion.div 
                  animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-48 h-48 bg-gradient-to-tr from-brand-blue to-brand-cyan rounded-full blur-3xl opacity-30 absolute -top-10 -left-10" 
                />
                <motion.div 
                  animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="w-64 h-64 bg-gradient-to-bl from-brand-purple to-brand-blue rounded-full blur-3xl opacity-20 absolute -bottom-10 -right-10" 
                />
                
                <div className="relative z-10 w-full h-full p-8">
                  <ChatbotAnimation />
                </div>
              </div>
              
              {/* Floating tech badges */}
              <motion.div
                className="absolute -left-4 top-1/4 px-4 py-2 bg-white rounded-xl shadow-lg border border-slate-100"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xs font-bold text-brand-dark">AI Powered</span>
              </motion.div>
              <motion.div
                className="absolute -right-4 top-1/3 px-4 py-2 bg-white rounded-xl shadow-lg border border-slate-100"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-xs font-bold text-brand-dark">Cloud Native</span>
              </motion.div>
              <motion.div
                className="absolute left-1/4 -bottom-4 px-4 py-2 bg-white rounded-xl shadow-lg border border-slate-100"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="text-xs font-bold text-brand-dark">Enterprise Ready</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
