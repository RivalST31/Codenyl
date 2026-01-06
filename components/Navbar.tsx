import React, { useRef, useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Bot, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { PAGES } from '../constants';

interface NavbarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
  onTikoClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, onTikoClick }) => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Create an infinite loop effect by duplicating the pages array
  // We use 5 copies to ensure smooth scrolling in both directions from the center
  const INFINITE_PAGES = [...PAGES, ...PAGES, ...PAGES, ...PAGES, ...PAGES];
  
  // Calculate the starting index (Middle set)
  const START_INDEX = PAGES.length * 2; 

  useEffect(() => {
    audioRef.current = new Audio('https://ia802808.us.archive.org/3/items/RelaxingMusic/Relaxing%20Music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Initial centering scroll
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Find the Home tab in the middle set (index 0 of the middle set)
      const middleSetOffset = START_INDEX;
      const targetIndex = middleSetOffset; // assuming Home is first in PAGES
      
      const targetTab = container.children[0].children[targetIndex] as HTMLElement;
      
      if (targetTab) {
        // Calculate center position
        const scrollLeft = targetTab.offsetLeft - (container.clientWidth / 2) + (targetTab.clientWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'instant' });
      }
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().then(() => setIsMuted(false)).catch(console.error);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  const handleTabClick = (originalId: string, index: number) => {
    onTabChange(originalId);
    
    // Smooth scroll to the clicked item
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const targetTab = container.children[0].children[index] as HTMLElement;
      if (targetTab) {
        const scrollLeft = targetTab.offsetLeft - (container.clientWidth / 2) + (targetTab.clientWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      
      {/* Top Bar: Glassmorphism */}
      <div className="h-16 px-4 flex items-center justify-between w-full bg-slate-950/70 backdrop-blur-xl border-b border-white/5 z-20 relative">
        <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onTabChange('home')}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative p-1.5 bg-slate-900 rounded border border-white/10 group-hover:border-indigo-500/50 transition-colors">
              <Terminal className="h-5 w-5 text-indigo-400" />
            </div>
          </div>
          <span className="font-display font-bold text-xl tracking-wide text-white group-hover:text-indigo-200 transition-colors">Codenyl</span>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleAudio}
            className={`p-2 rounded-full transition-all duration-300 hover:bg-white/5 ${isMuted ? 'text-slate-500' : 'text-indigo-400'}`}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <div className="relative"><Volume2 className="h-5 w-5" /><span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full animate-ping" /></div>}
          </button>
          
          <Button 
            size="sm" 
            variant="ghost" 
            onClick={onTikoClick} 
            className="flex items-center gap-2 text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 rounded-full px-4"
          >
            <Bot className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">Ask Tiko</span>
          </Button>
        </div>
      </div>

      {/* Infinite Carousel Tabs */}
      <div className="h-14 relative bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
        {/* Gradient Fade Masks to create infinity illusion */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none"></div>

        <div 
          ref={scrollContainerRef}
          className="h-full overflow-x-auto scrollbar-hide flex items-center w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex items-center gap-2 px-[50vw]"> 
             {/* Padding helps initial center alignment before JS kicks in */}
            {INFINITE_PAGES.map((page, index) => {
              const isActive = activeTab === page.id;
              
              return (
                <button
                  key={`${page.id}-${index}`}
                  onClick={() => handleTabClick(page.id, index)}
                  className={`
                    relative flex-shrink-0 px-6 py-2 rounded-full text-sm font-medium transition-all duration-500
                    ${isActive 
                      ? 'text-white' 
                      : 'text-slate-500 hover:text-slate-300'
                    }
                  `}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.3)] backdrop-blur-sm animate-pulse-slow"></div>
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {page.label}
                    {isActive && <Sparkles className="w-3 h-3 text-indigo-400 animate-spin-slow" />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Progress Line Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-50"></div>
      </div>
    </div>
  );
};