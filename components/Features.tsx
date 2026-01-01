import React from 'react';
import { FEATURES } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
                Engineered for Impact
            </h3>
            <p className="text-slate-400 text-lg">
                We don't just write code. We architect solutions that drive growth, ensure security, and delight users at every touchpoint.
            </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100} threshold={0.2}>
              <div className="h-full p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300 group">
                <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-indigo-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};