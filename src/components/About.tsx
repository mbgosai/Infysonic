import { motion, useInView } from 'motion/react';
import { Target, Users, Rocket, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const values = [
  {
    title: 'Innovation',
    description: 'We constantly explore new technologies to provide cutting-edge solutions.',
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Excellence',
    description: 'We strive for perfection in every line of code and every pixel designed.',
    icon: Target,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients and partners to achieve shared goals.',
    icon: Users,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Reliability',
    description: 'We prioritize consistent delivery and long-term partnership with our clients.',
    icon: CheckCircle2,
    color: 'from-emerald-500 to-teal-500',
  }
];

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

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f908_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f908_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 border border-brand-blue/20 mb-6">
              <span className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em]">
                About Infysonic
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-[1] font-display">
              Your partner in{' '}
              <span className="text-gradient-brand">digital transformation.</span>
            </h2>
            
            <p className="text-lg text-brand-slate mb-8 leading-relaxed font-medium">
              Infysonic is a US-based IT consultancy that leverages a curated global talent network to deliver scalable digital solutions. We combine domestic technical oversight with offshore execution to provide unparalleled quality and cost-effectiveness.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="text-4xl font-black text-brand-dark mb-1 tracking-tighter font-display">
                  <AnimatedCounter value={12} suffix="+" />
                </div>
                <div className="text-xs text-brand-slate font-semibold">Years of Experience</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="text-4xl font-black text-brand-dark mb-1 tracking-tighter font-display">
                  <AnimatedCounter value={80} suffix="+" />
                </div>
                <div className="text-xs text-brand-slate font-semibold">Projects Delivered</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative group">
              {/* Image with overlay */}
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c" 
                alt="Our Workspace" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/20 to-transparent" />
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-black text-brand-blue tracking-tighter font-display">
                      <AnimatedCounter value={99} suffix="%" />
                    </div>
                    <div className="text-xs font-semibold text-brand-slate">Client Satisfaction</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-brand-cyan/20 to-brand-blue/20 rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-brand-dark text-center mb-10">Our Core Values</h3>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 hover:border-slate-200 transition-all duration-500 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">{value.title}</h3>
                <p className="text-sm text-brand-slate leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
