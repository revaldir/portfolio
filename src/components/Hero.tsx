import React from 'react';
import { Terminal, Database, Wrench } from 'lucide-react';
import resumeFile from '../assets/Resume_Revaldi.pdf'

export function Hero() {
  return (
    <section className="min-h-screen bg-zinc-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Halo! Nama saya
              <span className="block text-emerald-500">Muhammad Revaldi Rahman</span>
            </h1>
            <p className="text-zinc-400 text-xl mb-8">
              Software Engineer | Backend Developer | Web Developer
            </p>
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-600 transition duration-300 mr-3">
              <a href={resumeFile} download>Check Out My Latest Resume!</a>
            </button>
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-600 transition duration-300">
              <a href="#contact">Contact Me!</a>
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="grid grid-cols-3 gap-4 w-full max-w-md">
              <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700">
                <Terminal className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-white font-semibold mb-2">API Design</h3>
                <p className="text-zinc-400 text-sm">RESTful expertise</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700">
                <Database className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-white font-semibold mb-2">Database</h3>
                <p className="text-zinc-400 text-sm">SQL & NoSQL solutions</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm border border-zinc-700">
                <Wrench className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-white font-semibold mb-2">Solutions</h3>
                <p className="text-zinc-400 text-sm">Offering technical & non-technical support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}