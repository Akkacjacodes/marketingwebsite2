import React, { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { Problem } from '../components/sections/Problem';
import { Stats } from '../components/sections/Stats';
import { Approach } from '../components/sections/Approach';
import { Offer } from '../components/sections/Offer';
import { Footer } from '../components/layout/Footer';
import { animateOnScroll } from '../utils/animations';

export const Home: React.FC = () => {
  useEffect(() => {
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <main className="font-inter text-gray-800 bg-gradient-to-br from-gray-50 to-gray-100">
      <Hero />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Problem />
        <Stats />
        <Approach />
        <Offer />
      </div>
      <Footer />
    </main>
  );
};