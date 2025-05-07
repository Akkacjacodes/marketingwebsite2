import React from 'react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';

export const Offer: React.FC = () => {
  return (
    <Section>
      <div id="offer" className="fade-in-element bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Our Offer
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mb-10 text-center text-blue-800">
          Reputation Building Service: Unknown to Industry Voice in 90 Days
        </h3>

        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-10">
          <h4 className="text-xl font-semibold mb-6">You get:</h4>
          <ul className="space-y-4 mb-8">
            {[
              "Industry research (we read everything)",
              "Daily custom posts based on your business",
              "Engagement with 50 target accounts",
              "LinkedIn-to-email profile optimisation",
              "Weekly reports on the progress and results"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-800 text-white p-6 rounded-xl mb-10 text-center">
          <p className="text-lg">
            If we don't double your profile views with decision-makers in 30 days, 
            month two is free.
          </p>
        </div>

        <div className="text-center space-y-4 mb-10">
          <p className="text-xl font-medium">Value: 2x your clientelle in 3 months</p>
          <p className="text-2xl font-bold text-blue-800">Cost: $2,000/month (90-day commitment)</p>
        </div>

        <div className="text-center">
          <Button 
            href="https://forms.gle/AL2xvTjuxSTAPxJq9" 
            target="_blank"
            size="large"
          >
            Receive Introductory Report
          </Button>
        </div>
        
        <div className="mt-12 space-y-6 text-center text-gray-700">
          <p>
            We don't sell content creation. We build the reputation that
            convinces clients.
          </p>
          <p className="font-medium">Others focus on looking good. We focus on getting business.</p>
        </div>
      </div>
    </Section>
  );
};