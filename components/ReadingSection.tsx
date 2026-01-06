import React from 'react';

interface TextViewProps {
  title: string;
  content: string[];
}

export const TextView: React.FC<TextViewProps> = ({ title, content }) => {
  return (
    <div className="max-w-4xl mx-auto py-16">
        <div className="text-center mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 blur-[50px] rounded-full"></div>
            <h2 className="relative font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                {title}
            </h2>
            <div className="flex items-center justify-center gap-4">
               <div className="h-px w-16 bg-gradient-to-l from-indigo-500 to-transparent"></div>
               <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest">System Log 001</div>
               <div className="h-px w-16 bg-gradient-to-r from-indigo-500 to-transparent"></div>
            </div>
        </div>
      
      <div className="grid grid-cols-1 gap-8">
        {content.map((paragraph, index) => (
          <div key={index} className={`
            group relative p-8 rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:bg-slate-900/60
            ${index === 0 ? 'border-l-4 border-l-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.1)]' : 'hover:border-white/10'}
          `}>
             {/* Decorative Corner */}
             <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-indigo-500/30 rounded-tr-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
             
             <p className={`text-lg md:text-xl leading-relaxed ${index === 0 ? 'text-indigo-50 font-medium' : 'text-slate-400 font-light'}`}>
                {paragraph}
             </p>
             
             {/* Index Number */}
             <div className="absolute -left-12 top-1/2 -translate-y-1/2 font-mono text-xs text-slate-800 opacity-0 md:opacity-100 hidden md:block">
               {(index + 1).toString().padStart(2, '0')}
             </div>
          </div>
        ))}
      </div>

      <div className="mt-24 flex items-center justify-center gap-4 opacity-40">
        <div className="h-px w-24 bg-slate-700"></div>
        <div className="font-mono text-[10px] text-slate-500 tracking-[0.2em]">END OF RECORD</div>
        <div className="h-px w-24 bg-slate-700"></div>
      </div>
    </div>
  );
};