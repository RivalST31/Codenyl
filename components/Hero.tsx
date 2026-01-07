import React, { useEffect, useRef } from 'react';
import { Button } from './Button';
import { Network, Activity, Cpu, ArrowRight, Database, Globe } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: string) => void;
}

const CodeRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const chars = '01{}<>?[]!@#$%^&*()_+=CODE';
    const fontSize = 14;
    // Use let for columns so we can update it on resize
    let columns = Math.ceil(width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start above screen randomly
    }

    const draw = () => {
      // Trail effect
      ctx.fillStyle = 'rgba(2, 6, 23, 0.05)'; // Background color (slate-950) with very low opacity
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px 'JetBrains Mono'`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Gradient color effect based on vertical position
        const y = drops[i] * fontSize;
        const opacity = Math.random() * 0.5 + 0.1; // Random opacity
        
        // Randomly select color between indigo and purple
        ctx.fillStyle = Math.random() > 0.5 
          ? `rgba(99, 102, 241, ${opacity})`  // Indigo
          : `rgba(168, 85, 247, ${opacity})`; // Purple

        ctx.fillText(text, i * fontSize, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Recalculate columns and fill new drops if width increased
      const newColumns = Math.ceil(width / fontSize);
      if (newColumns > columns) {
        for (let i = columns; i < newColumns; i++) {
            drops[i] = Math.random() * -100;
        }
      }
      columns = newColumns;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full opacity-30 pointer-events-none mix-blend-screen"
    />
  );
};

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-[75vh] flex flex-col items-center justify-center text-center py-20 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
          <CodeRain />
          {/* 3D-like Glowing Orbs (CSS animated) - keeping these for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] mix-blend-screen animate-blob"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[80px] mix-blend-screen animate-blob animation-delay-2000 ml-20 -mt-20"></div>
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-5xl px-4 flex flex-col items-center">
        
        {/* System Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 hover:bg-white/10 transition-colors cursor-default shadow-lg shadow-indigo-500/10 hover:scale-105 duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-indigo-200 tracking-widest uppercase">System Online // Codenyl OS</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
          One Identity. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 animate-shimmer bg-[length:200%_auto]">
            Infinite Utilities.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Codenyl is the <span className="text-slate-200 font-medium">parent ecosystem</span> where multiple tools, experiments, and products live under a single philosophy.
          <br/><span className="text-sm opacity-60 mt-2 block">Zero Setup. Infinite Potential.</span>
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto mb-16">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => onNavigate('products')}
            className="group w-full sm:w-auto shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] border-indigo-400/20"
          >
            Access Ecosystem
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={() => onNavigate('origin')}
            className="w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10 text-white"
          >
            Read Origin
          </Button>
        </div>

        {/* Feature Grid with Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-5xl">
            {[
              { icon: Network, label: "Single Account", desc: "One login. All apps. No fragmented identities." },
              { icon: Activity, label: "Utility First", desc: "No viral hype. Just tools that solve problems." },
              { icon: Database, label: "System Core", desc: "Unified data stream across all your activities." }
            ].map((feature, i) => (
              <div key={i} className="group relative p-6 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md hover:bg-slate-800/60 transition-all duration-300 text-left overflow-hidden">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors">
                        <feature.icon className="w-6 h-6 text-indigo-400" />
                        </div>
                        <span className="font-bold text-lg text-slate-200">{feature.label}</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                  </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};