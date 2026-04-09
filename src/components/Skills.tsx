import React from 'react';
import { Code2, Database, Server, Cloud, Pyramid, History, Dot, CircleEllipsis, BrainCircuit } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const skills = [
  {
    category: 'Languages',
    icon: <Code2 className="w-6 h-6 text-accent mb-4" />,
    items: ['Javascript', 'Typescript', 'Node.js', 'PHP', 'Go'],
    colSpan: 'md:col-span-2 lg:col-span-2',
    bgClasses: 'bg-gradient-to-br from-zinc-800/80 to-zinc-900/50',
  },
  {
    category: 'Frameworks',
    icon: <Pyramid className="w-6 h-6 text-accent mb-4" />,
    items: ['React.js', 'Express.js', 'Nest.js', 'Vue.js', 'CodeIgniter 3', 'Laravel', 'Yii2'],
    colSpan: 'md:col-span-1 lg:col-span-1',
    bgClasses: 'bg-gradient-to-bl from-zinc-800/80 to-zinc-900/50',
  },
  {
    category: 'Databases',
    icon: <Database className="w-6 h-6 text-accent mb-4" />,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    colSpan: 'md:col-span-1 lg:col-span-1',
    bgClasses: 'bg-zinc-800/50',
  },
  {
    category: 'Cloud',
    icon: <Cloud className="w-6 h-6 text-accent mb-4" />,
    items: ['AWS', 'Azure'],
    colSpan: 'md:col-span-1 lg:col-span-1',
    bgClasses: 'bg-zinc-800/50',
  },
  {
    category: 'Version Control',
    icon: <History className="w-6 h-6 text-accent mb-4" />,
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
    colSpan: 'md:col-span-1 lg:col-span-1',
    bgClasses: 'bg-zinc-800/50',
  },
  {
    category: 'AI Tools',
    icon: <BrainCircuit className="w-6 h-6 text-accent mb-4" />,
    items: ['ChatGPT', 'Claude Code', 'GitHub Copilot', 'Cursor', 'Gemini'],
    colSpan: 'md:col-span-1 lg:col-span-1',
    bgClasses: 'bg-gradient-to-t from-zinc-800/80 to-zinc-900/50',
  },
  {
    category: 'Others',
    icon: <CircleEllipsis className="w-6 h-6 text-accent mb-4" />,
    items: ['Docker', 'Kubernetes', 'Jenkins', 'RabbitMQ', 'Postman', 'Swagger', 'Unit Testing', 'Websocket'],
    colSpan: 'md:col-span-1 lg:col-span-2',
    bgClasses: 'bg-zinc-800/50',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 }
  }
};

export function Skills() {
  return (
    <section className="py-32 relative" id="skills">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-outfit uppercase tracking-wider">Technical Skills</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full opacity-80"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`${skill.colSpan} ${skill.bgClasses} rounded-3xl p-8 border border-zinc-700/50 backdrop-blur-sm hover:border-accent/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-300 flex flex-col group`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="bg-zinc-900/50 p-3 rounded-2xl group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white font-outfit tracking-wide">{skill.category}</h3>
              </div>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mt-auto">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-zinc-400 flex items-center gap-2 font-sans text-sm md:text-base group-hover:text-zinc-300 transition-colors">
                    <Dot className="w-4 h-4 text-accent shrink-0 opacity-70 group-hover:opacity-100" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}