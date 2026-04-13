import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ArrowRight, Code, Smartphone, Cloud, Palette, ShoppingCart, Bot, Brain, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../data/services';

const serviceIcons: Record<string, React.ElementType> = {
  'web-development': Code,
  'mobile-app-development': Smartphone,
  'cloud-solutions': Cloud,
  'ui-ux-design': Palette,
  'e-commerce-solutions': ShoppingCart,
  'chatbot-development': Bot,
  'ai-solutions': Brain,
  'erp-solutions': Settings,
};

const Logo = () => (
  <div className="flex items-center gap-2.5 group">
    <img 
      src="/logo.png" 
      alt="Infysonic Logo" 
      className="h-8 w-auto object-contain"
    />
    <span className="text-xl font-black tracking-tighter text-brand-dark font-display group-hover:text-brand-blue transition-colors">
      INFY<span className="text-brand-blue">SONIC</span>
    </span>
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-3 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-md shadow-slate-900/5' 
        : 'py-5 bg-white border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="z-50">
          <Logo />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link 
            to="/" 
            className="relative text-xs font-bold text-slate-700 hover:text-brand-blue transition-colors uppercase tracking-[0.1em] py-2 group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-300" />
          </Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-brand-blue transition-colors uppercase tracking-[0.1em] py-2 group">
              Services 
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`} />
            </button>
            
            {showServices && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[60rem] max-w-[90vw]">
                <div className="bg-white backdrop-blur-xl rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200/50 p-8 grid grid-cols-3 gap-6">
                  <div className="col-span-1 pr-6 border-r border-slate-100 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark mb-4">Our Services</h3>
                      <p className="text-sm text-brand-slate leading-relaxed mb-6">
                        We provide enterprise-grade technology solutions designed to help your business scale securely and efficiently.
                      </p>
                    </div>
                    <Link to="/how-we-work" className="text-sm font-bold text-brand-blue hover:text-brand-dark transition-colors flex items-center gap-2">
                      Explore Our Methodology <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    {servicesData.map((service) => {
                      const Icon = serviceIcons[service.id] || Code;
                      return (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all group/item"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center group-hover/item:bg-brand-blue transition-all duration-300 shadow-sm border border-slate-100">
                            <Icon className="w-5 h-5 text-brand-slate group-hover/item:text-white transition-colors" />
                          </div>
                          <div>
                            <span className="text-sm font-bold text-brand-dark group-hover/item:text-brand-blue transition-colors block mb-1">{service.title}</span>
                            <span className="text-xs text-brand-slate line-clamp-2 leading-relaxed">{service.overview}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link 
            to="/how-we-work" 
            className="relative text-xs font-bold text-brand-slate hover:text-brand-dark transition-colors uppercase tracking-[0.15em] py-2 group"
          >
            How We Work
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-300" />
          </Link>
          <Link 
            to="/#about" 
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="relative text-xs font-bold text-brand-slate hover:text-brand-dark transition-colors uppercase tracking-[0.15em] py-2 group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-300" />
          </Link>
          
          <Link
            to="/contact"
            className="relative ml-4 px-6 py-3 bg-brand-dark text-white rounded-xl font-bold text-[11px] uppercase tracking-[0.1em] overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Project
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <motion.button 
          className="lg:hidden relative z-50 p-2.5 rounded-xl bg-white shadow-lg border border-slate-100 text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="pt-28 px-6 pb-6 h-full overflow-y-auto"
            >
              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <Link to="/" className="text-3xl font-black text-brand-dark tracking-tight">Home</Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link to="/how-we-work" className="text-3xl font-black text-brand-dark tracking-tight">How We Work</Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex flex-col gap-4"
                >
                  <span className="text-[10px] font-black text-brand-slate uppercase tracking-[0.3em]">Services</span>
                  <div className="grid grid-cols-1 gap-2">
                    {servicesData.map((service, index) => {
                      const Icon = serviceIcons[service.id] || Code;
                      return (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                        >
                          <Link
                            to={`/services/${service.id}`}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all"
                          >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-brand-blue" />
                            </div>
                            <span className="text-base font-semibold text-brand-dark">{service.title}</span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link 
                    to="/#about" 
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                        setIsOpen(false);
                      }
                    }}
                    className="text-3xl font-black text-brand-dark tracking-tight"
                  >
                    About
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  className="mt-4"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-brand-dark to-brand-blue text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl"
                  >
                    Start Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
