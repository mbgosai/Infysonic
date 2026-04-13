import { motion, useInView } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechFlow',
    content: 'Infysonic transformed our vision into a reality. Their team is incredibly professional and delivered our platform ahead of schedule.',
    company: 'TechFlow',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Michael Chen',
    role: 'Founder of EcoShop',
    content: 'The e-commerce solution provided by Infysonic has doubled our conversion rate. Their attention to detail is unmatched.',
    company: 'EcoShop',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Elena Rodriguez',
    role: 'CTO at HealthLink',
    content: 'Working with Infysonic was a game-changer for our startup. They built a scalable infrastructure that handles our growth perfectly.',
    company: 'HealthLink',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
  }
];

const clientLogos = [
  { name: 'Microsoft', logo: 'M' },
  { name: 'Google', logo: 'G' },
  { name: 'Amazon', logo: 'A' },
  { name: 'Meta', logo: 'M' },
  { name: 'Apple', logo: 'A' },
  { name: 'Netflix', logo: 'N' },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-slate-50 relative overflow-hidden" ref={sectionRef}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.05),transparent)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/10 to-brand-blue/10 border border-brand-cyan/20 mb-6"
          >
            <span className="text-[10px] font-black text-brand-cyan uppercase tracking-[0.3em]">
              Success Stories
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[1] font-display"
          >
            Trusted by{' '}
            <span className="text-gradient-brand">global leaders.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-slate font-medium leading-relaxed"
          >
            Don&apos;t just take our word for it. Discover how Infysonic has empowered 
            enterprises to redefine their digital presence.
          </motion.p>
        </div>

        {/* Testimonials Carousel for Mobile, Grid for Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.4 + i * 0.1, 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-900/5 relative transition-all duration-500 hover:-translate-y-1">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-brand-blue/10 transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 + j * 0.05 }}
                    >
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-base text-brand-slate mb-8 leading-relaxed relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-slate-100">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-brand-dark">{testimonial.name}</div>
                    <div className="text-xs text-brand-slate">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl bg-white border border-slate-100 shadow-lg"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100" />
            
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-base text-brand-slate mb-6 leading-relaxed">
              &ldquo;{testimonials[activeIndex].content}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-slate-100">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-brand-dark">{testimonials[activeIndex].name}</div>
                <div className="text-xs text-brand-slate">{testimonials[activeIndex].role}</div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-slate-200 hover:border-brand-blue hover:bg-brand-blue/5 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-brand-dark" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === activeIndex ? 'bg-brand-blue w-6' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-slate-200 hover:border-brand-blue hover:bg-brand-blue/5 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-brand-dark" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
