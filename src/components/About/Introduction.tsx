import React from 'react';
import { MapPin, Briefcase } from 'lucide-react';
import profileImage from '../../assets/profile.jpg';

export function Introduction() {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-6 mb-6">
        <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-emerald-500 shadow-lg shadow-emerald-500/20">
          <img
            src={profileImage}
            alt="Muhammad Revaldi Rahman"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">Muhammad Revaldi Rahman</h2>
          <div className="flex items-center gap-4 text-zinc-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Jakarta, ID
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              Fullstack Engineer
            </span>
          </div>
        </div>
      </div>
      <p className="text-zinc-400 text-lg leading-relaxed mb-8 text-justify">
        Fullstack Engineer with 4 years of hands-on experience, specializing in backend systems and API architecture. Skilled in developing scalable microservices, optimizing database performance, and integrating caching and messaging solutions. Adept across the stack with a passion for clean, maintainable code. Strong collaborator who embraces feedback and continuous learning.
      </p>
    </div>
  );
}