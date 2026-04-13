import { motion, useInView } from 'motion/react';
import { Zap, Shield, Rocket, DollarSign, Headphones, Globe } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const reasons = [
  {
    title: 'Fast Delivery',
    description: 'We prioritize speed without compromising quality, ensuring your product reaches the market quickly.',
    icon: Zap,
    gradient: 'from-amber-500 to-orange-500',
    stat: '2x',
    statLabel: 'Faster'
  },
  {
    title: 'Scalable Solutions',
    description: 'Our architecture is built to grow with your business, handling increased traffic and data effortlessly.',
    icon: Rocket,
    gradient: 'from-violet-500 to-purple-500',
    stat: '99.9%',
    statLabel: 'Uptime'
  },
  {
    title: 'Cost Effective',
    description: 'We provide premium IT solutions at competitive rates, maximizing your ROI and business value.',
    icon: DollarSign,
    gradient: 'from-emerald-500 to-teal-500',
    stat: '40%',
    statLabel: 'Savings'
  },
  {
    title: 'Modern Tech Stack',
    description: 'We use the latest and most reliable technologies to ensure your product is future-proof and robust.',
    icon: Shield,
    gradient: 'from-blue-500 to-cyan-500',
    stat: '100+',
    statLabel: 'Technologies'
  },
  {
    title: 'Reliable Support',
    description: 'Our team is always available to provide ongoing maintenance and technical assistance.',
    icon: Headphones,
    gradient: 'from-pink-500 to-rose-500',
    stat: '24/7',
    statLabel: 'Support'
  },
  {
    title: 'Global Expertise',
    description: 'We leverage a global network of IT experts to deliver world-class solutions for your business.',
    icon: Globe,
    gradient: 'from-indigo-500 to-blue-500',
    stat: '15+',
    statLabel: 'Countries'
  }
];

function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      // Check if value contains numbers
      const numMatch = value.match(/[\d.]+/);
      if (numMatch) {
        const num = parseFloat(numMatch[0]);
        const prefix = value.replace(/[\d.]+.*/, '');
        const valueSuffix = value.replace(/.*[\d.]+/, '');
        
        let current = 0;
        const duration = 1500;
        const steps = 40;
        const increment = num / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= num) {
            setDisplayValue(value);
            clearInterval(timer);
          } else {
            const formatted = num % 1 === 0 ? Math.floor(current) : current.toFixed(1);
            setDisplayValue(`${prefix}${formatted}${valueSuffix}`);
          }
        }, duration / steps);
        
        return () => clearInterval(timer);
      }
    }
  }, [isInView, value]);
  
  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 md:py-32 px-6 relative overflow-hidden bg-brand-dark" ref={sectionRef}>
      {/* Dark theme gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_80%,rgba(99,102,241,0.1),transparent)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6"
          >
            <span className="text-[10px] font-black text-brand-cyan uppercase tracking-[0.3em]">
              The Infysonic Advantage
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[1] font-display text-white"
          >
            Engineering excellence{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">at every scale.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 font-medium leading-relaxed"
          >
            We don&apos;t just build software; we build the foundation for your business growth. 
            Discover why global enterprises trust Infysonic.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.3 + i * 0.08, 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Gradient hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="text-right">
                      <div className={`text-2xl font-black bg-gradient-to-r ${reason.gradient} bg-clip-text text-transparent`}>
                        <AnimatedNumber value={reason.stat} />
                      </div>
                      <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">{reason.statLabel}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {reason.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
