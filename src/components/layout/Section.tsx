import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
};