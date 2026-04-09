import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-900/80 backdrop-blur-md shadow-lg shadow-black/20 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-bold text-white font-outfit">
            <span className="text-accent">&lt;</span>
            Reapz
            <span className="text-accent">/&gt;</span>
          </a>

          <div className="hidden md:flex items-center space-x-8 font-sans">
            <a href="#home" className="text-zinc-400 hover:text-accent transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-zinc-400 hover:text-accent transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
            <a href="#skills" className="text-zinc-400 hover:text-accent transition-colors relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-zinc-400 hover:text-accent transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
          </div>

          <button
            className="md:hidden text-white hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-6 space-y-2 font-sans bg-zinc-900/90 backdrop-blur-xl border-t border-zinc-800 rounded-b-2xl mt-4">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-zinc-400 hover:text-accent hover:bg-zinc-800/50 rounded-lg transition-all">Home</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-zinc-400 hover:text-accent hover:bg-zinc-800/50 rounded-lg transition-all">About</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-zinc-400 hover:text-accent hover:bg-zinc-800/50 rounded-lg transition-all">Skills</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-zinc-400 hover:text-accent hover:bg-zinc-800/50 rounded-lg transition-all">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}