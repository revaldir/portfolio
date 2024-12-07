import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'HOSPITA (HIMS)',
    description: 'High-performance distributed caching solution built with Redis and Go',
    tech: ['Go', 'Redis', 'Docker', 'Kubernetes'],
    github: '#',
    live: '#'
  },
  {
    title: 'Event Processing Pipeline',
    description: 'Scalable event processing system using Apache Kafka and Node.js',
    tech: ['Node.js', 'Kafka', 'MongoDB', 'AWS'],
    github: '#',
    live: '#'
  },
  {
    title: 'Authentication Service',
    description: 'Secure authentication microservice with JWT and OAuth2',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    github: '#',
    live: '#'
  }
];

export function Projects() {
  return (
    <section className="bg-zinc-800 py-24" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-zinc-900 rounded-lg p-6 border border-zinc-700 hover:border-emerald-500 transition-all">
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-zinc-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-zinc-800 text-emerald-500 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.live} className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}