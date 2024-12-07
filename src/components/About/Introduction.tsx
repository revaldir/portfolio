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
        A determined and proven Fullstack Engineer with over 3 years of working experience. Specialized in backend development, with a strong track record of creating scalable API endpoints, optimizing databases with complex query generation, implementing containerization, integrating message queues, and leveraging caching mechanisms for improved system performance. Capable and eager to learn and improve in frontend and recent technologies. Comfortable to work together as a team, willing to adapt and learn new things thoroughly. Seeking opportunities to contribute as a Software Engineer, Backend Developer, or Fullstack Developer, delivering impactful solutions that drive business success.
      </p>
    </div>
  );
}