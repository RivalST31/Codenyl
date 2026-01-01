import React from 'react';
import { TESTIMONIALS } from '../constants';
import { ScrollReveal } from './ScrollReveal';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 overflow-hidden relative">
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
            <div className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
                Trusted by Innovators
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Join the hundreds of companies that have elevated their digital presence with Codenyl.
            </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 h-full flex flex-col justify-between">
                <div>
                    <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                        ))}
                    </div>
                    <blockquote className="text-lg text-slate-300 leading-relaxed mb-8">
                    "{testimonial.quote}"
                    </blockquote>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full ring-2 ring-indigo-500/20"
                  />
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-indigo-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};