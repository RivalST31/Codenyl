import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const stats = [
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '<100ms', label: 'API Latency' },
    { value: '500+', label: 'Projects Shipped' },
    { value: '24/7', label: 'Support Coverage' },
];

export const Stats: React.FC = () => {
    return (
        <section className="py-20 border-y border-slate-900 bg-slate-950/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <ScrollReveal key={index} delay={index * 100} direction="up">
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">{stat.value}</div>
                                <div className="text-slate-500 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}