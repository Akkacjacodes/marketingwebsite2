import React from 'react';
import { Section } from '../layout/Section';

export const Problem: React.FC = () => {
  return (
    <Section>
      <div className="fade-in-element">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Why SaaS Founders Miss out on Client Expansion
        </h2>
        
        <div className="space-y-3 text-center mb-16 text-lg md:text-xl">
          <p>SaaS founders are skeptical of LinkedIn.</p>
          <p>They try it,</p>
          <p>see nothing,</p>
          <p>give up.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center">What they say:</h3>
          <ul className="space-y-6 max-w-xl mx-auto">
            {[
              "LinkedIn is marketers talking to marketers",
              "We posted and got nothing",
              "It feels fake",
              "Show me the ROI",
              "We need specialists who know our tech",
              "Too expensive"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-3 text-center text-lg md:text-xl">
          <p>They're right to doubt.</p>
          <p>Most LinkedIn marketing is bad.</p>
          <p className="font-semibold">But data shows:</p>
        </div>
      </div>
    </Section>
  );
};