import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-zinc-900 text-white relative min-h-screen">
      {/* 
        ========================================================================
        GLOBAL BACKGROUND PATTERN
        Swap 'bg-noise-pattern' below with any of these for a different look:
        - bg-grid-pattern (Subtle tech grid)
        - bg-dot-pattern (Abstract dot matrix)
        - bg-diagonal-pattern (Cyberpunk angled lines)
        - bg-noise-pattern (Film grain texture)
        ========================================================================
      */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0"></div>

      {/* Dynamic Ambient Mesh Glows */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent-color)_0%,transparent_25%)] opacity-10 pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--accent-color)_0%,transparent_25%)] opacity-5 pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col">
        <Navigation />
        <Hero />
        <About />
        {/* <Projects /> */}
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;