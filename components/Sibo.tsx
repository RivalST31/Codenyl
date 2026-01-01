import React, { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';
import { SIBO_KNOWLEDGE } from '../constants';

interface SiboProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sibo: React.FC<SiboProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState("Hi! I'm Sibo. How can I help?");
  const [isThinking, setIsThinking] = useState(false);
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [mood, setMood] = useState<'neutral' | 'happy' | 'thinking' | 'confused' | 'talking'>('happy');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen && inputRef.current) {
        setTimeout(() => inputRef.current?.focus(), 500);
    }
  }, [isOpen]);

  // Typewriter effect
  useEffect(() => {
    setDisplayedResponse('');
    if (isThinking) return;

    let i = 0;
    setMood('talking');
    const interval = setInterval(() => {
      if (i < response.length) {
        setDisplayedResponse((prev) => prev + response.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setMood('happy');
      }
    }, 40);
    return () => clearInterval(interval);
  }, [response, isThinking]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsThinking(true);
    setMood('thinking');
    
    // Simulate processing time
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      const match = SIBO_KNOWLEDGE.find(item => 
        item.keywords.some(keyword => lowerInput.includes(keyword))
      );

      if (match) {
        setResponse(match.text);
      } else {
        setResponse("I'm sorry, I don't have knowledge about that specific topic. You can ask me about our Philosophy, Ecosystem, or Origins!");
        setMood('confused');
      }
      
      setIsThinking(false);
      setInput('');
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex items-end justify-end p-4 sm:p-8">
      {/* Backdrop for click-out */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] pointer-events-auto transition-opacity duration-500" onClick={onClose} />
      
      <div className="relative z-10 flex flex-col items-end gap-4 pointer-events-auto">
        
        {/* Thought Bubble */}
        <div className={`
            relative max-w-xs sm:max-w-sm bg-white text-slate-900 p-5 rounded-3xl rounded-br-none shadow-[0_0_30px_rgba(99,102,241,0.3)] 
            transform transition-all duration-500 origin-bottom-right
            ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-20'}
        `}>
            <button 
                onClick={onClose}
                className="absolute -top-3 -left-3 p-2 bg-slate-200 hover:bg-slate-300 text-slate-600 rounded-full transition-colors shadow-sm"
            >
                <X className="w-4 h-4" />
            </button>
            
            <div className="font-display font-medium text-lg leading-relaxed min-h-[3rem]">
                {isThinking ? (
                    <div className="flex gap-1.5 h-6 items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                ) : (
                    displayedResponse
                )}
            </div>
            
            {/* Bubble Tail */}
            <div className="absolute -bottom-2 right-8 w-6 h-6 bg-white rotate-45 transform skew-x-12"></div>
        </div>

        {/* Character Container */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48">
            <div className={`w-full h-full transition-transform duration-700 ease-in-out animate-float-slow`}>
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
                    {/* Hover Glow */}
                    <circle cx="100" cy="100" r="70" fill="#6366f1" fillOpacity="0.15" className="animate-pulse" />
                    
                    {/* Body */}
                    <path d="M100 160C133.137 160 160 133.137 160 100C160 66.8629 133.137 40 100 40C66.8629 40 40 66.8629 40 100C40 133.137 66.8629 160 100 160Z" fill="url(#sibo_paint0_linear)" stroke="#475569" strokeWidth="2"/>
                    <defs>
                        <linearGradient id="sibo_paint0_linear" x1="100" y1="40" x2="100" y2="160" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F8FAFC"/>
                            <stop offset="1" stopColor="#CBD5E1"/>
                        </linearGradient>
                    </defs>

                    {/* Antenna */}
                    <path d="M100 40V20" stroke="#475569" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="100" cy="16" r="6" fill={isThinking ? "#EF4444" : "#39FF14"} className="transition-colors duration-300">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                    </circle>

                    {/* Face Screen */}
                    <rect x="65" y="75" width="70" height="50" rx="14" fill="#1E293B" />
                    
                    {/* Eyes */}
                    <g className="transition-all duration-300">
                        {mood === 'confused' ? (
                             <>
                                <circle cx="85" cy="95" r="5" fill="#38BDF8" />
                                <rect x="105" y="93" width="10" height="4" rx="2" fill="#38BDF8" />
                             </>
                        ) : mood === 'thinking' ? (
                             <>
                                <rect x="80" y="98" width="10" height="4" rx="2" fill="#F472B6" />
                                <rect x="110" y="98" width="10" height="4" rx="2" fill="#F472B6" />
                             </>
                        ) : (
                             /* Normal Eyes with Blink Animation */
                            <>
                                <ellipse cx="82" cy="95" rx="6" ry="8" fill="#38BDF8" className="animate-blink" />
                                <ellipse cx="118" cy="95" rx="6" ry="8" fill="#38BDF8" className="animate-blink" />
                            </>
                        )}
                    </g>

                    {/* Mouth */}
                    {mood === 'talking' && (
                        <path d="M92 112H108" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round">
                            <animate attributeName="d" values="M92 112H108;M92 114H108;M92 112H108" dur="0.2s" repeatCount="indefinite" />
                        </path>
                    )}
                    {mood === 'happy' && <path d="M90 112Q100 118 110 112" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />}
                    {mood === 'neutral' && <line x1="90" y1="114" x2="110" y2="114" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />}
                    
                    {/* Hands */}
                    <circle cx="45" cy="110" r="10" fill="#E2E8F0" stroke="#475569" strokeWidth="2" className="animate-float-delayed" />
                    <circle cx="155" cy="110" r="10" fill="#E2E8F0" stroke="#475569" strokeWidth="2" className="animate-float-delayed" />

                </svg>
            </div>
        </div>

        {/* Input Field */}
        <form onSubmit={handleSubmit} className="w-full max-w-xs sm:max-w-sm relative group">
            <div className="absolute inset-0 bg-indigo-500/20 blur-lg rounded-full group-hover:bg-indigo-500/30 transition-all"></div>
            <div className="relative flex items-center bg-slate-900 border border-slate-700/50 rounded-full shadow-xl overflow-hidden backdrop-blur-md">
                <input 
                    ref={inputRef}
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Sibo..."
                    className="w-full bg-transparent text-white px-6 py-4 focus:outline-none placeholder:text-slate-500"
                />
                <button 
                    type="submit" 
                    disabled={!input.trim() || isThinking}
                    className="mr-2 p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors"
                >
                    <Send className="w-4 h-4" />
                </button>
            </div>
        </form>

      </div>

      <style>{`
        @keyframes blink {
            0%, 90%, 100% { transform: scaleY(1); }
            95% { transform: scaleY(0.1); }
        }
        .animate-blink {
            animation: blink 4s infinite;
            transform-origin: center;
        }
        .animate-float-delayed {
            animation: float 6s ease-in-out infinite;
            animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};