import React from 'react';
import { Brain, Github, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 text-white font-medium tracking-tight mb-6">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                 <Brain className="w-3 h-3 text-black" />
              </div>
              <span>{COMPANY_NAME}</span>
            </div>
            <p className="text-text-secondary max-w-sm mb-8 font-light">
              Engineered for the enterprise. Building the autonomous systems that will power the next decade.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-text-secondary hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-text-secondary font-light">
              <li><a href="#" className="hover:text-white transition-colors">Agentic Workflows</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise RAG</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Secure Fine-Tuning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-text-secondary font-light">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-secondary font-light">
          <p>&copy; {new Date().getFullYear()} Grand Neural. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;