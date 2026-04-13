import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Users, 
  Play, 
  Trophy,
  ArrowRight,
  Clock,
  Layers,
  Headphones,
  Cpu,
  Heart,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { WebDevAnimation } from './animations/WebDevAnimation';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin by deeply understanding your business needs. Reach out to us with your requirements, whether you need a complete digital transformation, a new web application, or dedicated IT professionals. Our team will schedule a comprehensive discussion to align our expertise with your goals.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Strategic Engagement Model',
    description: 'Every organization is unique. We provide flexible engagement models tailored to your specific operational and financial requirements. From fixed-price contracts for well-defined projects to dedicated offshore teams, we structure our partnership to maximize your ROI.',
    icon: Layers,
  },
  {
    number: '03',
    title: 'Resource Allocation',
    description: 'We meticulously select the right talent for your project. Whether you require a single specialized developer or a comprehensive cross-functional team, our professionals bring proven expertise in the specific technology stack required to deliver robust solutions.',
    icon: Users,
  },
  {
    number: '04',
    title: 'Project Execution',
    description: 'A dedicated Project Manager coordinates the entire lifecycle, ensuring seamless communication and transparent reporting. We follow agile methodologies, providing regular updates and iterations so you maintain full visibility and control over the development process.',
    icon: Play,
  },
  {
    number: '05',
    title: 'Delivery & Ongoing Support',
    description: 'We deliver high-quality, scalable solutions on time and within budget. Beyond the initial deployment, our management and technical teams remain committed to your success, offering ongoing maintenance and support to ensure your infrastructure performs flawlessly.',
    icon: Trophy,
  },
];

const highlights = [
  {
    title: 'Reliable & Ontime Delivery',
    icon: Clock,
  },
  {
    title: 'Flexible Engagement Models',
    icon: Layers,
  },
  {
    title: '24/7 Enterprise Support',
    icon: Headphones,
  },
  {
    title: 'Advanced Technical Competency',
    icon: Cpu,
  },
  {
    title: 'Client-Centric Philosophy',
    icon: Heart,
  },
  {
    title: 'Quality Assurance Guaranteed',
    icon: Shield,
  },
];

export default function HowWeWork() {
  return (
    <div className="bg-slate-50 pt-32">
      <Helmet>
        <title>How We Work | Infysonic Methodology</title>
        <meta name="description" content="Discover Infysonic's structured, transparent, and proven methodology for managing complex enterprise technology initiatives from concept to deployment." />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-slate-900 relative border-b-8 border-brand-blue">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-brand-blue font-semibold tracking-wider uppercase mb-4 border-b-2 border-brand-blue pb-1">
                  Our Methodology
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-sans">
                  A Systematic Approach to <br/>
                  <span className="text-brand-blue font-light">Digital Excellence</span>
                </h1>
                <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl font-light">
                  As a trusted IT partner, we implement a structured, transparent, and proven methodology to manage your complex technology initiatives. From initial concept to final deployment, our process is designed to mitigate risk, ensure quality, and deliver measurable business value.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue text-white rounded font-semibold uppercase tracking-wide hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
            
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-slate-800 rounded-lg p-6 shadow-2xl border border-slate-700"
              >
                <WebDevAnimation />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Process Step-by-Step
            </h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            {steps.map((step, i) => {
              const bgColors = ['bg-slate-50', 'bg-blue-50/50', 'bg-indigo-50/50', 'bg-sky-50/50', 'bg-slate-50'];
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} ${bgColors[i % bgColors.length]} rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`bg-white/60 backdrop-blur-sm md:w-48 p-8 flex flex-col items-center justify-center border-b md:border-b-0 ${isEven ? 'md:border-r' : 'md:border-l'} border-slate-200/60`}>
                    <span className="text-5xl font-bold text-brand-blue mb-2">
                      {step.number}
                    </span>
                    <step.icon className="w-8 h-8 text-slate-400" />
                  </div>
                  
                  <div className="p-8 md:p-10 flex-1">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Partner With Us
            </h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-8 bg-white rounded border border-slate-200 shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded flex items-center justify-center text-brand-blue">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto font-light">
              Join leading organizations that trust Infysonic to deliver robust, scalable, and innovative technology solutions.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue text-white rounded font-semibold uppercase tracking-wide hover:bg-blue-700 transition-colors shadow-lg"
            >
              Contact Our Experts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
