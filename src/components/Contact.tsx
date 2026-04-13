import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, CheckCircle, Loader2, ArrowRight } from 'lucide-react';

import { Helmet } from 'react-helmet-async';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [selectedService, setSelectedService] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [formState, setFormState] = useState<FormState>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (val.length > 0) {
      setIsValidEmail(validateEmail(val));
    } else {
      setIsValidEmail(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail || !email || !name || !message) return;
    
    setFormState('submitting');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          service_requested: selectedService,
          message
        })
      });

      if (res.ok) {
        setFormState('success');
        setTimeout(() => {
          setFormState('idle');
          setName('');
          setEmail('');
          setMessage('');
          setSelectedService('');
        }, 3000);
      } else {
        console.error('Failed to submit form');
        setFormState('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormState('error');
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email Us', value: 'hello@infysonic.com', href: 'mailto:hello@infysonic.com' },
    { icon: MapPin, label: 'Visit Us', value: 'Medway, Massachusetts, USA', href: '#' },
  ];

  return (
    <>
      <Helmet>
        <title>Infysonic | IT Consulting</title>
        <meta name="description" content="Get in touch with Infysonic for professional IT consulting, software development, and enterprise digital solutions. We are a US-based firm in Massachusetts." />
      </Helmet>
      <section id="contact" className="py-24 md:py-32 px-6 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f908_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f908_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-blue/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-brand-purple/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 border border-brand-blue/20 mb-6">
              <span className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em]">
                Get in Touch
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-[1] font-display">
              Ready to scale{' '}
              <span className="text-gradient-brand">your business?</span>
            </h2>
            
            <p className="text-lg text-brand-slate mb-10 leading-relaxed max-w-md font-medium">
              Have a project in mind? Let&apos;s discuss how we can help you achieve 
              your digital goals with our modern IT solutions.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="flex items-center gap-5 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5 hover:border-slate-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-purple group-hover:border-transparent transition-all duration-300">
                    <item.icon className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-brand-slate uppercase tracking-[0.15em] mb-0.5">{item.label}</div>
                    <div className="text-sm font-bold text-brand-dark">{item.value}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="p-8 md:p-10 bg-white rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-100 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">Message Sent!</h3>
                  <p className="text-brand-slate">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5 relative z-10"
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name Field with Floating Label */}
                    <div className="relative">
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="peer w-full px-4 pt-6 pb-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-brand-dark placeholder-transparent"
                        placeholder="Full Name"
                      />
                      <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        name || focusedField === 'name'
                          ? 'top-2 text-[10px] font-bold text-brand-blue uppercase tracking-wider'
                          : 'top-1/2 -translate-y-1/2 text-sm text-brand-slate'
                      }`}>
                        Full Name
                      </label>
                    </div>
                    
                    {/* Email Field with Floating Label */}
                    <div className="relative">
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`peer w-full px-4 pt-6 pb-2 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 transition-all text-brand-dark placeholder-transparent ${
                          !isValidEmail 
                            ? 'border-red-400 focus:ring-red-200 focus:border-red-400' 
                            : 'border-slate-200 focus:ring-brand-blue/20 focus:border-brand-blue'
                        }`}
                        placeholder="Email Address"
                      />
                      <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        email || focusedField === 'email'
                          ? `top-2 text-[10px] font-bold uppercase tracking-wider ${!isValidEmail ? 'text-red-500' : 'text-brand-blue'}`
                          : 'top-1/2 -translate-y-1/2 text-sm text-brand-slate'
                      }`}>
                        Email Address
                      </label>
                      {!isValidEmail && (
                        <motion.p 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-[10px] text-red-500 font-semibold mt-1 ml-1"
                        >
                          Please enter a valid email
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Service Select */}
                  <div className="relative">
                    <select
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 pt-6 pb-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-brand-dark appearance-none cursor-pointer ${
                        !selectedService ? 'text-brand-slate' : ''
                      }`}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="web-dev">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="ecommerce">E-commerce Solutions</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="erp">ERP Solutions</option>
                      <option value="ai">AI Solutions</option>
                      <option value="chatbot">Chatbot Development</option>
                      <option value="other">Other</option>
                    </select>
                    <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      selectedService || focusedField === 'service'
                        ? 'top-2 text-[10px] font-bold text-brand-blue uppercase tracking-wider'
                        : 'top-2 text-[10px] font-bold text-brand-slate uppercase tracking-wider'
                    }`}>
                      Service Required
                    </label>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Message Field with Floating Label */}
                  <div className="relative">
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="peer w-full px-4 pt-6 pb-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-brand-dark placeholder-transparent resize-none"
                      placeholder="Your Message"
                    />
                    <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      message || focusedField === 'message'
                        ? 'top-2 text-[10px] font-bold text-brand-blue uppercase tracking-wider'
                        : 'top-4 text-sm text-brand-slate'
                    }`}>
                      Your Message
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState === 'submitting' || !isValidEmail || !email || !name || !message}
                    className="relative w-full py-4 bg-brand-dark text-white rounded-xl font-bold uppercase tracking-widest text-xs overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: formState !== 'submitting' ? 1.01 : 1 }}
                    whileTap={{ scale: formState !== 'submitting' ? 0.99 : 1 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {formState === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
            
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 blur-3xl -z-0" />
          </motion.div>
        </div>
      </div>
      </section>
    </>
  );
}
