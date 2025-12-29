import React from 'react';
import { SERVICES, TECH_STACK } from '../constants';

const ServiceGrid: React.FC = () => {
  const getLogo = (name: string) => {
    const tech = TECH_STACK.find(t => t.name === name || name.includes(t.name));
    return tech ? tech.logo : null;
  };

  return (
    <section id="solutions" className="py-32 bg-black relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Core Capabilities</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-xl font-light">
            Architected for specific, high-value technical outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className={`group relative p-10 rounded-3xl bg-surface border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-accent/10 ${service.gridArea}`}
            >
               {/* Ambient Glow on Hover */}
               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-white border border-white/5">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-8 text-lg font-light">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.techStack.map((tech) => {
                    const logo = getLogo(tech);
                    return (
                      <span 
                        key={tech} 
                        className="flex items-center space-x-2 px-3 py-1.5 text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-full cursor-default"
                      >
                        {logo && (
                           <div 
                            className="w-3 h-3 bg-white"
                            style={{
                              maskImage: `url(${logo})`,
                              WebkitMaskImage: `url(${logo})`,
                              maskSize: 'contain',
                              WebkitMaskSize: 'contain',
                              maskRepeat: 'no-repeat',
                              WebkitMaskRepeat: 'no-repeat',
                              maskPosition: 'center',
                              WebkitMaskPosition: 'center',
                            }}
                          />
                        )}
                        <span>{tech}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;