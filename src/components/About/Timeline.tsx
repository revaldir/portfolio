import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Fullstack Engineer',
    company: 'AIDO Health',
    duration: '2023 - Present',
    description: 'Contributing in the development of a HIMS (Hospital Information and Management System). Play a pivotal role in the development and maintenance of Hospital Administration features, including Finance and Accounting modules, ensuring accuracy and compliance with industry standards.',
    technologies: ['Node.js', 'Express.js', 'Nest.js', 'React.js', 'PostgreSQL', 'RabbitMQ', 'Redis', 'AWS S3', 'Docker', 'Bitbucket']
  },
  {
    type: 'work',
    title: 'Junior Backend Developer',
    company: 'PT. Infomedia Nusantara',
    duration: '2022 - 2023',
    description: 'Developed and maintained several projects using various tech-stack. Notable projects are web-based CTM (Corporate Travel Management), VMS (Vendor Management System), and Aggregator app to integrate with third-parties.',
    technologies: ['PHP', 'CodeIgniter 3', 'Node.js', 'Express.js', 'Nest.js', 'Vue.js', 'MySQL', 'Redis', 'MongoDB', 'Websocket', 'Docker', 'GitLab']
  },
  {
    type: 'work',
    title: 'Junior Web Developer',
    company: "PT. Citraraya Nusatama (d'health)",
    duration: '2021 - 2022',
    description: 'Contributing in the development of a HIMS (Hospital Information and Management System). Play a part in the development and maintainance of the hospital operationals modules, such as patient EMR, patients history, etc.',
    technologies: ['PHP', 'Yii2', 'PostgreSQL', 'Redis', 'Docker', 'GitLab']
  },
  {
    type: 'education',
    title: 'B.S. Computer Science',
    company: 'BINUS University',
    duration: '2022 - Present',
    description: 'Currently researching thesis about System Development and Implementation',
    technologies: []
  },
  {
    type: 'education',
    title: 'A.Sc. Telecommunication Engineering',
    company: 'Telkom University',
    duration: '2018 - 2021',
    description: 'Final Project title: Analysis of Cloud-based MQTT Protocol Implementation on Water Availability Monitoring System with Web and Android',
    technologies: []
  }
];

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-700"></div>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex gap-6">
            <div className="flex-none">
              <div className="w-16 h-16 rounded-full bg-zinc-800 border-4 border-zinc-900 flex items-center justify-center relative z-10">
                {exp.type === 'work' ? (
                  <Briefcase className="w-6 h-6 text-emerald-500" />
                ) : (
                  <GraduationCap className="w-6 h-6 text-emerald-500" />
                )}
              </div>
            </div>
            <div className="flex-1 bg-zinc-800/50 rounded-lg p-6 border border-zinc-700">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-emerald-500">{exp.company}</p>
                </div>
                <span className="text-zinc-400">{exp.duration}</span>
              </div>
              <p className="text-zinc-400 mb-4">{exp.description}</p>
              {exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="bg-zinc-900 text-emerald-500 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}