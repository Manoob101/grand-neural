import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { COMPANY_NAME, NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform-gpu ${isScrolled ? 'pt-4' : 'pt-8'}`}>
        <div 
          className={`
            max-w-5xl mx-auto px-6 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform-gpu
            ${isScrolled 
              ? 'bg-white/[0.02] backdrop-blur-2xl backdrop-saturate-150 rounded-full py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]' 
              : 'bg-transparent py-0'
            }
          `}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 text-white font-medium tracking-tight">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/5">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium tracking-tight">Grand Neural</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="px-4 py-2 text-xs font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-full"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <a href="#contact" className="px-5 py-2 text-xs font-medium bg-white text-black hover:bg-zinc-200 transition-all rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                Book Strategy
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-3xl md:hidden flex items-center justify-center">
          <div className="flex flex-col items-center space-y-8">
             {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-2xl font-medium text-white/90 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;