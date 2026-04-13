import { motion, useInView } from 'motion/react';
import { 
  Globe, 
  ShoppingCart, 
  Cloud, 
  Palette, 
  Smartphone, 
  Layers, 
  Cpu, 
  ArrowRight,
  Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { useRef } from 'react';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  ShoppingCart,
  Cloud,
  Palette,
  Smartphone,
  Layers,
  Cpu,
  Bot
};

const gradientMap: Record<string, string> = {
  'web-development': 'from-blue-500 to-cyan-500',
  'e-commerce-solutions': 'from-purple-500 to-pink-500',
  'cloud-solutions': 'from-cyan-500 to-teal-500',
  'ui-ux-design': 'from-orange-500 to-amber-500',
  'mobile-app-development': 'from-violet-500 to-purple-500',
  'erp-solutions': 'from-emerald-500 to-green-500',
  'ai-solutions': 'from-blue-600 to-indigo-600',
  'chatbot-development': 'from-pink-500 to-rose-500',
};

const bgGradientMap: Record<string, string> = {
  'web-development': 'from-blue-500/10 to-cyan-500/10',
  'e-commerce-solutions': 'from-purple-500/10 to-pink-500/10',
  'cloud-solutions': 'from-cyan-500/10 to-teal-500/10',
  'ui-ux-design': 'from-orange-500/10 to-amber-500/10',
  'mobile-app-development': 'from-violet-500/10 to-purple-500/10',
  'erp-solutions': 'from-emerald-500/10 to-green-500/10',
  'ai-solutions': 'from-blue-600/10 to-indigo-600/10',
  'chatbot-development': 'from-pink-500/10 to-rose-500/10',
};

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f908_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f908_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-brand-blue/3 blur-[120px] rounded-full -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 border border-brand-blue/20 mb-6"
          >
            <span className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em]">
              Our Expertise
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[1] font-display"
          >
            Solutions built for{' '}
            <span className="text-gradient-brand">the next generation.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-slate font-medium leading-relaxed"
          >
            We deliver high-impact digital solutions designed to help modern 
            enterprises scale with precision and efficiency.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            const gradient = gradientMap[service.id] || 'from-brand-blue to-brand-purple';
            const bgGradient = bgGradientMap[service.id] || 'from-brand-blue/10 to-brand-purple/10';
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: 0.3 + i * 0.08, 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="group"
              >
                <Link to={`/services/${service.id}`}>
                  <div className="h-full p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-brand-blue/10 hover:border-brand-blue/30 hover:-translate-y-1">
                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      {/* Icon with animated background */}
                      <div className="relative mb-6">
                        <motion.div 
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${bgGradient} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}
                          whileHover={{ rotate: 5 }}
                        >
                          <Icon className={`w-7 h-7 bg-gradient-to-br ${gradient} bg-clip-text`} style={{ color: 'transparent', background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`, WebkitBackgroundClip: 'text' }} />
                          <Icon className={`w-7 h-7 absolute text-transparent bg-gradient-to-br ${gradient}`} style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }} />
                        </motion.div>
                        
                        {/* Animated ring on hover */}
                        <div className={`absolute inset-0 w-14 h-14 rounded-xl border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-20 scale-100 group-hover:scale-125 transition-all duration-500 bg-gradient-to-br ${gradient}`} style={{ borderColor: 'currentColor' }} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors tracking-tight font-display">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm text-brand-slate mb-6 leading-relaxed line-clamp-2">
                        {service.overview}
                      </p>
                      
                      <div className="flex items-center gap-2 text-[11px] font-bold text-brand-blue uppercase tracking-[0.15em] group-hover:gap-3 transition-all duration-300">
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    {/* Corner accent */}
                    <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${gradient} blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-700`} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
