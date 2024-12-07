import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section className="bg-zinc-800 py-24" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Connect!</h2>
          <p className="text-zinc-400 mb-12">
            Interested in collaborating or have a project in mind? Let's discuss how we can work together.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:revaldii32@gmail.com" target="_blank" className="text-zinc-400 hover:text-emerald-500 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://github.com/revaldir" target="_blank" className="text-zinc-400 hover:text-emerald-500 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/revaldir/" target="_blank" className="text-zinc-400 hover:text-emerald-500 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}