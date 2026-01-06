import React from 'react';
import { PRODUCTS_CURRENT, PRODUCTS_UPCOMING } from '../constants';
import { Box, Lock, ArrowUpRight, Sparkles } from 'lucide-react';

interface ProductsViewProps {
  onProductClick: (id: string) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ onProductClick }) => {
  return (
    <div className="py-12 space-y-24">
      
      {/* Current Products */}
      <section>
        <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl font-display font-bold text-white tracking-tight">
              Active Modules
            </h2>
            <div className="h-px flex-grow bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS_CURRENT.map((product) => (
            <div 
              key={product.id}
              onClick={() => product.link === '#' ? onProductClick(product.id) : window.open(product.link, '_blank')}
              className="group relative bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden shadow-2xl"
            >
              {/* Internal Spotlight Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Border Gradient Animation */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-transparent group-hover:from-indigo-500/50 group-hover:to-purple-500/50 transition-colors duration-500 -z-10"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                    <div className="p-3.5 bg-slate-950/50 rounded-2xl border border-white/10 group-hover:border-indigo-500/30 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all">
                      <Box className={`w-7 h-7 ${product.id === 'sibo' ? 'text-indigo-400' : 'text-slate-400 group-hover:text-white'}`} />
                    </div>
                    {product.id === 'sibo' && (
                    <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30">
                        <Sparkles className="w-3 h-3" /> FLGSHIP
                    </span>
                    )}
                    {product.link !== '#' && (
                        <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    )}
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${product.id === 'sibo' ? 'sibo-text' : 'text-white'}`}>
                    {product.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 border-l-2 border-slate-800 pl-4 group-hover:border-indigo-500/30 transition-colors flex-grow">
                    {product.description}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-600 group-hover:text-indigo-400 transition-colors uppercase tracking-widest">
                        <span>Initialize</span>
                        <div className="h-px w-8 bg-current opacity-30"></div>
                    </div>
                    {product.link === '#' && <Lock className="w-3 h-3 text-slate-700" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Products */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none"></div>
        <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-500">
            In Development
            </h2>
            <div className="h-px flex-grow bg-slate-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {PRODUCTS_UPCOMING.map((product) => (
            <div 
              key={product.id}
              className="bg-slate-950/30 border border-white/5 border-dashed rounded-2xl p-6 flex items-center justify-between group hover:bg-slate-900/50 transition-colors"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-300 mb-1 flex items-center gap-2">
                  {product.name}
                  <span className="text-[10px] bg-slate-800 text-slate-500 px-2 py-0.5 rounded">WIP</span>
                </h3>
                <p className="text-slate-500 text-sm">
                    {product.description}
                </p>
              </div>
              <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-slate-800 transition-colors">
                <Lock className="w-4 h-4 text-slate-600" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};