import React from 'react';

interface ApproachBoxProps {
  title: string;
  points: string[];
}

export const ApproachBox: React.FC<ApproachBoxProps> = ({ title, points }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition-all duration-300 h-full border-t-4 border-blue-600">
      <h3 className="text-xl font-semibold mb-6 text-blue-800">{title}</h3>
      <ul className="space-y-4">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-600 mr-3 mt-1">•</span>
            <span className="text-gray-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};