import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Fullstack Engineer',
    company: 'AIDO Health',
    duration: 'Dec 2023 - Present',
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

export function Timeline({ type = 'work' }) {
  const list = type === 'work' ? experiences : educations;

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-700"></div>
      <div className="space-y-12">
        {list.map((exp, index) => (
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
              <ul className="list-disc list-inside text-zinc-400 mb-4">
                {exp.descriptions && exp.descriptions.map((desc, i) => (
                  <li key={i} className="mb-1">{desc}</li>
                ))}
              </ul>
              {/* <p className="text-zinc-400 mb-4">{exp.description}</p> */}
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