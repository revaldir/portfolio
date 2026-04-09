import React from 'react';
import { MapPin, Briefcase } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import profileImage from '../../assets/profile.jpg';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Introduction() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-4xl"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-8">
        <motion.div variants={itemVariants} className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-accent shadow-[0_0_30px_rgba(16,185,129,0.2)] shrink-0 group">
          <img
            src={profileImage}
            alt="Muhammad Revaldi Rahman"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 font-outfit">Muhammad Revaldi Rahman</h2>
          <div className="flex flex-wrap items-center gap-6 text-zinc-400 font-sans">
            <span className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-full border border-zinc-700/50">
              <MapPin className="w-4 h-4 text-accent" />
              Jakarta, ID
            </span>
            <span className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-full border border-zinc-700/50">
              <Briefcase className="w-4 h-4 text-accent" />
              Fullstack Engineer
            </span>
          </div>
        </motion.div>
      </div>
      <motion.div variants={itemVariants} className="bg-zinc-800/30 p-6 md:p-8 rounded-3xl border border-zinc-700/50 backdrop-blur-sm">
        <p className="text-zinc-300 text-lg md:text-xl leading-relaxed text-justify font-sans font-light">
          A well-oriented professional who is passionate in solving problems through algorithms and code. Committed in delivering high-quality products and standards backed with proven track records. Skilled in designing and developing backend systems with clean architecture and optimized databases. A highly adaptable, collaborative, and reliable team member who embraces feedback and continuous improvement.
        </p>
      </motion.div>
    </motion.div>
  );
}