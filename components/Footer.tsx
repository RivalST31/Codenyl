import React from 'react';
import { Terminal, Github, Youtube } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

interface FooterProps {
  activeTab?: string;
}

export const Footer: React.FC<FooterProps> = ({ activeTab }) => {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-900/50 pt-20 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-indigo-900/20 to-transparent blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            
            <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                    <div className="p-1.5 bg-indigo-500/10 rounded border border-indigo-500/20">
                      <Terminal className="h-5 w-5 text-indigo-400" />
                    </div>
                    <span className="font-display font-bold text-2xl text-white tracking-wide">Codenyl</span>
                </div>
                <p className="font-mono text-xs text-slate-500 tracking-wider pl-1">
                    SYSTEM_ID: CDN-ORIGIN // V 2.4.0
                </p>
            </div>

            <div className="flex gap-10">
            {SOCIAL_LINKS.map(link => (
                <a 
                key={link.name} 
                href={link.href} 
                className="group flex items-center gap-2 text-slate-500 hover:text-white transition-all font-medium text-sm"
                >
                <span className="relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all group-hover:w-full"></span>
                </span>
                </a>
            ))}
            </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
             <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
               <p>© {new Date().getFullYear()} Codenyl System.</p>
               {activeTab !== 'home' && (
                 <>
                   <span className="hidden md:inline text-slate-800">|</span>
                   <span className="text-indigo-400/50 font-medium">Built by Aaradhy Mishra</span>
                 </>
               )}
             </div>
             <p className="font-mono opacity-50">NO HYPE. PURE UTILITY.</p>
        </div>
      </div>
    </footer>
  );
};