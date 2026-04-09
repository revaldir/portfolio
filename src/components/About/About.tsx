import React from 'react';
import { Introduction } from './Introduction';
import { Timeline } from './Timeline';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="py-32 relative" id="about">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-20">
          <Introduction />
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-outfit">Professional Experience</h2>
          <div className="w-16 h-1 bg-accent rounded-full opacity-80"></div>
        </motion.div>
        
        <Timeline type="work" />
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="my-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-outfit">Education</h2>
          <div className="w-16 h-1 bg-accent rounded-full opacity-80"></div>
        </motion.div>
        
        <Timeline type="education" />
      </div>
    </section>
  );
}