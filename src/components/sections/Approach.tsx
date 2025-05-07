import React from 'react';
import { Section } from '../layout/Section';
import { ApproachBox } from '../ui/ApproachBox';

export const Approach: React.FC = () => {
  const approaches = [
    {
      title: "Industry-Specific Content",
      points: [
        "Focus on metrics buyers care about (CAC payback, NRR, security reviews)",
        "Address implementation issues that cause churn",
        "No buzzwords - we write like you"
      ]
    },
    {
      title: "Reputation-First",
      points: [
        "Start with your expertise, not templates",
        "Build thought leadership before selling",
        "No fake engagement or connection spam"
      ]
    },
    {
      title: "B2B Distribution",
      points: [
        "Target decision-makers (60-100+ profiles)",
        "Comment on posts where buyers gather",
        "LinkedIn-to-email conversion to capture and nurture leads"
      ]
    }
  ];

  return (
    <Section>
      <div className="fade-in-element">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What Makes Our Approach Different
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <ApproachBox 
              key={index} 
              title={approach.title} 
              points={approach.points} 
            />
          ))}
        </div>
      </div>
    </Section>
  );
};