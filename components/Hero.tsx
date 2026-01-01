import React, { useEffect, useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ArrowDown } from 'lucide-react';

const CODE_FRAGMENTS = [
  "console.log('Hello World');",
  "import { Future } from 'codenyl';",
  "while (learning) { build(); }",
  "git commit -m 'progress'",
  "npm install solution",
  "<div>Codenyl</div>",
  "if (useful) { keep(); }",
  "const community = new Set();",
  "return undefined;",
  "404 not found",
  "=> arrow_function",
  "background: #000;",
  "await new Promise(resolve => ...)",
  "class Vision extends Reality {}",
];

const FloatingCode = ({ text, delay, duration, left, top }: any) => (
  <div 
    className="absolute font-mono text-sm whitespace-nowrap pointer-events-none select-none z-0 hover:text-indigo-400 transition-colors duration-300"
    style={{ 
      left: `${left}%`, 
      top: `${top}%`,
      animation: `float-up ${duration}s linear infinite, twinkle 4s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      color: `rgba(148, 163, 184, ${Math.random() * 0.3 + 0.1})`, // Random opacity slate-400
    }}
  >
    {text}
  </div>
);

export const Hero: React.FC = () => {
  const [codeElements, setCodeElements] = useState<any[]>([]);

  useEffect(() => {
    const elements = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      text: CODE_FRAGMENTS[Math.floor(Math.random() * CODE_FRAGMENTS.length)],
      delay: Math.random() * -20, // Negative delay to start mid-animation
      duration: 15 + Math.random() * 20,
      left: Math.random() * 100,
      top: 100 + Math.random() * 40, 
    }));
    setCodeElements(elements);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      
      {/* Dynamic Background */}
      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-140vh) rotate(10deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.6; }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(99, 102, 241, 0.2); }
          50% { text-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
        }
      `}</style>
      
      <div className="absolute inset-0 overflow-hidden">
        {codeElements.map((el) => (
          <FloatingCode key={el.id} {...el} />
        ))}
        {/* Subtle gradient blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        
        <ScrollReveal delay={0}>
          <div className="relative group cursor-default">
            <h1 
              className="font-display text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 animate-float-slow"
              style={{ animation: 'float-slow 6s ease-in-out infinite, glow 4s ease-in-out infinite' }}
            >
              Codenyl
            </h1>
            {/* Hover effect glow */}
            <div className="absolute -inset-8 bg-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 font-medium mb-8 tracking-wide animate-shimmer bg-[length:200%_auto]">
            A Community Built on Use, Not Noise
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="prose prose-invert prose-lg max-w-none text-slate-400 leading-relaxed space-y-6">
            <p className="hover:text-slate-200 transition-colors duration-500 selection:bg-indigo-500/40">
              Codenyl is a community where people work together to make technology that helps solve problems. The people who made Codenyl think that everyone is smart and creative enough to fix their problems. They just need the tools that are easy to use and spaces where they can think and work the way they want to. Codenyl is trying to make this happen by bringing problems and solutions together.
            </p>
            <p className="hidden md:block hover:text-slate-200 transition-colors duration-500 selection:bg-indigo-500/40">
              Codenyl is not about being perfect. Codenyl is about getting things done and making progress, with Codenyl. Codenyl is a place where people can work on Codenyl and see how Codenyl is coming along.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="mt-12">
            <a href="#philosophy" className="group inline-flex items-center text-slate-500 hover:text-white transition-all duration-300 hover:scale-105">
              <span className="mr-2 font-medium">Read our Philosophy</span>
              <div className="p-1 rounded-full border border-slate-700 group-hover:border-white transition-colors">
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};