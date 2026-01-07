import React, { useRef, useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Bot, Sparkles } from 'lucide-react';
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
  
  // We use 5 copies to ensure smooth infinite scrolling
  const MULTIPLIER = 5;
  const INFINITE_PAGES = Array(MULTIPLIER).fill(PAGES).flat();
  const PAGE_COUNT = PAGES.length;

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

  // Function to center a specific element
  const centerElement = (element: HTMLElement, behavior: ScrollBehavior = 'smooth') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollLeft = element.offsetLeft - (container.clientWidth / 2) + (element.clientWidth / 2);
    
    container.scrollTo({
      left: scrollLeft,
      behavior: behavior
    });
  };

  // Center active tab whenever it changes (clicked or via URL)
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const allTabs = Array.from(container.children[0].children) as HTMLElement[];
      
      // We want to find the instance of the active tab that is closest to the CENTER of the current scroll view
      // This prevents the carousel from jumping wildly if we have multiple copies
      const centerPoint = container.scrollLeft + (container.clientWidth / 2);
      
      let closestTab = null;
      let minDistance = Infinity;

      // Filter tabs that match the current active ID
      const matchingTabs = allTabs.map((tab, index) => ({ tab, index }))
                                  .filter(({ index }) => INFINITE_PAGES[index].id === activeTab);

      // Find which one is closest to the visual center
      for (const { tab } of matchingTabs) {
        const tabCenter = tab.offsetLeft + (tab.clientWidth / 2);
        const dist = Math.abs(tabCenter - centerPoint);
        if (dist < minDistance) {
          minDistance = dist;
          closestTab = tab;
        }
      }

      // If we found a closest tab, scroll to it.
      // If we didn't (e.g. initial load), fall back to the middle set
      if (closestTab) {
        centerElement(closestTab, 'smooth');
      } else {
         // Fallback for initial load: Scroll to the item in the middle set
         const middleSetIndex = Math.floor(MULTIPLIER / 2) * PAGE_COUNT;
         const targetIndexInPageList = PAGES.findIndex(p => p.id === activeTab);
         if (targetIndexInPageList !== -1) {
             const targetIndex = middleSetIndex + targetIndexInPageList;
             const targetTab = allTabs[targetIndex];
             if (targetTab) {
                 centerElement(targetTab, 'instant'); // Instant for first render
             }
         }
      }
    }
  }, [activeTab]);

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
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none"></div>

        <div 
          ref={scrollContainerRef}
          className="h-full overflow-x-auto scrollbar-hide flex items-center w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex items-center gap-2 px-[50vw]"> 
            {INFINITE_PAGES.map((page, index) => {
              const isActive = activeTab === page.id;
              
              return (
                <button
                  key={`${page.id}-${index}`}
                  onClick={() => onTabChange(page.id)}
                  className={`
                    relative flex-shrink-0 px-6 py-2 rounded-full text-sm font-medium transition-all duration-500
                    ${isActive 
                      ? 'text-white scale-105' 
                      : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
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
        
        {/* Center Marker (Subtle hint) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]"></div>
      </div>
    </div>
  );
};