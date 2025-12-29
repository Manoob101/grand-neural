import React from 'react';
import { TECH_STACK } from '../constants';

const TechTicker: React.FC = () => {
  // Triple the list to ensure smooth infinite scroll without gaps on large screens
  const tickerItems = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <section id="stack" className="py-12 bg-black border-y border-white/5 relative z-30 overflow-hidden">
      
      <div className="flex w-max animate-scroll">
        {tickerItems.map((item, index) => (
          <div 
            key={`${item.name}-${index}`} 
            className="flex items-center space-x-3 px-12 group opacity-40 hover:opacity-100 transition-opacity duration-300"
          >
            {/* CSS Masking for reliable icon coloring - Defaulting to White/Grey */}
            <div 
              className="w-6 h-6 bg-white"
              style={{
                maskImage: `url(${item.logo})`,
                WebkitMaskImage: `url(${item.logo})`,
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            />
            <span className="text-lg font-medium text-white tracking-tight">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechTicker;