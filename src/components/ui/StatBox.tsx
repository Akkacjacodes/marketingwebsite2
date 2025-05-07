import React from 'react';

interface StatBoxProps {
  text: string;
}

export const StatBox: React.FC<StatBoxProps> = ({ text }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-600">
      <p className="text-lg md:text-xl font-medium text-gray-800">{text}</p>
    </div>
  );
};