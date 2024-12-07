import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all ${
      isScrolled ? 'bg-zinc-900/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-white">
            <span className="text-emerald-500">&lt;</span>
            Reapz
            <span className="text-emerald-500">/&gt;</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-zinc-400 hover:text-emerald-500 transition-colors">Home</a>
            <a href="#about" className="text-zinc-400 hover:text-emerald-500 transition-colors">About</a>
            {/* <a href="#projects" className="text-zinc-400 hover:text-emerald-500 transition-colors">Projects</a> */}
            <a href="#skills" className="text-zinc-400 hover:text-emerald-500 transition-colors">Skills</a>
            <a href="#contact" className="text-zinc-400 hover:text-emerald-500 transition-colors">Contact</a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-zinc-400 hover:text-emerald-500 transition-colors">Home</a>
              <a href="#about" className="block px-3 py-2 text-zinc-400 hover:text-emerald-500 transition-colors">About</a>
              {/* <a href="#projects" className="block px-3 py-2 text-zinc-400 hover:text-emerald-500 transition-colors">Projects</a> */}
              <a href="#skills" className="block px-3 py-2 text-zinc-400 hover:text-emerald-500 transition-colors">Skills</a>
              <a href="#contact" className="block px-3 py-2 text-zinc-400 hover:text-emerald-500 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}