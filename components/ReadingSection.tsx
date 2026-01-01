import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface ReadingSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  variant?: 'dark' | 'darker';
}

export const ReadingSection: React.FC<ReadingSectionProps> = ({ id, title, children, variant = 'dark' }) => {
  const bgClass = variant === 'dark' ? 'bg-slate-900/50' : 'bg-slate-950';
  
  return (
    <section id={id} className={`py-20 ${bgClass} border-t border-slate-900/50`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 border-l-4 border-indigo-500 pl-4">
            {title}
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="prose prose-invert prose-lg text-slate-300 leading-relaxed space-y-6 font-sans">
            {children}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};