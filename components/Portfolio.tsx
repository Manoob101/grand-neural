import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Accelerators</h2>
            <p className="text-text-secondary max-w-2xl text-xl font-light">
              Production-grade products built by our team.
            </p>
          </div>
          <button className="text-white hover:text-accent font-medium text-sm flex items-center group transition-colors">
            View All Repos <ArrowUpRight className="ml-2 w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index}
              className="group bg-surface rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-white/5 flex flex-col border border-white/5 hover:border-white/10 hover:-translate-y-1"
            >
              {/* Card Header/Image */}
              <div className="h-64 w-full relative overflow-hidden">
                 {/* Image */}
                 <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                 />
                 
                 {/* Gradient Overlay for Text Readability */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                 
                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />

                 <div className="absolute bottom-0 left-0 p-8 z-20">
                    <h3 className="text-3xl font-bold text-white tracking-tight mb-1 drop-shadow-lg">{project.title}</h3>
                    <p className="text-white/90 font-medium drop-shadow-md">{project.subtitle}</p>
                 </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col bg-surface border-t border-white/5 relative z-20">
                <p className="text-text-secondary text-base leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-medium text-white/60 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider bg-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;