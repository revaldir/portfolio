import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    type: 'work',
    title: 'Fullstack Engineer',
    company: 'Sociolla',
    duration: 'Oct 2025 - Present',
    descriptions: [
      'Contributed to the development of an ERP system used by finance team'
    ],
    technologies: ['Node.js', 'Express.js', 'Vue.js', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS S3', 'Docker', 'Bitbucket']
  },
  {
    type: 'work',
    title: 'Fullstack Engineer',
    company: 'AIDO Health',
    duration: 'Dec 2023 - Oct 2025',
    descriptions: [
      'Contributed to the development of a Hospital Information System (HIS) that is successfully deployed across 10+ hospitals and 200+ clinics, streamlining operations and improving patient care delivery',
      'Played a pivotal role in the development and maintenance of Hospital Administration features, including Finance, Accounting, and Inventory modules, ensuring accuracy and compliance with industry standards',
      'Optimized data retrieval processes by generating and fine-tuning complex queries and reports, enabling effective decision-making from large-scale relational databases',
      'Implemented various mechanisms to comply with complex processes that helped reduce the API response time significantly'
    ],
    technologies: ['Node.js', 'Express.js', 'Nest.js', 'React.js', 'PostgreSQL', 'RabbitMQ', 'Redis', 'AWS S3', 'Docker', 'Bitbucket']
  },
  {
    type: 'work',
    title: 'Junior Backend Developer',
    company: 'PT. Infomedia Nusantara',
    duration: 'Apr 2022 - Nov 2023',
    descriptions: [
      'Contributed to the development and maintenance of a web-based Corporate Travel Management (CTM) system that is widely used by 5+ state-owned companies',
      'Developed an aggregator application that integrated CTM with multiple third-party travel agencies to get the latest price and availability',
      'Successfully upgraded the CTM system from a monolith system to microservices using newer technology with other team members',
      'Contributed to the development of a Vendor Management System (VMS) that is successfully deployed to a state-owned company'
    ],
    technologies: ['PHP', 'CodeIgniter', 'Node.js', 'Express.js', 'Nest.js', 'Vue.js', 'MySQL', 'Redis', 'MongoDB', 'Websocket', 'Minio', 'Docker', 'GitLab']
  },
  {
    type: 'work',
    title: 'Junior Web Developer',
    company: "PT. Citraraya Nusatama",
    duration: 'Jun 2021 - Apr 2022',
    descriptions: [
      'Contributed to the development of a web-based Hospital Information System (HIS), known as dhealth, that is deployed and used by 15+ hospitals',
      `Played an important role in developing and maintaining the main services module, such as handling patients' EMR, doctors' and nurses' diagnosis`,
      `Successfully developed a patients' documents monitoring feature that can be monitored and updated in real time`,
    ],
    technologies: ['PHP', 'Yii2', 'jQuery', 'PostgreSQL', 'Redis', 'Websocket', 'GitLab']
  },
];

const educations = [
  {
    type: 'education',
    title: 'B.S. Computer Science',
    company: 'BINUS University',
    duration: '2022 - 2025',
    descriptions: [
      'GPA: 3.56',
      'Final Project: Development of a Web-based Shipping Management System at PT. Daya Sagara Multiguna',
    ],
    technologies: ['React.js', 'Node.js', 'Nest.js', 'PostgreSQL', 'Docker', 'Minio']
  },
  {
    type: 'education',
    title: 'A.Sc. Telecommunication Engineering',
    company: 'Telkom University',
    duration: '2018 - 2021',
    descriptions: [
      'GPA: 3.93',
      'Final Project: Analysis of Cloud-based MQTT Protocol Implementation on Water Availability Monitoring System with Web and Android',
    ],
    technologies: ['Firebase', 'Microsoft Azure', 'MQTT', 'IoT', 'NodeMCU', 'ESP8266', 'React Native']
  }
]

export function Timeline({ type = 'work' }: { type?: 'work' | 'education' }) {
  const list = type === 'work' ? experiences : educations;

  return (
    <div className="relative">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-zinc-700 to-transparent"
      ></motion.div>

      <div className="space-y-12">
        {list.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative flex gap-6 group"
          >
            <div className="flex-none">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border-4 border-zinc-800 group-hover:border-accent/50 transition-colors duration-300 flex items-center justify-center relative z-10 shadow-lg">
                {exp.type === 'work' ? (
                  <Briefcase className="w-6 h-6 text-accent" />
                ) : (
                  <GraduationCap className="w-6 h-6 text-accent" />
                )}
              </div>
            </div>

            <div className="flex-1 bg-zinc-800/40 rounded-2xl p-6 md:p-8 border border-zinc-700/50 backdrop-blur-sm group-hover:border-accent/30 group-hover:bg-zinc-800/60 transition-all duration-300 shadow-xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white font-outfit">{exp.title}</h3>
                  <p className="text-accent font-medium text-lg mt-1">{exp.company}</p>
                </div>
                <span className="text-zinc-400 font-sans md:text-right bg-zinc-900/80 px-3 py-1 rounded-lg border border-zinc-700 w-max">
                  {exp.duration}
                </span>
              </div>
              <ul className="list-none text-zinc-300 mb-6 space-y-2 font-sans text-sm md:text-base">
                {exp.descriptions && exp.descriptions.map((desc, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent mt-1.5 opacity-50 text-[10px]">▶</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              {exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-700/50">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="bg-zinc-900/80 text-zinc-300 px-3 py-1.5 rounded-lg text-sm border border-zinc-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}