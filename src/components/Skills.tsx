import React from 'react';
import { Code2, Database, Server, Cloud, Pyramid, History, Dot, CircleEllipsis } from 'lucide-react';

const skills = [
  {
    category: 'Languages',
    icon: <Code2 className="w-6 h-6 text-emerald-500" />,
    items: ['Javascript', 'Typescript', 'Node.js', 'PHP', 'Go']
  },
  {
    category: 'Frameworks',
    icon: <Pyramid className="w-6 h-6 text-emerald-500" />,
    items: ['React.js', 'Express.js', 'Nest.js', 'Vue.js', 'CodeIgniter 3', 'Laravel', 'Yii2']
  },
  {
    category: 'Databases',
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
  },
  {
    category: 'Cloud',
    icon: <Cloud className="w-6 h-6 text-emerald-500" />,
    items: ['AWS', 'Azure']
  },
  {
    category: 'Version Control',
    icon: <History className="w-6 h-6 text-emerald-500" />,
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket']
  },
  {
    category: 'Others',
    icon: <CircleEllipsis className="w-6 h-6 text-emerald-500" />,
    items: ['Docker', 'Kubernetes', 'Jenkins', 'RabbitMQ', 'Postman', 'Swagger', 'Unit Testing', 'Websocket']
  },
];

export function Skills() {
  return (
    <section className="bg-zinc-900 py-24" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700">
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-zinc-400 flex items-center gap-2">
                    <Dot className="w-4 h-4 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}