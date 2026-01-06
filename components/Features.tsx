import React from 'react';
import { NEWS_UPDATES } from '../constants';

export const NewsView: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="font-display text-3xl font-bold text-white mb-12 text-center">System Updates</h2>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
        {NEWS_UPDATES.map((item, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-[.is-active]:border-indigo-500 group-[.is-active]:bg-indigo-900/20 text-slate-500 group-[.is-active]:text-indigo-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <div className="w-2.5 h-2.5 bg-current rounded-full"></div>
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/60 transition-colors">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-white">{item.title}</div>
                <time className="font-mono text-xs text-indigo-400">{item.date}</time>
              </div>
              <div className="text-slate-400 text-sm">
                {item.content}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};