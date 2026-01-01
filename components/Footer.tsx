import React from 'react';
import { Terminal } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-6 w-6 text-indigo-500" />
              <span className="font-display font-bold text-xl text-white">Codenyl</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Crafting digital experiences that merge art with engineering. We build the future, one line of code at a time.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://mathnova.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-medium text-cyan-400 hover:text-cyan-300 hover:underline transition-all"
                >
                  MathBot
                </a>
              </li>
              <li>
                <a 
                  href="https://chefmother.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-medium text-[#E34234] hover:text-[#ff5c4d] hover:underline transition-all"
                >
                  FoodHub
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="font-medium text-[#39FF14] hover:text-[#6aff4d] hover:underline transition-all shadow-neongreen"
                >
                  Games21
                </a>
              </li>
              <li>
                <a 
                  href="https://sibo-beta.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold sibo-text hover:opacity-80 transition-opacity"
                >
                  Sibo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Codenyl Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
             <span className="text-slate-600 text-xs">Designed in React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};