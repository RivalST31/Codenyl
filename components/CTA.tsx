import React from 'react';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';

export const CTA: React.FC = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900 -z-20"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 -z-10"></div>
            
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <ScrollReveal>
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8">
                        Ready to Build the Extraordinary?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
                        Let's collaborate to bring your vision to life with pixel-perfect precision and robust engineering.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary">Schedule Consultation</Button>
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">View Pricing</Button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};