import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { HERO_COPY } from '../constants';

const LOG_LINES = [
  { text: "Initializing Grand Neural Agent Core v2.4.0...", color: "text-white" },
  { text: "Loading context: 'Enterprise_Knowledge_Base'...", color: "text-zinc-500" },
  { text: "Connecting to VectorDB (Pinecone)...", color: "text-zinc-500" },
  { text: "Connection established (12ms).", color: "text-emerald-500" },
  { text: "Spawning worker agents: [Research, Analysis, Security]...", color: "text-blue-400" },
  { text: "Validating MCP tool integration...", color: "text-zinc-500" },
  { text: "System operational. Ready for queries.", color: "text-accent" },
];

const Hero: React.FC = () => {
  const [lines, setLines] = useState<typeof LOG_LINES>([]);

  useEffect(() => {
    // Reset lines on mount
    setLines([]);
    
    let delays = 0;
    LOG_LINES.forEach((line, index) => {
      const timeout = Math.random() * 600 + 400; // Random delay
      delays += timeout;
      setTimeout(() => {
        setLines(prev => [...prev, line]);
      }, delays);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none opacity-60 animate-pulse" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-20 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full pl-1 pr-3 py-1 mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default"
        >
          <span className="bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">New</span>
          <span className="text-xs text-text-secondary">Accepting Accelerator Projects</span>
          <ChevronRight className="w-3 h-3 text-text-secondary" />
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter mb-8 leading-[1.1]"
        >
          Deploy Autonomous<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600">
             AI Workforces.
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Production-grade AI infrastructure. Own your code, scale seamlessly, and maintain strict data sovereignty.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors min-w-[180px]">
            Engineer My Solution
          </button>
          <button className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 font-medium rounded-full hover:bg-zinc-800 transition-colors min-w-[180px]">
            View Architecture
          </button>
        </motion.div>

        {/* Live Terminal Preview */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 1 }}
           className="mt-20 mx-auto max-w-3xl bg-[#0c0c0c] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative text-left"
        >
           {/* Terminal Header */}
           <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex space-x-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                 <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
              </div>
              <div className="flex-1 text-center text-[10px] font-mono text-white/20 tracking-widest uppercase">
                 deploy_agent_swarm.sh
              </div>
           </div>

           {/* Terminal Body */}
           <div className="p-6 font-mono text-xs md:text-sm h-64 flex flex-col justify-end items-start space-y-2 bg-black/50 backdrop-blur-sm">
              {lines.map((line, i) => (
                 <div key={i} className={`${line.color} flex items-center`}>
                    <span className="mr-2 opacity-30 select-none">{'>'}</span> {line.text}
                 </div>
              ))}
              <div className="flex items-center text-accent">
                <span className="mr-2 opacity-30 select-none">{'>'}</span>
                <span className="animate-pulse w-2 h-4 bg-accent block"></span>
              </div>
           </div>
           
           {/* Subtle Glow behind */}
           <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;