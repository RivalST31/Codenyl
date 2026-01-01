import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Terminal, Volume2, VolumeX, Bot } from 'lucide-react';
import { Button } from './Button';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  onTikoClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onTikoClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeLink, setActiveLink] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active link detection logic
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let currentSection = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is approximately in view (near top of viewport or taking up most of it)
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break; // Stop at the first visible section
          }
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize audio with a reliable URL from Archive.org
    // Using a relaxing piano track
    audioRef.current = new Audio('https://ia802808.us.archive.org/3/items/RelaxingMusic/Relaxing%20Music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;
    
    // Add error listener
    audioRef.current.addEventListener('error', (e) => {
        console.warn("Audio failed to load", e);
    });

    return () => {
        window.removeEventListener('scroll', handleScroll);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsMuted(false);
          }).catch(error => {
            console.error("Audio playback failed:", error);
            // Interactive fallback: sometimes browsers need a specific interaction event stack
          });
        }
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 100; // Height of navbar + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false); // Close mobile menu if open
      setActiveLink(targetId);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="p-2 bg-indigo-600/20 rounded-lg group-hover:bg-indigo-600/40 transition-colors">
                <Terminal className="h-6 w-6 text-indigo-400 group-hover:text-indigo-300" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              Codenyl
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = activeLink === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-slate-400 hover:text-indigo-300'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)] rounded-full animate-pulse" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-4">
            <button 
                onClick={toggleAudio}
                className={`p-2 rounded-full transition-all duration-300 ${isMuted ? 'text-slate-400 hover:text-white' : 'text-indigo-400 bg-indigo-950/30 ring-1 ring-indigo-500/30'}`}
                title={isMuted ? "Play relaxing sound" : "Mute sound"}
            >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5 animate-pulse" />}
            </button>
            <Button size="sm" variant="outline" onClick={onTikoClick} className="flex items-center gap-2 border-indigo-500 text-indigo-300 hover:bg-indigo-500/10">
                <Bot className="w-4 h-4" />
                Tiko
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
             <button 
                onClick={toggleAudio}
                className={`p-2 rounded-full transition-all duration-300 ${isMuted ? 'text-slate-400' : 'text-indigo-400'}`}
            >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 ease-in-out origin-top ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3 shadow-2xl">
          {NAV_LINKS.map((link) => {
             const isActive = activeLink === link.href.substring(1);
             return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive 
                    ? 'text-white bg-indigo-600/20 border-l-2 border-indigo-500 pl-2' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </a>
             );
          })}
          <div className="pt-4 border-t border-slate-800 mt-2">
            <Button fullWidth variant="primary" onClick={() => { setIsOpen(false); onTikoClick && onTikoClick(); }}>
                Chat with Tiko
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};