import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section className="bg-zinc-950/40 py-32 relative" id="contact">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-outfit">Let's Connect!</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full opacity-80 mb-8"></div>
          <p className="text-zinc-400 mb-12 text-lg font-sans">
            Interested in collaborating or have a project in mind? Let's discuss how we can work together.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <motion.a 
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="http://wa.me/6281910278235?text=Hi%20Revaldi!" 
              target="_blank" 
              className="bg-zinc-900/50 p-4 rounded-2xl text-zinc-400 hover:text-accent hover:bg-zinc-900 border border-zinc-700/50 hover:border-accent/50 shadow-lg hover:shadow-accent/20 transition-all"
            >
              <Phone className="w-8 h-8" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:revaldii32@gmail.com" 
              target="_blank" 
              className="bg-zinc-900/50 p-4 rounded-2xl text-zinc-400 hover:text-accent hover:bg-zinc-900 border border-zinc-700/50 hover:border-accent/50 shadow-lg hover:shadow-accent/20 transition-all"
            >
              <Mail className="w-8 h-8" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/revaldir" 
              target="_blank" 
              className="bg-zinc-900/50 p-4 rounded-2xl text-zinc-400 hover:text-accent hover:bg-zinc-900 border border-zinc-700/50 hover:border-accent/50 shadow-lg hover:shadow-accent/20 transition-all"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/revaldir/" 
              target="_blank" 
              className="bg-zinc-900/50 p-4 rounded-2xl text-zinc-400 hover:text-accent hover:bg-zinc-900 border border-zinc-700/50 hover:border-accent/50 shadow-lg hover:shadow-accent/20 transition-all"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}