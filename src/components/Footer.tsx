import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const Logo = () => (
  <div className="flex items-center gap-3 group">
    <div className="relative h-8 flex items-center justify-center">
      <img 
        src="/logo.png" 
        alt="Infysonic" 
        className="h-full w-auto object-contain mix-blend-multiply"
        referrerPolicy="no-referrer"
      />
    </div>
    <span className="text-xl font-black tracking-tighter text-brand-dark font-display">
      INFY<span className="text-brand-blue">SONIC</span>
    </span>
  </div>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-48 pb-16 px-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-brand-blue/5 blur-[120px] rounded-full translate-y-1/2 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          <div className="lg:col-span-1">
            <a href="/">
              <Logo />
            </a>
            <p className="mt-10 text-lg text-brand-slate leading-relaxed mb-12 font-medium max-w-xs">
              Empowering the next generation of industry leaders with 
              modern, scalable, and cost-effective digital solutions.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-dark mb-12">Services</h4>
            <ul className="space-y-6">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="text-sm font-bold text-brand-slate hover:text-brand-blue transition-colors tracking-tight">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-dark mb-12">Company</h4>
            <ul className="space-y-6">
              <li><Link to="/" className="text-sm font-bold text-brand-slate hover:text-brand-blue transition-colors tracking-tight">Home</Link></li>
              <li><Link to="/how-we-work" className="text-sm font-bold text-brand-slate hover:text-brand-blue transition-colors tracking-tight">How We Work</Link></li>
              <li>
                <Link 
                  to="/#about" 
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-sm font-bold text-brand-slate hover:text-brand-blue transition-colors tracking-tight"
                >
                  About Us
                </Link>
              </li>
              <li><Link to="/contact" className="text-sm font-bold text-brand-slate hover:text-brand-blue transition-colors tracking-tight">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-dark mb-12">Contact</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-blue" />
                </div>
                <span className="text-sm text-brand-slate font-bold leading-relaxed">Medway, Massachusetts, USA</span>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-blue" />
                </div>
                <span className="text-sm text-brand-slate font-bold leading-relaxed">hello@infysonic.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-brand-slate text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Infysonic. All rights reserved.
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-6 text-brand-slate hover:text-brand-dark transition-colors text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Back to top
            <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-700 shadow-card">
              <ArrowUp className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
