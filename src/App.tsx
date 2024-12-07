import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-zinc-900 text-white">
      <Navigation />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Skills />
      <Contact />
    </div>
  );
}

export default App;