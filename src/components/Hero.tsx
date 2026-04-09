import React from 'react';
import { Terminal, Database, Wrench } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import resumeFile from '../assets/Resume_Revaldi.pdf';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-24 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1 text-left w-full mt-10 md:mt-0">
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-outfit tracking-tight">
              Halo! Nama saya
              <span className="block text-accent mt-2">Muhammad Revaldi Rahman</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-zinc-400 text-xl md:text-2xl mb-8 font-sans font-light">
              Software Engineer | Backend Developer | Web Developer
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href={resumeFile}
                download
                className="bg-accent text-zinc-900 font-semibold px-8 py-3 rounded-full shadow-[0_0_20px_var(--accent-color)] shadow-accent/40 hover:shadow-accent/60 hover:-translate-y-1 transition-all duration-300"
              >
                Check Out My Latest Resume!
              </a>
              <a
                href="#contact"
                className="bg-zinc-800 border border-zinc-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-zinc-700 transition-colors duration-300"
              >
                Contact Me!
              </a>
            </motion.div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 items-stretch gap-6 w-full max-w-2xl lg:max-w-lg">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-zinc-800/40 p-6 rounded-2xl backdrop-blur-md border border-zinc-700/50 shadow-xl group hover:border-accent/50 transition-all"
              >
                <div className="bg-zinc-900/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Terminal className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-white font-semibold font-outfit text-lg mb-2">API Design</h3>
                <p className="text-zinc-400 text-sm">RESTful expertise</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-zinc-800/40 p-6 rounded-2xl backdrop-blur-md border border-zinc-700/50 shadow-xl group hover:border-accent/50 transition-all"
              >
                <div className="bg-zinc-900/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-white font-semibold font-outfit text-lg mb-2">Database</h3>
                <p className="text-zinc-400 text-sm">SQL & NoSQL solutions</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-zinc-800/40 p-6 rounded-2xl backdrop-blur-md border border-zinc-700/50 shadow-xl group hover:border-accent/50 transition-all"
              >
                <div className="bg-zinc-900/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Wrench className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-white font-semibold font-outfit text-lg mb-2">Solutions</h3>
                <p className="text-zinc-400 text-sm">Tech & non-tech support</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}