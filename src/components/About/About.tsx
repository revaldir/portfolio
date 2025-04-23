import React from 'react';
import { Introduction } from './Introduction';
import { Timeline } from './Timeline';

export function About() {
  return (
    <section className="bg-zinc-900 py-24" id="about">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <Introduction />
        </div>
        <h2 className="text-4xl font-bold text-white mb-12">Professional Experience</h2>
        <Timeline type="work" />
        <h2 className="text-4xl font-bold text-white my-12">Education</h2>
        <Timeline type="education" />
      </div>
    </section>
  );
}