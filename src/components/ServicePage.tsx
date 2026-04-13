import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/services';
import LottieAnimation from './LottieAnimation';
import { 
  ArrowLeft, CheckCircle2, ArrowRight, Zap, Target, Globe, ShoppingCart, 
  Cloud, Palette, Smartphone, Layers, Cpu, TrendingUp, ShieldCheck,
  Search, Map, Code, Rocket, Activity, Server, Shield, Layout, MousePointer,
  CheckSquare, FileCode, Lightbulb, SmartphoneNfc, Settings, Users, Headphones,
  Eye, Diamond, FileCheck
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Globe, ShoppingCart, Cloud, Palette, Smartphone, Layers, Cpu
};

const processIcons: Record<string, any> = {
  Search, Map, Code, ShieldCheck, Rocket, Target, Palette, ShoppingCart, Activity,
  TrendingUp, Layers, Server, Shield, Layout, MousePointer, CheckSquare, FileCode,
  Lightbulb, Smartphone, SmartphoneNfc, Settings, Users, Headphones, Eye, Diamond,
  FileCheck, Cpu
};

export default function ServicePage() {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Service Not Found</h1>
        <p className="text-slate-500 mb-8">The service you are looking for does not exist or has been moved.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded font-semibold hover:bg-blue-700 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Globe;

  return (
    <div className="bg-white">
      <Helmet>
        <title>{service.title} | Infysonic</title>
        <meta name="description" content={service.overview} />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-slate-900 relative overflow-hidden border-b-4 border-brand-blue">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block text-brand-blue font-semibold tracking-wider uppercase mb-4 border-b-2 border-brand-blue pb-1">
                Enterprise Solution
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-sans">
                {service.title}
              </h1>
              
              <div className="mb-10">
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-xl">
                  {service.overview}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue text-white rounded font-semibold uppercase tracking-wide hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Consult With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:flex justify-center items-center"
            >
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-2xl relative w-full max-w-md aspect-square flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-50"></div>
                <div className="relative z-10 w-full h-full">
                  <LottieAnimation 
                    url={service.lottieUrl} 
                    localType={service.localAnimation}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Description Section (Restoring the hidden content) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg md:prose-xl prose-slate max-w-none font-light leading-relaxed"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 not-prose">About This Service</h2>
            <div className="space-y-6 text-slate-700">
              {service.detailedDescription.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process / Journey Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 font-display tracking-tight">
              Stages and Timelines of <br/>
              Your {service.title.split(' ')[0]} Journey
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 max-w-5xl mx-auto">
            {service.process.map((step, i) => {
              const Icon = processIcons[step.icon] || Zap;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center w-full md:w-[calc(33.333%-2rem)] max-w-sm"
                >
                  <div className="w-20 h-20 mb-6 flex items-center justify-center">
                     <Icon className="w-12 h-12 text-[#00c2cb] stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2b5ba8] mb-1">{step.step} : {step.title}</h3>
                  <h4 className="text-lg font-bold text-[#2b5ba8] mb-4">({step.timeline})</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities / Features */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-brand-blue/10 border border-brand-blue/20 mb-4 text-brand-blue">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Technical Features
            </h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-brand-blue">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact / Benefits */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-brand-blue/20 border border-brand-blue/30 mb-4 text-brand-blue">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Business Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Strategic Benefits
            </h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto mb-8"></div>
            
            <div className="max-w-4xl mx-auto bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-xl mb-16">
              <p className="text-xl md:text-2xl font-semibold leading-relaxed text-slate-200 italic">
                "{service.benefits.summary}"
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits.points.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-800 rounded-xl border border-slate-700 hover:border-brand-blue/50 transition-colors"
              >
                <div className="w-12 h-12 rounded bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 text-brand-blue">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Where our {service.title} expertise delivers the most value.
            </p>
            <div className="w-24 h-1 bg-brand-blue mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center hover:bg-slate-100 transition-colors"
              >
                <div className="w-12 h-12 rounded bg-white flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-sm text-brand-blue">
                  <Target className="w-6 h-6" />
                </div>
                <div className="text-lg font-bold text-slate-900">
                  {useCase}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Advance Your Technology?
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              Partner with Infysonic to leverage industry-leading {service.title} expertise and drive your business forward.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue text-white rounded font-semibold uppercase tracking-wide hover:bg-blue-700 transition-colors shadow-lg"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
