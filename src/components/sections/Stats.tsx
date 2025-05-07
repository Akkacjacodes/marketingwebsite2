import React from 'react';
import { Section } from '../layout/Section';
import { StatBox } from '../ui/StatBox';

export const Stats: React.FC = () => {
  const stats = [
    {
      text: "80% of B2B leads from social media come from LinkedIn"
    },
    {
      text: "Buyers spend 3x more time on LinkedIn than vendor websites"
    },
    {
      text: "Companies with LinkedIn presence get 2-3x lower CAC"
    },
    {
      text: "76% of buyers want to talk to people who share insights"
    }
  ];

  return (
    <Section>
      <div className="fade-in-element">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          The LinkedIn Reality for B2B SaaS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatBox key={index} text={stat.text} />
          ))}
        </div>
        
        <div className="space-y-3 text-center text-xl md:text-2xl font-medium">
          <p>It's not LinkedIn.</p>
          <p className="text-blue-700">It's your approach.</p>
        </div>
      </div>
    </Section>
  );
};