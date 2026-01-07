import React, { useState, useEffect } from 'react';
import { ChevronDown, Link as LinkIcon, HelpCircle } from 'lucide-react';
import { FAQ_SECTIONS } from '../constants';

export const FAQView: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  // Deep linking handling
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // Find which section and question this hash belongs to
      for (let i = 0; i < FAQ_SECTIONS.length; i++) {
        const section = FAQ_SECTIONS[i];
        const questionIdx = section.items.findIndex((_, idx) => `q-${i}-${idx}` === hash);
        if (questionIdx !== -1) {
          setOpenSection(section.title);
          setOpenQuestion(hash);
          
          // Scroll to element after a slight delay to allow render and transition start
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 400);
          break;
        }
      }
    } else {
        // Open first section by default
        setOpenSection(FAQ_SECTIONS[0].title);
    }
  }, []);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
    // Update URL hash without scrolling
    window.history.replaceState(null, '', `#${id}`);
  };

  const copyLink = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    // Visual feedback could be added here
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-indigo-400" />
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Honest answers. No marketing fluff. <br/>
          Understand exactly what Codenyl is and how it works.
        </p>
      </div>

      <div className="space-y-6">
        {FAQ_SECTIONS.map((section, sectionIdx) => (
          <div 
            key={section.title}
            className="border border-slate-800 rounded-2xl bg-slate-900/30 overflow-hidden transition-all duration-300 hover:border-slate-700"
          >
            <button 
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <h3 className="text-xl font-bold text-slate-200">{section.title}</h3>
              <ChevronDown 
                className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openSection === section.title ? 'rotate-180' : ''}`} 
              />
            </button>

            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${openSection === section.title ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-6 pb-6 pt-0 space-y-3">
                {section.items.map((item, itemIdx) => {
                    const id = `q-${sectionIdx}-${itemIdx}`;
                    const isOpen = openQuestion === id;
                    
                    return (
                        <div 
                            key={id} 
                            id={id}
                            className={`rounded-xl transition-colors duration-200 ${isOpen ? 'bg-slate-800/50' : 'hover:bg-slate-800/30'}`}
                        >
                            <button
                                onClick={() => toggleQuestion(id)}
                                className="w-full text-left p-4 pr-12 relative group"
                            >
                                <span className={`font-medium transition-colors ${isOpen ? 'text-indigo-300' : 'text-slate-300 group-hover:text-slate-200'}`}>
                                    {item.q}
                                </span>
                                <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div 
                                        onClick={(e) => copyLink(e, id)}
                                        className="p-1 hover:bg-slate-700 rounded text-slate-500 hover:text-indigo-400"
                                        title="Copy link to this question"
                                    >
                                        <LinkIcon className="w-3.5 h-3.5" />
                                    </div>
                                </div>
                            </button>
                            <div className={`
                                overflow-hidden transition-all duration-300 px-4
                                ${isOpen ? 'max-h-[800px] pb-4 opacity-100' : 'max-h-0 opacity-0'}
                            `}>
                                <p className="text-slate-400 leading-relaxed border-t border-slate-700/50 pt-3 text-sm md:text-base">
                                    {item.a}
                                </p>
                            </div>
                        </div>
                    );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center pt-8 border-t border-white/5">
        <p className="text-slate-500 text-sm">
            Still have questions? Check the <a href="#/policies" className="text-indigo-400 hover:underline">Policies</a> or explore the <a href="#/products" className="text-indigo-400 hover:underline">Ecosystem</a>.
        </p>
      </div>
    </div>
  );
};